---
sidebar_position: 24
---

# saveWorkflow

Cria (ou atualiza) um workflow com os dados informados.

Se já existe um workflow com o name informado, será salva uma nova versão.

:::note Nota
A propriedade blueprint_hash seria o equivalente a um ETag da blueprint. 

É utilizada a biblioteca [JSum](https://www.npmjs.com/package/jsum) para gerar o hash.

O objetivo desta propriedade é permitir a implementação de verificação de duplicidade de uma blueprint antes de salvar uma nova versão.
::: 

## Type

CREATE ou UPDATE

## Input

**parameters**: name, description, blueprint_spec
``` json title=Schema
{
    "name": { "type": "string" },
    "description": { "type": "string" },
    "blueprint_spec": { "$ref": "#/models/Blueprint Spec" },
    "required": ["name","description","blueprint_spec"]
}
```
[Blueprint Spec](../models/blueprintSpec)

## Output

[Workflow](../models/workflow)