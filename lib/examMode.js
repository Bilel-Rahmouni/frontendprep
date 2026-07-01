import { QUESTIONS_PER_QUIZ } from '../data/catalog'

export function shuffleQuestions(questions, count = QUESTIONS_PER_QUIZ) {
  const pool = [...questions]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, Math.min(count, pool.length))
}

export function getExamMeta(partId, levelId, partLabel, levelLabel) {
  return {
    id: `${partId}-${levelId}-exam`,
    title: `${partLabel} · ${levelLabel} · Mock exam`,
    partId,
    levelId,
    quizIndex: 'exam',
    mode: 'exam',
    start: 0,
    end: QUESTIONS_PER_QUIZ,
  }
}
