(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[4599],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),l=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:e},u),{},{components:t})):r.createElement(f,i({ref:e},u))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7497:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],s={},c={unversionedId:"resources/examples/matricula",id:"resources/examples/matricula",isDocsHomePage:!1,title:"Matricula",description:"Exemplo 1",source:"@site/docs/resources/examples/matricula.md",sourceDirName:"resources/examples",slug:"/resources/examples/matricula",permalink:"/docs/resources/examples/matricula",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/resources/examples/matricula.md",version:"current",frontMatter:{}},l=[],u={toc:l};function p(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo 1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="C\xf3digo Exemplo 1:"',title:'"C\xf3digo',Exemplo:!0,'1:"':!0},'"const blueprint_spec ="{\n   "environment":[\n      \n   ],\n   "requirements":[\n      "core"\n   ],\n   "prepare":[\n      \n   ],\n   "lanes":[\n      {\n         "id":"1",\n         "name":"default",\n         "rule":[\n            "fn",\n            [\n               "&",\n               "args"\n            ],\n            true\n         ]\n      }\n   ],\n   "nodes":[\n      {\n         "id":"1-0",\n         "type":"Start",\n         "name":"Start node",\n         "parameters":{\n            "input_schema":{\n               "matricula":{\n                  "type":"string"\n               },\n               "required":[\n                  "matricula"\n               ]\n            }\n         },\n         "next":"1-1",\n         "lane_id":"1"\n      },\n      {\n         "id":"1-1",\n         "next":"F0",\n         "lane_id":"1",\n         "type":"SystemTask",\n         "category":"setToBag",\n         "name":"Salvar collections na bag",\n         "parameters":{\n            "input":{\n               :{\n                  "$mustache":"http://localhost:1337/api/v0/notas/{{bag.matricula}}"\n               },\n               "notas":{\n                  "$ref":"result"\n               }\n            },\n            "request":{\n               "verb":"GET",\n               "url":{\n                  "$mustache":"http://localhost:1337/api/v0/notas/{{bag.matricula}}"\n               },\n               "headers":{\n                  "ContentType":"application/json"\n               }\n            }\n         }\n      },\n      {\n         "id":"F0",\n         "type":"Flow",\n         "name":"A matr\xedcula \xe9 v\xe1lida?",\n         "next":{\n            "success":"1-2",\n            "default":"2-99"\n         },\n         "lane_id":"1",\n         "parameters":{\n            "input":{\n               "decision":{\n                  "$ref":"result.data.status"\n               }\n            }\n         }\n      },\n      {\n         "id":"1-2",\n         "next":"F1",\n         "lane_id":"1",\n         "type":"SystemTask",\n         "category":"setToBag",\n         "name":"Calcula m\xe9dia",\n         "parameters":{\n            "input":{\n               "media":{\n                  "$js":"({ result }) => result.data.message.reduce((t, n,\ni) => (t * i + n) / (i + 1), 0)"\n               }\n            }\n         }\n      },\n      {\n         "id":"F1",\n         "type":"Flow""name":"O aluno foi aprovado?",\n         "next":{\n            true:"1-3A",\n            false:"1-3B",\n            "default":"1-99"\n         },\n         "lane_id":"1",\n         "parameters":{\n            "input":{\n               "decision":{\n                  "$js":"({bag}) => bag.media > 5"\n               }\n            }\n         }\n      },\n      {\n         "id":"1-3A",\n         "next":"1-99",\n         "lane_id":"1",\n         "type":"SystemTask",\n         "category":"setToBag",\n         "name":"Envia email de aprova\xe7\xe3o",\n         "parameters":{\n            "input":{\n               "email":"Voc\xea foi aprovado!"\n            }\n         }\n      },\n      {\n         "id":"1-3B",\n         "next":"1-99",\n         "lane_id":"1",\n         "type":"SystemTask",\n         "category":"setToBag",\n         "name":"Envia email de reprova\xe7\xe3o",\n         "parameters":{\n            "input":{\n               "email":"Voc\xea foi reprovado!"\n            }\n         }\n      },\n      {\n         "id":"1-99",\n         "type":"Finish",\n         "name":"Finish node",\n         "next":null,\n         "lane_id":"1"\n      }\n   ]\n}\n')))}p.isMDXComponent=!0}}]);