---
sidebar_position: 4
---
# buildCrypto

Constrói a encriptação na engine.

## Type

UPDATE

## Input

**parameters**: type, data
``` json title=Schema
{
    "type": { "type": "string" },
    "data": { 
        "type": "object",
        "properties": {
            "key": { "type": "string", "minLength": 32, "maxLength": 32 }
        }
    }
}
```
:::info
A propriedade **key** deve ter seu encoding em UTF-8
:::

## Output
``` json title=Schema
{
    "type": "object",
    "properties": { 
        "encript": { "type": "string",
        "decript": {
            "type": "object",
            "properties": {
                "crypted_text": { "type": "string" },
                "iv": { "type": "string" }
            }
        }
    }
}
```