(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[1057],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,v=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7294),r=a(944),i=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,d=39;var p=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,c=e.values,m=e.groupId,u=e.className,v=(0,r.Z)(),k=v.tabGroupChoices,g=v.setTabGroupChoices,b=(0,n.useState)(p),f=b[0],y=b[1],N=n.Children.toArray(e.children),h=[];if(null!=m){var _=k[m];null!=_&&_!==f&&c.some((function(e){return e.value===_}))&&y(_)}var w=function(e){var t=e.currentTarget,a=h.indexOf(t),n=c[a].value;y(n),null!=m&&(g(m,n),setTimeout((function(){var e,a,n,r,i,o,l,d;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,d=o.innerWidth,a>=0&&i<=d&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case d:var n=h.indexOf(e.target)+1;a=h[n]||h[0];break;case l:var r=h.indexOf(e.target)-1;a=h[r]||h[h.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},u)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:T,onFocus:w,onClick:w},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8731:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=a(1395),s=a(8215),l=["components"],d={id:"activityManagers",title:"Activity Managers (Tarefas)"},p={unversionedId:"resources/api/activityManagers",id:"resources/api/activityManagers",isDocsHomePage:!1,title:"Activity Managers (Tarefas)",description:"Activity Managers n\xe3o s\xe3o criados via interfaces, mas sim como resultado de execu\xe7\xe3o do processo, por este motivo, n\xe3o existem rotas para cria\xe7\xe3o de Activity Managers.",source:"@site/docs/resources/api/activityManagers.mdx",sourceDirName:"resources/api",slug:"/resources/api/activityManagers",permalink:"/docs/resources/api/activityManagers",editUrl:"https://github.com/flow-build/flow-build.github.io/docs/resources/api/activityManagers.mdx",version:"current",frontMatter:{id:"activityManagers",title:"Activity Managers (Tarefas)"},sidebar:"resourcesSidebar",previous:{title:"Processos",permalink:"/docs/resources/api/processes"},next:{title:"Packages",permalink:"/docs/resources/api/packages"}},c=[{value:"READ",id:"read",children:[{value:"Listar Atividades Dispon\xedveis",id:"listar-atividades-dispon\xedveis",children:[]},{value:"Listar Atividades Conclu\xeddas",id:"listar-atividades-conclu\xeddas",children:[]},{value:"Consultar o Activity Manager de um Processo",id:"consultar-o-activity-manager-de-um-processo",children:[]},{value:"Consultar um Activity Manager",id:"consultar-um-activity-manager",children:[]}]},{value:"UPDATE",id:"update",children:[{value:"Salvar uma Atividade",id:"salvar-uma-atividade",children:[]},{value:"Enviar uma Atividade",id:"enviar-uma-atividade",children:[]},{value:"Submeter uma Atividade",id:"submeter-uma-atividade",children:[]}]}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Activity Managers n\xe3o s\xe3o criados via interfaces, mas sim como resultado de execu\xe7\xe3o do processo, por este motivo, n\xe3o existem rotas para cria\xe7\xe3o de Activity Managers."),(0,i.kt)("h2",{id:"read"},"READ"),(0,i.kt)("h3",{id:"listar-atividades-dispon\xedveis"},"Listar Atividades Dispon\xedveis"),(0,i.kt)("p",null,"Esta rota lista, para um determinado actor, todas as atividades dispon\xedveis (status = ",(0,i.kt)("strong",{parentName:"p"},"started"),") de processos ativos."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Verbo"),(0,i.kt)("th",{parentName:"tr",align:null},"Path"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/processes/available")))),(0,i.kt)("h4",{id:"responses"},"Responses"),(0,i.kt)(o.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Exemplo",value:"example"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"schema",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "array",\n    "items": {\n        "type": "object",\n        "properties": {\n            "id": { "type": "string", "format": "uuid" },\n            "created_at": { "type": "string", "format": "date-time" },\n            "process_id": { "type": "string", "format": "uuid" },\n            "workflow_id": { "type": "string", "format": "uuid" },\n            "workflow_name": { "type": "string", "format": "uuid" },\n            "node_id": { "type": "string", "format": "uuid" },\n            "node_name": { "type": "string", "format": "uuid" },\n            "props": { "type": "object" }\n        }\n    }\n}\n'))),(0,i.kt)(s.Z,{value:"example",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "56436380-df65-11eb-9568-0334791767bc",\n        "created_at": "2021-07-07T20:53:09.688Z",\n        "process_id": "4633e870-df65-11eb-9568-0334791767bc",\n        "process_status": "waiting",\n        "workflow_id": "0f133870-b8a3-11eb-9412-59e35195befe",\n        "workflow_name": "inviteUser",\n        "node_id": "1-13",\n        "node_name": "Complementar dados do Convite",\n        "props": {\n            "action": "OPEN_INVITE",\n            "result": {\n                "tags": [\n                    "tag1", "tag2"\n                ],\n                "email": "xodac86861@herrain.com",\n                "access_levels": [\n                    {\n                        "id": "af04e850-194e-11eb-ba42-01e2029c0a36",\n                        "name": "owner"\n                    },\n                    {\n                        "id": "b0e7e880-4ea9-11eb-b38b-49ef0ff3ee34",\n                        "name": "manager"\n                    },\n                    {\n                        "id": "316a1050-ade6-11eb-a27f-c90a21d33d29",\n                        "name": "user"\n                    }\n                ]\n            }\n        }\n    },\n    {\n        "id": "23724290-de76-11eb-9568-0334791767bc",\n        "created_at": "2021-07-06T16:20:54.713Z",\n        "process_id": "fb675d40-de74-11eb-9568-0334791767bc",\n        "process_status": "waiting",\n        "workflow_id": "b77b0660-ce0a-11eb-b0f4-2f8267257aee",\n        "workflow_name": "aceitarProposta",\n        "node_id": "1-1",\n        "node_name": "Avisar Representante do inicio do processo de aceite",\n        "props": {\n            "action": "SHOW_ALERT",\n            "result": {\n                "icon": "success",\n                "text": "A proposta foi enviada",\n                "title": "Aceite da proposta!"\n            }\n        }\n    }\n]\n')))),(0,i.kt)("h3",{id:"listar-atividades-conclu\xeddas"},"Listar Atividades Conclu\xeddas"),(0,i.kt)("p",null,"Rota equivalente a rota de atividades dispon\xedveis, neste caso retornando todas as atividades completadas (status = ",(0,i.kt)("strong",{parentName:"p"},"completed"),")."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Nota")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A rota retorna todas as atividades completadas cujo acesso \xe9 permitido para o usu\xe1rio em quest\xe3o, isso n\xe3o significa, necessariamente, que a atividade foi executada pelo usu\xe1rio."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Verbo"),(0,i.kt)("th",{parentName:"tr",align:null},"Path"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/processes/done")))),(0,i.kt)("h4",{id:"responses-1"},"Responses"),(0,i.kt)("p",null,"A estrutura da resposta \xe9 id\xeantica a resposta da Listagem de Atividades Dispon\xedveis."),(0,i.kt)("h3",{id:"consultar-o-activity-manager-de-um-processo"},"Consultar o Activity Manager de um Processo"),(0,i.kt)("p",null,"\xc9 poss\xedvel realizar a consulta utilizando o process_id, nesse caso a rota retornar\xe1 a atividade dispon\xedvel (status = ",(0,i.kt)("strong",{parentName:"p"},"started"),") para o processo informado."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Verbo"),(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:null},"Formato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/processes/{process_id}/activity"),(0,i.kt)("td",{parentName:"tr",align:null},"type: string, format: uuid")))),(0,i.kt)("h4",{id:"responses-2"},"Responses"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Em situa\xe7\xf5es espec\xedficas, em processos com activity managers do tipo ",(0,i.kt)("strong",{parentName:"p"},"notify"),", poder\xe1 ocorrer uma situa\xe7\xe3o em que um \xfanico processo tenha mais do que uma atividade dispon\xedvel, nesse caso a rota retornar\xe1 uma lista de atividades ao inv\xe9s de uma \xfanica atividade."))),(0,i.kt)(o.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Exemplo",value:"example"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"schema",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "object",\n    "properties": {\n        "id": { "type": "string", "format": "uuid" },\n        "created_at": { "type": "string", "format": "date-time" },\n        "process_id": { "type": "string", "format": "uuid" },\n        "workflow_id": { "type": "string", "format": "uuid" },\n        "workflow_name": { "type": "string", "format": "uuid" },\n        "node_id": { "type": "string", "format": "uuid" },\n        "node_name": { "type": "string", "format": "uuid" },\n        "props": { "type": "object" }\n    }\n}\n'))),(0,i.kt)(s.Z,{value:"example",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "23724290-de76-11eb-9568-0334791767bc",\n    "created_at": "2021-07-06T16:20:54.713Z",\n    "process_id": "fb675d40-de74-11eb-9568-0334791767bc",\n    "process_status": "waiting",\n    "workflow_id": "b77b0660-ce0a-11eb-b0f4-2f8267257aee",\n    "workflow_name": "aceitarProposta",\n    "node_id": "1-1",\n    "node_name": "Avisar Representante do inicio do processo de aceite",\n    "props": {\n        "action": "SHOW_ALERT",\n        "result": {\n            "icon": "success",\n            "text": "A proposta foi enviada",\n            "title": "Aceite da proposta!"\n        }\n    }\n}|\n')))),(0,i.kt)("p",null,"Essa rota, em algumas situa\xe7\xf5es, poder\xe1 gerar c\xf3digos de diferentes de 200, nos seguintes casos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"C\xf3digo"),(0,i.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"204"),(0,i.kt)("td",{parentName:"tr",align:null},"O processo existe, por\xe9m n\xe3o h\xe1 nenhuma atividade dispon\xedvel. Isso pode representar que o processo ainda est\xe1 em execu\xe7\xe3o ou que o usu\xe1rio n\xe3o tem permiss\xe3o de acesso a atividade.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"404"),(0,i.kt)("td",{parentName:"tr",align:null},"Significa que o processo n\xe3o existe ",(0,i.kt)("em",{parentName:"td"},"ou")," este n\xe3o est\xe1 mais ativo")))),(0,i.kt)("h3",{id:"consultar-um-activity-manager"},"Consultar um Activity Manager"),(0,i.kt)("p",null,"Neste caso, a consulta \xe9 realizada utilizando o activity_manager_id, sendo que neste caso o retorno ocorrer\xe1 independente do status do Activity Manager."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Verbo"),(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:null},"Formato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"/processes/activityManager/{activity_manager_id}"),(0,i.kt)("td",{parentName:"tr",align:null},"type: string, format: uuid")))),(0,i.kt)("h4",{id:"responses-3"},"Responses"),(0,i.kt)("p",null,"A resposta dessa rota adiciona uma lista de atividades salvas no activity manager."),(0,i.kt)(o.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Exemplo",value:"example"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"schema",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "object",\n    "properties": {\n        "id": { "type": "string", "format": "uuid" },\n        "created_at": { "type": "string", "format": "date-time" },\n        "activity_status": { "type": "string" },\n        "process_id": { "type": "string", "format": "uuid" },\n        "error": { "type": "string" },\n        "workflow_name": { "type": "string" },\n        "props": { "type": "object" },\n        "type": { "type": "string" },\n        "activities": { \n            "type": "array",\n            "items": {\n                "type": "object",\n                "properties": {\n                    "id": { "type": "string", "format": "uuid" },\n                    "created_at": { "type": "string", "format": "date-time" },\n                    "actor_id": { "type": "string", "format": "uuid" },\n                    "data": { "type": "object" }\n                }\n            }\n        }\n    }\n}\n'))),(0,i.kt)(s.Z,{value:"example",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "32e1b580-e015-11eb-9568-0334791767bc",\n    "created_at": "2021-07-08T17:52:01.752Z",\n    "activity_status": "started",\n    "process_id": "323e97b0-e015-11eb-9568-0334791767bc",\n    "error": null,\n    "workflow_name": "createUserByInvite",\n    "props": {\n        "action": "GET_INVITE_DATA",\n        "result": {}\n    },\n    "type": "commit",\n    "activities": [\n        {\n            "id": "5c0584e0-e016-11eb-9568-0334791767bc",\n            "created_at": "2021-07-08T18:00:20.270Z",\n            "actor_id": "09ea5390-b7ca-11ea-9e23-9bc0962ec17c",\n            "data": {\n                "email": "a@acme.com",\n                "token": "2b2c60a5-3036-4b28-86d9-0fc0e256a6c7"\n            }\n        }\n    ]\n}\n')))),(0,i.kt)("h2",{id:"update"},"UPDATE"),(0,i.kt)("p",null,"Uma vez em ciente da atividade a ser realizada, existem rotas que permitem salvar atividades e enviar atividades para o processo."),(0,i.kt)("p",null,"As rotas de salvar e enviar atividade podem ser acessadas utilizando tanto o process_id quanto o activity_manager_id. Todavia, tendo em vista que um processo pode ter mais de uma atividade dispon\xedvel (vide coment\xe1rio sobre consulta de atividade), recomenda-se a utiliza\xe7\xe3o das rotas atrav\xe9s do activity_manager_id, que garantem a precis\xe3o quanto a atividade que est\xe1 sendo enviada."),(0,i.kt)("h3",{id:"salvar-uma-atividade"},"Salvar uma Atividade"),(0,i.kt)("p",null,"Nesta rota, um ",(0,i.kt)("em",{parentName:"p"},"rascunho")," da atividade \xe9 salvo. O conte\xfado do payload \xe9 varia em fun\xe7\xe3o da action do front e \xe9 definido em conjunto entre o canal e o worklfow."),(0,i.kt)("p",null,"O processo n\xe3o \xe9 afetado por essa a\xe7\xe3o."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Verbo"),(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:null},"Formato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"POST"),(0,i.kt)("td",{parentName:"tr",align:null},"/processes/{process_id}/commit"),(0,i.kt)("td",{parentName:"tr",align:null},"type: string, format: uuid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"POST"),(0,i.kt)("td",{parentName:"tr",align:null},"/activity_manager/{activity_manager_id}/commit"),(0,i.kt)("td",{parentName:"tr",align:null},"type: string, format: uuid")))),(0,i.kt)("h4",{id:"responses-4"},"Responses"),(0,i.kt)(o.Z,{defaultValue:"schema",values:[{label:"Schema",value:"schema"},{label:"Exemplo",value:"example"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"schema",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "object",\n    "properties": {\n        "_id": { "type": "string", "format": "uuid" },\n        "_created_at": { "type": "string", "format": "date-time" },\n        "_process_state_id": { "type": "string", "format": "uuid" },\n        "_props": { "type": "object" },\n        "_parameters": { "type": "object" },\n        "_status": { "type": "string" },\n        "_type": { "type": "string" },\n        "_activities": { \n            "type": "array",\n            "items": {\n                "type": "object",\n                "properties": {\n                    "_id": { "type": "string", "format": "uuid" },\n                    "_created_at": { "type": "string", "format": "date-time" },\n                    "_process_state_id": { "type": "string", "format": "uuid" },\n                    "_actor_id": { "type": "string", "format": "uuid" },\n                    "_data": { "type": "object" }\n                }\n            }\n        }\n    }\n}\n'))),(0,i.kt)(s.Z,{value:"example",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id": "32e1b580-e015-11eb-9568-0334791767bc",\n    "_created_at": "2021-07-08T17:52:01.752Z",\n    "_process_state_id": "32ff0180-e015-11eb-9568-0334791767bc",\n    "_props": {\n        "action": "GET_INVITE_DATA",\n        "result": {}\n    },\n    "_parameters": {\n        "activity_schema": {\n            "type": "object",\n            "required": [\n                "email",\n                "token"\n            ],\n            "properties": {\n                "email": {\n                    "type": "string",\n                    "format": "email"\n                },\n                "token": {\n                    "type": "string",\n                    "format": "uuid"\n                }\n            },\n            "additionalProperties": false\n        },\n        "next_step_number": 4\n    },\n    "_status": "started",\n    "_type": "commit",\n    "_activities": [\n        {\n            "_id": "5c0584e0-e016-11eb-9568-0334791767bc",\n            "_created_at": "2021-07-08T18:00:20.270Z",\n            "_process_state_id": "32e1b580-e015-11eb-9568-0334791767bc",\n            "_actor_data": {\n                "event_id": "a068f506-2a60-435a-83af-454de4265067",\n                "client_ip": "::ffff:10.0.2.107",\n                "userAgent": {\n                    "os": "unknown",\n                    "browser": "PostmanRuntime",\n                    "platform": "unknown",\n                    "isMobile": false\n                },\n                "trace": {},\n                "account_id": "d47305a0-1ed4-11eb-ba42-01e2029c0a36",\n                "actor_id": "09ea5390-b7ca-11ea-9e23-9bc0962ec17c",\n                "claims": [\n                    "anonymous"\n                ]\n            },\n            "_data": {\n                "email": "a@acme.com",\n                "token": "2b2c60a5-3036-4b28-86d9-0fc0e256a6c7"\n            },\n            "_status": "started"\n        }\n    ]\n}\n')))),(0,i.kt)("h3",{id:"enviar-uma-atividade"},"Enviar uma Atividade"),(0,i.kt)("p",null,"Esta rota notifica o Activity Manager para enviar as atividades salvas para o processo."),(0,i.kt)("p",null,"Todas as atividades salvas no Activity Manager s\xe3o enviadas para o processo."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Verbo"),(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:null},"Formato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"POST"),(0,i.kt)("td",{parentName:"tr",align:null},"/processes/{process_id}/push"),(0,i.kt)("td",{parentName:"tr",align:null},"type: string, format: uuid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"POST"),(0,i.kt)("td",{parentName:"tr",align:null},"/activity_manager/{activity_manager_id}/push"),(0,i.kt)("td",{parentName:"tr",align:null},"type: string, format: uuid")))),(0,i.kt)("h4",{id:"responses-5"},"Responses"),(0,i.kt)("p",null,"A rota gera uma resposta 202 confirmando o recebimento da atividade."),(0,i.kt)("h3",{id:"submeter-uma-atividade"},"Submeter uma Atividade"),(0,i.kt)("p",null,"Esta rota comp\xf5e o salvamento da atividade e o envio em um \xfanico comando."),(0,i.kt)("p",null,"Ao contr\xe1rio da rota de commit, o retorno dessa tarefa \xe9 simplesmente a confirma\xe7\xe3o da submiss\xe3o da tarefa."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Verbo"),(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:null},"Formato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"POST"),(0,i.kt)("td",{parentName:"tr",align:null},"/activity_manager/{activity_manager_id}/submit"),(0,i.kt)("td",{parentName:"tr",align:null},"type: string, format: uuid")))),(0,i.kt)("h4",{id:"responses-6"},"Responses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"C\xf3digo"),(0,i.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"202"),(0,i.kt)("td",{parentName:"tr",align:null},"Submiss\xe3o da atividade confirmada")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"422"),(0,i.kt)("td",{parentName:"tr",align:null},"O activity manager n\xe3o est\xe1 mais dispon\xedvel para submiss\xe3o")))))}u.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);