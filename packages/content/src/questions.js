/**
 * Static bank imports — required for Metro / React Native.
 * Web can keep using data/questions.js (dynamic import) or this package.
 */
import { getHtmlQuestions } from '../../../scripts/banks/html.mjs'
import { getCssQuestions } from '../../../scripts/banks/css.mjs'
import { getReactQuestions } from '../../../scripts/banks/react.mjs'
import { getFrontendQuestions } from '../../../scripts/banks/frontend.mjs'

const fnMap = {
  html: getHtmlQuestions,
  css: getCssQuestions,
  react: getReactQuestions,
  frontend: getFrontendQuestions,
}

function asString(value) {
  if (Array.isArray(value)) return value[0]
  return value == null ? '' : String(value)
}

export async function loadQuestions(partId, levelId) {
  const part = asString(partId)
  const level = asString(levelId)
  const fn = fnMap[part]
  if (!fn) return []
  return fn(level)
}
