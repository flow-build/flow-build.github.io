(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[3737],{3905:function(e,o,t){"use strict";t.d(o,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,a,n=function(e,o){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),s=function(e){var o=a.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=s(e.components);return a.createElement(d.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},p=a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||r;return t?a.createElement(f,i(i({ref:o},u),{},{components:t})):a.createElement(f,i({ref:o},u))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var d in o)hasOwnProperty.call(o,d)&&(c[d]=o[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9512:function(e,o,t){"use strict";t.r(o),t.d(o,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return l}});var a=t(2122),n=t(9756),r=(t(7294),t(3905)),i=["components"],c={},d={unversionedId:"documentation/tokenizacao",id:"documentation/tokenizacao",isDocsHomePage:!1,title:"Tokens",description:"As requisi\xe7\xf5es para as APIs do Flowbuild s\xe3o utilizam autentica\xe7\xe3o via Bearer authentication (ou token authentication).",source:"@site/docs/documentation/tokenizacao.md",sourceDirName:"documentation",slug:"/documentation/tokenizacao",permalink:"/docs/documentation/tokenizacao",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/documentation/tokenizacao.md",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Instala\xe7\xe3o",permalink:"/docs/documentation/instalacao"},next:{title:"Processo",permalink:"/docs/documentation/processos"}},s=[{value:"Payload",id:"payload",children:[]},{value:"Valida\xe7\xe3o do Token",id:"valida\xe7\xe3o-do-token",children:[]},{value:"Gera\xe7\xe3o de Token",id:"gera\xe7\xe3o-de-token",children:[]}],u={toc:s};function l(e){var o=e.components,t=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As requisi\xe7\xf5es para as APIs do Flowbuild s\xe3o utilizam autentica\xe7\xe3o via Bearer authentication (ou token authentication).\nTodas as requisi\xe7\xf5es devem conter um header de autoriza\xe7\xe3o contendo um token JWT."),(0,r.kt)("p",null,"O conte\xfado do token ser\xe1 utilizado tamb\xe9m para lidar com a autoriza\xe7\xe3o a tarefas e workflows."),(0,r.kt)("h2",{id:"payload"},"Payload"),(0,r.kt)("p",null,'O token utilizado para autentica\xe7\xe3o dever\xe1 conter, ao menos, os campos:\nactor_id: utilizado como identificador \xfanico do usu\xe1rio\nclaims: uma lista de direitos do detentor do token, geralmente em forma de "strings".'),(0,r.kt)("p",null,"Exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actor_id": "85b579e0-dc41-11eb-a6b3-d3619c91018b",\n  "claims": ["oneClaim","anotherClaim"],\n  "iat": 1625345953,\n  "exp": 1625349553\n}\n')),(0,r.kt)("h2",{id:"valida\xe7\xe3o-do-token"},"Valida\xe7\xe3o do Token"),(0,r.kt)("p",null,"A valida\xe7\xe3o do token \xe9 feita atrav\xe9s de um middleware na aplica\xe7\xe3o que verifica a assinatura do token, sua expira\xe7\xe3o e os requisitos m\xednimos do payload."),(0,r.kt)("p",null,"A chave de assinatura do token pode ser alterada atrav\xe9s do .env da aplica\xe7\xe3o (ou .env.docker se estiver executando a aplica\xe7\xe3o via docker):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JWT_KEY=newsecret\n")),(0,r.kt)("p",null,"Se o token for validado, os campos actor_id e claims, contidos no payload do token s\xe3o passados para o processo na forma de actor_data."),(0,r.kt)("p",null,"Em adi\xe7\xe3o aos campos acima descritos, s\xe3o adicionados ao actor_data as informa\xe7\xf5es de ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/trace-context/",title:"Trace Context"},"trace"),"."),(0,r.kt)("h2",{id:"gera\xe7\xe3o-de-token"},"Gera\xe7\xe3o de Token"),(0,r.kt)("p",null,"A API do flowbuild cont\xe9m uma rota espec\xedfica para ",(0,r.kt)("a",{parentName:"p",href:"../resources/api/tokens"},"gera\xe7\xe3o de tokens"),".\n\xc9 poss\xedvel gerar um token por fora da aplica\xe7\xe3o, utilizando ferramentas como jwt.io, nesse caso, garanta que esteja utilizando a mesma assinatura configurada no\nmiddleware de valida\xe7\xe3o de token."))}l.isMDXComponent=!0}}]);