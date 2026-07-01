import { useEffect, useRef, useState } from 'react'
import { QUIZ_TIME_SEC, formatQuizTime } from '../../data/quizConfig'

const URGENT_AT_SEC = 30

export default function QuizTimer({ onExpire }) {
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_SEC)
  const onExpireRef = useRef(onExpire)

  useEffect(() => {
    onExpireRef.current = onExpire
  }, [onExpire])

  useEffect(() => {
    let remaining = QUIZ_TIME_SEC

    const id = setInterval(() => {
      remaining -= 1
      setTimeLeft(remaining)
      if (remaining <= 0) {
        clearInterval(id)
        onExpireRef.current()
      }
    }, 1000)

    return () => clearInterval(id)
  }, [])

  const pct = (timeLeft / QUIZ_TIME_SEC) * 100
  const urgent = timeLeft <= URGENT_AT_SEC

  return (
    <div
      className={`quiz-timer ${urgent ? 'quiz-timer--urgent' : ''}`}
      role="timer"
      aria-live="polite"
      aria-label={`Time remaining: ${formatQuizTime(timeLeft)}`}
    >
      <div className="quiz-timer__ring" style={{ '--pct': pct }}>
        <span className="quiz-timer__value">{formatQuizTime(timeLeft)}</span>
      </div>
      <span className="quiz-timer__label">{urgent ? 'Hurry!' : 'left'}</span>
    </div>
  )
}
