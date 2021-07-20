# Lane

## LANE.EVAL_ERROR

Evento que ocorre quando hรก erros ao avaliar as regras da raia

**Mensagem**

ERROR WHILE EVALUATING LANE RULE!

**Input**

parameters: rules e error

**Schema**

```
{
    "rules": {
        "type": "array"
    },
    "error": {
        "$ref": "#/Error"
    }
}
```