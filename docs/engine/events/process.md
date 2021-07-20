
# Process

## PROCESS_STATE_LISTENER

Evento que ocorre quando um processo muda seu estado.

**Mensagem**

NEW PROCESS_STATE

**Input**

parameters: sem parâmetros

**Schema**

```
{
}
```

## PROCESS.RUN

Evento que ocorre quando há um determinado processo rodado

**Mensagem**

RUN ON PID [${this.id}]

**Input**

parameters: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.EDGE.ERROR

Evento que ocorre quando há erros de dados de um determinado processo

**Mensagem**

ERROR ON PROCESS PID [${this.id}] DATA [${this.workflow_name}]:[${current_node._spec.name}]

**Input**

parameters: process_id, workflow_name, node_id e node_name

**Schema**

```
{
    "node_id": {
        "type": "string",
        "format": "uuid"
    },
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "node_name": {
        "type": "string"
    },
    "workflow_name": {
        "type": "string"
    }
}
```

## PROCESS.TIMER.CREATING

Evento ocorre quando há a criação de um timer em um determinado processo

**Mensagem**

CREATING PROCESS TIMER ON PID [${this.id}]

**Input**

parameters: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.TIMER.NEW

Evento que ocorre quando há um novo timer em um determinado processo

**Mensagem**

PROCESS TIMER ON PID [${this.id}] TIMER [${timer.id}]

**Input**

parameters: process_id e timer_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "timer_id": {
        "type": "string",
        "format": "uuid"
    }
```

## PROCESS.CONTINUE

Evento que ocorre quando há a continuação de um processo

**Mensagem**

CONTINUE ON PID [${this.id}]

**Input**

parameters: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.RUN_PENDING

Evento que ocorre quando há um determinado processo pendente

**Mensagem**

Mensagem RUN PENDING PID [${this.id}]

**Input**

parameters: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.EDGE.EXPIRING

Evento que ocorre quando há um determinado processo expirado

**Mensagem**

EXPIRE PID [${this.id}]

**Input**

parameters: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.EDGE.ABORTING

Evento que ocorre quando há o aborto de um determinado processo

**Mensagem**

ABORT PID [${this.id}]

**Input**

parameters: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.STATE.SET

Evento que ocorre quando é configurado o estado de um determinado processo

**Mensagem**

SET STATE ON PID [${this.id}]

**Input**

parameters: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.START_NODE_RUN

Evento que ocorre quando o nó inicial começa a rodar

**Mensagem**

START NODE RUN [${this.next_node._spec.type}]:[${this.next_node._spec.category}]:[${this.next_node._spec.name}] ON PID ${this.id}

**Input**

parameters: node_id, process_id, node_name, node_type

**Schema**

```
{
    "node_id": {
        "type": "string",
        "format": "uuid"
    },
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "node_name": {
        "$ref": "#/Error"
    },
    "node_type": {
        "type": "string"
    }
}
```

## PROCESS.EDGE.NODE_RESULT_ERROR

Evento que ocorre quando há um erro de JSON em um determinado processo

**Mensagem**

NODE RESULT FROM NODE ID [${this.next_node._spec.id}] IS A INVALID JSON ON PID [${this.id}]

**Input**

parameters: process_id, node_id e node_name

**Schema**

```
{
    "node_id": {
        "type": "string",
        "format": "uuid"
    },
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "node_name": {
        "type": "string"
    }
}
```

## PROCESS.END_NODE_RUN

Evento que ocorre quando se chega no nó final

**Mensagem**

END NODE RUN STATUS [${node_result.status}]

**Input**

parameters: process_id e node_name

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "node_name": {
        "type": "string"
    }
}
```

## PROCESS_STATE.NEW

Evento que ocorre quando há um novo estado em um determinado processo

**Mensagem**

NEW STATE ON PID [${p_lock.id}] PS [${this.state.id}]

**Input**

parameters: process_id e process_state_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "process_state_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.AM.CREATING

Evento que ocorre quando há a criação de um novo ACTIVITY MANAGER em um determinado processo

**Mensagem**

CREATING NEW ACTIVITY MANAGER ON PID [${p_lock.id}]

**Input**

parameters: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.AM.NEW

Evento que ocorre quando há um novo ACITIVITY MANAGER em um determinado processo

**Mensagem**

NEW ACTIVITY MANAGER ON PID [${p_lock.id}] AM [${am.id}]

**Input**

parameters: process_id e activity_manager_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "activity_manager_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.SUBPROCESS.CREATING

Evento que ocorre na criação de um novo SUBPROCESS em um determinado processo

**Mensagem**

CREATING NEW SUBPROCESS ON PID [${p_lock.id}]

**Input**

