
# Requests

## REQUESTS.TRACE.START

Evento que ocorre quando mapea as solicitações HTTP realizadas

**Mensagem**

Setting Traceparent

**Input**

parameters: sem parâmetros

**Schema**

```
{
}
```

## REQUESTS.TRACE.OLD

Evento que ocorre ao retornar as solicitações HTTP passadas

**Mensagem**

Old Traceparent

**Input**

parameters: traceparent

**Schema**

```
{
    "traceparent": {
        "type": "string"
    }
}
```

## REQUESTS.TRACE.NEW

Evento que ocorre quando há novas solicitações HTTP

**Mensagem**

New Traceparent

**Input**

parameters: traceparent

**Schema**

```
{
    "traceparent": {
        "type": "string"
    }
}
```