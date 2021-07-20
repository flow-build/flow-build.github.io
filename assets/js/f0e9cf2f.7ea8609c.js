(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[7369],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(o),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3451:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),i=["components"],c={sidebar_position:1},l={unversionedId:"documentation/cicloDeVidaDeProcesso",id:"documentation/cicloDeVidaDeProcesso",isDocsHomePage:!1,title:"Ciclo de vida do processo",description:"Nessa p\xe1gina ser\xe1 poss\xedvel entender como um ciclo de execu\xe7\xe3o da API funciona.",source:"@site/docs/documentation/cicloDeVidaDeProcesso.md",sourceDirName:"documentation",slug:"/documentation/cicloDeVidaDeProcesso",permalink:"/docs/documentation/cicloDeVidaDeProcesso",editUrl:"https://github.com/flow-build/flow-build.github.io/docs/documentation/cicloDeVidaDeProcesso.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Flowbuild",permalink:"/docs/documentation/flowbuild"},next:{title:"CICLO DE VIDA DE ATIVIDADE",permalink:"/docs/documentation/cicloDeVidaDeAtividade"}},s=[{value:"Ciclo B\xe1sico",id:"ciclo-b\xe1sico",children:[]}],u={toc:s};function p(e){var t=e.components,c=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nessa p\xe1gina ser\xe1 poss\xedvel entender como um ciclo de execu\xe7\xe3o da API funciona.\nVisualmente, pode-se observar abaixo o seguinte diagrama de execu\xe7\xe3o: "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ciclo-api",src:o(8852).Z})),(0,a.kt)("h2",{id:"ciclo-b\xe1sico"},"Ciclo B\xe1sico"),(0,a.kt)("p",null,"O ciclo b\xe1sico para a requisi\xe7\xe3o API \xe9 composto pela seguinte sequ\xeancia de processos:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GET/token",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"token > actor_id"))),(0,a.kt)("li",{parentName:"ul"},"Inscreve-se em um t\xf3pico no WS MQTT"),(0,a.kt)("li",{parentName:"ul"},"POST /workflows/name/{workflow_name}/start",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"process_id"))),(0,a.kt)("li",{parentName:"ul"},"Recebe process_id no t\xf3pico"),(0,a.kt)("li",{parentName:"ul"},"GET /process/{process_id}",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"activity_manager_id"))),(0,a.kt)("li",{parentName:"ul"},"GET /process/activityManager/{activity_manager_id}",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Actions& Props")))),(0,a.kt)("p",null,"Para entender um pouco mais do que foi descrito acima, tem-se a seguinte explica\xe7\xe3o:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Antes de realizar qualquer a\xe7\xe3o, \xe9 necess\xe1ria uma autentica\xe7\xe3o, que pode ser feita atrav\xe9s de um token, por exemplo;"),(0,a.kt)("li",{parentName:"ul"},"Ap\xf3s isso, \xe9 feita uma inscri\xe7\xe3o em um t\xf3pico no protocolo MQTT;"),(0,a.kt)("li",{parentName:"ul"},"A partir desse ponto, o processo \xe9 iniciado e um ",(0,a.kt)("inlineCode",{parentName:"li"},"process_id")," \xe9 retornado;"),(0,a.kt)("li",{parentName:"ul"},"O t\xf3pico MQTT ir\xe1 receber esse processo;"),(0,a.kt)("li",{parentName:"ul"},"O processo ser\xe1 chamado e ficar\xe1 nesse ciclo at\xe9 que uma atividade seja requerida, o que ir\xe1 retornar um ",(0,a.kt)("inlineCode",{parentName:"li"},"activity_manager_id"),";",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Antes de prosseguir, \xe9 necess\xe1rio explicar alguns pontos do ",(0,a.kt)("inlineCode",{parentName:"li"},"activity_manager"),": "),(0,a.kt)("li",{parentName:"ul"},"O ",(0,a.kt)("inlineCode",{parentName:"li"},"activity_manager")," \xe9 composto por uma ",(0,a.kt)("inlineCode",{parentName:"li"},"action")," e por um ",(0,a.kt)("inlineCode",{parentName:"li"},"props"),", que s\xe3o:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"action"),": O que ser\xe1 feito/Tarefa a ser executada"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),": Dados necess\xe1rios para a execu\xe7\xe3o"))))),(0,a.kt)("li",{parentName:"ul"},"Quando o processo chega nesse estado, s\xe3o realizados Submits em suas chamadas;"),(0,a.kt)("li",{parentName:"ul"},"Nesse ponto o processo continuar\xe1 rodando at\xe9 que outro ",(0,a.kt)("inlineCode",{parentName:"li"},"activity_manager")," seja retornado, ficando nesse processo at\xe9 ele ser encerrado.")))}p.isMDXComponent=!0},8852:function(e,t,o){"use strict";t.Z=o.p+"assets/images/ciclo-api-4f2056b33891288cb3cb07aa4f232787.png"}}]);