---
sidebar_position: 9
---
# deleteWorkflow

Remove o workflow informado.

A remoção do workflow não será permitida caso hajam processos associados ao workflow_id informado.

:::note Nota
A restrição é feita pela camada de persistência, em função da FK entre workflow e process criada na implementação SQL.
A camada da aplicação não faz validação para exclusão.
:::

## Type

DELETE

## Input

**parameters**: workflow_id
``` json title=Schema
{
    "workflow_id": { "type": "string", "format": "uuid" }
    "required": ["workflow_id"]
}
```

## Output

Retorna a quantidade de workflows removidos.

``` json title=Schema
{
    "type": "integer"
}
```