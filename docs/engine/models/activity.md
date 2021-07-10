---
sidebar_position: 2
---

# Activity

## JSON Schema
```json
{
   "type":"object",
   "properties": {
      "id": { "type": "string", "format": "uuid" },
      "created_at": { "type": "string", "format": "date-time" },
      "activity_manager_id": { "type": "string", "format": "uuid" },
      "actor_data": { "$ref": "#/models/Actor Data" },
      "data": { "type": "object" },
      "status": { 
         "type": "string",
         "enum": ["started","completed","error","interrupted"]
      }
   }
}
```