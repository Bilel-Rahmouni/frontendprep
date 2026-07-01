const BEGINNER = [
  {
    "id": "css-b-001",
    "question": "Which selector targets elements with class \"btn\"?",
    "options": [
      ".btn",
      "#btn",
      "btn",
      "*btn"
    ],
    "correct": 0,
    "explanation": "A class selector uses a dot prefix: .classname targets all elements with that class."
  },
  {
    "id": "css-b-002",
    "question": "What does the #header selector match?",
    "options": [
      "The first header on the page",
      "Elements with class header",
      "An element with id=\"header\"",
      "All header elements"
    ],
    "correct": 2,
    "explanation": "#id selects a single element by its unique id attribute."
  },
  {
    "id": "css-b-003",
    "question": "Which selector matches all <p> elements?",
    "options": [
      "*p",
      ".p",
      "p",
      "#p"
    ],
    "correct": 2,
    "explanation": "A type selector uses the element name without any prefix."
  },
  {
    "id": "css-b-004",
    "question": "What does div.container select?",
    "options": [
      "div elements with class container",
      "The container div only by id",
      "All div and .container elements",
      "Nested containers only"
    ],
    "correct": 0,
    "explanation": "Combining type and class narrows the match to div elements that also have class container.",
    "demo": {
      "type": "css",
      "id": "css-b-004",
      "code": "background: #dbeafe; border: 2px solid #2563eb; padding: 10px;",
      "preview": "div.container styling"
    }
  },
  {
    "id": "css-b-005",
    "question": "Which is a descendant selector?",
    "options": [
      "nav > a",
      "nav ~ a",
      "nav + a",
      "nav a"
    ],
    "correct": 3,
    "explanation": "A space between selectors means any descendant, at any depth."
  },
  {
    "id": "css-b-006",
    "question": "What does ul > li select?",
    "options": [
      "li elements adjacent to ul",
      "li elements before ul",
      "Direct child li elements of ul",
      "All li descendants of ul"
    ],
    "correct": 2,
    "explanation": "The child combinator > selects only immediate children."
  },
  {
    "id": "css-b-007",
    "question": "Which selector matches any <h1> inside .hero?",
    "options": [
      ".hero h1",
      ".hero + h1",
      "h1.hero",
      ".hero > h1:first-child"
    ],
    "correct": 0,
    "explanation": ".hero h1 targets h1 descendants inside an element with class hero.",
    "demo": {
      "type": "css",
      "id": "css-b-007",
      "code": "font-size: 2rem; color: #1e40af; margin: 0;",
      "preview": "Hero heading"
    }
  },
  {
    "id": "css-b-008",
    "question": "What does * select?",
    "options": [
      "Hidden elements only",
      "Elements with no class",
      "Every element",
      "Only universal class elements"
    ],
    "correct": 2,
    "explanation": "The universal selector * matches all elements in the document."
  },
  {
    "id": "css-b-009",
    "question": "Which attribute selector matches links whose href starts with \"https\"?",
    "options": [
      "a[href^=\"https\"]",
      "a[href=\"https\"]",
      "a[href*=\"https\"]",
      "a[href$=\"https\"]"
    ],
    "correct": 0,
    "explanation": "[attr^=value] matches attributes that begin with the given string."
  },
  {
    "id": "css-b-010",
    "question": "What does input[type=\"email\"] select?",
    "options": [
      "All inputs and emails",
      "Input elements with type email",
      "Email links",
      "Labels for email fields"
    ],
    "correct": 1,
    "explanation": "Attribute selectors filter elements by attribute values.",
    "demo": {
      "type": "css",
      "id": "css-b-010",
      "code": "border: 1px solid #94a3b8; padding: 8px; border-radius: 4px;",
      "preview": "Email input style"
    }
  },
  {
    "id": "css-b-011",
    "question": "Which groups multiple selectors with the same rules?",
    "options": [
      "Comma: h1, h2, h3",
      "Plus: h1 + h2 + h3",
      "Space: h1 h2 h3",
      "Ampersand: h1 & h2"
    ],
    "correct": 0,
    "explanation": "A comma creates a selector list — the rule applies to each selector."
  },
  {
    "id": "css-b-012",
    "question": "What does .card .title select?",
    "options": [
      ".title siblings of .card",
      ".card immediately after .title",
      ".title inside .card",
      ".title that is also .card"
    ],
    "correct": 2,
    "explanation": "A space indicates descendant relationship regardless of depth."
  },
  {
    "id": "css-b-013",
    "question": "Which selector has higher specificity?",
    "options": [
      "nav .link",
      ".nav .link",
      ".link",
      "#nav .link"
    ],
    "correct": 3,
    "explanation": "IDs outweigh classes; #nav .link beats .nav .link.",
    "demo": {
      "type": "css",
      "id": "css-b-013",
      "code": "color: #dc2626; font-weight: 700;",
      "preview": "#nav .link wins"
    }
  },
  {
    "id": "css-b-014",
    "question": "What does a[href$=\".pdf\"] match?",
    "options": [
      "Links starting with .pdf",
      "Links ending in .pdf",
      "Links containing .pdf anywhere",
      "PDF embed elements"
    ],
    "correct": 1,
    "explanation": "[attr$=value] matches attributes ending with the string."
  },
  {
    "id": "css-b-015",
    "question": "Which pseudo-class selects a link not yet visited?",
    "options": [
      ":link",
      ":focus",
      ":visited",
      ":active"
    ],
    "correct": 0,
    "explanation": ":link applies to unvisited hyperlinks.",
    "demo": {
      "type": "css",
      "id": "css-b-015",
      "code": "color: blue; text-decoration: underline;",
      "preview": "Unvisited link style"
    }
  },
  {
    "id": "css-b-016",
    "question": "In the standard box model, width: 200px sets:",
    "options": [
      "Total outer width including margin",
      "Width including padding and border",
      "Width of the viewport",
      "Content width only (before padding/border)"
    ],
    "correct": 3,
    "explanation": "In content-box (default), width applies to the content area only."
  },
  {
    "id": "css-b-017",
    "question": "What does box-sizing: border-box change?",
    "options": [
      "Margin is included in width",
      "Border is removed",
      "Padding is ignored",
      "Width includes padding and border"
    ],
    "correct": 3,
    "explanation": "border-box makes width/height include padding and border, simplifying layout math."
  },
  {
    "id": "css-b-018",
    "question": "Which property adds space inside the border?",
    "options": [
      "outline",
      "gap",
      "padding",
      "margin"
    ],
    "correct": 2,
    "explanation": "Padding is the inner space between content and border.",
    "demo": {
      "type": "css",
      "id": "css-b-018",
      "code": "padding: 20px; background: #bbf7d0;",
      "preview": "Inner padding space"
    }
  },
  {
    "id": "css-b-019",
    "question": "Which property adds space outside the border?",
    "options": [
      "inset",
      "padding",
      "border-spacing",
      "margin"
    ],
    "correct": 3,
    "explanation": "Margin creates space outside the element border, between elements."
  },
  {
    "id": "css-b-020",
    "question": "What is the default value of box-sizing?",
    "options": [
      "content-box",
      "inherit",
      "border-box",
      "auto"
    ],
    "correct": 0,
    "explanation": "Browsers default to content-box unless reset globally."
  },
  {
    "id": "css-b-021",
    "question": "border: 2px solid black sets:",
    "options": [
      "Width, style, and color in one declaration",
      "A 2px outline",
      "Only the border color",
      "Rounded corners"
    ],
    "correct": 0,
    "explanation": "border is shorthand for border-width, border-style, and border-color.",
    "demo": {
      "type": "css",
      "id": "css-b-021",
      "code": "border: 2px solid #000; padding: 8px;",
      "preview": "2px solid border"
    }
  },
  {
    "id": "css-b-022",
    "question": "Which creates a visible box edge around content?",
    "options": [
      "margin",
      "float",
      "z-index",
      "border"
    ],
    "correct": 3,
    "explanation": "border draws the box edge; margin is transparent space outside it."
  },
  {
    "id": "css-b-023",
    "question": "What does outline differ from border?",
    "options": [
      "Outline replaces margin",
      "Outline only works on block elements",
      "Outline does not affect layout/box size",
      "Outline is always dashed"
    ],
    "correct": 2,
    "explanation": "Outlines are drawn outside the border box and do not occupy layout space."
  },
  {
    "id": "css-b-024",
    "question": "min-height: 100vh means:",
    "options": [
      "Exactly viewport width",
      "Height of parent only",
      "At least full viewport height",
      "Maximum viewport height"
    ],
    "correct": 2,
    "explanation": "vh units are relative to viewport height; 100vh = full viewport.",
    "demo": {
      "type": "css",
      "id": "css-b-024",
      "code": "min-height: 60px; background: #e2e8f0; display: flex; align-items: center; justify-content: center;",
      "preview": "min-height box"
    }
  },
  {
    "id": "css-b-025",
    "question": "Which property collapses adjacent vertical margins between block elements?",
    "options": [
      "Default block margin behavior (margin collapse)",
      "flex",
      "padding",
      "overflow: hidden always"
    ],
    "correct": 0,
    "explanation": "Adjacent block margins collapse to the larger value — a classic CSS behavior."
  },
  {
    "id": "css-b-026",
    "question": "overflow: hidden on a box:",
    "options": [
      "Always shows scrollbars",
      "Clips content exceeding the box",
      "Removes padding",
      "Expands the box to fit content"
    ],
    "correct": 1,
    "explanation": "hidden clips overflowing content and establishes a block formatting context."
  },
  {
    "id": "css-b-027",
    "question": "What does max-width: 100% do on an image?",
    "options": [
      "Centers the image",
      "Forces image to 100px wide",
      "Sets height to 100%",
      "Prevents image from exceeding container width"
    ],
    "correct": 3,
    "explanation": "max-width caps the rendered width while preserving aspect ratio when height is auto.",
    "demo": {
      "type": "css",
      "id": "css-b-027",
      "code": "max-width: 100%; height: auto; border: 1px solid #ccc;",
      "preview": "Responsive image rule"
    }
  },
  {
    "id": "css-b-028",
    "question": "Which box model layer is transparent by default?",
    "options": [
      "Content",
      "Padding",
      "Margin",
      "Border"
    ],
    "correct": 2,
    "explanation": "Margin area is always transparent; background does not paint there."
  },
  {
    "id": "css-b-029",
    "question": "height: auto on a block with only text:",
    "options": [
      "Height equals parent",
      "Height is zero",
      "Height fits content",
      "Height equals viewport"
    ],
    "correct": 2,
    "explanation": "auto lets block height grow to contain its content."
  },
  {
    "id": "css-b-030",
    "question": "box-sizing: border-box with width: 300px and padding: 20px yields total width of:",
    "options": [
      "260px",
      "320px",
      "300px",
      "340px"
    ],
    "correct": 2,
    "explanation": "Total width stays 300px; content area shrinks to accommodate padding.",
    "demo": {
      "type": "css",
      "id": "css-b-030",
      "code": "box-sizing: border-box; width: 200px; padding: 20px; border: 2px solid #333; background: #eef;",
      "preview": "Border-box sizing"
    }
  },
  {
    "id": "css-b-031",
    "question": "Which is a valid hex color?",
    "options": [
      "#fff00",
      "#ff0000",
      "ff0000",
      "#gg0000"
    ],
    "correct": 1,
    "explanation": "Hex colors use # followed by 3 or 6 hexadecimal digits.",
    "demo": {
      "type": "css",
      "id": "css-b-031",
      "code": "color: #ff0000;",
      "preview": "Hex red text"
    }
  },
  {
    "id": "css-b-032",
    "question": "rgb(255, 0, 0) represents:",
    "options": [
      "White",
      "Green",
      "Blue",
      "Red"
    ],
    "correct": 3,
    "explanation": "RGB values go from 0–255 per channel; (255,0,0) is full red."
  },
  {
    "id": "css-b-033",
    "question": "rgba(0, 0, 0, 0.5) means:",
    "options": [
      "Solid black",
      "50% opaque black",
      "50% transparent white",
      "Invalid syntax"
    ],
    "correct": 1,
    "explanation": "The fourth value is alpha: 0 = fully transparent, 1 = fully opaque."
  },
  {
    "id": "css-b-034",
    "question": "hsl(120, 100%, 50%) is approximately:",
    "options": [
      "Green",
      "Gray",
      "Blue",
      "Red"
    ],
    "correct": 0,
    "explanation": "Hue 120° on the color wheel is in the green range.",
    "demo": {
      "type": "css",
      "id": "css-b-034",
      "code": "background: hsl(120, 100%, 40%); color: white; padding: 8px;",
      "preview": "HSL green background"
    }
  },
  {
    "id": "css-b-035",
    "question": "Which keyword sets fully transparent color?",
    "options": [
      "opacity",
      "none",
      "clear",
      "transparent"
    ],
    "correct": 3,
    "explanation": "transparent is a valid color keyword equivalent to rgba(0,0,0,0)."
  },
  {
    "id": "css-b-036",
    "question": "color: inherit means:",
    "options": [
      "Use the parent element text color",
      "Use black always",
      "Use browser default",
      "Remove text color"
    ],
    "correct": 0,
    "explanation": "inherit takes the computed value from the parent element."
  },
  {
    "id": "css-b-037",
    "question": "background-color vs color:",
    "options": [
      "They are identical",
      "background-color sets border color",
      "background-color fills the box background; color sets text color",
      "color sets background"
    ],
    "correct": 2,
    "explanation": "color affects foreground text; background-color paints behind content.",
    "demo": {
      "type": "css",
      "id": "css-b-037",
      "code": "background-color: #fef08a; color: #713f12; padding: 10px;",
      "preview": "Background vs text color"
    }
  },
  {
    "id": "css-b-038",
    "question": "#rgb shorthand #f00 expands to:",
    "options": [
      "#ffff00",
      "#f00000",
      "#ff000",
      "#ff0000"
    ],
    "correct": 3,
    "explanation": "Three-digit hex doubles each digit: #f00 → #ff0000."
  },
  {
    "id": "css-b-039",
    "question": "currentColor refers to:",
    "options": [
      "The body background",
      "The element computed color value",
      "Always black",
      "Browser chrome color"
    ],
    "correct": 1,
    "explanation": "currentColor is the value of the color property, usable in borders, shadows, etc."
  },
  {
    "id": "css-b-040",
    "question": "Which sets 50% opacity on an entire element including children?",
    "options": [
      "display: none",
      "opacity: 0.5",
      "color: rgba only",
      "visibility: hidden"
    ],
    "correct": 1,
    "explanation": "opacity affects the whole element and its descendants as a group.",
    "demo": {
      "type": "css",
      "id": "css-b-040",
      "code": "opacity: 0.5; background: #3b82f6; padding: 12px;",
      "preview": "50% opacity element"
    }
  },
  {
    "id": "css-b-041",
    "question": "linear-gradient(to right, red, blue) creates:",
    "options": [
      "A horizontal color transition",
      "A radial gradient",
      "A vertical gradient",
      "A solid red background"
    ],
    "correct": 0,
    "explanation": "to right transitions colors along the horizontal axis."
  },
  {
    "id": "css-b-042",
    "question": "Which color format supports alpha in modern CSS?",
    "options": [
      "Only hsl()",
      "Only hex",
      "Only named colors",
      "All: hex (#rrggbbaa), rgb(), hsl()"
    ],
    "correct": 3,
    "explanation": "Modern CSS supports alpha in hex (#rrggbbaa), rgb/rgba, and hsl/hsla.",
    "demo": {
      "type": "css",
      "id": "css-b-042",
      "code": "color: #e63946; background: linear-gradient(135deg, #f1faee, #a8dadc); padding: 12px;",
      "preview": "Color gradient text box"
    }
  },
  {
    "id": "css-b-043",
    "question": "font-family: Arial, sans-serif means:",
    "options": [
      "Arial only, ignore fallback",
      "Invalid syntax",
      "Use Arial, fallback to generic sans-serif",
      "Use both fonts simultaneously"
    ],
    "correct": 2,
    "explanation": "Comma-separated font stacks try each font left-to-right until one is available.",
    "demo": {
      "type": "css",
      "id": "css-b-043",
      "code": "font-family: \"Courier New\", monospace; font-size: 14px;",
      "preview": "Font stack sample"
    }
  },
  {
    "id": "css-b-044",
    "question": "font-weight: bold sets:",
    "options": [
      "Underline decoration",
      "Larger font size",
      "Heavier font weight (typically 700)",
      "Italic style"
    ],
    "correct": 2,
    "explanation": "font-weight controls thickness; bold maps to 700 in most fonts."
  },
  {
    "id": "css-b-045",
    "question": "font-style: italic applies:",
    "options": [
      "Italic/oblique letterforms",
      "Underline",
      "Bold weight",
      "Small caps"
    ],
    "correct": 0,
    "explanation": "font-style: italic slants or uses italic glyphs depending on the font."
  },
  {
    "id": "css-b-046",
    "question": "font-size: 1rem is relative to:",
    "options": [
      "Parent font size",
      "Root element font size",
      "Viewport width",
      "Browser default only"
    ],
    "correct": 1,
    "explanation": "rem = root em, relative to the html element font-size."
  },
  {
    "id": "css-b-047",
    "question": "font-size: 1em is relative to:",
    "options": [
      "Viewport height",
      "Root element only",
      "User agent minimum",
      "Parent element font size"
    ],
    "correct": 3,
    "explanation": "em is relative to the parent computed font-size, which can compound when nested.",
    "demo": {
      "type": "css",
      "id": "css-b-047",
      "code": "font-size: 1.2em; color: #4338ca;",
      "preview": "1.2em relative size"
    }
  },
  {
    "id": "css-b-048",
    "question": "line-height: 1.5 without a unit:",
    "options": [
      "Exactly 1.5px",
      "150% of viewport",
      "Invalid — unit required",
      "1.5× the element font size"
    ],
    "correct": 3,
    "explanation": "Unitless line-height multiplies the element own font-size — preferred for inheritance."
  },
  {
    "id": "css-b-049",
    "question": "text-align: center aligns:",
    "options": [
      "Text vertically",
      "Flex items only",
      "Inline content horizontally within the block",
      "Block element in viewport"
    ],
    "correct": 2,
    "explanation": "text-align affects inline-level content inside a block container.",
    "demo": {
      "type": "css",
      "id": "css-b-049",
      "code": "text-align: center; width: 100%;",
      "preview": "Centered text"
    }
  },
  {
    "id": "css-b-050",
    "question": "text-decoration: underline adds:",
    "options": [
      "Bold weight",
      "A line beneath text",
      "Letter spacing",
      "Shadow below text"
    ],
    "correct": 1,
    "explanation": "text-decoration controls lines like underline, overline, line-through."
  },
  {
    "id": "css-b-051",
    "question": "letter-spacing: 2px does what?",
    "options": [
      "Adds space between characters",
      "Changes font size",
      "Sets word spacing",
      "Indents first line"
    ],
    "correct": 0,
    "explanation": "letter-spacing adjusts horizontal spacing between glyphs.",
    "demo": {
      "type": "css",
      "id": "css-b-051",
      "code": "letter-spacing: 4px; text-transform: uppercase;",
      "preview": "Spaced caps"
    }
  },
  {
    "id": "css-b-052",
    "question": "text-transform: uppercase converts:",
    "options": [
      "Text to lowercase only",
      "First letter only",
      "Numbers to Roman numerals",
      "Text to all capitals"
    ],
    "correct": 3,
    "explanation": "text-transform changes text casing without altering the source HTML."
  },
  {
    "id": "css-b-053",
    "question": "@font-face is used to:",
    "options": [
      "Import another stylesheet",
      "Style visited links",
      "Define CSS variables",
      "Load custom web fonts"
    ],
    "correct": 3,
    "explanation": "@font-face declares a font family name and source files for custom fonts."
  },
  {
    "id": "css-b-054",
    "question": "font shorthand can combine:",
    "options": [
      "Only size and family",
      "Border and padding",
      "Only weight and color",
      "style, variant, weight, size, line-height, and family"
    ],
    "correct": 3,
    "explanation": "font is shorthand: font: italic small-caps bold 16px/1.5 Georgia, serif;",
    "demo": {
      "type": "css",
      "id": "css-b-054",
      "code": "font-family: Georgia, serif; font-size: 18px; font-weight: bold; line-height: 1.6;",
      "preview": "Typography sample"
    }
  },
  {
    "id": "css-b-055",
    "question": "display: block makes an element:",
    "options": [
      "Start on a new line and take full available width by default",
      "Inline with text flow",
      "Invisible but occupying space",
      "A flex container"
    ],
    "correct": 0,
    "explanation": "Block elements stack vertically and expand to container width (unless constrained).",
    "demo": {
      "type": "css",
      "id": "css-b-055",
      "code": "display: block; width: 100%; background: #f1f5f9; padding: 8px; margin-bottom: 4px;",
      "preview": "Block element"
    }
  },
  {
    "id": "css-b-056",
    "question": "display: inline elements:",
    "options": [
      "Always fill parent width",
      "Create block formatting context",
      "Flow with text; width/height ignored",
      "Always break to new line"
    ],
    "correct": 2,
    "explanation": "Inline boxes participate in inline layout; vertical margin/width/height have limited effect."
  },
  {
    "id": "css-b-057",
    "question": "display: none removes an element:",
    "options": [
      "Only visually with space preserved",
      "But keeps its space",
      "From DOM entirely",
      "From layout and accessibility tree (not rendered)"
    ],
    "correct": 3,
    "explanation": "none removes the box from rendering; visibility: hidden keeps layout space."
  },
  {
    "id": "css-b-058",
    "question": "display: inline-block combines:",
    "options": [
      "Block stacking only",
      "Inline flow with block-like sizing control",
      "Table row behavior",
      "Flex and grid"
    ],
    "correct": 1,
    "explanation": "inline-block sits in text flow but accepts width, height, and vertical margins.",
    "demo": {
      "type": "css",
      "id": "css-b-058",
      "code": "display: inline-block; width: 80px; height: 40px; background: #fca5a5; text-align: center; line-height: 40px;",
      "preview": "Inline-block box"
    }
  },
  {
    "id": "css-b-059",
    "question": "visibility: hidden vs display: none:",
    "options": [
      "hidden removes from DOM",
      "none keeps space",
      "hidden keeps layout space; none removes the box",
      "They are identical"
    ],
    "correct": 2,
    "explanation": "visibility: hidden is invisible but still occupies space in layout."
  },
  {
    "id": "css-b-060",
    "question": "display: flex on a container:",
    "options": [
      "Hides overflow automatically",
      "Makes children inline only",
      "Converts children to table cells",
      "Creates a flex formatting context for children"
    ],
    "correct": 3,
    "explanation": "Flex containers lay out direct children as flex items along main/cross axes.",
    "demo": {
      "type": "css",
      "id": "css-b-060",
      "code": "display: flex; gap: 8px;",
      "preview": "Flex container"
    }
  },
  {
    "id": "css-b-061",
    "question": "display: grid on a container:",
    "options": [
      "Only works on table elements",
      "Creates a grid formatting context",
      "Disables margins",
      "Same as display: block"
    ],
    "correct": 1,
    "explanation": "Grid containers define rows and columns for direct children."
  },
  {
    "id": "css-b-062",
    "question": "Which display value preserves table structure?",
    "options": [
      "display: table / table-row / table-cell",
      "display: run-in",
      "display: flex",
      "display: contents always"
    ],
    "correct": 0,
    "explanation": "Table display values mimic HTML table layout behavior in CSS."
  },
  {
    "id": "css-b-063",
    "question": "::before and ::after create:",
    "options": [
      "Real DOM nodes visible in DevTools Elements",
      "Pseudo-elements generated by CSS",
      "JavaScript event listeners",
      "Only accessibility labels"
    ],
    "correct": 1,
    "explanation": "Pseudo-elements let CSS paint decorative content before or after an element without adding DOM nodes."
  },
  {
    "id": "css-b-064",
    "question": "A span with display: block will:",
    "options": [
      "Be removed from DOM",
      "Only accept text nodes",
      "Behave as a block-level box",
      "Stay strictly inline"
    ],
    "correct": 2,
    "explanation": "display changes formatting context regardless of HTML tag semantics."
  },
  {
    "id": "css-b-065",
    "question": "display: inline-flex creates:",
    "options": [
      "An inline table",
      "An inline-level flex container",
      "A block flex container",
      "A grid container"
    ],
    "correct": 1,
    "explanation": "inline-flex is a flex container that flows inline with surrounding content."
  },
  {
    "id": "css-b-066",
    "question": "Which hides content visually but keeps it for screen readers?",
    "options": [
      "sr-only / clip / visually-hidden patterns",
      "display: none",
      "visibility: hidden on parent only",
      "opacity: 0 always removes from AT"
    ],
    "correct": 0,
    "explanation": "Accessible hiding uses clipping/positioning — not display:none which removes from AT.",
    "demo": {
      "type": "css",
      "id": "css-b-066",
      "code": "display: inline-block; padding: 8px 16px; background: #2563eb; color: white; border-radius: 6px;",
      "preview": "Inline-block button"
    }
  },
  {
    "id": "css-b-067",
    "question": "margin: 10px 20px sets:",
    "options": [
      "10px all sides",
      "10px left/right only",
      "20px all sides",
      "10px top/bottom, 20px left/right"
    ],
    "correct": 3,
    "explanation": "Two-value margin shorthand: vertical | horizontal.",
    "demo": {
      "type": "css",
      "id": "css-b-067",
      "code": "margin: 10px 20px; background: #ddd6fe; padding: 8px;",
      "preview": "10px 20px margin"
    }
  },
  {
    "id": "css-b-068",
    "question": "padding: 0 resets:",
    "options": [
      "Line height",
      "All padding to zero",
      "All margins to zero",
      "Border width"
    ],
    "correct": 1,
    "explanation": "padding: 0 removes inner spacing on all four sides."
  },
  {
    "id": "css-b-069",
    "question": "margin: auto on a block with width set:",
    "options": [
      "Centers horizontally in available space",
      "Removes margin",
      "Centers vertically always",
      "Is invalid"
    ],
    "correct": 0,
    "explanation": "auto margins absorb extra space; left/right auto centers block elements horizontally.",
    "demo": {
      "type": "css",
      "id": "css-b-069",
      "code": "width: 120px; margin: 0 auto; background: #a7f3d0; padding: 8px; text-align: center;",
      "preview": "Auto-centered block"
    }
  },
  {
    "id": "css-b-070",
    "question": "Negative margins:",
    "options": [
      "Are invalid in CSS",
      "Can pull elements closer/overlap in some cases",
      "Only work on padding",
      "Only in flexbox"
    ],
    "correct": 1,
    "explanation": "Negative margins are valid and can overlap or pull elements beyond normal flow."
  },
  {
    "id": "css-b-071",
    "question": "padding affects:",
    "options": [
      "Inner space; increases visible background area",
      "Z-index stacking",
      "Outer space only",
      "Border color"
    ],
    "correct": 0,
    "explanation": "Padding expands the area where background paints, inside the border."
  },
  {
    "id": "css-b-072",
    "question": "margin collapse occurs between:",
    "options": [
      "Flex items always",
      "Adjacent block-level vertical margins",
      "All padding values",
      "Inline elements horizontally"
    ],
    "correct": 1,
    "explanation": "Vertical margins of block boxes collapse; horizontal margins do not."
  },
  {
    "id": "css-b-073",
    "question": "padding: 10px 15px 20px 25px order is:",
    "options": [
      "left, top, right, bottom",
      "horizontal then vertical",
      "top, right, bottom, left (clockwise)",
      "top, bottom, left, right"
    ],
    "correct": 2,
    "explanation": "Four-value shorthand follows TRBL clockwise from top.",
    "demo": {
      "type": "css",
      "id": "css-b-073",
      "code": "padding: 10px 15px 20px 25px; background: #fed7aa;",
      "preview": "TRBL padding"
    }
  },
  {
    "id": "css-b-074",
    "question": "margin-top on inline elements:",
    "options": [
      "Always works like block",
      "Doubles padding",
      "Collapses with padding",
      "Has no effect in standard inline layout"
    ],
    "correct": 3,
    "explanation": "Vertical margins on inline non-replaced elements generally do not apply."
  },
  {
    "id": "css-b-075",
    "question": "gap property applies to:",
    "options": [
      "Flex and grid containers",
      "Block elements only",
      "Inline text only",
      "Margin shorthand alias"
    ],
    "correct": 0,
    "explanation": "gap sets spacing between flex/grid items (and multi-column layouts)."
  },
  {
    "id": "css-b-076",
    "question": "padding percentage is calculated relative to:",
    "options": [
      "Parent height always",
      "Containing block width",
      "Element height",
      "Viewport height only"
    ],
    "correct": 1,
    "explanation": "Vertical and horizontal padding percentages both reference the containing block width."
  },
  {
    "id": "css-b-077",
    "question": "margin-inline: auto in LTR:",
    "options": [
      "Centers along inline axis (horizontally)",
      "Sets RTL direction",
      "Centers vertically",
      "Removes inline padding"
    ],
    "correct": 0,
    "explanation": "Logical margin properties follow writing direction; inline axis is horizontal in LTR."
  },
  {
    "id": "css-b-078",
    "question": "Which resets browser default body margin?",
    "options": [
      "margin: reset;",
      "html { display: none; }",
      "body { margin: 0; }",
      "body { padding: 0; } only"
    ],
    "correct": 2,
    "explanation": "Browsers often apply 8px margin to body; resetting margin: 0 is common in resets.",
    "demo": {
      "type": "css",
      "id": "css-b-078",
      "code": "margin: 16px; padding: 12px; background: #fef3c7; border: 1px dashed #d97706;",
      "preview": "Margin and padding"
    }
  },
  {
    "id": "css-b-079",
    "question": "px stands for:",
    "options": [
      "Points (pt)",
      "Physical printer pixels always",
      "Percentage of parent",
      "CSS pixels (reference pixel unit)"
    ],
    "correct": 3,
    "explanation": "px is an absolute CSS unit — one device-independent reference pixel.",
    "demo": {
      "type": "css",
      "id": "css-b-079",
      "code": "width: 200px; height: 40px; background: #bfdbfe;",
      "preview": "200px wide box"
    }
  },
  {
    "id": "css-b-080",
    "question": "% width on a block element is relative to:",
    "options": [
      "Content width only",
      "Viewport always",
      "Font size",
      "Parent containing block width"
    ],
    "correct": 3,
    "explanation": "Percentage widths resolve against the parent containing block width."
  },
  {
    "id": "css-b-081",
    "question": "1em equals:",
    "options": [
      "16px always",
      "Current element font size (or parent for font-size)",
      "Viewport width",
      "Root font size always"
    ],
    "correct": 1,
    "explanation": "For font-size, 1em = parent font-size; for other properties, 1em = element font-size."
  },
  {
    "id": "css-b-082",
    "question": "1rem always equals:",
    "options": [
      "Root (html) element font-size",
      "Parent font-size",
      "Viewport width fraction",
      "16px in every browser"
    ],
    "correct": 0,
    "explanation": "rem is always relative to the root element computed font-size.",
    "demo": {
      "type": "css",
      "id": "css-b-082",
      "code": "font-size: 1.5rem; color: #be123c;",
      "preview": "1.5rem text"
    }
  },
  {
    "id": "css-b-083",
    "question": "vw is:",
    "options": [
      "1% of viewport height",
      "1% of viewport width",
      "Width of parent",
      "Virtual width unit"
    ],
    "correct": 1,
    "explanation": "100vw spans the full viewport width regardless of parent."
  },
  {
    "id": "css-b-084",
    "question": "vh is:",
    "options": [
      "Variable height keyword",
      "1% of viewport width",
      "Half viewport",
      "1% of viewport height"
    ],
    "correct": 3,
    "explanation": "vh units scale with viewport height — useful for full-screen sections."
  },
  {
    "id": "css-b-085",
    "question": "object-fit: cover on an image:",
    "options": [
      "Distorts the image to exact dimensions",
      "Keeps aspect ratio and crops overflow to fill the box",
      "Only works on background images",
      "Turns the image into a flex item"
    ],
    "correct": 1,
    "explanation": "object-fit: cover is common for card thumbnails and avatars because it fills the frame without squashing.",
    "demo": {
      "type": "css",
      "id": "css-b-085",
      "code": "width: 160px; height: 96px; object-fit: cover; border-radius: 12px;",
      "preview": "Cropped media card"
    }
  },
  {
    "id": "css-b-086",
    "question": "Which unit is best for accessible scalable type tied to user preferences?",
    "options": [
      "rem",
      "px only",
      "cm",
      "vw exclusively"
    ],
    "correct": 0,
    "explanation": "rem scales with root font-size, which respects user browser font settings."
  },
  {
    "id": "css-b-087",
    "question": "calc(100% - 20px) allows:",
    "options": [
      "Only addition of same units",
      "Runtime JavaScript math",
      "Invalid in modern CSS",
      "Mixing units in computed values"
    ],
    "correct": 3,
    "explanation": "calc() evaluates expressions mixing %, px, rem, etc. at computed-value time.",
    "demo": {
      "type": "css",
      "id": "css-b-087",
      "code": "width: calc(100% - 24px); background: #cffafe; padding: 8px;",
      "preview": "calc width"
    }
  },
  {
    "id": "css-b-088",
    "question": "aspect-ratio: 16 / 9 helps with:",
    "options": [
      "Keeping media/cards proportional before content loads",
      "Changing font weight",
      "Disabling flexbox",
      "Increasing selector specificity"
    ],
    "correct": 0,
    "explanation": "aspect-ratio reserves proportional space, which is useful for responsive cards and reducing layout shift."
  },
  {
    "id": "css-b-089",
    "question": "pt units are primarily used for:",
    "options": [
      "Screen-responsive layouts",
      "Print stylesheets",
      "Grid tracks only",
      "Viewport sizing"
    ],
    "correct": 1,
    "explanation": "Points (pt) are traditional print units; px/rem dominate screen design."
  },
  {
    "id": "css-b-090",
    "question": "background-size: cover means:",
    "options": [
      "Repeat the image in both directions",
      "Scale the image to cover the box, possibly cropping",
      "Stretch only the width",
      "Disable background-position"
    ],
    "correct": 1,
    "explanation": "cover fills the background area while preserving aspect ratio, often cropping edges.",
    "demo": {
      "type": "css",
      "id": "css-b-090",
      "code": "background-size: cover; background-position: center; min-height: 120px;",
      "preview": "Hero image crop"
    }
  },
  {
    "id": "css-b-091",
    "question": ":hover applies when:",
    "options": [
      "Element is first child",
      "User points at an element",
      "Link was visited",
      "Element has focus from keyboard"
    ],
    "correct": 1,
    "explanation": ":hover matches when the pointing device is over the element.",
    "demo": {
      "type": "css",
      "id": "css-b-091",
      "code": "background: #fef3c7; padding: 8px 12px; cursor: pointer; border-radius: 4px;",
      "preview": "Hover target"
    }
  },
  {
    "id": "css-b-092",
    "question": ":focus styles should:",
    "options": [
      "Be visible for keyboard accessibility",
      "Replace :hover entirely",
      "Be removed for cleaner design",
      "Only apply on mouse click"
    ],
    "correct": 0,
    "explanation": "Focus indicators are essential for keyboard and assistive technology users."
  },
  {
    "id": "css-b-093",
    "question": ":first-child selects:",
    "options": [
      "First visible element",
      "First class on page",
      "Element that is first child of its parent",
      "First element in document"
    ],
    "correct": 2,
    "explanation": ":first-child matches only if no element-type siblings precede it."
  },
  {
    "id": "css-b-094",
    "question": ":last-child selects:",
    "options": [
      "Last flex item always",
      "Last element in HTML source globally",
      "Last visited link",
      "The final child of its parent"
    ],
    "correct": 3,
    "explanation": ":last-child matches an element with no following sibling elements.",
    "demo": {
      "type": "css",
      "id": "css-b-094",
      "code": "background: #e0e7ff; padding: 6px 10px;",
      "preview": "2nd child styling"
    }
  },
  {
    "id": "css-b-095",
    "question": ":nth-child(2n) selects:",
    "options": [
      "Only the second child",
      "Every even child (2nd, 4th, 6th…)",
      "Odd children only",
      "Every third child"
    ],
    "correct": 1,
    "explanation": "2n matches even-indexed children; 2n+1 matches odd."
  },
  {
    "id": "css-b-096",
    "question": ":not(.disabled) matches:",
    "options": [
      "Disabled form controls natively",
      "Nothing — invalid",
      "Elements without class disabled",
      "Only .disabled elements"
    ],
    "correct": 2,
    "explanation": ":not() excludes elements matching the argument selector."
  },
  {
    "id": "css-b-097",
    "question": "a:visited styles:",
    "options": [
      "Unvisited links",
      "Active clicks only",
      "All anchors regardless",
      "Previously visited links"
    ],
    "correct": 3,
    "explanation": ":visited applies limited styling to links the user has visited (privacy restrictions apply).",
    "demo": {
      "type": "css",
      "id": "css-b-097",
      "code": "color: #551a8b; text-decoration: underline;",
      "preview": "Visited link purple"
    }
  },
  {
    "id": "css-b-098",
    "question": ":active matches:",
    "options": [
      "Element being activated (e.g. mouse down)",
      "Currently focused only",
      "Animation running",
      "First page load"
    ],
    "correct": 0,
    "explanation": ":active is the moment between press and release on interactive elements."
  },
  {
    "id": "css-b-099",
    "question": ":disabled selects:",
    "options": [
      "Links without href",
      "Form controls with disabled attribute",
      "Elements with display: none",
      "Hidden overflow elements"
    ],
    "correct": 1,
    "explanation": ":disabled matches native form elements in a disabled state.",
    "demo": {
      "type": "css",
      "id": "css-b-099",
      "code": "opacity: 0.4; cursor: not-allowed; padding: 8px; background: #e5e7eb;",
      "preview": "Disabled appearance"
    }
  },
  {
    "id": "css-b-100",
    "question": ":checked applies to:",
    "options": [
      "Visited links",
      "Selected radio/checkbox inputs",
      "Open details elements only",
      "All input types"
    ],
    "correct": 1,
    "explanation": ":checked matches radio buttons and checkboxes in selected state.",
    "demo": {
      "type": "css",
      "id": "css-b-100",
      "code": "color: white; background: #059669; padding: 8px 16px; border-radius: 4px;",
      "preview": "Hover me in quiz UI"
    }
  }
];

