---
sidebar_position: 18
---

# fetchWorkflow

Retorna o workflow informado.

## Type

READ

## Input

**parameters**: workflow_id
``` json title=Schema
{
    "process_id": { "type": "string", "format": "uuid" }
    "required": ["workflow_id"]
}
```

## Output

[Workflow](../models/workflow)