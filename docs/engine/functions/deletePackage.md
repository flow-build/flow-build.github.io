---
sidebar_position: 8
---

# deletePackage

Remove o package informado.

## Type

DELETE

## Input

**parameters**: package_id
``` json title=Schema
{
    "package_id": { "type": "string", "format": "uuid" }
    "required": ["package_id"]
}
```

## Output

Retorna a quantidade de packages removidos.

``` json title=Schema
{
    "type": "integer"
}
```