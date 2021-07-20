# Processo de pedir pizza v2

## Diagrama

![pizza-2](./../../../static/img/pizza-2.png)

## Descrição
Nó 1 (Start Node): Iniciar o processo
Nó 2 (User Task): Realizar o pedido da pizza
Nó 3 (System Task): Receber o pedido
Nó 4 (System Task): Salvar os dados do pedido
Nó 5 (User Task): Preparar o pedido da pizza
Nó 6 (System Task): Atualizar o pedido
Nó 7 (User Task): Receber Pizza
Nó 8 (Flow Node): Verificar Pizza
Se a pizza está ok: Nó 10 (System Task): Elogiar
Nó 10A (Finish Node): Finalizar Processo (com elogio)
Se a pizza não está ok: Nó 9 (System Task): Reclamar
Nó 9A: (System Task): Finalizar Processo (com reclamação)

## Blueprint

```js title="pizzaV2.json"
{
  "name": "pizza2",
  "description": "pizza 2 example, system and userTasks",
  "blueprint_spec": {
    "requirements": ["core"],
    "prepare": [],
    "nodes": [
      {
        "id": "1",
        "type": "Start",
        "name": "Start Pizza 2 WF",
        "next": "2",
        "parameters": {
          "input_schema": {}
        },
        "lane_id": "1"
      },
      {
        "id": "2",
        "type": "UserTask",
        "name": "Order Pizza",
        "next": "3",
        "lane_id": "1",
        "parameters": {
          "action": "ORDER_PIZZA",
          "input": {}
        }
      },
      {
        "id": "3",
        "type": "SystemTask",
        "name": "Take the order",
        "category": "HTTP",
        "next": "4",
        "lane_id": "1",
        "parameters": {
          "input": {
            "status": "pending",
            "qty": {
              "$ref": "result.activities[0].data.qty"
            },
            "flavors": {
              "$ref": "result.activities[0].data.flavors"
            },
            "comments": {
              "$ref": "result.activities[0].data.comments"
            }
          },
          "request": {
            "url": "https://5faabe16b5c645001602b152.mockapi.io/order",
            "verb": "POST",
            "headers": {
              "ContentType": "application/json"
            }
          }
        }
      },
      {
        "id": "4",
        "type": "SystemTask",
        "category": "SetToBag",
        "name": "Save Order",
        "next": "5",
        "lane_id": "1",
        "parameters": {
          "input": {
            "order": {
              "$ref": "result.data"
            }
          }
        }
      },
      {
        "id": "5",
        "type": "UserTask",
        "name": "Prepare Pizza",
        "next": "6",
        "lane_id": "2",
        "parameters": {
          "input": {
            "order": {
              "$ref": "bag.order"
            }
          },
          "action": "PREPARE_PIZZA"
        }
      },
      {
        "id": "6",
        "type": "SystemTask",
        "category": "HTTP",
        "name": "Update Order",
        "next": "7",
        "lane_id": "2",
        "parameters": {
          "input": {
            "status": "done"
          },
          "request": {
            "url": {
              "$mustache": "https://5faabe16b5c645001602b152.mockapi.io/order/{{bag.order.id}}"
            },
            "verb": "PUT",
            "headers": {
              "ContentType": "application/json"
            }
          }
        }
      },
      {
        "id": "7",
        "type": "UserTask",
        "name": "Receive Pizza",
        "next": "8",
        "lane_id": "3",
        "parameters": {
          "action": "RECEIVE_PIZZA",
          "input": {}
        }
      },
      {
        "id": "8",
        "type": "Flow",
        "name": "Pizza ok?",
        "next": {
          "yes": "10",
          "no": "9",
          "default": "10"
        },
        "lane_id": "3",
        "parameters": {
          "input": {
            "ok": {
              "$ref": "result.is_order_ok"
            }
          }
        }
      },
      {
        "id": "9",
        "type": "SystemTask",
        "category": "HTTP",
        "name": "Complaim",
        "next": "9A",
        "lane_id": "3",
        "parameters": {
          "input": {
            "status": "complaim"
          },
          "request": {
            "url": {
              "$mustache": "https://5faabe16b5c645001602b152.mockapi.io/order/{{bag.order.id}}"
            },
            "verb": "PUT",
            "headers": {
              "ContentType": "application/json"
            }
          }
        }
      },
      {
        "id": "10",
        "type": "SystemTask",
        "category": "HTTP",
        "name": "Praise",
        "next": "10A",
        "lane_id": "3",
        "parameters": {
          "input": {
            "status": "praise"
          },
          "request": {
            "url": {
              "$mustache": "https://5faabe16b5c645001602b152.mockapi.io/order/{{bag.order.id}}"
            },
            "verb": "PUT",
            "headers": {
              "ContentType": "application/json"
            }
          }
        }
      },
      {
        "id": "9A",
        "type": "Finish",
        "name": "Finish Complaim",
        "next": null,
        "lane_id": "3"
      },
      {
        "id": "10A",
        "type": "Finish",
        "name": "Finish Praise",
        "next": null,
        "lane_id": "3"
      }
    ],
    "lanes": [
      {
        "id": "1",
        "name": "free lane",
        "rule": ["fn", ["&", "args"], true]
      },
      {
        "id": "2",
        "name": "restaurant lane",
        "rule": [
          "fn",
          ["actor_data", "bag"],
          [
            "eval",
            [
              "apply",
              "or",
              [
                "map",
                ["fn", ["v"], ["=", "v", ["`", "restaurant"]]],
                ["get", "actor_data", ["`", "claims"]]
              ]
            ]
          ]
        ]
      },
      {
        "id": "3",
        "name": "user lane",
        "rule": [
          "fn",
          ["actor_data", "bag"],
          [
            "eval",
            [
              "apply",
              "or",
              [
                "map",
                ["fn", ["v"], ["=", "v", ["`", "user"]]],
                ["get", "actor_data", ["`", "claims"]]
              ]
            ]
          ]
        ]
      }
    ],
    "environment": {}
  }
}
```
