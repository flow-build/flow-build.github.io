---
sidebar_position: 6
---

# createProcess

Cria um processo a partir de um workflow_id.

A validação do input_schema do startNode, se houver, **NÃO** é feita nessa etapa.

## Type

CREATE

## Input

**parameters**: workflow_id, actor_data, initial_bag
``` json title=Schema
{
    "workflow_id": { "type": "string", "format": "uuid"},
    "actor_data": { "$ref": "#/models/Actor Data" },
    "initial_bag": { "type": "object" },
    "required": ["workflow_id","actor_data"]
}
```
[Actor Data](../models/actor_data)

:::note Nota
A estrutura do objeto initial_bag varia em função do contrato estabelecido no startNode da blueprint do workflow.
:::

:::tip
Apesar da propriedade ser identificada como initial_bag, nesse momento os dados serão salvos no result do estado criado, migrando para a bag no momento em que o processo for inicializado.
:::

## Output
``` json title=Schema
{
    "ondeOf": [
        { "$ref": "#/models/Process" },
        undefined
    ]
}
```
[Process](../models/process)

## Eventos Relacionados

+ PROCESS.EDGE.CREATED