const BEGINNER = [
  {
    "id": "html-beginner-001",
    "question": "Which element wraps the entire HTML document?",
    "options": [
      "<body>",
      "<html>",
      "<head>",
      "<document>"
    ],
    "correct": 1,
    "explanation": "The <html> element is the root container. <head> holds metadata; <body> holds visible content.",
    "demo": {
      "type": "html",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head><title>Page</title></head>\n  <body>Hello</body>\n</html>"
    }
  },
  {
    "id": "html-beginner-002",
    "question": "Where does visible page content belong?",
    "options": [
      "<meta>",
      "<head>",
      "<html>",
      "<body>"
    ],
    "correct": 3,
    "explanation": "Only content inside <body> is rendered in the browser viewport."
  },
  {
    "id": "html-beginner-003",
    "question": "Which tag creates a paragraph?",
    "options": [
      "<text>",
      "<p>",
      "<paragraph>",
      "<para>"
    ],
    "correct": 1,
    "explanation": "Use <p> for paragraphs. There is no <para> or <paragraph> in HTML."
  },
  {
    "id": "html-beginner-004",
    "question": "What is the largest default heading level?",
    "options": [
      "<h1>",
      "<head>",
      "<h6>",
      "<header>"
    ],
    "correct": 0,
    "explanation": "<h1> is the top-level heading; numbers increase as headings get smaller."
  },
  {
    "id": "html-beginner-005",
    "question": "Which heading is smallest by default?",
    "options": [
      "<h1>",
      "<h6>",
      "<small>",
      "<h0>"
    ],
    "correct": 1,
    "explanation": "Headings run from <h1> (largest) to <h6> (smallest)."
  },
  {
    "id": "html-beginner-006",
    "question": "What does <br> do?",
    "options": [
      "Breaks the page layout",
      "Creates a bold line",
      "Inserts a line break",
      "Starts a new paragraph"
    ],
    "correct": 2,
    "explanation": "<br> is a void element that forces a line break within text flow.",
    "demo": {
      "type": "html",
      "code": "<p>Line one<br>Line two</p>",
      "preview": "Line one\nLine two"
    }
  },
  {
    "id": "html-beginner-007",
    "question": "Which element draws a thematic break (horizontal rule)?",
    "options": [
      "<line>",
      "<rule>",
      "<divider>",
      "<hr>"
    ],
    "correct": 3,
    "explanation": "<hr> represents a thematic break between sections, often styled as a horizontal line."
  },
  {
    "id": "html-beginner-008",
    "question": "Generic block container with no semantic meaning?",
    "options": [
      "<section>",
      "<span>",
      "<block>",
      "<div>"
    ],
    "correct": 3,
    "explanation": "<div> is a generic block-level container when no semantic element fits.",
    "demo": {
      "type": "html",
      "code": "<div class=\"card\">\n  <p>Block content stacks vertically.</p>\n</div>"
    }
  },
  {
    "id": "html-beginner-009",
    "question": "Generic inline container with no semantic meaning?",
    "options": [
      "<div>",
      "<inline>",
      "<text>",
      "<span>"
    ],
    "correct": 3,
    "explanation": "<span> groups inline content without adding semantics."
  },
  {
    "id": "html-beginner-010",
    "question": "Which is a void (self-closing) element?",
    "options": [
      "<div>",
      "<p>",
      "<img>",
      "<span>"
    ],
    "correct": 2,
    "explanation": "Void elements like <img>, <br>, and <input> have no closing tag and no inner content."
  },
  {
    "id": "html-beginner-011",
    "question": "Correct DOCTYPE for HTML5?",
    "options": [
      "<!DOCTYPE HTML5>",
      "<!DOCTYPE html>",
      "<HTML5>",
      "<!DOCTYPE html5>"
    ],
    "correct": 1,
    "explanation": "HTML5 uses the simple <!DOCTYPE html> declaration to trigger standards mode."
  },
  {
    "id": "html-beginner-012",
    "question": "Which element holds page title shown in the browser tab?",
    "options": [
      "<title>",
      "<header>",
      "<h1>",
      "<name>"
    ],
    "correct": 0,
    "explanation": "<title> lives in <head> and sets the document title, not the visible main heading."
  },
  {
    "id": "html-beginner-013",
    "question": "Which attribute uniquely identifies one element?",
    "options": [
      "name",
      "id",
      "key",
      "class"
    ],
    "correct": 1,
    "explanation": "id must be unique in the document and is used for linking, scripting, and labeling."
  },
  {
    "id": "html-beginner-014",
    "question": "Which attribute groups elements for styling or scripting?",
    "options": [
      "id",
      "class",
      "type",
      "group"
    ],
    "correct": 1,
    "explanation": "class can repeat across elements; multiple classes are space-separated.",
    "demo": {
      "type": "css",
      "code": ".highlight { background: gold; }\n<p class=\"highlight note\">Styled paragraph</p>"
    }
  },
  {
    "id": "html-beginner-015",
    "question": "What does the lang attribute on <html> specify?",
    "options": [
      "Document language",
      "Text direction",
      "Country code only",
      "Character encoding"
    ],
    "correct": 0,
    "explanation": "lang helps screen readers and search engines know the primary language (e.g. lang=\"en\")."
  },
  {
    "id": "html-beginner-016",
    "question": "Which element represents the main navigation links?",
    "options": [
      "<links>",
      "<nav>",
      "<navigation>",
      "<menu>"
    ],
    "correct": 1,
    "explanation": "<nav> wraps major navigation blocks like site menus.",
    "demo": {
      "type": "html",
      "code": "<nav>\n  <a href=\"/\">Home</a>\n  <a href=\"/about\">About</a>\n</nav>"
    }
  },
  {
    "id": "html-beginner-017",
    "question": "Which element wraps the dominant content of the page?",
    "options": [
      "<body>",
      "<content>",
      "<article>",
      "<main>"
    ],
    "correct": 3,
    "explanation": "<main> should appear once per page and exclude repeated headers/footers."
  },
  {
    "id": "html-beginner-018",
    "question": "Site-wide footer content belongs in?",
    "options": [
      "<footer>",
      "<foot>",
      "<section>",
      "<bottom>"
    ],
    "correct": 0,
    "explanation": "<footer> holds footer info for its nearest sectioning ancestor or the page.",
    "demo": {
      "type": "html",
      "code": "<footer>\n  <p>&copy; 2026 Example Co.</p>\n</footer>"
    }
  },
  {
    "id": "html-beginner-019",
    "question": "Self-contained composition like a blog post uses?",
    "options": [
      "<section>",
      "<div>",
      "<post>",
      "<article>"
    ],
    "correct": 3,
    "explanation": "<article> is independent content that could stand alone in syndication."
  },
  {
    "id": "html-beginner-020",
    "question": "Thematic grouping within a document uses?",
    "options": [
      "<div>",
      "<group>",
      "<article>",
      "<section>"
    ],
    "correct": 3,
    "explanation": "<section> groups related content, usually with a heading."
  },
  {
    "id": "html-beginner-021",
    "question": "Introductory content or logo area often uses?",
    "options": [
      "<header>",
      "<top>",
      "<banner>",
      "<head>"
    ],
    "correct": 0,
    "explanation": "<header> is for introductory content for a page or section, not metadata."
  },
  {
    "id": "html-beginner-022",
    "question": "Which attribute provides advisory information on hover?",
    "options": [
      "alt",
      "label",
      "title",
      "tooltip"
    ],
    "correct": 2,
    "explanation": "title shows a native tooltip; do not rely on it for critical info."
  },
  {
    "id": "html-beginner-023",
    "question": "Which attribute is required on <img> for accessibility when image conveys info?",
    "options": [
      "src",
      "title",
      "alt",
      "desc"
    ],
    "correct": 2,
    "explanation": "alt describes the image for assistive tech and when images fail to load.",
    "demo": {
      "type": "html",
      "code": "<img src=\"cat.jpg\" alt=\"Orange cat sleeping on a windowsill\">",
      "preview": "[Image: Orange cat sleeping on a windowsill]"
    }
  },
  {
    "id": "html-beginner-024",
    "question": "Empty alt (alt=\"\") on decorative images means?",
    "options": [
      "Image has no src",
      "Assistive tech should ignore it",
      "Image is a link",
      "Image is broken"
    ],
    "correct": 1,
    "explanation": "Decorative images should have alt=\"\" so screen readers skip them."
  },
  {
    "id": "html-beginner-025",
    "question": "Which creates a hyperlink?",
    "options": [
      "<a href=\"url\">",
      "<link href=\"url\">",
      "<url>",
      "<href url=\"\">"
    ],
    "correct": 0,
    "explanation": "<a> with href creates clickable links; <link> is for document relationships in <head>.",
    "demo": {
      "type": "html",
      "code": "<a href=\"https://example.com\">Visit Example</a>"
    }
  },
  {
    "id": "html-beginner-026",
    "question": "Link that opens in a new browsing context uses?",
    "options": [
      "new=\"tab\"",
      "open=\"new\"",
      "target=\"_blank\"",
      "window=\"_blank\""
    ],
    "correct": 2,
    "explanation": "target=\"_blank\" opens a new tab/window; pair with rel=\"noopener\" for security on external links."
  },
  {
    "id": "html-beginner-027",
    "question": "Email link syntax is?",
    "options": [
      "<a mail=\"user@example.com\">",
      "<email>user@example.com</email>",
      "<a href=\"email:user@example.com\">",
      "<a href=\"mailto:user@example.com\">"
    ],
    "correct": 3,
    "explanation": "mailto: URIs launch the user's email client with the address prefilled."
  },
  {
    "id": "html-beginner-028",
    "question": "Which attribute specifies image file location?",
    "options": [
      "href",
      "src",
      "path",
      "link"
    ],
    "correct": 1,
    "explanation": "src on <img> points to the image resource URL or path."
  },
  {
    "id": "html-beginner-029",
    "question": "Unordered list uses which element?",
    "options": [
      "<ul>",
      "<ol>",
      "<dl>",
      "<list>"
    ],
    "correct": 0,
    "explanation": "<ul> renders bullet lists; order does not imply sequence.",
    "demo": {
      "type": "html",
      "code": "<ul>\n  <li>Apples</li>\n  <li>Oranges</li>\n</ul>"
    }
  },
  {
    "id": "html-beginner-030",
    "question": "Ordered list uses which element?",
    "options": [
      "<dl>",
      "<list>",
      "<ol>",
      "<ul>"
    ],
    "correct": 2,
    "explanation": "<ol> renders numbered lists where sequence matters.",
    "demo": {
      "type": "html",
      "code": "<ol>\n  <li>Preheat oven</li>\n  <li>Mix batter</li>\n  <li>Bake 30 min</li>\n</ol>"
    }
  },
  {
    "id": "html-beginner-031",
    "question": "List item element is?",
    "options": [
      "<list-item>",
      "<item>",
      "<entry>",
      "<li>"
    ],
    "correct": 3,
    "explanation": "<li> is the only valid direct child item in ul/ol (with minor exceptions)."
  },
  {
    "id": "html-beginner-032",
    "question": "Description list pairs terms with definitions using?",
    "options": [
      "<ul>, <li>",
      "<dl>, <dt>, <dd>",
      "<list>, <term>",
      "<table>, <td>"
    ],
    "correct": 1,
    "explanation": "<dl> contains <dt> (term) and <dd> (description) pairs."
  },
  {
    "id": "html-beginner-033",
    "question": "Table row element is?",
    "options": [
      "<tr>",
      "<table-row>",
      "<td>",
      "<row>"
    ],
    "correct": 0,
    "explanation": "<tr> groups table cells into rows inside <table>."
  },
  {
    "id": "html-beginner-034",
    "question": "Table data cell element is?",
    "options": [
      "<tr>",
      "<th>",
      "<cell>",
      "<td>"
    ],
    "correct": 3,
    "explanation": "<td> holds standard data cells; <th> is for header cells."
  },
  {
    "id": "html-beginner-035",
    "question": "Table header cell element is?",
    "options": [
      "<th>",
      "<td>",
      "<header>",
      "<thead>"
    ],
    "correct": 0,
    "explanation": "<th> marks header cells, often rendered bold and centered.",
    "demo": {
      "type": "html",
      "code": "<table>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Ada</td><td>36</td></tr>\n</table>"
    }
  },
  {
    "id": "html-beginner-036",
    "question": "Groups header rows in a table?",
    "options": [
      "<thead>",
      "<top>",
      "<header>",
      "<th>"
    ],
    "correct": 0,
    "explanation": "<thead> wraps header rows; <tbody> wraps body rows."
  },
  {
    "id": "html-beginner-037",
    "question": "Basic text input uses?",
    "options": [
      "<input type=\"input\">",
      "<input type=\"text\">",
      "<textfield>",
      "<text>"
    ],
    "correct": 1,
    "explanation": "<input> with type=\"text\" creates a single-line text field.",
    "demo": {
      "type": "html",
      "code": "<label for=\"name\">Name</label>\n<input id=\"name\" type=\"text\">"
    }
  },
  {
    "id": "html-beginner-038",
    "question": "Associating label with input requires?",
    "options": [
      "class matching",
      "name attribute only",
      "for/id matching or wrapping",
      "placeholder only"
    ],
    "correct": 2,
    "explanation": "<label for=\"id\"> paired with <input id=\"id\"> improves accessibility and click target size."
  },
  {
    "id": "html-beginner-039",
    "question": "Submit button in a form is created with?",
    "options": [
      "<submit>",
      "<button type=\"submit\"> or <input type=\"submit\">",
      "<button submit>",
      "<input type=\"button\">"
    ],
    "correct": 1,
    "explanation": "type=\"submit\" sends form data; type=\"button\" does not submit by default."
  },
  {
    "id": "html-beginner-040",
    "question": "Multi-line text input uses?",
    "options": [
      "<textarea>",
      "<input type=\"multiline\">",
      "<input type=\"textarea\">",
      "<text>"
    ],
    "correct": 0,
    "explanation": "<textarea> supports multiple lines; content can be placed between tags.",
    "demo": {
      "type": "html",
      "code": "<textarea rows=\"3\" placeholder=\"Your message\"></textarea>"
    }
  },
  {
    "id": "html-beginner-041",
    "question": "Dropdown selection list uses?",
    "options": [
      "<dropdown>",
      "<select> with <option>",
      "<list>",
      "<input type=\"select\">"
    ],
    "correct": 1,
    "explanation": "<select> contains <option> elements; <optgroup> groups options.",
    "demo": {
      "type": "html",
      "code": "<select name=\"color\">\n  <option value=\"red\">Red</option>\n  <option value=\"blue\">Blue</option>\n</select>"
    }
  },
  {
    "id": "html-beginner-042",
    "question": "Checkbox input type is?",
    "options": [
      "type=\"radio\"",
      "type=\"check\"",
      "type=\"checkbox\"",
      "type=\"toggle\""
    ],
    "correct": 2,
    "explanation": "Checkboxes allow multiple selections; radio buttons allow one per group.",
    "demo": {
      "type": "html",
      "code": "<label><input type=\"checkbox\" name=\"toppings\" value=\"cheese\"> Cheese</label>"
    }
  },
  {
    "id": "html-beginner-043",
    "question": "Radio buttons sharing a name attribute?",
    "options": [
      "Are all checked",
      "Must have same id",
      "Cannot be used in forms",
      "Are grouped; only one selectable"
    ],
    "correct": 3,
    "explanation": "Same name groups radios so selecting one deselects others in the group."
  },
  {
    "id": "html-beginner-044",
    "question": "Form data sent to server needs?",
    "options": [
      "action and method on <form>",
      "only <input> tags",
      "method=\"html\"",
      "JavaScript only"
    ],
    "correct": 0,
    "explanation": "action is the URL; method is usually GET or POST.",
    "demo": {
      "type": "html",
      "code": "<form action=\"/subscribe\" method=\"post\">\n  <input name=\"email\">\n  <button type=\"submit\">Join</button>\n</form>"
    }
  },
  {
    "id": "html-beginner-045",
    "question": "Placeholder attribute on input?",
    "options": [
      "Sets the label",
      "Is submitted as value",
      "Shows hint text when empty",
      "Replaces required"
    ],
    "correct": 2,
    "explanation": "Placeholder is a hint, not a label substitute; use <label> for accessibility."
  },
  {
    "id": "html-beginner-046",
    "question": "Character encoding is commonly set with?",
    "options": [
      "<charset>",
      "<encoding utf8>",
      "<meta encoding=\"UTF-8\">",
      "<meta charset=\"UTF-8\">"
    ],
    "correct": 3,
    "explanation": "UTF-8 meta in <head> ensures correct character rendering; place early in head.",
    "demo": {
      "type": "html",
      "code": "<head>\n  <meta charset=\"UTF-8\">\n</head>"
    }
  },
  {
    "id": "html-beginner-047",
    "question": "Viewport meta tag helps with?",
    "options": [
      "Font loading",
      "Responsive mobile layout",
      "Caching",
      "SEO keywords"
    ],
    "correct": 1,
    "explanation": "width=device-width, initial-scale=1 helps mobile browsers scale correctly.",
    "demo": {
      "type": "html",
      "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
    }
  },
  {
    "id": "html-beginner-048",
    "question": "Linking external CSS in head uses?",
    "options": [
      "<import href=\"...\">",
      "<css href=\"...\">",
      "<style src=\"...\">",
      "<link rel=\"stylesheet\" href=\"...\">"
    ],
    "correct": 3,
    "explanation": "<link rel=\"stylesheet\"> loads external stylesheets.",
    "demo": {
      "type": "html",
      "code": "<link rel=\"stylesheet\" href=\"/styles/main.css\">"
    }
  },
  {
    "id": "html-beginner-049",
    "question": "Inline CSS in HTML uses?",
    "options": [
      "class only",
      "<style> in head or style attribute",
      "<script type=\"css\">",
      "<css> tag"
    ],
    "correct": 1,
    "explanation": "Prefer external CSS; <style> blocks and style=\"\" are for small cases."
  },
  {
    "id": "html-beginner-050",
    "question": "Strong importance (not just bold) uses?",
    "options": [
      "<bold>",
      "<b>",
      "<strong>",
      "<important>"
    ],
    "correct": 2,
    "explanation": "<strong> conveys semantic importance; <b> is stylistic bold without extra meaning."
  },
  {
    "id": "html-beginner-051",
    "question": "Emphasized stress uses?",
    "options": [
      "<i>",
      "<em>",
      "<stress>",
      "<italic>"
    ],
    "correct": 1,
    "explanation": "<em> indicates emphasis; <i> is for alternate voice/mood without stress."
  },
  {
    "id": "html-beginner-052",
    "question": "Abbreviation with optional expansion uses?",
    "options": [
      "<abbr title=\"...\">",
      "<short>",
      "<acronym>",
      "<abbrev>"
    ],
    "correct": 0,
    "explanation": "<abbr title=\"HyperText Markup Language\">HTML</abbr> exposes expansion on hover and to assistive tech.",
    "demo": {
      "type": "html",
      "code": "<abbr title=\"HyperText Markup Language\">HTML</abbr>"
    }
  },
  {
    "id": "html-beginner-053",
    "question": "Which is valid nesting?",
    "options": [
      "<ul><p><li>item</li></p></ul>",
      "<a><a>link</a></a>",
      "<p><div>text</div></p>",
      "<p>Text <strong>bold</strong></p>"
    ],
    "correct": 3,
    "explanation": "Block elements like <div> cannot go inside <p>; anchors cannot nest."
  },
  {
    "id": "html-beginner-054",
    "question": "Comment syntax in HTML is?",
    "options": [
      "/* comment */",
      "// comment",
      "<!-- comment -->",
      "# comment"
    ],
    "correct": 2,
    "explanation": "HTML comments use <!-- --> and are not rendered."
  },
  {
    "id": "html-beginner-055",
    "question": "Which attribute makes a field mandatory?",
    "options": [
      "mandatory",
      "required",
      "must",
      "validate"
    ],
    "correct": 1,
    "explanation": "required triggers browser validation before submit; still add server-side checks.",
    "demo": {
      "type": "html",
      "code": "<input type=\"email\" required>"
    }
  },
  {
    "id": "html-beginner-056",
    "question": "disabled attribute on input means?",
    "options": [
      "Field cannot be edited or submitted",
      "Field is hidden",
      "Field is optional",
      "Field is readonly"
    ],
    "correct": 0,
    "explanation": "Disabled controls are skipped in form submission and not focusable."
  },
  {
    "id": "html-beginner-057",
    "question": "readonly allows?",
    "options": [
      "Hidden from users",
      "View and focus but not edit",
      "Submit without value",
      "No interaction at all"
    ],
    "correct": 1,
    "explanation": "readonly fields are submitted; disabled fields are not."
  },
  {
    "id": "html-beginner-058",
    "question": "Hidden input type is used for?",
    "options": [
      "Removing labels",
      "Sending data not shown to user",
      "Password fields",
      "Hiding the whole form"
    ],
    "correct": 1,
    "explanation": "type=\"hidden\" carries data like CSRF tokens without UI.",
    "demo": {
      "type": "html",
      "code": "<input type=\"hidden\" name=\"csrf\" value=\"abc123\">"
    }
  },
  {
    "id": "html-beginner-059",
    "question": "Password fields use type?",
    "options": [
      "text",
      "secret",
      "hidden",
      "password"
    ],
    "correct": 3,
    "explanation": "type=\"password\" masks characters; does not encrypt data in transit—use HTTPS."
  },
  {
    "id": "html-beginner-060",
    "question": "Number input type provides?",
    "options": [
      "Phone formatting",
      "Currency only",
      "Calculator widget",
      "Numeric spinner and validation"
    ],
    "correct": 3,
    "explanation": "type=\"number\" accepts numbers; use inputmode and pattern for finer control."
  },
  {
    "id": "html-beginner-061",
    "question": "Date picker input uses type?",
    "options": [
      "date",
      "datetime",
      "timepicker",
      "calendar"
    ],
    "correct": 0,
    "explanation": "type=\"date\" shows a native date picker in supporting browsers."
  },
  {
    "id": "html-beginner-062",
    "question": "File upload input uses type?",
    "options": [
      "upload",
      "file",
      "binary",
      "attachment"
    ],
    "correct": 1,
    "explanation": "type=\"file\" lets users choose files; use enctype=\"multipart/form-data\" on form."
  },
  {
    "id": "html-beginner-063",
    "question": "Button that resets form fields?",
    "options": [
      "type=\"cancel\"",
      "type=\"clear\"",
      "type=\"reset\"",
      "type=\"undo\""
    ],
    "correct": 2,
    "explanation": "Reset restores defaults; rarely used in modern UX."
  },
  {
    "id": "html-beginner-064",
    "question": "Semantic quote block uses?",
    "options": [
      "<quote>",
      "<q block>",
      "<blockquote>",
      "<cite>"
    ],
    "correct": 2,
    "explanation": "<blockquote> is for block quotations; <q> is inline.",
    "demo": {
      "type": "html",
      "code": "<blockquote cite=\"https://example.com\">\n  <p>Design is intelligence made visible.</p>\n</blockquote>"
    }
  },
  {
    "id": "html-beginner-065",
    "question": "Inline short quotation uses?",
    "options": [
      "<span quote>",
      "<blockquote>",
      "<quote>",
      "<q>"
    ],
    "correct": 3,
    "explanation": "<q> wraps inline quotes; browsers may add quotation marks."
  },
  {
    "id": "html-beginner-066",
    "question": "Code snippet inline uses?",
    "options": [
      "<snippet>",
      "<code>",
      "<script>",
      "<pre>"
    ],
    "correct": 1,
    "explanation": "<code> is for short code fragments; <pre> preserves formatting for blocks.",
    "demo": {
      "type": "html",
      "code": "<p>Use the <code>console.log()</code> method.</p>"
    }
  },
  {
    "id": "html-beginner-067",
    "question": "Preformatted text preserving whitespace?",
    "options": [
      "<preserve>",
      "<code>",
      "<pre>",
      "<text>"
    ],
    "correct": 2,
    "explanation": "<pre> keeps spaces and line breaks; often pairs with <code>.",
    "demo": {
      "type": "html",
      "code": "<pre>\n  indent\n    nested\n</pre>"
    }
  },
  {
    "id": "html-beginner-068",
    "question": "Keyboard input representation uses?",
    "options": [
      "<input>",
      "<kbd>",
      "<keyboard>",
      "<key>"
    ],
    "correct": 1,
    "explanation": "<kbd> marks user input like Ctrl+C."
  },
  {
    "id": "html-beginner-069",
    "question": "Mark/highlight text uses?",
    "options": [
      "<mark>",
      "<highlight>",
      "<em>",
      "<yellow>"
    ],
    "correct": 0,
    "explanation": "<mark> highlights text for reference, like search matches."
  },
  {
    "id": "html-beginner-070",
    "question": "Subscript text uses?",
    "options": [
      "<small>",
      "<bottom>",
      "<sub>",
      "<subscript>"
    ],
    "correct": 2,
    "explanation": "H₂O uses <sub> for the 2; <sup> for superscript."
  },
  {
    "id": "html-beginner-071",
    "question": "Superscript text uses?",
    "options": [
      "<super>",
      "<sup>",
      "<exp>",
      "<top>"
    ],
    "correct": 1,
    "explanation": "E=mc<sup>2</sup> uses superscript for the exponent."
  },
  {
    "id": "html-beginner-072",
    "question": "Line-through deleted text uses?",
    "options": [
      "<strike>",
      "<s> only",
      "<remove>",
      "<del>"
    ],
    "correct": 3,
    "explanation": "<del> shows removed content; pair with <ins> for edits."
  },
  {
    "id": "html-beginner-073",
    "question": "Inserted text uses?",
    "options": [
      "<new>",
      "<add>",
      "<ins>",
      "<insert>"
    ],
    "correct": 2,
    "explanation": "<ins> marks additions in revision history."
  },
  {
    "id": "html-beginner-074",
    "question": "Horizontal grouping of table columns?",
    "options": [
      "<group>",
      "<columns>",
      "<colgroup> and <col>",
      "<thead>"
    ],
    "correct": 2,
    "explanation": "<colgroup> applies styles or spans to columns.",
    "demo": {
      "type": "html",
      "code": "<table>\n  <colgroup>\n    <col span=\"2\" style=\"background:#f0f0f0\">\n  </colgroup>\n  ...\n</table>"
    }
  },
  {
    "id": "html-beginner-075",
    "question": "Table caption describes?",
    "options": [
      "<title> inside table",
      "alt on table",
      "<caption> as first child of <table>",
      "summary attribute only"
    ],
    "correct": 2,
    "explanation": "<caption> gives the table an accessible name visible to all users."
  },
  {
    "id": "html-beginner-076",
    "question": "Skip navigation link helps?",
    "options": [
      "Keyboard users bypass repetitive nav",
      "Image loading",
      "Mobile layout",
      "SEO ranking"
    ],
    "correct": 0,
    "explanation": "Skip links let users jump to main content, improving accessibility.",
    "demo": {
      "type": "html",
      "code": "<a href=\"#main\" class=\"skip-link\">Skip to main content</a>\n<main id=\"main\">...</main>"
    }
  },
  {
    "id": "html-beginner-077",
    "question": "Tab order follows?",
    "options": [
      "Random focus",
      "Alphabetical ids",
      "Visual layout only",
      "DOM order unless tabindex changes it"
    ],
    "correct": 3,
    "explanation": "Keep logical DOM order; avoid positive tabindex values."
  },
  {
    "id": "html-beginner-078",
    "question": "Which improves link accessibility?",
    "options": [
      "Empty href",
      "Read more everywhere",
      "Click here",
      "Descriptive link text"
    ],
    "correct": 3,
    "explanation": "Link text should describe destination; avoid vague \"click here\"."
  },
  {
    "id": "html-beginner-079",
    "question": "Headings should?",
    "options": [
      "Always use h1 only",
      "Skip from h1 to h4",
      "Follow logical hierarchy without skipping levels",
      "Be chosen for size only"
    ],
    "correct": 2,
    "explanation": "Do not skip levels (h1→h3) without reason; structure aids screen readers.",
    "demo": {
      "type": "html",
      "code": "<h1>Page title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>"
    }
  },
  {
    "id": "html-beginner-080",
    "question": "Which element is NOT valid in <head>?",
    "options": [
      "<div>",
      "<meta>",
      "<link>",
      "<title>"
    ],
    "correct": 0,
    "explanation": "<head> holds metadata; visible content belongs in <body>."
  },
  {
    "id": "html-beginner-081",
    "question": "Favicon is linked with?",
    "options": [
      "<img rel=\"icon\">",
      "<meta icon=\"...\">",
      "<icon src=\"...\">",
      "<link rel=\"icon\" href=\"favicon.ico\">"
    ],
    "correct": 3,
    "explanation": "Browsers look for rel=\"icon\" in head for tab icons."
  },
  {
    "id": "html-beginner-082",
    "question": "Default method if form method omitted?",
    "options": [
      "PUT",
      "SEND",
      "GET",
      "POST"
    ],
    "correct": 2,
    "explanation": "Forms default to GET, appending data to the URL query string."
  },
  {
    "id": "html-beginner-083",
    "question": "name attribute on form control?",
    "options": [
      "Is CSS selector only",
      "Sets label text",
      "Identifies field in submitted data",
      "Must equal id"
    ],
    "correct": 2,
    "explanation": "Server receives name=value pairs; id is for document references."
  },
  {
    "id": "html-beginner-084",
    "question": "value attribute on button/input?",
    "options": [
      "Sets submitted or displayed default",
      "Hides the field",
      "Is required on all inputs",
      "Replaces label"
    ],
    "correct": 0,
    "explanation": "value is the data sent or the button label depending on element."
  },
  {
    "id": "html-beginner-085",
    "question": "Which wraps related form controls with a legend?",
    "options": [
      "<group>",
      "<fieldset>",
      "<section>",
      "<form-group>"
    ],
    "correct": 1,
    "explanation": "<fieldset> groups controls; <legend> names the group for assistive tech.",
    "demo": {
      "type": "html",
      "code": "<fieldset>\n  <legend>Shipping address</legend>\n  <input type=\"text\" name=\"street\">\n</fieldset>"
    }
  },
  {
    "id": "html-beginner-086",
    "question": "autocomplete=\"off\" on input?",
    "options": [
      "Encrypts value",
      "Disables validation",
      "Hides field",
      "Hints browser not to autofill"
    ],
    "correct": 3,
    "explanation": "Use sparingly; disabling autocomplete can hurt UX on legitimate forms."
  },
  {
    "id": "html-beginner-087",
    "question": "Opening link in same tab is default when?",
    "options": [
      "href missing",
      "rel=\"noopener\"",
      "target omitted or target=\"_self\"",
      "target=\"_blank\""
    ],
    "correct": 2,
    "explanation": "Default target is _self (same browsing context)."
  },
  {
    "id": "html-beginner-088",
    "question": "Relative URL href=\"about.html\" from /docs/page.html resolves to?",
    "options": [
      "/docs/about.html",
      "/page/about.html",
      "/about.html",
      "about.html only as string"
    ],
    "correct": 0,
    "explanation": "Relative paths resolve against the current document URL directory."
  },
  {
    "id": "html-beginner-089",
    "question": "Absolute URL starts with?",
    "options": [
      "#",
      "scheme like https://",
      "only /",
      "./"
    ],
    "correct": 1,
    "explanation": "Absolute URLs include protocol and host, e.g. https://example.com/path."
  },
  {
    "id": "html-beginner-090",
    "question": "Fragment identifier links to?",
    "options": [
      "Top of external site only",
      "Element with matching id",
      "Class name",
      "Any name attribute"
    ],
    "correct": 1,
    "explanation": "href=\"#section\" jumps to id=\"section\" on the same page.",
    "demo": {
      "type": "html",
      "code": "<a href=\"#faq\">Jump to FAQ</a>\n...\n<section id=\"faq\">FAQ content</section>"
    }
  },
  {
    "id": "html-beginner-091",
    "question": "Which is best for screen reader page structure?",
    "options": [
      "Tables for layout",
      "Images without alt",
      "Landmarks like main, nav, header",
      "div with no labels"
    ],
    "correct": 2,
    "explanation": "Semantic landmarks help users navigate by region."
  },
  {
    "id": "html-beginner-092",
    "question": "alt text for informative chart should?",
    "options": [
      "Say \"chart\" only",
      "Be omitted",
      "Repeat filename",
      "Describe the data insight"
    ],
    "correct": 3,
    "explanation": "Alt should convey the same information the image communicates."
  },
  {
    "id": "html-beginner-093",
    "question": "Multiple classes on one element?",
    "options": [
      "class=\"a b c\" space-separated",
      "class=\"a,b,c\"",
      "Only one class allowed",
      "Use multiple class attributes"
    ],
    "correct": 0,
    "explanation": "Separate class names with spaces in a single class attribute."
  },
  {
    "id": "html-beginner-094",
    "question": "Boolean attribute checked on checkbox means?",
    "options": [
      "Cannot be toggled",
      "Requires value=\"true\"",
      "Presence means true; omit for false",
      "Must be checked=\"yes\""
    ],
    "correct": 2,
    "explanation": "Boolean attributes like checked, disabled, required are true when present."
  },
  {
    "id": "html-beginner-095",
    "question": "Which element embeds JavaScript in HTML?",
    "options": [
      "<javascript>",
      "<js>",
      "<code type=\"js\">",
      "<script>"
    ],
    "correct": 3,
    "explanation": "<script> loads or embeds JavaScript; place defer/async for external scripts as needed."
  },
  {
    "id": "html-beginner-096",
    "question": "noscript element provides?",
    "options": [
      "No-JS error message only in console",
      "Content when scripting disabled/unsupported",
      "Alternative CSS",
      "Hidden SEO text"
    ],
    "correct": 1,
    "explanation": "<noscript> shows fallback content for non-JS environments."
  },
  {
    "id": "html-beginner-097",
    "question": "Correct way to include special character < in text?",
    "options": [
      "&lt; or &#60;",
      "<special>",
      "< escaped alone",
      "Cannot be displayed"
    ],
    "correct": 0,
    "explanation": "Use character references for <, >, &, and quotes in HTML text."
  },
  {
    "id": "html-beginner-098",
    "question": "Whitespace between inline elements?",
    "options": [
      "Removed entirely",
      "Preserves all spaces always",
      "Creates line breaks",
      "Collapses to single space in rendering"
    ],
    "correct": 3,
    "explanation": "HTML collapses consecutive whitespace in normal text flow."
  },
  {
    "id": "html-beginner-099",
    "question": "Block elements by default?",
    "options": [
      "Flow inline only",
      "Cannot have margins",
      "Cannot contain text",
      "Start on new line and span full width"
    ],
    "correct": 3,
    "explanation": "Block boxes stack vertically; inline boxes flow horizontally."
  },
  {
    "id": "html-beginner-100",
    "question": "Valid HTML document minimum structure?",
    "options": [
      "<html><body> only",
      "<head><body>",
      "<!DOCTYPE html><html><head><title></title></head><body></body></html>",
      "<!DOCTYPE><body>"
    ],
    "correct": 2,
    "explanation": "Include DOCTYPE, html with lang, head with title, and body for valid baseline structure.",
    "demo": {
      "type": "html",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Valid</title></head>\n<body></body>\n</html>"
    }
  }
];

