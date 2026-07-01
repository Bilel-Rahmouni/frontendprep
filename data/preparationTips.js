export const PREP_CATEGORIES = [
  { id: 'all', label: 'All', tone: '#e85d04' },
  { id: 'study', label: 'Study plan', tone: '#2563eb' },
  { id: 'html', label: 'HTML', tone: '#e85d04' },
  { id: 'css', label: 'CSS', tone: '#2563eb' },
  { id: 'js', label: 'JavaScript', tone: '#ca8a04' },
  { id: 'react', label: 'React', tone: '#0891b2' },
  { id: 'test', label: 'Test day', tone: '#16a34a' },
  { id: 'mindset', label: 'Mindset', tone: '#9333ea' },
]

export const PREP_TIPS = [
  // Study plan
  { id: 's1', category: 'study', title: 'Study in blocks, not marathons', body: '45–60 minute focused sessions with 10-minute breaks beat 6-hour cramming. Your brain consolidates during rest.' },
  { id: 's2', category: 'study', title: 'Active recall beats re-reading', body: 'Close the notes and try to answer questions from memory. Quizzes in this app are built for exactly that.' },
  { id: 's3', category: 'study', title: 'Review wrong answers twice', body: 'After each quiz, read every explanation — especially questions you guessed right. Luck does not scale.' },
  { id: 's4', category: 'study', title: 'Rotate tracks daily', body: 'Mon HTML, Tue CSS, Wed React, Thu Frontend general. Mixing topics mirrors real tests and reduces fatigue.' },
  { id: 's5', category: 'study', title: 'Start beginner, climb levels', body: 'Do not jump to Advanced until you score 80%+ on Intermediate. Gaps in basics will haunt you under time pressure.' },
  { id: 's6', category: 'study', title: 'Timed practice weekly', body: 'Use the 4-minute quiz timer at least twice a week. Untimed study and timed performance are different skills.' },
  { id: 's7', category: 'study', title: 'Build a cheat sheet by hand', body: 'One page: selectors, flex shorthand, array methods, React hooks rules. Writing it once = remembering it in the test.' },
  { id: 's8', category: 'study', title: 'Explain out loud', body: 'Teach box model or useEffect to an imaginary junior. If you cannot explain it simply, you do not know it yet.' },
  { id: 's9', category: 'study', title: 'Sleep before the test', body: '7–8 hours. Sleep deprivation cuts recall by 20–40%. No all-nighter the night before.' },
  { id: 's10', category: 'study', title: 'Two weeks minimum', body: 'Ideal prep: 2–4 weeks. Week 1 foundations, Week 2 timed quizzes + weak spots, final days light review only.' },

  // HTML
  { id: 'h1', category: 'html', title: 'Semantic tags are high-value', body: 'Know <article>, <section>, <nav>, <main>, <aside>, <header>, <footer> and when each is appropriate.' },
  { id: 'h2', category: 'html', title: 'One <h1> per page', body: 'Heading hierarchy matters for accessibility and SEO. Never skip levels (h1 → h3) without reason.' },
  { id: 'h3', category: 'html', title: 'Form attributes save JavaScript', body: 'required, type="email", minlength, pattern, autocomplete — know what the browser validates natively.' },
  { id: 'h4', category: 'html', title: 'alt is not optional', body: 'Decorative images: alt="". Informative images: descriptive alt. Tests love this distinction.' },
  { id: 'h5', category: 'html', title: 'Block vs inline vs inline-block', body: 'Block takes full width. Inline flows with text. Inline-block combines both — common in UI patterns.' },
  { id: 'h6', category: 'html', title: 'data-* attributes', body: 'Use data-id="123" for JS hooks without polluting classes. Accessible via dataset.id in JavaScript.' },
  { id: 'h7', category: 'html', title: 'defer vs async on scripts', body: 'defer: runs after HTML parse, order preserved. async: runs when ready, order not guaranteed.' },
  { id: 'h8', category: 'html', title: 'label + input pairing', body: 'Wrap input in <label> or use for/id. Clicking label focuses input — required for accessible forms.' },
  { id: 'h9', category: 'html', title: 'Void elements', body: '<img>, <br>, <input>, <meta> have no closing tag. Do not write <img></img> in HTML5.' },
  { id: 'h10', category: 'html', title: 'picture vs img', body: 'Use <picture> with <source> for art direction or format switching (WebP fallback). img alone is simpler.' },

  // CSS
  { id: 'c1', category: 'css', title: 'Box model: content-box vs border-box', body: 'border-box includes padding and border in width. Most resets set * { box-sizing: border-box } for a reason.' },
  { id: 'c2', category: 'css', title: 'Specificity order', body: 'Inline > IDs > classes/attributes/pseudo-classes > elements. !important overrides everything (avoid in real code).' },
  { id: 'c3', category: 'css', title: 'Flexbox main vs cross axis', body: 'flex-direction sets main axis. justify-content aligns main, align-items aligns cross. Draw it once — never forget.' },
  { id: 'c4', category: 'css', title: 'Grid fr unit', body: 'grid-template-columns: 1fr 2fr means second column is twice the first. fr splits remaining space.' },
  { id: 'c5', category: 'css', title: 'Position sticky needs a threshold', body: 'top: 0 plus a scrollable ancestor. Without top/bottom/left/right, sticky does nothing.' },
  { id: 'c6', category: 'css', title: 'rem vs em vs px', body: 'rem = root font size (scalable). em = parent font size (compounds). px = fixed. Prefer rem for spacing.' },
  { id: 'c7', category: 'css', title: 'CSS variables cascade', body: 'Define on :root, override on [data-theme="dark"]. Components use var(--accent) — never hardcode colors.' },
  { id: 'c8', category: 'css', title: 'Mobile-first media queries', body: 'min-width: 768px means styles apply from 768px up. Start small, enhance for larger screens.' },
  { id: 'c9', category: 'css', title: 'Pseudo-classes vs pseudo-elements', body: ':hover is a class on state. ::before creates a virtual element. Double colon for elements is modern standard.' },
  { id: 'c10', category: 'css', title: 'z-index stacking contexts', body: 'z-index only compares within the same stacking context. position + z-index on parent creates a new one.' },
  { id: 'c11', category: 'css', title: 'Centering cheat code', body: 'Flex: display flex + justify-content center + align-items center. Grid: place-items center. Know both.' },
  { id: 'c12', category: 'css', title: 'transition vs animation', body: 'transition reacts to property changes (hover). @keyframes animation runs a timeline independently.' },

  // JavaScript
  { id: 'j1', category: 'js', title: '=== over ==', body: 'Strict equality avoids coercion surprises. null == undefined is true; null === undefined is false.' },
  { id: 'j2', category: 'js', title: 'const does not mean immutable', body: 'const blocks rebinding, not mutation. const arr = []; arr.push(1) is valid.' },
  { id: 'j3', category: 'js', title: 'map vs forEach vs filter', body: 'map returns new array. forEach returns undefined. filter returns subset matching condition.' },
  { id: 'j4', category: 'js', title: 'Async: promises then vs async/await', body: 'await pauses inside async function until promise resolves. Always handle rejections with try/catch or .catch().' },
  { id: 'j5', category: 'js', title: 'Closures in one sentence', body: 'Inner function remembers variables from outer scope even after outer function finished executing.' },
  { id: 'j6', category: 'js', title: 'Event bubbling vs capturing', body: 'Bubbling: child → parent. Capturing: parent → child. addEventListener third arg true enables capture phase.' },
  { id: 'j7', category: 'js', title: 'JSON.parse vs eval', body: 'Never eval user input. JSON.parse is safe for JSON strings only — throws on invalid JSON.' },
  { id: 'j8', category: 'js', title: 'Spread vs rest', body: 'Spread expands: [...arr]. Rest collects: function fn(...args). Same syntax, opposite direction.' },
  { id: 'j9', category: 'js', title: 'Truthy and falsy list', body: 'Falsy: false, 0, "", null, undefined, NaN. Everything else is truthy — including [] and {}.' },
  { id: 'j10', category: 'js', title: 'fetch does not reject on 404', body: 'fetch only rejects on network failure. Check response.ok or response.status manually.' },
  { id: 'j11', category: 'js', title: 'localStorage vs sessionStorage', body: 'localStorage persists until cleared. sessionStorage clears when tab closes. Both store strings only.' },
  { id: 'j12', category: 'js', title: 'Hoisting basics', body: 'function declarations hoist fully. let/const hoist but stay in temporal dead zone until declared.' },

  // React
  { id: 'r1', category: 'react', title: 'Props flow down, events flow up', body: 'Parent passes data via props. Child notifies parent via callback props like onSubmit.' },
  { id: 'r2', category: 'react', title: 'Keys in lists', body: 'Use stable unique ids, not array index when list can reorder. Keys help React match items correctly.' },
  { id: 'r3', category: 'react', title: 'State updates are async', body: 'setCount(count + 1) twice in same tick may not add 2. Use functional form: setCount(c => c + 1).' },
  { id: 'r4', category: 'react', title: 'useEffect dependency array', body: '[] = run once on mount. [value] = run when value changes. No array = every render (usually a bug).' },
  { id: 'r5', category: 'react', title: 'Do not mutate state', body: 'Always create new object/array when updating. state.items.push(x) then setState(state) will not re-render reliably.' },
  { id: 'r6', category: 'react', title: 'Conditional render patterns', body: 'condition && <Component />, ternary for either/or, early return for loading states.' },
  { id: 'r7', category: 'react', title: 'Controlled vs uncontrolled inputs', body: 'Controlled: value + onChange tied to state. Uncontrolled: ref reads DOM directly. Forms usually controlled.' },
  { id: 'r8', category: 'react', title: 'Context is not a state manager', body: 'Good for theme, locale, auth. Bad for every piece of data — causes unnecessary re-renders.' },
  { id: 'r9', category: 'react', title: 'Fragments avoid extra DOM', body: '<></> or <Fragment> wrap siblings without adding a div. Useful for table rows or strict layouts.' },
  { id: 'r10', category: 'react', title: 'Lifting state up', body: 'When two siblings need same data, move state to closest common parent and pass props down.' },
  { id: 'r11', category: 'react', title: 'Rules of Hooks', body: 'Only call hooks at top level of function components. Never inside loops, conditions, or nested functions.' },
  { id: 'r12', category: 'react', title: 'useRef vs useState', body: 'useRef persists without re-render. useState triggers re-render on change. Refs for DOM access and timers.' },

  // Test day
  { id: 't1', category: 'test', title: 'Read the full question first', body: 'MCQ traps hide in words like "NOT", "always", "except". Underline negations before looking at options.' },
  { id: 't2', category: 'test', title: 'Eliminate wrong answers', body: 'Cross out two obviously wrong options. Your odds jump from 25% to 50% even when guessing.' },
  { id: 't3', category: 'test', title: 'Flag and move on', body: 'Stuck more than 30 seconds? Pick best guess, mark mentally, return if time remains. Momentum matters.' },
  { id: 't4', category: 'test', title: 'Watch the global timer', body: '20 questions in 4 minutes = ~12 seconds each average. Do not spend 2 minutes on one hard question early.' },
  { id: 't5', category: 'test', title: 'First instinct is often right', body: 'Unless you have a clear reason to change, trust your initial answer. Second-guessing causes more errors.' },
  { id: 't6', category: 'test', title: 'Check browser and environment', body: 'Before starting: stable internet, quiet room, charged device, notifications off. Reduce avoidable stress.' },
  { id: 't7', category: 'test', title: 'Answer every question', body: 'No penalty for wrong answers? Never leave blanks. An educated guess beats an empty slot.' },
  { id: 't8', category: 'test', title: 'Code snippets: trace line by line', body: 'For "what prints?" questions, write values on paper step by step. Do not simulate in your head.' },
  { id: 't9', category: 'test', title: 'Arrive 10 minutes early', body: 'Login issues, platform quirks, ID checks — buffer time prevents panic before the clock starts.' },
  { id: 't10', category: 'test', title: 'Hydrate, light snack', body: 'Water and a banana or nuts. Blood sugar crashes mid-test destroy focus faster than hard questions.' },

  // Mindset
  { id: 'm1', category: 'mindset', title: 'Progress over perfection', body: '60% today beats 0% waiting until you feel ready. Consistency compounds over two weeks.' },
  { id: 'm2', category: 'mindset', title: 'Failure is data', body: 'A wrong quiz answer tells you exactly what to study next. Treat mistakes as a free study guide.' },
  { id: 'm3', category: 'mindset', title: 'Compare to yesterday you', body: 'Someone always knows more. Your only competition is your score from last Tuesday.' },
  { id: 'm4', category: 'mindset', title: 'Imposter feelings are normal', body: 'Most candidates feel underprepared. Preparation reduces anxiety — action reduces imposter syndrome.' },
  { id: 'm5', category: 'mindset', title: 'Breathe before you begin', body: 'Three slow breaths before clicking start. Calm nervous system = clearer recall under pressure.' },
  { id: 'm6', category: 'mindset', title: 'You do not need 100%', body: 'Many hiring tests pass at 70–80%. Aim for solid pass, not flawless. Perfectionism wastes energy.' },
  { id: 'm7', category: 'mindset', title: 'Celebrate small wins', body: 'First 80% quiz? That deserves acknowledgment. Positive reinforcement keeps you studying.' },
  { id: 'm8', category: 'mindset', title: 'Take breaks guilt-free', body: 'Rest is part of preparation, not laziness. Walk, stretch, look away from screens between blocks.' },
  { id: 'm9', category: 'mindset', title: 'One bad quiz ≠ failure', body: 'Variance is normal. Look at trend over 5 quizzes, not a single bad run after a long day.' },
  { id: 'm10', category: 'mindset', title: 'Show your work in practice', body: 'When practicing coding questions, write pseudocode even for MCQ. Builds the habit for live coding rounds.' },

  // Extra cross-cutting tips (study/js mix)
  { id: 'x1', category: 'study', title: 'DevTools is your friend', body: 'Inspect element, Console, Network tab — know them before the test. Many frontend roles expect fluency.' },
  { id: 'x2', category: 'js', title: 'CORS in one line', body: 'Browser blocks JS from reading cross-origin responses unless server sends Access-Control-Allow-Origin.' },
  { id: 'x3', category: 'html', title: 'Accessibility: focus states', body: 'Keyboard users need visible :focus-visible outlines. Never remove focus styles without a replacement.' },
  { id: 'x4', category: 'css', title: 'BEM naming optional but useful', body: 'block__element--modifier clarifies structure. Tests may ask about naming conventions and specificity.' },
  { id: 'x5', category: 'react', title: 'Virtual DOM concept', body: 'React diffs new virtual tree vs old, updates only changed real DOM nodes. Explains why keys matter.' },
  { id: 'x6', category: 'test', title: 'Similar options = trap', body: 'When two answers look almost identical, compare them word by word. The difference is usually the point.' },
  { id: 'x7', category: 'study', title: 'MDN over random blogs', body: 'When in doubt, verify on developer.mozilla.org. Official docs beat outdated tutorial sites.' },
  { id: 'x8', category: 'js', title: 'Event loop mental model', body: 'Call stack runs sync code. Web APIs handle async. Callback queue feeds stack when empty. Know micro vs macrotask basics.' },
  { id: 'x9', category: 'css', title: 'Cascade layers (@layer)', body: 'Modern CSS lets you control cascade order explicitly. Useful in large codebases — may appear in senior tests.' },
  { id: 'x10', category: 'mindset', title: 'Visualize success briefly', body: '30 seconds imagining finishing calmly. Sports psychology works for exams too — reduces cortisol spike.' },
]

export function getTipsByCategory(categoryId) {
  if (categoryId === 'all') return PREP_TIPS
  return PREP_TIPS.filter((t) => t.category === categoryId)
}

export function getCategoryLabel(categoryId) {
  return PREP_CATEGORIES.find((c) => c.id === categoryId)?.label ?? categoryId
}
