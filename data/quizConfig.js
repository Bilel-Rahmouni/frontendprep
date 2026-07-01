import { QUESTIONS_PER_QUIZ } from './catalog'

/** Total seconds for a full quiz (20 questions) — tight timer */
export const QUIZ_TIME_SEC = 240

export const PASS_THRESHOLD = 80

export function formatQuizTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export function getQuizTimeLabel() {
  const m = Math.floor(QUIZ_TIME_SEC / 60)
  const s = QUIZ_TIME_SEC % 60
  return s === 0 ? `${m} min` : `${m}:${String(s).padStart(2, '0')}`
}

export { QUESTIONS_PER_QUIZ }
