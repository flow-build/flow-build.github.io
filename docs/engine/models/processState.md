---
sidebar_position: 11
---

# Process State

## JSON
```json
{
   "type":"object",
   "properties":{
      "id": { "type": "string", "format": "uuid" }, 
      "created_at": { "type": "string", "format": "date-time" },
      "engine_id": { "type": "string", "format": "uuid" },
      "process_id": { "type": "string", "format": "uuid" },
      "step_number": { "type": "integer" },
      "node_id": { "type": "string" },
      "next_node_id": { "type": "string" },
      "bag": { "type": "object" },
      "result": { "type": "object" },
      "external_input": { "type": "object" },
      "error": { "type": "string" },
      "actor_data": { "type": "object" },
      "time_elapsed": { "type": "integer" }
   }
}
```
