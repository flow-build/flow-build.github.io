(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[822],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||n;return r?o.createElement(f,s(s({ref:t},d),{},{components:r})):o.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var o=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var o=r(7294),a=r(944),n=r(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,r=e.block,d=e.defaultValue,l=e.values,p=e.groupId,m=e.className,f=(0,a.Z)(),b=f.tabGroupChoices,A=f.setTabGroupChoices,v=(0,o.useState)(d),k=v[0],g=v[1],h=o.Children.toArray(e.children),N=[];if(null!=p){var y=b[p];null!=y&&y!==k&&l.some((function(e){return e.value===y}))&&g(y)}var w=function(e){var t=e.currentTarget,r=N.indexOf(t),o=l[r].value;g(o),null!=p&&(A(p,o),setTimeout((function(){var e,r,o,a,n,s,c,u;(e=t.getBoundingClientRect(),r=e.top,o=e.left,a=e.bottom,n=e.right,s=window,c=s.innerHeight,u=s.innerWidth,r>=0&&n<=u&&a<=c&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case u:var o=N.indexOf(e.target)+1;r=N[o]||N[0];break;case c:var a=N.indexOf(e.target)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},m)},l.map((function(e){var t=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,n.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},r)}))),t?(0,o.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,r){"use strict";var o=(0,r(7294).createContext)(void 0);t.Z=o},944:function(e,t,r){"use strict";var o=r(7294),a=r(9443);t.Z=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2847:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var o=r(2122),a=r(9756),n=(r(7294),r(3905)),s=r(1395),i=r(8215),c=["components"],u={id:"subprocessNode",title:"subprocessNode"},d={unversionedId:"resources/nodes/subprocessNode",id:"resources/nodes/subprocessNode",isDocsHomePage:!1,title:"subprocessNode",description:"Representa um n\xf3 que permite iniciar outro processo e manter o processo principal aguardando sua execu\xe7\xe3o.",source:"@site/docs/resources/nodes/subprocessNode.mdx",sourceDirName:"resources/nodes",slug:"/resources/nodes/subprocessNode",permalink:"/docs/resources/nodes/subprocessNode",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/resources/nodes/subprocessNode.mdx",version:"current",frontMatter:{id:"subprocessNode",title:"subprocessNode"},sidebar:"resourcesSidebar",previous:{title:"scriptNode",permalink:"/docs/resources/nodes/scriptNode"},next:{title:"Sequ\xeancia num\xe9rica",permalink:"/docs/resources/name_nodes/sequenciaNumerica"}},l=[{value:"Par\xe2metros",id:"par\xe2metros",children:[]}],p={toc:l};function m(e){var t=e.components,u=(0,a.Z)(e,c);return(0,n.kt)("wrapper",(0,o.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Representa um n\xf3 que permite iniciar outro processo ",(0,n.kt)("strong",{parentName:"p"},"e")," manter o processo principal aguardando sua execu\xe7\xe3o."),(0,n.kt)("p",null,"Assim como um userTaskNode, o n\xf3 de subProcesso gera 2 estados: o primeiro estado \xe9 gerado com o status ",(0,n.kt)("strong",{parentName:"p"},"DELEGATED")," e \xe9 gerado logo ap\xf3s o subProcesso ter sido criado. O segundo estado \xe9 gerado ap\xf3s o t\xe9rmino da execu\xe7\xe3o do subprocesso, com o status ",(0,n.kt)("strong",{parentName:"p"},"RUNNING"),"."),(0,n.kt)("p",null,"Caso seja necess\xe1rio que dados gerados pelo subprocesso sejam transmitidos para o processo-pai, tais dados devem ser discriminados nos ",(0,n.kt)("em",{parentName:"p"},"parameters")," do finishNode do subprocesso."),(0,n.kt)("h2",{id:"par\xe2metros"},"Par\xe2metros"),(0,n.kt)("p",null,"Este n\xf3 pode receber 4 par\xe2metros:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"workflow_name (obrigat\xf3rio)"),(0,n.kt)("li",{parentName:"ul"},"actor_data (obrigat\xf3rio)"),(0,n.kt)("li",{parentName:"ul"},"input"),(0,n.kt)("li",{parentName:"ul"},"valid_response")),(0,n.kt)("h4",{id:"workflow-name"},"workflow name"),(0,n.kt)("p",null,"Trata-se do nome do workflow que dever\xe1 ser iniciado. "),(0,n.kt)("h4",{id:"actor-data"},"actor data"),(0,n.kt)("p",null,"Trata-se de um ",(0,n.kt)("em",{parentName:"p"},"objeto")," com o actor_data que dever ser utilizado para criar e iniciar o subprocesso."),(0,n.kt)("p",null,"Assim como no n\xf3 de StartProcess, a cria\xe7\xe3o e execu\xe7\xe3o de um subprocesso passa por todas as etapas de valida\xe7\xe3o do startNode feitas para cria\xe7\xe3o de um processo normal."),(0,n.kt)("h4",{id:"input"},"input"),(0,n.kt)("p",null,"Trata-se de um ",(0,n.kt)("em",{parentName:"p"},"objeto")," que determina os dados iniciais que ser\xe3o passados do processo-pai para o subprocesso."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Se o startNode do subprocesso cont\xe9m um input schema, \xe9 necess\xe1rio incluir neste um atributo parent_process_data, que cont\xe9m os dados do processo-pai que evocou o subprocesso."),(0,n.kt)("p",{parentName:"div"},"\xc9 atrav\xe9s desse atributo que o flowbuild identifica, ao final da execu\xe7\xe3o do subprocesso, que h\xe1 um processo-pai que deve ser notificado."))),(0,n.kt)("h4",{id:"valid-response"},"valid response"),(0,n.kt)("p",null,"De forma an\xe1loga ao n\xf3 http, esse campo \xe9 definido como uma lista de status aceitos como v\xe1lidos para continuidade do processo pai ao final da execu\xe7\xe3o do subprocess."),(0,n.kt)("p",null,"Assim como no caso do n\xf3 http, caso o subprocesso finalize em um status diferente do descrito como status v\xe1lido, o processo-pai gera um estado de ",(0,n.kt)("strong",{parentName:"p"},"ERROR"),"."),(0,n.kt)(s.Z,{defaultValue:"diagram",values:[{label:"Schema",value:"schema"},{label:"Example",value:"example"},{label:"Symbol",value:"diagram"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"schema",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "any_string (system friendly recommended)",\n  "name": "any string",\n  "type": "SubProcess",\n  "lane_id": "any_lane_id",\n  "next": "other_node_id"\n  "parameters":{\n     "workflow_name": "string",\n     "actor_data": {"$ref": "actor_data"},\n     "valid_response":{},\n     "input":{}\n  }\n}\n'))),(0,n.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "3-X",\n    "name": "Calcular or\xe7amento",\n    "type": "SubProcess",\n    "next": "3-XB",\n    "lane_id": "vendedor",\n    "parameters": {\n        "workflow_name": "calcularOrcamento",\n        "actor_data": { "$ref": "actor_data" },\n        "valid_response": "finished",\n        "input": {\n            "orcamento_id": { "$ref": "bag.orcamento_id" },\n        },\n    },\n}\n'))),(0,n.kt)(i.Z,{value:"diagram",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"subprocess",src:r(6840).Z})))))}m.isMDXComponent=!0},6010:function(e,t,r){"use strict";function o(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})},6840:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);