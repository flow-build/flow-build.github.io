(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[5287],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4264:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),s=["components"],p={},i={unversionedId:"engine/examples/bag_example",id:"engine/examples/bag_example",isDocsHomePage:!1,title:"bag_example",description:"Descri\xe7\xe3o",source:"@site/docs/engine/examples/bag_example.md",sourceDirName:"engine/examples",slug:"/engine/examples/bag_example",permalink:"/docs/engine/examples/bag_example",editUrl:"https://github.com/flow-build/flow-build.github.io/docs/engine/examples/bag_example.md",version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"Requests",permalink:"/docs/engine/events/requests"},next:{title:"channel_restriction",permalink:"/docs/engine/examples/channel_restriction"}},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",children:[]},{value:"Diagrama",id:"diagrama",children:[]},{value:"Blueprint",id:"blueprint",children:[]}],c={toc:l};function m(e){var n=e.components,p=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,o.kt)("p",null,"   Este exemplo tem como objetivo mostrar como criar e incluir os dados em uma bag."),(0,o.kt)("p",null,"   A regra utilizada para nomear os n\xf3s nesse exemplo \xe9 a sequ\xeancia n\xfamerica."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"}," N\xf3 1 ")," - Sempre se inicia o ",(0,o.kt)("a",{parentName:"p",href:"/docs/documentation/processos"},"processo")," com um ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/blueprints"},"n\xf3")," tipo ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/nodes/startNode"},"Start"),". "),(0,o.kt)("p",{parentName:"li"},"Nesse exemplo n\xe3o h\xe1 ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/blueprints"},"par\xe2metros")," pr\xe9-definidos para esse n\xf3. Ou seja, o objeto ",(0,o.kt)("strong",{parentName:"p"},"input_schema")," \xe9 vazio.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"}," N\xf3 2 ")," - \xc9 um ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/blueprints"},"n\xf3")," tipo ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/nodes/scriptNode"},"ScriptTask"),". "),(0,o.kt)("p",{parentName:"li"},"Analisando o objeto ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/blueprints"},"parameters")," no item ",(0,o.kt)("strong",{parentName:"p"},"function")," as vari\xe1veis ",(0,o.kt)("strong",{parentName:"p"},"example")," e ",(0,o.kt)("strong",{parentName:"p"},"value")," s\xe3o criadas e recebem respectivamente os valores ",(0,o.kt)("strong",{parentName:"p"},"bag_example")," e ",(0,o.kt)("strong",{parentName:"p"},"bag_value"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"}," N\xf3 3 ")," - O ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/blueprints"},"n\xf3")," 3 \xe9 tipo ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/nodes/systemTaskNode"},"SystemTask")," categoria ",(0,o.kt)("strong",{parentName:"p"},"Set To bag"),".\nNesse n\xf3 os objetos ",(0,o.kt)("strong",{parentName:"p"},"example")," e ",(0,o.kt)("strong",{parentName:"p"},"valueResult")," s\xe3o inclu\xeddos na bag."),(0,o.kt)("p",{parentName:"li"},"Os dados na bag se tornam dipon\xedveis para os n\xf3s a frente. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"}," N\xf3 4 ")," - o ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/blueprints"},"n\xf3")," 4 \xe9 um ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/nodes/finishNode"},"Finish Node")," encerrando o processo."))),(0,o.kt)("h2",{id:"diagrama"},"Diagrama"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bag_example",src:t(2498).Z})),(0,o.kt)("h2",{id:"blueprint"},"Blueprint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="bag_example"',title:'"bag_example"'},'\n{\n   "name":"bag_example",\n   "description":"",\n   "blueprint_spec":{\n      "requirements":[\n         "core"\n      ],\n      "prepare":[\n         \n      ],\n      "nodes":[\n         {\n            "id":"1",\n            "type":"Start",\n            "name":"Start node",\n            "parameters":{\n               "input_schema":{\n                  \n               }\n            },\n            "next":"2",\n            "lane_id":"1"\n         },\n         {\n            "id":"2",\n            "type":"ScriptTask",\n            "name":"Create values for bag",\n            "next":"3",\n            "lane_id":"1",\n            "parameters":{\n               "input":{\n                  \n               },\n               "script":{\n                  "package":"",\n                  "function":[\n                     "fn",\n                     [\n                        "&",\n                        "args"\n                     ],\n                     {\n                        "example":"bag_example",\n                        "value":"bag_value"\n                     }\n                  ]\n               }\n            }\n         },\n         {\n            "id":"3",\n            "type":"SystemTask",\n            "category":"SetToBag",\n            "name":"Set values on bag",\n            "next":"4",\n            "lane_id":"1",\n            "parameters":{\n               "input":{\n                  "example":{\n                     "$ref":"result.example"\n                  },\n                  "valueResult":{\n                     "$ref":"result.value"\n                  }\n               }\n            }\n         },\n         {\n            "id":"4",\n            "type":"Finish",\n            "name":"Finish node",\n            "next":null,\n            "lane_id":"1"\n         }\n      ],\n      "lanes":[\n         {\n            "id":"1",\n            "name":"default",\n            "rule":["fn", ["&", "args"], true]\n         }\n      ],\n      "environment":{\n         \n      }\n   }\n}\n\n\n')))}m.isMDXComponent=!0},2498:function(e,n,t){"use strict";n.Z=t.p+"assets/images/bag_example-bc3a751938228841e163ce201de2018a.png"}}]);