parameters: process_id e sub_workflow_name

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "sub_workflow_name": {
        "type": "string"
    }
}
```

## PROCESS.SUBPROCESS.NEW

Evento que ocorre quando há um novo SUBPROCESS em um determinado processo

**Mensagem**

NEW SUBPROCESS ON PID [${p_lock.id}] SPID [${child_process.id}]

**Input**

parameters: process_id e sub_process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "sub_process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.FINISHED

Evento que ocorre quando um determinado processo é finalizado

**Mensagem**

FINISHED PID [${p_lock.id}]

**Input**

parameters: process_id e result_data

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "result_data": {
        "type": "string"
    }
}
```

## PROCESS.SUBPROCESS.UPSTREAM

Evento que ocorre quando há um SUBPROCESS UPSTREAM em um determinado processo

**Mensagem**

SUBPROCESS UPSTREAM ON PID [${p_lock.id}] PPID [${result_state.bag.parent_process_data.id}]`

**Input**

parameters: process_id e parent_process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "parent_process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.STEP_CREATED

PROCESS.STEP criado.

**Mensagem**

Sem mensagem

**Input**

parameters: sem parâmetros

**Schema**

```
{
}
```

## PROCESS.ACTIVITY_MANAGER.CREATED

Evento que ocorre quando há uma notificação no ACTIVITY MANAGER

**Mensagem**

ACTIVITY MANAGER NOTIFY CREATED ON PID [${this.id}]

**Input**

parameters: process, activity_manager e timer

**Schema**

```
{
   "process": {
    "type":"object",
    "properties":{
      "id": { "type":"string", "format":"uuid" },
      "created_at":{ "type":"string ", "format":"date-time" },
      "workflow_id": { "type":"string", "format":"uuid" },
      "current_status": { 
         "type":"string",
         "enum": ["unstarted","running","error","waiting","finished","pending","delegated"] 
      },
      "blueprint_spec": { "$ref": "#/models/workflow/blueprint_spec" },
      "state":{ "$ref": "#/models/process_state" },
     }
   },
   {
   "activity_manager": {
    "type":"object",
    "properties":{
      "id":{ "type":"string", "format":"uuid" },
      "created_at":{ "type":"string", "format":"date-time" },
      "type":{ 
         "type":"string", 
         "enum": ["commit","notify"] 
      },
      "process_state_id":{ "type":"string", "format":"uuid" },
      "props":{
         "type":"object",
         "properties": {
            "action": { "type": "string" },
            "result": { "type": "object" }
         }
      },
      "parameters":{
         "type":"object",
         "properties": {
            "timeout": { "type": "integer" },
            "timeout_id": { "type": "string", "format": "uuid" },
            "next_step_number": { "type": "integer" },
            "encrypted_data": {
               "type": "array",
               "items": { "type": "string" }
            }
            "activity_schema": {
               "type": "object"
            }
         }
      },
      "status":{ 
         "type":"string",
         "enum": ["started","completed","interrupted"]
      }
   }
},
   "timer": {
                "type": "object",
                "properties": {
                    "timer_id": {
                        "type": "string",
                        "format": "uuid"
                    }
                }
            },
}
```

## PROCESS.TIMEOUT

Evento que ocorre quando há um timeout em um determinado processo

**Mensagem**

TIMEOUT ON PID [${this.id}] TIMER [${timer.id}]

**Input**

parameters: process_id e timer_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "timer_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.TIMEOUT.BAIL

Evento que ocorre quando há impossibilidade de expirar um determinado e ativo processo

**Mensagem**

PROCESS.TIMEOUT.BAIL',`  CANNOT EXPIRE RUNNING PROCESS PID [${this.id}]

**Input**

parameters: process_id e timer_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "timer_id": {
        "type": "string",
        "format": "uuid"
    }
}
```

## PROCESS.RESULT_SCHEMA.ERROR

Evento que ocorre quando há um problema no Schema do processo

**Mensagem**

resultSchemaError

**Input**

parameters: process_id e message

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "message": {
        "type": "string"
    }
}
```

## PROCESS.EDGE.CREATED

Evento que ocorre quando há um PROCESS.EDGE.CREATED

**Mensagem**

CREATED PROCESS OF [${workflow.name}] PID [${created_process.id}]

**Input**

parameters: workflow_name e process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "workflow_name": {
        "type": "string"
    }
}
```

## PROCESS.EDGE.ABORTED

Evento que ocorre quando um processo é abortado

**Mensagem**

PROCESS ABORTED [${process_id}] OF [${abort_result[0].value.workflow_name}]

**Input**

parameters: process_id e workflow_name

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "workflow_name": {
        "type": "string"
    }
}
```