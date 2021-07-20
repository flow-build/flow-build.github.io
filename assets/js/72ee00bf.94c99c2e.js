(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[3284],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(f,i(i({ref:r},p),{},{components:t})):a.createElement(f,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4477:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var a=t(2122),n=t(9756),o=(t(7294),t(3905)),i=["components"],s={},l={unversionedId:"tutorial/escritaPublicacaoBlueprint",id:"tutorial/escritaPublicacaoBlueprint",isDocsHomePage:!1,title:"Escrevendo o primeiro workflow",description:"Antes de escrever qualquer blueprint, tenha em m\xe3os o diagrama do processo. Utilize um tempo para revisar o diagrama de ter claro os casos de uso l\xe1 descritos e o entendimento de cada tarefa do processo.",source:"@site/docs/tutorial/escritaPublicacaoBlueprint.md",sourceDirName:"tutorial",slug:"/tutorial/escritaPublicacaoBlueprint",permalink:"/docs/tutorial/escritaPublicacaoBlueprint",editUrl:"https://github.com/flow-build/flow-build.github.io/docs/tutorial/escritaPublicacaoBlueprint.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configura\xe7\xe3o",permalink:"/docs/tutorial/configuracao"},next:{title:"Tutorial Intro",permalink:"/docs/intro"}},u=[{value:"1o N\xedvel",id:"1o-n\xedvel",children:[]},{value:"blueprint_spec",id:"blueprint_spec",children:[{value:"Lane",id:"lane",children:[]},{value:"N\xf3s",id:"n\xf3s",children:[]},{value:"Publica\xe7\xe3o",id:"publica\xe7\xe3o",children:[]}]}],p={toc:u};function c(e){var r=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Antes de escrever qualquer blueprint, tenha em m\xe3os o diagrama do processo. Utilize um tempo para revisar o diagrama de ter claro os casos de uso l\xe1 descritos e o entendimento de cada tarefa do processo."),(0,o.kt)("p",null,"\xc9 normal que, durante a ",(0,o.kt)("em",{parentName:"p"},"transcri\xe7\xe3o")," do diagrama em um arquivo JSON, alguns n\xf3s adicionais venham a ser necess\xe1rios, raz\xe3o pela qual recomendamos evitar a utiliza\xe7\xe3o de valores num\xe9ricos para identifica\xe7\xe3o de tarefas."),(0,o.kt)("p",null,"Para esse tutorial, utilizaremos como base o diagrama da pizza 2."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pizza-2",src:t(4727).Z})),(0,o.kt)("p",null,"Para escrever seu arquivo JSON, utilize o editor de texto de sua prefer\xeancia, recomendamos o uso de editores com suporte e valida\xe7\xe3o de JSON, alguns exemplos s\xe3o listados ",(0,o.kt)("a",{parentName:"p",href:"../resources/references"},"aqui"),"."),(0,o.kt)("h2",{id:"1o-n\xedvel"},"1o N\xedvel"),(0,o.kt)("p",null,"Defina o primeiro n\xedvel de propriedades: name, description e blueprint_spec."),(0,o.kt)("p",null,"Em geral recomenda-se que o campo name seja um texto ",(0,o.kt)("em",{parentName:"p"},"system-friendly"),", ou seja, sem espa\xe7os e caracteres especiais e n\xe3o demasiadamente comprido. "),(0,o.kt)("p",null,"O campo description trata-se de um campo mais livre, um texo ",(0,o.kt)("em",{parentName:"p"},"user-friendly")," com uma explica\xe7\xe3o sucinta do processo."),(0,o.kt)("p",null,"O campo blueprint_spec, por enquanto fica como um objeto vazio."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",1:!0,className:"language-json",metastring:"title=Nivel 1",title:"Nivel"},'{\n  "name": "tutorial",\n  "description": "meu primeiro flowBuild",\n  "blueprint_spec": {}\n}\n')),(0,o.kt)("h2",{id:"blueprint_spec"},"blueprint_spec"),(0,o.kt)("p",null,"O primeiro passo e definir as propriedades fixas da blueprint, que s\xe3o:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"requirements: utilizaremos o pacote ",(0,o.kt)("strong",{parentName:"li"},"core")," para esta blueprint"),(0,o.kt)("li",{parentName:"ul"},"prepare: n\xe3o faremos nenhuma prepara\xe7\xe3o especial"),(0,o.kt)("li",{parentName:"ul"},"environment: n\xe3o utilizaremos nenhuma vari\xe1vel de ambiente neste caso")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=blueprint_spec",title:"blueprint_spec"},'{\n  "name": "tutorial",\n  "description": "meu primeiro flowBuild",\n  "blueprint_spec": {\n    "requirements": ["core"],\n    "prepare": [],\n    "environment": {}\n  }\n}\n')),(0,o.kt)("h3",{id:"lane"},"Lane"),(0,o.kt)("p",null,"Neste in\xedcio, utilizaremos uma lane sem qualquer restri\xe7\xe3oo que significa que basta um token v\xe1lido para podermos acessar a lane."),(0,o.kt)("p",null,"A fun\xe7\xe3o que rege o acesso da lane deve ser uma fun\xe7\xe3o que retorna um boleano, escrita em ",(0,o.kt)("a",{parentName:"p",href:"../resources/references"},"LISP")," ou em Javascript. Nesse caso utilizaremos uma fun\xe7\xe3o que retorna sempre o valor ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Assim como o workflow, as lanes tem um id, que recomenda-se utilizar um texto ",(0,o.kt)("em",{parentName:"p"},"system-friendly")," e um name que \xe9 um texto mais livre, ",(0,o.kt)("em",{parentName:"p"},"user-friendly"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=blueprint_spec",title:"blueprint_spec"},'{\n  "id": "anyone",\n  "name": "qualquer um pode acessar",\n  "rule": ["fn", ["&", "args"], true]\n}\n')),(0,o.kt)("p",null,"Com isso, o JSON de nossa blueprint fica assim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=blueprint_spec",title:"blueprint_spec"},'{\n  "name": "tutorial",\n  "description": "meu primeiro flowBuild",\n  "blueprint_spec": {\n    "requirements": ["core"],\n    "prepare": [],\n    "environment": {},\n    "lanes": [{\n      "id": "anyone",\n      "name": "qualquer um pode acessar",\n      "rule": ["fn", ["&", "args"], true]\n    }]\n  }\n}\n')),(0,o.kt)("h3",{id:"n\xf3s"},"N\xf3s"),(0,o.kt)("p",null,"Agora come\xe7amos a escrever os n\xf3s de nossa blueprint."),(0,o.kt)("p",null,"O primeiro n\xf3 que incluiremos ser\xe1 o n\xf3 de in\xedcio do processo. Assim como os outros elementos, ele tem um id e um name, que segue a mesma orienta\xe7\xe3o dada anteriormente."),(0,o.kt)("p",null,"Em casos de processos com um \xfanico startNode, \xe9 comum utilizar o termo ",(0,o.kt)("em",{parentName:"p"},"0")," no id, por se simples e representar de forma clara o conceito de in\xedcio."),(0,o.kt)("h3",{id:"publica\xe7\xe3o"},"Publica\xe7\xe3o"),(0,o.kt)("p",null,"Temos agora uma primeira vers\xe3o da nossa blueprint, estamos prontos para sua publica\xe7\xe3o."),(0,o.kt)("p",null,"Para publicar, utilizaremos a API de ",(0,o.kt)("a",{parentName:"p",href:"../resources/api/workflows"},"publica\xe7\xe3o de workflows"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:"title=Request",title:"Request"},"curl --location --request POST '3.82.154.55:3000/workflows' \\\n--header 'content: application/json' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {seu token}' \\\n--data-raw '{sua blueprint}'\n")))}c.isMDXComponent=!0},4727:function(e,r,t){"use strict";r.Z=t.p+"assets/images/pizza-2-66df744a6f00b3b38cc10c8346baf59f.png"}}]);