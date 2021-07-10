---
sidebar_position: 5
---
# Blueprint Spec

## JSON Schema
```json
{
    "type": "object",
    "properties": { 
        "requirements": { 
            "type": "array",
            "items": "string"
        },
        "prepare": {
            "type": "array",
            "items": "string"
        },
        "enviroment": { "type": "object" },
        "parameters": { "type": "object" },
        "lanes": {
            "type": "array",
            "items": {
                "$ref": "#/models/lanes"
            }
        },
        "nodes": {
            "type": "array",
            "items": {
                "$ref": "#/models/nodes"
            }
        }
    }
}
```