const BEGINNER = [
  {
    "id": "react-b-001",
    "question": "What does JSX primarily allow you to write in React?",
    "options": [
      "JSON configuration",
      "HTML-like syntax inside JavaScript",
      "SQL queries",
      "CSS modules only"
    ],
    "correct": 1,
    "explanation": "JSX is a syntax extension that lets you write markup resembling HTML inside JavaScript files.",
    "demo": {
      "type": "jsx",
      "code": "const el = <h1>Hello</h1>;"
    }
  },
  {
    "id": "react-b-002",
    "question": "What does JSX compile to under the hood?",
    "options": [
      "innerHTML strings",
      "Web Components",
      "React.createElement calls",
      "document.createElement only"
    ],
    "correct": 2,
    "explanation": "Babel (or similar) transforms JSX into React.createElement(type, props, ...children) calls."
  },
  {
    "id": "react-b-003",
    "question": "Which is valid JSX for applying a CSS class?",
    "options": [
      "<div style-class=\"box\">",
      "<div css=\"box\">",
      "<div className=\"box\">",
      "<div class=\"box\">"
    ],
    "correct": 2,
    "explanation": "JSX uses className instead of the HTML class attribute because class is a reserved word in JavaScript."
  },
  {
    "id": "react-b-004",
    "question": "How do you embed a JavaScript expression inside JSX?",
    "options": [
      "( expression )",
      "[[ expression ]]",
      "{ expression }",
      "{{ expression }}"
    ],
    "correct": 2,
    "explanation": "Curly braces {} mark the boundary where JavaScript expressions are evaluated inside JSX."
  },
  {
    "id": "react-b-005",
    "question": "What is the correct self-closing JSX syntax for an input?",
    "options": [
      "<input></input>",
      "Either <input /> or <input/>",
      "<input />",
      "<input/>"
    ],
    "correct": 1,
    "explanation": "Self-closing tags require />; spacing before / is optional but <input /> is conventional.",
    "demo": {
      "type": "jsx",
      "code": "<input type=\"text\" />"
    }
  },
  {
    "id": "react-b-006",
    "question": "Which JSX attribute replaces HTML for=\"\" on labels?",
    "options": [
      "htmlFor",
      "labelFor",
      "forLabel",
      "forId"
    ],
    "correct": 0,
    "explanation": "htmlFor maps to the DOM for attribute, avoiding the JS reserved word for."
  },
  {
    "id": "react-b-007",
    "question": "Can you use React without JSX?",
    "options": [
      "Only with TypeScript",
      "Only in class components",
      "Yes, using React.createElement",
      "No, JSX is mandatory"
    ],
    "correct": 2,
    "explanation": "JSX is optional sugar; createElement works identically."
  },
  {
    "id": "react-b-008",
    "question": "What must be true about JSX tag names that refer to React components?",
    "options": [
      "They must be strings",
      "They must start with a capital letter",
      "They must be lowercase",
      "They must be default exports only"
    ],
    "correct": 1,
    "explanation": "Lowercase tags are treated as intrinsic DOM elements; capitalized names refer to components."
  },
  {
    "id": "react-b-009",
    "question": "How do you write a JSX comment inside markup?",
    "options": [
      "// comment",
      "{// comment}",
      "{/* comment */}",
      "<!-- comment -->"
    ],
    "correct": 2,
    "explanation": "JSX comments use {/* */} because // comments do not work inside JSX children."
  },
  {
    "id": "react-b-010",
    "question": "What does returning null from a component render?",
    "options": [
      "Renders nothing",
      "Renders undefined text node",
      "Throws an error",
      "Renders empty string"
    ],
    "correct": 0,
    "explanation": "null (and undefined/false) tells React to render no output for that component."
  },
  {
    "id": "react-b-011",
    "question": "Which expression is valid inside JSX curly braces?",
    "options": [
      "if (x) { y }",
      "function foo() {}",
      "const x = 1",
      "items.map(i => <li key={i}>{i}</li>)"
    ],
    "correct": 3,
    "explanation": "JSX braces accept expressions, not statements; map returns an expression."
  },
  {
    "id": "react-b-012",
    "question": "What is the Fragment shorthand syntax?",
    "options": [
      "<frag></frag>",
      "<#></#>",
      "<></>",
      "<Fragment />"
    ],
    "correct": 2,
    "explanation": "<></> is shorthand for <React.Fragment></React.Fragment> with no extra DOM node.",
    "demo": {
      "type": "jsx",
      "code": "<>\n  <td>Cell</td>\n  <td>Cell</td>\n</>"
    }
  },
  {
    "id": "react-b-013",
    "question": "Which is invalid in JSX?",
    "options": [
      "<div tabIndex={0}>",
      "<div aria-label=\"close\">",
      "<div tabindex=\"0\">",
      "<div data-testid=\"btn\">"
    ],
    "correct": 2,
    "explanation": "tabindex should be tabIndex in JSX (camelCase for most DOM properties)."
  },
  {
    "id": "react-b-014",
    "question": "What type of value can JSX children be?",
    "options": [
      "Only React elements",
      "Only strings",
      "Strings, numbers, elements, arrays, and more",
      "Only one child"
    ],
    "correct": 2,
    "explanation": "React supports strings, numbers, elements, arrays, fragments, portals, and nullish values as children."
  },
  {
    "id": "react-b-015",
    "question": "What happens if you put a boolean as JSX child?",
    "options": [
      "It renders \"false\"",
      "It renders nothing",
      "It renders \"true\"",
      "It throws"
    ],
    "correct": 1,
    "explanation": "Booleans, null, and undefined are valid but render no visible output.",
    "demo": {
      "type": "output",
      "code": "{true}{false}{null}",
      "output": "(empty render)"
    }
  },
  {
    "id": "react-b-016",
    "question": "What is a React component?",
    "options": [
      "A build tool plugin",
      "A CSS file",
      "A database model",
      "A function or class that returns UI"
    ],
    "correct": 3,
    "explanation": "Components are reusable UI units defined as functions (or classes) returning JSX."
  },
  {
    "id": "react-b-017",
    "question": "Which defines a valid function component?",
    "options": [
      "class Card extends DOM {}",
      "def Card():",
      "component Card() {}",
      "function Card() { return <div /> }"
    ],
    "correct": 3,
    "explanation": "Function components are plain JS functions returning JSX (or null)."
  },
  {
    "id": "react-b-018",
    "question": "How do you render a component named UserCard in JSX?",
    "options": [
      "UserCard()",
      "<Component name=\"UserCard\" />",
      "<UserCard />",
      "<userCard />"
    ],
    "correct": 2,
    "explanation": "Components must be capitalized in JSX so React distinguishes them from HTML tags."
  },
  {
    "id": "react-b-019",
    "question": "Where should component definitions typically live for reuse?",
    "options": [
      "Inside CSS files",
      "Separate files/modules exported for import",
      "Inline only in index.html",
      "In package.json"
    ],
    "correct": 1,
    "explanation": "One component per file (or grouped module) is the standard pattern for maintainability."
  },
  {
    "id": "react-b-020",
    "question": "What does export default function App() enable?",
    "options": [
      "Automatic routing",
      "Importing App as the default export from the module",
      "Global window.App only",
      "Server-side rendering only"
    ],
    "correct": 1,
    "explanation": "default export allows import App from \"./App\" in other files."
  },
  {
    "id": "react-b-021",
    "question": "Can a component render another component?",
    "options": [
      "Only class components can",
      "Only with HOCs",
      "Yes, composition is core to React",
      "No"
    ],
    "correct": 2,
    "explanation": "Components compose by including other components in their returned JSX."
  },
  {
    "id": "react-b-022",
    "question": "What is the root component often called in a Vite React app?",
    "options": [
      "Main",
      "Root",
      "Index",
      "App"
    ],
    "correct": 3,
    "explanation": "App.jsx/tsx is commonly mounted via createRoot(document.getElementById(\"root\")).render(<App />)."
  },
  {
    "id": "react-b-023",
    "question": "Must a function component have a return statement?",
    "options": [
      "It must return JSX, null, or another renderable value",
      "Yes, always with JSX",
      "Only in strict mode",
      "No return needed"
    ],
    "correct": 0,
    "explanation": "Implicit undefined return renders nothing but is usually unintentional."
  },
  {
    "id": "react-b-024",
    "question": "What is component composition?",
    "options": [
      "Building UI by nesting components",
      "Combining reducers",
      "Bundling JS files",
      "Merging CSS files"
    ],
    "correct": 0,
    "explanation": "Composition means assembling complex UIs from smaller components."
  },
  {
    "id": "react-b-025",
    "question": "Which renders \"Hello\" correctly inside a Greeting component?",
    "options": [
      "return \"Hello\";",
      "Both returning \"Hello\" and returning <span>Hello</span> work",
      "Neither",
      "return (<span>Hello</span>);"
    ],
    "correct": 1,
    "explanation": "Components can return strings or elements; strings render as text nodes."
  },
  {
    "id": "react-b-026",
    "question": "What file extension commonly holds JSX in Vite React projects?",
    "options": [
      ".html only",
      ".jsx or .tsx",
      ".svelte",
      ".vue"
    ],
    "correct": 1,
    "explanation": ".jsx/.tsx signal JSX syntax to the bundler and tooling."
  },
  {
    "id": "react-b-027",
    "question": "Can you name a component with a lowercase letter?",
    "options": [
      "Possible but React treats it as a DOM tag",
      "Yes, recommended",
      "Never",
      "Only in tests"
    ],
    "correct": 0,
    "explanation": "Lowercase names compile to intrinsic elements like <div>, not your component."
  },
  {
    "id": "react-b-028",
    "question": "What does \"UI as a function of state\" mean?",
    "options": [
      "CSS drives state",
      "Render output depends on current state/props",
      "State is stored in DOM",
      "Functions replace HTML"
    ],
    "correct": 1,
    "explanation": "Given the same state and props, a component should produce the same UI."
  },
  {
    "id": "react-b-029",
    "question": "Which is a presentational (dumb) component trait?",
    "options": [
      "Receives data via props and renders UI",
      "Must use Redux",
      "Fetches its own data always",
      "Must be a class"
    ],
    "correct": 0,
    "explanation": "Presentational components focus on how things look, receiving data through props."
  },
  {
    "id": "react-b-030",
    "question": "What can a component return at the top level in modern React?",
    "options": [
      "Unlimited siblings without wrapper",
      "Exactly two elements maximum",
      "Only a DOM element",
      "A React node such as an element, fragment, null, or keyed array"
    ],
    "correct": 3,
    "explanation": "React components return a React node; keyed arrays are valid, but fragments are usually clearer for multiple siblings.",
    "demo": {
      "type": "jsx",
      "code": "return (\n  <>\n    <Header />\n    <Main />\n  </>\n);"
    }
  },
  {
    "id": "react-b-031",
    "question": "What are props in React?",
    "options": [
      "Read-only inputs passed from parent to child",
      "CSS variables",
      "Event listeners only",
      "Internal mutable state"
    ],
    "correct": 0,
    "explanation": "Props flow one way from parent to child and should not be mutated by the child."
  },
  {
    "id": "react-b-032",
    "question": "How do you pass a title prop to <Page title=\"Home\" />?",
    "options": [
      "Via context only",
      "As an attribute on the JSX tag",
      "As a child element only",
      "Via ref"
    ],
    "correct": 1,
    "explanation": "Attributes on component JSX become the props object in the child."
  },
  {
    "id": "react-b-033",
    "question": "How does a function component receive props?",
    "options": [
      "As the second argument",
      "As the first argument",
      "Via window.props",
      "Via this.props"
    ],
    "correct": 1,
    "explanation": "function MyComponent(props) or destructured ({ name })."
  },
  {
    "id": "react-b-034",
    "question": "Are props mutable inside the child component?",
    "options": [
      "Yes, always",
      "Only in class components",
      "Only strings are read-only",
      "No, treat them as read-only"
    ],
    "correct": 3,
    "explanation": "Mutating props breaks one-way data flow and predictability."
  },
  {
    "id": "react-b-035",
    "question": "What is prop destructuring?",
    "options": [
      "Spreading state",
      "A CSS technique",
      "Extracting fields from the props object in the parameter list",
      "Deleting props"
    ],
    "correct": 2,
    "explanation": "function User({ name, age }) unpacks props.name and props.age directly."
  },
  {
    "id": "react-b-036",
    "question": "How do you pass a number 42 as a prop?",
    "options": [
      "count=(42)",
      "count={42}",
      "count=\"42\"",
      "number=42"
    ],
    "correct": 1,
    "explanation": "Curly braces pass JS values; quotes pass strings."
  },
  {
    "id": "react-b-037",
    "question": "What are children props?",
    "options": [
      "Content nested between opening and closing component tags",
      "Only text nodes",
      "Child components file imports",
      "Router outlets"
    ],
    "correct": 0,
    "explanation": "<Card>Hello</Card> passes \"Hello\" (or elements) as props.children."
  },
  {
    "id": "react-b-038",
    "question": "How do you spread an object onto a component as props?",
    "options": [
      "<User copy={user} />",
      "<User {...user} />",
      "<User ...user />",
      "<User props=user />"
    ],
    "correct": 1,
    "explanation": "Spread syntax forwards each key as an individual prop."
  },
  {
    "id": "react-b-039",
    "question": "What happens if a required prop is missing and no default exists?",
    "options": [
      "The value is undefined; UI may break or show fallback",
      "React auto-fills it",
      "Component is not mounted",
      "Build fails always"
    ],
    "correct": 0,
    "explanation": "Missing props are undefined unless defaults or TypeScript/propTypes catch them."
  },
  {
    "id": "react-b-040",
    "question": "Default props in function components are commonly set by:",
    "options": [
      "Default parameter values or defaultProps",
      "props.default = {}",
      "CSS variables",
      "useState only"
    ],
    "correct": 0,
    "explanation": "function Btn({ label = \"Click\" }) uses JS default parameters."
  },
  {
    "id": "react-b-041",
    "question": "Can you pass a function as a prop?",
    "options": [
      "Only in class components",
      "Yes, e.g. callback handlers",
      "No",
      "Only arrow functions"
    ],
    "correct": 1,
    "explanation": "Passing callbacks like onClick={handleSave} is standard."
  },
  {
    "id": "react-b-042",
    "question": "What is prop drilling?",
    "options": [
      "Using refs",
      "Server-side props",
      "Passing props through many intermediate layers",
      "A build error"
    ],
    "correct": 2,
    "explanation": "Drilling occurs when distant descendants need data passed through every level."
  },
  {
    "id": "react-b-043",
    "question": "Which passes a boolean prop isActive as true?",
    "options": [
      "isActive=\"true\"",
      "Either isActive or isActive={true}",
      "isActive",
      "isActive={true}"
    ],
    "correct": 1,
    "explanation": "isActive alone is shorthand for isActive={true} in JSX."
  },
  {
    "id": "react-b-044",
    "question": "Props are compared when:",
    "options": [
      "On parent re-render to decide if child re-renders (by default)",
      "Only on mount",
      "Never",
      "Only when using memo"
    ],
    "correct": 0,
    "explanation": "By default children re-render when parent re-renders regardless of prop change."
  },
  {
    "id": "react-b-045",
    "question": "Which renders props.children inside a wrapper?",
    "options": [
      "function Box(props.child)",
      "function Box() { return children }",
      "function Box({ children }) { return <div>{children}</div> }",
      "function Box([children])"
    ],
    "correct": 2,
    "explanation": "children is a normal prop containing nested JSX.",
    "demo": {
      "type": "jsx",
      "code": "<Box><p>Inside</p></Box>"
    }
  },
  {
    "id": "react-b-046",
    "question": "What is state in React?",
    "options": [
      "Global CSS",
      "Static HTML",
      "Props from parent only",
      "Data that can change over time and triggers re-renders"
    ],
    "correct": 3,
    "explanation": "State holds values that, when updated, cause the component to render again."
  },
  {
    "id": "react-b-047",
    "question": "Which hook declares state in function components?",
    "options": [
      "useProps",
      "useState",
      "useRender",
      "useData"
    ],
    "correct": 1,
    "explanation": "useState returns [value, setValue] pair."
  },
  {
    "id": "react-b-048",
    "question": "What does const [count, setCount] = useState(0) initialize?",
    "options": [
      "setCount to 0",
      "count to 0",
      "count to null",
      "A class instance"
    ],
    "correct": 1,
    "explanation": "The argument to useState is the initial state value."
  },
  {
    "id": "react-b-049",
    "question": "How should you update state based on previous state?",
    "options": [
      "setCount(prev => prev + 1) when next depends on previous",
      "this.setState",
      "setCount(count + 1) always",
      "count = count + 1"
    ],
    "correct": 0,
    "explanation": "Functional updates avoid stale closures when multiple updates batch."
  },
  {
    "id": "react-b-050",
    "question": "Does React merge state updates automatically in useState?",
    "options": [
      "Only in StrictMode",
      "Only for objects",
      "No, each setState replaces that slice of state",
      "Yes, shallow merge like class setState"
    ],
    "correct": 2,
    "explanation": "Each useState variable is independent; object updates need spreading."
  },
  {
    "id": "react-b-051",
    "question": "Can you call useState conditionally inside a component?",
    "options": [
      "No, hooks must run in the same order every render",
      "Only in loops",
      "Only on Tuesdays",
      "Yes, anywhere"
    ],
    "correct": 0,
    "explanation": "Rules of Hooks require top-level unconditional calls in function components."
  },
  {
    "id": "react-b-052",
    "question": "What triggers a re-render after setState?",
    "options": [
      "Nothing",
      "Scheduling an update when state changes",
      "window.reload",
      "Manual DOM edit"
    ],
    "correct": 1,
    "explanation": "React schedules a render when hook state updaters run."
  },
  {
    "id": "react-b-053",
    "question": "Is state shared between two useState calls in one component?",
    "options": [
      "Only if named the same",
      "Yes, one object",
      "Only in StrictMode",
      "No, each call is separate state"
    ],
    "correct": 3,
    "explanation": "Each useState manages its own piece of state."
  },
  {
    "id": "react-b-054",
    "question": "What happens if you mutate state directly? obj.push(x)",
    "options": [
      "Automatic deep clone",
      "UI may not update; breaks immutability",
      "Error always thrown",
      "React detects and re-renders"
    ],
    "correct": 1,
    "explanation": "Mutating state in place skips change detection for reference-equal objects."
  },
  {
    "id": "react-b-055",
    "question": "Lazy initial state uses:",
    "options": [
      "useState(() => expensive())",
      "useEffect",
      "useState(expensive())",
      "useMemo only"
    ],
    "correct": 0,
    "explanation": "Passing a function runs it once on mount for costly initial values."
  },
  {
    "id": "react-b-056",
    "question": "State updates are ___ by default in event handlers in React 18+.",
    "options": [
      "Never batched",
      "Debounced 1s",
      "Synchronous to DOM always",
      "Batched"
    ],
    "correct": 3,
    "explanation": "Multiple setStates in the same event may batch into one render."
  },
  {
    "id": "react-b-057",
    "question": "Which stores an object in state correctly?",
    "options": [
      "user.name = \"A\"",
      "setUser(user.name = \"A\")",
      "setUser.name(\"A\")",
      "setUser({ ...user, name: \"A\" })"
    ],
    "correct": 3,
    "explanation": "Create a new object copy when updating nested fields."
  },
  {
    "id": "react-b-058",
    "question": "Can sibling components share useState directly?",
    "options": [
      "If same name",
      "No, each component has isolated state",
      "Yes, same hook",
      "With props only"
    ],
    "correct": 1,
    "explanation": "State is local unless lifted to parent or external store/context."
  },
  {
    "id": "react-b-059",
    "question": "What does setCount(5) do if count is already 5?",
    "options": [
      "May bail out if Object.is comparison shows no change",
      "Always re-renders",
      "Resets hooks",
      "Throws"
    ],
    "correct": 0,
    "explanation": "React can skip re-render if state value is unchanged (SameValue)."
  },
  {
    "id": "react-b-060",
    "question": "Which toggles a boolean flag correctly?",
    "options": [
      "open = !open",
      "setOpen(!open) or setOpen(o => !o)",
      "useState without setter",
      "toggleOpen() on DOM"
    ],
    "correct": 1,
    "explanation": "Use the setter; direct assignment to state variable does not update React.",
    "demo": {
      "type": "jsx",
      "code": "const [on, setOn] = useState(false);\n<button onClick={() => setOn(v => !v)} />"
    }
  },
  {
    "id": "react-b-061",
    "question": "How do you attach a click handler in JSX?",
    "options": [
      "click={handler}",
      "onClick={handler}",
      "onclick=\"handler()\"",
      "@click={handler}"
    ],
    "correct": 1,
    "explanation": "React uses camelCase synthetic events: onClick, onChange, etc."
  },
  {
    "id": "react-b-062",
    "question": "What is a synthetic event in React?",
    "options": [
      "Cross-browser wrapper around native events",
      "A CSS event",
      "A test mock only",
      "A fake component"
    ],
    "correct": 0,
    "explanation": "SyntheticEvent normalizes behavior across browsers."
  },
  {
    "id": "react-b-063",
    "question": "How do you pass an argument to a handler in JSX?",
    "options": [
      "onClick={handleClick, id}",
      "onClick=handleClick(id)",
      "onClick={() => handleClick(id)}",
      "onClick={handleClick(id)}"
    ],
    "correct": 2,
    "explanation": "Wrapping in an arrow function defers invocation until click."
  },
  {
    "id": "react-b-064",
    "question": "What does e.preventDefault() do in onSubmit?",
    "options": [
      "Clears props",
      "Stops React render",
      "Deletes state",
      "Prevents default browser form submission"
    ],
    "correct": 3,
    "explanation": "It blocks full page reload on form submit in traditional HTML forms."
  },
  {
    "id": "react-b-065",
    "question": "Should you call a handler function immediately in JSX like onClick={save()}}?",
    "options": [
      "Yes",
      "No, that runs on every render; pass reference or wrapper",
      "Only for forms",
      "Only in classes"
    ],
    "correct": 1,
    "explanation": "save() invokes during render; use save or () => save()."
  },
  {
    "id": "react-b-066",
    "question": "Which stops event bubbling in React?",
    "options": [
      "e.preventDefault()",
      "return false only",
      "e.stopPropagation()",
      "e.cancel()"
    ],
    "correct": 2,
    "explanation": "stopPropagation prevents the event from reaching parent handlers."
  },
  {
    "id": "react-b-067",
    "question": "onChange on an input fires when:",
    "options": [
      "Never in React",
      "On mount only",
      "When the input value changes (controlled input)",
      "Only on blur"
    ],
    "correct": 2,
    "explanation": "Controlled inputs fire onChange as user types."
  },
  {
    "id": "react-b-068",
    "question": "How are event handlers typically bound in function components?",
    "options": [
      "Only class components support events",
      "Arrow functions or stable references; no this binding needed",
      "Manual bind in constructor",
      "Via refs only"
    ],
    "correct": 1,
    "explanation": "Function components avoid this; use closures or useCallback when needed."
  },
  {
    "id": "react-b-069",
    "question": "What is event pooling (legacy note)?",
    "options": [
      "CSS pooling",
      "State batching",
      "Events run in a pool thread",
      "React 17+ removed pooling; older React reused SyntheticEvent objects"
    ],
    "correct": 3,
    "explanation": "Pre-17, SyntheticEvents were pooled; modern React passes persistent events."
  },
  {
    "id": "react-b-070",
    "question": "Keyboard events use naming like:",
    "options": [
      "onkeypress",
      "on-key-down",
      "keydown",
      "onKeyDown"
    ],
    "correct": 3,
    "explanation": "React DOM events follow camelCase: onKeyDown, onKeyUp."
  },
  {
    "id": "react-b-071",
    "question": "Double-click handler prop is:",
    "options": [
      "onDblClick",
      "doubleClick",
      "ondblclick",
      "onDoubleClick"
    ],
    "correct": 3,
    "explanation": "The correct prop is onDoubleClick in React DOM."
  },
  {
    "id": "react-b-072",
    "question": "Can you use capture phase with onClickCapture?",
    "options": [
      "Only in vanilla JS",
      "Yes",
      "No",
      "Deprecated"
    ],
    "correct": 1,
    "explanation": "Adding Capture suffix listens during capture phase."
  },
  {
    "id": "react-b-073",
    "question": "Form button type=\"submit\" inside <form> triggers:",
    "options": [
      "form onSubmit when clicked",
      "Nothing by default",
      "useEffect",
      "Only onChange"
    ],
    "correct": 0,
    "explanation": "Submit buttons fire the form submit event handled by onSubmit."
  },
  {
    "id": "react-b-074",
    "question": "Passing onClick to a custom Button component requires:",
    "options": [
      "Cannot pass handlers",
      "context only",
      "Automatic propagation always",
      "Button must forward/onHandle internally if wrapping native button"
    ],
    "correct": 3,
    "explanation": "Custom components must apply the prop to a DOM element or child."
  },
  {
    "id": "react-b-075",
    "question": "What does onMouseEnter correspond to?",
    "options": [
      "click only",
      "focus",
      "Native mouseenter (no bubble)",
      "scroll"
    ],
    "correct": 2,
    "explanation": "onMouseEnter maps to mouseenter-like behavior in React.",
    "demo": {
      "type": "jsx",
      "code": "<button onClick={(e) => { e.preventDefault(); }}>"
    }
  },
  {
    "id": "react-b-076",
    "question": "Why do lists in React usually use .map()?",
    "options": [
      "Required by law",
      "Transform data array into array of elements",
      "Only for keys",
      "Replaces useState"
    ],
    "correct": 1,
    "explanation": "map produces one element per item for rendering lists."
  },
  {
    "id": "react-b-077",
    "question": "What is the key prop used for?",
    "options": [
      "Helping React identify which items changed",
      "CSS styling",
      "Router ids",
      "Encryption"
    ],
    "correct": 0,
    "explanation": "Keys stabilize identity across reorders, inserts, and deletes."
  },
  {
    "id": "react-b-078",
    "question": "Where should key be placed?",
    "options": [
      "On the outermost element returned from map",
      "On the parent div only once",
      "In CSS",
      "In useState"
    ],
    "correct": 0,
    "explanation": "key belongs on the element inside the map callback return."
  },
  {
    "id": "react-b-079",
    "question": "Is key passed through to the DOM?",
    "options": [
      "As data-key",
      "Yes, always",
      "Only in dev",
      "No, React uses it internally and does not render key attribute"
    ],
    "correct": 3,
    "explanation": "key is special and not available as props.key in the child."
  },
  {
    "id": "react-b-080",
    "question": "Using array index as key is problematic when:",
    "options": [
      "Always fine",
      "Items reorder, insert, or delete causing state bugs",
      "Only for strings",
      "List is static never reordered"
    ],
    "correct": 1,
    "explanation": "Index keys confuse identity when list order changes."
  },
  {
    "id": "react-b-081",
    "question": "What makes a good key?",
    "options": [
      "Always 0",
      "Math.random() each render",
      "Date.now() each render",
      "Stable unique id from data"
    ],
    "correct": 3,
    "explanation": "Keys should be stable and unique among siblings."
  },
  {
    "id": "react-b-082",
    "question": "Can two siblings share the same key?",
    "options": [
      "No, keys must be unique among siblings",
      "Yes",
      "In StrictMode only",
      "Only in fragments"
    ],
    "correct": 0,
    "explanation": "Duplicate keys cause warnings and unpredictable reconciliation."
  },
  {
    "id": "react-b-083",
    "question": "Fragment in a list needs key when:",
    "options": [
      "Never",
      "Using <React.Fragment key={id}> shorthand cannot take key; use Fragment with key",
      "Always use <>",
      "Only in class components"
    ],
    "correct": 1,
    "explanation": "Short syntax <> cannot accept key; use <Fragment key={id}>."
  },
  {
    "id": "react-b-084",
    "question": "Empty array map renders:",
    "options": [
      "Error",
      "Nothing for that expression",
      "undefined text",
      "null crash"
    ],
    "correct": 1,
    "explanation": "Mapping [] yields [] which React renders as nothing."
  },
  {
    "id": "react-b-085",
    "question": "Filtering then mapping is common to:",
    "options": [
      "Render subset of items",
      "Avoid lists",
      "Replace state",
      "Skip keys"
    ],
    "correct": 0,
    "explanation": "items.filter(...).map(...) renders visible items only."
  },
  {
    "id": "react-b-086",
    "question": "key={item.id} helps preserve:",
    "options": [
      "CSS files",
      "Props drilling",
      "Component state tied to that item row",
      "Package versions"
    ],
    "correct": 2,
    "explanation": "Correct keys keep row state with the right item when list changes."
  },
  {
    "id": "react-b-087",
    "question": "Nested lists require keys:",
    "options": [
      "On each map level among siblings",
      "Only on outer list",
      "In package.json",
      "Nowhere"
    ],
    "correct": 0,
    "explanation": "Each list's direct children need keys unique within that list."
  },
  {
    "id": "react-b-088",
    "question": "Which renders a list of names?",
    "options": [
      "names.forEach(n => <li>)",
      "names.map(n => <li key={n.id}>{n}</li>)",
      "<li names={names} />",
      "list(names)"
    ],
    "correct": 1,
    "explanation": "map returns elements; forEach returns undefined."
  },
  {
    "id": "react-b-089",
    "question": "Can key be a number?",
    "options": [
      "Yes, React coerces; string ids still common",
      "Only booleans",
      "No, strings only",
      "Forbidden"
    ],
    "correct": 0,
    "explanation": "Numeric keys work but string ids from data are typical."
  },
  {
    "id": "react-b-090",
    "question": "Without keys React may:",
    "options": [
      "Skip rendering",
      "Throw always",
      "Disable events",
      "Reuse wrong component instances inefficiently"
    ],
    "correct": 3,
    "explanation": "Missing keys force full re-create of children in many cases.",
    "demo": {
      "type": "jsx",
      "code": "{items.map(item => (\n  <li key={item.id}>{item.name}</li>\n))}"
    }
  },
  {
    "id": "react-b-091",
    "question": "Which conditionally shows content when isLoggedIn is true?",
    "options": [
      "{isLoggedIn ? <Dashboard /> : null}",
      "Both ternary rendering and && rendering",
      "Neither",
      "{isLoggedIn && <Dashboard />}"
    ],
    "correct": 1,
    "explanation": "Logical && and ternary are common conditional patterns."
  },
  {
    "id": "react-b-092",
    "question": "What renders if count is 0 with {count && <Badge />}?",
    "options": [
      "Badge",
      "Nothing",
      "0 (number zero displays)",
      "Error"
    ],
    "correct": 2,
    "explanation": "0 is falsy but React renders numeric 0; use count > 0 && or ternary."
  },
  {
    "id": "react-b-093",
    "question": "Ternary in JSX looks like:",
    "options": [
      "if (cond) <A />",
      "{ cond ? <A /> : <B /> }",
      "when cond then A",
      "cond ? A : B without braces"
    ],
    "correct": 1,
    "explanation": "Ternary is an expression suitable inside {}."
  },
  {
    "id": "react-b-094",
    "question": "Can you use if/else statements directly inside JSX braces?",
    "options": [
      "Yes",
      "Only with switch",
      "No, use ternary or move logic outside return",
      "Only else"
    ],
    "correct": 2,
    "explanation": "if is a statement; assign to variable before return or use ternary."
  },
  {
    "id": "react-b-095",
    "question": "Early return pattern:",
    "options": [
      "Only classes",
      "if (!data) return null; before main JSX",
      "Replaces useState",
      "Illegal in components"
    ],
    "correct": 1,
    "explanation": "Guard clauses simplify conditional full-component rendering."
  },
  {
    "id": "react-b-096",
    "question": "Switching many UI states is often done with:",
    "options": [
      "Global variables",
      "Only CSS",
      "Object/map of components or nested ternaries extracted",
      "keys"
    ],
    "correct": 2,
    "explanation": "A lookup map keeps complex switches readable."
  },
  {
    "id": "react-b-097",
    "question": "null in conditional branch means:",
    "options": [
      "Render nothing",
      "Render \"null\" text",
      "Render empty div",
      "Crash"
    ],
    "correct": 0,
    "explanation": "null explicitly renders no output."
  },
  {
    "id": "react-b-098",
    "question": "Showing loading vs content commonly uses:",
    "options": [
      "document.write",
      "Only CSS display:none always",
      "No conditionals",
      "status === \"loading\" ? <Spinner /> : <Content />"
    ],
    "correct": 3,
    "explanation": "Ternary or && patterns express async UI states."
  },
  {
    "id": "react-b-099",
    "question": "Double negation !!value converts to boolean for:",
    "options": [
      "Safe boolean context in && chains when avoiding 0 render",
      "CSS only",
      "Keys",
      "Events"
    ],
    "correct": 0,
    "explanation": "{!!items.length && ...} avoids rendering 0."
  },
  {
    "id": "react-b-100",
    "question": "Fragment helps conditional render when:",
    "options": [
      "You need multiple elements without wrapper in a branch",
      "Never",
      "Only lists",
      "Replacing state"
    ],
    "correct": 0,
    "explanation": "Fragments group conditional siblings without extra DOM.",
    "demo": {
      "type": "output",
      "code": "{false && <X />}\n{0 && <X />}",
      "output": "0"
    }
  }
];

