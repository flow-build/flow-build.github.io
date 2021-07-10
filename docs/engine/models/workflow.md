---
sidebar_position: 13
---
# Workflow

## JSON
```json
"workflow":{
   "type":"object",
   "properties":{
      "name":{ "type":"string" },
      "description":{ "type":"string" },
      "blueprint_spec": { "$ref":"#/models/Blueprint Spec" },
      "blueprint_hash": { "type":"string" }
      }
   }
}
```