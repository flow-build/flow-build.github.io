(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[7688],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1273:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:7},l={unversionedId:"engine/models/external_input",id:"engine/models/external_input",isDocsHomePage:!1,title:"External Input",description:"O campo external input \xe9 um objeto cujas propriedades variam em fun\xe7\xe3o do n\xf3 executado.",source:"@site/docs/engine/models/external_input.md",sourceDirName:"engine/models",slug:"/engine/models/external_input",permalink:"/flow-build.github.io/docs/engine/models/external_input",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/engine/models/external_input.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"engineSidebar",previous:{title:"Error",permalink:"/flow-build.github.io/docs/engine/models/Error"},next:{title:"Packages",permalink:"/flow-build.github.io/docs/engine/models/package"}},u=[{value:"JSON",id:"json",children:[]},{value:"Exemplo",id:"exemplo",children:[]}],p={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"O campo external input \xe9 um objeto cujas propriedades variam em fun\xe7\xe3o do n\xf3 executado."),(0,a.kt)("h2",{id:"json"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object"\n}\n')),(0,a.kt)("h2",{id:"exemplo"},"Exemplo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "activities": [\n    {\n      "id": "06fe61e0-e01d-11eb-9568-0334791767bc", \n      "data": {\n        "email": "hijor79926@noobf.com", \n        "token": "3c1ef530-df58-11eb-913c-a14cd9554669"\n      }, \n      "status": "started", \n      "actor_data": {\n        "trace": {}, \n        "claims": ["anonymous"], \n        "origin": "http://localhost:3000", \n        "actor_id": "09ea5390-b7ca-11ea-9e23-9bc0962ec17c", \n        "event_id": "bf1808f1-ea08-4789-ba0e-66d63f7ef187", \n        "client_ip": "::ffff:10.0.2.107", \n        "userAgent": {\n          "os": "Linux 64", \n          "browser": "Chrome", \n          "isMobile": false, \n          "platform": "Linux"\n        }, \n        "account_id": "d47305a0-1ed4-11eb-ba42-01e2029c0a36"\n      }, \n      "created_at": "2021-07-08T18:48:04.094Z", \n      "activity_manager_id": "f1bf3c00-e01c-11eb-9568-0334791767bc"\n    }\n  ]\n}\n')))}s.isMDXComponent=!0}}]);