
# Node

## NODE.ERROR

Evento que ocorre quando há um erro em um específico nó

**Mensagem**

ERROR AT NID [${this.id}]

**Input**

parameters: node_id e error

**Schema**

```
{
    "node_id": {
        "type": "string",
        "format": "uuid"
    },
    "error": {
        "$ref": "#/Error"
    }
}
```
## NODE.START_VALIDATED

Evento que ocorre quando o nó inicial é validado

**Mensagem**

START NODE VALIDATED

**Input**

parameters: is_valid e error

**Schema**

```
{
    "is_valid": {
        "type": "boolean"
    },
    "error": {
        "$ref": "#/Error"
    }
}
```
## NODE.RESULT_ERROR

Evento que ocorre quando há um erro ao transformar o nó em um JSON

**Mensagem**

ERROR AT JSON PARSE NODE

**Input**

parameters: error

**Schema**

```
{
    "error": {
        "$ref": "#/Error"
    }
}
```