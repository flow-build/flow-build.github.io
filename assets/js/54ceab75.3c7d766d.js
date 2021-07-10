(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[6280],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1936:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={},c={unversionedId:"resources/nodes/scriptNode",id:"resources/nodes/scriptNode",isDocsHomePage:!1,title:"ScriptNode",description:"N\xf3 de script \xe9 o n\xf3 capaz de executar um script.",source:"@site/docs/resources/nodes/scriptNode.md",sourceDirName:"resources/nodes",slug:"/resources/nodes/scriptNode",permalink:"/docs/resources/nodes/scriptNode",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/resources/nodes/scriptNode.md",version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"systemTaskNode",permalink:"/docs/resources/nodes/systemTaskNode"},next:{title:"SubProcessNode",permalink:"/docs/resources/nodes/subprocessNode"}},p=[{value:"Par\xe2metros",id:"par\xe2metros",children:[{value:"Input",id:"input",children:[]},{value:"Script",id:"script",children:[]},{value:"Exemplo",id:"exemplo",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"N\xf3 de script \xe9 o n\xf3 capaz de executar um script."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"O uso de scriptNodes n\xe3o \xe9 uma pr\xe1tica recomendada para execu\xe7\xe3o de processos em ambiente de produ\xe7\xe3o."))),(0,a.kt)("h2",{id:"par\xe2metros"},"Par\xe2metros"),(0,a.kt)("p",null,"O scriptNode espera 2 atributos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"input"),(0,a.kt)("li",{parentName:"ul"},"script")),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("p",null,"\xc9 representado por um objeto, com os atributos se entrada do script."),(0,a.kt)("h3",{id:"script"},"Script"),(0,a.kt)("p",null,"Representa a fun\xe7\xe3o LISP de dever\xe1 ser executada."),(0,a.kt)("h3",{id:"exemplo"},"Exemplo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id":"4",\n   "name":"Script task node",\n   "next":"5",\n   "type":"ScriptTask",\n   "lane_id":"1",\n   "parameters":{\n      "input":{\n         "features":{\n            "$ref":"result.data.features"\n         }\n      },\n      "script":{\n         "function":[\n            "fn",\n            [\n               "input",\n               "&",\n               "args"\n            ],\n            [\n               "js",\n               [\n                  "str",\n                  [\n                     "`",\n                     "let features = "\n                  ],\n                  [\n                     "get",\n                     "input",\n                     [\n                        "`",\n                        "features"\n                     ]\n                  ],\n                  [\n                     "`",\n                     "; let result = {}; let is_istantor_on =\nfeatures.find(feature => feature.name === \'instantor\'); result.is_istantor_on =\nBoolean(is_istantor_on); result;"\n                  ]\n               ]\n            ]\n         ]\n      }\n   }\n')))}d.isMDXComponent=!0}}]);