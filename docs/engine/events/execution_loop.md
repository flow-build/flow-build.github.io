
# Execution_Loop
## EXECUTION_LOOP.START

Evento que ocorre quando há a execução de um loop em um determinado processo

**Mensagem**

CALLED EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]

**Input**

**parameters**: process_id, engine_id e status

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "error"
    },
    "engine_id": {
        "type": "string",
        "format": "error"
    },
    "status": {
        "type": "string"
    }
}
```
## EXECUTION_LOOP.TRANSACTION

Evento que ocorre quando há o início de uma transação de loop em um determinado processo

**Mensagem**

BEGIN TRANSACTION FOR PID [${this.id}] - ENGINE_ID [${ENGINE_ID}]

**Input**

**parameters**: process_id e engine_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "error"
    },
    "engine_id": {
        "type": "string",
        "format": "error"
    }
}
```
## EXECUTION_LOOP.COMMIT

Descrição genérica

**Mensagem**

COMMIT ON EXEC PID [${this.id}] ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]

**Input**

**parameters**: process_id e engine_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "error"
    },
    "engine_id": {
        "type": "string",
        "format": "error"
    }
}
```
## EXECUTION_LOOP.ROLLBACK

Evento que ocorre quando há uma restauração em um determinado processo executado

**Mensagem**

ROLLBACK ON EXEC PID [${this.id}]  ON INNER LOOP - ENGINE_ID [${ENGINE_ID}]

**Input**

**parameters**: process_id e engine_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "error"
    },
    "engine_id": {
        "type": "string",
        "format": "error"
    }
}
```
## EXECUTION_LOOP.END

Evento que ocorre quando há o fim de um loop em um determinado processo

**Mensagem**

END LOOP PID [${this.id}] STATUS [${this.status}] EXECUTION SUCCESS [${execution_success}]

**Input**

**parameters**: process_id, engine_id e status

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "error"
    },
    "engine_id": {
        "type": "string",
        "format": "error"
    },
    "status": {
        "type": "string"
    }
}
```
## EXECUTION_LOOP.LEFT

Evento que retorna a saída da execução de um loop

**Mensagem**

LEFT EXECUTION LOOP PID [${this.id}] STATUS [${this.status}]

**Input**

**parameters**: process_id, engine_id e status

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "error"
    },
    "engine_id": {
        "type": "string",
        "format": "error"
    },
    "status": {
        "type": "string"
    }
}
```