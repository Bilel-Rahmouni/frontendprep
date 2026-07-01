import { getPart } from '../data/catalog'

const PATTERNS = {
  html: [
    { id: 'semantic', label: 'Semantic HTML', re: /semantic|heading|<h[1-6]|article|section|nav|main|footer|header|landmark/i },
    { id: 'forms', label: 'Forms & inputs', re: /form|input|label|textarea|select|checkbox|radio|submit|placeholder/i },
    { id: 'media', label: 'Media & embeds', re: /img|video|audio|iframe|picture|svg|canvas/i },
    { id: 'a11y', label: 'Accessibility', re: /aria|accessib|alt=|screen reader|tabindex|role=/i },
    { id: 'meta', label: 'Document meta', re: /meta|head|title|charset|viewport|doctype|link rel/i },
  ],
  css: [
    { id: 'flexbox', label: 'Flexbox', re: /flex|flexbox|align-items|justify-content|flex-direction|flex-wrap/i },
    { id: 'grid', label: 'Grid', re: /grid-template|grid-area|grid-column|display:\s*grid/i },
    { id: 'layout', label: 'Layout & box model', re: /margin|padding|border|box-sizing|width|height|position|z-index/i },
    { id: 'responsive', label: 'Responsive design', re: /media query|breakpoint|viewport|clamp|min-width|max-width|mobile/i },
    { id: 'animation', label: 'Animation & transitions', re: /transition|animation|transform|keyframes|@keyframes/i },
    { id: 'selectors', label: 'Selectors & specificity', re: /selector|specificity|pseudo-class|pseudo-element|::before|:hover/i },
  ],
  react: [
    { id: 'hooks', label: 'Hooks', re: /useState|useEffect|useRef|useMemo|useCallback|useContext|custom hook/i },
    { id: 'components', label: 'Components & props', re: /component|props|children|render|jsx|fragment/i },
    { id: 'state', label: 'State management', re: /state|reducer|context|lifting|immutable|setState/i },
    { id: 'effects', label: 'Effects & lifecycle', re: /effect|cleanup|dependency|mount|unmount|lifecycle/i },
    { id: 'performance', label: 'Performance', re: /memo|lazy|Suspense|re-render|virtual DOM|key prop/i },
  ],
  frontend: [
    { id: 'js', label: 'JavaScript', re: /javascript|closure|promise|async|await|event loop|prototype|hoisting/i },
    { id: 'network', label: 'Network & HTTP', re: /fetch|http|rest|api|cors|cache|cookie|header|status code/i },
    { id: 'browser', label: 'Browser APIs', re: /dom|localStorage|sessionStorage|window|document|event listener/i },
    { id: 'build', label: 'Build & tooling', re: /webpack|vite|bundler|npm|module|import|tree.?shak|esbuild/i },
    { id: 'security', label: 'Security', re: /xss|csrf|sanitize|cors|content security|injection/i },
    { id: 'testing', label: 'Testing', re: /test|jest|vitest|mock|assert|unit test|e2e|cypress/i },
  ],
}

function detectTopic(question, partId) {
  const text = `${question.question} ${question.explanation ?? ''}`
  const patterns = PATTERNS[partId] ?? PATTERNS.frontend

  for (const p of patterns) {
    if (p.re.test(text)) return p
  }

  return { id: 'general', label: 'General', re: null }
}

export function analyzeWeakAreas(questions, answers, partId) {
  const part = getPart(partId)
  const topicMap = new Map()

  questions.forEach((q, i) => {
    const a = answers[i]
    const ok = a !== undefined && a === q.correct
    if (ok) return

    const topic = detectTopic(q, partId)
    const entry = topicMap.get(topic.id) ?? { ...topic, missed: 0, total: 0, questionIds: [] }
    entry.missed++
    entry.total++
    entry.questionIds.push(q.id)
    topicMap.set(topic.id, entry)
  })

  // also count correct per topic for context
  questions.forEach((q, i) => {
    const a = answers[i]
    const ok = a !== undefined && a === q.correct
    if (!ok) return
    const topic = detectTopic(q, partId)
    const entry = topicMap.get(topic.id) ?? { ...topic, missed: 0, total: 0, questionIds: [] }
    entry.total++
    topicMap.set(topic.id, entry)
  })

  const areas = [...topicMap.values()]
    .filter((a) => a.missed > 0)
    .sort((a, b) => b.missed - a.missed)

  return {
    areas,
    partLabel: part?.label ?? 'Frontend',
    worst: areas[0] ?? null,
  }
}

export function getRetrySuggestion(weakAreas, partId, levelId) {
  if (!weakAreas.worst) return null
  return {
    label: weakAreas.worst.label,
    missed: weakAreas.worst.missed,
    message: `You missed ${weakAreas.worst.missed} question${weakAreas.worst.missed > 1 ? 's' : ''} on ${weakAreas.worst.label}. Retry this quiz or try another ${weakAreas.partLabel} quiz at this level.`,
    partId,
    levelId,
  }
}
