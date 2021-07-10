---
sidebar_position: 15
---

# fetchProcess

Retorna o processo informado.

## Type

READ

## Input

**parameters**: process_id
``` json title=Schema
{
    "process_id": { "type": "string", "format": "uuid" }
    "required": ["process_id"]
}
```

## Output

[Process](../models/process)