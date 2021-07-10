(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[4378],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2446:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],u={sidebar_position:2},c={unversionedId:"engine/functions/addTimeInterval",id:"engine/functions/addTimeInterval",isDocsHomePage:!1,title:"addTimeInterval",description:"Cria ou atualiza o timer de um Activity Manager.",source:"@site/docs/engine/functions/addTimeInterval.md",sourceDirName:"engine/functions",slug:"/engine/functions/addTimeInterval",permalink:"/flow-build.github.io/docs/engine/functions/addTimeInterval",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/engine/functions/addTimeInterval.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"engineSidebar",previous:{title:"abortProcess",permalink:"/flow-build.github.io/docs/engine/functions/abortProcess"},next:{title:"beginActivity",permalink:"/flow-build.github.io/docs/engine/functions/beginActivity"}},l=[{value:"Type",id:"type",children:[]},{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]},{value:"Eventos Relacionados",id:"eventos-relacionados",children:[]}],p={toc:l};function s(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cria ou atualiza o timer de um Activity Manager."),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("p",null,"CREATE ou UPDATE"),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"parameters"),": id, timeInterval, resource_type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "id": { "type": "string", "format": "uuid"},\n    "timeInterval": {\n        "oneOf": [\n            { "type": "number"}, \n            { "type": "string", "format": "dateTime" }\n        ]\n    },\n    "resource_type": {\n        "type": "string", \n        "enum": ["ActivityManager","Process","Mock"]\n    }\n}\n')),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "oneOf": [\n        { \n            "type": "object",\n            "properties": {\n                "error": { \n                    "type": "object",\n                    "properties": {\n                        "errorType": { "type": "string" },\n                        "message": { "type": "string" }\n                    }\n                }\n            }\n        },\n        null\n    ]\n}\n')),(0,o.kt)("h2",{id:"eventos-relacionados"},"Eventos Relacionados"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ACTIVITY_MANAGER_TIMER.CREATING_NEW")))}s.isMDXComponent=!0}}]);