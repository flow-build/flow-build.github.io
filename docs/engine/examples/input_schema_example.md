
# input_schema_example
## Descrição

Este exemplo tem por objetivo mostrar um processo com um [StartNode](resources/nodes/startNode.mdx) que possui um objeto **input_schema** não vazio.

Esse caso se aplica quando o processo já precisa iniciar com dados prévios.


 + ** Nó 1 ** - Sempre se inicia o [processo](documentation/processos.md) com um [nó](resources/blueprints.mdx) tipo [Start](resources/nodes/startNode.mdx). 
   
   Nesse exemplo o objeto **input_schema** possui diversas propriedades e suas definições.

   Como por exemplo a propriedade **id** que é definida como uma **string** no formarto **uuid**.
   
   Já a propriedade **animal** é uma **string** mas só possui 2 possibilidades **cachorro** ou **gato**. 
 

+ ** Nó 2 ** - É um [nó](resources/blueprints.mdx) tipo [ScriptTask](resources/nodes/scriptNode.mdx). 
   Esse nó está criando os valores para a bag. 

   Em [parameters](resources/blueprints.mdx) no item **function** as variáveis **example** e **value** são criadas e recebem respectivamente os valores **bag_example** e **bag_value**.

+ ** Nó 3 ** - O [nó](resources/blueprints.mdx) 3 é tipo [SystemTask](resources/nodes/systemTask.mdx) categoria **Set To bag**.
   Nesse nó os objetos **example** e **valueResult** são incluídos na bag.

   Os dados na bag se tornam diponíveis para os nós a frente. 

+ ** Nó 4 ** - o [nó](resources/blueprints.mdx) 4 é um [Finish Node](resources/nodes/finishNode.mdx) encerrando o processo.

## Diagrama

![input_schema_example](/img/input_schemma_example.png)
## Blueprint

```js title="input_schema_example"
{
   "name":"input_schema_example",
   "description":"",
   "blueprint_spec":{
      "requirements":[
         "core"
      ],
      "prepare":[
         
      ],
      "nodes":[
         {
            "id":"1",
            "type":"Start",
            "name":"Start node",
            "next":"2",
            "lane_id":"1",
            "parameters":{
               "input_schema":{
                  "type":"object",
                  "properties":{
                     "id":{
                        "type":"string",
                        "format":"uuid"
                     },
                     "dataInicio":{
                        "type":"string",
                        "format":"date-time"
                     },
                     "dataFim":{
                        "type":"string",
                        "format":"date"
                     },
                     "nome":{
                        "type":"string",
                        " minLength":3
                     },
                     "email":{
                        "type":"string",
                        "format":"email"
                     },
                     "animal":{
                        "type":"string",
                        "enum":[
                           "cachorro",
                           "gato"
                        ]
                     },
                     "idade":{
                        "type":"number"
                     },
                     "lista":{
                        "type":"array",
                        "items":{
                           "type":"string"
                        }
                     },
                     "endereco":{
                        "type":"object",
                        "properties":{
                           "logradouro":{
                              "type":"string"
                           },
                           "numero":{
                              "type":"number"
                           }
                        }
                     },
                     "contatos":{
                        "type":"array",
                        "items":{
                           "type":"object",
                           "properties":{
                              "nome":{
                                 "type":"string"
                              },
                              "telefone":{
                                 "type":"string",
                                 "pattern":"'(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})'"
                              }
                           }
                        }
                     }
                  },
                  "required":[
                     "dataInicio"
                  ]
               }
            }
         },
         {
            "id":"2",
            "type":"ScriptTask",
            "name":"Create values for bag",
            "next":"3",
            "lane_id":"1",
            "parameters":{
               "input":{
                  
               },
               "script":{
                  "package":"",
                  "function":[
                     "fn",
                     [
                        "&",
                        "args"
                     ],
                     {
                        "example":"bag_example",
                        "value":"bag_value"
                     }
                  ]
               }
            }
         },
         {
            "id":"3",
            "type":"SystemTask",
            "category":"SetToBag",
            "name":"Set values on bag",
            "next":"4",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "example":{
                     "$ref":"result.example"
                  },
                  "valueResult":{
                     "$ref":"result.value"
                  }
               }
            }
         },
         {
            "id":"4",
            "type":"Finish",
            "name":"Finish node",
            "next":null,
            "lane_id":"1"
         }
      ],
      "lanes":[
         {
            "id":"1",
            "name":"default",
            "rule":[
               "fn",
               [
                  "&",
                  "args"
               ],
               true
            ]
         }
      ],
      "environment":{
         
      }
   }
}


```