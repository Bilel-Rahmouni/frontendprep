const BEGINNER = [
  {
    "id": "fe-b-001",
    "question": "Which typeof result is returned for null in JavaScript?",
    "options": [
      "\"object\"",
      "\"null\"",
      "\"undefined\"",
      "\"number\""
    ],
    "correct": 0,
    "explanation": "typeof null returns \"object\" due to a long-standing language bug.",
    "demo": {
      "type": "output",
      "code": "typeof null",
      "output": "\"object\""
    }
  },
  {
    "id": "fe-b-002",
    "question": "What is the typeof operator result for an array?",
    "options": [
      "\"object\"",
      "\"list\"",
      "\"collection\"",
      "\"array\""
    ],
    "correct": 0,
    "explanation": "Arrays are objects; typeof [] is \"object\".",
    "demo": {
      "type": "output",
      "code": "Array.isArray([])",
      "output": "true"
    }
  },
  {
    "id": "fe-b-003",
    "question": "Which value is falsy in JavaScript?",
    "options": [
      "[]",
      "0",
      "{}",
      "\"0\""
    ],
    "correct": 1,
    "explanation": "0 is falsy; non-empty strings, arrays, and objects are truthy.",
    "demo": {
      "type": "output",
      "code": "Boolean(0) // false\nBoolean(\"0\") // true",
      "output": "false, true"
    }
  },
  {
    "id": "fe-b-004",
    "question": "What does Number(\"42\") return?",
    "options": [
      "42",
      "NaN",
      "undefined",
      "\"42\""
    ],
    "correct": 0,
    "explanation": "Number() coerces the string \"42\" to the number 42.",
    "demo": {
      "type": "output",
      "code": "Number(\"42\")",
      "output": "42"
    }
  },
  {
    "id": "fe-b-005",
    "question": "Which symbol creates a unique property key?",
    "options": [
      "Key()",
      "Symbol()",
      "Object.key()",
      "Unique()"
    ],
    "correct": 1,
    "explanation": "Symbol() creates a unique, immutable identifier.",
    "demo": {
      "type": "output",
      "code": "Symbol('id') === Symbol('id')",
      "output": "false"
    }
  },
  {
    "id": "fe-b-006",
    "question": "What is the result of Boolean(\"\")?",
    "options": [
      "false",
      "true",
      "null",
      "undefined"
    ],
    "correct": 0,
    "explanation": "An empty string is falsy.",
    "demo": {
      "type": "output",
      "code": "Boolean(\"\")",
      "output": "false"
    }
  },
  {
    "id": "fe-b-007",
    "question": "Which type does typeof NaN return?",
    "options": [
      "\"NaN\"",
      "\"undefined\"",
      "\"object\"",
      "\"number\""
    ],
    "correct": 3,
    "explanation": "NaN is of type number in JavaScript.",
    "demo": {
      "type": "output",
      "code": "typeof NaN",
      "output": "\"number\""
    }
  },
  {
    "id": "fe-b-008",
    "question": "What does String(100) produce?",
    "options": [
      "NaN",
      "100",
      "undefined",
      "\"100\""
    ],
    "correct": 3,
    "explanation": "String() converts a number to its string representation."
  },
  {
    "id": "fe-b-009",
    "question": "Which comparison is strict (no coercion)?",
    "options": [
      "=",
      "===",
      "!=",
      "=="
    ],
    "correct": 1,
    "explanation": "=== compares value and type without coercion.",
    "demo": {
      "type": "output",
      "code": "0 === \"0\"",
      "output": "false"
    }
  },
  {
    "id": "fe-b-010",
    "question": "What is typeof undefined?",
    "options": [
      "\"undefined\"",
      "\"null\"",
      "\"void\"",
      "\"empty\""
    ],
    "correct": 0,
    "explanation": "Undefined variables and missing values have typeof \"undefined\"."
  },
  {
    "id": "fe-b-011",
    "question": "Which value represents intentional absence of value?",
    "options": [
      "undefined",
      "null",
      "0",
      "false"
    ],
    "correct": 1,
    "explanation": "null is an assigned empty value; undefined means not defined."
  },
  {
    "id": "fe-b-012",
    "question": "What does parseInt(\"10px\") return?",
    "options": [
      "0",
      "\"10px\"",
      "NaN",
      "10"
    ],
    "correct": 3,
    "explanation": "parseInt parses leading numeric characters until invalid."
  },
  {
    "id": "fe-b-013",
    "question": "Which is a primitive type?",
    "options": [
      "object",
      "array",
      "function",
      "string"
    ],
    "correct": 3,
    "explanation": "Strings are primitives; objects, arrays, and functions are not."
  },
  {
    "id": "fe-b-014",
    "question": "What is the result of 0.1 + 0.2 === 0.3?",
    "options": [
      "undefined",
      "true",
      "false",
      "NaN"
    ],
    "correct": 2,
    "explanation": "Floating-point precision makes 0.1 + 0.2 slightly greater than 0.3.",
    "demo": {
      "type": "output",
      "code": "0.1 + 0.2",
      "output": "0.30000000000000004"
    }
  },
  {
    "id": "fe-b-015",
    "question": "Which converts a value to boolean explicitly?",
    "options": [
      "bool(value)",
      "Boolean(value)",
      "ToBool(value)",
      "!!value only"
    ],
    "correct": 1,
    "explanation": "Boolean() is the explicit conversion function."
  },
  {
    "id": "fe-b-016",
    "question": "Which keyword declares a block-scoped variable?",
    "options": [
      "let",
      "function",
      "static",
      "var"
    ],
    "correct": 0,
    "explanation": "let is block-scoped; var is function-scoped.",
    "demo": {
      "type": "output",
      "code": "if (true) { let x = 1; }\n// x is not accessible here",
      "output": "ReferenceError if accessed"
    }
  },
  {
    "id": "fe-b-017",
    "question": "What happens if you reassign a const binding?",
    "options": [
      "Silent failure",
      "undefined assigned",
      "New binding created",
      "TypeError"
    ],
    "correct": 3,
    "explanation": "const prevents reassignment of the binding."
  },
  {
    "id": "fe-b-018",
    "question": "Which declaration is hoisted but left in the temporal dead zone?",
    "options": [
      "let",
      "function expression only",
      "import",
      "var"
    ],
    "correct": 0,
    "explanation": "let and const are hoisted but uninitialized until their line runs."
  },
  {
    "id": "fe-b-019",
    "question": "What is the default behavior when accessing let before its declaration?",
    "options": [
      "null",
      "ReferenceError",
      "0",
      "undefined"
    ],
    "correct": 1,
    "explanation": "Accessing let before declaration throws ReferenceError (TDZ)."
  },
  {
    "id": "fe-b-020",
    "question": "Top-level var in a classic browser script creates what on window?",
    "options": [
      "Nothing",
      "A module export",
      "A block binding only",
      "A global property"
    ],
    "correct": 3,
    "explanation": "Top-level var in non-module scripts becomes a window property."
  },
  {
    "id": "fe-b-021",
    "question": "What does destructuring const { a } = obj accomplish?",
    "options": [
      "Extracts property a into a const binding",
      "Deletes a",
      "Deep-clones obj",
      "Mutates obj.a"
    ],
    "correct": 0,
    "explanation": "Object destructuring assigns matching properties to variables.",
    "demo": {
      "type": "output",
      "code": "const obj = { a: 1, b: 2 };\nconst { a } = obj;\na",
      "output": "1"
    }
  },
  {
    "id": "fe-b-022",
    "question": "Which operator assigns only when the left side is nullish?",
    "options": [
      "||=",
      "??=",
      "+=",
      "&&="
    ],
    "correct": 1,
    "explanation": "??= assigns when the value is null or undefined."
  },
  {
    "id": "fe-b-023",
    "question": "What is block scope?",
    "options": [
      "Variables visible only inside their { } block",
      "Variables visible everywhere",
      "Scope limited to window only",
      "Scope of imports only"
    ],
    "correct": 0,
    "explanation": "Block scope limits visibility to the enclosing block."
  },
  {
    "id": "fe-b-024",
    "question": "Which is a valid JavaScript identifier?",
    "options": [
      "user-name",
      "userName",
      "class",
      "123name"
    ],
    "correct": 1,
    "explanation": "Identifiers cannot start with digits or contain hyphens; class is reserved."
  },
  {
    "id": "fe-b-025",
    "question": "What scope does var have inside a function?",
    "options": [
      "Function scope",
      "Block scope only",
      "No scope",
      "Module scope only"
    ],
    "correct": 0,
    "explanation": "var is scoped to the enclosing function or global."
  },
  {
    "id": "fe-b-026",
    "question": "What does a function declaration require?",
    "options": [
      "arrow syntax only",
      "function keyword and name",
      "return type annotation",
      "async keyword"
    ],
    "correct": 1,
    "explanation": "function name() {} declares a hoisted function."
  },
  {
    "id": "fe-b-027",
    "question": "Which syntax defines an anonymous function expression?",
    "options": [
      "fn := () => {}",
      "function fn() {}",
      "const fn = function() {}",
      "def fn()"
    ],
    "correct": 2,
    "explanation": "Function expressions assign a function to a variable without naming the function."
  },
  {
    "id": "fe-b-028",
    "question": "What does return without a value return?",
    "options": [
      "undefined",
      "0",
      "null",
      "false"
    ],
    "correct": 0,
    "explanation": "Functions return undefined when return has no value."
  },
  {
    "id": "fe-b-029",
    "question": "Arrow functions inherit what from the enclosing scope?",
    "options": [
      "Their own dynamic this",
      "this binding",
      "prototype chain",
      "The arguments object always"
    ],
    "correct": 1,
    "explanation": "Arrow functions lexically capture this from the outer scope.",
    "demo": {
      "type": "output",
      "code": "const obj = {\n  id: 1,\n  get: () => this.id\n};",
      "output": "this is lexically bound (not obj)"
    }
  },
  {
    "id": "fe-b-030",
    "question": "What are function parameters?",
    "options": [
      "DOM nodes",
      "Named inputs in the parameter list",
      "Global variables",
      "Return values"
    ],
    "correct": 1,
    "explanation": "Parameters are placeholders for arguments passed at call time."
  },
  {
    "id": "fe-b-031",
    "question": "Which correctly invokes a function named greet?",
    "options": [
      "run greet",
      "greet[]",
      "call greet",
      "greet()"
    ],
    "correct": 3,
    "explanation": "Functions are invoked with parentheses and optional arguments."
  },
  {
    "id": "fe-b-032",
    "question": "What is a callback function?",
    "options": [
      "A function that never runs",
      "Only a DOM handler",
      "A compiled function",
      "A function passed to be called later"
    ],
    "correct": 3,
    "explanation": "Callbacks are passed as arguments and invoked by another function."
  },
  {
    "id": "fe-b-033",
    "question": "Default parameters apply when the argument is?",
    "options": [
      "0 always",
      "null always",
      "undefined",
      "empty string only"
    ],
    "correct": 2,
    "explanation": "Default values apply when the argument is undefined."
  },
  {
    "id": "fe-b-034",
    "question": "Rest parameters collect remaining arguments into what?",
    "options": [
      "An object",
      "An array",
      "undefined",
      "A string"
    ],
    "correct": 1,
    "explanation": "...rest gathers extra arguments into a real Array.",
    "demo": {
      "type": "output",
      "code": "function sum(a, ...rest) { return rest.length; }\nsum(1, 2, 3)",
      "output": "2"
    }
  },
  {
    "id": "fe-b-035",
    "question": "What does IIFE stand for?",
    "options": [
      "Immediately Invoked Function Expression",
      "Indexed Iterator For Each",
      "Inline Import Function Export",
      "Internal Inline Function Engine"
    ],
    "correct": 0,
    "explanation": "An IIFE runs as soon as it is defined, creating a private scope."
  },
  {
    "id": "fe-b-036",
    "question": "A higher-order function is one that?",
    "options": [
      "Only runs in strict mode",
      "Cannot accept arguments",
      "Must be async",
      "Takes or returns another function"
    ],
    "correct": 3,
    "explanation": "Higher-order functions take or return functions."
  },
  {
    "id": "fe-b-037",
    "question": "What is function scope?",
    "options": [
      "Only block scope inside if",
      "Only global scope",
      "Variables visible within the function body",
      "Module scope"
    ],
    "correct": 2,
    "explanation": "var and function declarations create function-level visibility."
  },
  {
    "id": "fe-b-038",
    "question": "A pure function is one that?",
    "options": [
      "Must use the DOM",
      "Returns the same output for same inputs without side effects",
      "Must be async",
      "Must use classes"
    ],
    "correct": 1,
    "explanation": "Pure functions are predictable and do not mutate external state."
  },
  {
    "id": "fe-b-039",
    "question": "What does Function.prototype.bind() return?",
    "options": [
      "A new function with a fixed this",
      "The immediate call result",
      "A DOM element",
      "A Promise"
    ],
    "correct": 0,
    "explanation": "bind creates a function with a permanently bound this value."
  },
  {
    "id": "fe-b-040",
    "question": "Which invokes a function with an array of arguments?",
    "options": [
      "fn.apply(null, args)",
      "fn.invoke",
      "fn.bind(args)",
      "fn.call[]"
    ],
    "correct": 0,
    "explanation": "apply invokes a function with a specified this and arguments array."
  },
  {
    "id": "fe-b-041",
    "question": "Which method adds elements to the end of an array?",
    "options": [
      "pop",
      "push",
      "shift",
      "unshift"
    ],
    "correct": 1,
    "explanation": "push mutates the array by adding elements at the end."
  },
  {
    "id": "fe-b-042",
    "question": "What does arr.map(fn) return?",
    "options": [
      "A single value",
      "undefined",
      "A new array of mapped values",
      "The original array mutated"
    ],
    "correct": 2,
    "explanation": "map produces a new array by transforming each element.",
    "demo": {
      "type": "output",
      "code": "[1, 2, 3].map(n => n * 2)",
      "output": "[2, 4, 6]"
    }
  },
  {
    "id": "fe-b-043",
    "question": "Which method removes the last element from an array?",
    "options": [
      "slice",
      "pop",
      "concat",
      "push"
    ],
    "correct": 1,
    "explanation": "pop removes and returns the last element."
  },
  {
    "id": "fe-b-044",
    "question": "What does arr.filter(fn) do?",
    "options": [
      "Mutates the array in place",
      "Returns elements that pass the test",
      "Sorts the array",
      "Flattens nested arrays"
    ],
    "correct": 1,
    "explanation": "filter creates a new array with elements where fn returns truthy.",
    "demo": {
      "type": "output",
      "code": "[1,2,3,4].filter(n => n % 2 === 0)",
      "output": "[2, 4]"
    }
  },
  {
    "id": "fe-b-045",
    "question": "What is the index of the first element in a JavaScript array?",
    "options": [
      "undefined",
      "1",
      "-1",
      "0"
    ],
    "correct": 3,
    "explanation": "JavaScript arrays are zero-indexed."
  },
  {
    "id": "fe-b-046",
    "question": "Which method checks whether a value exists in an array?",
    "options": [
      "contains",
      "includes",
      "exists",
      "has"
    ],
    "correct": 1,
    "explanation": "includes returns true if the array contains the value."
  },
  {
    "id": "fe-b-047",
    "question": "What does the spread operator [...arr] create?",
    "options": [
      "A shallow copy of arr",
      "A sorted array",
      "A deep clone",
      "A reference to the same array"
    ],
    "correct": 0,
    "explanation": "Spread into a new array literal creates a shallow copy."
  },
  {
    "id": "fe-b-048",
    "question": "Which method joins array elements into a string?",
    "options": [
      "stringify",
      "concat only",
      "join",
      "merge"
    ],
    "correct": 2,
    "explanation": "join concatenates elements with an optional separator."
  },
  {
    "id": "fe-b-049",
    "question": "Array.prototype.find() returns?",
    "options": [
      "A new filtered array",
      "The first matching element or undefined",
      "The index always",
      "A boolean only"
    ],
    "correct": 1,
    "explanation": "find returns the first element where the predicate is true."
  },
  {
    "id": "fe-b-050",
    "question": "Array.prototype.reduce() accumulates values into?",
    "options": [
      "A single value",
      "Always a new array",
      "Always an object",
      "A Promise"
    ],
    "correct": 0,
    "explanation": "reduce folds the array into one accumulated result."
  },
  {
    "id": "fe-b-051",
    "question": "Which method sorts an array in place?",
    "options": [
      "sorted",
      "sort",
      "arrange",
      "order"
    ],
    "correct": 1,
    "explanation": "sort mutates the original array; default sort is lexicographic."
  },
  {
    "id": "fe-b-052",
    "question": "What does arr.slice(1, 3) return?",
    "options": [
      "Elements at index 1 and 2",
      "The last two elements",
      "The mutated original array",
      "Elements 1 through 3 inclusive"
    ],
    "correct": 0,
    "explanation": "slice end index is exclusive; slice does not mutate."
  },
  {
    "id": "fe-b-053",
    "question": "The length property of a dense array reflects?",
    "options": [
      "The byte size",
      "The memory address",
      "The last index value",
      "The number of elements"
    ],
    "correct": 3,
    "explanation": "length is one greater than the highest index for dense arrays."
  },
  {
    "id": "fe-b-054",
    "question": "Which method adds elements to the beginning of an array?",
    "options": [
      "unshift",
      "shift",
      "push",
      "prepend"
    ],
    "correct": 0,
    "explanation": "unshift inserts elements at the start of the array."
  },
  {
    "id": "fe-b-055",
    "question": "Array.prototype.every() returns false when?",
    "options": [
      "The array has holes only",
      "Any element fails the predicate",
      "The array is empty always",
      "Only the first element fails"
    ],
    "correct": 1,
    "explanation": "every requires all elements to pass the predicate."
  },
  {
    "id": "fe-b-056",
    "question": "Which API selects the first element matching a CSS selector?",
    "options": [
      "document.find",
      "document.getElement",
      "document.select",
      "document.querySelector"
    ],
    "correct": 3,
    "explanation": "querySelector returns the first match for a valid selector.",
    "demo": {
      "type": "output",
      "code": "document.querySelector(\".card\")",
      "output": "First Element matching .card or null"
    }
  },
  {
    "id": "fe-b-057",
    "question": "Which property sets plain text without parsing HTML?",
    "options": [
      "innerHTML",
      "outerHTML",
      "textContent",
      "html"
    ],
    "correct": 2,
    "explanation": "textContent sets plain text and avoids parsing HTML."
  },
  {
    "id": "fe-b-058",
    "question": "Which event fires when the DOM is parsed without waiting for images?",
    "options": [
      "ready",
      "paint",
      "DOMContentLoaded",
      "load"
    ],
    "correct": 2,
    "explanation": "DOMContentLoaded fires when HTML is parsed; load waits for all resources."
  },
  {
    "id": "fe-b-059",
    "question": "addEventListener with capture true registers the listener in which phase?",
    "options": [
      "Bubble phase only",
      "Target phase only",
      "Idle phase",
      "Capture phase"
    ],
    "correct": 3,
    "explanation": "true registers the listener in the capture phase."
  },
  {
    "id": "fe-b-060",
    "question": "Which creates a new element not yet attached to the document?",
    "options": [
      "document.add(\"div\")",
      "document.createElement(\"div\")",
      "document.newDiv()",
      "HTML.make(\"div\")"
    ],
    "correct": 1,
    "explanation": "createElement builds an element not yet in the document."
  },
  {
    "id": "fe-b-061",
    "question": "What does element.classList.add(\"active\") do?",
    "options": [
      "Replaces all classes",
      "Adds the class token active",
      "Removes active",
      "Returns a CSSStyleSheet"
    ],
    "correct": 1,
    "explanation": "classList manipulates the element class attribute as a token list."
  },
  {
    "id": "fe-b-062",
    "question": "Which property reads and writes inline styles in camelCase?",
    "options": [
      "element.class",
      "element.css",
      "element.stylesheet",
      "element.style"
    ],
    "correct": 3,
    "explanation": "element.style maps to inline style properties in camelCase."
  },
  {
    "id": "fe-b-063",
    "question": "What does event.preventDefault() do?",
    "options": [
      "Deletes the element",
      "Removes the listener",
      "Cancels the default browser action",
      "Stops all propagation"
    ],
    "correct": 2,
    "explanation": "preventDefault cancels native behavior like following a link."
  },
  {
    "id": "fe-b-064",
    "question": "Which inserts a node as the last child of a parent?",
    "options": [
      "parent.appendChild(node)",
      "document.attach",
      "parent.prependChild",
      "node.insertFirst"
    ],
    "correct": 0,
    "explanation": "appendChild adds a node as the last child of parent."
  },
  {
    "id": "fe-b-065",
    "question": "document.getElementById expects what argument?",
    "options": [
      "A tag name only",
      "An id string without #",
      "A CSS selector with #",
      "A class name"
    ],
    "correct": 1,
    "explanation": "getElementById takes the raw id attribute value."
  },
  {
    "id": "fe-b-066",
    "question": "What is event.target?",
    "options": [
      "The element that triggered the event",
      "Always the window",
      "The parent element only",
      "The listener function"
    ],
    "correct": 0,
    "explanation": "event.target is the deepest element where the event originated."
  },
  {
    "id": "fe-b-067",
    "question": "Which detaches a child node from its parent?",
    "options": [
      "child.delete()",
      "document.drop",
      "parent.unlink",
      "parent.removeChild(child)"
    ],
    "correct": 3,
    "explanation": "removeChild detaches a node from its parent."
  },
  {
    "id": "fe-b-068",
    "question": "element.dataset.userId maps to which attribute?",
    "options": [
      "aria-user-id",
      "custom-user-id",
      "data-user-id",
      "userId-data"
    ],
    "correct": 2,
    "explanation": "data-* attributes are exposed on element.dataset in camelCase."
  },
  {
    "id": "fe-b-069",
    "question": "document.querySelectorAll returns what type of collection?",
    "options": [
      "Always a JavaScript Array",
      "A static NodeList",
      "A live HTMLCollection only",
      "A single element"
    ],
    "correct": 1,
    "explanation": "querySelectorAll returns a static NodeList matching the selector."
  },
  {
    "id": "fe-b-070",
    "question": "What does event.stopPropagation() prevent?",
    "options": [
      "The event from reaching other elements in the tree",
      "The default browser action",
      "Memory leaks",
      "Repaint"
    ],
    "correct": 0,
    "explanation": "stopPropagation halts bubbling or capturing to other elements."
  },
  {
    "id": "fe-b-071",
    "question": "Why is assigning untrusted strings to innerHTML risky?",
    "options": [
      "It always breaks CSS",
      "It can lead to XSS if HTML contains scripts",
      "It disables forms",
      "It removes focus"
    ],
    "correct": 1,
    "explanation": "Parsing untrusted HTML can execute scripts in some contexts."
  },
  {
    "id": "fe-b-072",
    "question": "Which property reads the current value of an input element?",
    "options": [
      "input.value",
      "input.data",
      "input.text",
      "input.content"
    ],
    "correct": 0,
    "explanation": "Form controls expose current value via the value property.",
    "demo": {
      "type": "output",
      "code": "const input = document.createElement(\"input\");\ninput.value = \"hello\";\ninput.value",
      "output": "\"hello\""
    }
  },
  {
    "id": "fe-b-073",
    "question": "Which HTTP method is typically idempotent for replacing a resource?",
    "options": [
      "CONNECT",
      "PATCH always non-idempotent",
      "PUT",
      "POST"
    ],
    "correct": 2,
    "explanation": "PUT is defined as idempotent; repeated identical PUTs have the same effect."
  },
  {
    "id": "fe-b-074",
    "question": "HTTP status code 404 means?",
    "options": [
      "Not Found",
      "OK",
      "Internal Server Error",
      "Permanent Redirect"
    ],
    "correct": 0,
    "explanation": "404 indicates the requested resource was not found.",
    "demo": {
      "type": "output",
      "code": "fetch(\"/missing\").then(r => r.status)",
      "output": "404"
    }
  },
  {
    "id": "fe-b-075",
    "question": "Which response header declares the body content type?",
    "options": [
      "Body-Type",
      "Content-Type",
      "Accept-Type",
      "MIME-Only"
    ],
    "correct": 1,
    "explanation": "Content-Type tells the client how to interpret the body."
  },
  {
    "id": "fe-b-076",
    "question": "HTTPS primarily adds what over HTTP?",
    "options": [
      "Encryption and integrity via TLS",
      "Smaller payloads",
      "Automatic CORS approval",
      "Faster caching only"
    ],
    "correct": 0,
    "explanation": "HTTPS protects data in transit with TLS encryption."
  },
  {
    "id": "fe-b-077",
    "question": "GET requests should conventionally do what?",
    "options": [
      "Always send a JSON body",
      "Require authentication always",
      "Replace POST for mutations",
      "Retrieve resources without changing server state"
    ],
    "correct": 3,
    "explanation": "GET is intended for safe retrieval without side effects."
  },
  {
    "id": "fe-b-078",
    "question": "HTTP status 301 indicates?",
    "options": [
      "Permanent redirect",
      "Unauthorized",
      "Temporary redirect",
      "Success"
    ],
    "correct": 0,
    "explanation": "301 Moved Permanently tells clients to update bookmarks."
  },
  {
    "id": "fe-b-079",
    "question": "Which request header tells the server preferred response formats?",
    "options": [
      "Origin",
      "Accept",
      "Host only",
      "Content-Type"
    ],
    "correct": 1,
    "explanation": "Accept negotiates response content types the client can handle."
  },
  {
    "id": "fe-b-080",
    "question": "HTTP status 500 means?",
    "options": [
      "Bad Request",
      "Not Modified",
      "Internal Server Error",
      "Forbidden"
    ],
    "correct": 2,
    "explanation": "5xx codes indicate server-side failures."
  },
  {
    "id": "fe-b-081",
    "question": "Where do URL query parameters appear?",
    "options": [
      "In the status line only",
      "In the HTTP version field",
      "In the request body only",
      "After ? in the URL"
    ],
    "correct": 3,
    "explanation": "Search params follow ? as key=value pairs separated by &."
  },
  {
    "id": "fe-b-082",
    "question": "The Cache-Control header primarily controls what?",
    "options": [
      "Compression only",
      "Caching behavior",
      "Cookie storage only",
      "CORS policy only"
    ],
    "correct": 1,
    "explanation": "Cache-Control directives manage browser and CDN caching."
  },
  {
    "id": "fe-b-083",
    "question": "The Chrome DevTools Elements panel shows what?",
    "options": [
      "Git history",
      "Network waterfall only",
      "DOM tree and applied styles",
      "CPU profile only"
    ],
    "correct": 2,
    "explanation": "Elements lets you inspect and edit DOM and CSS live."
  },
  {
    "id": "fe-b-084",
    "question": "The Network tab is best for inspecting what?",
    "options": [
      "Source maps only",
      "Managing npm packages",
      "HTTP requests, headers, and timing",
      "Running unit tests"
    ],
    "correct": 2,
    "explanation": "Network records requests, headers, payloads, and timing."
  },
  {
    "id": "fe-b-085",
    "question": "What is console.log primarily used for?",
    "options": [
      "Printing debug messages to the console",
      "Compiling TypeScript",
      "Permanently changing the DOM",
      "Minifying assets"
    ],
    "correct": 0,
    "explanation": "console.log outputs values for debugging in DevTools console."
  },
  {
    "id": "fe-b-086",
    "question": "Where do you set breakpoints to pause JavaScript execution?",
    "options": [
      "Lighthouse only",
      "Sources panel debugger",
      "Application tab only",
      "Network panel"
    ],
    "correct": 1,
    "explanation": "Set breakpoints in Sources to inspect call stack and variables."
  },
  {
    "id": "fe-b-087",
    "question": "The DevTools device toolbar simulates what?",
    "options": [
      "Viewport sizes and touch behavior",
      "Server latency only",
      "Package installs",
      "Database queries"
    ],
    "correct": 0,
    "explanation": "Device mode helps test responsive layouts and mobile user agents."
  },
  {
    "id": "fe-b-088",
    "question": "The Application tab exposes storage for what?",
    "options": [
      "DNS records",
      "Webpack config",
      "CSS variables only",
      "localStorage, cookies, and cache"
    ],
    "correct": 3,
    "explanation": "Application panel exposes storage, service workers, and manifests."
  },
  {
    "id": "fe-b-089",
    "question": "Lighthouse audits commonly include which categories?",
    "options": [
      "Performance, accessibility, and SEO",
      "SQL queries",
      "Package versions",
      "Git blame"
    ],
    "correct": 0,
    "explanation": "Lighthouse runs automated audits on a loaded page."
  },
  {
    "id": "fe-b-090",
    "question": "How are console.error messages typically styled?",
    "options": [
      "Hidden by default",
      "As gray headers only",
      "Always in blue",
      "Prominently, often in red"
    ],
    "correct": 3,
    "explanation": "Errors are styled prominently in the console, often in red."
  },
  {
    "id": "fe-b-091",
    "question": "JSON.stringify converts a JavaScript value into what?",
    "options": [
      "A JSON string",
      "Always a number",
      "An XML document",
      "A DOM node"
    ],
    "correct": 0,
    "explanation": "JSON.stringify serializes JS values to JSON text.",
    "demo": {
      "type": "output",
      "code": "JSON.stringify({ a: 1 })",
      "output": "\"{\\\"a\\\":1}\""
    }
  },
  {
    "id": "fe-b-092",
    "question": "JSON.parse throws when given what input?",
    "options": [
      "A valid empty object",
      "A valid quoted string",
      "Invalid JSON syntax",
      "A valid array"
    ],
    "correct": 2,
    "explanation": "Malformed JSON causes SyntaxError in JSON.parse."
  },
  {
    "id": "fe-b-093",
    "question": "Valid JSON object syntax requires what for keys and strings?",
    "options": [
      "Double quotes",
      "Backticks",
      "No quotes",
      "Single quotes"
    ],
    "correct": 0,
    "explanation": "JSON requires double quotes for strings and property names."
  },
  {
    "id": "fe-b-094",
    "question": "Which JavaScript value is omitted from objects by JSON.stringify by default?",
    "options": [
      "0",
      "undefined",
      "false",
      "null"
    ],
    "correct": 1,
    "explanation": "undefined, functions, and symbols are omitted or become null in arrays."
  },
  {
    "id": "fe-b-095",
    "question": "Which literal is invalid inside standard JSON?",
    "options": [
      "null",
      "false",
      "true",
      "NaN"
    ],
    "correct": 3,
    "explanation": "JSON numbers follow decimal notation; NaN and Infinity are invalid JSON."
  },
  {
    "id": "fe-b-096",
    "question": "What does response.json() on a fetch Response do?",
    "options": [
      "Parses headers as JSON",
      "Parses the URL query",
      "Parses the body as JSON",
      "Returns the status code"
    ],
    "correct": 2,
    "explanation": "Response.json() reads and parses the body as JSON.",
    "demo": {
      "type": "output",
      "code": "JSON.parse('{\"ok\":true}')",
      "output": "{ ok: true }"
    }
  },
  {
    "id": "fe-b-097",
    "question": "How is a JSON array written?",
    "options": [
      "[1, 2, 3]",
      "{1, 2, 3}",
      "<1,2,3>",
      "(1, 2, 3)"
    ],
    "correct": 0,
    "explanation": "JSON arrays use square brackets with comma-separated values."
  },
  {
    "id": "fe-b-098",
    "question": "The optional reviver in JSON.parse can do what?",
    "options": [
      "Compile JSX",
      "Transform parsed values during parse",
      "Minify CSS",
      "Validate HTTP headers"
    ],
    "correct": 1,
    "explanation": "The reviver function filters or transforms parsed properties."
  },
  {
    "id": "fe-b-099",
    "question": "Can JSON represent a JavaScript function?",
    "options": [
      "No",
      "Only arrow functions",
      "Yes, if minified",
      "Yes, with function keyword"
    ],
    "correct": 0,
    "explanation": "JSON supports objects, arrays, strings, numbers, booleans, and null only."
  },
  {
    "id": "fe-b-100",
    "question": "What does JSON.stringify(undefined) return when called alone?",
    "options": [
      "undefined (not a string)",
      "throws always",
      "null",
      "\"undefined\""
    ],
    "correct": 0,
    "explanation": "JSON.stringify(undefined) returns undefined, not the string \"undefined\"."
  }
];

