
# Activity_Manager

## ACTIVITY_MANAGER_TIMER.CLEARED

Evento que ocorre quando os TIMERS do ACTIVITY_MANAGER são limpos.

**Mensagem**

CLEARED TIMERS FOR AMID [${this.id}]`,{ activity_manager_id: this.id })

**Input**

**parameters**: activity_manager_id

**Schema**

```
"activity_manager_id":{ "type":"string", "format":"uuid" },
```

## ACTIVITY_MANAGER_TIMER.CREATING_NEW

Evento que ocorre quando há a criação de um novo ACTIVITY_MANAGER_TIMER

**Mensagem**

CREATING NEW TIMER ON AMID [${this.id}]

**Input**

**parameters**: activity_manager_id

**Schema**

```
"activity_manager_id":{ "type":"string", "format":"uuid" },
```

## ACTIVITY_MANAGER.NEW_TIMER

Evento que ocorre quando um novo ACTIVITY_MANAGER.NEW_TIMER é criado

**Mensagem**

NEW TIMER ON AMID [${this.id}] TIMER [${timer.id}]

**Input**

**parameters**: activity_manager_id, timer_id

**Schema**

```
"activity_manager_id":{ "type":"string", "format":"uuid" },
"timer_id":{ "type":"string", "format":"uuid" }
```

## ACTIVITY_MANAGER.TIMEOUT_EXPIRED

Evento que ocorre quando há o timeout da ACTIVITY_MANAGER.TIMEOUT_EXPIRED

**Mensagem**

TIMEOUT ON AMID [${this.id}] TIMER [${timer.id}]

**Input**

**parameters**: activity_manager_id, timer_id

**Schema**

```
"activity_manager_id":{ "type":"string", "format":"uuid" },
"timer_id":{ "type":"string", "format":"uuid" }
```

## ACTIVITY_MANAGER.COMPLETED

Evento que ocorre quando o ACTIVITY_MANAGER.COMPLETED é terminado

**Mensagem**

COMPLETED AMID [${this.id}]

**Input**

**parameters**: "activity_manager"

**Schema**

```
"activity_manager": {"$ref": "schemas/activity_manager/"}
```
