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

export async function loadQuestions(partId, levelId) {
  const loader = loaders[partId]
  if (!loader) return []
  const mod = await loader()
  const fn = mod[fnMap[partId]]
  return fn ? fn(levelId) : []
}
