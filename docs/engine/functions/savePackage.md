---
sidebar_position: 23
---

# savePackage

Cria (ou atualiza) um package com os dados informados.

## Type

CREATE ou UPDATE

## Input

**parameters**: name, description, code
``` json title=Schema
{
    "name": { "type": "string" },
    "description": { "type": "string" },
    "code": { "type": "string" },
    "required": ["name","description","code"]
}
```

## Output

[Package](../models/package)