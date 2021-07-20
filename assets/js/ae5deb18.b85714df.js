(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[8613],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=i(t),c=a,N=k["".concat(u,".").concat(c)]||k[c]||m[c]||p;return t?r.createElement(N,o(o({ref:n},s),{},{components:t})):r.createElement(N,o({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=k;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},784:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return i},default:function(){return m}});var r=t(2122),a=t(9756),p=(t(7294),t(3905)),o=["components"],l={},u={unversionedId:"engine/events/engine",id:"engine/events/engine",isDocsHomePage:!1,title:"Engine",description:"ENGINE.ERROR",source:"@site/docs/engine/events/engine.md",sourceDirName:"engine/events",slug:"/engine/events/engine",permalink:"/docs/engine/events/engine",editUrl:"https://github.com/flow-build/flow-build.github.io/docs/engine/events/engine.md",version:"current",frontMatter:{},sidebar:"engineSidebar",previous:{title:"Blueprint",permalink:"/docs/engine/events/blueprint"},next:{title:"Execution_Loop",permalink:"/docs/engine/events/execution_loop"}},i=[{value:"ENGINE.ERROR",id:"engineerror",children:[]},{value:"ENGINE.HEARTBEAT",id:"engineheartbeat",children:[]},{value:"ENGINE.FETCHING_TIMERS",id:"enginefetching_timers",children:[]},{value:"ENGINE.TIMERS",id:"enginetimers",children:[]},{value:"ENGINE.FIRING_TIMER",id:"enginefiring_timer",children:[]},{value:"ENGINE.ORPHANS_FETCHING",id:"engineorphans_fetching",children:[]},{value:"ENGINE.ORPHANS_FETCHED",id:"engineorphans_fetched",children:[]},{value:"ENGINE.ORPHAN_FETCHING",id:"engineorphan_fetching",children:[]},{value:"ENGINE.ORPHANS.ERROR",id:"engineorphanserror",children:[]},{value:"ENGINE.ORPHAN_FETCHED",id:"engineorphan_fetched",children:[]},{value:"ENGINE.ORPHAN.CONTINUE",id:"engineorphancontinue",children:[]},{value:"ENGINE.HEART.ERROR",id:"enginehearterror",children:[]},{value:"ENGINE.NEXT",id:"enginenext",children:[]}],s={toc:i};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"engineerror"},"ENGINE.ERROR"),(0,p.kt)("p",null,"Evento que ocorre quando h\xe1 um erro na engine"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"sem mensagem\n",(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": ambient"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n    "error": {\n        "$ref": "schemas/Error"\n    }\n}\n')),(0,p.kt)("h2",{id:"engineheartbeat"},"ENGINE.HEARTBEAT"),(0,p.kt)("p",null,"Evento que ocorre quando h\xe1 um heartbeat"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"HEARTBEAT @ ","[${new Date().toISOString()}]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": sem parametros"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"{\n\n}\n")),(0,p.kt)("h2",{id:"enginefetching_timers"},"ENGINE.FETCHING_TIMERS"),(0,p.kt)("p",null,"Evento que retorna os timers buscados em meio aos hearbeats"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"FETCHING TIMERS ON HEARTBEAT BATCH ","[${TIMER_BATCH}]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": sem par\xe2metros"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"{\n    \n}\n")),(0,p.kt)("h2",{id:"enginetimers"},"ENGINE.TIMERS"),(0,p.kt)("p",null,"Evento que ocorre quando h\xe1 uma contagem de timers nos heartbeats"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"FETCHED ","[${locked_timers.length}]"," TIMERS ON HEARTBEAT`"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": timers"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n    "timers": {\n        "type": "number"\n    }\n}\n')),(0,p.kt)("h2",{id:"enginefiring_timer"},"ENGINE.FIRING_TIMER"),(0,p.kt)("p",null,"Evento que ocorre quando  h\xe1 um timer 'firing' em um heartbeat"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"FIRING TIMER ","[${t_lock.id}]"," ON HEARTBEAT"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": timer_id"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n    "timer_id": {\n        "type": "string",\n        "format": "uuid"\n\n    }\n}\n')),(0,p.kt)("h2",{id:"engineorphans_fetching"},"ENGINE.ORPHANS_FETCHING"),(0,p.kt)("p",null,"Evento que ocorre na busca dos processos orf\xe3os em meio aos heartbeats"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"FETCHING ORPHAN PROCESSES ON HEARTBEAT BATCH ","[${ORPHAN_BATCH}]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": sem par\xe2metros"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"{\n    \n}\n")),(0,p.kt)("h2",{id:"engineorphans_fetched"},"ENGINE.ORPHANS_FETCHED"),(0,p.kt)("p",null,"Evento ocorre quando a busca dos processos orf\xe3os em meio aos heartbeats termina"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"FETCHED ","[${locked_orphans.length}]"," ORPHANS ON HEARTBEAT"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": orphans"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n    "orphans": {\n        "type": number\n    }\n}\n')),(0,p.kt)("h2",{id:"engineorphan_fetching"},"ENGINE.ORPHAN_FETCHING"),(0,p.kt)("p",null,"Evento que ocorre na busca de um determinado processo orf\xe3o no heartbeat"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"FETCHING PS FOR ORPHAN ","[${orphan.id}]"," ON HEARTBEAT"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": process_id"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n    "process_id": {\n        "type": "string",\n        "format": "uuid"\n    }\n}\n')),(0,p.kt)("h2",{id:"engineorphanserror"},"ENGINE.ORPHANS.ERROR"),(0,p.kt)("p",null,"Evento que ocorre quando h\xe1 erros ao buscar processos orf\xe3os no heartbeat"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"ERROR FETCHING ORPHANS ON HEARTBEAT"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": error"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n    "error": {\n        "$ref": "schemas/Error"\n    }\n}\n')),(0,p.kt)("h2",{id:"engineorphan_fetched"},"ENGINE.ORPHAN_FETCHED"),(0,p.kt)("p",null,"Evento que ocorre na busca um determinado processo orf\xe3o"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"FETCHED PS FOR ORPHAN ","[${orphan.id}]"," ON HEARTBEAT"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": process_id"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n    "process_id": {\n        "type": "string",\n        "format": "uuid"\n    }\n}\n')),(0,p.kt)("h2",{id:"engineorphancontinue"},"ENGINE.ORPHAN.CONTINUE"),(0,p.kt)("p",null,"Evento que retorna a continua\xe7\xe3o de um determinado processo orf\xe3o e seu estado no heartbeat"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"START CONTINUE ORPHAN PID ","[${process.id}]"," AND STATE ","[${process.state.id}]"," ON HEARTBEAT"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": process_id, process_state_id"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n    "process_id": {\n        "type": "string",\n        "format": "uuid"\n    },\n    "process_state_id": {\n        "type": "string",\n        "format": "uuid"\n    }\n}\n')),(0,p.kt)("h2",{id:"enginehearterror"},"ENGINE.HEART.ERROR"),(0,p.kt)("p",null,"Evento que ocorre quando h\xe1 um erro em um determinado engine"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"HEART FAILURE @ ENGINE_ID ","[${ENGINE_ID}]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": engine_id, error"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'{\n    "engine_id": {\n        "type": "string",\n        "format": "error"\n    },\n    "error": {\n        "$ref": "schemas/Error"\n    }\n}\n')),(0,p.kt)("h2",{id:"enginenext"},"ENGINE.NEXT"),(0,p.kt)("p",null,"Evento que ocorre no pr\xf3ximo heartbeat"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Mensagem")),(0,p.kt)("p",null,"NEXT HEARTBEAT SET"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Input")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"parameters"),": sem par\xe2metros"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Schema")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"{\n    \n}\n")))}m.isMDXComponent=!0}}]);