(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[4207],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return E}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),E=a,O=m["".concat(u,".").concat(E)]||m[E]||s[E]||o;return n?r.createElement(O,i(i({ref:t},p),{},{components:n})):r.createElement(O,i({ref:t},p))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8815:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:22},u={unversionedId:"engine/functions/runProcess",id:"engine/functions/runProcess",isDocsHomePage:!1,title:"runProcess",description:"Inicia ou retoma a execu\xe7\xe3o de um processo.",source:"@site/docs/engine/functions/runProcess.md",sourceDirName:"engine/functions",slug:"/engine/functions/runProcess",permalink:"/docs/engine/functions/runProcess",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/engine/functions/runProcess.md",version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"engineSidebar",previous:{title:"pushActivity",permalink:"/docs/engine/functions/pushActivity"},next:{title:"savePackage",permalink:"/docs/engine/functions/savePackage"}},c=[{value:"Type",id:"type",children:[]},{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]},{value:"Eventos Relacionados",id:"eventos-relacionados",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Inicia ou retoma a execu\xe7\xe3o de um processo."),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("p",null,"UPDATE"),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"parameters"),": process_id, actor_data, external_input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "process_id": { "type": "string", "format": "uuid" },\n    "actor_data": { "$ref": "#/models/Actor Data" },\n    "external_input": { "type": "object" },\n    "required": ["process_id","actor_data","external_input"]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../models/actor_data"},"Actor Data")),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "oneOf": [\n        {\n            "$ref": "#/models/Process State"    \n        },\n        {\n            "$ref": "#/models/Error"\n        }\n    ]\n    "process_id": { "type": "string", "format": "uuid" },\n    "actor_data": { "$ref": "#/models/Actor Data" },\n    "required": ["process_id","actor_data"]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../models/processState"},"Process State"),"\n",(0,o.kt)("a",{parentName:"p",href:"../models/error"},"Error")),(0,o.kt)("h2",{id:"eventos-relacionados"},"Eventos Relacionados"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PROCESS.RUN"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.EDGE.ERROR"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.TIMER.CREATING"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.TIMER.NEW"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.RESULT_SCHEMA.ERROR"),(0,o.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.START"),(0,o.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.TRANSACTION"),(0,o.kt)("li",{parentName:"ul"},"INNERLOOP.LOCK"),(0,o.kt)("li",{parentName:"ul"},"INNERLOOP.STATE_LOCK"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.START_NODE_RUN"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.EDGE.NODE_RESULT_ERROR"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.END_NODE_RUN"),(0,o.kt)("li",{parentName:"ul"},"PROCESS_STATE.NEW"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.TIMER.CREATING"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.TIMER.NEW"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.AM.CREATING"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.AM.NEW"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.SUBPROCESS.CREATING"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.SUBPROCESS.NEW"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.FINISHED"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.SUBPROCESS.UPSTREAM"),(0,o.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.COMMIT"),(0,o.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.ROLLBACK"),(0,o.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.END"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.ACTIVITY_MANAGER.CREATED"),(0,o.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.LEFT"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.TIMEOUT"),(0,o.kt)("li",{parentName:"ul"},"PROCESS.TIMEOUT.BAIL")))}s.isMDXComponent=!0}}]);