const INTERMEDIATE = [
  {
    "id": "react-i-001",
    "question": "What is the primary purpose of useEffect?",
    "options": [
      "Run side effects after render",
      "Create context",
      "Declare state",
      "Memoize values"
    ],
    "correct": 0,
    "explanation": "useEffect synchronizes components with external systems after paint."
  },
  {
    "id": "react-i-002",
    "question": "When does useEffect run by default?",
    "options": [
      "After every committed render",
      "Before render",
      "Never in StrictMode",
      "Only on unmount"
    ],
    "correct": 0,
    "explanation": "Default dependency array omission runs effect after each render."
  },
  {
    "id": "react-i-003",
    "question": "useEffect(() => {}, []) runs:",
    "options": [
      "Every render",
      "Never",
      "Only on unmount",
      "Once after initial mount"
    ],
    "correct": 3,
    "explanation": "Empty deps mean effect runs once on mount (per mount in StrictMode dev)."
  },
  {
    "id": "react-i-004",
    "question": "The cleanup function in useEffect runs:",
    "options": [
      "Never",
      "Only on mount",
      "Before every render",
      "Before the effect on next run and on unmount"
    ],
    "correct": 3,
    "explanation": "Cleanup prevents leaks from subscriptions and timers."
  },
  {
    "id": "react-i-005",
    "question": "Fetching data in useEffect typically uses:",
    "options": [
      "useEffect with async IIFE or .then",
      "async useEffect callback directly as first arg",
      "useState only",
      "componentDidMount in functions"
    ],
    "correct": 0,
    "explanation": "The effect callback cannot be async; call async function inside."
  },
  {
    "id": "react-i-006",
    "question": "Missing dependencies in the array can cause:",
    "options": [
      "Automatic fix by React",
      "Stale closures reading old state/props",
      "Build failure",
      "Faster apps always"
    ],
    "correct": 1,
    "explanation": "eslint-plugin-react-hooks warns when deps are incomplete."
  },
  {
    "id": "react-i-007",
    "question": "useEffect with [userId] runs again when:",
    "options": [
      "Only on unmount",
      "Never after mount",
      "userId value changes between renders",
      "Any state changes"
    ],
    "correct": 2,
    "explanation": "Effects re-run when any dependency changes by Object.is comparison."
  },
  {
    "id": "react-i-008",
    "question": "Setting state inside useEffect without deps causes:",
    "options": [
      "Nothing",
      "One run only",
      "Infinite loop risk if state triggers re-render",
      "Error always"
    ],
    "correct": 2,
    "explanation": "Effect updates state -> re-render -> effect again unless guarded."
  },
  {
    "id": "react-i-009",
    "question": "document.title = x belongs in:",
    "options": [
      "render body",
      "useEffect",
      "CSS",
      "JSX return"
    ],
    "correct": 1,
    "explanation": "DOM mutations and external sync belong in effects, not render."
  },
  {
    "id": "react-i-010",
    "question": "React StrictMode double-invokes effects in development to:",
    "options": [
      "Surface side-effect cleanup bugs",
      "Slow production",
      "Test keys",
      "Disable effects"
    ],
    "correct": 0,
    "explanation": "Double mounting helps find missing cleanup logic."
  },
  {
    "id": "react-i-011",
    "question": "AbortController in fetch useEffect helps:",
    "options": [
      "Replace keys",
      "Speed CSS",
      "Cancel in-flight request on cleanup",
      "Avoid props"
    ],
    "correct": 2,
    "explanation": "Abort on unmount avoids setState on unmounted components."
  },
  {
    "id": "react-i-012",
    "question": "useLayoutEffect differs by running:",
    "options": [
      "Never",
      "Only on server",
      "Before browser paint, synchronously after DOM updates",
      "After paint"
    ],
    "correct": 2,
    "explanation": "useLayoutEffect runs before paint for DOM measurements."
  },
  {
    "id": "react-i-013",
    "question": "Should you subscribe to websockets in render?",
    "options": [
      "Yes",
      "Only with refs",
      "Only in classes",
      "No, subscribe in useEffect with cleanup"
    ],
    "correct": 3,
    "explanation": "Subscriptions are side effects and belong in effects."
  },
  {
    "id": "react-i-014",
    "question": "Derived state from props in effect anti-pattern often means:",
    "options": [
      "Best practice always",
      "Need controlled component or key reset instead",
      "Replaces useMemo",
      "Required for lists"
    ],
    "correct": 1,
    "explanation": "Syncing props to state in effects can cause extra renders and bugs."
  },
  {
    "id": "react-i-015",
    "question": "Timer setInterval should be cleared in:",
    "options": [
      "JSX",
      "render",
      "Effect cleanup",
      "Never"
    ],
    "correct": 2,
    "explanation": "clearInterval in return () => prevents orphaned timers.",
    "demo": {
      "type": "jsx",
      "code": "useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);"
    }
  },
  {
    "id": "react-i-016",
    "question": "What does React.createContext provide?",
    "options": [
      "Server routing",
      "A way to pass data without prop drilling",
      "Keys for lists",
      "CSS theming only"
    ],
    "correct": 1,
    "explanation": "Context shares values to any descendant consumer."
  },
  {
    "id": "react-i-017",
    "question": "useContext(ThemeContext) returns:",
    "options": [
      "The nearest Provider value above",
      "Always default only",
      "Ref object",
      "Props"
    ],
    "correct": 0,
    "explanation": "Consumers read the closest matching Provider value in the tree."
  },
  {
    "id": "react-i-018",
    "question": "Context Provider wraps:",
    "options": [
      "Subtree that should receive the value",
      "Only one component",
      "Only siblings",
      "Router only"
    ],
    "correct": 0,
    "explanation": "<ThemeContext.Provider value={theme}> wraps descendants."
  },
  {
    "id": "react-i-019",
    "question": "When context value changes:",
    "options": [
      "Only Provider re-renders",
      "Consumers re-render",
      "App unmounts",
      "Nothing"
    ],
    "correct": 1,
    "explanation": "All consuming components re-render when their context value changes."
  },
  {
    "id": "react-i-020",
    "question": "Default context value is used when:",
    "options": [
      "On server only",
      "No Provider exists above consumer",
      "Never",
      "Always"
    ],
    "correct": 1,
    "explanation": "createContext(default) supplies fallback without Provider."
  },
  {
    "id": "react-i-021",
    "question": "Passing new object literal each render as value={ { theme } } causes:",
    "options": [
      "Error",
      "Consumers re-render every time due to new reference",
      "Memo always wins",
      "No re-renders"
    ],
    "correct": 1,
    "explanation": "Unstable value references defeat memoization of consumers."
  },
  {
    "id": "react-i-022",
    "question": "Splitting contexts (ThemeContext, AuthContext) helps:",
    "options": [
      "Increase drilling",
      "Remove hooks",
      "Reduce unnecessary re-renders",
      "Disable StrictMode"
    ],
    "correct": 2,
    "explanation": "Fine-grained contexts limit who updates when data changes."
  },
  {
    "id": "react-i-023",
    "question": "useContext replaces class:",
    "options": [
      "componentDidMount",
      "contextType / Consumer pattern",
      "constructor",
      "render only"
    ],
    "correct": 1,
    "explanation": "Hooks simplify the old Context.Consumer render-prop pattern."
  },
  {
    "id": "react-i-024",
    "question": "Can a component be both Provider and Consumer?",
    "options": [
      "Never",
      "Illegal",
      "Server only",
      "Yes, nested providers/consumers are valid"
    ],
    "correct": 3,
    "explanation": "Components can provide one context and consume another."
  },
  {
    "id": "react-i-025",
    "question": "Custom ThemeProvider often:",
    "options": [
      "Is required by Vite",
      "Replaces React",
      "Combines state + Context.Provider + useContext export",
      "Stores data in DOM"
    ],
    "correct": 2,
    "explanation": "Pattern: Provider component + useTheme hook calling useContext."
  },
  {
    "id": "react-i-026",
    "question": "Context is best for:",
    "options": [
      "Moderately global data: theme, locale, auth",
      "Every piece of state",
      "DOM keys",
      "Replacing all props"
    ],
    "correct": 0,
    "explanation": "Context suits widely needed, infrequently changing data."
  },
  {
    "id": "react-i-027",
    "question": "Multiple providers nesting:",
    "options": [
      "Outermost wins always",
      "Random",
      "Inner Provider overrides for its subtree",
      "Invalid"
    ],
    "correct": 2,
    "explanation": "Nearest Provider value takes precedence for consumers below."
  },
  {
    "id": "react-i-028",
    "question": "useContext subscription is to:",
    "options": [
      "Entire app",
      "That specific context instance",
      "CSS",
      "window"
    ],
    "correct": 1,
    "explanation": "Each context object is independent."
  },
  {
    "id": "react-i-029",
    "question": "Passing functions via context enables:",
    "options": [
      "No re-renders ever",
      "Descendants to call setters without prop drilling",
      "Class components only",
      "Only read-only data"
    ],
    "correct": 1,
    "explanation": "Context can expose dispatch/setState callbacks."
  },
  {
    "id": "react-i-030",
    "question": "Memoizing context value with useMemo prevents:",
    "options": [
      "Unnecessary consumer updates when parent re-renders but value unchanged",
      "All renders",
      "Hooks",
      "Provider mount"
    ],
    "correct": 0,
    "explanation": "Stable value reference keeps consumers from updating.",
    "demo": {
      "type": "jsx",
      "code": "const ThemeContext = createContext(\"light\");\nconst theme = useContext(ThemeContext);"
    }
  },
  {
    "id": "react-i-031",
    "question": "A custom hook is:",
    "options": [
      "A new React API",
      "A function starting with use that composes hooks",
      "A class method",
      "A CSS module"
    ],
    "correct": 1,
    "explanation": "Custom hooks share stateful logic, not JSX itself."
  },
  {
    "id": "react-i-032",
    "question": "Custom hooks must follow:",
    "options": [
      "No rules",
      "Class inheritance",
      "Rules of Hooks",
      "DOM APIs only"
    ],
    "correct": 2,
    "explanation": "Only call hooks from use-prefixed functions at top level."
  },
  {
    "id": "react-i-033",
    "question": "useCounter hook might return:",
    "options": [
      "CSS",
      "A class",
      "Only JSX",
      "[count, increment, decrement]"
    ],
    "correct": 3,
    "explanation": "Hooks commonly return tuples or objects of state and actions."
  },
  {
    "id": "react-i-034",
    "question": "Two components using useCounter get:",
    "options": [
      "Global state",
      "Shared state always",
      "No state",
      "Independent state per component instance"
    ],
    "correct": 3,
    "explanation": "Each call site has its own hook state like useState."
  },
  {
    "id": "react-i-035",
    "question": "Extracting useFetch from components helps:",
    "options": [
      "Reuse data-fetching logic",
      "Remove effects",
      "Replace context",
      "Avoid keys"
    ],
    "correct": 0,
    "explanation": "Custom hooks deduplicate effectful patterns."
  },
  {
    "id": "react-i-036",
    "question": "Naming convention for custom hooks:",
    "options": [
      "start with on",
      "PascalCase only",
      "start with use",
      "no convention"
    ],
    "correct": 2,
    "explanation": "use prefix signals hook semantics to React and linters."
  },
  {
    "id": "react-i-037",
    "question": "Can custom hooks call other custom hooks?",
    "options": [
      "Only one level",
      "No",
      "Only in tests",
      "Yes"
    ],
    "correct": 3,
    "explanation": "Hooks compose freely if rules are followed."
  },
  {
    "id": "react-i-038",
    "question": "useLocalStorage might combine:",
    "options": [
      "Only CSS",
      "Only refs",
      "useState + useEffect to sync localStorage",
      "createContext only"
    ],
    "correct": 2,
    "explanation": "Effects persist state; state initializes from storage."
  },
  {
    "id": "react-i-039",
    "question": "Custom hooks cannot:",
    "options": [
      "Use useState",
      "Enforce that they are not hooks themselves if misnamed",
      "Return data",
      "Replace all components"
    ],
    "correct": 3,
    "explanation": "They share logic; components still render UI."
  },
  {
    "id": "react-i-040",
    "question": "Testing custom hooks often uses:",
    "options": [
      "CSS",
      "Only E2E",
      "@testing-library/react renderHook",
      "Cannot test"
    ],
    "correct": 2,
    "explanation": "renderHook mounts a test component calling the hook."
  },
  {
    "id": "react-i-041",
    "question": "useToggle is a common example returning:",
    "options": [
      "Context",
      "[value, toggle]",
      "DOM node",
      "Only boolean"
    ],
    "correct": 1,
    "explanation": "Simple boolean state with flip function."
  },
  {
    "id": "react-i-042",
    "question": "Parameters to custom hooks:",
    "options": [
      "Must be refs only",
      "Must be props only",
      "Forbidden",
      "Allow configuring behavior per call site"
    ],
    "correct": 3,
    "explanation": "Arguments customize reusable hook logic."
  },
  {
    "id": "react-i-043",
    "question": "usePrevious(value) typically uses:",
    "options": [
      "useState only",
      "context",
      "useRef to store prior render value",
      "memo"
    ],
    "correct": 2,
    "explanation": "Ref updated after render holds previous value."
  },
  {
    "id": "react-i-044",
    "question": "Sharing JSX via custom hook is done by:",
    "options": [
      "Illegal",
      "Required pattern",
      "Returning elements from hook (unusual) or keeping JSX in component",
      "CSS only"
    ],
    "correct": 2,
    "explanation": "Hooks usually return data/handlers; components render."
  },
  {
    "id": "react-i-045",
    "question": "useMediaQuery hook listens to:",
    "options": [
      "click events only",
      "props only",
      "matchMedia changes via useEffect",
      "keys"
    ],
    "correct": 2,
    "explanation": "Side effect subscribes to media query list updates.",
    "demo": {
      "type": "jsx",
      "code": "function useWindowWidth() {\n  const [w, setW] = useState(window.innerWidth);\n  useEffect(() => { /* resize listener */ }, []);\n  return w;\n}"
    }
  },
  {
    "id": "react-i-046",
    "question": "A controlled input means:",
    "options": [
      "Value driven by React state via value + onChange",
      "Uncontrolled always",
      "No onChange",
      "DOM owns value only"
    ],
    "correct": 0,
    "explanation": "React state is single source of truth for input value."
  },
  {
    "id": "react-i-047",
    "question": "Controlled text input needs:",
    "options": [
      "ref only",
      "no handler",
      "defaultValue only",
      "value={text} onChange={e => setText(e.target.value)}"
    ],
    "correct": 3,
    "explanation": "Pair controlled value with change handler updating state."
  },
  {
    "id": "react-i-048",
    "question": "defaultValue is used for:",
    "options": [
      "Keys",
      "Context",
      "Controlled updates",
      "Uncontrolled initial value"
    ],
    "correct": 3,
    "explanation": "defaultValue sets initial DOM value without ongoing control."
  },
  {
    "id": "react-i-049",
    "question": "Handling multiple inputs with one handler often uses:",
    "options": [
      "No names",
      "Separate state per field only",
      "name attribute + computed property name in state",
      "keys"
    ],
    "correct": 2,
    "explanation": "e.target.name maps to state field dynamically."
  },
  {
    "id": "react-i-050",
    "question": "Checkbox controlled binding uses:",
    "options": [
      "active",
      "checked={bool} onChange",
      "selected",
      "value={bool}"
    ],
    "correct": 1,
    "explanation": "Checkboxes use checked, not value, for boolean state."
  },
  {
    "id": "react-i-051",
    "question": "Select dropdown controlled prop is:",
    "options": [
      "value on select + onChange",
      "selected on option only",
      "defaultChecked",
      "checked"
    ],
    "correct": 0,
    "explanation": "Select value ties to state; options have value attributes."
  },
  {
    "id": "react-i-052",
    "question": "Preventing default on form submit avoids:",
    "options": [
      "React render",
      "State updates",
      "Keys",
      "Full page reload in traditional form"
    ],
    "correct": 3,
    "explanation": "handleSubmit calls e.preventDefault() for SPA behavior."
  },
  {
    "id": "react-i-053",
    "question": "textarea in React uses:",
    "options": [
      "ref mandatory",
      "CSS only",
      "Only inner text always",
      "value/onChange like input (not children for controlled)"
    ],
    "correct": 3,
    "explanation": "Controlled textarea uses value prop, not child text content."
  },
  {
    "id": "react-i-054",
    "question": "File input value is often:",
    "options": [
      "Never readable",
      "Uncontrolled via ref because value is read-only for security",
      "Stored in context",
      "Fully controlled always easily"
    ],
    "correct": 1,
    "explanation": "Browsers restrict setting file input value programmatically."
  },
  {
    "id": "react-i-055",
    "question": "Form validation in React commonly:",
    "options": [
      "Validates on submit or blur in handlers/state flags",
      "Automatic",
      "In CSS",
      "Only HTML5 never"
    ],
    "correct": 0,
    "explanation": "Validation logic lives in JS alongside state."
  },
  {
    "id": "react-i-056",
    "question": "Lifting form state up means:",
    "options": [
      "Using refs only",
      "DOM only",
      "Parent owns form data; children receive props/callbacks",
      "No state"
    ],
    "correct": 2,
    "explanation": "Shared form state lives in ancestor for sibling coordination."
  },
  {
    "id": "react-i-057",
    "question": "Radio group sharing name typically:",
    "options": [
      "context only",
      "Only uncontrolled",
      "Separate forms",
      "Uses same name + checked={selected === value}"
    ],
    "correct": 3,
    "explanation": "One piece of state tracks selected radio value."
  },
  {
    "id": "react-i-058",
    "question": "e.target.value for number fields returns:",
    "options": [
      "Number always",
      "Boolean",
      "String; parse with Number or parseInt",
      "undefined"
    ],
    "correct": 2,
    "explanation": "Input values are strings until parsed."
  },
  {
    "id": "react-i-059",
    "question": "Resetting controlled form sets:",
    "options": [
      "Keys",
      "Only DOM via reload",
      "State back to initial values",
      "Context default only"
    ],
    "correct": 2,
    "explanation": "Reset means updating React state to defaults."
  },
  {
    "id": "react-i-060",
    "question": "onInput vs onChange in React inputs:",
    "options": [
      "Neither work",
      "Same never",
      "onInput required",
      "onChange is standard for controlled inputs"
    ],
    "correct": 3,
    "explanation": "React normalizes change events for form fields.",
    "demo": {
      "type": "jsx",
      "code": "<input value={email} onChange={e => setEmail(e.target.value)} />"
    }
  },
  {
    "id": "react-i-061",
    "question": "Lifting state up means:",
    "options": [
      "Global window state",
      "Using refs only",
      "Moving shared state to common ancestor",
      "CSS variables"
    ],
    "correct": 2,
    "explanation": "Sibling communication flows through parent state."
  },
  {
    "id": "react-i-062",
    "question": "Two inputs staying in sync should:",
    "options": [
      "Use separate unrelated state",
      "Share state in parent passed as props",
      "Use random keys",
      "DOM innerHTML"
    ],
    "correct": 1,
    "explanation": "Single source of truth in closest common parent."
  },
  {
    "id": "react-i-063",
    "question": "Parent passes value and onValueChange to child making child:",
    "options": [
      "Controlled by parent state",
      "Fully autonomous always",
      "Context provider",
      "A class only"
    ],
    "correct": 0,
    "explanation": "Controlled child displays props and notifies changes upward."
  },
  {
    "id": "react-i-064",
    "question": "Inverse data flow means:",
    "options": [
      "Events bubble data up via callbacks",
      "Context only",
      "Refs only down",
      "Props flow down only with no events"
    ],
    "correct": 0,
    "explanation": "Data down, events up is core React flow."
  },
  {
    "id": "react-i-065",
    "question": "Temperature converter example lifts:",
    "options": [
      "CSS",
      "Keys",
      "Effects only",
      "Shared metric/imperial value to parent"
    ],
    "correct": 3,
    "explanation": "One canonical temperature state converts for both views."
  },
  {
    "id": "react-i-066",
    "question": "When NOT to lift state:",
    "options": [
      "Coordinated tabs",
      "Shared between siblings",
      "State used only by one component",
      "Filter + list sync"
    ],
    "correct": 2,
    "explanation": "Keep local state local when no sharing needed."
  },
  {
    "id": "react-i-067",
    "question": "Replacing lifted state with context when:",
    "options": [
      "One child only",
      "Many distant consumers need same state",
      "Always first choice",
      "Never"
    ],
    "correct": 1,
    "explanation": "Context reduces drilling but adds re-render scope."
  },
  {
    "id": "react-i-068",
    "question": "Single source of truth prevents:",
    "options": [
      "All bugs",
      "Re-renders",
      "Conflicting duplicate states",
      "Props"
    ],
    "correct": 2,
    "explanation": "One authoritative state avoids sync bugs."
  },
  {
    "id": "react-i-069",
    "question": "Callback props like onSearch(query) implement:",
    "options": [
      "Child notifying parent of changes",
      "Parent hiding data",
      "Memo",
      "Automatic fetch"
    ],
    "correct": 0,
    "explanation": "Children invoke parent callbacks to update lifted state."
  },
  {
    "id": "react-i-070",
    "question": "Derived values from lifted state should be:",
    "options": [
      "In CSS",
      "Stored separately and synced in effect always",
      "Computed during render in parent or child (or useMemo if costly)",
      "Random"
    ],
    "correct": 2,
    "explanation": "Derive when possible instead of redundant state."
  },
  {
    "id": "react-i-071",
    "question": "Accordion with one open panel lifts:",
    "options": [
      "Each panel isolated always if exclusive open needed",
      "CSS only",
      "keys",
      "activeId to parent"
    ],
    "correct": 3,
    "explanation": "Exclusive selection needs shared activeId state."
  },
  {
    "id": "react-i-072",
    "question": "Shopping cart shared by header and page lifts to:",
    "options": [
      "App-level state or context/store",
      "localStorage only without React",
      "DOM",
      "Each button"
    ],
    "correct": 0,
    "explanation": "Global UI state often lives high in tree or external store."
  },
  {
    "id": "react-i-073",
    "question": "Props drilling alternative besides context:",
    "options": [
      "Keys",
      "Component composition (children/render props)",
      "More drilling",
      "Mutating props"
    ],
    "correct": 1,
    "explanation": "Passing JSX as children can avoid passing data through intermediates."
  },
  {
    "id": "react-i-074",
    "question": "State colocation principle prefers:",
    "options": [
      "Everything at root",
      "Everything in Redux",
      "Refs everywhere",
      "State as low as possible where needed"
    ],
    "correct": 3,
    "explanation": "Lift only when siblings or parent must coordinate."
  },
  {
    "id": "react-i-075",
    "question": "Filter text lifted with list means:",
    "options": [
      "No props",
      "Parent holds filter; passes to list as prop",
      "Only memo",
      "List fetches alone always"
    ],
    "correct": 1,
    "explanation": "Parent state drives filtered rendering in child list.",
    "demo": {
      "type": "output",
      "code": "Parent: filter + setFilter\nChild: receives filter, calls setFilter",
      "output": "Synchronized filter UI"
    }
  },
  {
    "id": "react-i-076",
    "question": "React.memo wraps a component to:",
    "options": [
      "Skip re-render if props unchanged (shallow compare)",
      "Replace useEffect",
      "Add state",
      "Create context"
    ],
    "correct": 0,
    "explanation": "memo performs shallow prop comparison before re-rendering."
  },
  {
    "id": "react-i-077",
    "question": "useMemo(() => compute(a,b), [a,b]) caches:",
    "options": [
      "Entire component",
      "Computed value between renders when deps same",
      "Events",
      "DOM nodes permanently"
    ],
    "correct": 1,
    "explanation": "useMemo memoizes expensive calculation results."
  },
  {
    "id": "react-i-078",
    "question": "useCallback(fn, deps) returns:",
    "options": [
      "Memoized function reference",
      "Memoized number only",
      "Context",
      "JSX"
    ],
    "correct": 0,
    "explanation": "Stable function identity helps memoized children."
  },
  {
    "id": "react-i-079",
    "question": "memo helps most when:",
    "options": [
      "Always on every component",
      "Child is expensive and receives stable props",
      "Never",
      "Replacing keys"
    ],
    "correct": 1,
    "explanation": "Premature memo adds comparison overhead without benefit."
  },
  {
    "id": "react-i-080",
    "question": "New inline function prop each render:",
    "options": [
      "Illegal",
      "Breaks memo on child unless useCallback used",
      "Stops parent render",
      "Always fine for memo"
    ],
    "correct": 1,
    "explanation": "Unstable references fail shallow compare."
  },
  {
    "id": "react-i-081",
    "question": "New object/array literal prop each render:",
    "options": [
      "Error",
      "Ignored",
      "Causes memoized child to re-render",
      "Is stable"
    ],
    "correct": 2,
    "explanation": "Reference identity changes every render."
  },
  {
    "id": "react-i-082",
    "question": "useMemo should not be used for:",
    "options": [
      "Truly expensive derivations",
      "Every trivial addition",
      "Stabilizing object deps when needed",
      "Heavy filtering"
    ],
    "correct": 1,
    "explanation": "Over-memoization hurts readability and can slow down."
  },
  {
    "id": "react-i-083",
    "question": "Custom compare function in memo:",
    "options": [
      "compare(prevProps, nextProps) return true to skip",
      "Only for classes",
      "Replaces render",
      "Is required"
    ],
    "correct": 0,
    "explanation": "Return true if props equal to bail out of re-render."
  },
  {
    "id": "react-i-084",
    "question": "Does memo compare state inside child?",
    "options": [
      "Blocks hooks",
      "Compares context never",
      "No, only props; child still re-renders if its state/context changes",
      "Yes all state"
    ],
    "correct": 2,
    "explanation": "memo is a props optimization on that component boundary."
  },
  {
    "id": "react-i-085",
    "question": "useCallback([], []) empty deps means:",
    "options": [
      "Undefined",
      "Recreated every render",
      "Error",
      "Function identity stable across renders"
    ],
    "correct": 3,
    "explanation": "Empty deps freeze callback until unmount."
  },
  {
    "id": "react-i-086",
    "question": "React Compiler (19+) can:",
    "options": [
      "Remove hooks",
      "Automatically memoize in many cases reducing manual memo",
      "Disable effects",
      "Replace JSX"
    ],
    "correct": 1,
    "explanation": "Compiler analyzes and inserts memoization where safe."
  },
  {
    "id": "react-i-087",
    "question": "Passing memoized value via context still updates when:",
    "options": [
      "Context value reference changes",
      "CSS changes",
      "Never",
      "Only mount"
    ],
    "correct": 0,
    "explanation": "Context consumers update on value change regardless of memo."
  },
  {
    "id": "react-i-088",
    "question": "Children prop as inline JSX to memo child:",
    "options": [
      "Often new reference each render",
      "Always stable",
      "Ignored",
      "Forbidden"
    ],
    "correct": 0,
    "explanation": "Inline children create new element trees each time."
  },
  {
    "id": "react-i-089",
    "question": "useMemo for object used in effect deps:",
    "options": [
      "Deletes deps",
      "Stabilizes object when fields unchanged",
      "Never useful",
      "Replaces effect"
    ],
    "correct": 1,
    "explanation": "Stable object prevents effect re-fire from literal recreation."
  },
  {
    "id": "react-i-090",
    "question": "Profiling before memoizing means:",
    "options": [
      "Always memo root",
      "Skip profiling",
      "Use random keys",
      "Measure re-render cost to justify optimization"
    ],
    "correct": 3,
    "explanation": "Optimize based on evidence from React DevTools Profiler.",
    "demo": {
      "type": "jsx",
      "code": "const MemoRow = memo(function Row({ item }) {\n  return <tr>{item.name}</tr>;\n});"
    }
  },
  {
    "id": "react-i-091",
    "question": "In React Router, <Link> is preferred over <a> for internal navigation because it:",
    "options": [
      "Forces a full page reload",
      "Navigates client-side without losing app state",
      "Only works with class components",
      "Disables browser history"
    ],
    "correct": 1,
    "explanation": "<Link> updates history and route state without a full document reload."
  },
  {
    "id": "react-i-092",
    "question": "React Router nested routes usually render child route UI through:",
    "options": [
      "<Outlet />",
      "<StrictMode />",
      "useMemo()",
      "React.Fragment only"
    ],
    "correct": 0,
    "explanation": "<Outlet /> marks where the matched child route renders inside a parent layout."
  },
  {
    "id": "react-i-093",
    "question": "useParams() is commonly used to:",
    "options": [
      "Read dynamic URL segments like :id",
      "Store global app state",
      "Catch rendering errors",
      "Prevent all navigation"
    ],
    "correct": 0,
    "explanation": "Route params expose values from path patterns such as /users/:userId."
  },
  {
    "id": "react-i-094",
    "question": "A protected route should generally:",
    "options": [
      "Hide links with CSS only",
      "Check auth state and redirect or block unauthorized users",
      "Store passwords in localStorage",
      "Disable React Router"
    ],
    "correct": 1,
    "explanation": "UI-only hiding is not authorization; guarded routes handle unauthenticated access."
  },
  {
    "id": "react-i-095",
    "question": "React Router loader functions are used to:",
    "options": [
      "Load route data before rendering a route",
      "Create CSS animations",
      "Memoize component props",
      "Replace error boundaries"
    ],
    "correct": 0,
    "explanation": "Data routers can fetch route data in loaders so components receive ready data or pending/error states."
  },
  {
    "id": "react-i-096",
    "question": "React Testing Library encourages queries like getByRole because they:",
    "options": [
      "Target implementation details",
      "Mirror how users and assistive tech find elements",
      "Only find CSS classes",
      "Skip accessibility checks"
    ],
    "correct": 1,
    "explanation": "Role/name queries push tests toward accessible, user-visible behavior."
  },
  {
    "id": "react-i-097",
    "question": "userEvent.click is usually preferred over fireEvent.click because it:",
    "options": [
      "Simulates a more realistic user interaction sequence",
      "Bypasses React events",
      "Only works in production",
      "Ignores disabled controls"
    ],
    "correct": 0,
    "explanation": "userEvent models interactions closer to real users, often including focus and pointer behavior."
  },
  {
    "id": "react-i-098",
    "question": "findBy* queries in React Testing Library are best for:",
    "options": [
      "Waiting for async UI to appear",
      "Selecting private component state",
      "Changing props directly",
      "Disabling act warnings"
    ],
    "correct": 0,
    "explanation": "findBy queries combine a query with async waiting, useful after data loads or delayed updates."
  },
  {
    "id": "react-i-099",
    "question": "Testing behavior over implementation means:",
    "options": [
      "Assert visible results and interactions, not internal state names",
      "Snapshot every component only",
      "Query by generated class names",
      "Test React hooks by reading private variables"
    ],
    "correct": 0,
    "explanation": "Behavior-focused tests survive refactors because they match what users observe."
  },
  {
    "id": "react-i-100",
    "question": "Mocking fetch in a component test is usually done to:",
    "options": [
      "Control network responses and test loading/error states",
      "Avoid rendering JSX",
      "Disable accessibility queries",
      "Make React skip effects"
    ],
    "correct": 0,
    "explanation": "Controlled mocks let tests cover success, loading, and failure paths deterministically.",
    "demo": {
      "type": "jsx",
      "code": "expect(await screen.findByRole('heading', { name: /profile/i })).toBeInTheDocument();"
    }
  }
];

