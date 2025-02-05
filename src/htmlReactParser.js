import safeObj from "./safeElements";
import sanitizeCss from "./sanitizeCss";

const parseCssString = (cssString) => {
  return cssString
    .split(";")
    .filter((rule) => rule.trim())
    .reduce((acc, rule) => {
      let [property, value] = rule.split(/:(.+)/).map((str) => str.trim()); // Handle values with ':' properly
      if (!property || !value) return acc;

      // Convert CSS property to camelCase dynamically
      let camelCaseProperty = property.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase()
      );

      // Ensure URL values are correctly formatted
      if (value.startsWith("url(")) {
        value = value;
      } else if (isNaN(value)) {
        value = `"${value}"`;
      }

      acc[camelCaseProperty] = value;
      return acc;
    }, {});
};

const removeExtraWhitespace = (htmlString) => {
  return htmlString
    .replace(/>\s+</g, "><") // Remove spaces between tags
    .replace(/(\s)+/g, " ") // Replace multiple spaces with a single space
    .trim();
};

const convertNode = (htmlDom) => {
  if (htmlDom?.tagName) {
    if (!safeObj.elements.includes(htmlDom.tagName.toLowerCase())) {
      console.error(
        `Unsafe HTML element detected: ${htmlDom.tagName.toLowerCase()}`
      );
      return null;
    }
  }
  console.textContent
  if (htmlDom.nodeType === Node.TEXT_NODE) {
    return htmlDom.textContent;
  }

  if (htmlDom.nodeType === Node.ELEMENT_NODE) {
    if (htmlDom.tagName.toLowerCase() === "style") {
      return {
        type: htmlDom.tagName.toLowerCase(),
        props: {
          cssText: sanitizeCss(htmlDom.textContent),
        },
      };
    }
    const children = Array.from(htmlDom.childNodes).map(convertNode);
    const attributes = {};

    for (let i = 0; i < htmlDom.attributes.length; i++) {
      const attr = htmlDom.attributes[i];
      if (!safeObj.attributes.includes(attr.name)) {
        console.error(
          `Unsafe HTML attribute detected: ${attr.name}="${attr.value}"`
        );
        continue;
      }
      const reactAttrName = attr.name.replace(/-\w/g, (match) =>
        match[1].toUpperCase()
      );

      if (reactAttrName === "style") {
        attributes[reactAttrName] = parseCssString(sanitizeCss(attr.value));
      } else if (reactAttrName === "class") {
        attributes["className"] = attr.value;
      } else if (reactAttrName === "for") {
        attributes["htmlFor"] = attr.value;
      } else {
        attributes[reactAttrName] = attr.value;
      }
    }

    return {
      type: htmlDom.tagName.toLowerCase(),
      props: {
        ...attributes,
        children: children.length > 0 ? children : null,
      },
    };
  }

  return null;
};

const htmlReactParser = ({ htmlString }) => {
  try {
    if (typeof htmlString !== "string") {
      console.error("Invalid input: htmlString must be a string.");
      return null;
    } else if (htmlString.trim() === "") {
      return null;
    }
    const parser = new DOMParser();
    const htmlStringWithoutExtraWhitespace = removeExtraWhitespace(htmlString);
    const htmlDom = parser.parseFromString(
      htmlStringWithoutExtraWhitespace,
      "text/html"
    );

    if (htmlDom.querySelector("parsererror")) {
      console.error(
        "HTML Parsing Error:",
        htmlDom.querySelector("parsererror")
      );
      return null;
    }
    const reactDom = convertNode(htmlDom.body.firstChild);
    return reactDom;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default htmlReactParser;
