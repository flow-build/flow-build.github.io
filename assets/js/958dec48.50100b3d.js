(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[5004],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,m=s["".concat(a,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(m,c(c({ref:t},f),{},{components:n})):r.createElement(m,c({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1571:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return a},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),c=["components"],u={sidebar_position:18},a={unversionedId:"engine/functions/fetchWorkflow",id:"engine/functions/fetchWorkflow",isDocsHomePage:!1,title:"fetchWorkflow",description:"Retorna o workflow informado.",source:"@site/docs/engine/functions/fetchWorkflow.md",sourceDirName:"engine/functions",slug:"/engine/functions/fetchWorkflow",permalink:"/flow-build.github.io/docs/engine/functions/fetchWorkflow",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/engine/functions/fetchWorkflow.md",version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"engineSidebar",previous:{title:"fetchProcessStateHistory",permalink:"/flow-build.github.io/docs/engine/functions/fetchProcessStateHistory"},next:{title:"fetchWorkflowByName",permalink:"/flow-build.github.io/docs/engine/functions/fetchWorkflowByName"}},l=[{value:"Type",id:"type",children:[]},{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]}],f={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Retorna o workflow informado."),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("p",null,"READ"),(0,i.kt)("h2",{id:"input"},"Input"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"parameters"),": workflow_id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "process_id": { "type": "string", "format": "uuid" }\n    "required": ["workflow_id"]\n}\n')),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../models/workflow"},"Workflow")))}p.isMDXComponent=!0}}]);