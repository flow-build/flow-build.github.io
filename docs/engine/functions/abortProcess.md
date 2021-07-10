---
sidebar_position: 1
---
# abortProcess

Adiciona um novo estado ao processo, com status **interrupted**, atualiza todos os activity managers do processo em status **started** para status **interrupted**.

## Type
UPDATE

## Input
**parameters**: process_id
``` json title=Schema
{
    "process_id": { "type": "string", "format": "uuid"}
}
```

## Output
[Process](../models/process)

## Eventos Relacionados 
+ PROCESS.EDGE.ABORTING
+ PROCESS.EDGE.ABORTED