/**
 * Long-form study guides — unique educational content for AdSense quality.
 * Keep copy factual and useful; sections render as article prose.
 */

export const GUIDES = [
  {
    slug: 'frontend-interview-prep',
    title: 'How to prepare for a frontend interview or timed exam',
    description:
      'A practical 2–4 week plan for HTML, CSS, JavaScript, and React knowledge tests: active recall, timed drills, and weak-area review.',
    category: 'Strategy',
    readMinutes: 9,
    sections: [
      {
        heading: 'Know what you are training for',
        paragraphs: [
          'Frontend interviews and certification-style exams rarely ask you to build a full product in one sitting. Many screens use timed multiple-choice questions to check whether you can recall syntax, APIs, and trade-offs without documentation. That skill is different from day-to-day coding with autocomplete and Stack Overflow open.',
          'frontendprep is built for that format: short quizzes (20 questions in about 4 minutes) and mock exams with randomized order. Treat every session as practice under constraints — reading carefully, eliminating wrong options, and managing the clock.',
        ],
      },
      {
        heading: 'A realistic 2–4 week plan',
        paragraphs: [
          'Week 1 — Foundations. Run Beginner quizzes for HTML and CSS until you score about 80% or higher. Skim the Preparation tips for semantic HTML and the box model. Do not jump to Advanced yet; thin foundations become expensive under time pressure.',
          'Week 2 — Breadth and timing. Add React Beginner and Intermediate, plus the mixed Frontend track. Introduce the quiz timer at least three times this week. After each quiz, review every explanation for missed items and for lucky guesses.',
          'Week 3 — Depth. Push Intermediate and Advanced on your weakest track. Start mock exams for levels you already pass in practice mode. Keep sessions to 45–60 minutes with short breaks.',
          'Week 4 (or final days) — Light review. Re-run bookmarks, re-read your personal miss list, and do one or two full mock exams. Sleep matters more than an all-nighter; fatigue destroys recall more than one extra quiz helps.',
        ],
      },
      {
        heading: 'Active recall beats passive reading',
        paragraphs: [
          'Re-reading notes feels productive but builds recognition, not retrieval. Closing the notes and answering questions forces your brain to reconstruct the idea — the same demand a timed test makes. When you miss a question, write one sentence in your own words explaining the correct answer before moving on.',
          'Rotate tracks across days (HTML, CSS, React, Frontend) so you do not overfit one topic. Mixed practice mirrors real exams that bounce between markup, layout, and framework concepts.',
        ],
      },
      {
        heading: 'What “good enough” looks like before the real test',
        paragraphs: [
          'A practical readiness bar: 80%+ on Intermediate quizzes for your target tracks, comfortable completion inside the timer, and mock exam scores that do not collapse when questions are shuffled. If Advanced still feels noisy, that is fine for many junior screens — Intermediate mastery plus calm timing often beats shallow Advanced cramming.',
          'On test day, read the full stem first. Negations like “NOT”, “except”, and “always” are common traps. Skip and flag hard items if your exam allows it, then return with remaining time.',
        ],
      },
    ],
  },
  {
    slug: 'html-interview-guide',
    title: 'HTML interview and exam guide',
    description:
      'What HTML knowledge tests actually cover: document structure, semantic elements, forms, accessibility, and media — with how to study each area.',
    category: 'HTML',
    readMinutes: 8,
    sections: [
      {
        heading: 'Why HTML still shows up in senior-looking tests',
        paragraphs: [
          'HTML looks simple until questions probe semantics and accessibility. Exams check whether you pick the element that communicates meaning to browsers, assistive tech, and search engines — not only whether the page “looks right” with divs and CSS.',
          'Strong candidates know the difference between structure and presentation. If a layout needs a landmark, the answer is usually a semantic element; if it is only visual grouping with no meaning, a generic container may be fine.',
        ],
      },
      {
        heading: 'Document structure and metadata',
        paragraphs: [
          'Know the roles of DOCTYPE, html, head, and body. Metadata (title, meta description, charset, viewport) lives in head; visible content belongs in body. Script loading attributes matter: defer runs after parse and preserves order; async runs when ready and does not guarantee order.',
          'Heading hierarchy is a frequent topic: prefer one clear h1, do not skip levels without reason, and remember that heading rank is about structure, not font size (CSS can restyle headings).',
        ],
      },
      {
        heading: 'Semantics, forms, and accessibility',
        paragraphs: [
          'Memorize when to use article, section, nav, main, aside, header, and footer. Forms are high-yield: pair labels with inputs (wrap or for/id), know common input types, and understand native validation attributes such as required, minlength, pattern, and autocomplete.',
          'Accessibility basics appear often: meaningful alt text vs empty alt for decorative images, button vs link for actions vs navigation, and not relying on color alone. These are not “soft” topics — they are scoring topics.',
        ],
      },
      {
        heading: 'How to practice HTML on frontendprep',
        paragraphs: [
          'Use the HTML Beginner level until core tags and document structure feel automatic. Move to Intermediate for forms and semantics, then Advanced for edge cases. After each quiz, open review and rewrite any missed explanation as a one-line rule in a personal cheat sheet.',
          'Pair quizzes with the HTML tips on the Preparation page. Short tips plus timed questions is more effective than rereading a long reference without retrieval practice.',
        ],
      },
    ],
  },
  {
    slug: 'css-interview-guide',
    title: 'CSS layout and styling interview guide',
    description:
      'Box model, flexbox, grid, specificity, positioning, and responsive CSS — the concepts timed frontend quizzes hammer most.',
    category: 'CSS',
    readMinutes: 8,
    sections: [
      {
        heading: 'Build a mental model, not a property list',
        paragraphs: [
          'CSS exams punish memorization without models. If you can sketch the box model and the flex main/cross axes, you can derive many answers. If you only remember property names, trap options will look equally plausible.',
          'Start every layout question by asking: Is this normal flow, flex, grid, or out-of-flow positioning? That one classification eliminates half the wrong answers.',
        ],
      },
      {
        heading: 'High-yield topics',
        paragraphs: [
          'Box model and box-sizing: content-box vs border-box changes how width interacts with padding and border. Specificity and cascade: inline, IDs, classes, elements — and why !important is a last resort. Units: rem for scalable spacing, em that compounds with parent font-size, px that stays fixed.',
          'Flexbox: flex-direction sets the main axis; justify-content vs align-items is the classic mix-up. Grid: fr tracks, template areas, and gap. Positioning: relative as offset, absolute against positioned ancestor, fixed against the viewport, sticky with a threshold such as top: 0.',
          'Stacking contexts explain many “why is this z-index ignored?” questions. A positioned ancestor with z-index can create a new context so children cannot escape it visually the way people expect.',
        ],
      },
      {
        heading: 'Responsive and motion questions',
        paragraphs: [
          'Mobile-first media queries use min-width to layer enhancements upward. Know the difference between transition (reacts to property changes) and animation (timeline via keyframes). Prefer testing your understanding with timed quizzes — under a clock, people confuse justify and align more than they expect.',
        ],
      },
      {
        heading: 'Practice path',
        paragraphs: [
          'On frontendprep, clear CSS Beginner for selectors and box model, Intermediate for flex/grid/responsive patterns, and Advanced for specificity and stacking traps. When you miss a layout question, redraw the axes once before the next attempt.',
        ],
      },
    ],
  },
  {
    slug: 'react-interview-guide',
    title: 'React interview essentials',
    description:
      'Props, state, effects, keys, hooks rules, and controlled inputs — a focused guide for React MCQ exams and interview screens.',
    category: 'React',
    readMinutes: 9,
    sections: [
      {
        heading: 'Think in UI state and data flow',
        paragraphs: [
          'React questions reward clear mental models: UI is a function of state and props; events flow up through callbacks; lists need stable keys; effects synchronize with external systems. If you only memorize hook names, you will miss dependency and immutability traps.',
          'Before answering, restate the question as “what re-renders?” or “what is stored where?” That framing helps on state vs ref, and on context vs local state.',
        ],
      },
      {
        heading: 'Core topics exams repeat',
        paragraphs: [
          'Props are read-only inputs from the parent. State belongs to the component that owns updates; lift state when siblings must share it. Updates may batch — use functional updates when the next value depends on the previous one.',
          'Lists: keys should be stable and unique; index keys break when order changes. Conditional rendering: &&, ternaries, and early returns. Controlled inputs: value plus onChange tied to state. Fragments avoid extra DOM nodes when siblings are required.',
          'useEffect: empty dependency array runs after mount; listed dependencies re-run on change; omitting the array runs every render and is usually a bug. Cleanup functions matter for subscriptions and timers. Rules of Hooks: only call hooks at the top level of React functions.',
        ],
      },
      {
        heading: 'Context, refs, and common traps',
        paragraphs: [
          'Context is excellent for theme, locale, or auth — poor as a dumping ground for all app data because consumers re-render when the value changes. useRef holds a mutable value without re-render and is the right tool for DOM nodes and timer IDs; useState is for values that should appear in the UI.',
          'Never mutate arrays or objects in state in place. Create new copies so React can detect changes. Many “why didn’t it re-render?” questions are mutation in disguise.',
        ],
      },
      {
        heading: 'How to drill React here',
        paragraphs: [
          'Use the React track from Beginner through Advanced. After misses, write a one-line rule (“functional setState when depending on previous count”, “cleanup timers in useEffect”). Pair with React tips on the Preparation page, then validate under the timer so interview pacing feels familiar.',
        ],
      },
    ],
  },
  {
    slug: 'javascript-frontend-basics',
    title: 'JavaScript for frontend exams',
    description:
      'Equality, arrays, async, closures, events, and browser storage — the JS topics that show up inside mixed frontend quizzes.',
    category: 'JavaScript',
    readMinutes: 8,
    sections: [
      {
        heading: 'Frontend JS is language + browser',
        paragraphs: [
          'Mixed frontend exams blend core JavaScript with DOM and browser APIs. You need language precision (===, falsy values, closures) and environment knowledge (events, fetch, localStorage). Studying only framework APIs leaves gaps.',
          'When a question mentions the DOM or network, ask whether the answer is about language semantics or browser behavior — fetch’s non-rejection on HTTP 404 is a classic browser-API detail.',
        ],
      },
      {
        heading: 'Language topics worth automatic recall',
        paragraphs: [
          'Prefer === to avoid coercion surprises. Know falsy values: false, 0, "", null, undefined, NaN. const prevents rebinding, not mutation. Array methods: map returns a new array, filter subsets, forEach returns undefined.',
          'Async: promises and async/await; always handle failures. Closures: inner functions remember outer bindings. Spread vs rest use the same syntax in opposite directions. Hoisting: function declarations hoist fully; let/const exist in a temporal dead zone until initialized.',
        ],
      },
      {
        heading: 'Browser and DOM topics',
        paragraphs: [
          'Event bubbling goes child to parent; capturing is the reverse. localStorage persists until cleared; sessionStorage lasts for the tab session; both store strings. JSON.parse is for JSON text — never use eval for untrusted input.',
          'These details appear in the Frontend track and in Preparation tips under JavaScript. Drill them with timed quizzes so you do not burn minutes re-deriving basics during a real exam.',
        ],
      },
      {
        heading: 'Practice suggestion',
        paragraphs: [
          'Use Frontend Beginner/Intermediate for mixed JS + browser items, and lean on the Preparation JavaScript category between sessions. If async questions are weak, do a short focused block: promise states, await errors, and fetch + response.ok checks.',
        ],
      },
    ],
  },
  {
    slug: 'timed-mcq-strategy',
    title: 'Timed multiple-choice strategy for frontend tests',
    description:
      'How to read stems, eliminate distractors, manage a 4-minute quiz pace, and review mistakes so scores rise week over week.',
    category: 'Strategy',
    readMinutes: 7,
    sections: [
      {
        heading: 'Pace before perfectionism',
        paragraphs: [
          'A 20-question quiz in roughly 4 minutes is about 12 seconds per item if you never pause — in practice you will spend longer on code snippets and less on definition checks. Your job is not to philosophize; it is to score.',
          'First pass: answer what you know in under 20 seconds. Flag or skip hard items if the mode allows returning. Second pass: spend remaining time on flagged questions. Endless rumination on one item is how people fail otherwise easy tests.',
        ],
      },
      {
        heading: 'Read the stem like a lawyer',
        paragraphs: [
          'Underline NOT, EXCEPT, ONLY, ALWAYS, and NEVER. Many distractors are correct statements that fail the qualifier. Read all options before choosing; “more than one looks right” is normal — pick the option that matches the exact question asked.',
          'For code samples, predict the result before looking at options when you can. Options bias your eye toward plausible wrong paths (off-by-one, wrong phase of the event model, mutated state that “should” work).',
        ],
      },
      {
        heading: 'Eliminate, then commit',
        paragraphs: [
          'Cross out options that violate a hard rule (hooks inside conditionals, invalid HTML nesting, confusing justify-content with align-items). If two remain, prefer the answer aligned with specifications and common best practice over clever tricks unless the question asks for a trick.',
          'Change answers only when you find a concrete reason — a missed word in the stem or a rule you can state. Anxiety-driven flipping often reduces scores.',
        ],
      },
      {
        heading: 'Review is where the score actually rises',
        paragraphs: [
          'After each frontendprep quiz, review wrong answers and lucky guesses. Save stubborn items with bookmarks. Revisit weak areas the next day, not only the same hour. Spaced repetition turns a miss into a durable rule.',
          'Track patterns: “I always rush CSS alignment words” or “I ignore NOT in HTML accessibility questions.” Fixing a pattern beats grinding random volume.',
        ],
      },
    ],
  },
]

export function getGuide(slug) {
  return GUIDES.find((g) => g.slug === slug) ?? null
}

export function getGuidePath(slug) {
  return `/guides/${slug}`
}
