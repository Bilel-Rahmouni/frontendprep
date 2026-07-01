export const PART_IDS = ['html', 'css', 'react', 'frontend']
export const LEVEL_IDS = ['beginner', 'intermediate', 'advanced']
export const QUIZZES_PER_LEVEL = 5

export function getSiteUrl(env = process.env) {
  return (env.VITE_SITE_URL || 'https://frontendprep.app').replace(/\/$/, '')
}

/** All app routes worth indexing */
export function getSeoRoutes() {
  const routes = ['/quiz', '/prep']

  for (const part of PART_IDS) {
    routes.push(`/quiz/${part}`)
    for (const level of LEVEL_IDS) {
      routes.push(`/quiz/${part}/${level}`)
      for (let i = 0; i < QUIZZES_PER_LEVEL; i++) {
        routes.push(`/quiz/${part}/${level}/${i}`)
      }
      routes.push(`/quiz/${part}/${level}/exam`)
    }
  }

  return routes
}

/** All app routes worth writing to dist, including the root SPA entry */
export function getPrerenderRoutes() {
  return ['/', ...getSeoRoutes(), '/saved']
}

export function routePriority(route) {
  if (route === '/') return '1.0'
  if (route === '/quiz') return '1.0'
  if (route === '/prep') return '0.8'
  if (route === '/saved') return '0.5'
  const parts = route.split('/').filter(Boolean)
  if (parts.length === 2) return '0.9'
  if (parts.length === 3) return '0.85'
  if (route.endsWith('/exam')) return '0.75'
  return '0.7'
}

export function routeChangefreq(route) {
  if (route === '/saved') return 'weekly'
  if (/\d$/.test(route) || route.endsWith('/exam')) return 'monthly'
  return 'weekly'
}
