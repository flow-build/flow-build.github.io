---
sidebar_position: 28
---

# validateBlueprint

Executa a validação da blueprint spec.

## Type

READ

## Input

**parameters**: blueprint_spec
``` json title=Schema
{
    "blueprint_spec": { 
        "$ref": { "#/models/blueprintSpec"
    }
}
```
[Blueprint Spec](../models/blueprintSpec)

## Output
``` json title=Schema
{
    "oneOf": [
        {
            "type": "object",
            "properties": {
                "value": { "type": "any" },
                "message": { "type": "string" }
            }
        },
        {
            "type": "object",
            "properties": { 
                "actual": { "type": "any" },
                "expected": { "type": "any" },
                "operator": { "type": "string" },
                "generatedMaessage": { "type": "boolean" },
                "code": "ERR_ASSERTION"
            }
        }
    ]
}
```