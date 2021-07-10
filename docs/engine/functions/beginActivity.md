---
sidebar_position: 3
---

# beginActivity

(inativo) Inicia uma atividade, tem como objetivo reservar uma atividade a um ator evitando que múltiplos atores atuem na mesma atividade.



## Type

| Type | Entity |
| --- | --- |
| CREATE | Activity |
| UPDATE | Activity Manager |

## Input

**parameters**: actor_data, process_id
``` json title=Schema
{
    "process_id": { "type": "string", "format": "uuid"},
    "actor_data": { 
        "$ref": "#/models/Actor Data"
    }
}
```
[Actor Data](../models/actor_data)

## Output

``` json title=Schema
{
    "type": "object",
    "properties": {
        "$ref": "#/models/Activity Manager/props"
    }
}
```
[Activity Manager](../models/activity_manager)