---
sidebar_position: 2
---

# Activity Data

## JSON Schema
```json
"activity_data":{
   "type":"object",
   "properties":{
      "id": { "type":"string", "format":"uuid" },
      "created_at": { "type":"string", "format":"date-time" },
      "type": { "type":"string" },
      "process_state_id": { "type":"string", "format":"uuid" },
      "props": { "type":"object" },
      "parameters": { "$ref": "#/modelos/activity_manager/parameters" },
      "activity_status": { "type":"string" },
      "process_id": { "type":"string", "format":"uuid" },
      "step_number": { "type":"integer" },
      "node_id": { "type":"string" },
      "next_node_id": { "type":"string" },
      "bag": { "type":"object" },
      "external_input": { "type":"object" },
      "error": { "type":"string" },
      "process_status": { "type":"string" },
      "workflow_id": { "type":"string", "format":"uuid" },
      "blueprint_spec": { "$ref":"#/models/workflow/blueprint_spec" },
      "current_status": { "type":"string" },
      "workflow_name": { "type":"string" },
      "workflow_description":{ "type":"string" }
   }
}
```