const INTERMEDIATE = [
  {
    "id": "css-i-001",
    "question": "justify-content: center on a flex row aligns items:",
    "options": [
      "Along the main axis (horizontally in row)",
      "To the grid center",
      "To the start always",
      "Along the cross axis vertically"
    ],
    "correct": 0,
    "explanation": "justify-content distributes space along the main axis."
  },
  {
    "id": "css-i-002",
    "question": "align-items: center on flex container:",
    "options": [
      "Centers on main axis",
      "Centers text only",
      "Centers items on cross axis",
      "Requires flex-wrap"
    ],
    "correct": 2,
    "explanation": "align-items controls cross-axis alignment of flex items."
  },
  {
    "id": "css-i-003",
    "question": "flex-direction: column changes:",
    "options": [
      "Main axis to vertical",
      "Cross axis to horizontal only",
      "Display to grid",
      "Direction property of text"
    ],
    "correct": 0,
    "explanation": "column makes the main axis top-to-bottom; justify-content then controls vertical distribution."
  },
  {
    "id": "css-i-004",
    "question": "flex: 1 on an item is shorthand for:",
    "options": [
      "flex-grow: 0 only",
      "flex-grow: 1; flex-shrink: 1; flex-basis: 0%",
      "width: 100%",
      "flex-wrap: 1"
    ],
    "correct": 1,
    "explanation": "flex: 1 is common shorthand meaning grow to fill available space equally.",
    "demo": {
      "type": "css",
      "id": "css-i-004",
      "code": "flex: 1; background: #bfdbfe; padding: 10px; min-width: 0;",
      "preview": "flex: 1 item"
    }
  },
  {
    "id": "css-i-005",
    "question": "flex-wrap: wrap allows:",
    "options": [
      "Items to move to new lines when space runs out",
      "Grid auto-placement",
      "Items to shrink below min-content always",
      "Vertical text only"
    ],
    "correct": 0,
    "explanation": "wrap breaks flex items onto additional flex lines when needed."
  },
  {
    "id": "css-i-006",
    "question": "gap in flexbox sets:",
    "options": [
      "Outer margin on container",
      "Padding inside items",
      "Border spacing in tables",
      "Space between flex items"
    ],
    "correct": 3,
    "explanation": "gap replaces margin hacks for consistent spacing between flex items."
  },
  {
    "id": "css-i-007",
    "question": "align-self on a flex item:",
    "options": [
      "Changes flex-direction",
      "Sets container cross axis",
      "Overrides align-items for that item only",
      "Replaces justify-content"
    ],
    "correct": 2,
    "explanation": "align-self allows per-item cross-axis alignment override.",
    "demo": {
      "type": "css",
      "id": "css-i-007",
      "code": "align-self: flex-end; background: #fecdd3; padding: 8px;",
      "preview": "align-self end"
    }
  },
  {
    "id": "css-i-008",
    "question": "order property in flexbox:",
    "options": [
      "Changes tab order always",
      "Sorts alphabetically",
      "Changes visual order without DOM reorder",
      "Only works with grid"
    ],
    "correct": 2,
    "explanation": "order affects paint order among flex items; accessibility order stays in DOM."
  },
  {
    "id": "css-i-009",
    "question": "flex-shrink: 0 prevents:",
    "options": [
      "Item from shrinking below its flex basis",
      "Item from growing",
      "Gap application",
      "Wrapping"
    ],
    "correct": 0,
    "explanation": "flex-shrink: 0 keeps item from compressing when space is tight."
  },
  {
    "id": "css-i-010",
    "question": "justify-content: space-between:",
    "options": [
      "First item at start, last at end, equal space between",
      "All items centered",
      "Items stacked",
      "Equal space around all items"
    ],
    "correct": 0,
    "explanation": "space-between pushes edge items to container edges with equal gaps between.",
    "demo": {
      "type": "css",
      "id": "css-i-010",
      "code": "display: flex; justify-content: space-between; width: 100%; gap: 4px;",
      "preview": "space-between"
    }
  },
  {
    "id": "css-i-011",
    "question": "align-content applies when:",
    "options": [
      "Inline elements",
      "Multiple flex lines exist (wrapped)",
      "Single line only always",
      "Grid containers only"
    ],
    "correct": 1,
    "explanation": "align-content distributes extra cross-axis space among flex lines when wrapped."
  },
  {
    "id": "css-i-012",
    "question": "min-width: auto on flex items can cause:",
    "options": [
      "Overflow when content is wider than container",
      "Always shrink to fit",
      "Ignore flex-grow",
      "Remove min-content sizing"
    ],
    "correct": 0,
    "explanation": "Default min-width: auto prevents shrinking below content size — common overflow source."
  },
  {
    "id": "css-i-013",
    "question": "flex-basis: 200px sets:",
    "options": [
      "Final width always exactly 200px",
      "Cross axis size",
      "Minimum height",
      "Initial main size before free space distribution"
    ],
    "correct": 3,
    "explanation": "flex-basis is the starting size before grow/shrink calculations.",
    "demo": {
      "type": "css",
      "id": "css-i-013",
      "code": "flex-basis: 120px; flex-grow: 1; background: #d9f99d; padding: 8px;",
      "preview": "flex-basis 120px"
    }
  },
  {
    "id": "css-i-014",
    "question": "row-reverse flex-direction:",
    "options": [
      "Cross axis reversed only",
      "Items sorted by z-index",
      "Same as column",
      "Main axis reversed horizontally"
    ],
    "correct": 3,
    "explanation": "row-reverse flows items right-to-left along the main axis."
  },
  {
    "id": "css-i-015",
    "question": "A classic flex centering pattern is:",
    "options": [
      "display:flex; justify-content:center; align-items:center",
      "text-align: center on flex container",
      "position: fixed center",
      "margin: auto only on inline"
    ],
    "correct": 0,
    "explanation": "Flex centering on both axes is the modern standard for dead-center layouts.",
    "demo": {
      "type": "css",
      "id": "css-i-015",
      "code": "display: flex; justify-content: center; align-items: center; height: 80px; background: #ede9fe;",
      "preview": "Centered content"
    }
  },
  {
    "id": "css-i-016",
    "question": "display: grid with grid-template-columns: 1fr 1fr creates:",
    "options": [
      "Two fixed 1px columns",
      "Two equal fractional columns",
      "Two rows",
      "One column only"
    ],
    "correct": 1,
    "explanation": "fr units split available space proportionally.",
    "demo": {
      "type": "css",
      "id": "css-i-016",
      "code": "display: grid; grid-template-columns: 1fr 1fr; gap: 6px;",
      "preview": "Two equal columns"
    }
  },
  {
    "id": "css-i-017",
    "question": "grid-template-areas lets you:",
    "options": [
      "Import SVG areas",
      "Only set row heights",
      "Name and place regions via ASCII-like template",
      "Animate grid cells"
    ],
    "correct": 2,
    "explanation": "Named areas map layout sections to grid cells declaratively."
  },
  {
    "id": "css-i-018",
    "question": "grid-column: 1 / 3 spans:",
    "options": [
      "Columns 1 through 2 (lines 1 to 3)",
      "Invalid range",
      "Three full rows",
      "Only column 3"
    ],
    "correct": 0,
    "explanation": "Grid lines are numbered; 1 / 3 spans from line 1 to line 3 (two tracks)."
  },
  {
    "id": "css-i-019",
    "question": "gap: 16px in grid:",
    "options": [
      "Only column gap",
      "Sets row and column gutters to 16px",
      "Padding on cells",
      "Margin on grid container"
    ],
    "correct": 1,
    "explanation": "gap shorthand sets both row-gap and column-gap in grid.",
    "demo": {
      "type": "css",
      "id": "css-i-019",
      "code": "display: grid; gap: 16px; background: #f5f3ff; padding: 8px;",
      "preview": "16px grid gap"
    }
  },
  {
    "id": "css-i-020",
    "question": "repeat(3, 1fr) expands to:",
    "options": [
      "Three 3fr tracks",
      "1fr 1fr 1fr",
      "3fr only",
      "1fr 3 times with gap"
    ],
    "correct": 1,
    "explanation": "repeat() reduces boilerplate for repetitive track definitions."
  },
  {
    "id": "css-i-021",
    "question": "minmax(200px, 1fr) means:",
    "options": [
      "Track at least 200px, grows to share free space",
      "Maximum 200px only",
      "Invalid in columns",
      "Exactly 200px always"
    ],
    "correct": 0,
    "explanation": "minmax sets flexible tracks with a floor and ceiling behavior."
  },
  {
    "id": "css-i-022",
    "question": "grid-auto-flow: column fills:",
    "options": [
      "Row by row (default)",
      "Diagonally only",
      "Random cells",
      "New items column by column"
    ],
    "correct": 3,
    "explanation": "column auto-placement adds items down columns before moving to next column.",
    "demo": {
      "type": "css",
      "id": "css-i-022",
      "code": "display: grid; grid-auto-flow: column; grid-auto-columns: 60px; gap: 4px;",
      "preview": "Column auto-flow"
    }
  },
  {
    "id": "css-i-023",
    "question": "justify-items aligns:",
    "options": [
      "Flex items only",
      "Whole grid in viewport",
      "Grid items inside their cells on inline axis",
      "Text in paragraphs"
    ],
    "correct": 2,
    "explanation": "justify-items sets default inline-axis alignment within grid areas."
  },
  {
    "id": "css-i-024",
    "question": "align-items on grid container sets:",
    "options": [
      "Main flex axis",
      "Default block-axis alignment of items in cells",
      "Grid template rows only",
      "Container width"
    ],
    "correct": 1,
    "explanation": "align-items in grid maps to block-axis positioning within cells."
  },
  {
    "id": "css-i-025",
    "question": "grid-template-rows: auto 1fr auto is useful for:",
    "options": [
      "Sticky header/footer with flexible middle (holy grail)",
      "Inline grid",
      "Three equal columns",
      "Print layouts only"
    ],
    "correct": 0,
    "explanation": "Classic app shell: fixed header/footer, scrollable content area.",
    "demo": {
      "type": "css",
      "id": "css-i-025",
      "code": "display: grid; grid-template-rows: auto 1fr auto; min-height: 80px; gap: 4px;",
      "preview": "Header/content/footer grid"
    }
  },
  {
    "id": "css-i-026",
    "question": "place-items is shorthand for:",
    "options": [
      "gap and padding",
      "align-items and justify-items",
      "flex and grid",
      "grid-row and grid-column"
    ],
    "correct": 1,
    "explanation": "place-items: center centers on both axes within each cell."
  },
  {
    "id": "css-i-027",
    "question": "dense keyword in grid-auto-flow:",
    "options": [
      "Forces square cells",
      "Removes all gaps",
      "Disables wrapping",
      "Fills earlier gaps when auto-placing"
    ],
    "correct": 3,
    "explanation": "dense backfills holes left by spanning items during auto-placement."
  },
  {
    "id": "css-i-028",
    "question": "grid-column: span 2 makes an item:",
    "options": [
      "Twice as tall only",
      "Start at column 2",
      "Cover two row tracks",
      "Cover two column tracks"
    ],
    "correct": 3,
    "explanation": "span N covers N adjacent tracks from the placement start.",
    "demo": {
      "type": "css",
      "id": "css-i-028",
      "code": "grid-column: span 2; background: #fde68a; padding: 8px;",
      "preview": "Span 2 columns"
    }
  },
  {
    "id": "css-i-029",
    "question": "auto-fit vs auto-fill in repeat():",
    "options": [
      "auto-fill removes tracks",
      "They are identical",
      "auto-fit only in flexbox",
      "auto-fit collapses empty tracks; auto-fill keeps them"
    ],
    "correct": 3,
    "explanation": "auto-fit expands remaining tracks when columns are empty; auto-fill preserves track structure."
  },
  {
    "id": "css-i-030",
    "question": "fr units require:",
    "options": [
      "JavaScript grid library",
      "display: flex parent",
      "Defined available space in grid container",
      "Fixed pixel widths only"
    ],
    "correct": 2,
    "explanation": "fr distributes leftover space after fixed/minmax tracks resolve.",
    "demo": {
      "type": "css",
      "id": "css-i-030",
      "code": "display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 8px; background: #ecfdf5;",
      "preview": "Three-column grid cell"
    }
  },
  {
    "id": "css-i-031",
    "question": "position: relative with top: 10px:",
    "options": [
      "Creates stacking context always",
      "Offsets from normal position without removing from flow",
      "Removes from document flow",
      "Fixes to viewport"
    ],
    "correct": 1,
    "explanation": "relative offsets visually but the original space is preserved in layout.",
    "demo": {
      "type": "css",
      "id": "css-i-031",
      "code": "position: relative; background: #bae6fd; padding: 12px;",
      "preview": "position relative"
    }
  },
  {
    "id": "css-i-032",
    "question": "position: absolute removes element from flow and positions relative to:",
    "options": [
      "Nearest positioned ancestor (non-static)",
      "Viewport always",
      "Body only",
      "Parent regardless of position"
    ],
    "correct": 0,
    "explanation": "Absolute positioning references the containing block of the nearest non-static ancestor."
  },
  {
    "id": "css-i-033",
    "question": "position: fixed anchors to:",
    "options": [
      "Parent element always",
      "Viewport (except transform ancestors)",
      "Initial containing block only in print",
      "Grid cell"
    ],
    "correct": 1,
    "explanation": "fixed stays relative to viewport during scroll unless a transform/filter ancestor creates a new containing block.",
    "demo": {
      "type": "css",
      "id": "css-i-033",
      "code": "position: fixed; bottom: 8px; right: 8px; background: #1e293b; color: white; padding: 6px 10px; font-size: 12px; border-radius: 4px;",
      "preview": "Fixed badge"
    }
  },
  {
    "id": "css-i-034",
    "question": "position: sticky needs:",
    "options": [
      "A threshold (top/left/etc.) and scrollable ancestor",
      "JavaScript scroll listener",
      "Only z-index",
      "display: flex parent"
    ],
    "correct": 0,
    "explanation": "sticky toggles between relative and fixed when crossing the offset threshold within its scroll container."
  },
  {
    "id": "css-i-035",
    "question": "z-index only applies to:",
    "options": [
      "Text nodes",
      "Positioned elements and flex/grid items with stacking contexts",
      "All elements always",
      "Static blocks only"
    ],
    "correct": 1,
    "explanation": "z-index affects stacking order within the same stacking context.",
    "demo": {
      "type": "css",
      "id": "css-i-035",
      "code": "position: relative; z-index: 2; background: #f472b6; padding: 8px;",
      "preview": "z-index layer"
    }
  },
  {
    "id": "css-i-036",
    "question": "inset: 0 on absolute element:",
    "options": [
      "Equivalent to top/right/bottom/left: 0",
      "Sets opacity to 0",
      "Invalid shorthand",
      "Only sets width"
    ],
    "correct": 0,
    "explanation": "inset shorthand sets all four offset properties — useful for full-bleed overlays."
  },
  {
    "id": "css-i-037",
    "question": "A new stacking context is created by:",
    "options": [
      "margin: auto",
      "font-weight: bold",
      "display: block only",
      "opacity < 1, transform, filter, isolation: isolate, etc."
    ],
    "correct": 3,
    "explanation": "Many properties create stacking contexts, isolating z-index comparisons."
  },
  {
    "id": "css-i-038",
    "question": "top: 50%; left: 50%; transform: translate(-50%,-50%) centers:",
    "options": [
      "Static inline text only",
      "Grid tracks",
      "Absolutely positioned elements",
      "Table cells"
    ],
    "correct": 2,
    "explanation": "Classic 50%/translate trick centers without knowing dimensions.",
    "demo": {
      "type": "css",
      "id": "css-i-038",
      "code": "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #c4b5fd; padding: 10px;",
      "preview": "Perfect center"
    }
  },
  {
    "id": "css-i-039",
    "question": "position: static (default):",
    "options": [
      "Always relative",
      "Fixed to viewport",
      "Removes element",
      "Normal document flow; top/left/z-index ignored"
    ],
    "correct": 3,
    "explanation": "static is default — offset and z-index have no effect."
  },
  {
    "id": "css-i-040",
    "question": "Containing block for fixed element may change when ancestor has:",
    "options": [
      "font-size change",
      "margin: 0",
      "color: red",
      "transform, filter, or perspective"
    ],
    "correct": 3,
    "explanation": "Transformed ancestors become containing blocks for fixed descendants in modern browsers."
  },
  {
    "id": "css-i-041",
    "question": "clip-path vs overflow: hidden:",
    "options": [
      "Identical behavior",
      "clip-path can use arbitrary shapes; overflow hidden is rectangular",
      "clip-path affects layout size",
      "overflow hidden supports polygons"
    ],
    "correct": 1,
    "explanation": "clip-path clips to paths/circles/etc. without requiring overflow hidden."
  },
  {
    "id": "css-i-042",
    "question": "Overlapping positioned elements paint order by default:",
    "options": [
      "Later in DOM on top (same z-index)",
      "Random",
      "Always lowest z-index on top",
      "By element type"
    ],
    "correct": 0,
    "explanation": "Without z-index, later siblings paint over earlier ones in the same stacking context.",
    "demo": {
      "type": "css",
      "id": "css-i-042",
      "code": "position: relative; top: 8px; left: 12px; background: #fecaca; padding: 8px;",
      "preview": "Relative offset box"
    }
  },
  {
    "id": "css-i-043",
    "question": "transition: background 0.3s ease applies to:",
    "options": [
      "Layout reflow",
      "Only transform",
      "Background property changes over 0.3s",
      "All properties always"
    ],
    "correct": 2,
    "explanation": "Transition lists specify which properties animate and timing.",
    "demo": {
      "type": "css",
      "id": "css-i-043",
      "code": "transition: background 0.3s ease; background: #86efac; padding: 10px; border-radius: 4px;",
      "preview": "Transition ready"
    }
  },
  {
    "id": "css-i-044",
    "question": "transition-property: all is:",
    "options": [
      "Convenient but can hurt performance if overused",
      "Always best practice",
      "Invalid syntax",
      "Print-only"
    ],
    "correct": 0,
    "explanation": "all transitions every property change — prefer explicit properties for performance."
  },
  {
    "id": "css-i-045",
    "question": "transition-delay: 0.2s:",
    "options": [
      "Delays hover only in Firefox",
      "Waits 0.2s before starting transition",
      "Slows duration to 0.2s",
      "Repeats every 0.2s"
    ],
    "correct": 1,
    "explanation": "delay offsets the start time after a property change triggers."
  },
  {
    "id": "css-i-046",
    "question": "Which properties animate cheaply on GPU?",
    "options": [
      "top and left preferred",
      "margin and padding best",
      "transform and opacity",
      "width and height always"
    ],
    "correct": 2,
    "explanation": "transform/opacity avoid layout; animating width/top triggers expensive reflow.",
    "demo": {
      "type": "css",
      "id": "css-i-046",
      "code": "transform: translateX(20px); opacity: 0.9;",
      "preview": "GPU-friendly props"
    }
  },
  {
    "id": "css-i-047",
    "question": "transition-timing-function: cubic-bezier() defines:",
    "options": [
      "Color interpolation",
      "Delay pattern",
      "Keyframe steps",
      "Acceleration curve of the transition"
    ],
    "correct": 3,
    "explanation": "Timing functions control how intermediate values accelerate/decelerate."
  },
  {
    "id": "css-i-048",
    "question": "Transitions trigger on:",
    "options": [
      "Computed value changes (e.g. :hover state)",
      "DOM insertion only",
      "Initial page load always",
      "JavaScript errors"
    ],
    "correct": 0,
    "explanation": "A change from one computed value to another starts a transition if configured."
  },
  {
    "id": "css-i-049",
    "question": "will-change: transform hints:",
    "options": [
      "Replaces @keyframes",
      "Browser may optimize for upcoming transform changes",
      "Immediate GPU layer always required",
      "Disables transitions"
    ],
    "correct": 1,
    "explanation": "will-change is an optimization hint — use sparingly on elements about to animate.",
    "demo": {
      "type": "css",
      "id": "css-i-049",
      "code": "will-change: transform; transform: scale(1); padding: 8px; background: #e9d5ff;",
      "preview": "will-change hint"
    }
  },
  {
    "id": "css-i-050",
    "question": "transition: none disables:",
    "options": [
      "All animations globally",
      "Hover states",
      "Transitions on that element",
      "JavaScript events"
    ],
    "correct": 2,
    "explanation": "none explicitly prevents transition effects on the element."
  },
  {
    "id": "css-i-051",
    "question": "Steps timing function like steps(4, end):",
    "options": [
      "Four second duration",
      "Four repeating keyframes",
      "Invalid in CSS",
      "Discrete jumps instead of smooth interpolation"
    ],
    "correct": 3,
    "explanation": "steps() creates frame-by-frame motion — common for sprite animations."
  },
  {
    "id": "css-i-052",
    "question": "Multiple transitions in one declaration:",
    "options": [
      "Uses comma in animation-name only",
      "transition: opacity 0.3s, transform 0.5s;",
      "Only one property allowed",
      "Requires @keyframes"
    ],
    "correct": 1,
    "explanation": "Comma-separated transition lists animate different properties with different timings.",
    "demo": {
      "type": "css",
      "id": "css-i-052",
      "code": "background: #3b82f6; transition: background 0.4s ease; padding: 10px; border-radius: 6px;",
      "preview": "Transition on hover in quiz"
    }
  },
  {
    "id": "css-i-053",
    "question": "@media (max-width: 768px) applies styles when:",
    "options": [
      "Viewport width is 768px or less",
      "Viewport is exactly 768px",
      "Device is mobile only",
      "Screen height under 768px"
    ],
    "correct": 0,
    "explanation": "max-width is inclusive — styles apply at 768px and below.",
    "demo": {
      "type": "css",
      "id": "css-i-053",
      "code": "font-size: clamp(14px, 2vw, 18px); padding: 8px; background: #fef9c3;",
      "preview": "Responsive font clamp"
    }
  },
  {
    "id": "css-i-054",
    "question": "Mobile-first responsive design typically uses:",
    "options": [
      "max-width only",
      "No media queries",
      "Fixed px layouts",
      "min-width media queries adding complexity upward"
    ],
    "correct": 3,
    "explanation": "Start with base mobile styles; add min-width breakpoints for larger screens."
  },
  {
    "id": "css-i-055",
    "question": "@media (prefers-color-scheme: dark) targets:",
    "options": [
      "Users with dark mode OS/browser preference",
      "OLED screens only",
      "Print stylesheet",
      "Night time automatically"
    ],
    "correct": 0,
    "explanation": "prefers-color-scheme respects user theme preference for automatic dark/light themes."
  },
  {
    "id": "css-i-056",
    "question": "orientation: landscape in media query matches:",
    "options": [
      "Device rotated 90° hardware only",
      "Viewport wider than tall",
      "Wide images only",
      "Horizontal text direction"
    ],
    "correct": 1,
    "explanation": "orientation compares viewport width vs height.",
    "demo": {
      "type": "css",
      "id": "css-i-056",
      "code": "writing-mode: horizontal-tb; padding: 10px; background: #d1fae5;",
      "preview": "Landscape layout"
    }
  },
  {
    "id": "css-i-057",
    "question": "Media query logical operators: and combines:",
    "options": [
      "Multiple conditions that must all match",
      "Alternative exclusive conditions",
      "Print and screen only",
      "Invalid syntax"
    ],
    "correct": 0,
    "explanation": "and requires every condition in the query to be true."
  },
  {
    "id": "css-i-058",
    "question": "print media type styles apply:",
    "options": [
      "Only PDF generators",
      "When printing or print preview",
      "Never in browsers",
      "On all screens"
    ],
    "correct": 1,
    "explanation": "@media print { } optimizes layout for printed output."
  },
  {
    "id": "css-i-059",
    "question": "prefers-reduced-motion: reduce should:",
    "options": [
      "Minimize or disable non-essential motion",
      "Disable scrolling",
      "Remove all CSS",
      "Force animations faster"
    ],
    "correct": 0,
    "explanation": "Respect reduced motion for vestibular accessibility — replace motion with fades or static states.",
    "demo": {
      "type": "css",
      "id": "css-i-059",
      "code": "transition: none; animation: none;",
      "preview": "Reduced motion fallback"
    }
  },
  {
    "id": "css-i-060",
    "question": "Resolution media feature like (min-resolution: 2dppx) targets:",
    "options": [
      "Screen width only",
      "High-DPI / retina displays",
      "Refresh rate",
      "Color depth only"
    ],
    "correct": 1,
    "explanation": "dppx (dots per px) helps serve sharper assets on high-density screens."
  },
  {
    "id": "css-i-061",
    "question": "Linking CSS with media attribute on <link>:",
    "options": [
      "<link rel=\"stylesheet\" media=\"(min-width: 900px)\">",
      "Invalid HTML",
      "Only inline styles",
      "Replaces @media entirely"
    ],
    "correct": 0,
    "explanation": "HTML media attribute can prevent downloading unused breakpoint CSS."
  },
  {
    "id": "css-i-062",
    "question": "hover media feature (hover: hover) detects:",
    "options": [
      "Scroll capability",
      "Keyboard presence",
      "Primary input can hover (fine pointer)",
      "Any touch device"
    ],
    "correct": 2,
    "explanation": "hover: none on touch-first devices helps avoid sticky hover states.",
    "demo": {
      "type": "css",
      "id": "css-i-062",
      "code": "@media (max-width: 600px) { font-size: 14px; padding: 8px; } font-size: 16px; padding: 12px; background: #f0fdf4;",
      "preview": "Responsive padding demo"
    }
  },
  {
    "id": "css-i-063",
    "question": "Specificity order (low to high) is roughly:",
    "options": [
      "Inline < Type < Class",
      "ID < Class < Type",
      "All equal",
      "Type < Class/Attribute/Pseudo-class < ID < Inline"
    ],
    "correct": 3,
    "explanation": "Inline styles beat IDs, IDs beat classes, classes beat type selectors.",
    "demo": {
      "type": "css",
      "id": "css-i-063",
      "code": "color: #2563eb; font-weight: 600;",
      "preview": "Cascade winner"
    }
  },
  {
    "id": "css-i-064",
    "question": "Specificity of .nav .link is:",
    "options": [
      "0, 0, 2",
      "0, 2, 0 (two classes)",
      "0, 1, 1",
      "2, 0, 0"
    ],
    "correct": 1,
    "explanation": "Each class, attribute, and pseudo-class adds 10 in the middle column (0,a,b,c model)."
  },
  {
    "id": "css-i-065",
    "question": "Specificity of #header nav a is:",
    "options": [
      "1, 0, 2 (one ID, two type selectors)",
      "1, 0, 0 only",
      "0, 1, 1",
      "0, 2, 1"
    ],
    "correct": 0,
    "explanation": "One ID (#header), zero classes, and two type selectors (nav, a) gives specificity 1,0,2."
  },
  {
    "id": "css-i-066",
    "question": "!important:",
    "options": [
      "Always beats inline styles from author",
      "Overrides user !important",
      "Fixes specificity to zero",
      "Increases declaration weight within its cascade origin/layer"
    ],
    "correct": 3,
    "explanation": "!important flags the declaration — still subject to origin and layer ordering.",
    "demo": {
      "type": "css",
      "id": "css-i-066",
      "code": "color: #16a34a !important;",
      "preview": "!important green"
    }
  },
  {
    "id": "css-i-067",
    "question": "Two rules same specificity — winner is:",
    "options": [
      "The one appearing last in the stylesheet",
      "Always the external sheet",
      "Random",
      "The shorter selector"
    ],
    "correct": 0,
    "explanation": "Source order breaks ties when specificity and origin are equal."
  },
  {
    "id": "css-i-068",
    "question": ":where(.btn) specificity contribution is:",
    "options": [
      "Same as .btn",
      "Invalid pseudo-class",
      "Higher than #id",
      "Zero — :where() does not add specificity"
    ],
    "correct": 3,
    "explanation": ":where() allows styling without increasing specificity — useful in design systems."
  },
  {
    "id": "css-i-069",
    "question": ":is(.a, .b) #id specificity is:",
    "options": [
      "That of the most specific argument (#id)",
      "Sum of all arguments",
      "Always zero",
      "Lowest argument only"
    ],
    "correct": 0,
    "explanation": ":is() takes the specificity of its most specific selector argument."
  },
  {
    "id": "css-i-070",
    "question": "Inline style attribute specificity:",
    "options": [
      "Beats author stylesheet IDs (unless !important)",
      "Equals one class",
      "Ignored by browser",
      "Lowest of all"
    ],
    "correct": 0,
    "explanation": "style=\"\" on element is author origin with high specificity (1,0,0,0 in 4-tuple).",
    "demo": {
      "type": "css",
      "id": "css-i-070",
      "code": "color: #9333ea; font-style: italic;",
      "preview": "Inline-level specificity"
    }
  },
  {
    "id": "css-i-071",
    "question": "Universal selector * specificity is:",
    "options": [
      "1, 0, 0",
      "0, 0, 0",
      "0, 0, 1",
      "0, 1, 0"
    ],
    "correct": 1,
    "explanation": "* and combinators do not increase specificity; only the subject and its compounds count."
  },
  {
    "id": "css-i-072",
    "question": "Inherited properties like color:",
    "options": [
      "Child gets parent computed value unless overridden",
      "Always use initial value",
      "Ignore cascade",
      "Require !important"
    ],
    "correct": 0,
    "explanation": "Inheritance passes certain properties down the tree; others default to initial."
  },
  {
    "id": "css-i-073",
    "question": "all: unset on an element:",
    "options": [
      "Same as all: initial always",
      "Deletes all classes",
      "Removes element from DOM",
      "Resets inherited props to inherit; others to initial"
    ],
    "correct": 3,
    "explanation": "unset behaves as inherit for inherited properties, initial for others."
  },
  {
    "id": "css-i-074",
    "question": "Style from user agent stylesheet has:",
    "options": [
      "No effect",
      "Same as !important author",
      "Lower origin priority than author styles (normally)",
      "Highest priority always"
    ],
    "correct": 2,
    "explanation": "Cascade origins: user !important > author !important > author > user > UA (simplified).",
    "demo": {
      "type": "css",
      "id": "css-i-074",
      "code": "color: #dc2626; font-weight: bold;",
      "preview": "Specificity wins visually"
    }
  },
  {
    "id": "css-i-075",
    "question": "Which property is inherited by default?",
    "options": [
      "color",
      "border",
      "margin",
      "padding"
    ],
    "correct": 0,
    "explanation": "Text-related properties like color, font-family, line-height inherit; box properties generally do not.",
    "demo": {
      "type": "css",
      "id": "css-i-075",
      "code": "color: #0369a1; padding: 8px;",
      "preview": "Inherited blue text"
    }
  },
  {
    "id": "css-i-076",
    "question": "inherit keyword on border-color:",
    "options": [
      "Invalid for borders",
      "Uses parent border-color computed value",
      "Resets to initial black",
      "Removes border"
    ],
    "correct": 1,
    "explanation": "inherit explicitly pulls the parent computed value for any property."
  },
  {
    "id": "css-i-077",
    "question": "initial keyword sets:",
    "options": [
      "Property to its spec default initial value",
      "Parent value",
      "Browser quirky mode value",
      "Previous cascade layer"
    ],
    "correct": 0,
    "explanation": "initial resets to the CSS spec default, not necessarily browser default stylesheet value."
  },
  {
    "id": "css-i-078",
    "question": "revert keyword:",
    "options": [
      "Rolls back to user-agent or user style if any",
      "Removes property from DOM",
      "Same as unset always",
      "JavaScript only"
    ],
    "correct": 0,
    "explanation": "revert goes to the previous cascade origin — often UA styles for many properties.",
    "demo": {
      "type": "css",
      "id": "css-i-078",
      "code": "margin: initial; padding: 8px; background: #ffedd5;",
      "preview": "initial margin reset"
    }
  },
  {
    "id": "css-i-079",
    "question": "Font properties mostly:",
    "options": [
      "Never inherit",
      "Require rem units",
      "Only inherit in print",
      "Inherit to children"
    ],
    "correct": 3,
    "explanation": "font-family, font-size, font-weight, etc. inherit so text styling cascades naturally."
  },
  {
    "id": "css-i-080",
    "question": "Box model properties (margin, padding, width):",
    "options": [
      "Inherit only in flex",
      "Always inherit",
      "Inherit from body only",
      "Do not inherit by default"
    ],
    "correct": 3,
    "explanation": "Layout box properties start at initial values on each element unless explicitly set."
  },
  {
    "id": "css-i-081",
    "question": "inherit on ::placeholder pseudo:",
    "options": [
      "Invalid pseudo-element",
      "Forces transparent",
      "Only in Firefox",
      "Can inherit input color for consistent placeholder styling"
    ],
    "correct": 3,
    "explanation": "Placeholders do not inherit all properties by default — explicit inherit helps consistency.",
    "demo": {
      "type": "css",
      "id": "css-i-081",
      "code": "color: inherit; font-size: 0.9em; opacity: 0.8;",
      "preview": "Inherited placeholder tone"
    }
  },
  {
    "id": "css-i-082",
    "question": "CSS reset vs normalize affects:",
    "options": [
      "Initial/inherited baseline styles across browsers",
      "Server caching",
      "JavaScript bundling",
      "HTML semantics"
    ],
    "correct": 0,
    "explanation": "Resets/normalize harmonize UA differences so inheritance starts from a predictable base."
  },
  {
    "id": "css-i-083",
    "question": "li { color: blue } — nested span without color:",
    "options": [
      "Invalid nesting",
      "Span has no color",
      "Span text is blue (inherited)",
      "Span is black always"
    ],
    "correct": 2,
    "explanation": "Children inherit color unless they set their own."
  },
  {
    "id": "css-i-084",
    "question": "all: revert-layer (when layers used):",
    "options": [
      "Same as display:none",
      "Unsupported everywhere",
      "Reverts to previous cascade layer value",
      "Deletes @layer"
    ],
    "correct": 2,
    "explanation": "revert-layer rolls back to the winning declaration from an earlier @layer.",
    "demo": {
      "type": "css",
      "id": "css-i-084",
      "code": "color: #7c3aed; font-family: inherit;",
      "preview": "Inherited purple text"
    }
  },
  {
    "id": "css-i-085",
    "question": "Custom property declaration syntax is:",
    "options": [
      "$primary: #2563eb;",
      "var-primary: blue;",
      "@primary: #2563eb;",
      "--primary: #2563eb;"
    ],
    "correct": 3,
    "explanation": "Custom properties must start with -- and are declared like normal properties.",
    "demo": {
      "type": "css",
      "id": "css-i-085",
      "code": "--primary: #2563eb; color: var(--primary); padding: 8px;",
      "preview": "Custom property blue"
    }
  },
  {
    "id": "css-i-086",
    "question": "Using a custom property:",
    "options": [
      "color: var(--primary);",
      "color: $primary;",
      "color: --primary;",
      "color: primary();"
    ],
    "correct": 0,
    "explanation": "var() reads custom property values at computed-value time."
  },
  {
    "id": "css-i-087",
    "question": "var(--size, 16px) second argument is:",
    "options": [
      "Animation duration",
      "Fallback if property is invalid or missing",
      "Maximum value",
      "Unit conversion"
    ],
    "correct": 1,
    "explanation": "Fallback values protect against undefined or invalid custom properties."
  },
  {
    "id": "css-i-088",
    "question": "Custom properties inherit by default:",
    "options": [
      "Yes — defined on :root cascade to descendants",
      "No — never inherit",
      "Only in shadow DOM",
      "Only with !important"
    ],
    "correct": 0,
    "explanation": "Unlike many preprocessor variables, CSS custom properties inherit and participate in cascade.",
    "demo": {
      "type": "css",
      "id": "css-i-088",
      "code": "--spacing: 16px; padding: var(--spacing); background: #ecfdf5;",
      "preview": "Inherited --spacing"
    }
  },
  {
    "id": "css-i-089",
    "question": ":root { --gap: 8px; } defines:",
    "options": [
      "Shadow root only",
      "Global defaults on document root",
      "Root folder path",
      "HTML tag only in XML"
    ],
    "correct": 1,
    "explanation": ":root (html in HTML docs) is the conventional place for design tokens."
  },
  {
    "id": "css-i-090",
    "question": "Custom properties can be changed via:",
    "options": [
      "HTML attributes only",
      "Cannot change at runtime",
      "JavaScript element.style.setProperty(\"--x\", val)",
      "Only Sass at compile time"
    ],
    "correct": 2,
    "explanation": "Custom properties are live — JS and media queries can update them dynamically."
  },
  {
    "id": "css-i-091",
    "question": "@property --angle { syntax: \"<angle>\"; inherits: false; initial-value: 0deg; } enables:",
    "options": [
      "Grid subgrid",
      "Registered custom properties with type checking and animation",
      "SASS compilation",
      "HTML validation"
    ],
    "correct": 1,
    "explanation": "@property registers variables for interpolation and typed computed values.",
    "demo": {
      "type": "css",
      "id": "css-i-091",
      "code": "--angle: 45deg; transform: rotate(var(--angle)); padding: 10px; background: #fce7f3; display: inline-block;",
      "preview": "Registered angle var"
    }
  },
  {
    "id": "css-i-092",
    "question": "Theming with data-theme=\"dark\":",
    "options": [
      "Only inline styles",
      "Requires separate CSS file only",
      "Cannot use variables",
      "[data-theme=\"dark\"] { --bg: #111; }"
    ],
    "correct": 3,
    "explanation": "Attribute selectors swap token values for runtime theme switching."
  },
  {
    "id": "css-i-093",
    "question": "var() cannot be used:",
    "options": [
      "Inside calc()",
      "With fallbacks",
      "In property names or selectors",
      "As property values"
    ],
    "correct": 2,
    "explanation": "var() works in values (and some value contexts) but not in selector or property name positions."
  },
  {
    "id": "css-i-094",
    "question": "calc(var(--base) * 2) is:",
    "options": [
      "SASS only",
      "Requires px on --base name",
      "Valid — calc works with custom properties",
      "Invalid syntax"
    ],
    "correct": 2,
    "explanation": "Custom properties substitute as tokens; calc() evaluates after substitution.",
    "demo": {
      "type": "css",
      "id": "css-i-094",
      "code": "width: calc(var(--base, 100px) * 2); background: #dbeafe; padding: 8px;",
      "preview": "calc with var"
    }
  },
  {
    "id": "css-i-095",
    "question": "Component-scoped tokens pattern:",
    "options": [
      "Requires CSS modules only",
      ".card { --card-padding: 1rem; padding: var(--card-padding); }",
      "Global variables only",
      "No scoping possible"
    ],
    "correct": 1,
    "explanation": "Define variables on component selectors for localized overrides via inheritance."
  },
  {
    "id": "css-i-096",
    "question": "Invalid custom property makes var() use:",
    "options": [
      "Fallback if provided; otherwise invalid at computed value",
      "Browser default blue",
      "Initial always",
      "Inherited from UA"
    ],
    "correct": 0,
    "explanation": "If --x is invalid at computed value, var(--x, fallback) uses fallback."
  },
  {
    "id": "css-i-097",
    "question": "Space in custom property value like --gradient: red blue:",
    "options": [
      "Syntax error",
      "Requires quotes always",
      "Only one color allowed",
      "Stored as literal token sequence — valid for backgrounds"
    ],
    "correct": 3,
    "explanation": "Custom property values are arbitrary token sequences until used/validated in context.",
    "demo": {
      "type": "css",
      "id": "css-i-097",
      "code": "--gradient: linear-gradient(90deg, #f00, #00f); background: var(--gradient); padding: 12px; color: white;",
      "preview": "Gradient token"
    }
  },
  {
    "id": "css-i-098",
    "question": "HSL tokens --color: 220 90% 56% used as:",
    "options": [
      "color: var(--color) directly always",
      "Requires SCSS",
      "Invalid in CSS",
      "hsl(var(--color)) with modern space-separated syntax"
    ],
    "correct": 3,
    "explanation": "Modern hsl/hsla accept space-separated components without commas when using var()."
  },
  {
    "id": "css-i-099",
    "question": "Performance: many var() references:",
    "options": [
      "Disable GPU",
      "Block rendering entirely",
      "Generally cheap — resolved at computed value time",
      "Require JS refresh"
    ],
    "correct": 2,
    "explanation": "Custom properties are efficient for theming; avoid extreme indirection chains for clarity."
  },
  {
    "id": "css-i-100",
    "question": "Switching themes without reload:",
    "options": [
      "Impossible in CSS",
      "Update --token values on :root or data attribute",
      "Requires recompile Sass",
      "Only with iframe"
    ],
    "correct": 1,
    "explanation": "Live custom properties enable instant theme swaps across all var() consumers.",
    "demo": {
      "type": "css",
      "id": "css-i-100",
      "code": "--accent: #f59e0b; color: var(--accent); font-weight: 600; padding: 10px;",
      "preview": "CSS variable accent color"
    }
  }
];

