(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[9431],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},843:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],p={sidebar_position:28},u={unversionedId:"engine/functions/validateBlueprint",id:"engine/functions/validateBlueprint",isDocsHomePage:!1,title:"validateBlueprint",description:"Executa a valida\xe7\xe3o da blueprint spec.",source:"@site/docs/engine/functions/validateBlueprint.md",sourceDirName:"engine/functions",slug:"/engine/functions/validateBlueprint",permalink:"/docs/engine/functions/validateBlueprint",editUrl:"https://github.com/flow-build/flow-build.github.io/docs/engine/functions/validateBlueprint.md",version:"current",sidebarPosition:28,frontMatter:{sidebar_position:28},sidebar:"engineSidebar",previous:{title:"submitActivity",permalink:"/docs/engine/functions/submitActivity"},next:{title:"Modelo de dados",permalink:"/docs/engine/models/modeloDeDados"}},c=[{value:"Type",id:"type",children:[]},{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Executa a valida\xe7\xe3o da blueprint spec."),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("p",null,"READ"),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"parameters"),": blueprint_spec"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "blueprint_spec": { \n        "$ref": { "#/models/blueprintSpec"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../models/blueprintSpec"},"Blueprint Spec")),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "oneOf": [\n        {\n            "type": "object",\n            "properties": {\n                "value": { "type": "any" },\n                "message": { "type": "string" }\n            }\n        },\n        {\n            "type": "object",\n            "properties": { \n                "actual": { "type": "any" },\n                "expected": { "type": "any" },\n                "operator": { "type": "string" },\n                "generatedMaessage": { "type": "boolean" },\n                "code": "ERR_ASSERTION"\n            }\n        }\n    ]\n}\n')))}s.isMDXComponent=!0}}]);