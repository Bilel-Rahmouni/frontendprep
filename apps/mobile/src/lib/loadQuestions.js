function asString(value) {
  if (Array.isArray(value)) return value[0]
  return value == null ? '' : String(value)
}

const loaders = {
  html: () => import('../../../../scripts/banks/html.mjs'),
  css: () => import('../../../../scripts/banks/css.mjs'),
  react: () => import('../../../../scripts/banks/react.mjs'),
  frontend: () => import('../../../../scripts/banks/frontend.mjs'),
}

const fnMap = {
  html: 'getHtmlQuestions',
  css: 'getCssQuestions',
  react: 'getReactQuestions',
  frontend: 'getFrontendQuestions',
}

export async function loadQuestions(partId, levelId) {
  const part = asString(partId)
  const level = asString(levelId)
  const loader = loaders[part]
  if (!loader) throw new Error(`Unknown track: ${part || '(empty)'}`)
  const mod = await loader()
  const fn = mod[fnMap[part]]
  if (!fn) throw new Error(`Missing loader for ${part}`)
  return fn(level)
}
