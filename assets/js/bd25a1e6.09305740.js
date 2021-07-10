(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[6565],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?t.createElement(d,c(c({ref:r},p),{},{components:n})):t.createElement(d,c({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6909:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var t=n(2122),o=n(9756),i=(n(7294),n(3905)),c=["components"],a={sidebar_position:6},s={unversionedId:"engine/models/Error",id:"engine/models/Error",isDocsHomePage:!1,title:"Error",description:"JSON Schema",source:"@site/docs/engine/models/Error.md",sourceDirName:"engine/models",slug:"/engine/models/Error",permalink:"/docs/engine/models/Error",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/engine/models/Error.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"engineSidebar",previous:{title:"Blueprint Spec",permalink:"/docs/engine/models/blueprintSpec"},next:{title:"External Input",permalink:"/docs/engine/models/external_input"}},l=[{value:"JSON Schema",id:"json-schema",children:[]}],p={toc:l};function u(e){var r=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "type":"object",\n   "properties":{\n      "name":{ "type":"string" },\n      "message":{ "type":"string" },\n      "stack":{\n         "type":"string"\n      }\n   },\n   "required": ["name","message"]\n}\n')))}u.isMDXComponent=!0}}]);