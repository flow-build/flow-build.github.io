---
sidebar_position: 2
---
# addTimeInterval

Cria ou atualiza o timer de um Activity Manager.

## Type
CREATE ou UPDATE

## Input

**parameters**: id, timeInterval, resource_type
``` json title=Schema
{
    "id": { "type": "string", "format": "uuid"},
    "timeInterval": {
        "oneOf": [
            { "type": "number"}, 
            { "type": "string", "format": "dateTime" }
        ]
    },
    "resource_type": {
        "type": "string", 
        "enum": ["ActivityManager","Process","Mock"]
    }
}
```

## Output
``` json
{ 
    "oneOf": [
        { 
            "type": "object",
            "properties": {
                "error": { 
                    "type": "object",
                    "properties": {
                        "errorType": { "type": "string" },
                        "message": { "type": "string" }
                    }
                }
            }
        },
        null
    ]
}
```

## Eventos Relacionados

+ ACTIVITY_MANAGER_TIMER.CREATING_NEW