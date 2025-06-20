import React from "react";
import htmlReactParser from "./htmlReactParser";

const DynamicRender = ({ htmlString, htmlJson, customComponents }) => {
  try {
    if (htmlString) {
      const htmlJson = htmlReactParser({ htmlString });
      return <DynamicRender htmlJson={htmlJson} customComponents={customComponents} />;
    }
    if (!htmlJson) {
      return null;
    } else if (typeof htmlJson === "string") {
      try {
        const data = JSON.parse(htmlJson);
        if (!data || !data.component || !customComponents[data.component]) {
          console.error("Invalid component data or component not found");
          return htmlJson;
        }
        return React.createElement(customComponents[data?.component], {
          ...data.props,
        });
      } catch (error) {
        return htmlJson;
      }
    } else {
      const { type, props } = htmlJson;
      if (type === "style") {
        const sanitizedCssText = props.cssText;
        return <style>{sanitizedCssText}</style>;
      }

      return React.createElement(
        type,
        { ...props, key: Math.random() },
        Array.isArray(props.children) ? (
          props.children.map((child, index) => (
            <DynamicRender key={index} htmlJson={child} customComponents={customComponents} />
          ))
        ) : typeof props.children === "object" && props.children !== null ? (
          <DynamicRender htmlJson={props.children} customComponents={customComponents} />
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

export default DynamicRender;
