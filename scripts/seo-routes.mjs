export const PART_IDS = ['html', 'css', 'react', 'frontend']
export const LEVEL_IDS = ['beginner', 'intermediate', 'advanced']
export const GUIDE_SLUGS = [
  'frontend-interview-prep',
  'html-interview-guide',
  'css-interview-guide',
  'react-interview-guide',
  'javascript-frontend-basics',
  'timed-mcq-strategy',
  'accessibility-frontend-exams',
  'performance-basics-frontend',
  'dom-events-interview',
]

export function getSiteUrl(env = process.env) {
  return (env.VITE_SITE_URL || 'https://frontendprep.site').replace(/\/$/, '')
}

/**
 * Indexed routes with substantial content.
 * Quiz runners (/0-4) and /exam stay in the app but are noindex + omitted here
 * so thin interactive shells are not treated as doorway pages.
 */
export function getSeoRoutes() {
  const routes = [
    '/',
    '/quiz',
    '/prep',
    '/guides',
    '/faq',
    '/about',
    '/privacy',
    '/ad-privacy',
    '/delete-data',
    '/terms',
  ]

  for (const slug of GUIDE_SLUGS) {
    routes.push(`/guides/${slug}`)
  }

  for (const part of PART_IDS) {
    routes.push(`/quiz/${part}`)
    for (const level of LEVEL_IDS) {
      routes.push(`/quiz/${part}/${level}`)
    }
  }

  return routes
}

/** All app routes worth writing to dist, including thin shells and saved */
export function getPrerenderRoutes() {
  const routes = [...getSeoRoutes(), '/saved']

  for (const part of PART_IDS) {
    for (const level of LEVEL_IDS) {
      for (let i = 0; i < 5; i++) {
        routes.push(`/quiz/${part}/${level}/${i}`)
      }
      routes.push(`/quiz/${part}/${level}/exam`)
    }
  }

  return routes
}

export function routePriority(route) {
  if (route === '/') return '1.0'
  if (route === '/quiz') return '0.95'
  if (route === '/guides' || route === '/prep') return '0.9'
  if (route.startsWith('/guides/')) return '0.85'
  if (route === '/faq' || route === '/about') return '0.8'
  if (
    route === '/privacy' ||
    route === '/ad-privacy' ||
    route === '/delete-data' ||
    route === '/terms'
  ) {
    return '0.5'
  }
  if (route === '/saved') return '0.3'
  const parts = route.split('/').filter(Boolean)
  if (parts[0] === 'quiz' && parts.length === 2) return '0.85'
  if (parts[0] === 'quiz' && parts.length === 3) return '0.8'
  return '0.7'
}

export function routeChangefreq(route) {
  if (route === '/saved') return 'weekly'
  if (
    route === '/privacy' ||
    route === '/ad-privacy' ||
    route === '/delete-data' ||
    route === '/terms'
  ) {
    return 'yearly'
  }
  if (route.startsWith('/guides')) return 'monthly'
  return 'weekly'
}
