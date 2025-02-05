const sanitizeCss = (cssText) => {
  if (typeof cssText !== "string") {
    return ""; // Handle non-string input gracefully
  }

  // 1. Remove comments that could potentially hide malicious code
  cssText = cssText.replace(/\/\*[\s\S]*?\*\//g, "");

  // 2. Escape or remove dangerous characters and sequences
  cssText = cssText
    .replace(/\\/g, "\\\\") // Escape backslashes
    .replace(/</g, "&lt;") // Escape less-than signs (used in HTML tags)
    .replace(/>/g, "&gt;") // Escape greater-than signs (used in HTML tags)
    .replace(/"/g, "&quot;") // Escape double quotes
    .replace(/'/g, "&#39;"); // Escape single quotes

  // 3. Remove potentially dangerous at-rules (e.g., @import, @charset)
  //    - @import could be used to load external CSS containing malicious code.
  //    - @charset could be manipulated for character encoding attacks, although
  //      this is less common.
  cssText = cssText.replace(/@import\s*[^;]+;/gi, "");
  cssText = cssText.replace(/@charset\s*[^;]+;/gi, "");

  // 4. Remove CSS expressions (behavior and -moz-binding were used in older
  //    browsers for script injection). This is mostly a concern for legacy
  //    browser compatibility.
  cssText = cssText.replace(/expression\s*\(.*\)/gi, "");
  cssText = cssText.replace(/(\/\*)[\s\S]*(\*\/)/gi, ""); // Remove comments again in case they contain escaped expressions
  cssText = cssText.replace(/behavior\s*:/gi, "");
  cssText = cssText.replace(/-moz-binding\s*:/gi, "");

  // 5. Restrict URLs to safe protocols (http, https, data)
  //    - This helps prevent `javascript:` and other potentially malicious
  //      protocols from being used in CSS.
  //    - Note that `data:` URLs can still be used for XSS in some cases, so
  //      extra care should be taken if they are allowed.
  const urlRegex = /url\s*\(\s*["']?(.*?)["']?\s*\)/gi;
  cssText = cssText.replace(urlRegex, (match, url) => {
    const allowedProtocols = ["http:", "https:", "data:"];
    const protocol = url.substring(0, url.indexOf(":") + 1).toLowerCase();
    if (allowedProtocols.includes(protocol)) {
      return `url("${url}")`;
    } else {
      return ""; // Remove URLs with unsafe protocols
    }
  });

  return cssText;
};

export default sanitizeCss;