const INTERMEDIATE = [
  {
    "id": "html-intermediate-001",
    "question": "Which HTML5 element represents standalone syndicatable content?",
    "options": [
      "<aside>",
      "<section>",
      "<div>",
      "<article>"
    ],
    "correct": 3,
    "explanation": "<article> is self-contained—blog posts, news items, forum posts."
  },
  {
    "id": "html-intermediate-002",
    "question": "<aside> typically contains?",
    "options": [
      "Main article body",
      "Tangentially related content",
      "Footer legal only",
      "Primary navigation"
    ],
    "correct": 1,
    "explanation": "Sidebars, pull quotes, and related links often live in <aside>."
  },
  {
    "id": "html-intermediate-003",
    "question": "<figure> with <figcaption> is used for?",
    "options": [
      "Self-contained media with caption",
      "Form groups",
      "Table legends",
      "Any image only"
    ],
    "correct": 0,
    "explanation": "Figures group media and optional caption; can include charts, code, images.",
    "demo": {
      "type": "html",
      "code": "<figure>\n  <img src=\"chart.png\" alt=\"Sales rose 20%\">\n  <figcaption>Q2 revenue chart</figcaption>\n</figure>"
    }
  },
  {
    "id": "html-intermediate-004",
    "question": "<time datetime=\"2026-06-30\"> marks?",
    "options": [
      "CSS animation delay",
      "Countdown timer",
      "Timezone only",
      "Machine-readable date/time"
    ],
    "correct": 3,
    "explanation": "datetime provides ISO format for parsers; visible text can be human-friendly.",
    "demo": {
      "type": "html",
      "code": "<time datetime=\"2026-06-30\">June 30, 2026</time>"
    }
  },
  {
    "id": "html-intermediate-005",
    "question": "<mark> differs from <strong> because?",
    "options": [
      "Is block-level",
      "Is always bold",
      "Highlights for reference, not importance",
      "Is deprecated"
    ],
    "correct": 2,
    "explanation": "<mark> highlights relevant text in context like search hits."
  },
  {
    "id": "html-intermediate-006",
    "question": "<details> and <summary> create?",
    "options": [
      "Native disclosure widget",
      "Modal dialog",
      "Tooltip",
      "Accordion requiring JS"
    ],
    "correct": 0,
    "explanation": "Clicking <summary> toggles visibility of sibling content in <details>.",
    "demo": {
      "type": "html",
      "code": "<details>\n  <summary>More info</summary>\n  <p>Hidden until expanded.</p>\n</details>"
    }
  },
  {
    "id": "html-intermediate-007",
    "question": "<dialog> element provides?",
    "options": [
      "iframe replacement",
      "Native modal/dialog semantics",
      "Video overlay",
      "Alert only via JS"
    ],
    "correct": 1,
    "explanation": "dialog supports showModal(), ::backdrop, and focus trapping in supporting browsers."
  },
  {
    "id": "html-intermediate-008",
    "question": "<progress> element shows?",
    "options": [
      "Download speed only",
      "Spinner animation",
      "Task completion progress",
      "Form validity"
    ],
    "correct": 2,
    "explanation": "Use value and max attributes; for indeterminate loading prefer aria-busy patterns.",
    "demo": {
      "type": "html",
      "code": "<progress value=\"70\" max=\"100\">70%</progress>"
    }
  },
  {
    "id": "html-intermediate-009",
    "question": "<meter> represents?",
    "options": [
      "Loading bar",
      "Video buffer",
      "Scalar measurement within range",
      "Any percentage"
    ],
    "correct": 2,
    "explanation": "<meter> is for known ranges like disk usage; not for progress of tasks."
  },
  {
    "id": "html-intermediate-010",
    "question": "Which is phrasing content, not flow content only?",
    "options": [
      "<article>",
      "<div>",
      "<a>",
      "<section>"
    ],
    "correct": 2,
    "explanation": "<a> can contain phrasing content when href is present; model rules restrict nesting."
  },
  {
    "id": "html-intermediate-011",
    "question": "pattern attribute on input?",
    "options": [
      "Visual input mask",
      "CSS pattern",
      "Regex the value must match",
      "Server route"
    ],
    "correct": 2,
    "explanation": "pattern works with type text-like inputs; message via title often helps users.",
    "demo": {
      "type": "html",
      "code": "<input type=\"text\" pattern=\"[A-Z]{3}-[0-9]{3}\" title=\"Format: ABC-123\">"
    }
  },
  {
    "id": "html-intermediate-012",
    "question": "minlength and maxlength validate?",
    "options": [
      "Password strength",
      "File size",
      "Numeric range",
      "String length of value"
    ],
    "correct": 3,
    "explanation": "Length constraints apply to text, search, password, tel, url, email, etc."
  },
  {
    "id": "html-intermediate-013",
    "question": "min and max on type=\"number\"?",
    "options": [
      "Step size only",
      "Bound numeric value",
      "Date timezone",
      "Character count"
    ],
    "correct": 1,
    "explanation": "Pair with step for increment validation on numeric/date/time inputs."
  },
  {
    "id": "html-intermediate-014",
    "question": "step attribute on number input?",
    "options": [
      "Tab order",
      "Animation speed",
      "Valid increment between min/max",
      "Decimal places forced"
    ],
    "correct": 2,
    "explanation": "step=\"0.01\" allows cents; step=\"any\" allows any decimal."
  },
  {
    "id": "html-intermediate-015",
    "question": "multiple attribute on file input allows?",
    "options": [
      "Duplicate names",
      "Auto upload",
      "Multiple forms",
      "Selecting more than one file"
    ],
    "correct": 3,
    "explanation": "multiple on file and email inputs accepts several values.",
    "demo": {
      "type": "html",
      "code": "<input type=\"file\" name=\"photos\" multiple accept=\"image/*\">"
    }
  },
  {
    "id": "html-intermediate-016",
    "question": "accept attribute on file input?",
    "options": [
      "Hints allowed MIME types/extensions",
      "Max file count",
      "Virus scan",
      "Server validation"
    ],
    "correct": 0,
    "explanation": "accept=\".pdf,image/*\" filters picker; server must still validate."
  },
  {
    "id": "html-intermediate-017",
    "question": "formnovalidate on submit button?",
    "options": [
      "Disables whole form",
      "Skips validation for that submit",
      "Bypasses HTTPS",
      "Removes required"
    ],
    "correct": 1,
    "explanation": "Useful for \"save draft\" buttons that should not trigger constraint validation."
  },
  {
    "id": "html-intermediate-018",
    "question": "novalidate on form element?",
    "options": [
      "Removes labels",
      "Disables server validation",
      "Disables client-side validation on submit",
      "Blocks POST"
    ],
    "correct": 2,
    "explanation": "Server-side validation remains mandatory; novalidate only affects browser checks.",
    "demo": {
      "type": "html",
      "code": "<form novalidate action=\"/api/save\">\n  <input required>\n</form>"
    }
  },
  {
    "id": "html-intermediate-019",
    "question": "inputmode attribute purpose?",
    "options": [
      "Encryption mode",
      "Autocomplete off",
      "Regex validation",
      "Virtual keyboard hint on mobile"
    ],
    "correct": 3,
    "explanation": "inputmode=\"numeric\" suggests numeric keyboard without changing input type."
  },
  {
    "id": "html-intermediate-020",
    "question": "autocomplete attribute values like \"email\"?",
    "options": [
      "Token guiding browser autofill",
      "JS validator name",
      "Required field marker",
      "Regex pattern"
    ],
    "correct": 0,
    "explanation": "Use spec tokens (name, street-address) for meaningful autofill behavior.",
    "demo": {
      "type": "html",
      "code": "<input type=\"email\" name=\"email\" autocomplete=\"email\">"
    }
  },
  {
    "id": "html-intermediate-021",
    "question": "<video> requires what for broad compatibility?",
    "options": [
      "JavaScript autoplay",
      "type=\"mp4\" only",
      "Flash fallback",
      "<source> elements or src with codecs"
    ],
    "correct": 3,
    "explanation": "Multiple <source> types let browsers pick supported codecs.",
    "demo": {
      "type": "html",
      "code": "<video controls width=\"320\">\n  <source src=\"clip.webm\" type=\"video/webm\">\n  <source src=\"clip.mp4\" type=\"video/mp4\">\n</video>"
    }
  },
  {
    "id": "html-intermediate-022",
    "question": "controls attribute on video/audio?",
    "options": [
      "Enables autoplay",
      "Adds captions",
      "Shows native playback UI",
      "Loops media"
    ],
    "correct": 2,
    "explanation": "Without controls, media plays without default browser chrome unless custom UI is built."
  },
  {
    "id": "html-intermediate-023",
    "question": "poster attribute on video sets?",
    "options": [
      "End screen",
      "Subtitle file",
      "Thumbnail before playback",
      "DRM key"
    ],
    "correct": 2,
    "explanation": "poster is an image URL shown until the user plays the video."
  },
  {
    "id": "html-intermediate-024",
    "question": "preload on media element?",
    "options": [
      "CDN priority",
      "Lazy loads on scroll",
      "Forces full download",
      "Hints how much to buffer"
    ],
    "correct": 3,
    "explanation": "Values: none, metadata, auto—balance UX and bandwidth."
  },
  {
    "id": "html-intermediate-025",
    "question": "<track kind=\"captions\"> provides?",
    "options": [
      "Chapter markers only",
      "Thumbnail sprites",
      "DRM",
      "Timed text captions for video/audio"
    ],
    "correct": 3,
    "explanation": "kind can be subtitles, captions, descriptions, chapters, or metadata.",
    "demo": {
      "type": "html",
      "code": "<video controls src=\"clip.mp4\">\n  <track kind=\"captions\" src=\"en.vtt\" srclang=\"en\" label=\"English\">\n</video>"
    }
  },
  {
    "id": "html-intermediate-026",
    "question": "muted attribute on autoplay video often needed because?",
    "options": [
      "Required for captions",
      "Improves SEO",
      "Browsers block unmuted autoplay",
      "Enables fullscreen"
    ],
    "correct": 2,
    "explanation": "Autoplay policies generally require muted autoplay without user gesture."
  },
  {
    "id": "html-intermediate-027",
    "question": "playsinline on mobile video prevents?",
    "options": [
      "Autoplay entirely",
      "Forced fullscreen on iOS",
      "Looping",
      "Picture-in-picture"
    ],
    "correct": 1,
    "explanation": "playsinline keeps inline playback instead of native fullscreen takeover."
  },
  {
    "id": "html-intermediate-028",
    "question": "<iframe> sandbox attribute?",
    "options": [
      "Enables all features",
      "Restricts capabilities of embedded doc",
      "SEO noindex",
      "Blocks rendering"
    ],
    "correct": 1,
    "explanation": "sandbox tokens like allow-scripts allow-same-origin tighten security for untrusted embeds.",
    "demo": {
      "type": "html",
      "code": "<iframe sandbox=\"allow-scripts\" src=\"widget.html\" title=\"Widget\"></iframe>"
    }
  },
  {
    "id": "html-intermediate-029",
    "question": "iframe loading=\"lazy\" defers loading until?",
    "options": [
      "Near viewport (browser-dependent)",
      "User click only",
      "Script ready",
      "Page unload"
    ],
    "correct": 0,
    "explanation": "Lazy iframes reduce initial load cost for below-fold embeds."
  },
  {
    "id": "html-intermediate-030",
    "question": "referrerpolicy on iframe controls?",
    "options": [
      "Referer header sent on navigation",
      "Cookie access",
      "Cache TTL",
      "CSP rules"
    ],
    "correct": 0,
    "explanation": "Values like no-referrer or strict-origin-when-cross-origin limit referrer leakage."
  },
  {
    "id": "html-intermediate-031",
    "question": "allow attribute on iframe (Permissions Policy)?",
    "options": [
      "CSS permissions",
      "CORS headers",
      "Feature allowlist for embed",
      "Sandbox escape"
    ],
    "correct": 2,
    "explanation": "allow=\"fullscreen; geolocation\" grants feature access to embedded content."
  },
  {
    "id": "html-intermediate-032",
    "question": "data-* attributes are for?",
    "options": [
      "ARIA replacement",
      "CSS id replacement",
      "Global SEO keywords",
      "Custom private data for scripts"
    ],
    "correct": 3,
    "explanation": "data-user-id=\"42\" is accessed via dataset; keep private to page logic.",
    "demo": {
      "type": "html",
      "code": "<button data-action=\"save\" data-id=\"7\">Save</button>"
    }
  },
  {
    "id": "html-intermediate-033",
    "question": "Accessing data-order-id in JS uses?",
    "options": [
      "element.getData(\"order-id\")",
      "element.dataset.orderId",
      "element.attributes.orderId",
      "element.data.order-id"
    ],
    "correct": 1,
    "explanation": "dataset camelCases names after data- prefix; values are strings."
  },
  {
    "id": "html-intermediate-034",
    "question": "ARIA role=\"navigation\" on nav is?",
    "options": [
      "Redundant if native <nav> used",
      "Hides from screen readers",
      "Replaces href",
      "Always required"
    ],
    "correct": 0,
    "explanation": "Prefer native elements; role duplicates native semantics only when necessary."
  },
  {
    "id": "html-intermediate-035",
    "question": "aria-label provides?",
    "options": [
      "CSS tooltip",
      "Tab index",
      "Accessible name when visible label absent",
      "Language tag"
    ],
    "correct": 2,
    "explanation": "Use on icon buttons: aria-label=\"Close dialog\".",
    "demo": {
      "type": "html",
      "code": "<button aria-label=\"Close dialog\">&times;</button>"
    }
  },
  {
    "id": "html-intermediate-036",
    "question": "aria-labelledby references?",
    "options": [
      "href targets",
      "CSS classes",
      "IDs of elements naming this one",
      "Form action"
    ],
    "correct": 2,
    "explanation": "Prefer visible text via aria-labelledby over aria-label when possible."
  },
  {
    "id": "html-intermediate-037",
    "question": "aria-describedby attaches?",
    "options": [
      "Live region only",
      "Heading level",
      "Error styles",
      "Extra descriptive text by id reference"
    ],
    "correct": 3,
    "explanation": "Help text and error messages can be linked for screen readers.",
    "demo": {
      "type": "html",
      "code": "<input id=\"pwd\" aria-describedby=\"pwd-hint\">\n<p id=\"pwd-hint\">At least 12 characters.</p>"
    }
  },
  {
    "id": "html-intermediate-038",
    "question": "aria-hidden=\"true\" means?",
    "options": [
      "Removed from DOM",
      "Visually hidden",
      "Excluded from accessibility tree",
      "Low contrast"
    ],
    "correct": 2,
    "explanation": "Hide decorative icons from AT; never hide focusable or essential content."
  },
  {
    "id": "html-intermediate-039",
    "question": "role=\"button\" on div requires?",
    "options": [
      "type=\"button\"",
      "Automatic click",
      "href attribute",
      "tabindex=\"0\" and keyboard handlers"
    ],
    "correct": 3,
    "explanation": "Custom widgets must replicate keyboard and focus behavior of native controls."
  },
  {
    "id": "html-intermediate-040",
    "question": "aria-live=\"polite\" regions announce?",
    "options": [
      "Instantly interrupt always",
      "Never announce",
      "Updates when user is idle",
      "Only errors"
    ],
    "correct": 2,
    "explanation": "Use polite for status messages; assertive for urgent alerts sparingly.",
    "demo": {
      "type": "html",
      "code": "<div aria-live=\"polite\" id=\"status\"></div>"
    }
  },
  {
    "id": "html-intermediate-041",
    "question": "aria-expanded on accordion button indicates?",
    "options": [
      "Video playing",
      "Page load state",
      "Whether controlled panel is open",
      "Form validity"
    ],
    "correct": 2,
    "explanation": "Toggle aria-expanded true/false when panel opens/closes.",
    "demo": {
      "type": "html",
      "code": "<button aria-expanded=\"false\" aria-controls=\"panel1\">Toggle</button>\n<div id=\"panel1\" hidden>Panel</div>"
    }
  },
  {
    "id": "html-intermediate-042",
    "question": "aria-current=\"page\" on nav link marks?",
    "options": [
      "External link",
      "Download link",
      "Disabled item",
      "Active page in set"
    ],
    "correct": 3,
    "explanation": "Helps assistive tech identify current location in navigation."
  },
  {
    "id": "html-intermediate-043",
    "question": "Document outline with multiple h1s in HTML5?",
    "options": [
      "Allowed per sectioning roots; use thoughtfully",
      "Requires only one per site",
      "Always invalid",
      "Forbidden in article"
    ],
    "correct": 0,
    "explanation": "Modern outline ties headings to sections; maintain logical structure regardless."
  },
  {
    "id": "html-intermediate-044",
    "question": "Sectioning content elements include?",
    "options": [
      "article, aside, nav, section",
      "header, footer only",
      "div, span, main only",
      "table, ul"
    ],
    "correct": 0,
    "explanation": "Sectioning elements create new outline sections; header/footer are not sectioning roots."
  },
  {
    "id": "html-intermediate-045",
    "question": "Heading inside section should?",
    "options": [
      "Match site logo",
      "Be h1 always",
      "Introduce that section topic",
      "Replace title tag"
    ],
    "correct": 2,
    "explanation": "Each major section typically starts with an appropriate heading level."
  },
  {
    "id": "html-intermediate-046",
    "question": "meta name=\"description\" affects?",
    "options": [
      "Charset",
      "Search snippet text often",
      "Viewport size",
      "Rankings directly guaranteed"
    ],
    "correct": 1,
    "explanation": "Compelling descriptions improve click-through; not a direct ranking lever alone.",
    "demo": {
      "type": "html",
      "code": "<meta name=\"description\" content=\"Learn HTML semantics and forms.\">"
    }
  },
  {
    "id": "html-intermediate-047",
    "question": "rel=\"canonical\" link indicates?",
    "options": [
      "Stylesheet",
      "Author",
      "Next page",
      "Preferred URL for duplicate content"
    ],
    "correct": 3,
    "explanation": "Canonical consolidates SEO signals to one URL.",
    "demo": {
      "type": "html",
      "code": "<link rel=\"canonical\" href=\"https://example.com/article\">"
    }
  },
  {
    "id": "html-intermediate-048",
    "question": "Open Graph meta og:title is for?",
    "options": [
      "Sitemap",
      "RSS feed",
      "Browser tab title only",
      "Social share preview title"
    ],
    "correct": 3,
    "explanation": "OG tags shape previews on Facebook, Slack, etc."
  },
  {
    "id": "html-intermediate-049",
    "question": "meta robots noindex means?",
    "options": [
      "Block JavaScript",
      "Ask crawlers not to index page",
      "Hide from users",
      "Delete from CDN"
    ],
    "correct": 1,
    "explanation": "noindex is a hint; use HTTP headers or auth for sensitive content."
  },
  {
    "id": "html-intermediate-050",
    "question": "link rel=\"alternate\" hreflang=\"fr\" provides?",
    "options": [
      "Language/region alternate URL",
      "French CSS",
      "Font subset",
      "Translation file"
    ],
    "correct": 0,
    "explanation": "hreflang helps search engines serve correct language versions.",
    "demo": {
      "type": "html",
      "code": "<link rel=\"alternate\" hreflang=\"fr\" href=\"https://example.com/fr/\">"
    }
  },
  {
    "id": "html-intermediate-051",
    "question": "Structured data JSON-LD lives in?",
    "options": [
      "<meta json>",
      "<data>",
      "<script type=\"application/ld+json\">",
      "<json>"
    ],
    "correct": 2,
    "explanation": "JSON-LD in head/body is Google-preferred for many schema types.",
    "demo": {
      "type": "html",
      "code": "<script type=\"application/ld+json\">\n{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Title\"}\n</script>"
    }
  },
  {
    "id": "html-intermediate-052",
    "question": "meta property=\"og:image\" sets?",
    "options": [
      "CSS background",
      "Inline image",
      "Favicon",
      "Social preview image URL"
    ],
    "correct": 3,
    "explanation": "Use absolute URLs and adequate dimensions for share cards."
  },
  {
    "id": "html-intermediate-053",
    "question": "twitter:card meta controls?",
    "options": [
      "Embed sandbox",
      "Twitter/X card layout type",
      "Analytics",
      "Tweet text"
    ],
    "correct": 1,
    "explanation": "summary_large_image vs summary affects preview presentation."
  },
  {
    "id": "html-intermediate-054",
    "question": "link rel=\"preconnect\" helps?",
    "options": [
      "Early connection to origin",
      "Inline critical CSS",
      "Prefetch DNS only always",
      "Preload entire page"
    ],
    "correct": 0,
    "explanation": "preconnect warms DNS/TLS to third-party origins like fonts CDNs.",
    "demo": {
      "type": "html",
      "code": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">"
    }
  },
  {
    "id": "html-intermediate-055",
    "question": "link rel=\"preload\" as=\"font\" requires?",
    "options": [
      "async attribute",
      "type=\"font/woff2\" only",
      "crossorigin for font files",
      "defer on link"
    ],
    "correct": 2,
    "explanation": "Font preload typically needs crossorigin even for same-origin fonts."
  },
  {
    "id": "html-intermediate-056",
    "question": "base href in document changes?",
    "options": [
      "Default URL for relative links",
      "All absolute URLs",
      "Language only",
      "CSP origin"
    ],
    "correct": 0,
    "explanation": "Use sparingly; wrong base breaks relative URLs site-wide."
  },
  {
    "id": "html-intermediate-057",
    "question": "template element content is?",
    "options": [
      "SEO indexed",
      "Valid in head only",
      "Rendered immediately",
      "Inert until cloned by script"
    ],
    "correct": 3,
    "explanation": "<template> holds declarative fragments for client-side instantiation.",
    "demo": {
      "type": "html",
      "code": "<template id=\"row\">\n  <tr><td></td></tr>\n</template>"
    }
  },
  {
    "id": "html-intermediate-058",
    "question": "slot element is used with?",
    "options": [
      "iframe",
      "Tables only",
      "Web components shadow DOM",
      "select options"
    ],
    "correct": 2,
    "explanation": "<slot> defines insertion points for shadow DOM composition."
  },
  {
    "id": "html-intermediate-059",
    "question": "contenteditable=\"true\" makes element?",
    "options": [
      "Form submittable automatically",
      "Spellcheck disabled",
      "Read-only",
      "User-editable in browser"
    ],
    "correct": 3,
    "explanation": "Editable regions need sanitization if persisted; not a form control substitute."
  },
  {
    "id": "html-intermediate-060",
    "question": "spellcheck=\"false\" on textarea?",
    "options": [
      "Removes autocorrect on all OSes",
      "Disables browser spellcheck",
      "Blocks paste",
      "Disables validation"
    ],
    "correct": 1,
    "explanation": "Useful for code fields; behavior varies slightly by platform."
  },
  {
    "id": "html-intermediate-061",
    "question": "download attribute on anchor?",
    "options": [
      "Adds virus scan",
      "Blocks cross-origin always",
      "Forces POST",
      "Suggests downloading href resource"
    ],
    "correct": 3,
    "explanation": "Same-origin works best; cross-origin download may ignore attribute."
  },
  {
    "id": "html-intermediate-062",
    "question": "rel=\"noopener\" with target=\"_blank\" prevents?",
    "options": [
      "New tab opening",
      "Referrer sending",
      "New page accessing window.opener",
      "Indexing"
    ],
    "correct": 2,
    "explanation": "noopener mitigates tabnabbing; noreferrer also limits referrer.",
    "demo": {
      "type": "html",
      "code": "<a href=\"https://external.com\" target=\"_blank\" rel=\"noopener\">External</a>"
    }
  },
  {
    "id": "html-intermediate-063",
    "question": "cite attribute on blockquote?",
    "options": [
      "URL citing source of quote",
      "Author name visible",
      "CSS citation",
      "Copyright year"
    ],
    "correct": 0,
    "explanation": "cite is a URL reference, not visible citation text—use visible attribution too."
  },
  {
    "id": "html-intermediate-064",
    "question": "address element should contain?",
    "options": [
      "GPS coordinates only",
      "Contact info for nearest article/body",
      "Email only in footer",
      "Any postal address on page"
    ],
    "correct": 1,
    "explanation": "<address> is for contact info relevant to the surrounding context."
  },
  {
    "id": "html-intermediate-065",
    "question": "bdi element purpose?",
    "options": [
      "Binary data",
      "Block divider",
      "Bold italic",
      "Isolate text direction for mixed LTR/RTL"
    ],
    "correct": 3,
    "explanation": "Wrap user-generated text like usernames to prevent bidirectional bugs.",
    "demo": {
      "type": "html",
      "code": "<p>User <bdi>@username_123</bdi> commented.</p>"
    }
  },
  {
    "id": "html-intermediate-066",
    "question": "bdo with dir attribute?",
    "options": [
      "Defines blockquote",
      "Sets lang",
      "Embeds audio",
      "Overrides directionality explicitly"
    ],
    "correct": 3,
    "explanation": "bdo dir=\"rtl\" forces direction for its contents."
  },
  {
    "id": "html-intermediate-067",
    "question": "wbr element inserts?",
    "options": [
      "Word space",
      "Required break",
      "Optional line break opportunity",
      "Hyphen"
    ],
    "correct": 2,
    "explanation": "Helps long URLs wrap without breaking readability."
  },
  {
    "id": "html-intermediate-068",
    "question": "picture element wraps?",
    "options": [
      "SVG animation",
      "Video only",
      "Responsive image sources",
      "iframe"
    ],
    "correct": 2,
    "explanation": "picture groups sources with media queries and img fallback.",
    "demo": {
      "type": "html",
      "code": "<picture>\n  <source media=\"(min-width:800px)\" srcset=\"large.jpg\">\n  <img src=\"small.jpg\" alt=\"Hero\">\n</picture>"
    }
  },
  {
    "id": "html-intermediate-069",
    "question": "srcset on img without picture?",
    "options": [
      "Requires JavaScript",
      "Blocks lazy load",
      "Lets browser pick resolution variant",
      "Only for WebP"
    ],
    "correct": 2,
    "explanation": "w descriptor and sizes attribute guide responsive selection."
  },
  {
    "id": "html-intermediate-070",
    "question": "sizes attribute works with srcset to?",
    "options": [
      "Set file download size",
      "Crop image",
      "Set alt text",
      "Tell layout width for source selection"
    ],
    "correct": 3,
    "explanation": "sizes describes rendered width so browser picks appropriate file."
  },
  {
    "id": "html-intermediate-071",
    "question": "A <button> inside a form defaults to which type?",
    "options": [
      "button",
      "reset",
      "submit",
      "menu"
    ],
    "correct": 2,
    "explanation": "Buttons default to submit inside forms, so use type=\"button\" for non-submit actions.",
    "demo": {
      "type": "html",
      "code": "<button type=\"button\">Open dialog</button>\n<button type=\"submit\">Save</button>"
    }
  },
  {
    "id": "html-intermediate-072",
    "question": "decoding=\"async\" on img hints?",
    "options": [
      "WebP conversion",
      "Decode off main thread",
      "Async download only",
      "Lazy load"
    ],
    "correct": 1,
    "explanation": "async decoding can improve paint performance on large images."
  },
  {
    "id": "html-intermediate-073",
    "question": "crossorigin on img/script/link enables?",
    "options": [
      "CORS requests for canvas/fonts",
      "Anonymous download",
      "Cookie sharing always",
      "CSP bypass"
    ],
    "correct": 0,
    "explanation": "Needed for credentialed or cross-origin resources used in canvas or fonts.",
    "demo": {
      "type": "html",
      "code": "<link rel=\"stylesheet\" href=\"https://cdn.example/font.css\" crossorigin>"
    }
  },
  {
    "id": "html-intermediate-074",
    "question": "integrity attribute on script/link provides?",
    "options": [
      "License verification",
      "CSP hash",
      "Encryption",
      "Subresource Integrity hash check"
    ],
    "correct": 3,
    "explanation": "SRI ensures fetched file matches expected cryptographic hash."
  },
  {
    "id": "html-intermediate-075",
    "question": "type=\"module\" on script means?",
    "options": [
      "ES module with defer default",
      "Inline only",
      "No strict mode",
      "CommonJS"
    ],
    "correct": 0,
    "explanation": "Module scripts are deferred, strict, and support import/export."
  },
  {
    "id": "html-intermediate-076",
    "question": "A file upload form usually needs which enctype?",
    "options": [
      "text/plain",
      "multipart/form-data",
      "application/json only",
      "image/png"
    ],
    "correct": 1,
    "explanation": "multipart/form-data lets the browser send file binary data along with other fields."
  },
  {
    "id": "html-intermediate-077",
    "question": "defer vs async on classic scripts?",
    "options": [
      "async always first",
      "Identical behavior",
      "defer preserves order after parse; async runs when ready",
      "defer blocks parsing"
    ],
    "correct": 2,
    "explanation": "Use defer for ordered dependencies; async for independent scripts.",
    "demo": {
      "type": "html",
      "code": "<script defer src=\"app.js\"></script>\n<script defer src=\"init.js\"></script>"
    }
  },
  {
    "id": "html-intermediate-078",
    "question": "labelable elements include?",
    "options": [
      "div, span",
      "input, button, select, textarea",
      "article",
      "section"
    ],
    "correct": 1,
    "explanation": "Labels associate with labelable elements via for/id or wrapping."
  },
  {
    "id": "html-intermediate-079",
    "question": "datalist provides?",
    "options": [
      "Dropdown only without input",
      "Validation regex",
      "Suggestions while typing",
      "Server search"
    ],
    "correct": 2,
    "explanation": "input list=\"ids\" paired with datalist id offers native autocomplete suggestions.",
    "demo": {
      "type": "html",
      "code": "<input list=\"colors\">\n<datalist id=\"colors\">\n  <option value=\"Red\">\n  <option value=\"Blue\">\n</datalist>"
    }
  },
  {
    "id": "html-intermediate-080",
    "question": "output element represents?",
    "options": [
      "Stdout log",
      "Result of calculation or user action",
      "Hidden field",
      "Console debug"
    ],
    "correct": 1,
    "explanation": "output can reference inputs via for attribute for live form results.",
    "demo": {
      "type": "html",
      "code": "<input type=\"number\" id=\"a\" value=\"2\">\n<input type=\"number\" id=\"b\" value=\"3\">\n<output for=\"a b\">5</output>"
    }
  },
  {
    "id": "html-intermediate-081",
    "question": "meter low/high/optimum define?",
    "options": [
      "Visual range semantics",
      "Step increments",
      "Color theme",
      "Validation errors"
    ],
    "correct": 0,
    "explanation": "optimum indicates preferred range for gauge coloring."
  },
  {
    "id": "html-intermediate-082",
    "question": "search input type=\"search\" adds?",
    "options": [
      "Google integration",
      "Automatic SEO",
      "Search field semantics and some UI",
      "GET method only"
    ],
    "correct": 2,
    "explanation": "Browsers may add clear buttons; still needs form/action for submission."
  },
  {
    "id": "html-intermediate-083",
    "question": "tel input type on mobile shows?",
    "options": [
      "Telephone keypad often",
      "Email keyboard",
      "Numeric only always",
      "URL keyboard"
    ],
    "correct": 0,
    "explanation": "type tel does not validate phone format; use pattern or server validation."
  },
  {
    "id": "html-intermediate-084",
    "question": "url input type validates?",
    "options": [
      "Basic URL format client-side",
      "HTTPS only",
      "Domain ownership",
      "Reachable URL"
    ],
    "correct": 0,
    "explanation": "Browser checks URL shape; server must verify existence and safety."
  },
  {
    "id": "html-intermediate-085",
    "question": "email input type validates?",
    "options": [
      "MX records",
      "Disposable domains",
      "Unicode local part always",
      "Email format roughly"
    ],
    "correct": 3,
    "explanation": "Multiple emails allowed if multiple attribute is set."
  },
  {
    "id": "html-intermediate-086",
    "question": "color input type provides?",
    "options": [
      "Native color picker UI",
      "Hex validation only server-side",
      "RGB CSS output always",
      "Palette from CSS"
    ],
    "correct": 0,
    "explanation": "Value is seven-character hex color in #rrggbb form."
  },
  {
    "id": "html-intermediate-087",
    "question": "range input type renders?",
    "options": [
      "Text box",
      "Slider control",
      "Checkbox",
      "Dropdown"
    ],
    "correct": 1,
    "explanation": "Use with min, max, step; value may need visible display for accessibility.",
    "demo": {
      "type": "html",
      "code": "<input type=\"range\" min=\"0\" max=\"100\" value=\"50\">"
    }
  },
  {
    "id": "html-intermediate-088",
    "question": "hidden attribute vs type=\"hidden\"?",
    "options": [
      "Same thing",
      "hidden hides any element; type hidden is input-specific non-displayed field",
      "hidden submits data",
      "type hidden removes from DOM"
    ],
    "correct": 1,
    "explanation": "hidden attribute removes from layout and accessibility tree unless overridden."
  },
  {
    "id": "html-intermediate-089",
    "question": "inert attribute makes subtree?",
    "options": [
      "Non-interactive and skipped by AT",
      "Invisible only visually",
      "Cached offline",
      "Read-only form"
    ],
    "correct": 0,
    "explanation": "inert disables focus and hit-testing for modals backdrops etc.",
    "demo": {
      "type": "html",
      "code": "<div inert aria-hidden=\"true\" class=\"backdrop\"></div>"
    }
  },
  {
    "id": "html-intermediate-090",
    "question": "popover attribute (HTML popover API)?",
    "options": [
      "Shadow DOM",
      "iframe tooltip",
      "Lightweight top-layer popover",
      "Bootstrap component"
    ],
    "correct": 2,
    "explanation": "popover=\"auto|manual\" with showPopover() creates top-layer UI."
  },
  {
    "id": "html-intermediate-091",
    "question": "main element should not be descendant of?",
    "options": [
      "article, aside, footer, header, nav",
      "html",
      "div",
      "body"
    ],
    "correct": 0,
    "explanation": "main represents primary content and excludes ancestor sectioning aside-type containers.",
    "demo": {
      "type": "html",
      "code": "<body>\n  <main>Primary content here</main>\n</body>"
    }
  },
  {
    "id": "html-intermediate-092",
    "question": "header/footer inside article represent?",
    "options": [
      "Whole page only",
      "Header/footer of that article",
      "Invalid markup",
      "SEO duplicate"
    ],
    "correct": 1,
    "explanation": "header/footer scoped to nearest sectioning root or section."
  },
  {
    "id": "html-intermediate-093",
    "question": "colgroup span attribute?",
    "options": [
      "Table width",
      "Row span",
      "Cell padding",
      "Columns affected by col styling"
    ],
    "correct": 3,
    "explanation": "span on col/colgroup applies attributes across multiple columns."
  },
  {
    "id": "html-intermediate-094",
    "question": "scope on th for tables?",
    "options": [
      "CSP scope",
      "header cell direction: col/row/group",
      "Tab scope",
      "CSS scope"
    ],
    "correct": 1,
    "explanation": "scope helps AT understand header–data relationships in complex tables.",
    "demo": {
      "type": "html",
      "code": "<th scope=\"col\">Name</th>\n<th scope=\"row\">Totals</th>"
    }
  },
  {
    "id": "html-intermediate-095",
    "question": "caption-side is CSS but caption element?",
    "options": [
      "Must be first child of table",
      "Goes in thead",
      "Is deprecated",
      "Replaces alt"
    ],
    "correct": 0,
    "explanation": "HTML requires caption as first table child for accessible naming."
  },
  {
    "id": "html-intermediate-096",
    "question": "object element can embed?",
    "options": [
      "Scripts only",
      "Styles only",
      "Nothing in HTML5",
      "External resources with fallback content"
    ],
    "correct": 3,
    "explanation": "object param fallback and inner HTML provide graceful degradation."
  },
  {
    "id": "html-intermediate-097",
    "question": "embed vs iframe historically?",
    "options": [
      "embed for video only now",
      "iframe deprecated",
      "embed plugin content; iframe nested browsing context",
      "Identical"
    ],
    "correct": 2,
    "explanation": "Prefer video/audio or iframe; embed still used for PDFs/plugins selectively."
  },
  {
    "id": "html-intermediate-098",
    "question": "map and area create?",
    "options": [
      "Site map XML",
      "Navigation menu",
      "Image map clickable regions",
      "Cache map"
    ],
    "correct": 2,
    "explanation": "area shape coords define hotspots; ensure keyboard access if used."
  },
  {
    "id": "html-intermediate-099",
    "question": "<link rel=\"manifest\"> is used for:",
    "options": [
      "PWA install metadata such as name, icons, and start URL",
      "Table column grouping",
      "Form validation messages",
      "Replacing robots.txt"
    ],
    "correct": 0,
    "explanation": "A web app manifest describes install behavior, app icons, theme colors, and launch URL."
  },
  {
    "id": "html-intermediate-100",
    "question": "Best practice for semantic HTML5 landing page structure?",
    "options": [
      "table layout",
      "div soup with ARIA everywhere",
      "multiple main elements",
      "header, nav, main, section/article, aside, footer landmarks"
    ],
    "correct": 3,
    "explanation": "Combine native landmarks with one main and logical headings for maintainability and a11y.",
    "demo": {
      "type": "html",
      "code": "<header>...</header>\n<nav>...</nav>\n<main>\n  <article>...</article>\n  <aside>...</aside>\n</main>\n<footer>...</footer>"
    }
  }
];

