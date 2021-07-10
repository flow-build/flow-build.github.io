---
sidebar_position: 14
---

# fetchPackage

Retorna o package informado.

## Type

READ

## Input

**parameters**: package_id
``` json title=Schema
{
    "package_id": { "type": "string", "format": "uuid" }
    "required": ["package_id"]
}
```

## Output

``` json title=Schema
{
    "type": "object",
    "properties": {
        "id": { "type": "string", "format": "uuid" },
        "created_at": { "type": "string", "format": "date-time" }
    }
}
```