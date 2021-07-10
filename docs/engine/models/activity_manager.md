---
sidebar_position: 2
---
# Activity Manager

## JSON Schema
```json
{
   "type":"object",
   "properties":{
      "id":{ "type":"string", "format":"uuid" },
      "created_at":{ "type":"string", "format":"date-time" },
      "type":{ 
         "type":"string", 
         "enum": ["commit","notify"] 
      },
      "process_state_id":{ "type":"string", "format":"uuid" },
      "props":{
         "type":"object",
         "properties": {
            "action": { "type": "string" },
            "result": { "type": "object" }
         }
      },
      "parameters":{
         "type":"object",
         "properties": {
            "timeout": { "type": "integer" },
            "timeout_id": { "type": "string", "format": "uuid" },
            "next_step_number": { "type": "integer" },
            "encrypted_data": {
               "type": "array",
               "items": { "type": "string" }
            }
            "activity_schema": {
               "type": "object"
            }
         }
      },
      "status":{ 
         "type":"string",
         "enum": ["started","completed","interrupted"]
      }
   }
}
```
:::info Nota
As propriedades do campo props.result dependem dos parameters do nó que levou a criação do activity manager
:::

:::note Nota
A propriedade activity_schema é um objeto JSON Schema
:::

## Exemplo 

``` json
{
   "id": "6f4e15b8-490c-4580-a18e-39b81af5bf70",
   "created_at": "2020-07-08 20:23:08.341000",
   "process_state_id": "209e54b3-20fe-4880-b7c3-7feea5a562de",
   "status": "completed",
   "type": "commit",
   "props": {
      "action": "LOGIN_FORM", 
      "result": {},
   "parameters": {
      "encrypted_data": ["user.password"], 
      "activity_schema": {
         "type": "object", 
         "required": ["user"], 
         "properties": {
            "user": { 
               "type": "object", 
               "required": ["password", "email"], 
               "properties": {
                  "password": {"type": "object"}, 
                  "email": { "type": "string", "format": "email" }
               }, 
            "additionalProperties": false
            }
         }, 
      "additionalProperties": false
      }, 
      "next_step_number": 5
   }
}
```

:::tip Dica
Quando um campo é encriptado, seu schema deve ser sempre tipo object.
:::