---
sidebar_position: 13
---
# fetchDoneActivitiesForActor

Lista as atividades acessíveis pelo actor cujo status do activity manager é **completed**.

## Type

READ

## Input

**parameters**: actor_data, filters
``` json title=Schema
{
    "actor_data": { "$ref": "#/models/Actor Data" },
    "filters": { 
        "type": "object",
        "properties": {
            "workflow_id": { "type": "string", "format": "uuid" },
            "process_id": { "type": "string", "format": "uuid" },
            "status": { "type": "string", "enum": ["started","completed","interrupted"] },
            "type": { "type": "string", "enum": ["commit","notify"] },
            "current_status": { 
                "type": "array", 
                "items": { "type": "string" },
                "maxItems": 4
            }
        }
    }
    "required": ["actor_data"]
}
```
[Actor Data](../models/actor_data)

### Filters

+ **status**: status do Activity Manager
+ **current_status**: status atual do processo

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