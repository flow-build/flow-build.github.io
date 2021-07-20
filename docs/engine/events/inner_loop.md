
# Inner_Loop

## INNERLOOP.LOCK

Evento que retorna um determinado processo trancado

**Mensagem**

LOCK PID ${p_lock.id}

**Input**

**parameters**: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "error"
    }
}
```

## INNERLOOP.STATE_LOCK

Evento que retorna um estado trancado de um determinado processo

**Mensagem**

LOCK PID [${p_lock.id}] PS [${ps_lock.id}]

**Input**

**parameters**: process_id e process_state_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "error"
    },
    "process_state_is": {
        "type": "string",
        "format": "error"
    }
}
```