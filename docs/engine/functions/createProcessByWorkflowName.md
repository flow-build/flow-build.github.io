---
sidebar_position: 7
---

# createProcessByWorkflowName

Método análogo ao método [createProcess](./createProcess), porém ao invés de receber o workflow_id como parâmetro, é enviado o workflow_name.

O flowBuild utiliza sempre o worklfow_id de maior versão para o name solicitado.

## Input

**parameters**: workflow_id, actor_data, initial_bag
``` json title=Schema
{
    "workflow_name": { "type": "string" },
    "actor_data": { "$ref": "#/models/Actor Data" },
    "initial_bag": { "type": "object" },
    "required": ["workflow_id","actor_data"]
}
```
[Actor Data](../models/actor_data)