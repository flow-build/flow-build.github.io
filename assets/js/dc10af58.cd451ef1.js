(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[1905],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4658:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:3},s={unversionedId:"tutorial/configuracao",id:"tutorial/configuracao",isDocsHomePage:!1,title:"Configura\xe7\xe3o",description:"Clone o reposit\xf3rio da API do FlowBuild.",source:"@site/docs/tutorial/configuracao.md",sourceDirName:"tutorial",slug:"/tutorial/configuracao",permalink:"/docs/tutorial/configuracao",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/tutorial/configuracao.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar"},u=[{value:"Vari\xe1veis de ambiente",id:"vari\xe1veis-de-ambiente",children:[]},{value:"Rode o projeto no docker",id:"rode-o-projeto-no-docker",children:[]}],p={toc:u};function l(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Clone o reposit\xf3rio da ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flow-build/workflow-api"},"API do FlowBuild"),"."),(0,a.kt)("h2",{id:"vari\xe1veis-de-ambiente"},"Vari\xe1veis de ambiente"),(0,a.kt)("p",null,"Adicione um arquivo de vari\xe1veis de ambiente ",(0,a.kt)("em",{parentName:"p"},".env.docker")," ao seu folder local e define a senha para assinatura dos seus tokens:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"JWT_KEY=sua-nova-senha\n")),(0,a.kt)("h2",{id:"rode-o-projeto-no-docker"},"Rode o projeto no docker"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Verifique se voc\xea tem o docker instalado, caso contr\xe1rio consulta a se\xe7\xe3o de ",(0,a.kt)("a",{parentName:"p",href:"../documentation/instalacao"},"instala\xe7\xe3o"),"."),(0,a.kt)("p",{parentName:"div"},"Para rodar o docker, execute o c\xf3digo:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,a.kt)("p",{parentName:"div"},"Certifique-se que as portas 3000 e 5432 estejam liberadas no seu localhost."),(0,a.kt)("h2",{parentName:"div",id:"fa\xe7a-sua-primeira-consulta"},"Fa\xe7a sua primeira consulta"),(0,a.kt)("p",{parentName:"div"},"Com a aplica\xe7\xe3o executando, gere um token e consulte os workflows dispon\xedveis em seu servidor local."))))}l.isMDXComponent=!0}}]);