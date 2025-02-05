import React from "react";
import safeObj from "./safeElements";
import sanitizeCss from "./sanitizeCss";

const DynamicRenderJson = ({ htmlJson, customComponents }) => {
  try {
    if (!htmlJson) {
      return null;
    } else if (typeof htmlJson === "string") {
      try {
        const data = JSON.parse(htmlJson);
        return React.createElement(customComponents[data?.component], { ...data.props });
      } catch (error) {
        return htmlJson;
      }
    } else {
      const { type, props } = htmlJson;
      // check if element is safe
      if (safeObj.elements.indexOf(type) === -1) {
        console.error(`Unsafe HTML element detected: ${type}`);
        return null;
      }
      // check props and remove any unsafe attributes
      const safeAttributes = safeObj.attributes;
      for (const attr in props) {
        if (!safeAttributes.includes(attr)) {
          console.error(
            `Unsafe HTML attribute detected: ${attr}="${props[attr]}"`
          );
          delete props[attr];
        }
      }
      if (type === "style") {
        const sanitizedCssText = sanitizeCss(props.cssText);
        return <style>{sanitizedCssText}</style>;
      }

      return React.createElement(
        type,
        { ...props, key: Math.random() },
        Array.isArray(props.children) ? (
          props.children.map((child, index) => (
            <DynamicRenderJson key={index} htmlJson={child} customComponents={customComponents} />
          ))
        ) : typeof props.children === "object" && props.children !== null ? (
          <DynamicRenderJson htmlJson={props.children} customComponents={customComponents} />
        ) : (
          props.children
        )
      );
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default DynamicRenderJson;
