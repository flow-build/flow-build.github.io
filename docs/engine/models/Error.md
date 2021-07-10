---
sidebar_position: 6
---

# Error 

## JSON Schema

```json
{
   "type":"object",
   "properties":{
      "name":{ "type":"string" },
      "message":{ "type":"string" },
      "stack":{
         "type":"string"
      }
   },
   "required": ["name","message"]
}
```