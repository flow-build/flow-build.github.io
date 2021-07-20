
# Engine
## ENGINE.ERROR

Evento que ocorre quando há um erro na engine

**Mensagem**

sem mensagem
**Input**

**parameters**: ambient

**Schema**

```
{
    "error": {
        "$ref": "schemas/Error"
    }
}
```
## ENGINE.HEARTBEAT

Evento que ocorre quando há um heartbeat

**Mensagem**

HEARTBEAT @ [${new Date().toISOString()}]

**Input**

**parameters**: sem parametros

**Schema**

```
{

}
```
## ENGINE.FETCHING_TIMERS

Evento que retorna os timers buscados em meio aos hearbeats

**Mensagem**

FETCHING TIMERS ON HEARTBEAT BATCH [${TIMER_BATCH}]

**Input**

**parameters**: sem parâmetros

**Schema**

```
{
    
}
```
## ENGINE.TIMERS

Evento que ocorre quando há uma contagem de timers nos heartbeats

**Mensagem**

FETCHED [${locked_timers.length}] TIMERS ON HEARTBEAT`

**Input**

**parameters**: timers

**Schema**

```
{
    "timers": {
        "type": "number"
    }
}
```
## ENGINE.FIRING_TIMER

Evento que ocorre quando  há um timer 'firing' em um heartbeat

**Mensagem**

FIRING TIMER [${t_lock.id}] ON HEARTBEAT

**Input**

**parameters**: timer_id

**Schema**

```
{
    "timer_id": {
        "type": "string",
        "format": "uuid"

    }
}
```
## ENGINE.ORPHANS_FETCHING

Evento que ocorre na busca dos processos orfãos em meio aos heartbeats

**Mensagem**

FETCHING ORPHAN PROCESSES ON HEARTBEAT BATCH [${ORPHAN_BATCH}]

**Input**

**parameters**: sem parâmetros

**Schema**

```
{
    
}
```
## ENGINE.ORPHANS_FETCHED

Evento ocorre quando a busca dos processos orfãos em meio aos heartbeats termina

**Mensagem**

FETCHED [${locked_orphans.length}] ORPHANS ON HEARTBEAT

**Input**

**parameters**: orphans

**Schema**

```
{
    "orphans": {
        "type": number
    }
}
```
## ENGINE.ORPHAN_FETCHING

Evento que ocorre na busca de um determinado processo orfão no heartbeat

**Mensagem**

FETCHING PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT

**Input**

**parameters**: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```
## ENGINE.ORPHANS.ERROR

Evento que ocorre quando há erros ao buscar processos orfãos no heartbeat

**Mensagem**

ERROR FETCHING ORPHANS ON HEARTBEAT

**Input**

**parameters**: error

**Schema**

```
{
    "error": {
        "$ref": "schemas/Error"
    }
}
```
## ENGINE.ORPHAN_FETCHED

Evento que ocorre na busca um determinado processo orfão

**Mensagem**

FETCHED PS FOR ORPHAN [${orphan.id}] ON HEARTBEAT

**Input**

**parameters**: process_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    }
}
```
## ENGINE.ORPHAN.CONTINUE

Evento que retorna a continuação de um determinado processo orfão e seu estado no heartbeat

**Mensagem**

START CONTINUE ORPHAN PID [${process.id}] AND STATE [${process.state.id}] ON HEARTBEAT

**Input**

**parameters**: process_id, process_state_id

**Schema**

```
{
    "process_id": {
        "type": "string",
        "format": "uuid"
    },
    "process_state_id": {
        "type": "string",
        "format": "uuid"
    }
}
```
## ENGINE.HEART.ERROR

Evento que ocorre quando há um erro em um determinado engine

**Mensagem**

HEART FAILURE @ ENGINE_ID [${ENGINE_ID}]

**Input**

**parameters**: engine_id, error

**Schema**

```
{
    "engine_id": {
        "type": "string",
        "format": "error"
    },
    "error": {
        "$ref": "schemas/Error"
    }
}
```
## ENGINE.NEXT

Evento que ocorre no próximo heartbeat

**Mensagem**

NEXT HEARTBEAT SET

**Input**

**parameters**: sem parâmetros

**Schema**

```
{
    
}
```