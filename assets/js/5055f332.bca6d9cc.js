(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[3737],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return s},kt:function(){return m}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||r;return o?a.createElement(f,i(i({ref:t},s),{},{components:o})):a.createElement(f,i({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9512:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var a=o(2122),n=o(9756),r=(o(7294),o(3905)),i=["components"],c={},d={unversionedId:"documentation/tokenizacao",id:"documentation/tokenizacao",isDocsHomePage:!1,title:"Tokens",description:"As requisi\xe7\xf5es para as APIs do Flowbuild s\xe3o utilizam autentica\xe7\xe3o via Bearer authentication (ou token authentication).",source:"@site/docs/documentation/tokenizacao.md",sourceDirName:"documentation",slug:"/documentation/tokenizacao",permalink:"/docs/documentation/tokenizacao",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/documentation/tokenizacao.md",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Instala\xe7\xe3o",permalink:"/docs/documentation/instalacao"},next:{title:"Processos",permalink:"/docs/documentation/processos"}},u=[{value:"Payload",id:"payload",children:[]},{value:"Valida\xe7\xe3o do Token",id:"valida\xe7\xe3o-do-token",children:[]},{value:"Gera\xe7\xe3o de Token",id:"gera\xe7\xe3o-de-token",children:[]}],s={toc:u};function l(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As requisi\xe7\xf5es para as APIs do Flowbuild s\xe3o utilizam autentica\xe7\xe3o via Bearer authentication (ou token authentication).\nTodas as requisi\xe7\xf5es devem conter um header de autoriza\xe7\xe3o contendo um token JWT."),(0,r.kt)("p",null,"O conte\xfado do token ser\xe1 utilizado tamb\xe9m para lidar com a autoriza\xe7\xe3o a tarefas e workflows."),(0,r.kt)("h2",{id:"payload"},"Payload"),(0,r.kt)("p",null,'O token utilizado para autentica\xe7\xe3o dever\xe1 conter, ao menos, os campos:\nactor_id: utilizado como identificador \xfanico do usu\xe1rio\nclaims: uma lista de direitos do detentor do token, geralmente em forma de "strings".'),(0,r.kt)("p",null,"Exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actor_id": "85b579e0-dc41-11eb-a6b3-d3619c91018b",\n  "claims": ["oneClaim","anotherClaim"],\n  "iat": 1625345953,\n  "exp": 1625349553\n}\n')),(0,r.kt)("h2",{id:"valida\xe7\xe3o-do-token"},"Valida\xe7\xe3o do Token"),(0,r.kt)("p",null,"A valida\xe7\xe3o do token \xe9 feita atrav\xe9s de um middleware na aplica\xe7\xe3o que verifica a assinatura do token, sua expira\xe7\xe3o e os requisitos m\xednimos do payload."),(0,r.kt)("p",null,"A chave de assinatura do token pode ser alterada atrav\xe9s do .env da aplica\xe7\xe3o (ou .env.docker se estiver executando a aplica\xe7\xe3o via docker):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JWT_KEY=newsecret\n")),(0,r.kt)("p",null,"Ap\xf3s validado, os campos do payload s\xe3o passados para o processo, juntamente com campos de ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/trace-context/",title:"Trace Context"},"trace"),", dentro do espa\xe7o actor_data."),(0,r.kt)("h2",{id:"gera\xe7\xe3o-de-token"},"Gera\xe7\xe3o de Token"),(0,r.kt)("p",null,"A API do flowbuild cont\xe9m uma rota espec\xedfica para ",(0,r.kt)("a",{parentName:"p",href:"../resources/api"},"gera\xe7\xe3o de tokens"),".\n\xc9 poss\xedvel gerar um token por fora da aplica\xe7\xe3o, utilizando ferramentas como jwt.io, nesse caso, garanta que esteja utilizando a mesma assinatura configurada no\nmiddleware de valida\xe7\xe3o de token."))}l.isMDXComponent=!0}}]);