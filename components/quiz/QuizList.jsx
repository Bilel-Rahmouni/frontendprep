import { getQuizzesForLevel, getPart, getLevel } from '../../data/catalog'
import { getQuizTimeLabel, QUESTIONS_PER_QUIZ } from '../../data/quizConfig'

function ProgressBadge({ passed, total }) {
  if (total === 0) return null
  const pct = Math.round((passed / total) * 100)
  return (
    <span className="progress-badge" style={{ '--pct': pct }}>
      {passed}/{total} passed
    </span>
  )
}

export default function QuizList({
  partLabel,
  levelLabel,
  partId,
  levelId,
  levelProgress,
  getQuizProgress,
  loading,
  onStart,
  onStartExam,
  onBack,
}) {
  const quizzes = getQuizzesForLevel(partId, levelId)
  const part = getPart(partId)
  const level = getLevel(levelId)

  return (
    <section className="hub-page">
      <button type="button" className="back-link" onClick={onBack}>
        ← Difficulty
      </button>

      <div className="hub-page__hero hub-page__hero--compact">
        <div className="pill-row">
          <span className="pill" style={{ '--pill-color': part?.color }}>{partLabel}</span>
          <span className="pill pill--soft" style={{ '--pill-color': level?.tone }}>{levelLabel}</span>
          {levelProgress && (
            <ProgressBadge passed={levelProgress.passed} total={levelProgress.total} />
          )}
        </div>
        <h1 className="display-title display-title--sm">Select quiz</h1>
      </div>

      <button
        type="button"
        className="exam-row"
        style={{ '--track-color': part?.color }}
        disabled={loading}
        onClick={onStartExam}
      >
        <span className="exam-row__icon" aria-hidden>⚡</span>
        <span className="exam-row__body">
          <span className="exam-row__title">Mock exam</span>
          <span className="exam-row__meta">Random {QUESTIONS_PER_QUIZ} Q · {getQuizTimeLabel()} · strict</span>
        </span>
        <span className="exam-row__go">Start</span>
      </button>

      <div className="quiz-rows">
        {quizzes.map((quiz, i) => {
          const prog = getQuizProgress?.(quiz.id)
          return (
            <button
              key={quiz.id}
              type="button"
              className={`quiz-row ${prog?.passed ? 'quiz-row--passed' : ''}`}
              style={{ '--track-color': part?.color, '--i': i }}
              onClick={() => onStart(i)}
            >
              <span className="quiz-row__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="quiz-row__title">Quiz {i + 1}</span>
              <span className="quiz-row__meta">
                {QUESTIONS_PER_QUIZ} Q · {getQuizTimeLabel()}
                {prog?.bestPct != null && ` · best ${prog.bestPct}%`}
                {prog?.passed && <span className="quiz-row__pass" aria-label="Passed"> ✓</span>}
              </span>
              <span className="quiz-row__go">Launch</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
