---
sidebar_position: 9
---

# Process

## JSON Schema
```json
{
   "type":"object",
   "properties":{
      "id": { "type":"string", "format":"uuid" },
      "created_at":{ "type":"string ", "format":"date-time" },
      "workflow_id": { "type":"string", "format":"uuid" },
      "current_status": { 
         "type":"string",
         "enum": ["unstarted","running","error","waiting","finished","pending","delegated"] 
      },
      "blueprint_spec": { "$ref": "#/models/workflow/blueprint_spec" },
      "state":{ "$ref": "#/models/process_state" },
   }
}
```