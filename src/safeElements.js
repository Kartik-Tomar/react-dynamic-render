const safeObj = {
  elements: [
    "style", // Potentially dangerous. Ensure that user input is sanitized and that the CSS is safe.
    "a",
    "abbr", // Defines an abbreviation or acronym
    "address", // Defines contact information for the author/owner of a document
    "area", // Defines an area inside an image map
    "article", // Defines an independent, self-contained content
    "aside", // Defines content aside from the page content
    "audio",
    "b",
    "base", // Specifies the base URL/target for all relative URLs in a document
    "bdi", // Isolates a part of text that might be formatted in a different direction from other text outside it
    "bdo", // Overrides the current text direction
    "blockquote",
    "body",
    "br",
    "button",
    "canvas", // Potentially dangerous but essential for canvas functionality. Requires careful handling of user input if used interactively.
    "caption", // Defines a table caption
    "cite", // Defines the title of a work
    "code", // Defines a piece of computer code
    "col", // Specifies column properties for each column within a <colgroup> element
    "colgroup", // Specifies a group of one or more columns in a table for formatting
    "data", // Links the given content with a machine-readable translation
    "datalist", // Specifies a list of pre-defined options for input controls
    "dd", // Defines a description/value of a term in a description list
    "del", // Defines text that has been deleted from a document
    "details", // Defines additional details that the user can view or hide
    "dfn", // Specifies a term that is going to be defined within the content
    "dialog", // Defines a dialog box or window
    "div",
    "dl", // Defines a description list
    "dt", // Defines a term/name in a description list
    "em", // Defines emphasized text
    "fieldset", // Groups related elements in a form
    "figcaption", // Defines a caption for a <figure> element
    "figure", // Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
    "footer", // Defines a footer for a document or section
    "form", // Always be cautious of user inputs.
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup", // Groups a set of <h1> to <h6> elements when a heading has multiple levels
    "hr", // Defines a thematic change in the content
    "html",
    "i", // Defines a part of text in an alternate voice or mood
    "img",
    "input",
    "ins", // Defines a text that has been inserted into a document
    "kbd", // Defines keyboard input
    "label", // Defines a label for an <input> element
    "legend", // Defines a caption for a <fieldset> element
    "li",
    "link", // Defines the relationship between the current document and an external resource. Relatively safe, but ensure links point to trusted resources.
    "main", // Specifies the main content of a document
    "map", // Defines an image map
    "mark", // Defines marked/highlighted text
    "meta", // Defines metadata about an HTML document.
    "meter", // Defines a scalar measurement within a known range (a gauge)
    "nav", // Defines navigation links
    "ol", // Defines an ordered list
    "optgroup", // Defines a group of related options in a drop-down list
    "option", // Defines an option in a drop-down list
    "p",
    "param", // Defines a parameter for an object - Used with <object>, carries similar risks.
    "picture", // Defines a container for multiple image resources
    "pre", // Defines preformatted text
    "progress", // Represents the progress of a task
    "q", // Defines a short quotation
    "rp", // Defines what to show in browsers that do not support ruby annotations
    "rt", // Defines an explanation/pronunciation of characters (for East Asian typography)
    "ruby", // Defines a ruby annotation (for East Asian typography)
    "s", // Defines text that is no longer correct
    "samp", // Defines sample output from a program or script
    "section", // Defines a section in a document
    "select",
    "small", // Defines smaller text
    "source", // Defines multiple media resources for media elements (<video>, <audio> and <picture>)
    "span", // Defines a section in a document
    "strong", // Defines important text
    "sub", // Defines subscripted text
    "summary", // Defines a visible heading for a <details> element
    "sup", // Defines superscripted text
    "svg", // Potentially vulnerable if SVG data isn't sanitized.
    "table",
    "tbody",
    "td",
    "textarea", // Defines a multiline input control (text area) - Requires careful handling of user input.
    "tfoot", // Groups the footer content in a table
    "th", // Defines a header cell in a table
    "thead", // Groups the header content in a table
    "time", // Defines a specific time (or datetime)
    "title", // Defines a title for the document
    "tr",
    "track", // Defines text tracks for media elements (<video> and <audio>)
    "u", // Defines some text that is unarticulated and styled differently
    "ul",
    "var", // Defines a variable in programming or in a mathematical expression
    "video",
    "wbr", // Defines a possible line-break
  ],
  attributes: [
    "style", // Potentially dangerous. Ensure that user input is sanitized and that the CSS is safe.
    "accept",
    "accept-charset",
    "accesskey",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autofocus",
    "autoplay",
    "buffered",
    "capture",
    "charset",
    "checked",
    "class",
    "cols",
    "colspan",
    "controls",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "dirname",
    "disabled",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "for",
    "form",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "headers",
    "height",
    "hidden",
    "high",
    "href", // Potentially dangerous. Sanitize and validate to ensure it's a safe protocol (e.g., https, http, mailto) and a legitimate domain.
    "hreflang",
    "id",
    "inert",
    "inputmode",
    "ismap",
    "itemid",
    "itemprop",
    "itemref",
    "itemscope",
    "itemtype",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "optimum",
    "part",
    "pattern",
    "placeholder",
    "playsinline",
    "preload",
    "readonly",
    "referrerpolicy",
    "rel", // Restrict to safe `rel` values, such as `noopener`, `noreferrer`
    "required",
    "reversed",
    "rows",
    "rowspan",
    "sandbox", // This attribute should be used to secure the content.
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "src", // Similar to "href," validate rigorously to prevent loading malicious content.
    "srclang",
    "srcset",
    "start",
    "step",
    "tabindex",
    "target", // Should be controlled and not user-settable. Limit to known safe values like _blank.
    "title",
    "translate",
    "type", // Limit to known safe types for each element.
    "usemap",
    "value",
    "virtualkeyboardpolicy",
    "width",
    "wrap",
    "className", // React-specific attribute
    "htmlFor", // React-specific attribute
    "children", // React-specific attribute
    "cssText", // Custom React-specific attribute
  ],
};

export default safeObj;
