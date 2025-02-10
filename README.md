# react-dynamic-render Completely replace dangerouslySetInnerHTML to render dynamic HTML and CSS in React

To render external HTML in React, the only way is “`dangerouslySetInnerHTML`” which as the name suggests can be dangerous as it makes your code vulnerable to cross-site scripting (XSS) attacks.

!['stache](https://i.imgflip.com/9joniq.jpg)

react-dynamic-render has zero-dependency only `react` as peer-dependency, `making it very light`. Completely eliminating the use of “`dangerouslySetInnerHTML`” and using `React.createElement` function to render `HTML` and `CSS`. With additional script to eliminate any kind of script or dangerous element/attributes.

### Where to use react-dynamic-render?
If you need to use dynamic UI for a perticular component or a complete page you can use react-dynamic-render with react. 
>Note: Any kind of JS script will be eliminated in the process

## Installation
Use the package manager [npm](https://www.npmjs.com/package/react-dynamic-render) to install react-dynamic-render.

```bash
npm install react-dynamic-render
```

## Usage
Below is a quick example how to use react-dynamic-render:
```js
import React from "react";
import {
  DynamicRenderJson,
  htmlReactParser,
  DynamicRender,
  vNodeToHtmlString,
} from "react-dynamic-render";

const PComponent = ({ text }) => {
  return <p>{text}</p>;
};

const html = `
<div>
  <style>
    .heading {
      color: red;
    }
  </style>
  <div>
    <h1 class="heading">Testing React Dynamic Render (react-dynamic-render)</h1>
    {"component": "CustomComponent", "props": { "text": "Hello World" }}
  </div>
</div>
`;

const index = () => {
  const htmlJson = htmlReactParser({ htmlString: html });
  console.log("htmlJson", htmlJson);
  // htmlJson {type: 'div', props: {…}}

  const htmlString = vNodeToHtmlString({
    htmlJson,
    customComponents: { // CustomComponents is not mandatory
      CustomComponent: PComponent,
    },
  });
  console.log("htmlString", htmlString);
  // htmlString <div><style> .heading { color: red; } </style><div><h1 class="heading">Testing React Dynamic Render (react-dynamic-render)</h1><p>Hello World</p></div></div>

  return (
    <div>
      <DynamicRenderJson
        htmlJson={htmlJson}
        customComponents={{ // CustomComponents is not mandatory
          CustomComponent: PComponent, 
        }}
      />
      <DynamicRender
        htmlString={htmlString}
        customComponents={{ // CustomComponents is not mandatory
          CustomComponent: PComponent, 
        }}
      />
    </div>
  );
};

export default index;
```
> `customComponents` can be used to add more functionality to it

## License

[MIT](https://github.com/Kartik-Tomar/react-dynamic-render?tab=MIT-1-ov-file)