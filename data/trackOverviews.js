/** Unique educational copy for track and level hub pages (AdSense / SEO depth). */

export const TRACK_OVERVIEWS = {
  html: {
    summary:
      'HTML is the structure of every web page. Interview and certification tests expect you to know semantic markup, forms, accessibility attributes, document structure, and how browsers parse elements — not just tag names.',
    covers: [
      'Document structure, DOCTYPE, head vs body, and metadata',
      'Semantic elements: article, section, nav, main, aside, header, footer',
      'Forms, labels, input types, validation attributes, and accessibility',
      'Media, links, lists, tables, and when to use which element',
      'Script loading (defer vs async), void elements, and HTML5 APIs in markup',
    ],
    howToStudy:
      'Start with Beginner until you consistently score 80%+. Focus on why an element exists, not only what it looks like. After each quiz, read every explanation — especially items you guessed. Then move to Intermediate for forms and semantics depth, and Advanced for edge cases testers love.',
  },
  css: {
    summary:
      'CSS interview questions test layout mental models: the box model, flexbox, grid, specificity, positioning, responsive design, and cascade. Timed quizzes force you to recall rules under pressure instead of looking them up.',
    covers: [
      'Box model, box-sizing, margin collapse, and sizing units (rem, em, %, vw)',
      'Flexbox and Grid alignment, tracks, gaps, and common layout patterns',
      'Specificity, cascade, inheritance, and when !important hurts you',
      'Positioning: static, relative, absolute, fixed, sticky',
      'Responsive design, media queries, transitions, and stacking contexts',
    ],
    howToStudy:
      'Draw flex and grid axes once on paper — that mental picture pays off in almost every CSS MCQ. Practice Beginner for selectors and box model, Intermediate for layout systems, and Advanced for stacking, specificity traps, and responsive edge cases.',
  },
  react: {
    summary:
      'React quizzes focus on component thinking: props, state, effects, lists and keys, controlled inputs, hooks rules, and how rendering works. Interviewers and exams reward precise vocabulary and knowing what not to do.',
    covers: [
      'Components, props, children, and composition patterns',
      'State updates, immutability, and functional setState',
      'useEffect lifecycle, dependency arrays, and cleanup',
      'Lists, keys, conditional rendering, and fragments',
      'Context, refs, controlled forms, and Rules of Hooks',
    ],
    howToStudy:
      'Say answers out loud in one sentence before picking an option. React traps often hinge on a single detail (index as key, missing dependency, mutating state). Use Beginner for core props/state, Intermediate for effects and forms, Advanced for hooks edge cases and performance-related concepts.',
  },
  frontend: {
    summary:
      'The Frontend track mixes HTML, CSS, JavaScript, browser APIs, performance, and accessibility — closer to a real general frontend exam. It is the best track for end-to-end readiness when you already have basics in each area.',
    covers: [
      'Cross-cutting browser concepts: DOM, events, storage, fetch',
      'JavaScript fundamentals used in UI work: arrays, async, closures',
      'Accessibility and semantic structure decisions',
      'Performance, assets, and common frontend tooling vocabulary',
      'Practical scenarios that combine markup, style, and script',
    ],
    howToStudy:
      'Use this track after you have warmed up on HTML, CSS, and React separately, or rotate it mid-week as mixed practice. Beginner covers foundations across the stack; Intermediate and Advanced add browser APIs, async flows, and scenario-style questions.',
  },
}

export const LEVEL_OVERVIEWS = {
  beginner: {
    goal: 'Build fast, accurate recall of core syntax and definitions.',
    focus:
      'Expect straightforward questions about what a feature is and when to use it. Perfect for first-pass learning and warming up before timed exams.',
    tips: [
      'Aim for 80%+ before moving up — gaps here show up under time pressure later.',
      'Read every explanation, including questions you got right by luck.',
      'Do two short quizzes back-to-back rather than one long unfocused session.',
    ],
  },
  intermediate: {
    goal: 'Apply patterns the way real projects and exams phrase them.',
    focus:
      'Questions mix concepts: trade-offs, common bugs, and “which approach is correct” scenarios. You need both vocabulary and judgment.',
    tips: [
      'Watch for words like not, except, and always — they flip the correct option.',
      'If two answers look right, pick the one that matches browser or React rules precisely.',
      'Review weak topics from quiz results before starting another set.',
    ],
  },
  advanced: {
    goal: 'Handle edge cases, senior-level detail, and trap options.',
    focus:
      'Expect specificity traps, lifecycle subtleties, stacking contexts, async edge cases, and questions where the popular answer is wrong.',
    tips: [
      'Slow down on the first read; advanced items hide the catch in one clause.',
      'Use mock exams here only after Intermediate is consistently strong.',
      'Keep a one-page note of patterns you miss more than twice.',
    ],
  },
}

export function getTrackOverview(partId) {
  return TRACK_OVERVIEWS[partId] ?? null
}

export function getLevelOverview(levelId) {
  return LEVEL_OVERVIEWS[levelId] ?? null
}
