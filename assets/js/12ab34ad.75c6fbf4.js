(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[169],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,E=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(E,o(o({ref:t},s),{},{components:n})):r.createElement(E,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9928:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:27},u={unversionedId:"engine/functions/submitActivity",id:"engine/functions/submitActivity",isDocsHomePage:!1,title:"submitActivity",description:"Envia as atividades do Activity Manager para o processo, retomando a execu\xe7\xe3o do mesmo.",source:"@site/docs/engine/functions/submitActivity.md",sourceDirName:"engine/functions",slug:"/engine/functions/submitActivity",permalink:"/docs/engine/functions/submitActivity",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/engine/functions/submitActivity.md",version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"engineSidebar",previous:{title:"setProcessState",permalink:"/docs/engine/functions/setProcessState"},next:{title:"validateBlueprint",permalink:"/docs/engine/functions/validateBlueprint"}},c=[{value:"Type",id:"type",children:[]},{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[{value:"ErrorTypes",id:"errortypes",children:[]}]},{value:"Eventos Relacionados",id:"eventos-relacionados",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Envia as atividades do Activity Manager para o processo, retomando a execu\xe7\xe3o do mesmo."),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("p",null,"UPDATE"),(0,i.kt)("h2",{id:"input"},"Input"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"parameters"),": activity_manager_id, actor_data, external_input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "activity_manager_id": { "type": "string", "format": "uuid" },\n    "actor_data": { "$ref": "#/models/Actor Data" },\n    "required": ["activity_manager_id","actor_data"]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../models/actor_data"},"Actor Data")),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "oneOf": [\n        {\n            "$ref": "#/models/Process"    \n        },\n        {\n            "$ref": "#/models/Process State"    \n        },\n        {\n            "$ref": "#/models/Error"\n        }\n    ]\n    "process_id": { "type": "string", "format": "uuid" },\n    "actor_data": { "$ref": "#/models/Actor Data" },\n    "required": ["process_id","actor_data"]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../models/process"},"Process")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../models/processState"},"Process State")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../models/error"},"Error")),(0,i.kt)("h3",{id:"errortypes"},"ErrorTypes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"commitActivity"),": n\xe3o foi poss\xedvel salvar a atividade no Activity Manager."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"submitActivity"),": o Activity Manager n\xe3o se encontra em status ",(0,i.kt)("strong",{parentName:"li"},"started"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"activityManager"),": o Activity Manager n\xe3o foi encontrado (pode significar que o ator n\xe3o tem acesso ao Activity Manager).")),(0,i.kt)("h2",{id:"eventos-relacionados"},"Eventos Relacionados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PROCESS.RUN"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.EDGE.ERROR"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.TIMER.CREATING"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.TIMER.NEW"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.RESULT_SCHEMA.ERROR"),(0,i.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.START"),(0,i.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.TRANSACTION"),(0,i.kt)("li",{parentName:"ul"},"INNERLOOP.LOCK"),(0,i.kt)("li",{parentName:"ul"},"INNERLOOP.STATE_LOCK"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.START_NODE_RUN"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.EDGE.NODE_RESULT_ERROR"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.END_NODE_RUN"),(0,i.kt)("li",{parentName:"ul"},"PROCESS_STATE.NEW"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.TIMER.CREATING"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.TIMER.NEW"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.AM.CREATING"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.AM.NEW"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.SUBPROCESS.CREATING"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.SUBPROCESS.NEW"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.FINISHED"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.SUBPROCESS.UPSTREAM"),(0,i.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.COMMIT"),(0,i.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.ROLLBACK"),(0,i.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.END"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.ACTIVITY_MANAGER.CREATED"),(0,i.kt)("li",{parentName:"ul"},"EXECUTION_LOOP.LEFT"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.TIMEOUT"),(0,i.kt)("li",{parentName:"ul"},"PROCESS.TIMEOUT.BAIL")))}p.isMDXComponent=!0}}]);