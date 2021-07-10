---
sidebar_position: 10
---

# Process Activity

Trata-se de um modelo composto por um Activity Data + a lista de atividades vinculadas a esse Manager

## JSON
```json
{
   "type":"object",
   "properties":{
      "$ref":"#/models/Activity Data",
      "activities": {
         "type": "array",
         "items": {
            "$ref": "#/models/Activity"
         }
      }
   }
}
```
