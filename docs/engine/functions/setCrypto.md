---
sidebar_position: 25
---

# setCrypto

Define a encriptação da engine.

## Type

UPDATE

## Input

**parameters**: crypto
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

## Output
``` json title=Schema
{
    undefined
}
```