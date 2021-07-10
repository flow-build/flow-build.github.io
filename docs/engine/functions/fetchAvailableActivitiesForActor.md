---
sidebar_position: 11
---
# fetchAvailableActivitiesForActor

Lista os Activity Managers disponíveis de processos ativos acessíveis pelo ator.

## Type

READ

## Input

**parameters**: actor_data
``` json title=Schema
{
    "actor_data": { "$ref": "#/models/Actor Data" }
}
```
[Actor Data](../models/actor_data)


## Output
``` json title=Schema
{
    "type": "array",
    "items": {
        "$ref": "#/models/Activity Data"
    }
}
```
[Activity Data](../models/activity_data)
