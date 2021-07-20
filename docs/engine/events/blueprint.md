
# Blueprint

## BLUEPRINT.UNUSED_VARIABLES

Evento que ocorre quando há variáveis de ambiente que não são usadas.

**Mensagem**

UNUSED ENVIRONMENT VARIABLES

**Input**

**parameters**: nodes, ambient

**Schema**

```
{
    "nodes": {
        "$ref": "schemas/nodes"
    },
    "ambient": {
        "$ref": "schemas/ambient"
    }
}
```

## BLUEPRINT.NON_EXISTENT_VARIABLES

Evento que ocorre quando as as variáveis de ambiente não existentes são mostradas

**Mensagem**

UNUSED ENVIRONMENT VARIABLES

**Input**

**parameters**: ambient

**Schema**

```
{
    "ambient": {
        "$ref": "schemas/ambient"
    }
}
```
