(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[1522],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):E(E({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=d(r),u=i,N=m["".concat(l,".").concat(u)]||m[u]||s[u]||o;return r?n.createElement(N,E(E({ref:t},p),{},{components:r})):n.createElement(N,E({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,E=new Array(o);E[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,E[1]=a;for(var d=2;d<o;d++)E[d]=r[d];return n.createElement.apply(null,E)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9368:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),E=["components"],a={sidebar_position:1},l={unversionedId:"resources/eventosMapeados",id:"resources/eventosMapeados",isDocsHomePage:!1,title:"MUSTACHE",description:"Nessa parte vamos descobrir quais s\xe3o os eventos dispon\xedveis.",source:"@site/docs/resources/eventosMapeados.md",sourceDirName:"resources",slug:"/resources/eventosMapeados",permalink:"/docs/resources/eventosMapeados",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/resources/eventosMapeados.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},d=[{value:"PROCESS_STATE_LISTENER",id:"process_state_listener",children:[]},{value:"KNEX.UPDATE_ERROR",id:"knexupdate_error",children:[]},{value:"KNEX.DELETE_PROCESS_ERROR",id:"knexdelete_process_error",children:[]},{value:"KNEX.CREATE_PROCESS_ERROR",id:"knexcreate_process_error",children:[]},{value:"KNEX.UPDATE_PROCESS_ERROR",id:"knexupdate_process_error",children:[]},{value:"REQUESTS.TRACE.START",id:"requeststracestart",children:[]},{value:"REQUESTS.TRACE.OLD",id:"requeststraceold",children:[]},{value:"REQUESTS.TRACE.NEW",id:"requeststracenew",children:[]},{value:"ACTIVITY_MANAGER.COMPLETED",id:"activity_managercompleted",children:[]},{value:"ACTIVITY_MANAGER_TIMER.CLEARED",id:"activity_manager_timercleared",children:[]},{value:"ACTIVITY_MANAGER_TIMER.CREATING_NEW",id:"activity_manager_timercreating_new",children:[]},{value:"ACTIVITY_MANAGER.NEW_TIMER",id:"activity_managernew_timer",children:[]},{value:"ACTIVITY_MANAGER.TIMEOUT_EXPIRED",id:"activity_managertimeout_expired",children:[]},{value:"ACTIVITY_MANAGER.COMPLETED",id:"activity_managercompleted-1",children:[]},{value:"ACTIVITY_MANAGER_TIMER.CREATING_NEW",id:"activity_manager_timercreating_new-1",children:[]},{value:"BLUEPRINT.UNUSED_VARIABLES",id:"blueprintunused_variables",children:[]},{value:"BLUEPRINT.NON_EXISTENT_VARIABLES",id:"blueprintnon_existent_variables",children:[]},{value:"LANE.EVAL_ERROR",id:"laneeval_error",children:[]},{value:"NODE.ERROR",id:"nodeerror",children:[]},{value:"NODE.START_VALIDATED",id:"nodestart_validated",children:[]},{value:"PROCESS.RUN",id:"processrun",children:[]},{value:"PROCESS.EDGE.ERROR",id:"processedgeerror",children:[]},{value:"PROCESS.TIMER.CREATING",id:"processtimercreating",children:[]},{value:"PROCESS.TIMER.NEW",id:"processtimernew",children:[]},{value:"PROCESS.CONTINUE",id:"processcontinue",children:[]},{value:"PROCESS.RUN_PENDING",id:"processrun_pending",children:[]},{value:"PROCESS.EDGE.EXPIRING",id:"processedgeexpiring",children:[]},{value:"PROCESS.EDGE.ABORTING",id:"processedgeaborting",children:[]},{value:"PROCESS.STATE.SET",id:"processstateset",children:[]},{value:"INNERLOOP.LOCK",id:"innerlooplock",children:[]},{value:"INNERLOOP.STATE_LOCK",id:"innerloopstate_lock",children:[]},{value:"PROCESS.EDGE.NODE_RESULT_ERROR",id:"processedgenode_result_error",children:[]},{value:"PROCESS.END_NODE_RUN",id:"processend_node_run",children:[]},{value:"PROCESS_STATE.NEW",id:"process_statenew",children:[]},{value:"PROCESS.AM.CREATING",id:"processamcreating",children:[]},{value:"PROCESS.AM.NEW",id:"processamnew",children:[]},{value:"PROCESS.SUBPROCESS.CREATING",id:"processsubprocesscreating",children:[]},{value:"PROCESS.SUBPROCESS.NEW",id:"processsubprocessnew",children:[]},{value:"PROCESS.FINISHED",id:"processfinished",children:[]},{value:"PROCESS.SUBPROCESS.UPSTREAM",id:"processsubprocessupstream",children:[]},{value:"NODE.RESULT_ERROR",id:"noderesult_error",children:[]},{value:"EXECUTION_LOOP.START",id:"execution_loopstart",children:[]},{value:"EXECUTION_LOOP.TRANSACTION",id:"execution_looptransaction",children:[]},{value:"EXECUTION_LOOP.COMMIT",id:"execution_loopcommit",children:[]},{value:"PROCESS.STEP_CREATED",id:"processstep_created",children:[]},{value:"EXECUTION_LOOP.ROLLBACK",id:"execution_looprollback",children:[]},{value:"EXECUTION_LOOP.END",id:"execution_loopend",children:[]},{value:"NOME DO EVENTO",id:"nome-do-evento",children:[]},{value:"EXECUTION_LOOP.LEFT",id:"execution_loopleft",children:[]},{value:"PROCESS.TIMEOUT",id:"processtimeout",children:[]},{value:"PROCESS.TIMEOUT.BAIL",id:"processtimeoutbail",children:[]},{value:"PROCESS.RESULT_SCHEMA.ERROR",id:"processresult_schemaerror",children:[]},{value:"ENGINE.ERROR",id:"engineerror",children:[]},{value:"ENGINE.HEARTBEAT",id:"engineheartbeat",children:[]},{value:"ENGINE.FETCHING_TIMERS",id:"enginefetching_timers",children:[]},{value:"ENGINE.TIMERS",id:"enginetimers",children:[]},{value:"ENGINE.FIRING_TIMER",id:"enginefiring_timer",children:[]},{value:"ENGINE.ORPHANS_FETCHING",id:"engineorphans_fetching",children:[]},{value:"ENGINE.ORPHANS_FETCHED",id:"engineorphans_fetched",children:[]},{value:"ENGINE.ORPHAN_FETCHING",id:"engineorphan_fetching",children:[]},{value:"ENGINE.ORPHANS.ERROR",id:"engineorphanserror",children:[]},{value:"ENGINE.ORPHAN_FETCHED",id:"engineorphan_fetched",children:[]},{value:"ENGINE.ORPHAN.CONTINUE",id:"engineorphancontinue",children:[]},{value:"ENGINE.HEART.ERROR",id:"enginehearterror",children:[]},{value:"ENGINE.NEXT",id:"enginenext",children:[]},{value:"PROCESS.EDGE.CREATED",id:"processedgecreated",children:[]},{value:"PROCESS.EDGE.ABORTED",id:"processedgeaborted",children:[]}],p={toc:d};function s(e){var t=e.components,r=(0,i.Z)(e,E);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Nessa parte vamos descobrir quais s\xe3o os ",(0,o.kt)("strong",{parentName:"p"},"eventos")," dispon\xedveis."),(0,o.kt)("h2",{id:"process_state_listener"},"PROCESS_STATE_LISTENER"),(0,o.kt)("p",null,"Evento que ocorre quando um processo muda seu estado."),(0,o.kt)("p",null,'Output: "New PROCESS_STATE"'),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS_STATE_LISTENER',`NEW PROCESS_STATE`);")),(0,o.kt)("h2",{id:"knexupdate_error"},"KNEX.UPDATE_ERROR"),(0,o.kt)("p",null,"Evento que comunica quando n\xe3o \xe9 poss\xedvel atualizar um objeto."),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('KNEX.UPDATE_ERROR', 'Unable to update object', { error: e, id: obj_id });")),(0,o.kt)("h2",{id:"knexdelete_process_error"},"KNEX.DELETE_PROCESS_ERROR"),(0,o.kt)("p",null,"Evento que comunica quando n\xe3o \xe9 poss\xedvel deletar um determinado processo."),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('KNEX.DELETE_PROCESS_ERROR', `Unable delete Process with PID [${this.id}]`, { error: e, process_id: this.id });")),(0,o.kt)("h2",{id:"knexcreate_process_error"},"KNEX.CREATE_PROCESS_ERROR"),(0,o.kt)("p",null,"Evento que comunica quando n\xe3o \xe9 poss\xedvel criar um determinado processo."),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('KNEX.CREATE_PROCESS_ERROR', `Unable to create Process with PID [${this.id}]`, { error: e, process_id: this.id } );")),(0,o.kt)("h2",{id:"knexupdate_process_error"},"KNEX.UPDATE_PROCESS_ERROR"),(0,o.kt)("p",null,"Evento que comunica quando n\xe3o \xe9 poss\xedvel atualizar um determinado processo."),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('KNEX.UPDATE_PROCESS_ERROR', `Unable to update Process with PID [${process_id}]`, { error: e, process_id } );")),(0,o.kt)("h2",{id:"requeststracestart"},"REQUESTS.TRACE.START"),(0,o.kt)("p",null,"Evento que que ir\xe1 mapear as solicita\xe7\xf5es HTTP realizadas"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('REQUESTS.TRACE.START',`SETTING TRACEPARENT`, {});")),(0,o.kt)("h2",{id:"requeststraceold"},"REQUESTS.TRACE.OLD"),(0,o.kt)("p",null,"Evento que retorna as solicita\xe7\xf5es HTTP passadas"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('REQUESTS.TRACE.OLD',`OLD TRACEPARENT`, { traceparent: headers.traceparent });")),(0,o.kt)("h2",{id:"requeststracenew"},"REQUESTS.TRACE.NEW"),(0,o.kt)("p",null,"Evento que retorna as novas solicita\xe7\xf5es HTTP???"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('REQUESTS.TRACE.NEW',`NEW TRACEPARENT`, { traceparent: headers.traceparent });")),(0,o.kt)("h2",{id:"activity_managercompleted"},"ACTIVITY_MANAGER.COMPLETED"),(0,o.kt)("p",null,"Evento que retorna o gerenciamento de determinadas atividades completadas???"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},'emitter.emit("ACTIVITY_MANAGER.COMPLETED", `ACTIVITY MANAGER COMPLETED AMID: [${this.id}]`, {activity_manager: this});')),(0,o.kt)("h2",{id:"activity_manager_timercleared"},"ACTIVITY_MANAGER_TIMER.CLEARED"),(0,o.kt)("p",null,"Evento que retorna a limpeza do timer de um determinado gerenciador de atividade"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ACTIVITY_MANAGER_TIMER.CLEARED', `CLEARED TIMERS FOR AMID [${this.id}]`,{ activity_manager_id: this.id });")),(0,o.kt)("h2",{id:"activity_manager_timercreating_new"},"ACTIVITY_MANAGER_TIMER.CREATING_NEW"),(0,o.kt)("p",null,"Evento que retorna a cria\xe7\xe3o de um novo timer de gerenciador de atividade"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ACTIVITY_MANAGER_TIMER.CREATING_NEW',`      CREATING NEW TIMER ON AMID [${this.id}] `,{ activity_manager_id: this.id });")),(0,o.kt)("h2",{id:"activity_managernew_timer"},"ACTIVITY_MANAGER.NEW_TIMER"),(0,o.kt)("p",null,"Evento que retorna um novo timer para um determinado gerenciador de atividades"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ACTIVITY_MANAGER.NEW_TIMER',`      NEW TIMER ON AMID [${this.id}] TIMER [${timer.id}]`,{ activity_manager_id: this.id, timer_id: timer.id });")),(0,o.kt)("h2",{id:"activity_managertimeout_expired"},"ACTIVITY_MANAGER.TIMEOUT_EXPIRED"),(0,o.kt)("p",null,"Evento que retorna a dura\xe7\xe3o expirada do gerenciador de atividade"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ACTIVITY_MANAGER.TIMEOUT_EXPIRED',`TIMEOUT ON AMID [${this.id}] TIMER [${timer.id}]`,{ activity_manager_id: this.id, timer_id: timer.id });")),(0,o.kt)("h2",{id:"activity_managercompleted-1"},"ACTIVITY_MANAGER.COMPLETED"),(0,o.kt)("p",null,"Evento que retorna o gerenciador de atividade completado???"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ACTIVITY_MANAGER.COMPLETED', `COMPLETED AMID [${this.id}]`, { activity_manager: activity_manager });")),(0,o.kt)("h2",{id:"activity_manager_timercreating_new-1"},"ACTIVITY_MANAGER_TIMER.CREATING_NEW"),(0,o.kt)("p",null,"Evento que retorna a cria\xe7\xe3o de um novo timer no gerenciador de atividade???"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ACTIVITY_MANAGER_TIMER.CREATING_NEW',`      CREATING NEW TIMER ON AMID [${id}]`,{ activity_manager_id: id });")),(0,o.kt)("h2",{id:"blueprintunused_variables"},"BLUEPRINT.UNUSED_VARIABLES"),(0,o.kt)("p",null,"Evento que retorna as vari\xe1veis de ambiente que n\xe3o s\xe3o usadas"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('BLUEPRINT.UNUSED_VARIABLES','UNUSED ENVIRONMENT VARIABLES', { nodes: blueprint_env_status.nodes, ambient: blueprint_env_status.ambient } );")),(0,o.kt)("h2",{id:"blueprintnon_existent_variables"},"BLUEPRINT.NON_EXISTENT_VARIABLES"),(0,o.kt)("p",null,"Evento que retorna as vari\xe1veis de ambiente n\xe3o existentes"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('BLUEPRINT.NON_EXISTENT_VARIABLES','NON EXISTENT ENVIRONMENT VARIABLES', { ambient: blueprint_env_status.ambient } );")),(0,o.kt)("h2",{id:"laneeval_error"},"LANE.EVAL_ERROR"),(0,o.kt)("p",null,"Erro ao avaliar as regras da raia"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('LANE.EVAL_ERROR', \"ERROR WHILE EVALUATING LANE RULE!\", { rule: rule_lisp, error: e });")),(0,o.kt)("h2",{id:"nodeerror"},"NODE.ERROR"),(0,o.kt)("p",null,"Erro em um espec\xedfico n\xf3"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('NODE.ERROR',`ERROR AT NID [${this.id}]`, {")),(0,o.kt)("h2",{id:"nodestart_validated"},"NODE.START_VALIDATED"),(0,o.kt)("p",null,"Evento que retorna se o n\xf3 de in\xedcio foi validado"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('NODE.START_VALIDATED','START NODE VALIDATED', { is_valid: is_valid, error: error });")),(0,o.kt)("h2",{id:"processrun"},"PROCESS.RUN"),(0,o.kt)("p",null,"Evento que retorna um determinado processo rodado"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.RUN',`RUN ON PID [${this.id}]`,{ process_id: this.id });")),(0,o.kt)("h2",{id:"processedgeerror"},"PROCESS.EDGE.ERROR"),(0,o.kt)("p",null,"Evento que retorna os erros de dados de um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.EDGE.ERROR',`ERROR ON PROCESS PID [${this.id}] DATA [${this.workflow_name}]:[${current_node._spec.name}]`,{ process_id: this.id, workflow_name: this.workflow_name, node_id: current_node._spec.id, node_name: current_node._spec.name });")),(0,o.kt)("h2",{id:"processtimercreating"},"PROCESS.TIMER.CREATING"),(0,o.kt)("p",null,"Evento que retorna a cria\xe7\xe3o de um timer em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.TIMER.CREATING',`  CREATING PROCESS TIMER ON PID [${this.id}]`, { process_id: this.id });")),(0,o.kt)("h2",{id:"processtimernew"},"PROCESS.TIMER.NEW"),(0,o.kt)("p",null,"Evento que retona um novo timer em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.TIMER.NEW',`  PROCESS TIMER ON PID [${this.id}] TIMER [${timer.id}]`, { process_id: this.id, timer_id: timer.id });")),(0,o.kt)("h2",{id:"processcontinue"},"PROCESS.CONTINUE"),(0,o.kt)("p",null,"Evento que retorna a continua\xe7\xe3o de um processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.CONTINUE',`CONTINUE ON PID [${this.id}]`, { process_id: this.id });")),(0,o.kt)("h2",{id:"processrun_pending"},"PROCESS.RUN_PENDING"),(0,o.kt)("p",null,"Evento que retorna um determinado processo pendente"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.RUN_PENDING',`RUN PENDING PID [${this.id}]`, { process_id: this.id });")),(0,o.kt)("h2",{id:"processedgeexpiring"},"PROCESS.EDGE.EXPIRING"),(0,o.kt)("p",null,"Evento que retorna um determinado processo expirado"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.EDGE.EXPIRING',`EXPIRE PID [${this.id}]`, { process_id: this.id });")),(0,o.kt)("h2",{id:"processedgeaborting"},"PROCESS.EDGE.ABORTING"),(0,o.kt)("p",null,"Evento que retorna o aborto de um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.EDGE.ABORTING',`ABORT PID [${this.id}]`, { process_id: this.id });")),(0,o.kt)("h2",{id:"processstateset"},"PROCESS.STATE.SET"),(0,o.kt)("p",null,"Evento que configura o estado de um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.STATE.SET',`SET STATE ON PID [${this.id}]`, {")),(0,o.kt)("h2",{id:"innerlooplock"},"INNERLOOP.LOCK"),(0,o.kt)("p",null,"Evento que retorna um determinado processo trancado"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('INNERLOOP.LOCK',`      LOCK PID ${p_lock.id}`,{")),(0,o.kt)("h2",{id:"innerloopstate_lock"},"INNERLOOP.STATE_LOCK"),(0,o.kt)("p",null,"Evento que retorna um estado trancado de um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('INNERLOOP.STATE_LOCK',`      LOCK PID [${p_lock.id}] PS [${ps_lock.id}]`,{")),(0,o.kt)("h2",{id:"processedgenode_result_error"},"PROCESS.EDGE.NODE_RESULT_ERROR"),(0,o.kt)("p",null,"Evento que retorna que h\xe1 um erro de JSON em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"## emitter.emit('PROCESS.EDGE.NODE_RESULT_ERROR', `NODE RESULT FROM NODE ID [${this.next_node._spec.id}] IS A INVALID JSON ON PID [${this.id}]`, {")),(0,o.kt)("h2",{id:"processend_node_run"},"PROCESS.END_NODE_RUN"),(0,o.kt)("p",null,"Evento que retorna o status do n\xf3 final"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.END_NODE_RUN',`      END NODE RUN STATUS [${node_result.status}]`, {")),(0,o.kt)("h2",{id:"process_statenew"},"PROCESS_STATE.NEW"),(0,o.kt)("p",null,"Evento que retorna um novo estado em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS_STATE.NEW',`      NEW STATE ON PID [${p_lock.id}] PS [${this.state.id}]`, {")),(0,o.kt)("h2",{id:"processamcreating"},"PROCESS.AM.CREATING"),(0,o.kt)("p",null,"Evento que retorna a cria\xe7\xe3o de um novo gerenciador de atividade em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.AM.CREATING',`      CREATING NEW ACTIVITY MANAGER ON PID [${p_lock.id}]`, {")),(0,o.kt)("h2",{id:"processamnew"},"PROCESS.AM.NEW"),(0,o.kt)("p",null,"Evento que retorna um novo gerenciador de atividade em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.AM.NEW',`      NEW ACTIVITY MANAGER ON PID [${p_lock.id}] AM [${am.id}]`, {")),(0,o.kt)("h2",{id:"processsubprocesscreating"},"PROCESS.SUBPROCESS.CREATING"),(0,o.kt)("p",null,"Evento que retorna a cria\xe7\xe3o de um novo subprocesso em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.SUBPROCESS.CREATING',`      CREATING NEW SUBPROCESS ON PID [${p_lock.id}]`, { process_id: p_lock.id, sub_workflow_name: node_result.workflow_name });")),(0,o.kt)("h2",{id:"processsubprocessnew"},"PROCESS.SUBPROCESS.NEW"),(0,o.kt)("p",null,"Evento que retorna um novo subprocesso em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.SUBPROCESS.NEW',`      NEW SUBPROCESS ON PID [${p_lock.id}] SPID [${child_process.id}]`, {")),(0,o.kt)("h2",{id:"processfinished"},"PROCESS.FINISHED"),(0,o.kt)("p",null,"Evento que retorna um determinado processo finalizado"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.FINISHED',`      FINISHED PID [${p_lock.id}]`, {")),(0,o.kt)("h2",{id:"processsubprocessupstream"},"PROCESS.SUBPROCESS.UPSTREAM"),(0,o.kt)("p",null,"Evento que retorna um upstream em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.SUBPROCESS.UPSTREAM',`      SUBPROCESS UPSTREAM ON PID [${p_lock.id}] PPID [${result_state.bag.parent_process_data.id}]`, {")),(0,o.kt)("h2",{id:"noderesult_error"},"NODE.RESULT_ERROR"),(0,o.kt)("p",null,"Evento que retorna um erro ao transformar o n\xf3 em um JSON"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('NODE.RESULT_ERROR',`ERROR AT JSON PARSE NODE`, {")),(0,o.kt)("h2",{id:"execution_loopstart"},"EXECUTION_LOOP.START"),(0,o.kt)("p",null,"Evento que retorna a execu\xe7\xe3o de um loop em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('EXECUTION_LOOP.START',`CALLED EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]`,{")),(0,o.kt)("h2",{id:"execution_looptransaction"},"EXECUTION_LOOP.TRANSACTION"),(0,o.kt)("p",null,"Evento que retorna o in\xedcio de uma transa\xe7\xe3o de loop em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('EXECUTION_LOOP.TRANSACTION',`    BEGIN TRANSACTION FOR PID [${this.id}] - ENGINE_ID [${ENGINE_ID}]`,{")),(0,o.kt)("h2",{id:"execution_loopcommit"},"EXECUTION_LOOP.COMMIT"),(0,o.kt)("p",null,"??Perguntar ao Gustavo??"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('EXECUTION_LOOP.COMMIT',`      COMMIT ON EXEC PID [${this.id}] ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]`,{")),(0,o.kt)("h2",{id:"processstep_created"},"PROCESS.STEP_CREATED"),(0,o.kt)("p",null,"??Perguntar ao Gustavo??"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emit('PROCESS.STEP_CREATED','',{});")),(0,o.kt)("h2",{id:"execution_looprollback"},"EXECUTION_LOOP.ROLLBACK"),(0,o.kt)("p",null,"Evento que retorna uma restaura\xe7\xe3o em um determinado processo executado"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('EXECUTION_LOOP.ROLLBACK',`      ROLLBACK ON EXEC PID [${this.id}]  ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]`,{")),(0,o.kt)("h2",{id:"execution_loopend"},"EXECUTION_LOOP.END"),(0,o.kt)("p",null,"Evento que retorna o fim de um loop em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('EXECUTION_LOOP.END',`  END LOOP PID [${this.id}] STATUS [${this.status}] EXECUTION SUCCESS [${execution_success}]`,{")),(0,o.kt)("h2",{id:"nome-do-evento"},"NOME DO EVENTO"),(0,o.kt)("p",null,"Evento que retorna uma notifica\xe7\xe3o de um gerenciador de atividade criada em um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},'emitter.emit("PROCESS.ACTIVITY_MANAGER.CREATED",`ACTIVITY MANAGER NOTIFY CREATED ON PID [${this.id}]`, {')),(0,o.kt)("h2",{id:"execution_loopleft"},"EXECUTION_LOOP.LEFT"),(0,o.kt)("p",null,"Evento que retorna a sa\xedda da execu\xe7\xe3o de um loop"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('EXECUTION_LOOP.LEFT',`LEFT EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]`,{")),(0,o.kt)("h2",{id:"processtimeout"},"PROCESS.TIMEOUT"),(0,o.kt)("p",null,"Evento que retorna o tempo esgotado de um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.TIMEOUT',`TIMEOUT ON PID [${this.id}] TIMER [${timer.id}]`,{")),(0,o.kt)("h2",{id:"processtimeoutbail"},"PROCESS.TIMEOUT.BAIL"),(0,o.kt)("p",null,"Evento que retorna a impossibilidade de expirar um determinado e ativo processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.TIMEOUT.BAIL',`  CANNOT EXPIRE RUNNING PROCESS PID [${this.id}]`,{")),(0,o.kt)("h2",{id:"processresult_schemaerror"},"PROCESS.RESULT_SCHEMA.ERROR"),(0,o.kt)("p",null,"Evento que retorna o erro de um esquema de um determinado processo"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.RESULT_SCHEMA.ERROR', resultSchemaError, {")),(0,o.kt)("h2",{id:"engineerror"},"ENGINE.ERROR"),(0,o.kt)("p",null,"Evento que retorna um erro na engine"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.ERROR', 'ERROR AT ENGINE', { error: e });")),(0,o.kt)("h2",{id:"engineheartbeat"},"ENGINE.HEARTBEAT"),(0,o.kt)("p",null,"Evento que retorna um heartbeat em um determinado momento"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.HEARTBEAT',`HEARTBEAT @ [${new Date().toISOString()}]`);")),(0,o.kt)("h2",{id:"enginefetching_timers"},"ENGINE.FETCHING_TIMERS"),(0,o.kt)("p",null,"Evento que retorna os timers buscados em meio aos heartbeats"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.FETCHING_TIMERS',`  FETCHING TIMERS ON HEARTBEAT BATCH [${TIMER_BATCH}]`);")),(0,o.kt)("h2",{id:"enginetimers"},"ENGINE.TIMERS"),(0,o.kt)("p",null,"Evento que retorna a quantidade de timers nos heartbeats"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.TIMERS',`  FETCHED [${locked_timers.length}] TIMERS ON HEARTBEAT`,{ timers: locked_timers.length });")),(0,o.kt)("h2",{id:"enginefiring_timer"},"ENGINE.FIRING_TIMER"),(0,o.kt)("p",null,"Evento que retorna um timer 'firing' em um heartbeat"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.FIRING_TIMER',`  FIRING TIMER [${t_lock.id}] ON HEARTBEAT`, { timer_id: t_lock.id });")),(0,o.kt)("h2",{id:"engineorphans_fetching"},"ENGINE.ORPHANS_FETCHING"),(0,o.kt)("p",null,"Evento que retorna que est\xe3o buscando os processos orf\xe3os em meio aos heartbeats"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.ORPHANS_FETCHING',`FETCHING ORPHAN PROCESSES ON HEARTBEAT BATCH [${ORPHAN_BATCH}]`);")),(0,o.kt)("h2",{id:"engineorphans_fetched"},"ENGINE.ORPHANS_FETCHED"),(0,o.kt)("p",null,"Evento que retorna os processos orf\xe3os em meio aos heartbeats"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.ORPHANS_FETCHED',`  FETCHED [${locked_orphans.length}] ORPHANS ON HEARTBEAT`,{ orphans: locked_orphans.length });")),(0,o.kt)("h2",{id:"engineorphan_fetching"},"ENGINE.ORPHAN_FETCHING"),(0,o.kt)("p",null,"Evento que retorna a busca de um determinado processo orf\xe3o no heartbeat"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.ORPHAN_FETCHING',`  FETCHING PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT`, { process_id: orphan.id });")),(0,o.kt)("h2",{id:"engineorphanserror"},"ENGINE.ORPHANS.ERROR"),(0,o.kt)("p",null,"Evento que retorna erros aos buscar processos orf\xe3os no heartbeat"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.ORPHANS.ERROR',\"  ERROR FETCHING ORPHANS ON HEARTBEAT\", { error: e });")),(0,o.kt)("h2",{id:"engineorphan_fetched"},"ENGINE.ORPHAN_FETCHED"),(0,o.kt)("p",null,"Evento que retorna um determinado processo orf\xe3o"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.ORPHAN_FETCHED',`  FETCHED PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT`, { process_id: orphan.id });")),(0,o.kt)("h2",{id:"engineorphancontinue"},"ENGINE.ORPHAN.CONTINUE"),(0,o.kt)("p",null,"Evento que retorna a continua\xe7\xe3o de um determinado processo orf\xe3o e seu estado no heartbeat"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.ORPHAN.CONTINUE',`    START CONTINUE ORPHAN PID [${process.id}] AND STATE [${process.state.id}] ON HEARTBEAT`, {")),(0,o.kt)("h2",{id:"enginehearterror"},"ENGINE.HEART.ERROR"),(0,o.kt)("p",null,"Evento que retorna um erro em um determinado engine"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.HEART.ERROR',`HEART FAILURE @ ENGINE_ID [${ENGINE_ID}]`, {")),(0,o.kt)("h2",{id:"enginenext"},"ENGINE.NEXT"),(0,o.kt)("p",null,"Evento que retorna o pr\xf3ximo heartbeat"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('ENGINE.NEXT',\"NEXT HEARTBEAT SET\")")),(0,o.kt)("h2",{id:"processedgecreated"},"PROCESS.EDGE.CREATED"),(0,o.kt)("p",null,"Evento que retorna o processo criado"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.EDGE.CREATED',`CREATED PROCESS OF [${workflow.name}] PID [${created_process.id}]`, {workflow_name: workflow.name process_id: created_process.id});")),(0,o.kt)("h2",{id:"processedgeaborted"},"PROCESS.EDGE.ABORTED"),(0,o.kt)("p",null,"Evento que retorna um processo abortado"),(0,o.kt)("p",null,"Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter.emit('PROCESS.EDGE.ABORTED',`PROCESS ABORTED [${process_id}] OF [${abort_result[0].value.workflow_name}]`, {workflow_name: abort_result[0].value.workflow_name, process_id: process_id});")))}s.isMDXComponent=!0}}]);