---
sidebar_position: 16
---
# fetchProcessList

Retorna todos os processos do filtro informado, incluindo o estado atual de cada um deles.

## Type

READ

## Input

**parameters**: filters
``` json title=Schema
{
    "filters": { 
        "type": "object", 
        "properties": { 
            "workflow_id": { "type": "string", "format": "uuid" } 
        }
    }
}
```

## Output

``` json title=Schema
{
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "$ref": { "#/models/Process" }
        }
    }
}
```
[Process](../models/process)