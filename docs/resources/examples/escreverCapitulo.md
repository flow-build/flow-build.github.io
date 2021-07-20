# Processo de escrever um capítulo

## Diagrama

![emprestimo-livro](../../../static/img/emprestimo-livro-capitulo.png)

## Descrição
saassadjdashjkdh

## Blueprint

```
{
  "name": "example_escrever_capitulo",
  "description": "",
  "blueprint_spec": {
    "environment": {},
    "require": ["core"],
    "prepare": [],
    "lanes": [
      {
        "id": "free",
        "name": "the_only_lane",
        "rule": ["fn", ["&", "args"], true]
      }
    ],
    "nodes": [
        {
            "id": "0",
            "name": "Iniciar Capitulo",
            "next": "1",
            "type": "start",
            "lane_id": "free",
            "parameters": {
                "input_schema": {
                  "type": "object",
                  "properties": {
                    "tema": { "type": "string" }
                  }
                }
            }
        },
        {
            "id": "1",
            "name": "Pesquisa tema",
            "next": "2",
            "type": "userTask",
            "lane_id": "free",
            "parameters": {
                "action": "DO_RESEARCH",
                "input": {}
            }
        },
        {
            "id": "2",
            "name": "Escreve texto",
            "next": "3",
            "type": "userTask",
            "lane_id": "free",
            "parameters": {
                "action": "WRITE_TEXT",
                "input": {}
            }
        },
        {
          "id": "3",
          "name": "Precisa de gráficos",
          "next": {
            "true": "G1",
            "default": "4"
          },
          "type": "flow",
          "lane_id": "free",
          "parameters": {
            "input": {
              "key": { "$ref": "result.activitites[0].data.graphs" }
            }
          }
        },
        {
            "id": "4",
            "name": "Organizar referências",
            "next": "5",
            "type": "userTask",
            "lane_id": "free",
            "parameters": {
                "action": "ORGANIZE_REFS",
                "input": {}
            }
        },
        {
            "id": "5",
            "name": "Reler conteúdo",
            "next": "6",
            "type": "userTask",
            "lane_id": "free",
            "parameters": {
                "action": "REVIEW",
                "input": {}
            }
        },
        {
          "id": "6",
          "name": "Precisa de revisão",
          "next": {
            "true": "2",
            "default": "7"
          },
          "type": "flow",
          "lane_id": "free",
          "parameters": {
            "input": {
              "key": { "$ref": "result.activitites[0].data.review" }
            }
          }
        },
        {
          "id": "7",
          "name": "Finaliza capitulo",
          "next": "8",
          "type": "userTask",
          "lane_id": "free",
          "parameters": {
            "action": "FINALIZE",
            "input": {}
          }
        },
        {
          "id": "8",
          "name": "Fim do capítulo",
          "type": "Finish",
          "lane_id": "free",
          "next": null
        },
        {
          "id": "G1",
          "name": "Gerar gráficos",
          "next": "G2",
          "type": "userTask",
          "lane_id": "free",
          "parameters": {
            "action": "BUILD_GRAPHS",
            "input": {}
          }
        },
        {
          "id": "G2",
          "name": "Incluir gráficos no texto",
          "next": "4",
          "type": "userTask",
          "lane_id": "free",
          "parameters": {
            "action": "MERGE_GRAPHS",
            "input": {}
          }
        }        
    ]
  }
}
```