const INTERMEDIATE = [
  {
    "id": "fe-i-001",
    "question": "An async function always returns what?",
    "options": [
      "A callback queue id",
      "Only the literal return value",
      "A Promise",
      "undefined always"
    ],
    "correct": 2,
    "explanation": "Async functions wrap return values in a resolved Promise.",
    "demo": {
      "type": "output",
      "code": "async function f() { return 1; }\nf() instanceof Promise",
      "output": "true"
    }
  },
  {
    "id": "fe-i-002",
    "question": "await can legally appear inside what?",
    "options": [
      "Global classic scripts without async",
      "CSS files",
      "Any regular function",
      "async functions and ES module top level"
    ],
    "correct": 3,
    "explanation": "await pauses async functions until a Promise settles.",
    "demo": {
      "type": "output",
      "code": "await new Promise(r => setTimeout(r, 0))",
      "output": "Yields to microtasks"
    }
  },
  {
    "id": "fe-i-003",
    "question": "What state is Promise.resolve(42) in immediately?",
    "options": [
      "Fulfilled with 42",
      "Rejected",
      "Pending forever",
      "Cancelled"
    ],
    "correct": 0,
    "explanation": "Promise.resolve creates an immediately fulfilled promise.",
    "demo": {
      "type": "output",
      "code": "Promise.resolve(42)",
      "output": "Fulfilled promise with 42"
    }
  },
  {
    "id": "fe-i-004",
    "question": "try/catch around await handles what?",
    "options": [
      "Only syntax errors",
      "CSS parsing errors",
      "Rejected promises from awaited expressions",
      "DOM mutations"
    ],
    "correct": 2,
    "explanation": "await throws on rejection; try/catch can handle it like synchronous errors.",
    "demo": {
      "type": "output",
      "code": "async function f() {\n  try { await Promise.reject(\"x\"); }\n  catch (e) { return e; }\n}",
      "output": "Promise resolves to \"x\""
    }
  },
  {
    "id": "fe-i-005",
    "question": "What does async function foo() { return 1; } actually return?",
    "options": [
      "Promise resolving to 1",
      "An async iterator",
      "undefined",
      "The number 1 synchronously"
    ],
    "correct": 0,
    "explanation": "Returned values in async functions become fulfilled promise values.",
    "demo": {
      "type": "output",
      "code": "async function foo() { return 1; }\nfoo()",
      "output": "Promise resolving to 1"
    }
  },
  {
    "id": "fe-i-006",
    "question": "Which runs first after await Promise.resolve() in an async function?",
    "options": [
      "All requestAnimationFrame callbacks",
      "The entire microtask queue from other tabs",
      "All setTimeout callbacks",
      "Code after await in the same async function"
    ],
    "correct": 3,
    "explanation": "await resumes the async function as a microtask after the promise settles.",
    "demo": {
      "type": "output",
      "code": "window.addEventListener(\"storage\", handler)",
      "output": "Cross-tab storage events"
    }
  },
  {
    "id": "fe-i-007",
    "question": "Can you use await on a non-Promise value?",
    "options": [
      "Only inside classes",
      "No; SyntaxError",
      "Yes; it wraps the value in a resolved Promise",
      "Only in Node.js"
    ],
    "correct": 2,
    "explanation": "await converts non-thenables to an immediately resolved promise.",
    "demo": {
      "type": "output",
      "code": "npm ci",
      "output": "Clean install from lockfile"
    }
  },
  {
    "id": "fe-i-008",
    "question": "What does return await do inside async functions compared to return promise?",
    "options": [
      "Prevents try/catch from working",
      "Disables microtasks",
      "Always slower with no difference",
      "Can affect error stack and rejection handling in some cases"
    ],
    "correct": 3,
    "explanation": "return await keeps rejection inside the async function for catch blocks.",
    "demo": {
      "type": "output",
      "code": "import.meta.env.VITE_API_URL",
      "output": "Vite client env var"
    }
  },
  {
    "id": "fe-i-009",
    "question": "Top-level await in modules blocks what?",
    "options": [
      "HTML parsing always",
      "All other tabs",
      "Module evaluation until the promise settles",
      "CSSOM construction only"
    ],
    "correct": 2,
    "explanation": "Module importers wait for top-level await to resolve before using exports.",
    "demo": {
      "type": "output",
      "code": "customEvent = new CustomEvent(\"done\", { detail: 1 })",
      "output": "App-specific events"
    }
  },
  {
    "id": "fe-i-010",
    "question": "Async generators are declared with which syntax?",
    "options": [
      "async function* gen()",
      "async generator function only in TS",
      "generator async()",
      "function async*()"
    ],
    "correct": 0,
    "explanation": "async function* defines an async generator yielding promises.",
    "demo": {
      "type": "output",
      "code": "signal: AbortSignal.timeout(5000)",
      "output": "Auto-abort after 5s"
    }
  },
  {
    "id": "fe-i-011",
    "question": "for await...of is used to iterate over what?",
    "options": [
      "Only synchronous arrays",
      "CSS rule lists",
      "Async iterables such as async generator results",
      "DOM NodeLists only"
    ],
    "correct": 2,
    "explanation": "for await...of consumes async iterables sequentially."
  },
  {
    "id": "fe-i-012",
    "question": "Unhandled rejection in an async function without catch becomes what?",
    "options": [
      "A console warning only in dev",
      "A synchronous throw always",
      "A silent no-op",
      "A rejected promise returned to the caller"
    ],
    "correct": 3,
    "explanation": "Callers must handle the returned promise rejection."
  },
  {
    "id": "fe-i-013",
    "question": "What does fetch() return?",
    "options": [
      "An XMLHttpRequest object",
      "A Promise resolving to a Response",
      "A ReadableStream only",
      "Parsed JSON immediately"
    ],
    "correct": 1,
    "explanation": "fetch is promise-based and resolves when headers arrive.",
    "demo": {
      "type": "output",
      "code": "fetch(\"/api\").then(r => r.ok)",
      "output": "boolean (true if 2xx)"
    }
  },
  {
    "id": "fe-i-014",
    "question": "When is Response.ok true?",
    "options": [
      "For any non-zero status",
      "When status is 100–199",
      "When status is in the 200–299 range",
      "When status is 300–399"
    ],
    "correct": 2,
    "explanation": "ok is false for non-2xx HTTP statuses."
  },
  {
    "id": "fe-i-015",
    "question": "Which fetch option sets the HTTP method?",
    "options": [
      "type: \"POST\"",
      "verb: \"POST\"",
      "method: \"POST\"",
      "action: \"POST\""
    ],
    "correct": 2,
    "explanation": "The method option sets the HTTP verb."
  },
  {
    "id": "fe-i-016",
    "question": "How do you send JSON in a fetch POST body?",
    "options": [
      "JSON.stringify data with Content-Type application/json",
      "Use body: \"json\"",
      "Use formData only",
      "Pass object directly without headers"
    ],
    "correct": 0,
    "explanation": "Set Content-Type and stringify the payload for JSON APIs.",
    "demo": {
      "type": "output",
      "code": "fetch(\"/api\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ id: 1 })\n})",
      "output": "Promise<Response>"
    }
  },
  {
    "id": "fe-i-017",
    "question": "Does fetch reject on HTTP 404 responses?",
    "options": [
      "Only cross-origin",
      "No; only on network failure",
      "Only for POST",
      "Yes, always"
    ],
    "correct": 1,
    "explanation": "fetch resolves for HTTP error statuses; check response.ok or status."
  },
  {
    "id": "fe-i-018",
    "question": "What does credentials: \"include\" on fetch do?",
    "options": [
      "Forces HTTPS downgrade",
      "Caches response forever",
      "Disables CORS",
      "Sends cookies on cross-origin requests when allowed"
    ],
    "correct": 3,
    "explanation": "include sends cookies subject to CORS credential rules."
  },
  {
    "id": "fe-i-019",
    "question": "AbortController with fetch allows what?",
    "options": [
      "Canceling an in-flight request",
      "HTTP/3 only mode",
      "Bypassing CORS",
      "Automatic retries"
    ],
    "correct": 0,
    "explanation": "Pass signal to fetch to abort via controller.abort()."
  },
  {
    "id": "fe-i-020",
    "question": "response.text() returns what?",
    "options": [
      "Promise of body as string",
      "Parsed JSON",
      "Headers object",
      "Synchronous string"
    ],
    "correct": 0,
    "explanation": "text() reads the entire body stream as UTF-8 text."
  },
  {
    "id": "fe-i-021",
    "question": "Which header is forbidden to set manually in browser fetch for security?",
    "options": [
      "Content-Type always",
      "Accept always",
      "Authorization always",
      "Host (and other forbidden headers)"
    ],
    "correct": 3,
    "explanation": "Browsers block certain forbidden headers from JavaScript."
  },
  {
    "id": "fe-i-022",
    "question": "What is no-cors fetch mode used for?",
    "options": [
      "Automatic preflight skip with readable body",
      "Full JSON parsing cross-origin",
      "Opaque responses with limited JS access",
      "Server-side rendering"
    ],
    "correct": 2,
    "explanation": "no-cors returns opaque responses you cannot read fully."
  },
  {
    "id": "fe-i-023",
    "question": "How do you pass query parameters with fetch GET?",
    "options": [
      "Put them in body",
      "Append to URL with URLSearchParams or string",
      "Set Query header",
      "Use method: \"QUERY\""
    ],
    "correct": 1,
    "explanation": "GET requests encode parameters in the URL search string."
  },
  {
    "id": "fe-i-024",
    "question": "response.headers is what kind of object?",
    "options": [
      "Immutable string",
      "JSON object always",
      "Plain array",
      "Headers with case-insensitive names"
    ],
    "correct": 3,
    "explanation": "The Headers interface wraps response header fields."
  },
  {
    "id": "fe-i-025",
    "question": "Promise.prototype.then() returns what?",
    "options": [
      "The original value only",
      "undefined always",
      "A new promise for chaining",
      "An Error object"
    ],
    "correct": 2,
    "explanation": "then returns a new promise resolved with the handler return value."
  },
  {
    "id": "fe-i-026",
    "question": "Promise.prototype.catch() handles what?",
    "options": [
      "Rejected promises in the chain",
      "Only network errors",
      "DOM events",
      "Synchronous throws before then"
    ],
    "correct": 0,
    "explanation": "catch receives rejection reasons downstream."
  },
  {
    "id": "fe-i-027",
    "question": "Promise.all fails when what happens?",
    "options": [
      "Never fails",
      "Any input promise rejects",
      "All promises reject only",
      "The slowest promise resolves"
    ],
    "correct": 1,
    "explanation": "Promise.all short-circuits on the first rejection.",
    "demo": {
      "type": "output",
      "code": "Promise.all([\n  Promise.resolve(1),\n  Promise.reject(\"err\")\n]).catch(e => e)",
      "output": "\"err\""
    }
  },
  {
    "id": "fe-i-028",
    "question": "Promise.allSettled waits for what?",
    "options": [
      "First rejection only",
      "First fulfillment only",
      "All promises to either fulfill or reject",
      "Nothing; returns immediately"
    ],
    "correct": 2,
    "explanation": "allSettled never short-circuits; it reports every outcome."
  },
  {
    "id": "fe-i-029",
    "question": "Promise.race resolves or rejects when?",
    "options": [
      "All promises fulfill",
      "After a fixed timeout always",
      "The first promise settles",
      "All promises reject"
    ],
    "correct": 2,
    "explanation": "race follows the first settled promise."
  },
  {
    "id": "fe-i-030",
    "question": "What state can a new Promise executor start in?",
    "options": [
      "Pending",
      "Fulfilled",
      "Cancelled",
      "Rejected"
    ],
    "correct": 0,
    "explanation": "Promises begin pending until resolve or reject is called."
  },
  {
    "id": "fe-i-031",
    "question": "Can you call resolve twice on the same promise?",
    "options": [
      "Yes; last wins",
      "Only in Node.js",
      "No; only the first settlement counts",
      "Yes; merges values"
    ],
    "correct": 2,
    "explanation": "A promise settles at most once."
  },
  {
    "id": "fe-i-032",
    "question": "What does returning a promise inside then() do?",
    "options": [
      "Always rejects",
      "Ignores the inner promise",
      "Flattens/chains to that promise result",
      "Creates parallel only"
    ],
    "correct": 2,
    "explanation": "then unwraps returned thenables in the chain."
  },
  {
    "id": "fe-i-033",
    "question": "Promise.finally() runs when?",
    "options": [
      "Only on rejection",
      "Before then handlers",
      "Only on fulfillment",
      "After fulfillment or rejection"
    ],
    "correct": 3,
    "explanation": "finally executes cleanup regardless of outcome."
  },
  {
    "id": "fe-i-034",
    "question": "Microtasks from promises run before what?",
    "options": [
      "The next macrotask like setTimeout",
      "All user input",
      "Nothing; they are last",
      "All rendering always"
    ],
    "correct": 0,
    "explanation": "Promise callbacks are microtasks processed before the next macrotask."
  },
  {
    "id": "fe-i-035",
    "question": "What is promise chaining used for?",
    "options": [
      "Parallel DOM reads only",
      "Sequencing asynchronous steps",
      "Avoiding error handling",
      "Replacing async/await entirely in modules"
    ],
    "correct": 1,
    "explanation": "then chains express ordered async workflows."
  },
  {
    "id": "fe-i-036",
    "question": "Rejecting with a non-Error value is discouraged because?",
    "options": [
      "It throws synchronously",
      "It breaks promises entirely",
      "Stack traces and debugging suffer",
      "It disables catch"
    ],
    "correct": 2,
    "explanation": "Error objects preserve stacks for easier debugging.",
    "demo": {
      "type": "output",
      "code": "Promise.resolve(1).then(v => v + 1).then(v => v * 2)",
      "output": "Promise resolving to 4"
    }
  },
  {
    "id": "fe-i-037",
    "question": "A closure gives a function access to what?",
    "options": [
      "DOM nodes only",
      "Only global variables",
      "Variables from its outer lexical scope",
      "Nothing after return"
    ],
    "correct": 2,
    "explanation": "Closures capture variables from enclosing scopes.",
    "demo": {
      "type": "output",
      "code": "function outer(x) {\n  return () => x;\n}\nouter(5)()",
      "output": "5"
    }
  },
  {
    "id": "fe-i-038",
    "question": "The module pattern often uses closures to do what?",
    "options": [
      "Enable CORS",
      "Parse JSON faster",
      "Speed up DOM reflow",
      "Hide private state"
    ],
    "correct": 3,
    "explanation": "IIFE/module closures encapsulate private variables."
  },
  {
    "id": "fe-i-039",
    "question": "What classic loop bug creates functions logging the same index?",
    "options": [
      "var in a for loop without IIFE or let",
      "reduce only",
      "map always",
      "const arrays only"
    ],
    "correct": 0,
    "explanation": "var shares one binding; closures capture the final value unless block-scoped."
  },
  {
    "id": "fe-i-040",
    "question": "let in a for loop creates what for each iteration?",
    "options": [
      "One shared global",
      "A copy of window",
      "A new binding per iteration",
      "No binding"
    ],
    "correct": 2,
    "explanation": "per-iteration let bindings fix the classic closure loop issue."
  },
  {
    "id": "fe-i-041",
    "question": "In TypeScript, unknown is safer than any because:",
    "options": [
      "unknown requires narrowing before use",
      "unknown disables type checking",
      "unknown is only for arrays",
      "unknown becomes never automatically"
    ],
    "correct": 0,
    "explanation": "unknown forces you to prove a value's shape before reading properties or calling it."
  },
  {
    "id": "fe-i-042",
    "question": "Type narrowing with typeof is used to:",
    "options": [
      "Refine a union type before using type-specific operations",
      "Bundle code faster",
      "Disable strict mode",
      "Convert runtime values to CSS"
    ],
    "correct": 0,
    "explanation": "Checks like typeof value === 'string' let TypeScript safely narrow a union branch."
  },
  {
    "id": "fe-i-043",
    "question": "A discriminated union is useful for:",
    "options": [
      "Modeling variants with a shared literal tag field",
      "Skipping runtime validation forever",
      "Replacing HTTP status codes",
      "Making all properties optional"
    ],
    "correct": 0,
    "explanation": "A tag like kind: 'success' | 'error' lets TypeScript narrow each variant precisely."
  },
  {
    "id": "fe-i-044",
    "question": "type vs interface in TypeScript:",
    "options": [
      "Both can describe object shapes; interfaces can merge declarations",
      "interface is JavaScript runtime code",
      "type only works for classes",
      "Neither works with React props"
    ],
    "correct": 0,
    "explanation": "Both are common for props and models; declaration merging is a key interface distinction."
  },
  {
    "id": "fe-i-045",
    "question": "Generics help frontend utilities by:",
    "options": [
      "Preserving input/output relationships without losing specific types",
      "Turning TypeScript into runtime validation",
      "Forcing all values to string",
      "Removing the need for tests"
    ],
    "correct": 0,
    "explanation": "A generic like <T>(value: T) => T keeps the concrete type through reusable code."
  },
  {
    "id": "fe-i-046",
    "question": "Pick<T, K> and Omit<T, K> are examples of:",
    "options": [
      "TypeScript utility types",
      "DOM events",
      "HTTP cache headers",
      "CSS selectors"
    ],
    "correct": 0,
    "explanation": "Utility types transform existing types, which is common when modeling API and component props."
  },
  {
    "id": "fe-i-047",
    "question": "passive: true on a wheel listener means what?",
    "options": [
      "Blocks scroll always",
      "Listener runs once",
      "Capture phase only",
      "preventDefault cannot block scrolling"
    ],
    "correct": 3,
    "explanation": "Passive listeners improve scroll performance; preventDefault is ignored."
  },
  {
    "id": "fe-i-048",
    "question": "Event delegation attaches one listener where?",
    "options": [
      "In CSS files",
      "On an ancestor and checks event.target",
      "On window only",
      "On every child individually only"
    ],
    "correct": 1,
    "explanation": "Delegation uses bubbling to handle events from descendants.",
    "demo": {
      "type": "output",
      "code": "list.addEventListener(\"click\", e => {\n  if (e.target.matches(\"li\")) { /* ... */ }\n});",
      "output": "One listener handles many items"
    }
  },
  {
    "id": "fe-i-049",
    "question": "The default event propagation order after target is?",
    "options": [
      "Random",
      "Stop immediately",
      "Capture only forever",
      "Bubble up to ancestors"
    ],
    "correct": 3,
    "explanation": "After capture and target phases, most events bubble upward."
  },
  {
    "id": "fe-i-050",
    "question": "once: true in addEventListener does what?",
    "options": [
      "Removes listener after first invocation",
      "Prevents bubbling",
      "Makes listener passive",
      "Uses capture"
    ],
    "correct": 0,
    "explanation": "once auto-removes the listener after it runs one time."
  },
  {
    "id": "fe-i-051",
    "question": "CustomEvent allows what?",
    "options": [
      "Only native clicks",
      "HTTP caching",
      "Dispatching application-defined events with detail data",
      "CSS animations only"
    ],
    "correct": 2,
    "explanation": "CustomEvent carries a detail payload on event targets."
  },
  {
    "id": "fe-i-052",
    "question": "What does event.currentTarget refer to?",
    "options": [
      "The element whose listener is running",
      "The window only",
      "The deepest originating element always",
      "The previous element"
    ],
    "correct": 0,
    "explanation": "currentTarget is the element with the attached listener; target is the source."
  },
  {
    "id": "fe-i-053",
    "question": "Keyboard event key vs code differs because code represents?",
    "options": [
      "Mouse button",
      "Scroll delta",
      "Typed character always",
      "Physical key location"
    ],
    "correct": 3,
    "explanation": "code is physical key; key is character meaning (layout dependent)."
  },
  {
    "id": "fe-i-054",
    "question": "What is the default action of a submit event on a form?",
    "options": [
      "Close the tab",
      "Prevent all network",
      "Nothing",
      "Navigate or send form data per method/action"
    ],
    "correct": 3,
    "explanation": "Unless prevented, forms submit to their action URL."
  },
  {
    "id": "fe-i-055",
    "question": "pointer events unify what input types?",
    "options": [
      "Mouse, touch, and pen",
      "Clipboard only",
      "Gamepad only",
      "Keyboard only"
    ],
    "correct": 0,
    "explanation": "Pointer events abstract multiple pointing devices."
  },
  {
    "id": "fe-i-056",
    "question": "Removing an element without removing listeners can cause what if references remain?",
    "options": [
      "CORS failure",
      "Automatic listener cleanup always",
      "Retained memory via closures referencing handlers",
      "JSON parse errors"
    ],
    "correct": 2,
    "explanation": "Strong references to detached nodes or handlers can leak memory."
  },
  {
    "id": "fe-i-057",
    "question": "What does focusin bubble compared to focus?",
    "options": [
      "Neither bubbles",
      "Both bubble",
      "focus bubbles; focusin does not",
      "focusin bubbles; focus does not"
    ],
    "correct": 3,
    "explanation": "focusin/focusout bubble; focus/blur do not."
  },
  {
    "id": "fe-i-058",
    "question": "Event.preventDefault on anchor click stops what?",
    "options": [
      "Listener registration",
      "Repaint only",
      "All event propagation",
      "Following the href navigation"
    ],
    "correct": 3,
    "explanation": "preventDefault cancels the native navigation behavior."
  },
  {
    "id": "fe-i-059",
    "question": "localStorage persists until when?",
    "options": [
      "Explicitly cleared by script or user",
      "One hour by default",
      "Every navigation",
      "Tab close only"
    ],
    "correct": 0,
    "explanation": "localStorage survives browser restarts for the same origin.",
    "demo": {
      "type": "output",
      "code": "localStorage.setItem(\"theme\", \"dark\");\nlocalStorage.getItem(\"theme\")",
      "output": "\"dark\""
    }
  },
  {
    "id": "fe-i-060",
    "question": "sessionStorage is cleared when?",
    "options": [
      "Never",
      "On every same-origin navigation",
      "The browsing tab or session ends",
      "After 24 hours"
    ],
    "correct": 2,
    "explanation": "sessionStorage is scoped to the top-level browsing context session."
  },
  {
    "id": "fe-i-061",
    "question": "The storage event fires when?",
    "options": [
      "Cache invalidates",
      "Same tab writes only",
      "localStorage changes in another document same origin",
      "Cookies expire"
    ],
    "correct": 2,
    "explanation": "storage events notify other tabs/windows of storage changes."
  },
  {
    "id": "fe-i-062",
    "question": "localStorage stores values as what type?",
    "options": [
      "Functions",
      "Strings only",
      "Binary blobs only",
      "Any JavaScript object natively"
    ],
    "correct": 1,
    "explanation": "Store JSON.stringify output; parse on read."
  },
  {
    "id": "fe-i-063",
    "question": "What is the storage limit behavior for localStorage?",
    "options": [
      "Shared across all sites",
      "Exactly 1 KB",
      "Unlimited always",
      "Origin quota enforced by browser (roughly MB scale)"
    ],
    "correct": 3,
    "explanation": "Browsers enforce per-origin quotas; exact size varies."
  },
  {
    "id": "fe-i-064",
    "question": "document.cookie differs from localStorage because cookies?",
    "options": [
      "Cannot be set from JS",
      "Are sent with HTTP requests when applicable",
      "Never expire",
      "Store only numbers"
    ],
    "correct": 1,
    "explanation": "Cookies participate in HTTP unless HttpOnly; localStorage stays client-side."
  },
  {
    "id": "fe-i-065",
    "question": "IndexedDB is suited for what?",
    "options": [
      "Routing",
      "Simple key-value strings only",
      "Structured larger client-side data with indexes",
      "Styling components"
    ],
    "correct": 2,
    "explanation": "IndexedDB handles structured records and async transactions."
  },
  {
    "id": "fe-i-066",
    "question": "sessionStorage is isolated per what?",
    "options": [
      "Entire browser profile globally",
      "CSS file",
      "Top-level browsing context (tab/window)",
      "Single element"
    ],
    "correct": 2,
    "explanation": "Each tab has its own sessionStorage partition."
  },
  {
    "id": "fe-i-067",
    "question": "Clearing site data in DevTools removes what?",
    "options": [
      "localStorage, cookies, caches for that origin",
      "Source files",
      "npm packages",
      "Only console history"
    ],
    "correct": 0,
    "explanation": "Application storage clearing wipes origin client data."
  },
  {
    "id": "fe-i-068",
    "question": "Storing JWTs in localStorage is debated because of what risk?",
    "options": [
      "Tokens expire instantly",
      "HTTPS disables storage",
      "CORS blocks reading",
      "XSS can read localStorage tokens"
    ],
    "correct": 3,
    "explanation": "Any script on the page can access localStorage if XSS exists."
  },
  {
    "id": "fe-i-069",
    "question": "CORS preflight requests use which HTTP method?",
    "options": [
      "OPTIONS",
      "POST only",
      "GET",
      "HEAD only"
    ],
    "correct": 0,
    "explanation": "Browsers send OPTIONS preflight for non-simple cross-origin requests.",
    "demo": {
      "type": "output",
      "code": "// Browser sends OPTIONS before DELETE + custom header\nAccess-Control-Request-Method: DELETE",
      "output": "Preflight handshake"
    }
  },
  {
    "id": "fe-i-070",
    "question": "Access-Control-Allow-Origin: * allows what?",
    "options": [
      "Only same-origin reads",
      "Only POST requests",
      "Credentialed cookie requests always",
      "Any origin to read the response"
    ],
    "correct": 3,
    "explanation": "Wildcard permits any origin but not credentialed requests."
  },
  {
    "id": "fe-i-071",
    "question": "Simple cross-origin requests include which method?",
    "options": [
      "PUT with JSON",
      "PATCH with Authorization",
      "DELETE with custom header",
      "GET"
    ],
    "correct": 3,
    "explanation": "GET/HEAD/POST with simple headers may skip preflight."
  },
  {
    "id": "fe-i-072",
    "question": "Access-Control-Allow-Credentials: true requires Allow-Origin to be?",
    "options": [
      "Empty",
      "file://",
      "A specific origin, not *",
      "Always *"
    ],
    "correct": 2,
    "explanation": "Credentialed responses cannot use wildcard origin."
  },
  {
    "id": "fe-i-073",
    "question": "Who enforces CORS in the browser?",
    "options": [
      "The DNS server",
      "Webpack dev server only",
      "The browser same-origin policy for frontend JS",
      "npm registry"
    ],
    "correct": 2,
    "explanation": "Servers respond with headers; browsers block JS from reading forbidden cross-origin responses."
  },
  {
    "id": "fe-i-074",
    "question": "Access-Control-Allow-Headers responds to what?",
    "options": [
      "Response body type",
      "Cache duration only",
      "Cookie names only",
      "Which request headers are permitted in preflight"
    ],
    "correct": 3,
    "explanation": "Preflight checks allowed custom headers."
  },
  {
    "id": "fe-i-075",
    "question": "A CORS error in console usually means what?",
    "options": [
      "Missing or incorrect ACAO header for cross-origin XHR/fetch",
      "404 on favicon only",
      "SyntaxError in JS",
      "Invalid JSON"
    ],
    "correct": 0,
    "explanation": "The browser blocked JS access to the cross-origin response."
  },
  {
    "id": "fe-i-076",
    "question": "Same-origin requires matching what three parts?",
    "options": [
      "Path only",
      "User agent string",
      "Scheme, host, and port",
      "Query string only"
    ],
    "correct": 2,
    "explanation": "Origin combines protocol, hostname, and port."
  },
  {
    "id": "fe-i-077",
    "question": "Cross-origin images in <img> tags are generally what to JS?",
    "options": [
      "Displayable but canvas may be tainted without CORS headers",
      "Always readable pixel data",
      "Blocked from loading entirely",
      "Always forbidden in HTML"
    ],
    "correct": 0,
    "explanation": "Images load, but reading pixels via canvas needs CORS-enabled cross-origin resources."
  },
  {
    "id": "fe-i-078",
    "question": "Access-Control-Max-Age controls what?",
    "options": [
      "Service worker lifetime",
      "How long preflight results can be cached",
      "JWT expiry",
      "Cookie lifetime"
    ],
    "correct": 1,
    "explanation": "Browsers cache successful preflight responses to reduce OPTIONS traffic."
  },
  {
    "id": "fe-i-079",
    "question": "npm install pkg saves to package.json by default since npm 5+ how?",
    "options": [
      "Only in lockfile without package.json",
      "Never unless --save-dev only",
      "As a dependency entry automatically",
      "Only globally"
    ],
    "correct": 2,
    "explanation": "Dependencies are recorded in package.json and the lockfile."
  },
  {
    "id": "fe-i-080",
    "question": "package-lock.json ensures what?",
    "options": [
      "Reproducible dependency tree installs",
      "Faster CPU execution",
      "Smaller production bundles always",
      "Automatic major version bumps"
    ],
    "correct": 0,
    "explanation": "Lockfile pins exact resolved versions."
  },
  {
    "id": "fe-i-081",
    "question": "npm run script executes commands from where?",
    "options": [
      "Any .sh file automatically",
      "node_modules root only",
      "The scripts section of package.json",
      "Global PATH only"
    ],
    "correct": 2,
    "explanation": "npm run maps to named scripts in package.json.",
    "demo": {
      "type": "output",
      "code": "// package.json\n\"scripts\": { \"dev\": \"vite\" }\n// terminal: npm run dev",
      "output": "Runs vite dev server"
    }
  },
  {
    "id": "fe-i-082",
    "question": "devDependencies are intended for what?",
    "options": [
      "Development and build tooling",
      "Git hooks only on CI",
      "Browser globals only",
      "Production runtime only"
    ],
    "correct": 0,
    "explanation": "devDependencies are omitted when installing production-only with npm ci --omit=dev."
  },
  {
    "id": "fe-i-083",
    "question": "npx without global install does what?",
    "options": [
      "Mutates package.json always",
      "Only works for React",
      "Requires sudo always",
      "Downloads and runs a package binary temporarily"
    ],
    "correct": 3,
    "explanation": "npx executes package binaries without permanent global install."
  },
  {
    "id": "fe-i-084",
    "question": "Semantic versioning MAJOR.MINOR.PATCH means PATCH changes are?",
    "options": [
      "New features only",
      "Breaking changes",
      "Backward-compatible bug fixes",
      "License changes"
    ],
    "correct": 2,
    "explanation": "Patch increments fix backward-compatible issues."
  },
  {
    "id": "fe-i-085",
    "question": "The caret ^ in \"^1.2.3\" allows what updates?",
    "options": [
      "Any version ever",
      "Major always",
      "Compatible minor and patch within same major",
      "Patch only always"
    ],
    "correct": 2,
    "explanation": "^ permits non-breaking updates per semver rules."
  },
  {
    "id": "fe-i-086",
    "question": "npm ci differs from npm install because npm ci?",
    "options": [
      "Skips package.json",
      "Never uses lockfile",
      "Only installs globally",
      "Requires lockfile and deletes node_modules for clean install"
    ],
    "correct": 3,
    "explanation": "ci is for deterministic CI installs from package-lock.json."
  },
  {
    "id": "fe-i-087",
    "question": "peerDependencies signal what?",
    "options": [
      "Bundled transitive deps",
      "Optional platform binaries",
      "Dev-only lint rules",
      "Expected compatible version of a host package at runtime"
    ],
    "correct": 3,
    "explanation": "Peers warn when the consuming app must provide a compatible dependency."
  },
  {
    "id": "fe-i-088",
    "question": "npm outdated shows what?",
    "options": [
      "Git remotes",
      "Security audit only",
      "Available newer versions of dependencies",
      "Bundle size"
    ],
    "correct": 2,
    "explanation": "outdated compares installed vs wanted vs latest registry versions."
  },
  {
    "id": "fe-i-089",
    "question": "workspaces in package.json monorepos help with what?",
    "options": [
      "Polyfilling fetch",
      "Linking local packages under one root install",
      "Running Lighthouse",
      "Deploying to CDN"
    ],
    "correct": 1,
    "explanation": "Workspaces hoist and symlink intra-repo packages."
  },
  {
    "id": "fe-i-090",
    "question": "Vite dev server provides what key feature?",
    "options": [
      "Fast HMR and native ESM serving",
      "PHP runtime",
      "Only production minification",
      "Database ORM"
    ],
    "correct": 0,
    "explanation": "Vite serves source modules with hot module replacement.",
    "demo": {
      "type": "output",
      "code": "// vite.config.js\nexport default { server: { port: 5173 } }",
      "output": "ESM + HMR on save"
    }
  },
  {
    "id": "fe-i-091",
    "question": "Tree shaking in production bundles removes what?",
    "options": [
      "All comments only",
      "User cookies",
      "HTML tags",
      "Unused ESM exports when side-effect free"
    ],
    "correct": 3,
    "explanation": "Static analysis drops dead code from ES modules."
  },
  {
    "id": "fe-i-092",
    "question": "A bundler like Rollup or webpack primarily?",
    "options": [
      "Manages git hooks only",
      "Runs SQL migrations",
      "Combines modules for browser delivery",
      "Replaces DNS"
    ],
    "correct": 2,
    "explanation": "Bundlers resolve imports and emit optimized assets."
  },
  {
    "id": "fe-i-093",
    "question": "Source maps help developers by?",
    "options": [
      "Caching HTML",
      "Mapping minified code back to original sources",
      "Minifying CSS automatically",
      "Enabling CORS"
    ],
    "correct": 1,
    "explanation": "Source maps improve debugging of compiled output."
  },
  {
    "id": "fe-i-094",
    "question": "Environment variables in Vite client code must be prefixed with?",
    "options": [
      "NODE_",
      "REACT_ only",
      "PUBLIC_ only in Next",
      "VITE_"
    ],
    "correct": 3,
    "explanation": "Vite exposes import.meta.env vars prefixed with VITE_ to the client."
  },
  {
    "id": "fe-i-095",
    "question": "Code splitting via dynamic import() achieves what?",
    "options": [
      "Lazy-loaded chunks reducing initial bundle size",
      "Inlining all CSS",
      "Disabling HMR",
      "Eliminating all network requests"
    ],
    "correct": 0,
    "explanation": "Dynamic imports create separate async chunks."
  },
  {
    "id": "fe-i-096",
    "question": "Transpilation in frontend tooling converts what?",
    "options": [
      "HTML to SQL",
      "Cookies to JWT",
      "Modern JS/TS/JSX into browser-target syntax",
      "PNG to SVG"
    ],
    "correct": 2,
    "explanation": "Babel/esbuild transform syntax for target environments."
  },
  {
    "id": "fe-i-097",
    "question": "PostCSS is commonly used to?",
    "options": [
      "Transform CSS with plugins like autoprefixer",
      "Serve static files",
      "Bundle JavaScript modules",
      "Run unit tests"
    ],
    "correct": 0,
    "explanation": "PostCSS processes CSS through a plugin pipeline."
  },
  {
    "id": "fe-i-098",
    "question": "Production build minification primarily reduces what?",
    "options": [
      "HTTP latency to zero",
      "Accessibility requirements",
      "Need for HTTPS",
      "File size by shortening names and removing whitespace"
    ],
    "correct": 3,
    "explanation": "Minifiers shrink JS/CSS for faster downloads."
  },
  {
    "id": "fe-i-099",
    "question": "HMR stands for and does what?",
    "options": [
      "Host Memory Recovery",
      "HTML Module Rendering",
      "Hot Module Replacement updates modules without full reload",
      "Hyper Media Routing"
    ],
    "correct": 2,
    "explanation": "HMR swaps changed modules preserving app state when possible."
  },
  {
    "id": "fe-i-100",
    "question": "esbuild is known for what compared to traditional bundlers?",
    "options": [
      "Running only in browsers",
      "Replacing HTML",
      "Managing npm auth",
      "Extremely fast bundling written in Go"
    ],
    "correct": 3,
    "explanation": "esbuild prioritizes speed for transform and bundle steps."
  }
];

