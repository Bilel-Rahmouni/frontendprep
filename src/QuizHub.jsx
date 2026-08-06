import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getQuizMeta, getPart, getLevel, QUIZZES_PER_LEVEL } from '../data/catalog'
import { loadQuestions } from '../data/questions'
import { shuffleQuestions, getExamMeta } from '../lib/examMode'
import { analyzeWeakAreas } from '../lib/weakAreas'
import { useProgress } from '../hooks/useProgress'
import PageMeta from '../components/PageMeta'
import TrackSelector from '../components/quiz/TrackSelector'
import LevelSelector from '../components/quiz/LevelSelector'
import QuizList from '../components/quiz/QuizList'
import QuizRunner from '../components/quiz/QuizRunner'
import QuizResults from '../components/quiz/QuizResults'

export default function QuizHub() {
  const { partId, levelId, quizIndex: quizIndexParam } = useParams()
  const navigate = useNavigate()
  const { saveResult, getQuizProgress, getLevelProgress, getTrackProgress } = useProgress()

  const [answers, setAnswers] = useState(null)
  const [bank, setBank] = useState({ key: null, data: [], error: null })
  const [examSeed, setExamSeed] = useState(0)

  const part = getPart(partId)
  const level = getLevel(levelId)
  const isExam = quizIndexParam === 'exam'
  const quizIndex = isExam ? null : quizIndexParam != null ? Number(quizIndexParam) : null
  const bankKey = partId && levelId ? `${partId}/${levelId}` : null
  const loading = Boolean(bankKey && bank.key !== bankKey && !bank.error)

  const allQuestions = useMemo(
    () => (bank.key === bankKey ? bank.data : []),
    [bank.key, bankKey, bank.data],
  )

  const loadError = bank.key === bankKey ? bank.error : null

  useEffect(() => {
    if (partId && !part) {
      navigate('/quiz', { replace: true })
      return
    }
    if (levelId && partId && part && !level) {
      navigate(`/quiz/${partId}`, { replace: true })
      return
    }
    if (quizIndexParam && quizIndexParam !== 'exam' && partId && levelId) {
      const idx = Number(quizIndexParam)
      if (!Number.isInteger(idx) || idx < 0 || idx >= QUIZZES_PER_LEVEL) {
        navigate(`/quiz/${partId}/${levelId}`, { replace: true })
      }
    }
  }, [partId, levelId, part, level, quizIndexParam, navigate])

  const quiz = useMemo(() => {
    if (!partId || !levelId || quizIndexParam == null) return null
    if (isExam && part && level) {
      return getExamMeta(partId, levelId, part.label, level.label)
    }
    if (quizIndex != null && Number.isInteger(quizIndex) && quizIndex >= 0 && quizIndex < QUIZZES_PER_LEVEL) {
      return getQuizMeta(partId, levelId, quizIndex)
    }
    return null
  }, [partId, levelId, quizIndexParam, isExam, quizIndex, part, level])

  const examQuestions = useMemo(() => {
    if (!isExam || !allQuestions.length) return []
    return shuffleQuestions(allQuestions)
    // examSeed forces a new shuffle when user starts a new mock exam
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExam, allQuestions, examSeed])

  const quizQuestions = useMemo(() => {
    if (isExam) return examQuestions
    if (quizIndex == null || !Number.isInteger(quizIndex) || !allQuestions.length) return []
    const meta = getQuizMeta(partId, levelId, quizIndex)
    return allQuestions.slice(meta.start, meta.end)
  }, [allQuestions, partId, levelId, quizIndex, isExam, examQuestions])

  useEffect(() => {
    if (!bankKey) return

    let cancelled = false

    loadQuestions(partId, levelId)
      .then((qs) => {
        if (!cancelled) setBank({ key: bankKey, data: qs, error: null })
      })
      .catch(() => {
        if (!cancelled) setBank({ key: bankKey, data: [], error: 'Could not load questions.' })
      })

    return () => {
      cancelled = true
    }
  }, [bankKey, partId, levelId])

  function goTracks() {
    navigate('/quiz')
  }

  function startQuiz(index) {
    navigate(`/quiz/${partId}/${levelId}/${index}`)
    setAnswers(null)
  }

  function startExam() {
    setExamSeed((s) => s + 1)
    setAnswers(null)
    navigate(`/quiz/${partId}/${levelId}/exam`)
  }

  function handleFinish(a) {
    setAnswers(a)
  }

  function handleResultsDone(result) {
    if (quiz) {
      saveResult(quiz.id, result)
    }
  }

  const pagePath = useMemo(() => {
    let p = '/quiz'
    if (partId) p += `/${partId}`
    if (levelId) p += `/${levelId}`
    if (quizIndexParam) p += `/${quizIndexParam}`
    return p
  }, [partId, levelId, quizIndexParam])

  const pageTitle = useMemo(() => {
    if (answers !== null && quiz) return `Results — ${quiz.title}`
    if (quiz && quizQuestions.length) return quiz.title
    if (partId && levelId && part && level) return `${part.label} · ${level.label}`
    if (partId && part) return `${part.label} difficulty`
    return 'Quiz tracks'
  }, [answers, quiz, quizQuestions.length, partId, levelId, part, level])

  const pageDescription = useMemo(() => {
    if (isExam && part && level) {
      return `Run a timed ${part.label} ${level.label.toLowerCase()} mock exam with randomized frontend questions.`
    }
    if (quiz && part && level) {
      return `Practice ${part.label} ${level.label.toLowerCase()} quiz ${quizIndex + 1} with 20 timed frontend questions.`
    }
    if (part && level) {
      return `${part.label} ${level.label.toLowerCase()} practice: five timed quizzes, a mock exam, and study guidance for frontend interview prep.`
    }
    if (part) {
      return `${part.label} quiz track with beginner, intermediate, and advanced levels — timed practice, mock exams, and topic coverage.`
    }
    return 'Choose HTML, CSS, React, or general frontend quizzes with timed practice, mock exams, and study guidance.'
  }, [isExam, part, level, quiz, quizIndex])

  const prerenderReady = useMemo(() => {
    if (loadError) return true
    if (!bankKey) return true
    if (loading) return false
    if (quiz && quizQuestions.length === 0) return false
    return true
  }, [loadError, bankKey, loading, quiz, quizQuestions.length])

  // Interactive quiz/exam shells are thin for crawlers — keep them usable but noindex.
  const noindex = Boolean(quizIndexParam)

  const meta = (
    <PageMeta
      title={pageTitle}
      description={pageDescription}
      path={pagePath}
      ready={prerenderReady}
      noindex={noindex}
    />
  )

  if (answers !== null && quiz && quizQuestions.length) {
    const weakAreas = {
      ...analyzeWeakAreas(quizQuestions, answers, partId),
      partId,
      levelId,
    }

    return (
      <>
        {meta}
        <QuizResults
        quiz={quiz}
        questions={quizQuestions}
        answers={answers}
        weakAreas={weakAreas}
        onRetry={() => {
          setAnswers(null)
          if (isExam) setExamSeed((s) => s + 1)
        }}
        onBack={() => {
          setAnswers(null)
          navigate(`/quiz/${partId}/${levelId}`)
        }}
        onSaved={handleResultsDone}
      />
      </>
    )
  }

  if (quiz && quizQuestions.length) {
    return (
      <>
        {meta}
        <QuizRunner
        key={quiz.id}
        quiz={quiz}
        questions={quizQuestions}
        examMode={isExam}
        onFinish={handleFinish}
        onExit={() => navigate(`/quiz/${partId}/${levelId}`)}
      />
      </>
    )
  }

  if (quiz && loading) {
    return (
      <>
        {meta}
        <div className="hub-page hub-page--loading">
        <p className="loading-text">Loading questions…</p>
        </div>
      </>
    )
  }

  if (loadError) {
    return (
      <>
        {meta}
        <div className="hub-page">
        <p className="loading-text loading-text--error">{loadError}</p>
        <button type="button" className="btn btn--ghost" onClick={goTracks}>
          Back to tracks
        </button>
        </div>
      </>
    )
  }

  if (partId && levelId && part && level) {
    const levelProgress = getLevelProgress(partId, levelId)
    return (
      <>
        {meta}
        <QuizList
        partId={partId}
        levelId={levelId}
        partLabel={part.label}
        levelLabel={level.label}
        levelProgress={levelProgress}
        getQuizProgress={getQuizProgress}
        loading={loading}
        onStart={startQuiz}
        onStartExam={startExam}
        onBack={() => navigate(`/quiz/${partId}`)}
      />
      </>
    )
  }

  if (partId && part) {
    return (
      <>
        {meta}
        <LevelSelector
        partLabel={part.label}
        partColor={part.color}
        partId={partId}
        getLevelProgress={getLevelProgress}
        onSelect={(id) => navigate(`/quiz/${partId}/${id}`)}
        onBack={goTracks}
      />
      </>
    )
  }

  return (
    <>
      {meta}
      <TrackSelector getTrackProgress={getTrackProgress} onSelect={(id) => navigate(`/quiz/${id}`)} />
    </>
  )
}
