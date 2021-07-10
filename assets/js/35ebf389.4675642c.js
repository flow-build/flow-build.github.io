(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[1206],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7453:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),c=["components"],s={sidebar_position:9},a={unversionedId:"engine/models/process",id:"engine/models/process",isDocsHomePage:!1,title:"Process",description:"JSON Schema",source:"@site/docs/engine/models/process.md",sourceDirName:"engine/models",slug:"/engine/models/process",permalink:"/flow-build.github.io/docs/engine/models/process",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/engine/models/process.md",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"engineSidebar",previous:{title:"Packages",permalink:"/flow-build.github.io/docs/engine/models/package"},next:{title:"Process Activity",permalink:"/flow-build.github.io/docs/engine/models/processActivity"}},u=[{value:"JSON Schema",id:"json-schema",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "type":"object",\n   "properties":{\n      "id": { "type":"string", "format":"uuid" },\n      "created_at":{ "type":"string ", "format":"date-time" },\n      "workflow_id": { "type":"string", "format":"uuid" },\n      "current_status": { \n         "type":"string",\n         "enum": ["unstarted","running","error","waiting","finished","pending","delegated"] \n      },\n      "blueprint_spec": { "$ref": "#/models/workflow/blueprint_spec" },\n      "state":{ "$ref": "#/models/process_state" },\n   }\n}\n')))}p.isMDXComponent=!0}}]);