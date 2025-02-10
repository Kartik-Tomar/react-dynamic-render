import e from"react";import r from"react-dom/server";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}function o(e,r,t){return(r=n(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var a={elements:["style","a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","link","main","map","mark","meta","meter","nav","ol","optgroup","option","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","small","source","span","strong","sub","summary","sup","svg","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],attributes:["style","accept","accept-charset","accesskey","alt","autocapitalize","autocomplete","autofocus","autoplay","buffered","capture","charset","checked","class","cols","colspan","controls","coords","crossorigin","datetime","decoding","default","dir","dirname","disabled","download","draggable","enctype","enterkeyhint","for","form","formenctype","formmethod","formnovalidate","formtarget","headers","height","hidden","high","href","hreflang","id","inert","inputmode","ismap","itemid","itemprop","itemref","itemscope","itemtype","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","nomodule","novalidate","open","optimum","part","pattern","placeholder","playsinline","preload","readonly","referrerpolicy","rel","required","reversed","rows","rowspan","sandbox","scope","selected","shape","size","sizes","slot","span","src","srclang","srcset","start","step","tabindex","target","title","translate","type","usemap","value","virtualkeyboardpolicy","width","wrap","className","htmlFor","children","cssText"]},l=function(e){if("string"!=typeof e)return"";return e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\/\*[\s\S]*?\*\//g,"")).replace(/\\/g,"\\\\").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")).replace(/@import\s*[^;]+;/gi,"")).replace(/@charset\s*[^;]+;/gi,"")).replace(/expression\s*\(.*\)/gi,"")).replace(/(\/\*)[\s\S]*(\*\/)/gi,"")).replace(/behavior\s*:/gi,"")).replace(/-moz-binding\s*:/gi,"")).replace(/url\s*\(\s*["']?(.*?)["']?\s*\)/gi,(function(e,r){var t=r.substring(0,r.indexOf(":")+1).toLowerCase();return["http:","https:","data:"].includes(t)?'url("'.concat(r,'")'):""}))};function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s=function(r){var n=r.htmlJson,o=r.customComponents;try{if(!n)return null;if("string"!=typeof n){var c=n.type,u=n.props;if(-1===a.elements.indexOf(c))return console.error("Unsafe HTML element detected: ".concat(c)),null;var p=a.attributes;for(var m in u)p.includes(m)||(console.error("Unsafe HTML attribute detected: ".concat(m,'="').concat(u[m],'"')),delete u[m]);if("style"===c){var f=l(u.cssText);return e.createElement("style",null,f)}return e.createElement(c,i(i({},u),{},{key:Math.random()}),Array.isArray(u.children)?u.children.map((function(r,t){return e.createElement(s,{key:t,htmlJson:r,customComponents:o})})):"object"===t(u.children)&&null!==u.children?e.createElement(s,{htmlJson:u.children,customComponents:o}):u.children)}try{var d=JSON.parse(n);return e.createElement(o[null==d?void 0:d.component],i({},d.props))}catch(e){return n}}catch(e){return console.error(e),null}};function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function p(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,l,c=[],i=!0,s=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=a.call(t)).done)&&(c.push(n.value),c.length!==r);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(s)throw o}}return c}}(e,r)||function(e,r){if(e){if("string"==typeof e)return u(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(e){if(null!=e&&e.tagName&&!a.elements.includes(e.tagName.toLowerCase()))return console.error("Unsafe HTML element detected: ".concat(e.tagName.toLowerCase())),null;if(e.nodeType===Node.TEXT_NODE)return e.textContent;if(e.nodeType===Node.ELEMENT_NODE){if("style"===e.tagName.toLowerCase())return{type:e.tagName.toLowerCase(),props:{cssText:l(e.textContent)}};for(var r=Array.from(e.childNodes).map(d),t={},n=0;n<e.attributes.length;n++){var o=e.attributes[n];if(a.attributes.includes(o.name)){var c=o.name.replace(/-\w/g,(function(e){return e[1].toUpperCase()}));"style"===c?t[c]=l(o.value).split(";").filter((function(e){return e.trim()})).reduce((function(e,r){var t=p(r.split(/:(.+)/).map((function(e){return e.trim()})),2),n=t[0],o=t[1];if(!n||!o)return e;var a=n.replace(/-([a-z])/g,(function(e,r){return r.toUpperCase()}));return o.startsWith("url(")||isNaN(o)&&(o='"'.concat(o,'"')),e[a]=o,e}),{}):"class"===c?t.className=o.value:"for"===c?t.htmlFor=o.value:t[c]=o.value}else console.error("Unsafe HTML attribute detected: ".concat(o.name,'="').concat(o.value,'"'))}return{type:e.tagName.toLowerCase(),props:f(f({},t),{},{children:r.length>0?r:null})}}return null},y=function(e){var r=e.htmlString;try{if("string"!=typeof r)return console.error("Invalid input: htmlString must be a string."),null;if(""===r.trim())return null;var t=new DOMParser,n=function(e){return e.replace(/>\s+</g,"><").replace(/(\s)+/g," ").trim()}(r),o=t.parseFromString(n,"text/html");return o.querySelector("parsererror")?(console.error("HTML Parsing Error:",o.querySelector("parsererror")),null):d(o.body.firstChild)}catch(e){return console.error(e),null}};function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=function(r){var n=r.htmlString,o=r.htmlJson,a=r.customComponents;try{if(n){var l=y({htmlString:n});return e.createElement(g,{htmlJson:l,customComponents:a})}if(!o)return null;if("string"!=typeof o){var c=o.type,i=o.props;if("style"===c){var s=i.cssText;return e.createElement("style",null,s)}return e.createElement(c,h(h({},i),{},{key:Math.random()}),Array.isArray(i.children)?i.children.map((function(r,t){return e.createElement(g,{key:t,htmlJson:r,customComponents:a})})):"object"===t(i.children)&&null!==i.children?e.createElement(g,{htmlJson:i.children,customComponents:a}):i.children)}try{var u=JSON.parse(o);return e.createElement(a[null==u?void 0:u.component],h({},u.props))}catch(e){return o}}catch(e){return console.error(e),null}},v=function(t){var n=t.htmlJson,o=t.customComponents;return r.renderToString(e.createElement(s,{htmlJson:n,customComponents:o}))};export{g as DynamicRender,s as DynamicRenderJson,y as htmlReactParser,v as vNodeToHtmlString};
//# sourceMappingURL=index.js.map
