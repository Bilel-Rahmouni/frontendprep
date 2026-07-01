/** Deterministic shuffle so option order is stable per question id */
export function hashId(id) {
  let h = 2166136261
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export function shuffleQuestionOptions(question) {
  const order = [0, 1, 2, 3]
  let seed = hashId(question.id)
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0
    return seed / 4294967296
  }

  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }

  const options = order.map((i) => question.options[i])
  const correct = order.indexOf(question.correct)

  if (correct < 0) {
    throw new Error(`Could not shuffle options for ${question.id}`)
  }

  return { ...question, options, correct }
}

export function shuffleQuestions(questions) {
  return questions.map(shuffleQuestionOptions)
}
