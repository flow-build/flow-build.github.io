---
sidebar_position: 17
---

# fetchProcessStateHistory

Retorna a lista de estados do processo informado.

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

``` json title=Schema
{
    "oneOf": [
        {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "$ref": { "#/models/Process State" }
                }
            }
        },
        undefined
    ]
}
```
[Process State](../models/processState)