const ADVANCED = [
  {
    "id": "react-a-001",
    "question": "useReducer is preferred over useState when:",
    "options": [
      "Complex state transitions or multiple sub-values",
      "Single boolean toggle only",
      "Never",
      "CSS theming only"
    ],
    "correct": 0,
    "explanation": "Reducer centralizes update logic for complex state."
  },
  {
    "id": "react-a-002",
    "question": "useReducer signature is:",
    "options": [
      "class only",
      "[state, dispatch] = useReducer(reducer, initialArg, init?)",
      "[state, setState] only",
      "useReducer() no args"
    ],
    "correct": 1,
    "explanation": "Returns current state and dispatch function."
  },
  {
    "id": "react-a-003",
    "question": "Reducer function must be:",
    "options": [
      "Mutating state",
      "Side effectful",
      "Pure: (state, action) => newState",
      "Async always"
    ],
    "correct": 2,
    "explanation": "Pure reducers enable predictable updates and time travel debugging."
  },
  {
    "id": "react-a-004",
    "question": "dispatch({ type: \"increment\" }) triggers:",
    "options": [
      "Direct DOM update",
      "Reducer call with that action",
      "Context only",
      "Automatic fetch"
    ],
    "correct": 1,
    "explanation": "dispatch sends actions to reducer for next state."
  },
  {
    "id": "react-a-005",
    "question": "Lazy initialization in useReducer uses:",
    "options": [
      "third init function: init(initialArg)",
      "refs",
      "useEffect",
      "useMemo only"
    ],
    "correct": 0,
    "explanation": "init(initialState) computes expensive initial state once."
  },
  {
    "id": "react-a-006",
    "question": "useReducer with context pattern provides:",
    "options": [
      "CSS",
      "No re-renders",
      "Global-like dispatch without prop drilling",
      "Automatic persistence"
    ],
    "correct": 2,
    "explanation": "Provider passes [state, dispatch] together."
  },
  {
    "id": "react-a-007",
    "question": "Compared to Redux, useReducer is:",
    "options": [
      "Server only",
      "Identical library",
      "Deprecated",
      "Local component state reducer, not full store ecosystem"
    ],
    "correct": 3,
    "explanation": "useReducer is built-in; Redux adds middleware, devtools, etc."
  },
  {
    "id": "react-a-008",
    "question": "Functional dispatch form:",
    "options": [
      "useState only",
      "setReducer",
      "Not built-in; reducer receives action object typically",
      "dispatch(fn)"
    ],
    "correct": 2,
    "explanation": "Unlike setState, dispatch usually takes action, not updater fn."
  },
  {
    "id": "react-a-009",
    "question": "Immer with useReducer helps:",
    "options": [
      "Skip renders",
      "Replace dispatch",
      "Write mutable-looking updates immutably",
      "Remove reducer"
    ],
    "correct": 2,
    "explanation": "Immer produces immutable next state from drafts."
  },
  {
    "id": "react-a-010",
    "question": "Testing reducer in isolation:",
    "options": [
      "Requires full DOM",
      "Call reducer(prev, action) directly in tests",
      "Impossible",
      "Needs context"
    ],
    "correct": 1,
    "explanation": "Pure reducers are easy unit test targets."
  },
  {
    "id": "react-a-011",
    "question": "Multiple useReducer in one component:",
    "options": [
      "Classes only",
      "Forbidden",
      "One max",
      "Allowed for separate concerns"
    ],
    "correct": 3,
    "explanation": "Split unrelated state into different reducers."
  },
  {
    "id": "react-a-012",
    "question": "Action type constants help:",
    "options": [
      "Disable TS",
      "Replace reducer",
      "Avoid typos and document intent",
      "Slow apps"
    ],
    "correct": 2,
    "explanation": "Discriminated unions / constants improve maintainability."
  },
  {
    "id": "react-a-013",
    "question": "useReducer state updates are:",
    "options": [
      "Scheduled like useState; may batch",
      "Instant paint",
      "Synchronous DOM always",
      "Never batched"
    ],
    "correct": 0,
    "explanation": "dispatch triggers re-render through same update queue."
  },
  {
    "id": "react-a-014",
    "question": "When reducer returns same state reference:",
    "options": [
      "Always re-renders",
      "Resets hooks",
      "Throws",
      "React bails out of re-render"
    ],
    "correct": 3,
    "explanation": "Reference equality optimization applies to reducer output."
  },
  {
    "id": "react-a-015",
    "question": "Combining useReducer + useEffect for fetch:",
    "options": [
      "Illegal",
      "Replaces fetch",
      "Effect responds to state flags dispatching LOAD/SUCCESS/FAIL",
      "Anti-pattern always"
    ],
    "correct": 2,
    "explanation": "State machine style models async flows clearly.",
    "demo": {
      "type": "jsx",
      "code": "function reducer(state, action) {\n  switch (action.type) {\n    case \"inc\": return { count: state.count + 1 };\n    default: return state;\n  }\n}"
    }
  },
  {
    "id": "react-a-016",
    "question": "useRef returns:",
    "options": [
      "Mutable .current object persisting across renders",
      "Context",
      "Immutable snapshot",
      "DOM only class"
    ],
    "correct": 0,
    "explanation": "Ref object survives re-renders without triggering them."
  },
  {
    "id": "react-a-017",
    "question": "Updating ref.current causes:",
    "options": [
      "Unmount",
      "No re-render",
      "Immediate re-render",
      "Context update"
    ],
    "correct": 1,
    "explanation": "Mutating ref does not notify React to render."
  },
  {
    "id": "react-a-018",
    "question": "DOM ref via ref={myRef} gives:",
    "options": [
      "CSS",
      "myRef.current pointing to DOM node after mount",
      "Props clone",
      "State copy"
    ],
    "correct": 1,
    "explanation": "React assigns element to ref on commit."
  },
  {
    "id": "react-a-019",
    "question": "useRef vs useState for timer id:",
    "options": [
      "Ref avoids extra render when storing mutable non-UI value",
      "Ref illegal",
      "State always better",
      "Same always"
    ],
    "correct": 0,
    "explanation": "Refs store values that should not affect UI output."
  },
  {
    "id": "react-a-020",
    "question": "Callback refs function form:",
    "options": [
      "SSR only",
      "Never used",
      "ref={node => { ... }} called with node or null",
      "Replaces useState"
    ],
    "correct": 2,
    "explanation": "Function refs run on mount/unmount for DOM attachment."
  },
  {
    "id": "react-a-021",
    "question": "Forwarding refs uses:",
    "options": [
      "keys",
      "context",
      "forwardRef + useImperativeHandle optionally",
      "memo only"
    ],
    "correct": 2,
    "explanation": "forwardRef passes ref through wrapper components to child DOM/component."
  },
  {
    "id": "react-a-022",
    "question": "useImperativeHandle customizes:",
    "options": [
      "Keys",
      "All props",
      "CSS",
      "What parent ref exposes from child"
    ],
    "correct": 3,
    "explanation": "Limit imperative API surface intentionally."
  },
  {
    "id": "react-a-023",
    "question": "Storing previous props in ref pattern avoids:",
    "options": [
      "All bugs",
      "Lists",
      "Effects",
      "Re-renders while tracking prior value"
    ],
    "correct": 3,
    "explanation": "Update ref in useEffect after render for previous value."
  },
  {
    "id": "react-a-024",
    "question": "Ref as instance variable replacement in functions:",
    "options": [
      "Classes only",
      "Deprecated",
      "Yes for mutable boxes",
      "No refs in functions"
    ],
    "correct": 2,
    "explanation": "Refs replace this.field for mutable instance data."
  },
  {
    "id": "react-a-025",
    "question": "Reading ref during render for DOM layout:",
    "options": [
      "Best practice",
      "SSR safe always",
      "Required",
      "Avoid; use useLayoutEffect for measurements"
    ],
    "correct": 3,
    "explanation": "DOM may be unavailable or stale during render phase."
  },
  {
    "id": "react-a-026",
    "question": "StrictMode double mount clears refs:",
    "options": [
      "No effect",
      "Refs persist forever",
      "Error",
      "Ref reset on remount; cleanup must handle"
    ],
    "correct": 3,
    "explanation": "Dev remounting tests ref lifecycle correctness."
  },
  {
    "id": "react-a-027",
    "question": "Before React 19, ref forwarding to function components requires:",
    "options": [
      "class only",
      "forwardRef because functions have no instance",
      "Nothing special",
      "context"
    ],
    "correct": 1,
    "explanation": "Before React 19, function components did not expose ref by default. React 19 can pass ref as a normal prop."
  },
  {
    "id": "react-a-028",
    "question": "useRef initial value:",
    "options": [
      "Ignored always",
      "Copied to state",
      "Used once for .current initialization",
      "Reset every render"
    ],
    "correct": 2,
    "explanation": "Initial arg sets starting current value only on first create."
  },
  {
    "id": "react-a-029",
    "question": "Multiple refs on one element:",
    "options": [
      "Impossible",
      "CSS",
      "Two ref props",
      "Use callback ref or merge refs utility"
    ],
    "correct": 3,
    "explanation": "Combine callbacks to assign same node to multiple refs."
  },
  {
    "id": "react-a-030",
    "question": "Refs and concurrent rendering:",
    "options": [
      "Ref attachment timing follows commit; avoid assuming mid-render",
      "Disable concurrent",
      "No interaction",
      "Refs break"
    ],
    "correct": 0,
    "explanation": "Refs reflect committed DOM, safe in effects/layout effects.",
    "demo": {
      "type": "jsx",
      "code": "const inputRef = useRef(null);\ninputRef.current?.focus();"
    }
  },
  {
    "id": "react-a-031",
    "question": "React concurrent rendering allows:",
    "options": [
      "Synchronous only UI",
      "Removing hooks",
      "Interruptible rendering and prioritization",
      "No batching"
    ],
    "correct": 2,
    "explanation": "Concurrent mode features prioritize urgent updates."
  },
  {
    "id": "react-a-032",
    "question": "startTransition marks updates as:",
    "options": [
      "Non-urgent transitions",
      "Errors",
      "Blocking always",
      "SSR only"
    ],
    "correct": 0,
    "explanation": "Transitions keep UI responsive during heavy renders."
  },
  {
    "id": "react-a-033",
    "question": "useTransition returns:",
    "options": [
      "context",
      "memo value",
      "ref only",
      "[isPending, startTransition]"
    ],
    "correct": 3,
    "explanation": "isPending indicates transition in progress."
  },
  {
    "id": "react-a-034",
    "question": "useDeferredValue defers:",
    "options": [
      "CSS",
      "All state",
      "Events",
      "Updating non-urgent derived value"
    ],
    "correct": 3,
    "explanation": "Deferred value lags behind urgent state during load."
  },
  {
    "id": "react-a-035",
    "question": "Suspense lets you:",
    "options": [
      "Memoize",
      "Replace router",
      "Show fallback while children load async data/code",
      "Catch JS errors"
    ],
    "correct": 2,
    "explanation": "Suspense boundaries display fallback until ready."
  },
  {
    "id": "react-a-036",
    "question": "lazy(() => import(\"./Comp\")) enables:",
    "options": [
      "Keys",
      "SSR ban",
      "Code splitting with dynamic import",
      "Context"
    ],
    "correct": 2,
    "explanation": "React.lazy loads component module on demand."
  },
  {
    "id": "react-a-037",
    "question": "Suspense + lazy requires:",
    "options": [
      "class only",
      "A Suspense boundary with a fallback",
      "Nothing",
      "No fallback"
    ],
    "correct": 1,
    "explanation": "React.lazy components must render under Suspense. Add an Error Boundary separately for failed chunk loads."
  },
  {
    "id": "react-a-038",
    "question": "Tearing refers to:",
    "options": [
      "Memo",
      "CSS bug",
      "Keys",
      "Inconsistent UI during concurrent external store reads without sync"
    ],
    "correct": 3,
    "explanation": "useSyncExternalStore helps subscribe safely concurrently."
  },
  {
    "id": "react-a-039",
    "question": "useSyncExternalStore is for:",
    "options": [
      "CSS",
      "Refs only",
      "Forms only",
      "Reading external mutable stores in concurrent-safe way"
    ],
    "correct": 3,
    "explanation": "Ensures consistent snapshot during concurrent render."
  },
  {
    "id": "react-a-040",
    "question": "Automatic batching in React 18 applies to:",
    "options": [
      "Never",
      "Classes only",
      "Promises, setTimeout, native handlers too",
      "Only React events"
    ],
    "correct": 2,
    "explanation": "More updates batch across async boundaries."
  },
  {
    "id": "react-a-041",
    "question": "selective hydration (SSR):",
    "options": [
      "CSS feature",
      "Full page block always",
      "Hydrate interactive parts prioritized",
      "No SSR"
    ],
    "correct": 2,
    "explanation": "Streaming SSR can hydrate important regions first."
  },
  {
    "id": "react-a-042",
    "question": "Transitions vs debouncing search:",
    "options": [
      "Transitions integrate with React scheduler; debounce is time-based",
      "Identical",
      "Transitions block UI",
      "Neither works"
    ],
    "correct": 0,
    "explanation": "startTransition cooperates with rendering priority."
  },
  {
    "id": "react-a-043",
    "question": "Concurrent features require:",
    "options": [
      "Class components",
      "createRoot not legacy ReactDOM.render",
      "jQuery",
      "No bundler"
    ],
    "correct": 1,
    "explanation": "Modern root API enables concurrent features."
  },
  {
    "id": "react-a-044",
    "question": "useId is useful when:",
    "options": [
      "Generating hydration-safe IDs for labels and inputs",
      "Creating database primary keys",
      "Replacing keys in arrays",
      "Storing user sessions"
    ],
    "correct": 0,
    "explanation": "useId creates stable IDs that match between server and client, useful for accessible form associations."
  },
  {
    "id": "react-a-045",
    "question": "Double rendering in StrictMode helps find:",
    "options": [
      "Keys only",
      "Network speed",
      "Impure render side effects",
      "CSS bugs"
    ],
    "correct": 2,
    "explanation": "Extra render pass surfaces non-idempotent render logic.",
    "demo": {
      "type": "output",
      "code": "startTransition(() => setQuery(q));",
      "output": "Non-blocking filter update"
    }
  },
  {
    "id": "react-a-046",
    "question": "Virtual DOM reconciliation minimizes:",
    "options": [
      "CSS parsing",
      "JS execution entirely",
      "Network",
      "Actual DOM operations via diffing"
    ],
    "correct": 3,
    "explanation": "React diffs trees to apply targeted DOM updates."
  },
  {
    "id": "react-a-047",
    "question": "React DevTools Profiler measures:",
    "options": [
      "Bundle size only",
      "Component render times and why rendered",
      "CSS",
      "Lint errors"
    ],
    "correct": 1,
    "explanation": "Profiler highlights expensive commits and triggers."
  },
  {
    "id": "react-a-048",
    "question": "Windowing/virtualization (react-window) helps:",
    "options": [
      "All items always",
      "Keys",
      "Context",
      "Render only visible list items"
    ],
    "correct": 3,
    "explanation": "Large lists virtualize to constant DOM size."
  },
  {
    "id": "react-a-049",
    "question": "Avoid inline object props to memo children because:",
    "options": [
      "Objects illegal",
      "New reference each render",
      "Memo deep compares always",
      "Faster re-renders"
    ],
    "correct": 1,
    "explanation": "Shallow compare sees different object identity."
  },
  {
    "id": "react-a-050",
    "question": "Code splitting reduces:",
    "options": [
      "Keys",
      "Initial JS bundle size",
      "CSS only",
      "HTML"
    ],
    "correct": 1,
    "explanation": "Dynamic import loads routes/components on demand."
  },
  {
    "id": "react-a-051",
    "question": "useMemo for filtering 10k items:",
    "options": [
      "Can reduce work if filter expensive and deps stable",
      "Never helps",
      "Replaces list",
      "Illegal"
    ],
    "correct": 0,
    "explanation": "Memoize heavy pure computations with correct deps."
  },
  {
    "id": "react-a-052",
    "question": "State colocation improves performance by:",
    "options": [
      "Removing keys",
      "Global store always",
      "Limiting re-render scope",
      "Lifting everything"
    ],
    "correct": 2,
    "explanation": "Local state avoids unrelated parent/child updates."
  },
  {
    "id": "react-a-053",
    "question": "useFormStatus helps a React form component read:",
    "options": [
      "The pending state of the nearest parent form action",
      "The current route params",
      "Browser cookie expiration",
      "All Redux store values"
    ],
    "correct": 0,
    "explanation": "useFormStatus lets submit buttons and form UI reflect pending submissions without prop drilling."
  },
  {
    "id": "react-a-054",
    "question": "Hydration mismatch hurts:",
    "options": [
      "Keys",
      "SSR performance and causes corrective client work",
      "Nothing",
      "CSS only"
    ],
    "correct": 1,
    "explanation": "Matching server/client HTML avoids expensive fixes."
  },
  {
    "id": "react-a-055",
    "question": "A data-fetching cache like TanStack Query primarily helps with:",
    "options": [
      "Server-state caching, retries, invalidation, and background refetching",
      "Replacing all component state",
      "Changing JSX syntax",
      "Removing HTTP errors"
    ],
    "correct": 0,
    "explanation": "Server state has lifecycle concerns like freshness, retries, and invalidation that are awkward to rebuild with raw effects."
  },
  {
    "id": "react-a-056",
    "question": "key stability affects:",
    "options": [
      "Bundle size",
      "CSS",
      "Imports",
      "Reconciliation efficiency and state preservation"
    ],
    "correct": 3,
    "explanation": "Bad keys force unnecessary unmount/remount."
  },
  {
    "id": "react-a-057",
    "question": "A TypeScript discriminated union for component props is useful to:",
    "options": [
      "Model mutually exclusive prop variants safely",
      "Disable JSX",
      "Force runtime prop validation only",
      "Replace React keys"
    ],
    "correct": 0,
    "explanation": "Discriminated unions let TypeScript narrow props by a mode/type field and prevent invalid combinations."
  },
  {
    "id": "react-a-058",
    "question": "dangerouslySetInnerHTML requires special care because:",
    "options": [
      "Unsanitized HTML can create XSS vulnerabilities",
      "It only works in class components",
      "It disables hydration",
      "It automatically escapes all HTML"
    ],
    "correct": 0,
    "explanation": "Only render trusted or sanitized HTML; user-provided HTML can execute scripts or dangerous markup."
  },
  {
    "id": "react-a-059",
    "question": "Web Workers with React for heavy compute:",
    "options": [
      "Offload CPU work; postMessage back to setState",
      "Anti-pattern always",
      "Replace React",
      "Required"
    ],
    "correct": 0,
    "explanation": "Keep main thread responsive for interactions."
  },
  {
    "id": "react-a-060",
    "question": "Measuring before optimizing prevents:",
    "options": [
      "All bugs",
      "Testing",
      "Code split",
      "Premature memo complexity without gains"
    ],
    "correct": 3,
    "explanation": "Profile commits to find real bottlenecks.",
    "demo": {
      "type": "output",
      "code": "Profiler: Parent 12ms, Row 0.1ms x 1000",
      "output": "Identify hot components"
    }
  },
  {
    "id": "react-a-061",
    "question": "Error boundaries catch:",
    "options": [
      "Render/lifecycle errors in children",
      "Event handler errors",
      "Async errors in fetch unless rethrown in render",
      "All errors everywhere"
    ],
    "correct": 0,
    "explanation": "Boundaries catch errors during rendering in subtree."
  },
  {
    "id": "react-a-062",
    "question": "Error boundaries are implemented as:",
    "options": [
      "memo",
      "Class components with static getDerivedStateFromError / componentDidCatch",
      "Function components with useErrorBoundary always built-in",
      "CSS"
    ],
    "correct": 1,
    "explanation": "No hook equivalent for defining boundary itself yet."
  },
  {
    "id": "react-a-063",
    "question": "getDerivedStateFromError returns:",
    "options": [
      "State update to show fallback UI",
      "Promise",
      "Context",
      "Error object to DOM"
    ],
    "correct": 0,
    "explanation": "Map error to fallback display state."
  },
  {
    "id": "react-a-064",
    "question": "componentDidCatch receives:",
    "options": [
      "refs",
      "state only",
      "error and errorInfo for logging",
      "props only"
    ],
    "correct": 2,
    "explanation": "Log to monitoring service in didCatch."
  },
  {
    "id": "react-a-065",
    "question": "Error in onClick handler:",
    "options": [
      "Crashes app always",
      "Caught by boundary",
      "Ignored",
      "NOT caught by error boundary; use try/catch"
    ],
    "correct": 3,
    "explanation": "Event errors occur outside render phase tree."
  },
  {
    "id": "react-a-066",
    "question": "Granular boundaries around widgets:",
    "options": [
      "Slow app",
      "Isolate failures so rest of app works",
      "Required one global",
      "Replace Suspense"
    ],
    "correct": 1,
    "explanation": "Multiple boundaries contain blast radius."
  },
  {
    "id": "react-a-067",
    "question": "react-error-boundary library provides:",
    "options": [
      "Declarative boundary component + reset keys",
      "Only classes forbidden",
      "CSS",
      "Router"
    ],
    "correct": 0,
    "explanation": "Community helper wraps class boundary ergonomically."
  },
  {
    "id": "react-a-068",
    "question": "Resetting boundary state via key prop:",
    "options": [
      "SSR only",
      "Remounts boundary when key changes after fix",
      "Removes errors magically without fix",
      "Illegal"
    ],
    "correct": 1,
    "explanation": "Changing key clears error state on retry."
  },
  {
    "id": "react-a-069",
    "question": "SSR error handling often uses:",
    "options": [
      "Nothing",
      "CSS",
      "Error boundary on client + server error pages separately",
      "Only boundaries"
    ],
    "correct": 2,
    "explanation": "Server may render error page before hydration boundaries apply."
  },
  {
    "id": "react-a-070",
    "question": "Suspense does NOT catch:",
    "options": [
      "Loading states",
      "Render errors like boundaries; use Error Boundary alongside",
      "lazy",
      "fallback"
    ],
    "correct": 1,
    "explanation": "Pair Suspense with Error Boundary for load/render failures."
  },
  {
    "id": "react-a-071",
    "question": "Production vs dev error overlay:",
    "options": [
      "CSS",
      "Same always",
      "No errors in prod",
      "Dev shows overlay; prod should show friendly fallback via boundary"
    ],
    "correct": 3,
    "explanation": "User-facing fallback UI matters in production."
  },
  {
    "id": "react-a-072",
    "question": "Throwing in render after async error:",
    "options": [
      "Events",
      "Only classes",
      "Can trigger boundary if thrown during render path",
      "Never caught"
    ],
    "correct": 2,
    "explanation": "Route async failures into render-throw or state error flag."
  },
  {
    "id": "react-a-073",
    "question": "Boundary cannot catch errors in:",
    "options": [
      "Itself (same boundary)",
      "Suspense",
      "memo",
      "Children always"
    ],
    "correct": 0,
    "explanation": "Boundary error falls to parent boundary."
  },
  {
    "id": "react-a-074",
    "question": "Fallback UI should:",
    "options": [
      "Show raw error always",
      "Reload window only",
      "Be empty",
      "Offer retry/navigate without exposing stack trace to users"
    ],
    "correct": 3,
    "explanation": "Friendly recovery improves UX."
  },
  {
    "id": "react-a-075",
    "question": "React 19 use(promise) integrates with which boundaries?",
    "options": [
      "Replace classes only",
      "Ignore errors",
      "CSS",
      "Integrate with Suspense/error handling patterns for promises"
    ],
    "correct": 3,
    "explanation": "use(promise) suspends until resolved under Suspense; rejected promises are handled by Error Boundaries.",
    "demo": {
      "type": "jsx",
      "code": "class EB extends React.Component {\n  static getDerivedStateFromError() { return { hasError: true }; }\n}"
    }
  },
  {
    "id": "react-a-076",
    "question": "Compound components pattern:",
    "options": [
      "HOC only",
      "CSS modules",
      "Related components share implicit state via context (Tabs, Tab)",
      "One giant component only"
    ],
    "correct": 2,
    "explanation": "Composition API like <Select><Option /></Select>."
  },
  {
    "id": "react-a-077",
    "question": "Render props pattern passes:",
    "options": [
      "Function as child/prop to delegate rendering",
      "Reducer only",
      "CSS only",
      "Refs mandatory"
    ],
    "correct": 0,
    "explanation": "children({ data }) shares logic with flexible UI."
  },
  {
    "id": "react-a-078",
    "question": "HOC (Higher-Order Component):",
    "options": [
      "Context",
      "Hook",
      "Fragment",
      "Function taking component returning enhanced component"
    ],
    "correct": 3,
    "explanation": "withAuth(Component) wraps behavior."
  },
  {
    "id": "react-a-079",
    "question": "Container/presentational split separates:",
    "options": [
      "Server vs client only",
      "Keys vs lists",
      "Data/logic vs pure UI",
      "CSS vs HTML"
    ],
    "correct": 2,
    "explanation": "Containers fetch/state; presentational renders props."
  },
  {
    "id": "react-a-080",
    "question": "Controlled vs uncontrolled pattern choice:",
    "options": [
      "Never refs",
      "Context only",
      "React state vs ref/DOM for form values",
      "Always controlled"
    ],
    "correct": 2,
    "explanation": "Pick based on validation and single-source needs."
  },
  {
    "id": "react-a-081",
    "question": "State reducer pattern (ControllableComponent):",
    "options": [
      "CSS",
      "Only classes",
      "No props",
      "Parent can override state updates via onChange reducer prop"
    ],
    "correct": 3,
    "explanation": "Inversion like <Toggle stateReducer={fn} /> for advanced control."
  },
  {
    "id": "react-a-082",
    "question": "Provider pattern centralizes:",
    "options": [
      "Shared state/logic via context providers",
      "CSS",
      "Keys",
      "DOM events only"
    ],
    "correct": 0,
    "explanation": "ThemeProvider, AuthProvider are common."
  },
  {
    "id": "react-a-083",
    "question": "Slot pattern (composition):",
    "options": [
      "SSR ban",
      "Pass JSX children/components into layout placeholders",
      "Replace props",
      "Illegal"
    ],
    "correct": 1,
    "explanation": "Card header/footer slots via props or children."
  },
  {
    "id": "react-a-084",
    "question": "Headless UI libraries provide:",
    "options": [
      "No JSX",
      "CSS only",
      "Global state",
      "Behavior/accessibility without styles"
    ],
    "correct": 3,
    "explanation": "Logic hooks/components; consumer owns design."
  },
  {
    "id": "react-a-085",
    "question": "Feature folder structure groups:",
    "options": [
      "Alphabetical only",
      "Components, hooks, tests by feature domain",
      "CSS only",
      "Random"
    ],
    "correct": 1,
    "explanation": "Colocate related code for maintainability."
  },
  {
    "id": "react-a-086",
    "question": "Anti-pattern: huge useEffect doing everything suggests:",
    "options": [
      "Split concerns; custom hooks; derived state",
      "Keys",
      "More effects",
      "Global variables"
    ],
    "correct": 0,
    "explanation": "Decompose effectful logic for clarity and testing."
  },
  {
    "id": "react-a-087",
    "question": "Prop getters pattern (downshift):",
    "options": [
      "Portal",
      "memo only",
      "Functions applying props to elements consistently",
      "CSS"
    ],
    "correct": 2,
    "explanation": "getInputProps() merges a11y handlers and refs."
  },
  {
    "id": "react-a-088",
    "question": "Portal pattern used for:",
    "options": [
      "Reducer",
      "Lists",
      "Memo",
      "Rendering outside parent DOM hierarchy (modals, tooltips)"
    ],
    "correct": 3,
    "explanation": "createPortal(child, document.body) escapes overflow:hidden."
  },
  {
    "id": "react-a-089",
    "question": "Lifted state vs external store (Zustand/Redux):",
    "options": [
      "Always lift",
      "Store when many unrelated components need fine-grained updates",
      "Never store",
      "CSS"
    ],
    "correct": 1,
    "explanation": "External stores help global client state at scale."
  },
  {
    "id": "react-a-090",
    "question": "Composition over inheritance in React means:",
    "options": [
      "CSS inheritance",
      "No reuse",
      "Extend Component always",
      "Build via nesting components not subclassing React.Component for reuse"
    ],
    "correct": 3,
    "explanation": "React favors composable functions over class hierarchies.",
    "demo": {
      "type": "jsx",
      "code": "<Modal>\n  <Modal.Header />\n  <Modal.Body />\n</Modal>"
    }
  },
  {
    "id": "react-a-091",
    "question": "React 19 Actions refer to:",
    "options": [
      "Class methods",
      "Async transitions wrapping side effects with pending states",
      "Refs only",
      "CSS animations"
    ],
    "correct": 1,
    "explanation": "Actions integrate async work with useTransition/useActionState."
  },
  {
    "id": "react-a-092",
    "question": "useActionState (formerly useFormState) provides:",
    "options": [
      "State updated by async form actions with pending flag",
      "CSS theming",
      "Refs",
      "Keys"
    ],
    "correct": 0,
    "explanation": "Form actions can return next state from server/client fn."
  },
  {
    "id": "react-a-093",
    "question": "use() hook can:",
    "options": [
      "Replace useEffect always",
      "Mutate DOM",
      "Replace keys",
      "Read promise or context during render (with Suspense)"
    ],
    "correct": 3,
    "explanation": "use(promise) suspends until resolved in compatible trees."
  },
  {
    "id": "react-a-094",
    "question": "ref as prop (React 19):",
    "options": [
      "Function components can accept ref without forwardRef",
      "Classes only",
      "Illegal",
      "Removed refs"
    ],
    "correct": 0,
    "explanation": "ref becomes a regular prop in React 19."
  },
  {
    "id": "react-a-095",
    "question": "React Compiler in 19 ecosystem:",
    "options": [
      "Runtime interpreter",
      "Compile-time auto memoization reducing manual optimization",
      "Router",
      "CSS bundler"
    ],
    "correct": 1,
    "explanation": "Compiler analyzes components for safe memo insertion."
  },
  {
    "id": "react-a-096",
    "question": "Document metadata in 19 (<title>, <meta>):",
    "options": [
      "SSR only crash",
      "Ignored",
      "Can render in components hoisted to head automatically",
      "CSS"
    ],
    "correct": 2,
    "explanation": "Built-in support for metadata tags anywhere in tree."
  },
  {
    "id": "react-a-097",
    "question": "Server Components (RSC) in 19 stack:",
    "options": [
      "Replace all client JS",
      "Are class components",
      "Disable hooks on server always in client components",
      "Run on server; send serialized UI to client bundle separately"
    ],
    "correct": 3,
    "explanation": "RSC reduces client JS; client components still hydrate interactivity."
  },
  {
    "id": "react-a-098",
    "question": "form action prop with function in 19:",
    "options": [
      "Can invoke action with FormData on submit",
      "Removed forms",
      "No async",
      "CSS only"
    ],
    "correct": 0,
    "explanation": "Declarative form handling integrates with Actions API."
  },
  {
    "id": "react-a-099",
    "question": "useOptimistic enables:",
    "options": [
      "Pessimistic locking only",
      "Optimistic UI updates while async action pending",
      "CSS",
      "Keys"
    ],
    "correct": 1,
    "explanation": "Show expected result immediately rolling back on failure."
  },
  {
    "id": "react-a-100",
    "question": "React 19 improved hydration error messages help:",
    "options": [
      "Replace Suspense",
      "Debug SSR/client HTML mismatches faster",
      "Disable SSR",
      "Remove hydration"
    ],
    "correct": 1,
    "explanation": "Clearer diffs reduce time fixing mismatch bugs.",
    "demo": {
      "type": "output",
      "code": "const [error, submitAction, isPending] = useActionState(save, null);",
      "output": "Pending + result state from action"
    }
  }
];

/** @param {'beginner' | 'intermediate' | 'advanced'} level */
export function getReactQuestions(level) {
  switch (level) {
    case 'beginner':
      return BEGINNER;
    case 'intermediate':
      return INTERMEDIATE;
    case 'advanced':
      return ADVANCED;
    default:
      throw new Error(`Unknown level: ${level}`);
  }
}
