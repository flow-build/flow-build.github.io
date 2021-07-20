
# Knex

## KNEX.UPDATE_ERROR

Evento que ocorre quando não é possível atualizar um objeto.

**Mensagem**

Unable to update object

**Input**

**parameters**: obj_id e error

**Schema**

```
{
    "obj_id": {
        "type": "string",
        "format": "uuid"
    },
    "error": {
        "$ref": "#/Error"
    }
}
```
## KNEX.DELETE_PROCESS_ERROR

Evento que ocorre quando não é possível deletar um determinado processo

**Mensagem**

Unable delete Process with PID [process_id]

**Input**

**parameters**: process_id e error

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "error": {
        "$ref": "#/Error"
    }
}
```
## KNEX.CREATE_PROCESS_ERROR

vento que ocorre quando não é possível criar um determinado processo

**Mensagem**

Unable delete Process with PID [${this.id}]

**Input**

**parameters**: obj_id e error

**Schema**

```
{
    "obj_id": {
        "type": "string",
        "format": "uuid"
    },
    "error": {
        "$ref": "#/Error"
    }
}
```
## KNEX.UPDATE_PROCESS_ERROR

Evento que ocorre quando não é possível atualizar um determinado processo

**Mensagem**

Unable to update Process with PID [${process_id}]

**Input**

**parameters**: obj_id, error

**Schema**

```
{
    "obj_id": {
        "type": "string",
        "format": "uuid"
    },
    "error": {
        "$ref": "#/Error"
    }
}
```