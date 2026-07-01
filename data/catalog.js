export const PARTS = [
  {
    id: 'html',
    label: 'HTML',
    color: '#e85d04',
    symbol: '</>',
    gradient: 'linear-gradient(135deg, #e85d04 0%, #f48c06 100%)',
  },
  {
    id: 'css',
    label: 'CSS',
    color: '#2563eb',
    symbol: '{}',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
  },
  {
    id: 'react',
    label: 'React',
    color: '#0891b2',
    symbol: '⚛',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #61dafb 100%)',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#16a34a',
    symbol: '◈',
    gradient: 'linear-gradient(135deg, #16a34a 0%, #84cc16 100%)',
  },
]

export const LEVELS = [
  {
    id: 'beginner',
    label: 'Beginner',
    description: 'Core syntax & foundations',
    tone: '#22c55e',
    bars: 1,
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    description: 'Patterns & real-world usage',
    tone: '#f59e0b',
    bars: 2,
  },
  {
    id: 'advanced',
    label: 'Advanced',
    description: 'Senior-level depth & edge cases',
    tone: '#ef4444',
    bars: 3,
  },
]

export const QUESTIONS_PER_QUIZ = 20
export const QUIZZES_PER_LEVEL = 5
export const QUESTIONS_PER_LEVEL = QUESTIONS_PER_QUIZ * QUIZZES_PER_LEVEL

export function getQuizMeta(partId, levelId, quizIndex) {
  const part = PARTS.find((p) => p.id === partId)
  const level = LEVELS.find((l) => l.id === levelId)
  return {
    id: `${partId}-${levelId}-q${quizIndex + 1}`,
    title: `${part?.label} · ${level?.label} · Quiz ${quizIndex + 1}`,
    partId,
    levelId,
    quizIndex,
    start: quizIndex * QUESTIONS_PER_QUIZ,
    end: quizIndex * QUESTIONS_PER_QUIZ + QUESTIONS_PER_QUIZ,
  }
}

export function getQuizzesForLevel(partId, levelId) {
  return Array.from({ length: QUIZZES_PER_LEVEL }, (_, i) =>
    getQuizMeta(partId, levelId, i),
  )
}

export function getPart(partId) {
  return PARTS.find((p) => p.id === partId)
}

export function getLevel(levelId) {
  return LEVELS.find((l) => l.id === levelId)
}
