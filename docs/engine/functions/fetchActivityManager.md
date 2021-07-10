---
sidebar_position: 10
---
# fetchActivityManager

Se o actor tiver permissão de acesso, retorna o Activity Manager solicitado, juntamente com as atividades vinculadas e a data de expiração, se houver.

## Type
READ

## Input

**parameters**: activity_manager_id, actor_data
``` json title=Schema
{
    "activity_manager_id": { "type": "string", "format": "uuid" },
    "actor_data": { "$ref": "#/models/Actor Data" }
}
```
[Actor Data](../models/actor_data)

## Output
``` json title=Schema
{
    "type": "object",
    "properties": {
        "$ref": "#/models/Activity Manager",
        "activities": {
            "$ref": "#/models/Activity"
        },
        "expires_at": {  "type": "string", "format": "date-time" }
    }
}
```
[Activity Manager](../models/activity_manager)

[Activity](../models/activity)

## Eventos Relacionados

