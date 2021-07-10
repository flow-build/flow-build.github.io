---
sidebar_position: 7
---
# External Input

O campo external input é um objeto cujas propriedades variam em função do nó executado.

## JSON
```json
{
  "type": "object"
}
```

## Exemplo

```json
{
  "activities": [
    {
      "id": "06fe61e0-e01d-11eb-9568-0334791767bc", 
      "data": {
        "email": "hijor79926@noobf.com", 
        "token": "3c1ef530-df58-11eb-913c-a14cd9554669"
      }, 
      "status": "started", 
      "actor_data": {
        "trace": {}, 
        "claims": ["anonymous"], 
        "origin": "http://localhost:3000", 
        "actor_id": "09ea5390-b7ca-11ea-9e23-9bc0962ec17c", 
        "event_id": "bf1808f1-ea08-4789-ba0e-66d63f7ef187", 
        "client_ip": "::ffff:10.0.2.107", 
        "userAgent": {
          "os": "Linux 64", 
          "browser": "Chrome", 
          "isMobile": false, 
          "platform": "Linux"
        }, 
        "account_id": "d47305a0-1ed4-11eb-ba42-01e2029c0a36"
      }, 
      "created_at": "2021-07-08T18:48:04.094Z", 
      "activity_manager_id": "f1bf3c00-e01c-11eb-9568-0334791767bc"
    }
  ]
}
```