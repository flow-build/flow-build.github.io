---
sidebar_position: 3
---

# Actor Data

A estrutura do actor data pode varia muito em função de implementações feitas na camada de API, a estrutura abaixo mostra um caso comum na implementação padrão do FlowBuild.

## JSON Schema

```json
{
   "type":"object",
   "properties":{
      "actor_id": { "type": "string", "format": "uuid" },
      "claims": {
         "type": "array",
         "items": {
            "type": "string"
         }
      },
      "trace": {
         "type": "object",
         "properties": {
            "spanId": { "type": "string" },
            "traceId": { "type": "string" }
         }
      }
   },
   "required": ["actor_id","claims"]
}
```
## Exemplo
```json
{
   "event_id": "a068f506-2a60-435a-83af-454de4265067",
   "client_ip": "::ffff:10.0.2.107",
   "userAgent": {
      "os": "unknown",
      "browser": "PostmanRuntime",
      "platform": "unknown",
      "isMobile": false
   },
   "trace": {
      "spanId": "a38c98246617c938",
      "traceId": "a4346f4e4b11b5d0400c59bec9b1c28b"
   },
   "actor_id": "09ea5390-b7ca-11ea-9e23-9bc0962ec17c",
   "claims": ["user"]
}
```