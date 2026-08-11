/**
 * Metro cannot reliably resolve dynamic imports into scripts/banks/*.mjs.
 * Use the content package static bank imports (Metro-friendly).
 */
export { loadQuestions } from '../../../../packages/content/src/questions.js'
