import React from "react";
import ReactDOMServer from "react-dom/server";
import DynamicRenderJson from "./DynamicRenderJson.jsx";

const vNodeToHtmlString = ({ htmlJson, customComponents }) => {
  const htmlString = ReactDOMServer.renderToString(
    <DynamicRenderJson
      htmlJson={htmlJson}
      customComponents={customComponents}
    />
  );
  return htmlString;
};

export default vNodeToHtmlString;
