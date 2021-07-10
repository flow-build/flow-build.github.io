---
sidebar_position: 27
---

# submitActivity

Envia as atividades do Activity Manager para o processo, retomando a execução do mesmo.

## Type

UPDATE

## Input

**parameters**: activity_manager_id, actor_data, external_input
``` json title=Schema
{
    "activity_manager_id": { "type": "string", "format": "uuid" },
    "actor_data": { "$ref": "#/models/Actor Data" },
    "required": ["activity_manager_id","actor_data"]
}
```
[Actor Data](../models/actor_data)

## Output
``` json title=Schema
{
    "oneOf": [
        {
            "$ref": "#/models/Process"    
        },
        {
            "$ref": "#/models/Process State"    
        },
        {
            "$ref": "#/models/Error"
        }
    ]
    "process_id": { "type": "string", "format": "uuid" },
    "actor_data": { "$ref": "#/models/Actor Data" },
    "required": ["process_id","actor_data"]
}
```
[Process](../models/process)

[Process State](../models/processState)

[Error](../models/error)

### ErrorTypes

+ **commitActivity**: não foi possível salvar a atividade no Activity Manager.
+ **submitActivity**: o Activity Manager não se encontra em status **started**.
+ **activityManager**: o Activity Manager não foi encontrado (pode significar que o ator não tem acesso ao Activity Manager).

## Eventos Relacionados

+ PROCESS.RUN
+ PROCESS.EDGE.ERROR
+ PROCESS.TIMER.CREATING
+ PROCESS.TIMER.NEW
+ PROCESS.RESULT_SCHEMA.ERROR
+ EXECUTION_LOOP.START
+ EXECUTION_LOOP.TRANSACTION
+ INNERLOOP.LOCK
+ INNERLOOP.STATE_LOCK
+ PROCESS.START_NODE_RUN
+ PROCESS.EDGE.NODE_RESULT_ERROR
+ PROCESS.END_NODE_RUN
+ PROCESS_STATE.NEW
+ PROCESS.TIMER.CREATING
+ PROCESS.TIMER.NEW
+ PROCESS.AM.CREATING
+ PROCESS.AM.NEW
+ PROCESS.SUBPROCESS.CREATING
+ PROCESS.SUBPROCESS.NEW
+ PROCESS.FINISHED
+ PROCESS.SUBPROCESS.UPSTREAM
+ EXECUTION_LOOP.COMMIT
+ EXECUTION_LOOP.ROLLBACK
+ EXECUTION_LOOP.END
+ PROCESS.ACTIVITY_MANAGER.CREATED
+ EXECUTION_LOOP.LEFT
+ PROCESS.TIMEOUT
+ PROCESS.TIMEOUT.BAIL