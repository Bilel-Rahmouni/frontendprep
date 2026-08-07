import { useEffect, useRef, useState } from 'react'
import { PASS_THRESHOLD } from '../../data/quizConfig'
import Celebration from './Celebration'
import QuizReview from './QuizReview'
import QuestionCard from './QuestionCard'
import WeakAreasPanel from './WeakAreasPanel'
import ShareResultCard from './ShareResultCard'

function ScoreRing({ pct }) {
  const grade =
    pct >= 90 ? 'Excellent' : pct >= PASS_THRESHOLD ? 'Passed' : pct >= 50 ? 'Fair' : 'Keep going'

  return (
    <div className="score-ring" style={{ '--pct': pct }} role="img" aria-label={`Score ${pct} percent`}>
      <div className="score-ring__inner">
        <span className="score-ring__pct">{pct}%</span>
        <span className="score-ring__grade">{grade}</span>
      </div>
    </div>
  )
}

export default function QuizResults({
  quiz,
  questions,
  answers,
  weakAreas,
  onRetry,
  onBack,
  onSaved,
}) {
  const [screen, setScreen] = useState('score')
  const [reviewIndex, setReviewIndex] = useState(null)

  const score = questions.reduce((acc, q, i) => {
    const a = answers[i]
    return acc + (a !== undefined && a === q.correct ? 1 : 0)
  }, 0)
  const pct = Math.round((score / questions.length) * 100)
  const passed = pct >= PASS_THRESHOLD

  const savedRef = useRef(false)

  useEffect(() => {
    if (savedRef.current) return
    savedRef.current = true
    onSaved?.({ pct, score, total: questions.length })
  }, [onSaved, pct, score, questions.length])

  if (screen === 'review') {
    return (
      <QuizReview
        questions={questions}
        answers={answers}
        onBack={() => setScreen('score')}
      />
    )
  }

  if (reviewIndex !== null) {
    return (
      <div className="quiz-results">
        <button type="button" className="back-link" onClick={() => setReviewIndex(null)}>
          ← Results
        </button>
        <QuestionCard
          question={questions[reviewIndex]}
          questionNumber={reviewIndex + 1}
          total={questions.length}
          selectedIndex={answers[reviewIndex]}
          onSelect={() => {}}
          showAnswer
          disabled
          showBookmark
          titleId={`review-${questions[reviewIndex].id}`}
        />
      </div>
    )
  }

  return (
    <div className="quiz-results">
      <Celebration pct={pct} />

      <p className="eyebrow">Quiz complete</p>
      <h1 className="display-title display-title--sm">Results</h1>
      <p className="quiz-results__subtitle">{quiz.title}</p>

      <div className={`quiz-results__hero ${passed ? 'quiz-results__hero--passed' : ''}`}>
        <ScoreRing pct={pct} />
        <div>
          <p className="quiz-results__score">
            {score} <span>/ {questions.length}</span>
          </p>
          {passed ? (
            <p className="quiz-results__pass-label">Above {PASS_THRESHOLD}%</p>
          ) : (
            <p className="quiz-results__pass-label quiz-results__pass-label--fail">
              Need {PASS_THRESHOLD}% to pass
            </p>
          )}
        </div>
      </div>

      <ShareResultCard
        quiz={quiz}
        pct={pct}
        score={score}
        total={questions.length}
        passed={passed}
      />

      <WeakAreasPanel weakAreas={weakAreas} onRetry={onRetry} />

      <ul className="quiz-results__list">
        {questions.map((q, i) => {
          const a = answers[i]
          const ok = a !== undefined && a === q.correct
          const skipped = a === undefined
          const label = skipped ? 'Skipped' : ok ? 'Correct' : 'Incorrect'

          return (
            <li key={q.id}>
              <button
                type="button"
                className={`result-row ${ok ? 'result-row--ok' : skipped ? 'result-row--skip' : 'result-row--bad'}`}
                aria-label={`Question ${i + 1}: ${label}`}
                onClick={() => setReviewIndex(i)}
              >
                <span className="result-row__num">{i + 1}</span>
                <span className="result-row__icon" aria-hidden>
                  {skipped ? '–' : ok ? '✓' : '✗'}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="quiz-results__actions">
        <button type="button" className="btn btn--primary btn--lg" onClick={() => setScreen('review')}>
          See explanations
        </button>
        <button type="button" className="btn btn--ghost" onClick={onRetry}>
          Retry
        </button>
        <button type="button" className="btn btn--ghost" onClick={onBack}>
          All quizzes
        </button>
      </div>
    </div>
  )
}
