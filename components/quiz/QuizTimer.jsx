import { useEffect, useRef, useState } from 'react'
import { QUIZ_TIME_SEC, formatQuizTime } from '../../data/quizConfig'

const URGENT_AT_SEC = 30

export default function QuizTimer({ onExpire }) {
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_SEC)
  const onExpireRef = useRef(onExpire)
  const endsAtRef = useRef(Date.now() + QUIZ_TIME_SEC * 1000)

  useEffect(() => {
    onExpireRef.current = onExpire
  }, [onExpire])

  useEffect(() => {
    endsAtRef.current = Date.now() + QUIZ_TIME_SEC * 1000
    let finished = false

    const sync = () => {
      if (finished) return
      const remaining = Math.max(0, Math.ceil((endsAtRef.current - Date.now()) / 1000))
      setTimeLeft(remaining)
      if (remaining <= 0) {
        finished = true
        onExpireRef.current()
      }
    }

    sync()
    const id = setInterval(sync, 250)

    const onVisibility = () => {
      if (document.visibilityState === 'visible') sync()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const pct = (timeLeft / QUIZ_TIME_SEC) * 100
  const urgent = timeLeft <= URGENT_AT_SEC

  return (
    <div
      className={`quiz-timer ${urgent ? 'quiz-timer--urgent' : ''}`}
      role="timer"
      aria-live={urgent ? 'polite' : 'off'}
      aria-label={`Time remaining: ${formatQuizTime(timeLeft)}`}
    >
      <div className="quiz-timer__ring" style={{ '--pct': pct }}>
        <span className="quiz-timer__value">{formatQuizTime(timeLeft)}</span>
      </div>
      <span className="quiz-timer__label">{urgent ? 'Hurry!' : 'left'}</span>
    </div>
  )
}
