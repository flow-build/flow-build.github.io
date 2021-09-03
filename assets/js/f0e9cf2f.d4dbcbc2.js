(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[7369],{3905:function(e,o,t){"use strict";t.d(o,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){var o=a.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=d(e.components);return a.createElement(c.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},l=a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(t),m=r,k=l["".concat(c,".").concat(m)]||l[m]||p[m]||n;return t?a.createElement(k,i(i({ref:o},u),{},{components:t})):a.createElement(k,i({ref:o},u))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=l;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<n;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3451:function(e,o,t){"use strict";t.r(o),t.d(o,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=t(2122),r=t(9756),n=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},c={unversionedId:"documentation/cicloDeVidaDeProcesso",id:"documentation/cicloDeVidaDeProcesso",isDocsHomePage:!1,title:"Ciclo de vida do processo",description:"Nessa p\xe1gina ser\xe1 poss\xedvel entender como um ciclo de execu\xe7\xe3o de um processo no FlowBuild.",source:"@site/docs/documentation/cicloDeVidaDeProcesso.md",sourceDirName:"documentation",slug:"/documentation/cicloDeVidaDeProcesso",permalink:"/docs/documentation/cicloDeVidaDeProcesso",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/documentation/cicloDeVidaDeProcesso.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Flowbuild",permalink:"/docs/documentation/flowbuild"},next:{title:"Ciclo de Vida de uma Atividade",permalink:"/docs/documentation/cicloDeVidaDeAtividade"}},d=[{value:"Ciclo B\xe1sico",id:"ciclo-b\xe1sico",children:[{value:"Cria\xe7\xe3o do processo",id:"cria\xe7\xe3o-do-processo",children:[]},{value:"Inicializa\xe7\xe3o do processo",id:"inicializa\xe7\xe3o-do-processo",children:[]},{value:"Loop de Execu\xe7\xe3o",id:"loop-de-execu\xe7\xe3o",children:[]},{value:"Timers",id:"timers",children:[]},{value:"Activity Managers",id:"activity-managers",children:[]}]}],u={toc:d};function p(e){var o=e.components,s=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Nessa p\xe1gina ser\xe1 poss\xedvel entender como um ciclo de execu\xe7\xe3o de um processo no FlowBuild. "),(0,n.kt)("p",null,"Veja abaixo o diagrama de execu\xe7\xe3o: "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ciclo-api",src:t(8852).Z})),(0,n.kt)("h2",{id:"ciclo-b\xe1sico"},"Ciclo B\xe1sico"),(0,n.kt)("p",null,"A engine recebe uma requisi\xe7\xe3o de startWorkflow"),(0,n.kt)("h3",{id:"cria\xe7\xe3o-do-processo"},"Cria\xe7\xe3o do processo"),(0,n.kt)("p",null,"Nesse momento a entidade workflow \xe9 sensibilizada, retornando a blueprint a ser utilizada."),(0,n.kt)("p",null,"Um processo \xe9 criado, copiando a blueprint da entidade workflow para a entidade processo."),(0,n.kt)("p",null,"O primeiro estado do processo \xe9 criado, no status ",(0,n.kt)("strong",{parentName:"p"},"UNSTARTED"),"."),(0,n.kt)("p",null,"A cria\xe7\xe3o de um estado envia um evento que ser\xe1 capturado pelo StateListener que poder\xe1 implementar a\xe7\xf5es customizadas que n\xe3o afetam a execu\xe7\xe3o do processo em si."),(0,n.kt)("p",null,"A cria\xe7\xe3o do processo gera um retorno para o solicitante do ID do processo criado."),(0,n.kt)("h3",{id:"inicializa\xe7\xe3o-do-processo"},"Inicializa\xe7\xe3o do processo"),(0,n.kt)("p",null,"Com o processo no estado ",(0,n.kt)("strong",{parentName:"p"},"UNSTARTED"),", a engine executa a a\xe7\xe3o de inicializar o processo. Isso gera um novo estado no processo, com o status ",(0,n.kt)("strong",{parentName:"p"},"RUNNING"),"."),(0,n.kt)("p",null,"Assim como o estado anterior, isso dispara um evento que \xe9 capturado pelo StateListener."),(0,n.kt)("h3",{id:"loop-de-execu\xe7\xe3o"},"Loop de Execu\xe7\xe3o"),(0,n.kt)("p",null,"Com o processo em status ",(0,n.kt)("strong",{parentName:"p"},"RUNNING"),", este processo \xe9 identificado pela engine como um processo dispon\xedvel para ",(0,n.kt)("em",{parentName:"p"},"execu\xe7\xe3o"),". "),(0,n.kt)("p",null,"O processo \xe9 ",(0,n.kt)("em",{parentName:"p"},"capturado")," por uma engine dispon\xedvel, que ir\xe1 executar o pr\xf3ximo n\xf3 do processo."),(0,n.kt)("p",null,"A execu\xe7\xe3o de um n\xf3 do processo poder\xe1 resultar em 4 poss\xedveis novos estados:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RUNNING"),": quando o n\xf3 \xe9 executado com sucesso."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FINISHED"),": quando o n\xf3 executado \xe9 do tipo FinishNode."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ERROR"),": quando a execu\xe7\xe3o do n\xf3 resulta em um erro n\xe3o tratado."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DELEGATED"),": quando o n\xf3 instrui o processo a iniciar um subprocesso."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PENDING"),": quando o n\xf3 instrui o processo a aguardar a expira\xe7\xe3o de um timer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WAITING"),": quando o n\xf3 instrui o processo a delegar a tarefa a um Activity Manager.")),(0,n.kt)("p",null,"A engine continuar\xe1 em um loop de execu\xe7\xe3o enquanto o estado gerado for igual a ",(0,n.kt)("strong",{parentName:"p"},"RUNNING"),"."),(0,n.kt)("h3",{id:"timers"},"Timers"),(0,n.kt)("p",null,"No caso da exist\xeancia de prazos de expira\xe7\xe3o, que poder\xe3o existir em n\xf3s de timer e atividades de usu\xe1rio, a entidade ",(0,n.kt)("em",{parentName:"p"},"timer")," ser\xe1 sensibilizada, criado uma nova inst\xe2ncia, vinculada ao processo ou atividade relacionada, dependendo do tipo de n\xf3 que originou a demanda."),(0,n.kt)("h3",{id:"activity-managers"},"Activity Managers"),(0,n.kt)("p",null,"Quando o processo atinge um n\xf3 de usu\xe1rio (userTask), \xe9 gerado um estado com status ",(0,n.kt)("strong",{parentName:"p"},"WAITING")," e a entidade ",(0,n.kt)("em",{parentName:"p"},"activity manager")," \xe9 sensibilizada, criando uma nova inst\xe2ncia."),(0,n.kt)("p",null,"O Activity Manager receber\xe1 os parameters do n\xf3, sendo parte desses compartilhados com o canal (action, input, timeout, activity_schema) e outros utilizados internamente para gest\xe3o da atividade (type, next_node_id)."),(0,n.kt)("p",null,"A cria\xe7\xe3o de um Activity Manager gera um evento espec\xedfico, que \xe9 capturado por um listener independente, o ",(0,n.kt)("em",{parentName:"p"},"ActivityManagerListener")," que poder\xe1 ser configurado para tomar a\xe7\xf5es como notifica\xe7\xe3o de canais, disparos de eventos de telemetria, etc."),(0,n.kt)("p",null,"O processo permanece em espera at\xe9 a conclus\xe3o do Activity Manager, que poder\xe1 ocorrer em 2 situa\xe7\xf5es:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Conclus\xe3o da atividade pelo usu\xe1rio."),(0,n.kt)("li",{parentName:"ol"},"Expira\xe7\xe3o do activity manager, caso um timeout tenha sido definido.")),(0,n.kt)("p",null,"Em ambas situa\xe7\xf5es, o status do activity manager \xe9 atualizado e um novo estado \xe9 gerado no processo, com status ",(0,n.kt)("strong",{parentName:"p"},"RUNNING"),", que resulta na retomada do loop de execu\xe7\xe3o."))}p.isMDXComponent=!0},8852:function(e,o,t){"use strict";o.Z=t.p+"assets/images/ciclo-api-4f2056b33891288cb3cb07aa4f232787.png"}}]);