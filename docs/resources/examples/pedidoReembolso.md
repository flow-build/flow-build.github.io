# Processo de pedido de reembolso

![pedido-reembolso](../../../static/img/pedido-reembolso.png)

```
{
  "name": "example_pedido_reembolso",
  "description": "",
  "blueprint_spec": {
    "environment": {},
    "require": ["core"],
    "prepare": [],
    "lanes": [
      {
        "id": "usuario",
        "name": "qualquer usuario",
        "rule": ["fn", ["&", "args"], true]
      },
      {
        "id": "gestor",
        "name": "somente para gestores",
        "rule": ["fn", ["&", "args"], true]
      },
      {
        "id": "financeiro",
        "name": "somente depto financeiro",
        "rule": ["fn", ["&", "args"], true]
      }
    ],
    "nodes": [
        {
            "id": "0",
            "name": "Iniciar Pedido",
            "next": "1",
            "type": "start",
            "lane_id": "usuario",
            "parameters": {
              "input_schema": {}
            }
        },
        {
            "id": "1",
            "name": "Enviar pedido",
            "next": "2",
            "type": "userTask",
            "lane_id": "usuario",
            "parameters": {
                "action": "DO_REQUEST",
                "input": {}
            }
        },
        {
            "id": "2",
            "name": "Cadastrar pedido",
            "next": "3",
            "type": "systemTask",
            "category": "http",
            "lane_id": "free",
            "parameters": {
              "request": {
                "url": "url",
                "verb": "POST",
                "headers": {
                  "ContentType": "application/json"
                }
              },
              "input": {
                "status": "pending",
                "amount": { "$ref": "result.activities[0].data.amount" },
                "requester": { "$ref": "result.activities[0].data.requester"},
                "comments": { "$ref": "result.activities[0].data.comments" }
              }
            }
        },
        {
            "id": "3",
            "name": "Aprovar pedido",
            "next": "4",
            "type": "userTask",
            "lane_id": "gestor",
            "parameters": {
                "action": "APPROVE_REQUEST",
                "input": {
                  "status": { "$ref": "result.data.status" },
                  "amount": { "$ref": "result.data.amount" },
                  "requester": { "$ref": "result.data.requester"},
                  "comments": { "$ref": "result.data.comments" }
                }
            }
        },
        {
          "id": "4",
          "name": "Pedido aprovado?",
          "next": {
            "APPROVED": "5",
            "DECLINED": "E1",
            "default": "3"
          },
          "type": "flow",
          "lane_id": "gestor",
          "parameters": {
            "input": {
              "key": { "$ref": "result.activitites[0].data.status" }
            }
          }
        },
        {
            "id": "5",
            "name": "Confirmar pedido",
            "next": "6",
            "type": "systemTask",
            "category": "http",
            "lane_id": "gestor",
            "parameters": {
              "request": {
                "url": "url",
                "verb": "PUT",
                "headers": {
                  "ContentType": "application/json"
                }
              },
              "input": {
                "status": "APPROVED"
              }
            }
        },
        {
            "id": "6",
            "name": "Revisar pedido",
            "next": "7",
            "type": "userTask",
            "lane_id": "financeiro",
            "parameters": {
                "action": "REVIEW_REQUEST",
                "input": {
                  "status": { "$ref": "result.data.status" },
                  "amount": { "$ref": "result.data.amount" },
                  "requester": { "$ref": "result.data.requester"},
                  "comments": { "$ref": "result.data.comments" }
                }
            }
        },
        {
          "id": "7",
          "name": "Pedido aceito?",
          "next": {
            "REVIEWED": "8",
            "DECLINED": "E1",
            "default": "6"
          },
          "type": "flow",
          "lane_id": "financeiro",
          "parameters": {
            "input": {
              "key": { "$ref": "result.activitites[0].data.status" }
            }
          }
        },
        {
            "id": "8",
            "name": "Realizar depósito",
            "next": "9",
            "type": "userTask",
            "lane_id": "financeiro",
            "parameters": {
                "action": "DO_TRANSFER",
                "input": {}
            }
        },
        {
            "id": "9",
            "name": "Realizar depósito",
            "next": "10",
            "type": "systemTask",
            "category": "http",
            "lane_id": "financeiro",
            "parameters": {
              "request": {
                "url": "url",
                "verb": "PUT",
                "headers": {
                  "ContentType": "application/json"
                }
              },
              "input": {
                "status": "SETTLED"
              }
            }
        },
        {
          "id": "10",
          "name": "Avisar requisitante",
          "next": "11",
          "type": "userTask",
          "lane_id": "free",
          "parameters": {
            "action": "NOTIFY_USER",
            "input": {
              "status": { "$ref": "result.data.status" }
            }
          }
        },
        {
          "id": "11",
          "name": "Fim do pedido",
          "type": "Finish",
          "lane_id": "free",
          "next": null
        },
        {
            "id": "E1",
            "name": "Atualizar pedido",
            "next": "E2",
            "type": "systemTask",
            "category": "http",
            "lane_id": "free",
            "parameters": {
              "request": {
                "url": "url",
                "verb": "PUT",
                "headers": {
                  "ContentType": "application/json"
                }
              },
              "input": {
                "status": "DECLINED"
              }
            }
        },
        {
          "id": "E2",
          "name": "Avisar requisitante",
          "next": "E3",
          "type": "userTask",
          "lane_id": "free",
          "parameters": {
            "action": "NOTIFY_USER",
            "input": {
              "status": { "$ref": "result.data.status" }
            }
          }
        },
        {
          "id": "E3",
          "name": "Fim do pedido - recusado",
          "type": "Finish",
          "lane_id": "free",
          "next": null
        }       
    ]
  }
}
```
