---
sidebar_position: 22
---

# runProcess

Inicia ou retoma a execução de um processo.

## Type

UPDATE

## Input

**parameters**: process_id, actor_data, external_input
``` json title=Schema
{
    "process_id": { "type": "string", "format": "uuid" },
    "actor_data": { "$ref": "#/models/Actor Data" },
    "external_input": { "type": "object" },
    "required": ["process_id","actor_data","external_input"]
}
```
[Actor Data](../models/actor_data)

## Output
``` json title=Schema
{
    "oneOf": [
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
[Process State](../models/processState)
[Error](../models/error)

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