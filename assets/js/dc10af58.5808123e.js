(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[1905],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?n.createElement(f,i(i({ref:a},d),{},{components:t})):n.createElement(f,i({ref:a},d))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4658:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=t(2122),o=t(9756),r=(t(7294),t(3905)),i=["components"],c={},s={unversionedId:"tutorial/configuracao",id:"tutorial/configuracao",isDocsHomePage:!1,title:"Configura\xe7\xe3o",description:"Clone o reposit\xf3rio da API do FlowBuild.",source:"@site/docs/tutorial/configuracao.md",sourceDirName:"tutorial",slug:"/tutorial/configuracao",permalink:"/docs/tutorial/configuracao",editUrl:"https://github.com/flow-build/flow-build.github.io/docs/tutorial/configuracao.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Escrevendo o primeiro workflow",permalink:"/docs/tutorial/escritaPublicacaoBlueprint"}},l=[{value:"Vari\xe1veis de ambiente",id:"vari\xe1veis-de-ambiente",children:[]},{value:"Rode o projeto no docker",id:"rode-o-projeto-no-docker",children:[]},{value:"Fa\xe7a sua primeira consulta",id:"fa\xe7a-sua-primeira-consulta",children:[]}],d={toc:l};function p(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Clone o reposit\xf3rio da ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flow-build/workflow-api"},"API do FlowBuild"),"."),(0,r.kt)("h2",{id:"vari\xe1veis-de-ambiente"},"Vari\xe1veis de ambiente"),(0,r.kt)("p",null,"Adicione um arquivo de vari\xe1veis de ambiente ",(0,r.kt)("em",{parentName:"p"},".env.docker")," ao seu folder local e definaa senha para assinatura dos seus tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JWT_KEY=sua-nova-senha\n")),(0,r.kt)("h2",{id:"rode-o-projeto-no-docker"},"Rode o projeto no docker"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Verifique se voc\xea tem o docker instalado, caso contr\xe1rio consulta a se\xe7\xe3o de ",(0,r.kt)("a",{parentName:"p",href:"../documentation/instalacao"},"instala\xe7\xe3o"),"."))),(0,r.kt)("p",null,"Para executar a aplica\xe7\xe3o, execute o comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,r.kt)("p",null,"Certifique-se que as portas 3000 e 5432 estejam liberadas no seu localhost."),(0,r.kt)("h2",{id:"fa\xe7a-sua-primeira-consulta"},"Fa\xe7a sua primeira consulta"),(0,r.kt)("p",null,"Com a aplica\xe7\xe3o executando, gere um ",(0,r.kt)("a",{parentName:"p",href:"../resources/api/tokens"},"token"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Lembre-se")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Quando for gerar um token inclua no header o par\xe2metro ",(0,r.kt)("inlineCode",{parentName:"p"},"x-secret=sua-nova-senha")," para que o token gerado utilize a mesma senha cadastrada no ambiente"))),(0,r.kt)("p",null,"Com esse token, fa\xe7a uma chamada para ",(0,r.kt)("a",{parentName:"p",href:"../resources/api/workflows"},"listar os workflows")," dispon\xedveis."),(0,r.kt)("p",null,"\xc9 esperado um retorno de uma lista contendo 5 workflows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Exemplo",title:"Exemplo"},'[\n    {\n        "id": "d373bef0-1152-11ea-9576-9584815cab84",\n        "name": "test_workflow",\n        "description": "Workflow para rodar testes sobre a aplica\xe7\xe3o",\n        "version": 1,\n        "created_at": "2021-06-07T20:35:38.973Z"\n    },\n    {\n        "id": "2210847e-8b61-4af7-9df7-73fd2b0bb24d",\n        "name": "test_schemas",\n        "description": "Workflow para rodar testes de schemas (input, activity, result)",\n        "version": 1,\n        "created_at": "2021-06-07T20:35:38.973Z"\n    },\n    {\n        "id": "5fefa640-e264-4481-a437-2adc3ceb6efa",\n        "name": "test_subprocess_child",\n        "description": "Workflow para rodar testes de subprocess, processo filho",\n        "version": 1,\n        "created_at": "2021-06-07T20:35:38.973Z"\n    },\n    {\n        "id": "7be513f4-98dc-43e2-8f3a-66e68a61aca8",\n        "name": "pizza1",\n        "description": "Cookbook somente com systemTasks, mostrando o uso das notacoes de atalho",\n        "version": 1,\n        "created_at": "2021-06-07T20:35:38.973Z"\n    },\n    {\n        "id": "8fc66458-1137-4c1a-9aef-5dcdca9a19f6",\n        "name": "pizza2",\n        "description": "Cookbook com userTasks e lanes",\n        "version": 1,\n        "created_at": "2021-06-07T20:35:38.973Z"\n    }\n]\n')))}p.isMDXComponent=!0}}]);