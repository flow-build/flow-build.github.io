(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[53],{9054:function(e){"use strict";e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","isLast":true,"docsSidebars":{"documentationSidebar":[{"collapsed":true,"type":"category","label":"\ud83c\udfc1 Come\xe7ando","items":[{"type":"link","label":"Instala\xe7\xe3o","href":"/docs/documentation/instalacao"},{"type":"link","label":"Gerando tokens","href":"/docs/documentation/tokenizacao"}]},{"collapsed":true,"type":"category","label":"\ud83d\udcd3 Conceitos","items":[{"type":"link","label":"Processos","href":"/docs/documentation/processos"},{"type":"link","label":"BPMN","href":"/docs/documentation/bpmn"}]},{"collapsed":true,"type":"category","label":"\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb Development","items":[{"type":"link","label":"Ciclo de um Processo","href":"/docs/documentation/cicloDeVidaDeProcesso"},{"type":"link","label":"Ciclo de uma Atividade","href":"/docs/documentation/cicloDeVidaDeAtividade"},{"type":"link","label":"Listeners","href":"/docs/documentation/listenersApi"},{"type":"link","label":"Logs","href":"/docs/documentation/logging"},{"type":"link","label":"testes","href":"/docs/documentation/testes"}]},{"type":"link","label":"\ud83d\ude4b FAQ","href":"/docs/documentation/faq"},{"type":"link","label":"\ud83d\udef0\ufe0f Contribuindo","href":"/docs/documentation/contribuindo"}],"resourcesSidebar":[{"type":"link","label":"main","href":"/docs/resources/main"},{"collapsed":true,"type":"category","label":"API","items":[{"type":"link","label":"Tokens","href":"/docs/resources/api/tokens"},{"type":"link","label":"Workflows","href":"/docs/resources/api/workflows"},{"type":"link","label":"Processos","href":"/docs/resources/api/processes"},{"type":"link","label":"Activity Managers (Tarefas)","href":"/docs/resources/api/activityManagers"},{"type":"link","label":"Packages","href":"/docs/resources/api/packages"}]},{"collapsed":true,"type":"category","label":"Entendendo blueprints","items":[{"type":"link","label":"Introdu\xe7\xe3o & Estrutura","href":"/docs/resources/blueprints"},{"collapsed":true,"type":"category","label":"Tipos de N\xf3s","items":[{"type":"link","label":"StartNode","href":"/docs/resources/nodes/startNode"},{"type":"link","label":"FinishNode","href":"/docs/resources/nodes/finishNode"},{"type":"link","label":"FlowNode","href":"/docs/resources/nodes/flowNode"},{"type":"link","label":"UserTask","href":"/docs/resources/nodes/userTaskNode"},{"type":"link","label":"SystemTask","href":"/docs/resources/nodes/systemTaskNode"},{"type":"link","label":"ScriptNode","href":"/docs/resources/nodes/scriptNode"},{"type":"link","label":"SubProcessNode","href":"/docs/resources/nodes/subprocessNode"}]},{"type":"link","label":"Comandos $","href":"/docs/resources/comandos"},{"type":"link","label":"Recomenda\xe7\xf5es","href":"/docs/resources/recomendations"},{"type":"link","label":"JSON SCHEMA","href":"/docs/resources/jsonSchema"},{"collapsed":true,"type":"category","label":"Exemplos","items":[{"type":"link","label":"Exemplos","href":"/docs/resources/examples"},{"type":"link","label":"Matricula","href":"/docs/resources/examples/matricula"}]},{"type":"link","label":"Refer\xeancias","href":"/docs/resources/references"}]},{"collapsed":true,"type":"category","label":"Models","items":[{"type":"link","label":"Blueprint Spec","href":"/docs/resources/models/blueprint_spec"},{"type":"link","label":"Lanes","href":"/docs/resources/models/lanes"}]}],"engineSidebar":[{"type":"link","label":"Exemplos","href":"/docs/engine/exemples_engine"},{"type":"category","label":"events","items":[{"type":"link","label":"Activity_Manager","href":"/docs/engine/events/activity_manager"},{"type":"link","label":"Blueprint","href":"/docs/engine/events/blueprint"},{"type":"link","label":"Engine","href":"/docs/engine/events/engine"},{"type":"link","label":"Execution_Loop","href":"/docs/engine/events/execution_loop"},{"type":"link","label":"Inner_Loop","href":"/docs/engine/events/inner_loop"},{"type":"link","label":"Knex","href":"/docs/engine/events/knex"},{"type":"link","label":"Node","href":"/docs/engine/events/node"},{"type":"link","label":"Process","href":"/docs/engine/events/process"},{"type":"link","label":"Requests","href":"/docs/engine/events/requests"}],"collapsed":true},{"type":"category","label":"functions","items":[{"type":"link","label":"abortProcess","href":"/docs/engine/functions/abortProcess"},{"type":"link","label":"addTimeInterval","href":"/docs/engine/functions/addTimeInterval"},{"type":"link","label":"beginActivity","href":"/docs/engine/functions/beginActivity"},{"type":"link","label":"buildCrypto","href":"/docs/engine/functions/buildCrypto"},{"type":"link","label":"commitActivity","href":"/docs/engine/functions/commitActivity"},{"type":"link","label":"createProcess","href":"/docs/engine/functions/createProcess"},{"type":"link","label":"createProcessByWorkflowName","href":"/docs/engine/functions/createProcessByWorkflowName"},{"type":"link","label":"deletePackage","href":"/docs/engine/functions/deletePackage"},{"type":"link","label":"deleteWorkflow","href":"/docs/engine/functions/deleteWorkflow"},{"type":"link","label":"fetchActivityManager","href":"/docs/engine/functions/fetchActivityManager"},{"type":"link","label":"fetchAvailableActivitiesForActor","href":"/docs/engine/functions/fetchAvailableActivitiesForActor"},{"type":"link","label":"fetchAvailableActivityForProcess","href":"/docs/engine/functions/fetchAvailableActivityForProcess"},{"type":"link","label":"fetchDoneActivitiesForActor","href":"/docs/engine/functions/fetchDoneActivitiesForActor"},{"type":"link","label":"fetchPackage","href":"/docs/engine/functions/fetchPackage"},{"type":"link","label":"fetchProcess","href":"/docs/engine/functions/fetchProcess"},{"type":"link","label":"fetchProcessList","href":"/docs/engine/functions/fetchProcessList"},{"type":"link","label":"fetchProcessStateHistory","href":"/docs/engine/functions/fetchProcessStateHistory"},{"type":"link","label":"fetchWorkflow","href":"/docs/engine/functions/fetchWorkflow"},{"type":"link","label":"fetchWorkflowByName","href":"/docs/engine/functions/fetchWorkflowByName"},{"type":"link","label":"findWorkflowByBlueprintHash","href":"/docs/engine/functions/findWorkflowByBlueprintHash"},{"type":"link","label":"pushActivity","href":"/docs/engine/functions/pushActivity"},{"type":"link","label":"runProcess","href":"/docs/engine/functions/runProcess"},{"type":"link","label":"savePackage","href":"/docs/engine/functions/savePackage"},{"type":"link","label":"saveWorkflow","href":"/docs/engine/functions/saveWorkflow"},{"type":"link","label":"setCrypto","href":"/docs/engine/functions/setCrypto"},{"type":"link","label":"setExpiredDate","href":"/docs/engine/functions/setExpiredDate"},{"type":"link","label":"submitActivity","href":"/docs/engine/functions/submitActivity"},{"type":"link","label":"validateBlueprint","href":"/docs/engine/functions/validateBlueprint"}],"collapsed":true},{"type":"category","label":"models","items":[{"type":"link","label":"Modelo de dados","href":"/docs/engine/models/modeloDeDados"},{"type":"link","label":"Activity","href":"/docs/engine/models/activity"},{"type":"link","label":"Activity Data","href":"/docs/engine/models/activity_data"},{"type":"link","label":"Activity Manager","href":"/docs/engine/models/activity_manager"},{"type":"link","label":"Actor Data","href":"/docs/engine/models/actor_data"},{"type":"link","label":"Blueprint Spec","href":"/docs/engine/models/blueprintSpec"},{"type":"link","label":"Error","href":"/docs/engine/models/Error"},{"type":"link","label":"External Input","href":"/docs/engine/models/external_input"},{"type":"link","label":"Packages","href":"/docs/engine/models/package"},{"type":"link","label":"Process","href":"/docs/engine/models/process"},{"type":"link","label":"Process Activity","href":"/docs/engine/models/processActivity"},{"type":"link","label":"Process State","href":"/docs/engine/models/processState"},{"type":"link","label":"Time Interval","href":"/docs/engine/models/timeInterval"},{"type":"link","label":"Workflow","href":"/docs/engine/models/workflow"}],"collapsed":true}],"tutorialSidebar":[{"collapsed":true,"type":"category","label":"Tutorial","items":[{"type":"link","label":"Configura\xe7\xe3o","href":"/docs/tutorial/configuracao"}]}]},"permalinkToSidebar":{"/docs/documentation/bpmn":"documentationSidebar","/docs/documentation/cicloDeVidaDeAtividade":"documentationSidebar","/docs/documentation/cicloDeVidaDeProcesso":"documentationSidebar","/docs/documentation/contribuindo":"documentationSidebar","/docs/documentation/faq":"documentationSidebar","/docs/documentation/instalacao":"documentationSidebar","/docs/documentation/listenersApi":"documentationSidebar","/docs/documentation/logging":"documentationSidebar","/docs/documentation/processos":"documentationSidebar","/docs/documentation/testes":"documentationSidebar","/docs/documentation/tokenizacao":"documentationSidebar","/docs/engine/events/activity_manager":"engineSidebar","/docs/engine/events/blueprint":"engineSidebar","/docs/engine/events/engine":"engineSidebar","/docs/engine/events/execution_loop":"engineSidebar","/docs/engine/events/inner_loop":"engineSidebar","/docs/engine/events/knex":"engineSidebar","/docs/engine/events/node":"engineSidebar","/docs/engine/events/process":"engineSidebar","/docs/engine/events/requests":"engineSidebar","/docs/engine/exemples_engine":"engineSidebar","/docs/engine/functions/abortProcess":"engineSidebar","/docs/engine/functions/addTimeInterval":"engineSidebar","/docs/engine/functions/beginActivity":"engineSidebar","/docs/engine/functions/buildCrypto":"engineSidebar","/docs/engine/functions/commitActivity":"engineSidebar","/docs/engine/functions/createProcess":"engineSidebar","/docs/engine/functions/createProcessByWorkflowName":"engineSidebar","/docs/engine/functions/deletePackage":"engineSidebar","/docs/engine/functions/deleteWorkflow":"engineSidebar","/docs/engine/functions/fetchActivityManager":"engineSidebar","/docs/engine/functions/fetchAvailableActivitiesForActor":"engineSidebar","/docs/engine/functions/fetchAvailableActivityForProcess":"engineSidebar","/docs/engine/functions/fetchDoneActivitiesForActor":"engineSidebar","/docs/engine/functions/fetchPackage":"engineSidebar","/docs/engine/functions/fetchProcess":"engineSidebar","/docs/engine/functions/fetchProcessList":"engineSidebar","/docs/engine/functions/fetchProcessStateHistory":"engineSidebar","/docs/engine/functions/fetchWorkflow":"engineSidebar","/docs/engine/functions/fetchWorkflowByName":"engineSidebar","/docs/engine/functions/findWorkflowByBlueprintHash":"engineSidebar","/docs/engine/functions/pushActivity":"engineSidebar","/docs/engine/functions/runProcess":"engineSidebar","/docs/engine/functions/savePackage":"engineSidebar","/docs/engine/functions/saveWorkflow":"engineSidebar","/docs/engine/functions/setCrypto":"engineSidebar","/docs/engine/functions/setExpiredDate":"engineSidebar","/docs/engine/functions/submitActivity":"engineSidebar","/docs/engine/functions/validateBlueprint":"engineSidebar","/docs/engine/models/activity":"engineSidebar","/docs/engine/models/activity_data":"engineSidebar","/docs/engine/models/activity_manager":"engineSidebar","/docs/engine/models/actor_data":"engineSidebar","/docs/engine/models/blueprintSpec":"engineSidebar","/docs/engine/models/Error":"engineSidebar","/docs/engine/models/external_input":"engineSidebar","/docs/engine/models/modeloDeDados":"engineSidebar","/docs/engine/models/package":"engineSidebar","/docs/engine/models/process":"engineSidebar","/docs/engine/models/processActivity":"engineSidebar","/docs/engine/models/processState":"engineSidebar","/docs/engine/models/timeInterval":"engineSidebar","/docs/engine/models/workflow":"engineSidebar","/docs/resources/api/activityManagers":"resourcesSidebar","/docs/resources/api/packages":"resourcesSidebar","/docs/resources/api/processes":"resourcesSidebar","/docs/resources/api/tokens":"resourcesSidebar","/docs/resources/api/workflows":"resourcesSidebar","/docs/resources/blueprints":"resourcesSidebar","/docs/resources/comandos":"resourcesSidebar","/docs/resources/examples":"resourcesSidebar","/docs/resources/examples/matricula":"resourcesSidebar","/docs/resources/jsonSchema":"resourcesSidebar","/docs/resources/main":"resourcesSidebar","/docs/resources/models/blueprint_spec":"resourcesSidebar","/docs/resources/models/lanes":"resourcesSidebar","/docs/resources/nodes/finishNode":"resourcesSidebar","/docs/resources/nodes/flowNode":"resourcesSidebar","/docs/resources/nodes/scriptNode":"resourcesSidebar","/docs/resources/nodes/startNode":"resourcesSidebar","/docs/resources/nodes/subprocessNode":"resourcesSidebar","/docs/resources/nodes/systemTaskNode":"resourcesSidebar","/docs/resources/nodes/userTaskNode":"resourcesSidebar","/docs/resources/recomendations":"resourcesSidebar","/docs/resources/references":"resourcesSidebar","/docs/tutorial/configuracao":"tutorialSidebar"}}')}}]);