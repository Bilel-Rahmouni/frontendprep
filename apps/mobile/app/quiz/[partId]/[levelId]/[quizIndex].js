import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import {
  formatQuizTime,
  getLevel,
  getPart,
  getQuizMeta,
  PASS_THRESHOLD,
  QUESTIONS_PER_QUIZ,
  QUIZ_TIME_SEC,
  QUIZZES_PER_LEVEL,
} from '@frontendprep/content'
import { useBookmarks } from '../../../../src/hooks/useBookmarks'
import { useProgress } from '../../../../src/hooks/useProgress'
import { getExamMeta, shuffleQuestions } from '../../../../src/lib/examMode'
import { loadQuestions } from '../../../../src/lib/loadQuestions'
import { colors, spacing } from '../../../../src/theme'

function param(value) {
  if (Array.isArray(value)) return value[0]
  return value == null ? '' : String(value)
}

export default function QuizRunnerScreen() {
  const params = useLocalSearchParams()
  const partId = param(params.partId)
  const levelId = param(params.levelId)
  const quizIndexParam = param(params.quizIndex)
  const router = useRouter()
  const isExam = quizIndexParam === 'exam'
  const quizIndex = isExam ? null : Number(quizIndexParam)

  const part = getPart(partId)
  const level = getLevel(levelId)
  const { saveResult } = useProgress()
  const { toggleBookmark, isBookmarked } = useBookmarks()

  const [bank, setBank] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [secondsLeft, setSecondsLeft] = useState(QUIZ_TIME_SEC)
  const [done, setDone] = useState(false)
  const [review, setReview] = useState(false)
  const [savedOnce, setSavedOnce] = useState(false)
  const answersRef = useRef(answers)
  const examSeed = useRef(0)

  useEffect(() => {
    answersRef.current = answers
  }, [answers])

  const quiz = useMemo(() => {
    if (!part || !level) return null
    if (isExam) return getExamMeta(partId, levelId, part.label, level.label)
    if (!Number.isInteger(quizIndex) || quizIndex < 0 || quizIndex >= QUIZZES_PER_LEVEL) return null
    return getQuizMeta(partId, levelId, quizIndex)
  }, [part, level, isExam, partId, levelId, quizIndex])

  const questions = useMemo(() => {
    if (!bank.length || !quiz) return []
    if (isExam) return shuffleQuestions(bank, QUESTIONS_PER_QUIZ)
    return bank.slice(quiz.start, quiz.end)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bank, quiz, isExam, examSeed.current])

  function resetRun() {
    setCurrent(0)
    setAnswers({})
    setSecondsLeft(QUIZ_TIME_SEC)
    setDone(false)
    setReview(false)
    setSavedOnce(false)
    if (isExam) examSeed.current += 1
  }

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    resetRun()
    loadQuestions(partId, levelId)
      .then((qs) => {
        if (!cancelled) {
          setBank(qs)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err?.message || 'Could not load questions.')
          setLoading(false)
        }
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partId, levelId, quizIndexParam])

  const finishQuiz = useCallback(() => {
    setDone(true)
  }, [])

  useEffect(() => {
    if (!done || !quiz || !questions.length || savedOnce) return
    const correct = questions.reduce((n, q, i) => n + (answers[i] === q.correct ? 1 : 0), 0)
    const pct = Math.round((correct / questions.length) * 100)
    setSavedOnce(true)
    saveResult(quiz.id, { pct, score: correct, total: questions.length })
  }, [done, quiz, questions, answers, savedOnce, saveResult])

  useEffect(() => {
    if (loading || error || done || !questions.length) return undefined
    let remaining = QUIZ_TIME_SEC
    setSecondsLeft(remaining)
    const id = setInterval(() => {
      remaining -= 1
      setSecondsLeft(remaining)
      if (remaining <= 0) {
        clearInterval(id)
        finishQuiz()
      }
    }, 1000)
    return () => clearInterval(id)
  }, [loading, error, done, questions.length, finishQuiz, quizIndexParam])

  if (!part || !level || !quiz) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Quiz not found</Text>
        <Pressable style={styles.primary} onPress={() => router.replace('/quiz')}>
          <Text style={styles.primaryText}>Back to tracks</Text>
        </Pressable>
      </View>
    )
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.textH} />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <Pressable
          style={styles.primary}
          onPress={() => {
            setLoading(true)
            setError(null)
            loadQuestions(partId, levelId)
              .then((qs) => {
                setBank(qs)
                resetRun()
                setLoading(false)
              })
              .catch((err) => {
                setError(err?.message || 'Could not load questions.')
                setLoading(false)
              })
          }}
        >
          <Text style={styles.primaryText}>Retry</Text>
        </Pressable>
      </View>
    )
  }

  if (done) {
    const correct = questions.reduce((n, q, i) => n + (answers[i] === q.correct ? 1 : 0), 0)
    const pct = Math.round((correct / questions.length) * 100)
    const passed = pct >= PASS_THRESHOLD

    if (review) {
      return (
        <ScrollView style={styles.root} contentContainerStyle={styles.pad}>
          <Text style={styles.heading}>Review</Text>
          {questions.map((q, i) => {
            const selected = answers[i]
            const ok = selected === q.correct
            const bookmarked = isBookmarked(q.id)
            return (
              <View key={q.id} style={styles.reviewCard}>
                <View style={styles.reviewHead}>
                  <Text style={styles.reviewMeta}>
                    Q{i + 1} · {ok ? 'Correct' : selected == null ? 'Skipped' : 'Incorrect'}
                  </Text>
                  <Pressable onPress={() => toggleBookmark(q.id)} hitSlop={8}>
                    <Text style={styles.bookmark}>{bookmarked ? '★ Saved' : '☆ Save'}</Text>
                  </Pressable>
                </View>
                <Text style={styles.question}>{q.question}</Text>
                <Text style={styles.explanation}>{q.explanation}</Text>
              </View>
            )
          })}
          <Pressable style={styles.primary} onPress={() => setReview(false)}>
            <Text style={styles.primaryText}>Back to results</Text>
          </Pressable>
        </ScrollView>
      )
    }

    return (
      <View style={[styles.root, styles.pad]}>
        <Text style={styles.heading}>Results</Text>
        <Text style={styles.score}>
          {correct}/{questions.length} · {pct}%
        </Text>
        <Text style={[styles.pass, !passed && styles.fail]}>
          {passed ? 'Passed' : 'Keep practicing'}
        </Text>
        <Pressable style={styles.primary} onPress={() => setReview(true)}>
          <Text style={styles.primaryText}>Review answers</Text>
        </Pressable>
        <Pressable style={styles.secondary} onPress={resetRun}>
          <Text style={styles.secondaryText}>Retry</Text>
        </Pressable>
        <Pressable style={styles.secondary} onPress={() => router.back()}>
          <Text style={styles.secondaryText}>Back to quizzes</Text>
        </Pressable>
      </View>
    )
  }

  const q = questions[current]
  if (!q) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>No questions loaded.</Text>
      </View>
    )
  }

  const selected = answers[current]
  const isLast = current === questions.length - 1

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.pad}>
      <View style={styles.top}>
        <Text style={styles.meta}>
          {current + 1}/{questions.length}
        </Text>
        <Text style={[styles.timer, secondsLeft <= 30 && styles.timerUrgent]}>
          {formatQuizTime(secondsLeft)}
        </Text>
      </View>
      <Text style={styles.question}>{q.question}</Text>
      <View style={styles.options}>
        {q.options.map((option, i) => {
          const active = selected === i
          return (
            <Pressable
              key={`${q.id}-${i}`}
              style={[styles.option, active && styles.optionActive]}
              onPress={() => setAnswers((prev) => ({ ...prev, [current]: i }))}
            >
              <Text style={[styles.optionText, active && styles.optionTextActive]}>{option}</Text>
            </Pressable>
          )
        })}
      </View>
      <Pressable
        style={[styles.primary, selected == null && styles.primaryDisabled]}
        disabled={selected == null}
        onPress={() => {
          if (isLast) finishQuiz()
          else setCurrent((c) => c + 1)
        }}
      >
        <Text style={styles.primaryText}>{isLast ? 'Submit quiz' : 'Next question'}</Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  pad: { padding: spacing.lg, paddingBottom: 40, gap: spacing.md },
  center: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.md,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  meta: { fontSize: 13, fontWeight: '600', color: colors.textMuted },
  timer: { fontSize: 16, fontWeight: '700', color: colors.textH, fontVariant: ['tabular-nums'] },
  timerUrgent: { color: colors.error },
  heading: { fontSize: 22, fontWeight: '700', color: colors.textH },
  question: { fontSize: 18, fontWeight: '600', lineHeight: 26, color: colors.textH },
  options: { gap: 10 },
  option: {
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  optionActive: {
    borderColor: colors.textH,
    backgroundColor: colors.bg,
  },
  optionText: { fontSize: 15, lineHeight: 22, color: colors.textH },
  optionTextActive: { fontWeight: '600' },
  primary: {
    backgroundColor: colors.textH,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryDisabled: { opacity: 0.35 },
  primaryText: { color: colors.bg, fontWeight: '600', fontSize: 15 },
  secondary: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  secondaryText: { color: colors.textH, fontWeight: '600', fontSize: 15 },
  score: { fontSize: 32, fontWeight: '700', color: colors.textH },
  pass: { fontSize: 15, fontWeight: '600', color: colors.success },
  fail: { color: colors.textMuted },
  error: { color: colors.textMuted, textAlign: 'center' },
  reviewCard: {
    padding: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    gap: 8,
  },
  reviewHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  reviewMeta: { fontSize: 12, fontWeight: '600', color: colors.textMuted },
  bookmark: { fontSize: 13, fontWeight: '600', color: colors.accent },
  explanation: { fontSize: 14, lineHeight: 21, color: colors.text },
})
