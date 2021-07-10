(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[2802],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5850:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:10},l={unversionedId:"engine/functions/fetchActivityManager",id:"engine/functions/fetchActivityManager",isDocsHomePage:!1,title:"fetchActivityManager",description:"Se o actor tiver permiss\xe3o de acesso, retorna o Activity Manager solicitado, juntamente com as atividades vinculadas e a data de expira\xe7\xe3o, se houver.",source:"@site/docs/engine/functions/fetchActivityManager.md",sourceDirName:"engine/functions",slug:"/engine/functions/fetchActivityManager",permalink:"/flow-build.github.io/docs/engine/functions/fetchActivityManager",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/engine/functions/fetchActivityManager.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"engineSidebar",previous:{title:"deleteWorkflow",permalink:"/flow-build.github.io/docs/engine/functions/deleteWorkflow"},next:{title:"fetchAvailableActivitiesForActor",permalink:"/flow-build.github.io/docs/engine/functions/fetchAvailableActivitiesForActor"}},u=[{value:"Type",id:"type",children:[]},{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]},{value:"Eventos Relacionados",id:"eventos-relacionados",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Se o actor tiver permiss\xe3o de acesso, retorna o Activity Manager solicitado, juntamente com as atividades vinculadas e a data de expira\xe7\xe3o, se houver."),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("p",null,"READ"),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"parameters"),": activity_manager_id, actor_data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "activity_manager_id": { "type": "string", "format": "uuid" },\n    "actor_data": { "$ref": "#/models/Actor Data" }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../models/actor_data"},"Actor Data")),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Schema",title:"Schema"},'{\n    "type": "object",\n    "properties": {\n        "$ref": "#/models/Activity Manager",\n        "activities": {\n            "$ref": "#/models/Activity"\n        },\n        "expires_at": {  "type": "string", "format": "date-time" }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../models/activity_manager"},"Activity Manager")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../models/activity"},"Activity")),(0,a.kt)("h2",{id:"eventos-relacionados"},"Eventos Relacionados"))}p.isMDXComponent=!0}}]);