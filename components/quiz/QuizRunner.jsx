import { useCallback, useEffect, useRef, useState } from 'react'
import ProgressBar from '../ProgressBar'
import QuestionCard from './QuestionCard'
import QuizTimer from './QuizTimer'

export default function QuizRunner({ quiz, questions, examMode = false, onFinish, onExit }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeUp, setTimeUp] = useState(false)
  const answersRef = useRef(answers)

  useEffect(() => {
    answersRef.current = answers
  }, [answers])

  const question = questions[current]
  const selectedIndex = answers[current]
  const isLast = current === questions.length - 1
  const titleId = `question-title-${current}`

  const finishQuiz = useCallback(() => {
    onFinish({ ...answersRef.current })
  }, [onFinish])

  const handleTimeUp = useCallback(() => {
    setTimeUp(true)
    onFinish({ ...answersRef.current })
  }, [onFinish])

  const advance = useCallback(() => {
    if (isLast || timeUp) {
      finishQuiz()
      return
    }
    setCurrent((c) => c + 1)
  }, [isLast, timeUp, finishQuiz])

  const handleSelect = useCallback(
    (index) => {
      if (timeUp) return
      setAnswers((prev) => ({ ...prev, [current]: index }))
    },
    [current, timeUp],
  )

  useEffect(() => {
    function onKeyDown(e) {
      if (timeUp || e.metaKey || e.ctrlKey || e.altKey) return
      const target = e.target
      const tagName = target?.tagName?.toLowerCase()
      if (target?.isContentEditable || ['input', 'select', 'textarea'].includes(tagName)) return
      const n = Number(e.key)
      if (n >= 1 && n <= 4 && n <= question?.options?.length) {
        e.preventDefault()
        handleSelect(n - 1)
      }
      if (e.key === 'Enter' && selectedIndex !== undefined) {
        e.preventDefault()
        advance()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [timeUp, question, selectedIndex, handleSelect, advance])

  if (!question) return null

  return (
    <div className="quiz-stage">
      {examMode && (
        <div className="exam-banner" role="status">
          Mock exam — stay until you finish or time runs out
        </div>
      )}

      <div className="quiz-stage__bar">
        {!examMode && (
          <button type="button" className="back-link" onClick={onExit}>
            ← Exit
          </button>
        )}
        {examMode && <span className="quiz-stage__exam-tag">Exam</span>}
        <div className="quiz-stage__meta">
          <span className="quiz-stage__label">{quiz.title}</span>
          <ProgressBar value={current + 1} max={questions.length} label="Progress" />
        </div>
        {!timeUp ? (
          <QuizTimer onExpire={handleTimeUp} />
        ) : (
          <span className="timer-badge timer-badge--over">Time up</span>
        )}
      </div>

      <QuestionCard
        question={question}
        questionNumber={current + 1}
        total={questions.length}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
        showAnswer={false}
        disabled={timeUp}
        titleId={titleId}
      />

      <p className="quiz-stage__keys" aria-hidden>
        Keys: 1–4 select · Enter next
      </p>

      {!timeUp && (
        <footer className="quiz-stage__footer">
          <button type="button" className="btn btn--primary btn--lg" onClick={advance}>
            {isLast ? 'Submit quiz' : 'Next question'}
          </button>
        </footer>
      )}
    </div>
  )
}
