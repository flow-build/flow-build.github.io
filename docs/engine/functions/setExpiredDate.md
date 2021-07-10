---
sidebar_position: 26
---

# setExpiredDate


:construction: Define uma data absoluta para expiração de um timer. :construction:

:::info 
A funcionalidade está parcialmente implementada. Apesar do schema prever diferentes tipos de resource, o método só é aplicado para Activity Managers
:::

## Type

CREATE ou UPDATE

## Input

**parameters**: id, date, resource_type
``` json title=Schema
{
    "id": { "type": "string", "format": "uuid" },
    "date": { "type": "string", "pattern": "/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/" },
    "resource_type": { "type": "string", "enum": ["ActivityManager","Process","Mock"]},
    "required": ["id","date","resource_type"]
}
```

## Output

``` json title=Schema
{
    "oneOf": [
        undefined,
        {
            "$ref": "#/models/Error"
        }
    ]
}
```

### Error Types

+ **activityManager**: designa que não foi possível criar o timer para o activityManager


## Eventos Relacionados

+ ACTIVITY_MANAGER_TIMER.CREATING_NEW