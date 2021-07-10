---
sidebar_position: 12
---

# fetchAvailableActivityForProcess

Retorna a atividade mais recente *mais recente* do processo cujo status da atividade é **started* em que o actor tem permissão de acesso.

## Type

READ

## Input

**parameters**: process_id,  actor_data
``` json title=Schema
{
    "process_id": { "type": "string", "format": "uuid" },
    "actor_data": { "$ref": "#/models/Actor Data" }
    "required": ["process_id","actor_data"]
}
```
[Actor Data](../models/actor_data)

## Output

[Process Activity](../models/processActivity)