const ADVANCED = [
  {
    "id": "html-advanced-001",
    "question": "Light DOM refers to?",
    "options": [
      "Virtual DOM in React",
      "DOM nodes in the document tree as authored",
      "Shadow tree only",
      "CSS light mode"
    ],
    "correct": 1,
    "explanation": "Light DOM is the regular composed document; shadow DOM encapsulates internal tree.",
    "demo": {
      "type": "output",
      "output": "document.body.children → light DOM nodes you wrote in HTML"
    }
  },
  {
    "id": "html-advanced-002",
    "question": "Shadow DOM provides?",
    "options": [
      "Encapsulated DOM/CSS subtree attached to host",
      "Server-side rendering",
      "Lightweight iframe",
      "CSP replacement"
    ],
    "correct": 0,
    "explanation": "Shadow roots isolate internal markup and default styles from outer page.",
    "demo": {
      "type": "jsx",
      "code": "const host = document.querySelector(\"my-card\");\nhost.attachShadow({ mode: \"open\" });\nhost.shadowRoot.innerHTML = \"<p>Hidden internals</p>\";"
    }
  },
  {
    "id": "html-advanced-003",
    "question": "attachShadow({ mode: \"open\" }) means?",
    "options": [
      "Fully private",
      "Cannot be cloned",
      "No style encapsulation",
      "shadowRoot accessible via element.shadowRoot"
    ],
    "correct": 3,
    "explanation": "open mode allows JS access; closed returns null from shadowRoot getter."
  },
  {
    "id": "html-advanced-004",
    "question": "Styles in shadow root affect?",
    "options": [
      "Light DOM siblings",
      "Elements inside that shadow tree primarily",
      "Entire document always",
      "Only :host page"
    ],
    "correct": 1,
    "explanation": "Encapsulation limits outward style leakage unless using CSS custom properties or ::part."
  },
  {
    "id": "html-advanced-005",
    "question": "::slotted() selector targets?",
    "options": [
      "iframe content",
      "Elements assigned to slots from light DOM",
      "All host children",
      "Template inert nodes"
    ],
    "correct": 1,
    "explanation": "slotted styles pierce one level into assigned light DOM nodes only.",
    "demo": {
      "type": "css",
      "code": "::slotted(img) { border-radius: 8px; }"
    }
  },
  {
    "id": "html-advanced-006",
    "question": ":host selector in shadow CSS styles?",
    "options": [
      "Light DOM parent",
      "html root",
      "slot only",
      "The custom element host"
    ],
    "correct": 3,
    "explanation": ":host allows styling the host element from inside shadow stylesheet.",
    "demo": {
      "type": "css",
      "code": ":host { display: block; border: 1px solid #ccc; }"
    }
  },
  {
    "id": "html-advanced-007",
    "question": "Declarative shadow DOM uses?",
    "options": [
      "import maps",
      "iframe srcdoc",
      "<template shadowrootmode=\"open\"> as child",
      "attachShadow in CSS"
    ],
    "correct": 2,
    "explanation": "DSD renders shadow trees from SSR HTML without JS attachShadow call.",
    "demo": {
      "type": "html",
      "code": "<my-widget>\n  <template shadowrootmode=\"open\">\n    <style>p { color: teal; }</style>\n    <p>SSR shadow</p>\n  </template>\n</my-widget>"
    }
  },
  {
    "id": "html-advanced-008",
    "question": "Content model \"phrasing content\" means?",
    "options": [
      "Only text nodes",
      "Inline-level text semantics category",
      "Any block element",
      "Form controls excluded"
    ],
    "correct": 1,
    "explanation": "Phrasing content includes em, a, span; nesting rules restrict where it may appear."
  },
  {
    "id": "html-advanced-009",
    "question": "Transparent content model allows?",
    "options": [
      "No nested elements",
      "Any child always",
      "Text only",
      "Parent to determine valid child categories"
    ],
    "correct": 3,
    "explanation": "Elements like a have transparent model—valid children depend on parent context."
  },
  {
    "id": "html-advanced-010",
    "question": "Void elements cannot have?",
    "options": [
      "Event listeners",
      "Closing tag or inner HTML content",
      "id or class",
      "Attributes"
    ],
    "correct": 1,
    "explanation": "Void elements like img, br, input are self-closing by definition."
  },
  {
    "id": "html-advanced-011",
    "question": "Interactive content includes?",
    "options": [
      "table cells",
      "div with onclick only",
      "p, span always",
      "a, button, input, select, textarea, details/summary"
    ],
    "correct": 3,
    "explanation": "Native interactive elements have built-in keyboard and activation behavior."
  },
  {
    "id": "html-advanced-012",
    "question": "Palpable content means?",
    "options": [
      "Comments",
      "Content that is rendered and has substance",
      "Hidden metadata",
      "script/style"
    ],
    "correct": 1,
    "explanation": "Non-palpable nodes like meta are not directly perceived in page layout."
  },
  {
    "id": "html-advanced-013",
    "question": "Microdata itemscope defines?",
    "options": [
      "CSP nonce scope",
      "JSON-LD block",
      "Root of an item with vocabulary",
      "ARIA region"
    ],
    "correct": 2,
    "explanation": "itemscope with itemtype URL starts a microdata entity graph in markup."
  },
  {
    "id": "html-advanced-014",
    "question": "itemprop on element assigns?",
    "options": [
      "Cookie name",
      "HTTP header",
      "Property name for nearest itemscope ancestor",
      "CSS property"
    ],
    "correct": 2,
    "explanation": "itemprop values become structured property values for the item.",
    "demo": {
      "type": "html",
      "code": "<div itemscope itemtype=\"https://schema.org/Person\">\n  <span itemprop=\"name\">Ada Lovelace</span>\n</div>"
    }
  },
  {
    "id": "html-advanced-015",
    "question": "itemtype must be?",
    "options": [
      "ARIA role",
      "Relative path only",
      "Class name",
      "Absolute vocabulary URL"
    ],
    "correct": 3,
    "explanation": "itemtype identifies schema like schema.org/Person with full URL."
  },
  {
    "id": "html-advanced-016",
    "question": "Microdata vs JSON-LD commonly today?",
    "options": [
      "Microdata only valid",
      "Identical crawling",
      "JSON-LD deprecated",
      "JSON-LD preferred by Google; microdata inline in markup"
    ],
    "correct": 3,
    "explanation": "Both can work; JSON-LD keeps structured data separate from visible DOM."
  },
  {
    "id": "html-advanced-017",
    "question": "CSP meta tag http-equiv?",
    "options": [
      "Sets policy but weaker than HTTP header",
      "Only blocks images",
      "Replaces all headers",
      "Cannot use nonce"
    ],
    "correct": 0,
    "explanation": "Prefer Content-Security-Policy HTTP header; meta cannot enforce frame-ancestors well.",
    "demo": {
      "type": "html",
      "code": "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\">"
    }
  },
  {
    "id": "html-advanced-018",
    "question": "CSP default-src 'self' blocks?",
    "options": [
      "Inline scripts always allowed",
      "HTTPS upgrade",
      "Resources not from same origin unless allowed",
      "All CSS"
    ],
    "correct": 2,
    "explanation": "default-src is fallback for fetch directives; tighten script-src separately."
  },
  {
    "id": "html-advanced-019",
    "question": "Inline script allowed under CSP with?",
    "options": [
      "defer attribute",
      "async only",
      "nonce or hash in policy",
      "type=\"text/javascript\" only"
    ],
    "correct": 2,
    "explanation": "script-src 'nonce-abc' matches script nonce=\"abc\" attributes on trusted inline scripts.",
    "demo": {
      "type": "html",
      "code": "<script nonce=\"abc\">console.log(\"allowed\")</script>"
    }
  },
  {
    "id": "html-advanced-020",
    "question": "CSP report-uri / report-to?",
    "options": [
      "Violation reporting endpoints",
      "Error console only",
      "User analytics",
      "CORS preflight"
    ],
    "correct": 0,
    "explanation": "Monitor CSP violations to detect XSS attempts and policy gaps."
  },
  {
    "id": "html-advanced-021",
    "question": "rel=\"dns-prefetch\" differs from rel=\"preconnect\" because dns-prefetch:",
    "options": [
      "Only resolves DNS, while preconnect also opens TCP/TLS connections",
      "Downloads the full script immediately",
      "Blocks rendering until complete",
      "Only works for images"
    ],
    "correct": 0,
    "explanation": "dns-prefetch is cheaper; preconnect is stronger but should be used sparingly for critical origins.",
    "demo": {
      "type": "html",
      "code": "<link rel=\"dns-prefetch\" href=\"//cdn.example.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>"
    }
  },
  {
    "id": "html-advanced-022",
    "question": "fetchpriority=\"high\" on LCP hero image?",
    "options": [
      "Sets CSP high",
      "Forces preload link",
      "Hints browser to prioritize that request",
      "Disables lazy load always"
    ],
    "correct": 2,
    "explanation": "Use on critical above-fold images; avoid overusing high priority."
  },
  {
    "id": "html-advanced-023",
    "question": "decoding=\"sync\" vs async tradeoff?",
    "options": [
      "No difference",
      "sync required for lazy",
      "sync may block paint; async may delay image appearance",
      "async illegal"
    ],
    "correct": 2,
    "explanation": "Choose decoding based on whether image is critical for first paint."
  },
  {
    "id": "html-advanced-024",
    "question": "picture art direction uses?",
    "options": [
      "Only resolution switching",
      "SVG sprites",
      "Different source crops/compositions per media query",
      "Video posters"
    ],
    "correct": 2,
    "explanation": "Art direction picks different crops; resolution switching uses same image at multiple sizes.",
    "demo": {
      "type": "html",
      "code": "<picture>\n  <source media=\"(max-width:600px)\" srcset=\"crop-tight.jpg\">\n  <source media=\"(min-width:601px)\" srcset=\"crop-wide.jpg\">\n  <img src=\"fallback.jpg\" alt=\"Team photo\">\n</picture>"
    }
  },
  {
    "id": "html-advanced-025",
    "question": "type attribute on picture source?",
    "options": [
      "MIME type hint for source selection",
      "CSP type",
      "CSS type",
      "ARIA role"
    ],
    "correct": 0,
    "explanation": "type=\"image/avif\" lets browser skip unsupported formats quickly."
  },
  {
    "id": "html-advanced-026",
    "question": "sizes=\"(max-width: 600px) 100vw, 50vw\" tells browser?",
    "options": [
      "CDN region",
      "Rendered width per viewport for srcset pick",
      "Cache partition",
      "File size bytes"
    ],
    "correct": 1,
    "explanation": "Accurate sizes prevents downloading oversized images on mobile.",
    "demo": {
      "type": "html",
      "code": "<img srcset=\"small.jpg 400w, large.jpg 1200w\"\n     sizes=\"(max-width: 600px) 100vw, 50vw\"\n     src=\"large.jpg\" alt=\"Product\">"
    }
  },
  {
    "id": "html-advanced-027",
    "question": "hreflang x-default indicates?",
    "options": [
      "Robots index",
      "Default CSS",
      "Fallback locale for unmatched languages",
      "Canonical URL"
    ],
    "correct": 2,
    "explanation": "x-default hreflang points to default page for international users."
  },
  {
    "id": "html-advanced-028",
    "question": "lang on element affects?",
    "options": [
      "Currency only",
      "CSP locale",
      "Language of subtree for AT and hyphenation",
      "Timezone"
    ],
    "correct": 2,
    "explanation": "Nested lang overrides parent for mixed-language passages.",
    "demo": {
      "type": "html",
      "code": "<p>The French word <span lang=\"fr\">bonjour</span> means hello.</p>"
    }
  },
  {
    "id": "html-advanced-029",
    "question": "dir=\"auto\" on element?",
    "options": [
      "Browser detects direction from first strong character",
      "Always RTL",
      "Always LTR",
      "Inherits CSS"
    ],
    "correct": 0,
    "explanation": "auto helps user-generated content display correct bidi direction.",
    "demo": {
      "type": "html",
      "code": "<p dir=\"auto\">User comment: مرحبا hello</p>"
    }
  },
  {
    "id": "html-advanced-030",
    "question": "translate=\"no\" attribute?",
    "options": [
      "Disables lang",
      "Prevents copy",
      "Blocks RTL",
      "Hints translation tools to skip content"
    ],
    "correct": 3,
    "explanation": "Mark brand names and code snippets translate=\"no\" to avoid bad auto-translation."
  },
  {
    "id": "html-advanced-031",
    "question": "datetime on time supports timezone offset?",
    "options": [
      "Yes in ISO 8601 form",
      "UTC only as text",
      "Never",
      "Requires JavaScript"
    ],
    "correct": 0,
    "explanation": "datetime=\"2026-06-30T14:00:00+02:00\" is valid machine-readable form."
  },
  {
    "id": "html-advanced-032",
    "question": "Complex form with fieldset disabled?",
    "options": [
      "Disables nothing",
      "Removes validation forever",
      "Disables controls inside, except descendants of the first legend",
      "Only first input"
    ],
    "correct": 2,
    "explanation": "Disabled fieldset descendants cannot be focused or submitted, except controls inside the fieldset's first legend."
  },
  {
    "id": "html-advanced-033",
    "question": "form attribute on input allows?",
    "options": [
      "CSP form-action",
      "Autocomplete off globally",
      "Associate control with distant form by id",
      "Multiple form submission"
    ],
    "correct": 2,
    "explanation": "Inputs outside form element can link via form=\"formId\".",
    "demo": {
      "type": "html",
      "code": "<form id=\"checkout\"></form>\n<input form=\"checkout\" name=\"coupon\">"
    }
  },
  {
    "id": "html-advanced-034",
    "question": "formaction on submit button?",
    "options": [
      "Disables validation",
      "Overrides form action URL for that button",
      "Adds CSRF token",
      "Changes method to PUT always"
    ],
    "correct": 1,
    "explanation": "Different submit buttons can post to different endpoints."
  },
  {
    "id": "html-advanced-035",
    "question": "formmethod on button can?",
    "options": [
      "Add headers",
      "Change enctype only",
      "Set CSP",
      "Override form method for that submission"
    ],
    "correct": 3,
    "explanation": "formmethod=\"get\" on one button vs POST default on form is valid."
  },
  {
    "id": "html-advanced-036",
    "question": "formenctype multipart needed for?",
    "options": [
      "urlencoded default only",
      "File uploads with binary data",
      "JSON APIs always",
      "GET forms"
    ],
    "correct": 1,
    "explanation": "enctype=\"multipart/form-data\" required when uploading files."
  },
  {
    "id": "html-advanced-037",
    "question": "input type=\"hidden\" with name still?",
    "options": [
      "Focusable",
      "Ignored always",
      "Submitted with form if not disabled",
      "Validated by pattern"
    ],
    "correct": 2,
    "explanation": "Hidden inputs carry tokens; protect values server-side regardless."
  },
  {
    "id": "html-advanced-038",
    "question": "Constraint validation API validity.valid false when?",
    "options": [
      "Field disabled",
      "Any validation constraint fails",
      "Field empty only",
      "Field readonly"
    ],
    "correct": 1,
    "explanation": "Check validity.valid, validationMessage, and reportValidity() for UX."
  },
  {
    "id": "html-advanced-039",
    "question": "setCustomValidity(\"\") clears?",
    "options": [
      "Form action",
      "All HTML attributes",
      "Custom error and revalidates",
      "Value"
    ],
    "correct": 2,
    "explanation": "Empty string clears custom validity; non-empty blocks submission."
  },
  {
    "id": "html-advanced-040",
    "question": "checkValidity vs reportValidity?",
    "options": [
      "reportValidity server-side",
      "checkValidity submits",
      "Identical",
      "reportValidity shows UI; checkValidity silent boolean"
    ],
    "correct": 3,
    "explanation": "Use reportValidity for user-facing validation feedback.",
    "demo": {
      "type": "html",
      "code": "<form onsubmit=\"return this.reportValidity()\">\n  <input required>\n  <button>Send</button>\n</form>"
    }
  },
  {
    "id": "html-advanced-041",
    "question": "aria-required=\"true\" when native required exists?",
    "options": [
      "Always mandatory",
      "Blocks validation",
      "Replaces label",
      "Redundant on native required controls"
    ],
    "correct": 3,
    "explanation": "Use native required; ARIA required only for custom widgets missing native support."
  },
  {
    "id": "html-advanced-042",
    "question": "aria-invalid=\"true\" should pair with?",
    "options": [
      "Visible error text linked via aria-describedby",
      "disabled attribute",
      "color red alone",
      "Hidden errors only"
    ],
    "correct": 0,
    "explanation": "Announce errors accessibly; do not rely on color alone."
  },
  {
    "id": "html-advanced-043",
    "question": "Focus trap in modal requires?",
    "options": [
      "autofocus on random element",
      "aria-hidden on body always sufficient",
      "Manage Tab cycle within dialog and restore focus on close",
      "iframe only"
    ],
    "correct": 2,
    "explanation": "Use dialog showModal or manual focus trap; return focus to trigger element.",
    "demo": {
      "type": "html",
      "code": "<dialog id=\"modal\">\n  <button autofocus>First focus</button>\n  <button>Close</button>\n</dialog>"
    }
  },
  {
    "id": "html-advanced-044",
    "question": "aria-modal=\"true\" indicates?",
    "options": [
      "CSS modal only",
      "Browser blocks scroll automatically",
      "Content beneath is inert to assistive tech",
      "Shadow DOM open"
    ],
    "correct": 2,
    "explanation": "Pair with proper focus management; inert attribute helps pointer/keyboard too."
  },
  {
    "id": "html-advanced-045",
    "question": "Redundant role=\"heading\" aria-level without h1-h6?",
    "options": [
      "Replaces main",
      "Required for SEO",
      "Best practice always",
      "Last resort when native heading impossible"
    ],
    "correct": 3,
    "explanation": "Prefer h1–h6; ARIA heading roles when component constraints prevent native tags."
  },
  {
    "id": "html-advanced-046",
    "question": "Accessible name computation includes?",
    "options": [
      "class names",
      "label, aria-label, aria-labelledby, title last resort",
      "placeholder primary",
      "title only"
    ],
    "correct": 1,
    "explanation": "Accessible name API combines multiple sources with priority rules."
  },
  {
    "id": "html-advanced-047",
    "question": "aria-activedescendant on combobox?",
    "options": [
      "Points id of currently active option while focus on input",
      "Defines CSS",
      "Sets tabindex",
      "Replaces listbox"
    ],
    "correct": 0,
    "explanation": "Used in composite widgets for keyboard navigation without moving DOM focus."
  },
  {
    "id": "html-advanced-048",
    "question": "role=\"listbox\" requires?",
    "options": [
      "ul element inside",
      "No aria-selected",
      "Owned role=\"option\" elements and keyboard pattern",
      "select tag only"
    ],
    "correct": 2,
    "explanation": "Custom listboxes must implement selection and keys per ARIA APG."
  },
  {
    "id": "html-advanced-049",
    "question": "aria-selected on tabs?",
    "options": [
      "Indicates selected tab in tablist",
      "Replaces href",
      "Same as aria-current page",
      "Hides panel"
    ],
    "correct": 0,
    "explanation": "Tab pattern uses aria-selected, aria-controls, and roving tabindex."
  },
  {
    "id": "html-advanced-050",
    "question": "Visually hidden accessible text technique?",
    "options": [
      "visibility:hidden on label",
      "display:none",
      "Clipped/off-screen CSS class preserving AT access",
      "aria-hidden on label"
    ],
    "correct": 2,
    "explanation": "screen-reader-only classes keep labels available; display:none removes from AT."
  },
  {
    "id": "html-advanced-051",
    "question": "tabindex=\"-1\" makes element?",
    "options": [
      "Removed from DOM",
      "Focusable programmatically not via tab order",
      "Always first tab stop",
      "Disabled"
    ],
    "correct": 1,
    "explanation": "Use -1 for moving focus in scripts without adding tab stops."
  },
  {
    "id": "html-advanced-052",
    "question": "Positive tabindex values?",
    "options": [
      "Discouraged; disrupt natural tab order",
      "Improve SEO",
      "Required for links",
      "Best for modals"
    ],
    "correct": 0,
    "explanation": "Avoid tabindex > 0; fix DOM order instead."
  },
  {
    "id": "html-advanced-053",
    "question": "Shadow DOM event retargeting means?",
    "options": [
      "No bubbling",
      "CSP violation",
      "Events blocked entirely",
      "Event.target appears as host when listened outside"
    ],
    "correct": 3,
    "explanation": "Events cross shadow boundaries but target may look like host element externally."
  },
  {
    "id": "html-advanced-054",
    "question": "composed: true on CustomEvent?",
    "options": [
      "Enables CSP",
      "Event synchronous only",
      "Event crosses shadow boundary",
      "Event cancels default"
    ],
    "correct": 2,
    "explanation": "Set composed true for shadow-internal events that outer listeners must hear."
  },
  {
    "id": "html-advanced-055",
    "question": "part attribute and ::part()?",
    "options": [
      "Set lang",
      "Expose named shadow elements to outer CSS",
      "Define CSP",
      "Replace slots"
    ],
    "correct": 1,
    "explanation": "part=\"title\" on shadow node allows ::part(title) styling from document CSS.",
    "demo": {
      "type": "css",
      "code": "my-card::part(title) { font-size: 1.25rem; }"
    }
  },
  {
    "id": "html-advanced-056",
    "question": "exportparts on host?",
    "options": [
      "i18n keys",
      "CSP export",
      "Exports ES modules",
      "Maps inner parts to outer names for ::part styling"
    ],
    "correct": 3,
    "explanation": "exportparts=\"inner-title: title\" exposes nested shadow parts."
  },
  {
    "id": "html-advanced-057",
    "question": "template.content is DocumentFragment?",
    "options": [
      "HTML string",
      "Yes, inert cloneable DOM",
      "Live rendered DOM",
      "Shadow root"
    ],
    "correct": 1,
    "explanation": "Access template.content to clone nodes into active document.",
    "demo": {
      "type": "jsx",
      "code": "const tpl = document.querySelector(\"#row\");\ndocument.body.append(tpl.content.cloneNode(true));"
    }
  },
  {
    "id": "html-advanced-058",
    "question": "cloneNode on template vs content?",
    "options": [
      "Clone template.content children for insertion",
      "Clones shadow automatically",
      "Cannot clone",
      "Clone template tag only always works visually"
    ],
    "correct": 0,
    "explanation": "Scripts typically append template.content.cloneNode(true) to DOM."
  },
  {
    "id": "html-advanced-059",
    "question": "itemid microdata provides?",
    "options": [
      "CSS id",
      "Session id",
      "Analytics id",
      "Global identifier for item"
    ],
    "correct": 3,
    "explanation": "itemid URLs identify entities across pages in microdata graphs."
  },
  {
    "id": "html-advanced-060",
    "question": "itemref attribute?",
    "options": [
      "Prefetch URL",
      "iframe src",
      "Links stylesheet",
      "References additional properties outside itemscope element"
    ],
    "correct": 3,
    "explanation": "itemref lists ids of elements contributing properties to item."
  },
  {
    "id": "html-advanced-061",
    "question": "RDFa vs microdata?",
    "options": [
      "Microdata in HTTP headers",
      "Identical syntax",
      "RDFa in CSS",
      "Both inline semantics; RDFa uses vocab/prefix attributes"
    ],
    "correct": 3,
    "explanation": "RDFa lite uses property, typeof; microdata uses itemprop, itemtype."
  },
  {
    "id": "html-advanced-062",
    "question": "CSP style-src 'unsafe-inline' risk?",
    "options": [
      "Enables fonts only",
      "Blocks all CSS",
      "Allows inline styles vulnerable to injection",
      "Required for shadow DOM"
    ],
    "correct": 2,
    "explanation": "Avoid unsafe-inline; use hashes/nonces or external stylesheets."
  },
  {
    "id": "html-advanced-063",
    "question": "CSP img-src data: allows?",
    "options": [
      "All images blocked",
      "HTTPS only",
      "data: URI images which may be abused",
      "Lazy load"
    ],
    "correct": 2,
    "explanation": "Restrict data: if not needed to reduce exfiltration vectors."
  },
  {
    "id": "html-advanced-064",
    "question": "Trusted Types with CSP require?",
    "options": [
      "iframe only",
      "No scripts",
      "WebAssembly only",
      "Typed DOM sinks for innerHTML etc."
    ],
    "correct": 3,
    "explanation": "require-trusted-types-for 'script' mitigates DOM XSS sink abuse."
  },
  {
    "id": "html-advanced-065",
    "question": "rel=\"modulepreload\" differs from preload?",
    "options": [
      "Lazy scripts",
      "Fetches and parses module graph early",
      "Only fonts",
      "Loads CSS"
    ],
    "correct": 1,
    "explanation": "modulepreload prepares ES modules for faster execution."
  },
  {
    "id": "html-advanced-066",
    "question": "importmap script type?",
    "options": [
      "Maps images",
      "Imports JSON-LD",
      "Maps bare specifiers to URLs for modules",
      "Defines CSP"
    ],
    "correct": 2,
    "explanation": "importmap lets bare imports like import \"lodash\" resolve in browser.",
    "demo": {
      "type": "html",
      "code": "<script type=\"importmap\">\n{\"imports\":{\"vue\":\"https://cdn.example/vue.esm.js\"}}\n</script>"
    }
  },
  {
    "id": "html-advanced-067",
    "question": "lazy loading iframe loading=\"lazy\"?",
    "options": [
      "Requires sandbox",
      "Defers fetch until near viewport",
      "Blocks scripts inside",
      "Disables CSP"
    ],
    "correct": 1,
    "explanation": "Combine with meaningful title attribute for accessibility."
  },
  {
    "id": "html-advanced-068",
    "question": "Native lazy load cannot replace?",
    "options": [
      "All optimization",
      "CSP",
      "Responsive images art direction needs picture/srcset",
      "alt text"
    ],
    "correct": 2,
    "explanation": "Use lazy + responsive images + priority hints holistically."
  },
  {
    "id": "html-advanced-069",
    "question": "object-fit on img via CSS affects?",
    "options": [
      "How replaced content fills box",
      "CSP img-src",
      "HTML parsing",
      "lazy threshold"
    ],
    "correct": 0,
    "explanation": "object-fit is CSS but pairs with HTML width/height for CLS control."
  },
  {
    "id": "html-advanced-070",
    "question": "width/height attributes on img prevent?",
    "options": [
      "Alt requirement",
      "Layout shift when CSS sets one dimension",
      "Lazy loading",
      "All CLS always"
    ],
    "correct": 1,
    "explanation": "Browser reserves aspect ratio from HTML width/height before image loads.",
    "demo": {
      "type": "html",
      "code": "<img src=\"photo.jpg\" alt=\"City\" width=\"640\" height=\"360\">"
    }
  },
  {
    "id": "html-advanced-071",
    "question": "srcset w descriptor 800w means?",
    "options": [
      "800 ms load",
      "800 KB file",
      "800 DPI",
      "Resource is 800 CSS pixels wide"
    ],
    "correct": 3,
    "explanation": "Browser picks appropriate w given sizes and devicePixelRatio."
  },
  {
    "id": "html-advanced-072",
    "question": "x-descriptor in srcset (1x, 2x)?",
    "options": [
      "Width in px",
      "Cache key",
      "Device pixel density hint for fixed-size images",
      "Viewport percent"
    ],
    "correct": 2,
    "explanation": "Use w + sizes for responsive; x for fixed icons at DPR variants."
  },
  {
    "id": "html-advanced-073",
    "question": "form novalidate with server validation still needs?",
    "options": [
      "CSP only",
      "aria-invalid off",
      "Client UX optional; server must validate all input",
      "Nothing server-side"
    ],
    "correct": 2,
    "explanation": "Never trust client; novalidate does not remove server responsibility."
  },
  {
    "id": "html-advanced-074",
    "question": "Multiple submit buttons different value?",
    "options": [
      "Impossible in HTML",
      "Breaks POST",
      "Requires JS only",
      "Distinguishes which button submitted via name/value"
    ],
    "correct": 3,
    "explanation": "Only clicked submit button name=value pair is included in form data.",
    "demo": {
      "type": "html",
      "code": "<button type=\"submit\" name=\"action\" value=\"save\">Save</button>\n<button type=\"submit\" name=\"action\" value=\"publish\">Publish</button>"
    }
  },
  {
    "id": "html-advanced-075",
    "question": "input list + datalist validation?",
    "options": [
      "Free text allowed unless pattern/required restricts",
      "Always email type",
      "Must pick option only",
      "Disables autocomplete"
    ],
    "correct": 0,
    "explanation": "datalist suggests; does not restrict unless combined with other constraints."
  },
  {
    "id": "html-advanced-076",
    "question": "select multiple attribute accessibility?",
    "options": [
      "Automatic aria",
      "Deprecated",
      "Needs instructions; consider listbox alternatives for long lists",
      "Cannot keyboard navigate"
    ],
    "correct": 2,
    "explanation": "Multi-select UX is hard; dual listbox or autocomplete patterns may be better."
  },
  {
    "id": "html-advanced-077",
    "question": "optgroup label required for?",
    "options": [
      "Grouping options accessibly in select",
      "i18n only",
      "CSP groups",
      "Validation groups"
    ],
    "correct": 0,
    "explanation": "optgroup label names categories for screen reader users."
  },
  {
    "id": "html-advanced-078",
    "question": "textarea wrap=\"hard\" affects?",
    "options": [
      "CSS white-space only",
      "Shadow DOM",
      "Submission includes line breaks as CRLF",
      "Validation"
    ],
    "correct": 2,
    "explanation": "soft wrap is visual only; hard includes breaks in submitted value."
  },
  {
    "id": "html-advanced-079",
    "question": "autocomplete=\"one-time-code\" used for?",
    "options": [
      "OTP/SMS code fields",
      "Username only",
      "Credit cards",
      "Password managers off"
    ],
    "correct": 0,
    "explanation": "Helps mobile OS suggest SMS OTP codes in verification forms.",
    "demo": {
      "type": "html",
      "code": "<input autocomplete=\"one-time-code\" inputmode=\"numeric\" pattern=\"[0-9]*\">"
    }
  },
  {
    "id": "html-advanced-080",
    "question": "input enterkeyhint on mobile?",
    "options": [
      "CSP hint",
      "Changes enter key label/action hint",
      "Submits form always",
      "Adds validation"
    ],
    "correct": 1,
    "explanation": "Values like send, search, next customize virtual keyboard enter key."
  },
  {
    "id": "html-advanced-081",
    "question": "popover=\"manual\" vs auto?",
    "options": [
      "Manual requires explicit show/hide; auto closes on outside click/light dismiss",
      "Identical",
      "Manual is deprecated",
      "Auto needs JS library"
    ],
    "correct": 0,
    "explanation": "Choose manual for persistent panels; auto for transient UI.",
    "demo": {
      "type": "html",
      "code": "<button popovertarget=\"tip\">Info</button>\n<div id=\"tip\" popover=\"auto\">Tooltip content</div>"
    }
  },
  {
    "id": "html-advanced-082",
    "question": "invoker commands (commandfor) pattern?",
    "options": [
      "CSP command",
      "Microdata",
      "Shadow attach",
      "Declarative button triggers dialog/popover actions"
    ],
    "correct": 3,
    "explanation": "Emerging HTML patterns link buttons to popover/dialog via command attributes."
  },
  {
    "id": "html-advanced-083",
    "question": "Accessibility tree excludes?",
    "options": [
      "Visible text",
      "Focusable elements always",
      "Elements with display:none or visibility:hidden generally",
      "All aria-hidden false"
    ],
    "correct": 2,
    "explanation": "Hidden visibility removes from AT; careful with aria-hidden on focused elements."
  },
  {
    "id": "html-advanced-084",
    "question": "aria-hidden on focused element bug?",
    "options": [
      "Focusable content hidden from AT causes serious a11y failure",
      "Improves performance",
      "Recommended pattern",
      "Required for modals"
    ],
    "correct": 0,
    "explanation": "Never hide focused or interactive content from AT; use inert instead on background."
  },
  {
    "id": "html-advanced-085",
    "question": "Role conflict native button + role=\"link\"?",
    "options": [
      "Encouraged",
      "Required for SPA",
      "SEO boost",
      "Invalid; do not override native semantics incorrectly"
    ],
    "correct": 3,
    "explanation": "Use correct element for behavior; ARIA roles cannot change native role fully."
  },
  {
    "id": "html-advanced-086",
    "question": "Table headers id + headers attribute on td?",
    "options": [
      "CSP cells",
      "Lazy load",
      "Associates data cells with multiple headers in complex tables",
      "SEO only"
    ],
    "correct": 2,
    "explanation": "Complex tables need explicit th id and td headers relationships.",
    "demo": {
      "type": "html",
      "code": "<th id=\"q1\" scope=\"col\">Q1</th>\n<td headers=\"q1 region\">$4.2M</td>"
    }
  },
  {
    "id": "html-advanced-087",
    "question": "scope=\"colgroup\" on th?",
    "options": [
      "CSS scope",
      "Row group only",
      "Header applies to colgroup columns",
      "Invalid value"
    ],
    "correct": 2,
    "explanation": "Use col/colgroup scope for spanned header associations."
  },
  {
    "id": "html-advanced-088",
    "question": "caption hidden visually but accessible?",
    "options": [
      "aria-hidden caption",
      "Use alt on table",
      "Use visually hidden technique not display:none on caption",
      "Remove caption"
    ],
    "correct": 2,
    "explanation": "Tables need accessible names; caption preferred over aria-label on table.",
    "demo": {
      "type": "css",
      "code": ".sr-only { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0,0,0,0); }"
    }
  },
  {
    "id": "html-advanced-089",
    "question": "summary attribute on table?",
    "options": [
      "Obsolete; use caption instead",
      "CSP table",
      "Required for a11y",
      "SEO primary"
    ],
    "correct": 0,
    "explanation": "Do not use summary attribute; caption describes table purpose."
  },
  {
    "id": "html-advanced-090",
    "question": "SVG inside HTML document?",
    "options": [
      "Always iframe only",
      "Inline SVG uses HTML namespace integration",
      "Requires object",
      "Not valid in HTML5"
    ],
    "correct": 1,
    "explanation": "Inline SVG in HTML5 can use aria and CSS like other elements."
  },
  {
    "id": "html-advanced-091",
    "question": "math element in HTML?",
    "options": [
      "MathML allowed in HTML5 with appropriate namespace handling",
      "Script only",
      "Deprecated",
      "Requires iframe"
    ],
    "correct": 0,
    "explanation": "Browser support improved; fallback images may still be needed for edge cases."
  },
  {
    "id": "html-advanced-092",
    "question": "customElements.define upgrades?",
    "options": [
      "Shadow only",
      "Connected element when definition registered",
      "Only on page load once",
      "Never retroactive"
    ],
    "correct": 1,
    "explanation": "Defined custom elements upgrade existing tags in document automatically.",
    "demo": {
      "type": "jsx",
      "code": "class MyBadge extends HTMLElement {}\ncustomElements.define(\"my-badge\", MyBadge);"
    }
  },
  {
    "id": "html-advanced-093",
    "question": "Autonomous custom element tag rules?",
    "options": [
      "Must start with x-",
      "Uppercase allowed",
      "Must contain hyphen, lowercase",
      "Any single word"
    ],
    "correct": 2,
    "explanation": "Hyphen ensures no collision with future native elements."
  },
  {
    "id": "html-advanced-094",
    "question": "colspan and rowspan are used to:",
    "options": [
      "Make a table cell span multiple columns or rows",
      "Add captions to images",
      "Lazy-load table data",
      "Create form validation groups"
    ],
    "correct": 0,
    "explanation": "Spanning cells can represent grouped table data; pair complex tables with clear headers and captions.",
    "demo": {
      "type": "html",
      "code": "<td colspan=\"2\">Total</td>"
    }
  },
  {
    "id": "html-advanced-095",
    "question": "ObservedAttributes in custom element?",
    "options": [
      "Callback when listed attributes change",
      "All attributes always",
      "CSS only",
      "CSP attrs"
    ],
    "correct": 0,
    "explanation": "static observedAttributes + attributeChangedCallback react to attribute updates."
  },
  {
    "id": "html-advanced-096",
    "question": "connectedCallback use for?",
    "options": [
      "CSP setup",
      "Setup when element inserted into document",
      "Constructor DOM writes always",
      "Shadow closed only"
    ],
    "correct": 1,
    "explanation": "Avoid heavy work in constructor; use connectedCallback for DOM-dependent init."
  },
  {
    "id": "html-advanced-097",
    "question": "Form-associated custom elements?",
    "options": [
      "Disable validation",
      "Cannot use forms",
      "Can participate in form submission via ElementInternals",
      "Replace input always"
    ],
    "correct": 2,
    "explanation": "ElementInternals setFormValue enables custom controls in forms.",
    "demo": {
      "type": "jsx",
      "code": "this.internals = this.attachInternals();\nthis.internals.setFormValue(\"custom-value\");"
    }
  },
  {
    "id": "html-advanced-098",
    "question": "ElementInternals shadowRoot accessible in closed mode?",
    "options": [
      "iframe only",
      "Yes for internals.shadowRoot in custom element class",
      "Never",
      "Public only"
    ],
    "correct": 1,
    "explanation": "Custom element code can access its closed shadow root via internals."
  },
  {
    "id": "html-advanced-099",
    "question": "Best pattern for accessible custom checkbox?",
    "options": [
      "span with color",
      "image map",
      "button role=checkbox aria-checked + keyboard Space",
      "div onclick only"
    ],
    "correct": 2,
    "explanation": "Follow ARIA APG toggle button/checkbox pattern or use native input styled.",
    "demo": {
      "type": "html",
      "code": "<button type=\"button\" role=\"checkbox\" aria-checked=\"false\">Subscribe</button>"
    }
  },
  {
    "id": "html-advanced-100",
    "question": "Holistic advanced HTML review checks?",
    "options": [
      "JS frameworks only",
      "Valid HTML only",
      "CSS first",
      "Semantics, a11y, CSP, i18n, performance hints together"
    ],
    "correct": 3,
    "explanation": "Production HTML balances content models, security headers, inclusive design, and media optimization.",
    "demo": {
      "type": "output",
      "output": "Checklist: landmarks ✓ CSP header ✓ hreflang ✓ lazy+dimensions ✓ form server validation ✓ focus trap ✓"
    }
  }
];

/** @param {'beginner' | 'intermediate' | 'advanced'} level */
export function getHtmlQuestions(level) {
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
