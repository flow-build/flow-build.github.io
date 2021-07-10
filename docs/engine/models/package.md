---
sidebar_position: 8
---

# Packages

## JSON Schema
```json
{
   "type":"object",
   "properties":{
      "id": { "type":"string", "format":"uuid"},
      "created_at": { "type":"string ", "format":"date-time" },
      "name": { "type":"string" },
      "description": { "type":"string" },
      "code": { "type":"string" }
   }
}
```
## Exemplo
```json
{
   "id": "9fe48d20-34b6-11eb-9174-63a776fbfd16",
   "created_at": "2020-12-02 15:54:13.618000",
   "name": "auth",
   "description": "Auth Interface Package",
   "code": ["do",
      ["js",["`","function convert_create_account_data(args) { return args[0];}"]],
      ["js",["`","function convert_login_data(args) { return args[0];}"]],
      ["js",["`","function convert_recover_password_data(args) { return args[0];}"]],
      ["js",["`","function convert_new_password_data(args) { return args[0];}"]],
      null
   ]
}
```