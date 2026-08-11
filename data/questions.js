const loaders = {
  html: () => import('../scripts/banks/html.mjs'),
  css: () => import('../scripts/banks/css.mjs'),
  react: () => import('../scripts/banks/react.mjs'),
  frontend: () => import('../scripts/banks/frontend.mjs'),
}

const fnMap = {
  html: 'getHtmlQuestions',
  css: 'getCssQuestions',
  react: 'getReactQuestions',
  frontend: 'getFrontendQuestions',
}

/** Cache in-flight + resolved promises so concurrent callers share one load. */
const cache = new Map()

export async function loadQuestions(partId, levelId) {
  const key = `${partId}/${levelId}`
  if (cache.has(key)) return cache.get(key)

  const loader = loaders[partId]
  if (!loader) return []

  const promise = loader()
    .then((mod) => {
      const fn = mod[fnMap[partId]]
      return fn ? fn(levelId) : []
    })
    .catch((err) => {
      cache.delete(key)
      throw err
    })

  cache.set(key, promise)
  return promise
}
