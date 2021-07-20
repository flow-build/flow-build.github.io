
# flow_example

## Descrição
Este exemplo visa mostrar como utilizar um [FlowNode](resources/nodes/flowNode.mdx).


 + ** Nó 1 ** - Sempre se inicia o [processo](documentation/processos.md) com um [nó](resources/blueprints.mdx) tipo [Start](resources/nodes/startNode.mdx). 
   
  Nesse exemplo não há [parâmetros](resources/blueprints.mdx) pré-definidos para esse nó. Ou seja, o objeto **input_schema** é vazio.

 + ** Nó 2 ** - É um [nó](resources/blueprints.mdx) tipo [ScriptTask](resources/nodes/scriptNode.mdx). 
   Esse nó está criando os valores para a bag. 

   Em [parameters](resources/blueprints.mdx) o método na **function**  cria as variáveis **name** e **extraData** e elas recebem respectivamente os valores **ValueExample** e **98**. 
   Além disso é criado **value** que recebe um valor randômico inteiro.

 + ** Nó 3 ** - O [nó](resources/blueprints.mdx) 3 é tipo [FlowNode](resources/nodes/flowNode.mdx). 
   
   Se o atributo do objeto **next** for **"1"** o processo retornará no **Nó 2**. 
   
   Caso não seja identificado um atributo válido, por definição o processo seguirá para o **Nó 4**.

 + ** Nó 4 ** - o [nó](resources/blueprints.mdx) 4 é um [Finish Node](resources/nodes/finishNode.mdx) encerrando o processo.
## Diagrama

![flow_example](/img/flow_example.png)
## Blueprint

```js title="flow_example"
{
   "name":"flow_example",
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
            "parameters":{
               "input_schema":{
                  
               }
            },
            "next":"2",
            "lane_id":"1"
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
                     [
                        "set",
                        {
                           "name":"valueExample",
                           "extraData":98
                        },
                        [
                           "`",
                           "value"
                        ],
                        [
                           "js",
                           [
                              ".",
                              "Math",
                              [
                                 "`",
                                 "floor"
                              ],
                              [
                                 "*",
                                 [
                                    ".",
                                    "Math",
                                    [
                                       "`",
                                       "random"
                                    ]
                                 ],
                                 [
                                    ".",
                                    "Math",
                                    [
                                       "`",
                                       "floor"
                                    ],3
                                 ]
                              ]
                           ]
                        ]
                     ]
                  ]
               }
            }
         },
         {
            "id":"3",
            "type":"Flow",
            "name":"Set values on bag",
            "next":{
               "1":"2",
               "default":"4"
            },
            "lane_ids":{
               "input":{
                  "decision":{
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