const ADVANCED = [
  {
    "id": "css-a-001",
    "question": "Container queries differ from media queries by:",
    "options": [
      "Querying a parent container size, not viewport",
      "Only working in print",
      "Replacing all media queries",
      "Requiring JavaScript"
    ],
    "correct": 0,
    "explanation": "Container queries enable component-responsive design independent of viewport."
  },
  {
    "id": "css-a-002",
    "question": "To enable container queries on a parent:",
    "options": [
      "media: container;",
      "container-type: inline-size; (or size)",
      "display: container;",
      "@container: parent;"
    ],
    "correct": 1,
    "explanation": "container-type establishes a query container for descendant @container rules."
  },
  {
    "id": "css-a-003",
    "question": "@container (min-width: 400px) applies when:",
    "options": [
      "Nearest container is at least 400px wide",
      "Element itself is 400px",
      "Parent height is 400px",
      "Viewport is 400px"
    ],
    "correct": 0,
    "explanation": "@container evaluates against the selected ancestor query container dimensions.",
    "demo": {
      "type": "css",
      "id": "css-a-003",
      "code": "padding: 16px; background: #eef2ff; border-radius: 8px;",
      "preview": "@container threshold box"
    }
  },
  {
    "id": "css-a-004",
    "question": "container-name: sidebar allows:",
    "options": [
      "Shadow DOM boundary",
      "Grid area naming",
      "@container sidebar (min-width: 300px) targeting named container",
      "HTML id=\"sidebar\" only"
    ],
    "correct": 2,
    "explanation": "Named containers let multiple query contexts coexist in one component tree."
  },
  {
    "id": "css-a-005",
    "question": "container-type: size requires:",
    "options": [
      "JavaScript ResizeObserver only",
      "Only inline-size",
      "display: grid",
      "Both width and height containment for two-axis queries"
    ],
    "correct": 3,
    "explanation": "size containment tracks both axes; inline-size is more common for width-only queries."
  },
  {
    "id": "css-a-006",
    "question": "Container query units cqi mean:",
    "options": [
      "Container quality index",
      "1% of query container inline size",
      "Same as vw",
      "Character inline width"
    ],
    "correct": 1,
    "explanation": "cqw/cqi/cqh/cqb units relate to the query container, not viewport.",
    "demo": {
      "type": "css",
      "id": "css-a-006",
      "code": "width: 50cqi; max-width: 100%; background: #dcfce7; padding: 8px;",
      "preview": "cqi unit width"
    }
  },
  {
    "id": "css-a-007",
    "question": "card component responsive without media queries uses:",
    "options": [
      "Wrapper with container-type + @container on card internals",
      "Fixed px breakpoints globally",
      "iframe per card",
      "Only flex-wrap"
    ],
    "correct": 0,
    "explanation": "Container queries localize breakpoints to component layout context."
  },
  {
    "id": "css-a-008",
    "question": "container: card / inline-size is shorthand for:",
    "options": [
      "Media query alias",
      "container-name and container-type together",
      "Grid template",
      "Animation container"
    ],
    "correct": 1,
    "explanation": "container shorthand sets name and type in one declaration."
  },
  {
    "id": "css-a-009",
    "question": "Query container size excludes:",
    "options": [
      "Padding of container in some containment modes — check spec behavior",
      "Border always included",
      "Nothing — always content box",
      "Children entirely"
    ],
    "correct": 0,
    "explanation": "Containment affects which box dimensions are reported — know inline-size vs size semantics.",
    "demo": {
      "type": "css",
      "id": "css-a-009",
      "code": "box-sizing: border-box; padding: 12px; border: 2px solid #6366f1;",
      "preview": "Containment box model"
    }
  },
  {
    "id": "css-a-010",
    "question": "@container (width > 500px) style() syntax enables:",
    "options": [
      "Container style queries (e.g. --theme: dark)",
      "SASS interpolation",
      "Invalid experiment",
      "Width-only in old browsers"
    ],
    "correct": 0,
    "explanation": "Style container queries match custom property values on the container."
  },
  {
    "id": "css-a-011",
    "question": "Fallback for unsupported container queries:",
    "options": [
      "display:none on unsupported",
      "Progressive enhancement with media queries or defaults",
      "Polyfill required always",
      "No fallback possible"
    ],
    "correct": 1,
    "explanation": "Design mobile/small-container first; layer viewport MQ as broader fallback if needed."
  },
  {
    "id": "css-a-012",
    "question": "Performance note on container queries:",
    "options": [
      "Always slower than media queries",
      "Layout containment can help isolate measurements",
      "Disable GPU",
      "Require will-change always"
    ],
    "correct": 1,
    "explanation": "Proper containment limits recalculation scope when containers resize.",
    "demo": {
      "type": "css",
      "id": "css-a-012",
      "code": "container-type: inline-size; padding: 12px; background: #e0e7ff;",
      "preview": "Container context box"
    }
  },
  {
    "id": "css-a-013",
    "question": "@layer declaration purpose is:",
    "options": [
      "JavaScript module loading",
      "Z-index replacement",
      "HTML layer element",
      "Explicit cascade ordering independent of source order"
    ],
    "correct": 3,
    "explanation": "@layer controls which layer wins regardless of file load order within same origin.",
    "demo": {
      "type": "css",
      "id": "css-a-013",
      "code": "color: #475569; font-size: 14px;",
      "preview": "Layered base style"
    }
  },
  {
    "id": "css-a-014",
    "question": "Layer order @layer reset, base, components; means:",
    "options": [
      "Random priority",
      "First listed wins",
      "Same as !important",
      "Later listed layers beat earlier (components > base > reset)"
    ],
    "correct": 3,
    "explanation": "Unlayered author styles beat all layers; among layers, later declarations win."
  },
  {
    "id": "css-a-015",
    "question": "Styles not in any @layer:",
    "options": [
      "Are ignored",
      "Beat layered styles of same origin/specificity",
      "Only apply in print",
      "Lose to all layers"
    ],
    "correct": 1,
    "explanation": "Unlayered declarations have higher priority than any layered author styles."
  },
  {
    "id": "css-a-016",
    "question": "@import \"theme.css\" layer(theme);",
    "options": [
      "Places imported stylesheet into named layer",
      "Deletes theme.css",
      "Requires JS bundler",
      "Invalid at-rule"
    ],
    "correct": 0,
    "explanation": "Imports can assign files to layers at load time.",
    "demo": {
      "type": "css",
      "id": "css-a-016",
      "code": "border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;",
      "preview": "Imported layer component"
    }
  },
  {
    "id": "css-a-017",
    "question": "@layer utilities { .hidden { display: none; } }",
    "options": [
      "Requires HTML layer attribute",
      "Only for animations",
      "Creates/utilizes utilities layer for override patterns",
      "Shadow DOM only"
    ],
    "correct": 2,
    "explanation": "Layer blocks group related rules under a cascade layer name."
  },
  {
    "id": "css-a-018",
    "question": "Layers vs !important interaction:",
    "options": [
      "!important always loses to layers",
      "Layers ignore !important",
      "Identical behavior",
      "!important order reverses between origins; layers affect normal declarations"
    ],
    "correct": 3,
    "explanation": "Within author origin, !important layered order is reversed — know full cascade spec."
  },
  {
    "id": "css-a-019",
    "question": "revert-layer keyword:",
    "options": [
      "Deletes all layers",
      "Same as initial",
      "JS only",
      "Reverts property to value from previous cascade layer"
    ],
    "correct": 3,
    "explanation": "revert-layer rolls back to the winning value before current layer override.",
    "demo": {
      "type": "css",
      "id": "css-a-019",
      "code": "all: revert-layer; padding: 8px; background: #f8fafc;",
      "preview": "revert-layer demo"
    }
  },
  {
    "id": "css-a-020",
    "question": "Design system architecture with layers:",
    "options": [
      "reset → defaults → components → utilities",
      "Single file only",
      "Inline styles first",
      "No layers needed ever"
    ],
    "correct": 0,
    "explanation": "Layered architecture makes override intent explicit without specificity wars."
  },
  {
    "id": "css-a-021",
    "question": "Nested @layer framework { components { ... } }:",
    "options": [
      "Invalid syntax",
      "Defines sub-layer ordering within framework",
      "SASS only",
      "HTML nesting"
    ],
    "correct": 1,
    "explanation": "Nested layers create hierarchical ordering among sub-layers."
  },
  {
    "id": "css-a-022",
    "question": "Layer reduces need for:",
    "options": [
      "High-specificity hacks and !important sprawl",
      "HTML structure",
      "Valid CSS syntax",
      "All class names"
    ],
    "correct": 0,
    "explanation": "Predictable layer order replaces .btn.btn.btn !important patterns.",
    "demo": {
      "type": "css",
      "id": "css-a-022",
      "code": "display: grid; gap: 8px; padding: 8px; background: #faf5ff;",
      "preview": "Layer-ordered grid"
    }
  },
  {
    "id": "css-a-023",
    "question": "Can two files in same layer tie-break by order?",
    "options": [
      "No — random",
      "Alphabetical file name",
      "File size",
      "Yes — later source order within layer"
    ],
    "correct": 3,
    "explanation": "Layer establishes priority between layers; source order still applies within one layer."
  },
  {
    "id": "css-a-024",
    "question": "@layer with third-party CSS strategy:",
    "options": [
      "Delete vendor CSS",
      "Always unlayered vendor",
      "Put vendor in lower layer; overrides in higher layer",
      "Use inline only"
    ],
    "correct": 2,
    "explanation": "Layer vendor reset low, app components above, utilities on top for sane overrides.",
    "demo": {
      "type": "css",
      "id": "css-a-024",
      "code": "@layer base { color: #334155; } color: #0f172a;",
      "preview": "Layer cascade demo"
    }
  },
  {
    "id": "css-a-025",
    "question": "grid-template-columns: subgrid on nested grid:",
    "options": [
      "Creates independent columns always",
      "Adopts parent grid column tracks",
      "Flexbox alias",
      "Only one column"
    ],
    "correct": 1,
    "explanation": "subgrid aligns nested grid tracks with parent grid for consistent alignment.",
    "demo": {
      "type": "css",
      "id": "css-a-025",
      "code": "display: grid; grid-template-columns: subgrid; gap: inherit; padding: 6px; background: #ecfccb;",
      "preview": "Subgrid columns"
    }
  },
  {
    "id": "css-a-026",
    "question": "subgrid works on:",
    "options": [
      "Grid items that are themselves grid containers",
      "Inline spans",
      "Flex items only",
      "Any block element"
    ],
    "correct": 0,
    "explanation": "The subgrid item must be display:grid/grid and span parent tracks."
  },
  {
    "id": "css-a-027",
    "question": "grid-template-rows: subgrid enables:",
    "options": [
      "Flex cross-axis sync",
      "Row track alignment with parent grid",
      "Table rowspan",
      "Automatic row height only"
    ],
    "correct": 1,
    "explanation": "Both column and row subgrid are available where supported."
  },
  {
    "id": "css-a-028",
    "question": "Subgrid primary benefit:",
    "options": [
      "Replace flexbox entirely",
      "Faster animations",
      "Remove gap property",
      "Align nested content to parent grid lines without duplicate track defs"
    ],
    "correct": 3,
    "explanation": "Card internals align to page grid columns seamlessly.",
    "demo": {
      "type": "css",
      "id": "css-a-028",
      "code": "display: grid; grid-column: span 3; grid-template-columns: subgrid; background: #fef3c7; padding: 8px;",
      "preview": "Aligned nested grid"
    }
  },
  {
    "id": "css-a-029",
    "question": "subgrid span requires:",
    "options": [
      "Fixed 12 columns always",
      "Parent grid tracks to span (grid-column span N)",
      "JavaScript layout",
      "display: flex"
    ],
    "correct": 1,
    "explanation": "Subgrid item typically spans multiple parent tracks it mirrors."
  },
  {
    "id": "css-a-030",
    "question": "Fallback without subgrid support:",
    "options": [
      "Explicit matching grid-template on nested grid",
      "No layout possible",
      "position: absolute always",
      "Use tables only"
    ],
    "correct": 0,
    "explanation": "Duplicate track definitions or simplify layout when subgrid unavailable."
  },
  {
    "id": "css-a-031",
    "question": "gap inheritance with subgrid:",
    "options": [
      "Gap disabled in subgrid",
      "Subgrid can inherit parent gap in supporting browsers",
      "Invalid",
      "Only margin works"
    ],
    "correct": 1,
    "explanation": "Subgrid integrates parent gutter spacing for aligned nested content.",
    "demo": {
      "type": "css",
      "id": "css-a-031",
      "code": "display: grid; gap: 12px; padding: 10px; background: #e0f2fe;",
      "preview": "Inherited subgrid gap"
    }
  },
  {
    "id": "css-a-032",
    "question": "Subgrid vs nested grid with same template:",
    "options": [
      "Subgrid stays synced when parent tracks change dynamically",
      "Identical always",
      "Nested is always better",
      "Subgrid ignores parent changes"
    ],
    "correct": 0,
    "explanation": "subgrid tracks follow parent changes — duplicated templates can drift."
  },
  {
    "id": "css-a-033",
    "question": "Browser support strategy for subgrid:",
    "options": [
      "Never use feature queries",
      "User agent sniffing",
      "iframe isolation",
      "@supports (grid-template-columns: subgrid) { ... }"
    ],
    "correct": 3,
    "explanation": "Feature queries enable progressive enhancement for subgrid layouts."
  },
  {
    "id": "css-a-034",
    "question": "Subgrid and named grid areas:",
    "options": [
      "Areas forbidden with subgrid",
      "Named areas on parent can align subgrid items conceptually",
      "HTML map element",
      "Only flex names"
    ],
    "correct": 1,
    "explanation": "Subgrid helps nested components participate in page-level area alignment.",
    "demo": {
      "type": "css",
      "id": "css-a-034",
      "code": "display: grid; grid-template-columns: subgrid; gap: inherit;",
      "preview": "Subgrid alignment cell"
    }
  },
  {
    "id": "css-a-035",
    "question": "margin-inline-start in LTR equals:",
    "options": [
      "margin-right",
      "margin-left",
      "margin-top",
      "margin-bottom"
    ],
    "correct": 1,
    "explanation": "Logical properties map to physical sides based on writing-mode and direction.",
    "demo": {
      "type": "css",
      "id": "css-a-035",
      "code": "margin-inline-start: 20px; padding: 8px; background: #fae8ff; border-inline-start: 3px solid #a855f7;",
      "preview": "margin-inline-start"
    }
  },
  {
    "id": "css-a-036",
    "question": "padding-block is shorthand for:",
    "options": [
      "All four sides",
      "Left and right padding",
      "Inline padding only in RTL",
      "padding-block-start and padding-block-end"
    ],
    "correct": 3,
    "explanation": "block axis is perpendicular to inline (vertical in horizontal writing)."
  },
  {
    "id": "css-a-037",
    "question": "writing-mode: vertical-rl changes:",
    "options": [
      "Color inheritance",
      "Z-index order",
      "Inline and block axes orientation",
      "Font family only"
    ],
    "correct": 2,
    "explanation": "vertical writing modes swap which physical sides inline/block map to."
  },
  {
    "id": "css-a-038",
    "question": "inset-inline: 0 sets:",
    "options": [
      "Top and bottom",
      "Left and right in LTR (both inline edges)",
      "Only left",
      "Transform origin"
    ],
    "correct": 1,
    "explanation": "Logical inset shorthands adapt to document direction automatically.",
    "demo": {
      "type": "css",
      "id": "css-a-038",
      "code": "inset-inline: 0; padding-inline: 16px; background: #ccfbf1;",
      "preview": "inset-inline edges"
    }
  },
  {
    "id": "css-a-039",
    "question": "border-inline-end in RTL maps to:",
    "options": [
      "Top border",
      "Always right side",
      "Bottom border",
      "Physical left side (end of inline direction)"
    ],
    "correct": 3,
    "explanation": "end/start follow inline direction — swap in RTL for maintainable i18n CSS."
  },
  {
    "id": "css-a-040",
    "question": "size: logical width/height replacement includes:",
    "options": [
      "inline-size and block-size properties",
      "Only width",
      "Only max-height",
      "viewport units only"
    ],
    "correct": 0,
    "explanation": "inline-size/block-size replace width/height in logical property sets."
  },
  {
    "id": "css-a-041",
    "question": "text-align: start vs left:",
    "options": [
      "left is deprecated",
      "start follows writing direction; left is always physical left",
      "Identical in all modes",
      "start is RTL only keyword"
    ],
    "correct": 1,
    "explanation": "Prefer start/end for internationalization instead of left/right.",
    "demo": {
      "type": "css",
      "id": "css-a-041",
      "code": "text-align: start; padding: 8px; background: #fff7ed;",
      "preview": "text-align: start"
    }
  },
  {
    "id": "css-a-042",
    "question": "position: sticky often fails when:",
    "options": [
      "The sticky element has color set",
      "An ancestor creates an unexpected overflow scrolling container",
      "The element has padding",
      "The page uses rem units"
    ],
    "correct": 1,
    "explanation": "Sticky positioning is constrained by its nearest scrolling ancestor; overflow on parents is a common interview/debugging gotcha."
  },
  {
    "id": "css-a-043",
    "question": "Migration strategy to logical properties:",
    "options": [
      "Delete all margins",
      "Use !important on left",
      "Replace left/right with inline-start/end in layout rules",
      "Avoid RTL entirely"
    ],
    "correct": 2,
    "explanation": "Incremental replacement of physical properties improves bidirectional layout support."
  },
  {
    "id": "css-a-044",
    "question": "gap: logical in flex/grid:",
    "options": [
      "row-gap = block gap; column-gap = inline gap in horizontal writing",
      "No logical mapping",
      "Deprecated",
      "Only in grid"
    ],
    "correct": 0,
    "explanation": "Grid/flex gap already behave logically relative to writing mode in modern CSS.",
    "demo": {
      "type": "css",
      "id": "css-a-044",
      "code": "display: flex; gap: 12px; padding: 10px; background: #f1f5f9;",
      "preview": "Logical flex gap"
    }
  },
  {
    "id": "css-a-045",
    "question": "border-radius: logical corners like border-start-start-radius:",
    "options": [
      "Invalid property",
      "Radius at inline-start block-start corner",
      "SVG only",
      "Always top-left"
    ],
    "correct": 1,
    "explanation": "Logical radii map corners by writing mode rather than top-left etc."
  },
  {
    "id": "css-a-046",
    "question": "Why logical properties matter for i18n:",
    "options": [
      "Required for dark mode",
      "Faster paint only",
      "Replace HTML lang attribute",
      "One stylesheet supports LTR and RTL without mirror duplicates"
    ],
    "correct": 3,
    "explanation": "Logical axes eliminate many direction-specific override files.",
    "demo": {
      "type": "css",
      "id": "css-a-046",
      "code": "margin-inline-start: 24px; padding-block: 12px; border-inline-start: 3px solid #6366f1;",
      "preview": "Logical spacing"
    }
  },
  {
    "id": "css-a-047",
    "question": "Layout thrashing in CSS/JS context means:",
    "options": [
      "GPU overheating",
      "Repeated read/write of layout properties forcing synchronous reflow",
      "Too many colors",
      "Invalid selectors"
    ],
    "correct": 1,
    "explanation": "Interleaving offsetWidth reads with style mutations forces expensive recalculations.",
    "demo": {
      "type": "css",
      "id": "css-a-047",
      "code": "contain: layout style; padding: 12px; background: #fef2f2;",
      "preview": "Layout containment"
    }
  },
  {
    "id": "css-a-048",
    "question": "content-visibility: auto helps:",
    "options": [
      "Disable CSS cascade",
      "Hide all images",
      "Compress CSS files",
      "Skip rendering off-screen content until near viewport"
    ],
    "correct": 3,
    "explanation": "auto lets browser defer layout/paint of off-screen subtrees — big list perf win."
  },
  {
    "id": "css-a-049",
    "question": "contain: layout tells browser:",
    "options": [
      "Element is invisible",
      "Internal layout isolated from rest of page",
      "No children allowed",
      "Fixed positioning required"
    ],
    "correct": 1,
    "explanation": "Layout containment limits scope of layout calculations when internals change.",
    "demo": {
      "type": "css",
      "id": "css-a-049",
      "code": "contain: strict; width: 100%; height: 60px; background: #ede9fe;",
      "preview": "Strict containment"
    }
  },
  {
    "id": "css-a-050",
    "question": "Expensive properties to animate for 60fps:",
    "options": [
      "width, height, top, left (trigger layout)",
      "z-index cheapest",
      "transform, opacity",
      "color only always free"
    ],
    "correct": 0,
    "explanation": "Layout-triggering animations cause jank; prefer compositor-friendly properties."
  },
  {
    "id": "css-a-051",
    "question": "CSS selector performance best practice:",
    "options": [
      "Never use classes",
      "Prefer low-cost selectors; avoid over-qualifying",
      "Deep descendant chains fastest",
      "Universal * only"
    ],
    "correct": 1,
    "explanation": "Modern engines optimize well, but avoid pathological [attr*=] on huge DOM without need.",
    "demo": {
      "type": "css",
      "id": "css-a-051",
      "code": "font-display: swap; font-family: system-ui, sans-serif;",
      "preview": "System font fallback"
    }
  },
  {
    "id": "css-a-052",
    "question": "font-display: swap in @font-face:",
    "options": [
      "Hides text until loaded",
      "Blocks rendering entirely",
      "Only for icons",
      "Shows fallback text immediately; swaps when font loads"
    ],
    "correct": 3,
    "explanation": "swap improves perceived performance; brief FOUT may occur."
  },
  {
    "id": "css-a-053",
    "question": "Critical CSS strategy:",
    "options": [
      "Remove all CSS",
      "Use only inline styles site-wide",
      "Inline above-the-fold CSS; defer rest",
      "One 5MB stylesheet"
    ],
    "correct": 2,
    "explanation": "Inlining critical path CSS reduces render-blocking for first paint."
  },
  {
    "id": "css-a-054",
    "question": "Layer promotion from transform: translateZ(0):",
    "options": [
      "Required for flexbox",
      "May create compositor layer — use when animating, not everywhere",
      "Always improves perf",
      "Disables GPU"
    ],
    "correct": 1,
    "explanation": "Excessive layers increase memory — promote selectively for animated elements.",
    "demo": {
      "type": "css",
      "id": "css-a-054",
      "code": "transform: translateZ(0); will-change: transform; padding: 8px; background: #cffafe;",
      "preview": "Compositor layer hint"
    }
  },
  {
    "id": "css-a-055",
    "question": "contain: paint clips:",
    "options": [
      "Descendants painting outside box (like overflow hidden for paint)",
      "All animations",
      "Inherited colors",
      "Media queries"
    ],
    "correct": 0,
    "explanation": "Paint containment creates a paint boundary — can help optimization."
  },
  {
    "id": "css-a-056",
    "question": "Using @import in CSS for many files:",
    "options": [
      "HTTP/2 makes it always bad — still can block",
      "Required for layers",
      "Blocks parallel downloads — prefer <link> tags or bundling",
      "Fastest loading pattern"
    ],
    "correct": 2,
    "explanation": "@import serializes loading; bundlers/link tags load more efficiently."
  },
  {
    "id": "css-a-057",
    "question": "Complex :has() selectors performance note:",
    "options": [
      "Can be costly on large DOM — use judiciously",
      "Disabled in Chrome",
      "Only in shadow DOM",
      "Always free"
    ],
    "correct": 0,
    "explanation": ":has() is powerful but relative selector matching has cost — profile hot paths.",
    "demo": {
      "type": "css",
      "id": "css-a-057",
      "code": "outline: 2px solid #f59e0b; outline-offset: 2px; padding: 8px;",
      "preview": "Focus ring pattern"
    }
  },
  {
    "id": "css-a-058",
    "question": ":focus-visible is preferred over :focus when:",
    "options": [
      "You want visible keyboard focus without forcing mouse-click focus rings",
      "You want to remove outlines for all users",
      "You only style hover states",
      "You target print styles"
    ],
    "correct": 0,
    "explanation": ":focus-visible preserves accessible keyboard focus indicators while avoiding unnecessary rings for pointer interactions.",
    "demo": {
      "type": "css",
      "id": "css-a-058",
      "code": "button:focus-visible { outline: 3px solid #2563eb; outline-offset: 3px; }",
      "preview": "Keyboard focus ring"
    }
  },
  {
    "id": "css-a-059",
    "question": "@supports (display: grid) { ... } applies when:",
    "options": [
      "Only Safari",
      "Browser supports display:grid",
      "JavaScript enabled",
      "Always in modern browsers unconditionally"
    ],
    "correct": 1,
    "explanation": "Feature queries gate declarations on parser/support checks.",
    "demo": {
      "type": "css",
      "id": "css-a-059",
      "code": "display: grid; place-items: center; min-height: 50px; background: #d1fae5;",
      "preview": "@supports grid block"
    }
  },
  {
    "id": "css-a-060",
    "question": "@supports not (gap: 20px) provides:",
    "options": [
      "Server-side render",
      "Deletes grid",
      "Fallback styles when gap unsupported",
      "Error in console"
    ],
    "correct": 2,
    "explanation": "not() inverts support test for progressive fallback blocks."
  },
  {
    "id": "css-a-061",
    "question": "@supports selector(:has(a)) tests:",
    "options": [
      "Color depth",
      "If page has links",
      "HTML validity",
      "Whether selector syntax is supported"
    ],
    "correct": 3,
    "explanation": "selector() function checks support for selector features like :has()."
  },
  {
    "id": "css-a-062",
    "question": "Combining conditions: @supports (display: grid) and (gap: 1rem):",
    "options": [
      "Either passes",
      "Both must pass",
      "Invalid syntax",
      "OR only with comma"
    ],
    "correct": 1,
    "explanation": "and/or combine support conditions similar to media queries.",
    "demo": {
      "type": "css",
      "id": "css-a-062",
      "code": "display: flex; gap: 1rem;",
      "preview": "Flex with gap fallback"
    }
  },
  {
    "id": "css-a-063",
    "question": "@supports (backdrop-filter: blur(1px)) enables:",
    "options": [
      "Glassmorphism only when blur supported",
      "Grid layout",
      "Always blur",
      "Print styles"
    ],
    "correct": 0,
    "explanation": "Gate expensive/visual effects behind support checks with graceful degradation."
  },
  {
    "id": "css-a-064",
    "question": "JS feature detect vs @supports:",
    "options": [
      "Identical always",
      "@supports runs in Node",
      "JS always required",
      "@supports is CSS-native; avoids FOUC for styling fallbacks"
    ],
    "correct": 3,
    "explanation": "CSS feature queries apply before paint for styling; JS detect for behavior logic."
  },
  {
    "id": "css-a-065",
    "question": "@supports (color: oklch(0.7 0.15 180)) for:",
    "options": [
      "Wide gamut oklch colors when supported",
      "IE11 fallback",
      "Grayscale only",
      "Animation"
    ],
    "correct": 0,
    "explanation": "oklch and other modern color functions can be feature-gated with fallbacks.",
    "demo": {
      "type": "css",
      "id": "css-a-065",
      "code": "background: oklch(0.7 0.15 180); color: white; padding: 10px; border-radius: 4px;",
      "preview": "oklch color when supported"
    }
  },
  {
    "id": "css-a-066",
    "question": "Fallback pattern for subgrid:",
    "options": [
      "iframe only",
      "@supports (grid-template-columns: subgrid) { subgrid } @supports not (...) { fixed tracks }",
      "No fallback ever",
      "User agent sniff"
    ],
    "correct": 1,
    "explanation": "Layer enhanced layout behind support queries with simpler grid otherwise."
  },
  {
    "id": "css-a-067",
    "question": "@supports (height: 100dvh) addresses:",
    "options": [
      "SVG viewport",
      "Font metrics",
      "Dynamic viewport units on mobile browsers",
      "Print height"
    ],
    "correct": 2,
    "explanation": "dvh/svh/lvh fix mobile URL bar viewport issues — gate with @supports where needed."
  },
  {
    "id": "css-a-068",
    "question": "Invalid @supports condition:",
    "options": [
      "Crashes browser",
      "@supports (not-a-real-property: foo) — false, block skipped",
      "Applies always",
      "Compiles to Sass"
    ],
    "correct": 1,
    "explanation": "Unknown property:value pairs make condition false — block ignored safely.",
    "demo": {
      "type": "css",
      "id": "css-a-068",
      "code": "@supports (display: grid) { display: grid; gap: 8px; }",
      "preview": "Grid when supported"
    }
  },
  {
    "id": "css-a-069",
    "question": "@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } animates:",
    "options": [
      "Opacity from 0 to 1 over animation duration",
      "Z-index only",
      "Layout width",
      "HTML structure"
    ],
    "correct": 0,
    "explanation": "Keyframes define intermediate/computed values at percentage or from/to points.",
    "demo": {
      "type": "css",
      "id": "css-a-069",
      "code": "opacity: 1; animation: fadeIn 1s ease;",
      "preview": "fadeIn keyframe target"
    }
  },
  {
    "id": "css-a-070",
    "question": "animation: slide 2s ease-in-out infinite alternate;",
    "options": [
      "JS timer",
      "Transition only",
      "One play no repeat",
      "Named animation, 2s, easing, loops forever reversing direction"
    ],
    "correct": 3,
    "explanation": "animation shorthand combines name, duration, timing, iteration, direction, etc."
  },
  {
    "id": "css-a-071",
    "question": "animation-fill-mode: forwards keeps:",
    "options": [
      "Initial styles",
      "GPU layer forever",
      "Only during hover",
      "Final keyframe styles after animation ends"
    ],
    "correct": 3,
    "explanation": "forwards retains end state; backwards applies start state during delay."
  },
  {
    "id": "css-a-072",
    "question": "transform keyframes preferred because:",
    "options": [
      "Cannot be GPU accelerated",
      "Replace all transitions",
      "Often compositor-only without layout",
      "Always trigger reflow"
    ],
    "correct": 2,
    "explanation": "translate/scale/rotate animations typically avoid layout/paint when isolated.",
    "demo": {
      "type": "css",
      "id": "css-a-072",
      "code": "transform: translateX(0); transition: transform 0.3s;",
      "preview": "Transform-only motion"
    }
  },
  {
    "id": "css-a-073",
    "question": "steps(5, end) in animation-timing-function:",
    "options": [
      "5 discrete steps holding end value each segment",
      "5 repeating animations",
      "Smooth cubic curve",
      "5 second duration"
    ],
    "correct": 0,
    "explanation": "steps() divides animation into stairstep intervals — sprite sheet walks."
  },
  {
    "id": "css-a-074",
    "question": "animation-delay with negative value:",
    "options": [
      "Waits longer before start",
      "Starts animation partway through as if already running",
      "Invalid",
      "Reverses direction"
    ],
    "correct": 1,
    "explanation": "Negative delay jumps into the animation timeline immediately at offset."
  },
  {
    "id": "css-a-075",
    "question": "Multiple animations on one element:",
    "options": [
      "JavaScript only",
      "Only one allowed",
      "Requires pseudo-elements always",
      "animation: a 1s, b 2s; comma-separated"
    ],
    "correct": 3,
    "explanation": "Comma-separated animation lists run concurrently on same element.",
    "demo": {
      "type": "css",
      "id": "css-a-075",
      "code": "animation: bounce 1s ease infinite; transform: translateY(0);",
      "preview": "Multiple animation ready"
    }
  },
  {
    "id": "css-a-076",
    "question": "@keyframes with 50% keyframe:",
    "options": [
      "Print breakpoint",
      "Runs only at 50% scroll",
      "Defines midpoint state at half duration",
      "Invalid syntax"
    ],
    "correct": 2,
    "explanation": "Percentage keyframes interpolate between adjacent keyframe stops."
  },
  {
    "id": "css-a-077",
    "question": "prefers-reduced-motion should reduce:",
    "options": [
      "Font sizes",
      "Grid layout",
      "Non-essential @keyframes and transitions",
      "All CSS"
    ],
    "correct": 2,
    "explanation": "Provide @media (prefers-reduced-motion: reduce) { animation: none; } alternatives.",
    "demo": {
      "type": "css",
      "id": "css-a-077",
      "code": "animation: none; transition: none;",
      "preview": "Reduced motion safe"
    }
  },
  {
    "id": "css-a-078",
    "question": "animation-play-state: paused toggled via:",
    "options": [
      "print media only",
      ":hover or JS to pause/resume",
      "Only on load",
      "Cannot pause CSS animations"
    ],
    "correct": 1,
    "explanation": "play-state allows interactive pause without removing animation definition."
  },
  {
    "id": "css-a-079",
    "question": "Registered custom property @property enables:",
    "options": [
      "Animating custom properties with typed interpolation",
      "HTML attributes",
      "SASS variables",
      "Grid only"
    ],
    "correct": 0,
    "explanation": "Without @property, animating --x may not interpolate smoothly."
  },
  {
    "id": "css-a-080",
    "question": "View Transitions API CSS hook:",
    "options": [
      "::view-transition-old(root) and ::view-transition-new(root)",
      "React-only API",
      "display: transition",
      "@keyframes view only"
    ],
    "correct": 0,
    "explanation": "View transition pseudo-elements style cross-document/shared element transitions.",
    "demo": {
      "type": "css",
      "id": "css-a-080",
      "code": "animation: pulse 1.5s ease-in-out infinite; @keyframes pulse { 50% { transform: scale(1.05); } } transform: scale(1);",
      "preview": "Pulsing scale animation"
    }
  },
  {
    "id": "css-a-081",
    "question": "BEM naming .block__element--modifier means:",
    "options": [
      "Binary CSS model",
      "Block component, element part, modifier variant",
      "Bootstrap module",
      "Browser Error Message"
    ],
    "correct": 1,
    "explanation": "BEM clarifies component structure: .card__title--large.",
    "demo": {
      "type": "css",
      "id": "css-a-081",
      "code": "padding: 12px 16px; border-radius: 8px; background: #1d4ed8; color: white;",
      "preview": "block__element BEM btn"
    }
  },
  {
    "id": "css-a-082",
    "question": "Utility-first CSS (Tailwind-style) tradeoff:",
    "options": [
      "No customization",
      "No responsive design",
      "Fast prototyping; risk of verbose HTML class lists",
      "Replaces cascade entirely"
    ],
    "correct": 2,
    "explanation": "Utilities compose in markup; design tokens constrain consistency."
  },
  {
    "id": "css-a-083",
    "question": "CSS Modules primarily solve:",
    "options": [
      "Runtime theming only",
      "Server routing",
      "Local class name scoping at build time",
      "Removing CSS entirely"
    ],
    "correct": 2,
    "explanation": "Modules hash class names to avoid global collisions in component architecture."
  },
  {
    "id": "css-a-084",
    "question": "ITCSS layer order (conceptual):",
    "options": [
      "Settings → Tools → Generic → Elements → Objects → Components → Utilities",
      "Random file order",
      "Utilities first always win",
      "Inline only"
    ],
    "correct": 0,
    "explanation": "ITCSS organizes specificity and scope from low to high intentionally."
  },
  {
    "id": "css-a-085",
    "question": "Design tokens as CSS variables enable:",
    "options": [
      "SASS-only workflow",
      "Single source of truth for theming across platforms",
      "No dark mode",
      "Hard-coded hex only"
    ],
    "correct": 1,
    "explanation": "Tokens abstract brand values consumed by components and utilities.",
    "demo": {
      "type": "css",
      "id": "css-a-085",
      "code": "--color-bg: #0f172a; --color-text: #f8fafc; background: var(--color-bg); color: var(--color-text); padding: 12px;",
      "preview": "Token-based theme"
    }
  },
  {
    "id": "css-a-086",
    "question": ":is() in complex selectors helps:",
    "options": [
      "Disable cascade",
      "Replace HTML",
      "Increase specificity always to max",
      "Reduce repetition: :is(h1,h2,h3) instead of three rules"
    ],
    "correct": 3,
    "explanation": ":is() groups selectors sharing declarations without duplication."
  },
  {
    "id": "css-a-087",
    "question": ":where() in reset stylesheets:",
    "options": [
      "Maximum specificity",
      "Only for IDs",
      "Apply low-specificity base styles easy to override",
      "Invalid in resets"
    ],
    "correct": 2,
    "explanation": ":where() keeps reset rules from overpowering component styles."
  },
  {
    "id": "css-a-088",
    "question": "Shadow DOM ::part() allows:",
    "options": [
      "JavaScript injection only",
      "Global * override inside shadow",
      "Styling exported shadow parts from outside with part attribute",
      "Removing encapsulation entirely"
    ],
    "correct": 2,
    "explanation": "part/exportparts expose safe styling hooks for web components.",
    "demo": {
      "type": "css",
      "id": "css-a-088",
      "code": "border: 2px dashed #94a3b8; padding: 10px; border-radius: 6px;",
      "preview": "Shadow part styling hook"
    }
  },
  {
    "id": "css-a-089",
    "question": "@scope (.card) to (.content) limits:",
    "options": [
      "Viewport size",
      "Selector matching range between scope root and limit",
      "Network scope",
      "Animation duration"
    ],
    "correct": 1,
    "explanation": "@scope restricts where descendant selectors apply — reduces leakage."
  },
  {
    "id": "css-a-090",
    "question": "scroll-snap-type is useful for:",
    "options": [
      "Carousels or paged panels that should stop at defined snap points",
      "Changing HTTP cache headers",
      "Removing overflow",
      "Increasing z-index"
    ],
    "correct": 0,
    "explanation": "Scroll snapping improves touch/trackpad UX for carousels, galleries, and horizontal panels."
  },
  {
    "id": "css-a-091",
    "question": "color-scheme: dark light tells the browser:",
    "options": [
      "Which native control themes the page supports",
      "To download two CSS files",
      "To invert all images",
      "To disable prefers-color-scheme"
    ],
    "correct": 0,
    "explanation": "color-scheme lets the UA render built-in controls, scrollbars, and form fields in supported light/dark themes."
  },
  {
    "id": "css-a-092",
    "question": "Anti-pattern: deep nested Sass without @layer:",
    "options": [
      "Required for grid",
      "Always faster builds",
      "Specificity arms race and override difficulty",
      "Best for accessibility"
    ],
    "correct": 2,
    "explanation": "Deep nesting inflates specificity; layers and flat selectors scale better."
  },
  {
    "id": "css-a-093",
    "question": "Component API via custom properties pattern:",
    "options": [
      "Global !important overrides",
      "Inline style only",
      "No variants allowed",
      ".btn { --btn-bg: blue; background: var(--btn-bg); }"
    ],
    "correct": 3,
    "explanation": "Expose customization through documented CSS variables on components.",
    "demo": {
      "type": "css",
      "id": "css-a-093",
      "code": "--btn-bg: #059669; --btn-color: white; background: var(--btn-bg); color: var(--btn-color); padding: 8px 16px; border-radius: 6px; border: none;",
      "preview": "Component API vars"
    }
  },
  {
    "id": "css-a-094",
    "question": "Separate concerns: layout vs presentation classes:",
    "options": [
      "Tables for all layout",
      "Only IDs",
      "One class does everything",
      ".grid-layout vs .theme-dark decoupled"
    ],
    "correct": 3,
    "explanation": "Splitting layout structure from visual theme eases maintenance and theming."
  },
  {
    "id": "css-a-095",
    "question": "Documenting breaking CSS changes in design systems:",
    "options": [
      "Delete old CSS overnight",
      "Changelog + codemods + deprecation layers",
      "No versioning",
      "Silent renames"
    ],
    "correct": 1,
    "explanation": "Semantic versioning and migration paths reduce consumer breakage."
  },
  {
    "id": "css-a-096",
    "question": "Monorepo shared tokens package consumed by:",
    "options": [
      "Multiple apps importing same CSS custom properties file",
      "Single HTML page only",
      "Database",
      "Backend API"
    ],
    "correct": 0,
    "explanation": "Shared packages propagate token updates across products consistently."
  },
  {
    "id": "css-a-097",
    "question": "Progressive enhancement CSS architecture:",
    "options": [
      "Latest features only no fallback",
      "Detect IE in CSS",
      "Base usable styles → enhanced layouts behind @supports/MQ",
      "Disable JS"
    ],
    "correct": 2,
    "explanation": "Core experience works everywhere; enhancements layer for capable browsers.",
    "demo": {
      "type": "css",
      "id": "css-a-097",
      "code": "display: block; padding: 10px; background: linear-gradient(135deg, #667eea, #764ba2); color: white;",
      "preview": "Progressive enhancement base"
    }
  },
  {
    "id": "css-a-098",
    "question": "Accessibility in CSS architecture includes:",
    "options": [
      "Removing outlines globally",
      "Focus styles in component layer; reduced-motion tokens",
      "display:none on skip links",
      "color-only state indicators"
    ],
    "correct": 1,
    "explanation": "Never remove focus rings without replacement; respect motion/color contrast tokens."
  },
  {
    "id": "css-a-099",
    "question": "Dead CSS elimination in production uses:",
    "options": [
      "Purging/unused selector analysis in build (PurgeCSS, etc.)",
      "Manual grep only always",
      "Cannot remove unused",
      "Browser does it automatically"
    ],
    "correct": 0,
    "explanation": "Build tools scan content sources to drop unused rules from shipped CSS."
  },
  {
    "id": "css-a-100",
    "question": "Senior CSS review checklist includes:",
    "options": [
      "Maximize !important usage",
      "Cascade layers, logical props, a11y, perf, i18n, fallbacks",
      "Only hex color review",
      "Ignore specificity"
    ],
    "correct": 1,
    "explanation": "Production CSS architecture balances maintainability, performance, and inclusive design.",
    "demo": {
      "type": "css",
      "id": "css-a-100",
      "code": "--token-primary: #0ea5e9; color: var(--token-primary); font-weight: 600; letter-spacing: 0.02em;",
      "preview": "Design token pattern"
    }
  }
];

/** @param {'beginner' | 'intermediate' | 'advanced'} level */
export function getCssQuestions(level) {
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