const ADVANCED = [
  {
    "id": "fe-a-001",
    "question": "Largest Contentful Paint (LCP) measures what?",
    "options": [
      "First input delay only",
      "When the largest visible content element renders",
      "DNS lookup duration only",
      "Total JavaScript parse time"
    ],
    "correct": 1,
    "explanation": "LCP tracks when main content becomes visible — target under 2.5s good.",
    "demo": {
      "type": "output",
      "code": "new PerformanceObserver(list => {\n  const e = list.getEntries().at(-1);\n  console.log(\"LCP\", e.startTime);\n}).observe({ type: \"largest-contentful-paint\", buffered: true });",
      "output": "Observes LCP entry"
    }
  },
  {
    "id": "fe-a-002",
    "question": "Cumulative Layout Shift (CLS) quantifies what?",
    "options": [
      "Unexpected layout movement during page life",
      "Time to first byte only",
      "Cookie byte size",
      "JavaScript bundle size"
    ],
    "correct": 0,
    "explanation": "CLS aggregates visual stability shifts; lower is better.",
    "demo": {
      "type": "output",
      "code": "CLS target: < 0.1",
      "output": "Core Web Vital threshold"
    }
  },
  {
    "id": "fe-a-003",
    "question": "Interaction to Next Paint (INP) focuses on what?",
    "options": [
      "Server response size",
      "Image compression ratio only",
      "First paint time only",
      "Overall interaction responsiveness latency"
    ],
    "correct": 3,
    "explanation": "INP replaces FID as a Core Web Vital for interaction latency.",
    "demo": {
      "type": "output",
      "code": "document.cookie = \"sid=1; SameSite=Strict; Secure\"",
      "output": "CSRF-hardened cookie"
    }
  },
  {
    "id": "fe-a-004",
    "question": "Time to First Byte (TTFB) primarily reflects what?",
    "options": [
      "Client hydration only",
      "Full page interactive time",
      "Server and network response start time",
      "Largest image decode"
    ],
    "correct": 2,
    "explanation": "TTFB measures delay until first response byte arrives.",
    "demo": {
      "type": "output",
      "code": "expect(screen.getByText(\"Hi\")).toBeInTheDocument()",
      "output": "Jest + RTL assertion"
    }
  },
  {
    "id": "fe-a-005",
    "question": "Preload with link rel=preload hints the browser to do what?",
    "options": [
      "Disable caching entirely",
      "Fetch critical assets early with priority",
      "Remove web fonts",
      "Defer all JavaScript"
    ],
    "correct": 1,
    "explanation": "Preload prioritizes important resources discovered in HTML.",
    "demo": {
      "type": "output",
      "code": "hydrateRoot(document.getElementById(\"root\"), <App />)",
      "output": "Client hydration"
    }
  },
  {
    "id": "fe-a-006",
    "question": "Lazy loading images via loading=\"lazy\" helps what metric most directly?",
    "options": [
      "DNS prefetch",
      "Cookie size",
      "CLS always negatively",
      "Initial load and bandwidth by deferring offscreen images"
    ],
    "correct": 3,
    "explanation": "Native lazy loading delays offscreen image loads.",
    "demo": {
      "type": "output",
      "code": "new ResizeObserver(entries => { /* ... */ })",
      "output": "Observes element resize"
    }
  },
  {
    "id": "fe-a-007",
    "question": "Critical CSS strategy inlines what?",
    "options": [
      "All JavaScript",
      "Entire font files as base64 always",
      "Above-the-fold styles to speed first render",
      "All images"
    ],
    "correct": 2,
    "explanation": "Inlining critical CSS reduces render-blocking requests for first paint.",
    "demo": {
      "type": "output",
      "code": "role=\"alert\" aria-live=\"assertive\"",
      "output": "Urgent screen reader announcement"
    }
  },
  {
    "id": "fe-a-008",
    "question": "Long tasks in Performance panel are main-thread blocks longer than?",
    "options": [
      "50 ms",
      "5 ms",
      "1 second only",
      "500 ms always"
    ],
    "correct": 0,
    "explanation": "Tasks over 50ms can delay input and frame deadlines.",
    "demo": {
      "type": "output",
      "code": "require(\"./mod\") // CommonJS",
      "output": "Synchronous Node require"
    }
  },
  {
    "id": "fe-a-009",
    "question": "requestAnimationFrame schedules work before what?",
    "options": [
      "Network idle always",
      "The next repaint",
      "Service worker install",
      "Every microtask only"
    ],
    "correct": 1,
    "explanation": "rAF aligns visual updates with the browser paint cycle.",
    "demo": {
      "type": "output",
      "code": "export { util } from \"./utils.js\"",
      "output": "Named ESM re-export"
    }
  },
  {
    "id": "fe-a-010",
    "question": "Content visibility: auto can improve performance by?",
    "options": [
      "Blocking lazy load",
      "Removing accessibility tree always",
      "Disabling HTTPS",
      "Skipping rendering work for offscreen content"
    ],
    "correct": 3,
    "explanation": "content-visibility allows browsers to defer layout/paint for offscreen sections.",
    "demo": {
      "type": "output",
      "code": "link rel=\"preload\" as=\"font\"",
      "output": "Early font fetch"
    }
  },
  {
    "id": "fe-a-011",
    "question": "Total Blocking Time (TBT) correlates with what user experience issue?",
    "options": [
      "Invalid HTML4 doctype",
      "Main thread busy causing input delay",
      "Missing alt text",
      "Color contrast failure"
    ],
    "correct": 1,
    "explanation": "TBT sums blocking time between FCP and TTI, relating to interactivity.",
    "demo": {
      "type": "output",
      "code": "navigator.serviceWorker.register(\"/sw.js\")",
      "output": "PWA service worker"
    }
  },
  {
    "id": "fe-a-012",
    "question": "Using font-display: swap primarily reduces what?",
    "options": [
      "Need for font files",
      "HTTP requests to zero",
      "Invisible text during web font load (FOIT)",
      "CLS entirely always"
    ],
    "correct": 2,
    "explanation": "swap shows fallback text while custom font loads.",
    "demo": {
      "type": "output",
      "code": "postMessage(data, origin)",
      "output": "Structured clone to iframe"
    }
  },
  {
    "id": "fe-a-013",
    "question": "HTTP/2 multiplexing benefits frontend loading by?",
    "options": [
      "Inlining all CSS automatically",
      "Disabling caching",
      "Eliminating TLS",
      "Multiple requests over one connection reducing head-of-line blocking"
    ],
    "correct": 3,
    "explanation": "Multiplexing parallelizes streams on a single TCP connection."
  },
  {
    "id": "fe-a-014",
    "question": "Cross-site scripting (XSS) injects what into trusted pages?",
    "options": [
      "Malicious scripts executed in victim context",
      "CSS variables only",
      "DNS records",
      "SQL into databases only"
    ],
    "correct": 0,
    "explanation": "XSS runs attacker-controlled scripts where victims are authenticated.",
    "demo": {
      "type": "output",
      "code": "element.innerHTML = userInput; // if userInput = \"<img onerror=alert(1)>\"",
      "output": "Script may execute"
    }
  },
  {
    "id": "fe-a-015",
    "question": "Cross-site request forgery (CSRF) exploits what?",
    "options": [
      "XSS only",
      "Authenticated browser sessions making unwanted requests",
      "Broken TLS ciphers only",
      "MIME sniffing only"
    ],
    "correct": 1,
    "explanation": "CSRF tricks browsers into submitting authenticated requests."
  },
  {
    "id": "fe-a-016",
    "question": "Content Security Policy mitigates XSS by doing what?",
    "options": [
      "Restricting allowed script and resource sources",
      "Disabling HTTPS",
      "Encrypting HTML bodies",
      "Deleting cookies automatically"
    ],
    "correct": 0,
    "explanation": "CSP whitelists origins for scripts and other resources.",
    "demo": {
      "type": "output",
      "code": "Content-Security-Policy: default-src 'self'; script-src 'self'",
      "output": "Blocks inline/eval scripts"
    }
  },
  {
    "id": "fe-a-017",
    "question": "HttpOnly cookie flag prevents what?",
    "options": [
      "Server reading the cookie",
      "Browser storing the cookie",
      "HTTPS transmission",
      "JavaScript document.cookie access"
    ],
    "correct": 3,
    "explanation": "HttpOnly mitigates token theft via XSS reading cookies."
  },
  {
    "id": "fe-a-018",
    "question": "SameSite=Strict on cookies means what for cross-site requests?",
    "options": [
      "Cookie not sent on cross-site subrequests",
      "Cookie sent everywhere",
      "Cookie visible to JS",
      "Cookie works without Secure"
    ],
    "correct": 0,
    "explanation": "Strict limits cookies to first-party navigations."
  },
  {
    "id": "fe-a-019",
    "question": "DOMPurify is commonly used to do what?",
    "options": [
      "Minify JavaScript",
      "Compile WebAssembly",
      "Sanitize untrusted HTML before insertion",
      "Generate CSP nonces automatically alone"
    ],
    "correct": 2,
    "explanation": "Sanitizers strip dangerous markup from user content."
  },
  {
    "id": "fe-a-020",
    "question": "Reflected XSS differs from stored XSS because reflected XSS?",
    "options": [
      "Requires CSRF token",
      "Echoes payload from request into immediate response",
      "Only affects CSS",
      "Persists in database always"
    ],
    "correct": 1,
    "explanation": "Reflected XSS uses crafted URLs; stored XSS saves payload server-side."
  },
  {
    "id": "fe-a-021",
    "question": "CSRF tokens defend by requiring what?",
    "options": [
      "Unpredictable token on state-changing requests",
      "Removing cookies entirely",
      "HTTP/2 only",
      "Longer passwords only"
    ],
    "correct": 0,
    "explanation": "Attackers cannot read cross-origin responses to steal custom tokens easily."
  },
  {
    "id": "fe-a-022",
    "question": "Subresource Integrity (SRI) on script tags prevents what?",
    "options": [
      "CORS preflight",
      "Cookie theft always",
      "All XSS always",
      "Tampered CDN scripts via hash verification"
    ],
    "correct": 3,
    "explanation": "integrity attribute compares downloaded file hash to expected value."
  },
  {
    "id": "fe-a-023",
    "question": "dangerouslySetInnerHTML in React demands what precaution?",
    "options": [
      "Use with fetch no-cors",
      "Always wrap in StrictMode",
      "Sanitize or trust content source completely",
      "Disable keys on lists"
    ],
    "correct": 2,
    "explanation": "React warns because raw HTML bypasses JSX escaping."
  },
  {
    "id": "fe-a-024",
    "question": "The Secure cookie flag requires what transport?",
    "options": [
      "FTP",
      "HTTPS (secure contexts)",
      "file:// protocol",
      "HTTP only LAN"
    ],
    "correct": 1,
    "explanation": "Secure cookies are not sent over unencrypted connections."
  },
  {
    "id": "fe-a-025",
    "question": "Clickjacking defenses include which response header?",
    "options": [
      "Accept-Ranges",
      "Cache-Control: no-store only",
      "Access-Control-Allow-Origin: *",
      "X-Frame-Options or CSP frame-ancestors"
    ],
    "correct": 3,
    "explanation": "Frame busting headers prevent embedding in malicious iframes."
  },
  {
    "id": "fe-a-026",
    "question": "OWASP recommends encoding output contextually to prevent what?",
    "options": [
      "DNS rebinding only",
      "XSS in HTML, JS, URL, and CSS contexts",
      "All CSRF always without tokens",
      "Package hijacking"
    ],
    "correct": 1,
    "explanation": "Context-aware encoding stops browsers interpreting data as code."
  },
  {
    "id": "fe-a-027",
    "question": "Jest is primarily what kind of tool?",
    "options": [
      "Bundler only",
      "CSS preprocessor",
      "JavaScript test runner with assertions and mocks",
      "HTTP server"
    ],
    "correct": 2,
    "explanation": "Jest runs unit and integration tests with matchers and mocks."
  },
  {
    "id": "fe-a-028",
    "question": "React Testing Library encourages querying elements by what?",
    "options": [
      "CSS class names only",
      "Internal component state",
      "Roles and accessible labels",
      "Implementation details like state nodes"
    ],
    "correct": 2,
    "explanation": "User-centric queries improve resilience to refactors.",
    "demo": {
      "type": "output",
      "code": "screen.getByRole(\"button\", { name: /submit/i })",
      "output": "Finds button by accessible name"
    }
  },
  {
    "id": "fe-a-029",
    "question": "Mock functions in tests help by doing what?",
    "options": [
      "Speeding CPU only",
      "Removing async code",
      "Isolating units from real dependencies",
      "Replacing HTTP specification"
    ],
    "correct": 2,
    "explanation": "Mocks stub collaborators to test behavior in isolation."
  },
  {
    "id": "fe-a-030",
    "question": "A snapshot test compares what?",
    "options": [
      "Bundle hashes only",
      "Git commits",
      "Network packets",
      "Rendered output to a stored reference snapshot"
    ],
    "correct": 3,
    "explanation": "Snapshots catch unintended UI output changes."
  },
  {
    "id": "fe-a-031",
    "question": "Arrange-Act-Assert pattern structures tests as what?",
    "options": [
      "CSS then JS then HTML",
      "Setup, execute behavior, verify outcome",
      "Randomized steps",
      "Only assertions without setup"
    ],
    "correct": 1,
    "explanation": "AAA keeps tests readable and focused."
  },
  {
    "id": "fe-a-032",
    "question": "End-to-end tests with Cypress or Playwright typically run where?",
    "options": [
      "Real browser automation against running app",
      "Only Node without DOM",
      "CSS linter only",
      "SQL database only"
    ],
    "correct": 0,
    "explanation": "E2E tools drive browsers through user flows."
  },
  {
    "id": "fe-a-033",
    "question": "Code coverage reports show what?",
    "options": [
      "Lighthouse scores",
      "npm audit severity",
      "Which lines/branches tests executed",
      "Bundle treemap only"
    ],
    "correct": 2,
    "explanation": "Coverage highlights untested paths — not a quality guarantee alone."
  },
  {
    "id": "fe-a-034",
    "question": "userEvent over fireEvent in Testing Library often provides what?",
    "options": [
      "SSR hydration",
      "Automatic a11y fixes",
      "Faster network",
      "More realistic sequential user interactions"
    ],
    "correct": 3,
    "explanation": "userEvent simulates closer-to-real input sequences."
  },
  {
    "id": "fe-a-035",
    "question": "Testing async UI should use what RTL utility?",
    "options": [
      "Only manual setTimeout",
      "findBy queries and waitFor",
      "CSS selectors only",
      "getBy immediately always"
    ],
    "correct": 1,
    "explanation": "findBy waits for elements to appear; waitFor polls expectations."
  },
  {
    "id": "fe-a-036",
    "question": "Vitest integrates well with Vite projects because it shares what?",
    "options": [
      "Service worker cache",
      "Config and transform pipeline",
      "Database drivers",
      "PHP runtime"
    ],
    "correct": 1,
    "explanation": "Vitest reuses Vite esbuild/transform settings for fast tests."
  },
  {
    "id": "fe-a-037",
    "question": "Flaky tests are problematic because they?",
    "options": [
      "Replace manual QA entirely",
      "Always fail quickly",
      "Pass or fail non-deterministically undermining trust",
      "Increase coverage artificially"
    ],
    "correct": 2,
    "explanation": "Flakiness often comes from timing, shared state, or external deps."
  },
  {
    "id": "fe-a-038",
    "question": "Contract testing between frontend and API verifies what?",
    "options": [
      "Expected request/response shapes are honored",
      "Pixel-perfect design",
      "Git branch names",
      "GPU driver versions"
    ],
    "correct": 0,
    "explanation": "Consumer-driven contracts catch API drift early."
  },
  {
    "id": "fe-a-039",
    "question": "A 401 vs 403 response usually means:",
    "options": [
      "401 is unauthenticated; 403 is authenticated but not authorized",
      "401 means cache hit; 403 means cache miss",
      "Both always mean network timeout",
      "403 means redirect permanently"
    ],
    "correct": 0,
    "explanation": "Frontend auth handling often redirects on 401 and shows permission messaging on 403."
  },
  {
    "id": "fe-a-040",
    "question": "OAuth Authorization Code with PKCE is preferred for SPAs because it:",
    "options": [
      "Avoids putting a client secret in browser code",
      "Stores passwords in localStorage",
      "Disables HTTPS",
      "Requires third-party cookies"
    ],
    "correct": 0,
    "explanation": "PKCE protects the code exchange for public clients that cannot safely keep secrets."
  },
  {
    "id": "fe-a-041",
    "question": "ETag / If-None-Match helps frontend apps by:",
    "options": [
      "Allowing conditional requests that can return 304 Not Modified",
      "Replacing authentication",
      "Forcing every response to be JSON",
      "Blocking CORS"
    ],
    "correct": 0,
    "explanation": "Conditional requests reduce payload when cached resources have not changed."
  },
  {
    "id": "fe-a-042",
    "question": "WebSocket is most appropriate when:",
    "options": [
      "The app needs bidirectional realtime communication",
      "You only need one static image",
      "The server never sends updates",
      "You want to avoid all state"
    ],
    "correct": 0,
    "explanation": "WebSockets keep a persistent connection for chat, collaborative editing, dashboards, and similar realtime flows."
  },
  {
    "id": "fe-a-043",
    "question": "Server-Sent Events (SSE) are best when:",
    "options": [
      "The server streams one-way updates to the browser",
      "The browser must send binary frames constantly",
      "You need peer-to-peer video",
      "You want to replace HTTP"
    ],
    "correct": 0,
    "explanation": "SSE uses HTTP for server-to-client event streams, useful for notifications and live feeds."
  },
  {
    "id": "fe-a-044",
    "question": "Debouncing a search input means:",
    "options": [
      "Wait until typing pauses before firing expensive work",
      "Run on every keydown immediately",
      "Disable keyboard input",
      "Cache all HTTP responses forever"
    ],
    "correct": 0,
    "explanation": "Debounce reduces API calls and expensive filtering while users are still typing."
  },
  {
    "id": "fe-a-045",
    "question": "Virtualizing a long list primarily improves:",
    "options": [
      "DOM size and rendering work",
      "Password strength",
      "HTTP status codes",
      "The user's network provider"
    ],
    "correct": 0,
    "explanation": "Only visible rows are mounted, which keeps scrolling responsive for thousands of items."
  },
  {
    "id": "fe-a-046",
    "question": "Constraint Validation API is used to:",
    "options": [
      "Read and report native form validity states",
      "Validate JWT signatures in CSS",
      "Bundle JavaScript",
      "Replace labels"
    ],
    "correct": 0,
    "explanation": "Methods like checkValidity() and reportValidity() support accessible native form validation flows."
  },
  {
    "id": "fe-a-047",
    "question": "i18n date and number formatting should generally use:",
    "options": [
      "Intl APIs with the user's locale",
      "String concatenation only",
      "Hard-coded US formats everywhere",
      "CSS media queries"
    ],
    "correct": 0,
    "explanation": "Intl.DateTimeFormat and Intl.NumberFormat handle locale-specific separators, calendars, and ordering."
  },
  {
    "id": "fe-a-048",
    "question": "A CI frontend pipeline should commonly run:",
    "options": [
      "Lint, typecheck, tests, and production build",
      "Only npm install",
      "Manual screenshots only",
      "Database migrations in the browser"
    ],
    "correct": 0,
    "explanation": "Automated checks catch regressions before deploy and keep build artifacts reproducible."
  },
  {
    "id": "fe-a-049",
    "question": "Prettier and ESLint usually differ because:",
    "options": [
      "Prettier formats code; ESLint catches code-quality and correctness rules",
      "Both only minify bundles",
      "Prettier runs unit tests",
      "ESLint replaces TypeScript"
    ],
    "correct": 0,
    "explanation": "Teams often use Prettier for style consistency and ESLint for suspicious patterns and project rules."
  },
  {
    "id": "fe-a-050",
    "question": "A 204 No Content response means frontend code should:",
    "options": [
      "Not try to parse a JSON body",
      "Always retry forever",
      "Treat it as a redirect",
      "Assume authentication failed"
    ],
    "correct": 0,
    "explanation": "204 indicates success with no response body, so response.json() would fail."
  },
  {
    "id": "fe-a-051",
    "question": "Server-side rendering (SSR) generates HTML where?",
    "options": [
      "Inside service worker cache only",
      "On the server per request or at build/prerender time",
      "On DNS servers",
      "Only in the browser"
    ],
    "correct": 1,
    "explanation": "SSR sends HTML with content before client hydration.",
    "demo": {
      "type": "output",
      "code": "// Server\nconst html = renderToString(<App data={data} />);\nres.send(`<div id=\"root\">${html}</div>`);",
      "output": "HTML includes content before JS"
    }
  },
  {
    "id": "fe-a-052",
    "question": "Client-side rendering (CSR) first payload typically includes what?",
    "options": [
      "Database dump",
      "Fully rendered HTML always",
      "Minimal shell plus JavaScript bundles",
      "Only CSS without JS"
    ],
    "correct": 2,
    "explanation": "CSR builds UI after JS downloads and executes."
  },
  {
    "id": "fe-a-053",
    "question": "Hydration connects what after SSR?",
    "options": [
      "API to SQL only",
      "Server HTML to client framework event handlers",
      "CSS to HTML only",
      "Cookies to localStorage"
    ],
    "correct": 1,
    "explanation": "Hydration attaches interactivity without replacing markup."
  },
  {
    "id": "fe-a-054",
    "question": "Streaming SSR improves what metric?",
    "options": [
      "Font licensing",
      "Time to first byte / early flush of HTML chunks",
      "Cookie size",
      "npm install speed"
    ],
    "correct": 1,
    "explanation": "Streaming sends partial HTML before full render completes."
  },
  {
    "id": "fe-a-055",
    "question": "Static site generation (SSG) pre-renders pages when?",
    "options": [
      "Never caches HTML",
      "Only in Web Workers",
      "On every user keystroke",
      "At build time into static files"
    ],
    "correct": 3,
    "explanation": "SSG emits HTML at build for CDN-friendly delivery."
  },
  {
    "id": "fe-a-056",
    "question": "Hydration mismatch errors occur when what differs?",
    "options": [
      "Git branch",
      "CSS colors only",
      "Server HTML vs client first render output",
      "HTTP version"
    ],
    "correct": 2,
    "explanation": "React warns when client render cannot reuse server DOM."
  },
  {
    "id": "fe-a-057",
    "question": "Islands architecture combines what approaches?",
    "options": [
      "Full CSR only",
      "iframe-only apps",
      "Mostly static HTML with isolated interactive islands",
      "No JavaScript ever"
    ],
    "correct": 2,
    "explanation": "Islands hydrate small interactive regions, keeping pages lightweight."
  },
  {
    "id": "fe-a-058",
    "question": "selective hydration prioritizes what components first?",
    "options": [
      "Above-the-fold or user-interactive regions",
      "Analytics scripts first always",
      "Hidden modals first",
      "Footer legal text only"
    ],
    "correct": 0,
    "explanation": "Priority hydration improves perceived interactivity."
  },
  {
    "id": "fe-a-059",
    "question": "getServerSideProps pattern in Next.js pages router runs where?",
    "options": [
      "Only in browser",
      "Inside web worker always",
      "On the server on each request",
      "In CDN DNS"
    ],
    "correct": 2,
    "explanation": "Data fetching for SSR happens server-side per request."
  },
  {
    "id": "fe-a-060",
    "question": "CSR-only SPAs often depend on what for SEO mitigation?",
    "options": [
      "Removing all routes",
      "Disabling crawlers",
      "Prerendering, meta management, or SSR for critical routes",
      "Using only canvas"
    ],
    "correct": 2,
    "explanation": "Search engines handle JS better but SSR/prerender still helps reliability."
  },
  {
    "id": "fe-a-061",
    "question": "Suspense on the server enables what in React 18+?",
    "options": [
      "Disabling hydration",
      "Synchronous only rendering",
      "Streaming HTML with fallback placeholders",
      "Removing need for keys"
    ],
    "correct": 2,
    "explanation": "Server Suspense can flush shell early while data resolves."
  },
  {
    "id": "fe-a-062",
    "question": "Revalidation in ISR (incremental static regeneration) allows what?",
    "options": [
      "Updating static pages after deploy without full rebuild",
      "Infinite SSR per click",
      "Client-only routing removal",
      "Deleting CDN always"
    ],
    "correct": 0,
    "explanation": "ISR refreshes stale static pages on a schedule or on-demand."
  },
  {
    "id": "fe-a-063",
    "question": "Intersection Observer efficiently detects what?",
    "options": [
      "Network RTT",
      "Cookie changes",
      "Keyboard focus order",
      "Element visibility relative to viewport"
    ],
    "correct": 3,
    "explanation": "Observers fire when targets enter or exit root without scroll listeners.",
    "demo": {
      "type": "output",
      "code": "const obs = new IntersectionObserver(entries => {\n  entries.forEach(e => console.log(e.isIntersecting));\n});\nobs.observe(el);",
      "output": "Callback on visibility change"
    }
  },
  {
    "id": "fe-a-064",
    "question": "ResizeObserver reports what?",
    "options": [
      "Font licensing",
      "Network throughput",
      "Scroll position only",
      "Element content box size changes"
    ],
    "correct": 3,
    "explanation": "ResizeObserver callbacks run when observed elements resize."
  },
  {
    "id": "fe-a-065",
    "question": "MutationObserver watches for what?",
    "options": [
      "HTTP redirects",
      "GPU temperature",
      "DOM tree and attribute mutations",
      "npm downloads"
    ],
    "correct": 2,
    "explanation": "MutationObserver reacts to DOM changes programmatically."
  },
  {
    "id": "fe-a-066",
    "question": "The Fetch API AbortSignal.timeout(ms) helper does what?",
    "options": [
      "Automatically aborts fetch after specified milliseconds",
      "Retries forever",
      "Sets cookies",
      "Parses JSON"
    ],
    "correct": 0,
    "explanation": "Timeout signals reject the fetch when deadline elapses."
  },
  {
    "id": "fe-a-067",
    "question": "navigator.clipboard.writeText requires what in modern browsers?",
    "options": [
      "IE11 mode",
      "Secure context and often user gesture permissions",
      "Disabled JavaScript",
      "HTTP only"
    ],
    "correct": 1,
    "explanation": "Clipboard API is restricted for security; HTTPS and permissions apply."
  },
  {
    "id": "fe-a-068",
    "question": "Web Workers allow what?",
    "options": [
      "Running JavaScript on a background thread",
      "Direct DOM manipulation",
      "Synchronous XHR only",
      "Replacing CSS"
    ],
    "correct": 0,
    "explanation": "Workers message main thread; no DOM access inside worker."
  },
  {
    "id": "fe-a-069",
    "question": "Service workers intercept what?",
    "options": [
      "Git pushes",
      "Network requests for caching and offline strategies",
      "CSS parsing order",
      "SQL queries"
    ],
    "correct": 1,
    "explanation": "Service workers enable PWA offline and push features."
  },
  {
    "id": "fe-a-070",
    "question": "BroadcastChannel enables what between browsing contexts?",
    "options": [
      "Font subsetting",
      "Automatic SSR",
      "Cross-origin DOM access",
      "Same-origin message passing between tabs/windows/workers"
    ],
    "correct": 3,
    "explanation": "BroadcastChannel posts messages to all listeners on an origin."
  },
  {
    "id": "fe-a-071",
    "question": "Geolocation API getCurrentPosition typically requires what?",
    "options": [
      "WebGL context",
      "User permission prompt in supporting browsers",
      "Disabled HTTPS",
      "Admin sudo"
    ],
    "correct": 1,
    "explanation": "Browsers gate sensitive APIs behind permission prompts."
  },
  {
    "id": "fe-a-072",
    "question": "URL API URLSearchParams helps with what?",
    "options": [
      "Building and parsing query strings safely",
      "Minifying bundles",
      "Canvas export only",
      "Shadow DOM slots"
    ],
    "correct": 0,
    "explanation": "URLSearchParams encodes/decodes application/x-www-form-urlencoded pairs."
  },
  {
    "id": "fe-a-073",
    "question": "requestIdleCallback schedules work when?",
    "options": [
      "Before every paint always",
      "During service worker install only",
      "Main thread is idle between frames",
      "Only offline"
    ],
    "correct": 2,
    "explanation": "Idle callbacks run low-priority tasks without blocking input."
  },
  {
    "id": "fe-a-074",
    "question": "PerformanceObserver allows subscribing to what?",
    "options": [
      "Performance timeline entry types like LCP and long tasks",
      "CSS animations only",
      "Cookie consent banners",
      "Git hooks"
    ],
    "correct": 0,
    "explanation": "PerformanceObserver streams metrics for RUM collection."
  },
  {
    "id": "fe-a-075",
    "question": "Structured cloning in postMessage supports what?",
    "options": [
      "Shared mutable prototypes",
      "Copying most object graphs between contexts",
      "DOM nodes directly always",
      "Functions with closures intact always"
    ],
    "correct": 1,
    "explanation": "postMessage clones data; functions and DOM nodes are not cloneable."
  },
  {
    "id": "fe-a-076",
    "question": "axe-core is used primarily for what?",
    "options": [
      "GraphQL schema validation",
      "Bundle analysis",
      "Automated accessibility rule auditing",
      "Image compression"
    ],
    "correct": 2,
    "explanation": "axe detects many WCAG violations programmatically.",
    "demo": {
      "type": "output",
      "code": "import axe from \"axe-core\";\naxe.run(document, (err, results) => {\n  console.log(results.violations);\n});",
      "output": "Array of a11y violations"
    }
  },
  {
    "id": "fe-a-077",
    "question": "WCAG AA normal text contrast ratio requirement is approximately?",
    "options": [
      "2:1",
      "1.5:1",
      "4.5:1",
      "7:1 for all text sizes"
    ],
    "correct": 2,
    "explanation": "Level AA requires sufficient color contrast for readability."
  },
  {
    "id": "fe-a-078",
    "question": "aria-live regions announce what to assistive tech?",
    "options": [
      "Mouse hover only",
      "Video frames",
      "Dynamic content updates without moving focus",
      "Cookie banners only visually"
    ],
    "correct": 2,
    "explanation": "Live regions communicate changes to screen readers."
  },
  {
    "id": "fe-a-079",
    "question": "Keyboard trap in a modal should ensure what?",
    "options": [
      "Focus cycles within modal until dismissed",
      "Focus lost to body always",
      "Tab key disabled globally",
      "Only mouse can exit"
    ],
    "correct": 0,
    "explanation": "Focus management keeps keyboard users oriented in dialogs."
  },
  {
    "id": "fe-a-080",
    "question": "Semantic HTML <button> vs <div onclick> benefits include what?",
    "options": [
      "Smaller bundles always",
      "Automatic AJAX",
      "CORS bypass",
      "Built-in keyboard activation and role"
    ],
    "correct": 3,
    "explanation": "Native elements carry accessibility behaviors by default."
  },
  {
    "id": "fe-a-081",
    "question": "Skip navigation links help who?",
    "options": [
      "SEO bots only",
      "Ad blockers",
      "Keyboard and screen reader users bypass repetitive content",
      "CDN caches"
    ],
    "correct": 2,
    "explanation": "Skip links jump directly to main content."
  },
  {
    "id": "fe-a-082",
    "question": "Accessible name for a control can come from what sources?",
    "options": [
      "Visible label, aria-label, or aria-labelledby",
      "CSS color only",
      "Bundle hash",
      "z-index value"
    ],
    "correct": 0,
    "explanation": "Accname computation combines multiple naming techniques."
  },
  {
    "id": "fe-a-083",
    "question": "Color alone must not be the only means to convey what?",
    "options": [
      "Image format",
      "Information or action state",
      "HTTP status",
      "Font family choice"
    ],
    "correct": 1,
    "explanation": "WCAG requires non-color cues for status and errors."
  },
  {
    "id": "fe-a-084",
    "question": "Lighthouse accessibility audit complements manual testing because it?",
    "options": [
      "Fixes code automatically",
      "Replaces screen reader testing entirely",
      "Catches programmatic violations but not all UX issues",
      "Eliminates need for semantics"
    ],
    "correct": 2,
    "explanation": "Automated tools miss context; manual AT testing remains essential."
  },
  {
    "id": "fe-a-085",
    "question": "role=\"img\" with aria-label provides what for informative SVG icons?",
    "options": [
      "Automatic translation",
      "Text alternative when no visible label exists",
      "Lazy loading",
      "CORS headers"
    ],
    "correct": 1,
    "explanation": "Accessible names expose informative icon meaning to assistive technology. Decorative icons should usually be aria-hidden."
  },
  {
    "id": "fe-a-086",
    "question": "Focus visible styles should meet what user need?",
    "options": [
      "Keyboard users can see which element is focused",
      "Print layouts",
      "Dark mode only",
      "Mouse users only"
    ],
    "correct": 0,
    "explanation": ":focus-visible styles aid keyboard navigation without harming mouse UX."
  },
  {
    "id": "fe-a-087",
    "question": "Heading levels should reflect what for document outline?",
    "options": [
      "Alphabetical order",
      "Random h tags for styling",
      "Visual size only",
      "Logical hierarchy without skipping inappropriately"
    ],
    "correct": 3,
    "explanation": "Proper heading structure helps screen reader navigation."
  },
  {
    "id": "fe-a-088",
    "question": "ES modules in browsers use which syntax natively?",
    "options": [
      "#include",
      "import and export",
      "using only",
      "require and module.exports"
    ],
    "correct": 1,
    "explanation": "Browsers natively support ESM import and export in module scripts.",
    "demo": {
      "type": "output",
      "code": "<script type=\"module\">\n  import { init } from \"./app.js\";\n  init();\n</script>",
      "output": "Native ESM in browser"
    }
  },
  {
    "id": "fe-a-089",
    "question": "Dynamic import() returns what?",
    "options": [
      "Promise resolving to module namespace",
      "Global variable",
      "CSS string",
      "Synchronous module object"
    ],
    "correct": 0,
    "explanation": "import() enables code-splitting and lazy loading.",
    "demo": {
      "type": "output",
      "code": "const mod = await import(\"./heavy.js\");\nmod.run();",
      "output": "Lazy-loaded chunk"
    }
  },
  {
    "id": "fe-a-090",
    "question": "CommonJS require in Node is characterized by what loading model?",
    "options": [
      "Synchronous load at require call time",
      "CSS @import",
      "HTTP/2 push only",
      "Browser native ESM only"
    ],
    "correct": 0,
    "explanation": "require loads modules synchronously at runtime in CJS."
  },
  {
    "id": "fe-a-091",
    "question": "module.exports in CommonJS defines what?",
    "options": [
      "Global window properties always",
      "The public exports of a module",
      "Service worker scope",
      "CSS modules map"
    ],
    "correct": 1,
    "explanation": "module.exports is the CJS export object."
  },
  {
    "id": "fe-a-092",
    "question": "ESM import.meta.url provides what in browsers?",
    "options": [
      "User home directory",
      "The npm registry URL",
      "The URL of the current module",
      "WebSocket endpoint"
    ],
    "correct": 2,
    "explanation": "import.meta.url is the absolute URL of the module file."
  },
  {
    "id": "fe-a-093",
    "question": "Tree shaking relies on what module format feature?",
    "options": [
      "Global script tags only",
      "JSONP callbacks",
      "Dynamic require strings always",
      "Static import/export syntax analyzable at build time"
    ],
    "correct": 3,
    "explanation": "Static ESM structure enables dead code elimination."
  },
  {
    "id": "fe-a-094",
    "question": "Circular dependencies in ESM often work differently than CJS because ESM?",
    "options": [
      "Binds live read-only exports before evaluation completes",
      "Disallows cycles entirely always",
      "Uses window globals",
      "Copies values on import always"
    ],
    "correct": 0,
    "explanation": "ESM exports are live bindings; partial initialization can occur in cycles."
  },
  {
    "id": "fe-a-095",
    "question": "type=\"module\" script tags defer execution until when?",
    "options": [
      "Immediately blocking parser always",
      "Document parsed, executed in order, deferred by default",
      "After all images only",
      "Never runs in Safari"
    ],
    "correct": 1,
    "explanation": "Module scripts defer and run in document order."
  },
  {
    "id": "fe-a-096",
    "question": "import maps allow browsers to do what?",
    "options": [
      "Replace HTTPS",
      "Skip CORS entirely",
      "Inline all CSS",
      "Resolve bare specifiers to URLs in import statements"
    ],
    "correct": 3,
    "explanation": "Import maps map module names to CDN or local URLs without bundlers."
  },
  {
    "id": "fe-a-097",
    "question": "Barrel files (index.js re-exporting modules) can harm what if overused?",
    "options": [
      "Accessibility tree",
      "Tree shaking and bundle size via pulling unused exports",
      "Service worker scope",
      "HTTPS"
    ],
    "correct": 1,
    "explanation": "Barrels may prevent eliminating unused exports unless optimized."
  },
  {
    "id": "fe-a-098",
    "question": "UMD bundles attempt to support what environments?",
    "options": [
      "Only ESM in browsers",
      "Only CSS modules",
      "Only WebAssembly",
      "CommonJS, AMD, and browser globals"
    ],
    "correct": 3,
    "explanation": "UMD wraps modules for multiple loader/global patterns."
  },
  {
    "id": "fe-a-099",
    "question": "Package exports field in package.json controls what?",
    "options": [
      "Public entry points and conditional exports resolution",
      "Lighthouse score",
      "Cookie names",
      "Git remote URLs only"
    ],
    "correct": 0,
    "explanation": "exports maps define which files consumers may import."
  },
  {
    "id": "fe-a-100",
    "question": "Top-level await in an ES module affects importers by?",
    "options": [
      "Removing need for exports",
      "Disabling strict mode",
      "Auto-converting to CJS",
      "Delaying availability until awaited promise settles"
    ],
    "correct": 3,
    "explanation": "Importers await module evaluation graph completion."
  }
];

/** @param {'beginner' | 'intermediate' | 'advanced'} level */
export function getFrontendQuestions(level) {
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
