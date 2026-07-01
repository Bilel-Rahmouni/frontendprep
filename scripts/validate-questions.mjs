import { getHtmlQuestions } from './banks/html.mjs'
import { getCssQuestions } from './banks/css.mjs'
import { getReactQuestions } from './banks/react.mjs'
import { getFrontendQuestions } from './banks/frontend.mjs'
import { shuffleQuestionOptions } from '../lib/shuffleOptions.js'

const loaders = [
  ['html', getHtmlQuestions],
  ['css', getCssQuestions],
  ['react', getReactQuestions],
  ['frontend', getFrontendQuestions],
]
const levels = ['beginner', 'intermediate', 'advanced']

const errors = []
const warnings = []
const allIds = new Set()

for (const [name, fn] of loaders) {
  for (const lvl of levels) {
    const qs = fn(lvl)
    if (qs.length !== 100) errors.push(`${name}/${lvl}: expected 100, got ${qs.length}`)
    const ids = new Set()
    const correctDist = [0, 0, 0, 0]
    qs.forEach((q, i) => {
      if (!q.id) errors.push(`${name}/${lvl}[${i}]: missing id`)
      if (!q.question) errors.push(`${q.id ?? i}: missing question`)
      if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${q.id}: needs 4 options`)
      if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) {
        errors.push(`${q.id}: invalid correct index`)
      } else {
        correctDist[q.correct]++
      }
      if (Array.isArray(q.options)) {
        const normalizedOptions = q.options.map((option) => String(option).trim())
        const uniqueOptions = new Set(normalizedOptions)
        if (uniqueOptions.size !== q.options.length) errors.push(`${q.id}: duplicate option text`)
        if (normalizedOptions.some((option) => /\bBoth [A-D](?: and|\/|,|\b)/i.test(option))) {
          errors.push(`${q.id}: option text references answer letters`)
        }
      }
      const answerText = q.options[q.correct]
      if (!q.options.includes(answerText)) errors.push(`${q.id}: correct index out of sync`)
      if (!q.explanation) errors.push(`${q.id}: missing explanation`)
      if (ids.has(q.id)) errors.push(`duplicate id ${q.id}`)
      ids.add(q.id)
      if (allIds.has(q.id)) errors.push(`duplicate global id ${q.id}`)
      allIds.add(q.id)

      const reshuffled = shuffleQuestionOptions(q)
      if (reshuffled.options[reshuffled.correct] !== answerText) {
        errors.push(`${q.id}: shuffle sanity check failed`)
      }
    })

    const maxShare = Math.max(...correctDist) / qs.length
    if (maxShare > 0.45) {
      warnings.push(
        `${name}/${lvl}: correct index skewed (${correctDist.join('/')}) — run npm run shuffle-banks`,
      )
    }
  }
}

if (warnings.length) {
  console.warn(`Validation warnings (${warnings.length}):`)
  warnings.forEach((w) => console.warn(' -', w))
}

if (errors.length) {
  console.error(`Validation failed (${errors.length} issues):`)
  errors.forEach((e) => console.error(' -', e))
  process.exit(1)
}

console.log('All 1200 questions passed validation.')
