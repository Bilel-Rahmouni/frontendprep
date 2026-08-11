/**
 * Lazy bank loaders — Metro-friendly require() inside the map so inlineRequires
 * can defer evaluating unused tracks until first quiz open.
 */
function asString(value) {
  if (Array.isArray(value)) return value[0]
  return value == null ? '' : String(value)
}

function resolveGetter(mod, name) {
  if (!mod) return null
  if (typeof mod[name] === 'function') return mod[name]
  if (mod.default && typeof mod.default[name] === 'function') return mod.default[name]
  return null
}

const loaders = {
  html: () => resolveGetter(require('../../../scripts/banks/html.mjs'), 'getHtmlQuestions'),
  css: () => resolveGetter(require('../../../scripts/banks/css.mjs'), 'getCssQuestions'),
  react: () => resolveGetter(require('../../../scripts/banks/react.mjs'), 'getReactQuestions'),
  frontend: () =>
    resolveGetter(require('../../../scripts/banks/frontend.mjs'), 'getFrontendQuestions'),
}

/** Cache in-flight + resolved promises so concurrent callers share one load. */
const cache = new Map()

export async function loadQuestions(partId, levelId) {
  const part = asString(partId)
  const level = asString(levelId)
  if (!part || !level) return []

  const key = `${part}/${level}`
  if (cache.has(key)) return cache.get(key)

  const promise = Promise.resolve()
    .then(() => {
      const getFn = loaders[part]?.()
      if (!getFn) return []
      return getFn(level) || []
    })
    .catch((err) => {
      cache.delete(key)
      throw err
    })

  cache.set(key, promise)
  return promise
}

/** Test / hot-reload helper */
export function clearQuestionsCache() {
  cache.clear()
}
