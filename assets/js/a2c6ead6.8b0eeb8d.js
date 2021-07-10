(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[9658],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(o),u=r,v=l["".concat(d,".").concat(u)]||l[u]||m[u]||a;return o?n.createElement(v,i(i({ref:t},p),{},{components:o})):n.createElement(v,i({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=l;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}l.displayName="MDXCreateElement"},306:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),i=["components"],s={},d={unversionedId:"resources/nodes/startNode",id:"resources/nodes/startNode",isDocsHomePage:!1,title:"StartNode",description:"Representa o evento que marca o in\xedcio de um processo.",source:"@site/docs/resources/nodes/startNode.md",sourceDirName:"resources/nodes",slug:"/resources/nodes/startNode",permalink:"/flow-build.github.io/docs/resources/nodes/startNode",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/resources/nodes/startNode.md",version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"blueprints",permalink:"/flow-build.github.io/docs/resources/blueprints"},next:{title:"FinishNode",permalink:"/flow-build.github.io/docs/resources/nodes/finishNode"}},c=[{value:"Par\xe2metros",id:"par\xe2metros",children:[]},{value:"Exemplo",id:"exemplo",children:[]}],p={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Representa o evento que marca o in\xedcio de um processo."),(0,a.kt)("p",null,"\xc9 permitido que um processo tenha m\xfaltiplos n\xf3s de in\xedcio, desde que nenhum ator seja capaz de acessar mais de um n\xf3."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"ATEN\xc7\xc3O  ")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\ud83d\udea8 Na eventualidade de um ator tenho acesso a m\xfaltiplos StartNodes, o processo n\xe3o ser\xe1 criado."))),(0,a.kt)("p",null,"O n\xf3 de in\xedcio gera 2 (dois) estados: o primeiro estado \xe9 gerado no momento da cria\xe7\xe3o do processo (status = UNSTARTED)\ne um segundo estado \xe9 gerado no momento em que o processo \xe9 iniciado (status = RUNNING)."),(0,a.kt)("h2",{id:"par\xe2metros"},"Par\xe2metros"),(0,a.kt)("p",null,"Este n\xf3 pode receber 2 par\xe2metros:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"input_schema"),(0,a.kt)("li",{parentName:"ul"},"timeout")),(0,a.kt)("h4",{id:"input-schema"},"input schema"),(0,a.kt)("p",null,"Um objeto representando o JSON Schema do payload de inicio do processo.\n\xc9 obrigat\xf3ria a inclus\xe3o do atributo nos parameters do startNode, mesmo que na forma de um objeto vazio."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aten\xe7\xe3o")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Caso presente, o payload ser\xe1 validado ",(0,a.kt)("em",{parentName:"p"},"ap\xf3s a cria\xe7\xe3o")," do processo, no momento do in\xedcio da execu\xe7\xe3o do processo."))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"O dado enviado no payload do start node \xe9 armazenado diretamente na bag do processo."))),(0,a.kt)("h4",{id:"timeout"},"timeout"),(0,a.kt)("p",null,"Um n\xfamero inteiro que representa o prazo (em segundos) para expira\xe7\xe3o do processo.\nExpirado esse prazo, o processo ser\xe1 finalizado com o status EXPIRED."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Se, no momento da expira\xe7\xe3o do processo, este estiver em status RUNNING, a expira\xe7\xe3o n\xe3o ocorrer\xe1.")),(0,a.kt)("h2",{id:"exemplo"},"Exemplo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":"0",\n    "name":"Start Hello",\n    "lane_id":"1",\n    "next":"1",\n    "type":"Start",\n    "parameters": {\n        "input_schema": {},\n        "timeout": 10\n    }\n}\n')))}m.isMDXComponent=!0}}]);