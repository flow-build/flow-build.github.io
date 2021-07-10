---
sidebar_position: 5
---

# commitActivity

Salva uma atividade.

Se o Activity Manager contém um activity schema, a validação do schema é realizado nesse método.

## Type

CREATE

## Input

**parameters**: process_id, actor_data, external_input
``` json title=Schema
{
    "process_id": { "type": "string", "format": "uuid" },
    "actor_data": { "$ref": "#/models/Actor Data" },
    "external_input": { "type": "object" }
}
```
:::note Nota
As propriedades do external_input dependem do contrato estabelecido entre o canal e o workflow para a action do Activity Manager.
:::

## Output

```json title=Schema
{
    "oneOf": [
        { 
            "$ref": "#/models/Activity Manager"
        },
        { 
            "$ref": "#/models/Error"
        },
    ]
}
```

### ErrorTypes

+ **activityManager**: significa que não foi encontrado um um activity manager ativo para o processo informado acessível pelo ator informado.
+ **commitActivity**: Não foi possível salvar a atividade