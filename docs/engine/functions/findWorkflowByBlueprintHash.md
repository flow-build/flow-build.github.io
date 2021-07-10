---
sidebar_position: 20
---

# findWorkflowByBlueprintHash

Retorna a lista de workflows com o hash informado.

## Type

READ

## Input

**parameters**: blueprint_hash
``` json title=Schema
{
    "blueprint_hash": { "type": "string" }
    "required": ["blueprint_hash"]
}
```

## Output
``` json title=Schema
{
    "type": "array",
    "items": {
        "$ref": "#/models/Workflows"
    }
}
```

[Workflow](../models/workflow)