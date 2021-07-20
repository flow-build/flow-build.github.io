
# forca

## Descrição
O exemplo a seguir mostra o processo de um jogo de forca.

+ ** Nó 1 ** - Sempre se inicia o [processo](documentation/processos.md) com um [nó](resources/blueprints.mdx) tipo [Start](resources/nodes/startNode.mdx). 

   Nesse exemplo não há [parâmetros](resources/blueprints.mdx) pré-definidos para esse nó. Ou seja, o objeto **input_schema** é vazio.

 + ** Nó 2 ** - É um [nó](resources/blueprints.mdx) tipo [ScriptTask](resources/nodes/scriptNode.mdx).
   Neste nó será gerado os valores iniciais.

   A palavra para jogo é sorteada entre os valores da lista **words**. As palavras possíveis são  **teste** , **game** e **example**. a variável **word** recebe a palavra escolhida.
   
  O contator de erros **errorCount** é inicializada com 0.
   **isPrivate** recebe o valor **true**  e **state** é inicializado com a string **let word = ' **.
   Onde **'** será a palavra sorteada porém com as letras substituída por **"_"**.

+ ** Nó 3 ** - O [nó](resources/blueprints.mdx) 3 é tipo [SystemTask](resources/nodes/systemTask.mdx) categoria **Set To bag**.
  
   Nesse nó as propriedades no objeto result são incluídas na bag. 
   
   São elas **word**, **state**, **errorCounter** e **isPrivate**.

+ ** Nó 4 ** -  O [nó](resources/blueprints.mdx) 4 é uma [UserTask](resources/nodes/userTaskNode.mdx). 

   + Neste nó ocorre a ação **letterInput**. Onde o usuário escolhe uma letra.
   
   + A tarefa recebe da bag os valores armazenados no nó anterior.

+ ** Nó 5 ** - É um [nó](resources/blueprints.mdx) tipo [ScriptTask](resources/nodes/scriptNode.mdx).

   Nele **userInput**  recebe **result.activies[0]** e **creatorId** recebe **bag.creatorId**.

   Nele roda a função que determinará o conteúdo de **inputType**.

 + ** Nó 6 ** - O [nó](resources/blueprints.mdx) 6 é tipo [SystemTask](resources/nodes/systemTask.mdx) categoria **Set To bag**.

   Nesse nó os conteúdos de **letterInput** e **inputType** são atualizadas na bag.

+ ** Nó 7 ** - O [nó](resources/blueprints.mdx) 7 é tipo [FlowNode](resources/nodes/flowNode.mdx). 

   Neste nó é verificado qual o conteúdo de **inputType** e a partir  disso existem 3 possibilidades de caminhos.
   + Se **inputType** = **unauthorized** ou  **default** (não receber um valor válido) retornará para nó 4. 
   + Se **inputType** = **changePermission** prosseguirá para o nó 8.
   + Se **inputType** = **letterInput** prosseguirá para o nó 10.

+ ** Nó 8 ** -  É um [nó](resources/blueprints.mdx) tipo [ScriptTask](resources/nodes/scriptNode.mdx).

Altera o conteúdo de **isPrivate**.

+ ** Nó 9 ** - O [nó](resources/blueprints.mdx) 9 é tipo [SystemTask](resources/nodes/systemTask.mdx) categoria **Set To bag**.

   Nesse nó o conteúdo de **isPrivate** é atualizado na bag.

+ ** Nó 10** -  É um [nó](resources/blueprints.mdx) tipo [ScriptTask](resources/nodes/scriptNode.mdx).

   + Acessa os dados da bag e roda uma função que aumenta o contator de erro se a letra está errada.

   + Acrescenta a letra no indice correto em caso de acerto.

+ ** Nó 11** -  O [nó](resources/blueprints.mdx) 6 é tipo [SystemTask](resources/nodes/systemTask.mdx) categoria **Set To bag**.

   Atualiza  **errorCounter** e **state** na bag.

+ ** Nó 12** - É um [nó](resources/blueprints.mdx) tipo [ScriptTask](resources/nodes/scriptNode.mdx).

   Verifica o error  **errorCounter** e **state** para definir o conteúdo de **nextStep**.

   **nextStep** pode receber **victory**, **defeat** e **continue**.

+ ** Nó 13** - O [nó](resources/blueprints.mdx) 7 é tipo [FlowNode](resources/nodes/flowNode.mdx). 

   Neste nó é verificado qual o conteúdo de **nextStep** e a partir  disso existem 3 possibilidades de caminhos.
   + Se **nextStep** = **continue** ou  **default** (não receber um valor válido) retornará para nó 4. 
   + Se **nextStep** = **victory** prosseguirá para o nó 14.
   + Se **nextStep** = **defeat** prosseguirá para o nó 15.


+ ** Nó 14** - O [nó](resources/blueprints.mdx) 4 é uma [UserTask](resources/nodes/userTaskNode.mdx). 
   Acessa o valor de **state** da bag e executa a ação **victory**.

+ ** Nó 15** - O [nó](resources/blueprints.mdx) 4 é uma [UserTask](resources/nodes/userTaskNode.mdx). 
   Acessa o valor de **errorCount** da bag e executa a ação **defeat**.       

+ ** Nó 99 ** o [nó](resources/blueprints.mdx) 99 é um [Finish Node](resources/nodes/finishNode.mdx) encerrando o processo. 
## Diagrama

![forca](/img/forca.png)
## Blueprint

```js title="forca"
{
   "name":"forca",
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
            "name":"Generate initial values",
            "next":"3",
            "lane_id":"1",
            "parameters":{
               "input":{
                  
               },
               "script":{
                  "function":[
                     "fn",
                     [
                        "&",
                        "args"
                     ],
                     [
                        "let",
                        [
                           "index",
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
                                       ],
                                       3
                                    ]
                                 ]
                              ]
                           ],
                           "words",
                           [
                              "list",
                              [
                                 "`",
                                 "test"
                              ],
                              [
                                 "`",
                                 "game"
                              ],
                              [
                                 "`",
                                 "example"
                              ]
                           ],
                           "word",
                           [
                              "nth",
                              "words",
                              "index"
                           ],
                           "state",
                           [
                              "js",
                              [
                                 "str",
                                 [
                                    "`",
                                    "let word = '"
                                 ],
                                 "word",
                                 [
                                    "`",
                                    "';word.replace(/./g, '_');"
                                 ]
                              ]
                           ]
                        ],
                        [
                           "set",
                           [
                              "set",
                              {
                                 "errorCount":0,
                                 "isPrivate":true
                              },
                              [
                                 "`",
                                 "state"
                              ],
                              "state"
                           ],
                           [
                              "`",
                              "word"
                           ],
                           "word"
                        ]
                     ]
                  ]
               }
            }
         },
         {
            "id":"3",
            "type":"SystemTask",
            "category":"SetToBag",
            "name":"Set initial values to the bag",
            "next":"4",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "word":{
                     "$ref":"result.word"
                  },
                  "state":{
                     "$ref":"result.state"
                  },
                  " errorCount":{
                     "$ref":"result.errorCount"
                  },
                  "isPrivate":{
                     "$ref":"result.isPrivate"
                  }
               }
            }
         },
         {
            "id":"4",
            "type":"UserTask",
            "name":"User input letter",
            "next":"5",
            "lane_id":"1",
            "parameters":{
               "action":"letterInput",
               "input":{
                  "state":{
                     "$ref":"bag.state"
                  },
                  "errorCount":{
                     "$ref":"bag.errorCount"
                  },
                  "isPrivate":{
                     "$ref":"bag.isPrivate"
                  }
               }
            }
         },
         {
            "id":"5",
            "type":"ScriptTask",
            "name":"test",
            "next":"6",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "userInput":{
                     "$ref":"result.activities[0]"
                  },
                  "creatorId":{
                     "$ref":"bag.creatorId"
                  }
               },
               "script":{
                  "function":[
                     "fn",
                     [
                        "input",
                        "&",
                        "args"
                     ],
                     [
                        "let",
                        [
                           "inputData",
                           [
                              "get",
                              [
                                 "get",
                                 "input",
                                 [
                                    "`",
                                    "userInput"
                                 ]
                              ],
                              [
                                 "`",
                                 "data"
                              ]
                           ],
                           "letter",
                           [
                              "get",
                              "inputData",
                              [
                                 "`",
                                 "letter"
                              ]
                           ],
                           "changePermission",
                           [
                              "if",
                              [
                                 "=",
                                 [
                                    "get",
                                    "input",
                                    [
                                       "`",
                                       "creatorId"
                                    ]
                                 ],
                                 [
                                    "get",
                                    "inputData",
                                    [
                                       "`",
                                       "actorId"
                                    ]
                                 ]
                              ],
                              true,
                              false
                           ]
                        ],
                        [
                           "set",
                           [
                              "set",
                              {
                                 
                              },
                              [
                                 "`",
                                 "inputType"
                              ],
                              [
                                 "if",
                                 [
                                    "null?",
                                    "letter"
                                 ],
                                 [
                                    "if",
                                    "changePermission",
                                    [
                                       "`",
                                       "changePermission"
                                    ],
                                    [
                                       "`",
                                       "unauthorized"
                                    ]
                                 ],
                                 [
                                    "`",
                                    "letterInput"
                                 ]
                              ]
                           ],
                           [
                              "`",
                              "letterInput"
                           ],
                           "letter"
                        ]
                     ]
                  ]
               }
            }
         },
         {
            "id":"6",
            "type":"SystemTask",
            "category":"SetToBag",
            "name":"Set input letter on bag",
            "next":"7",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "letterInput":{
                     "$ref":"result.letterInput"
                  },
                  "inputType":{
                     "$ref":"result.inputType"
                  }
               }
            }
         },
         {
            "id":"7",
            "type":"Flow",
            "name":"Control change permission or letter input",
            "next":{
               "unauthorized":"4",
               "changePermission":"8",
               "letterInput":"10",
               "default":"4"
            },
            "lane_id":"1",
            "parameters":{
               "input":{
                  "inputType":{
                     "$ref":"result.inputType"
                  }
               }
            }
         },
         {
            "id":"8",
            "type":"ScriptTask",
            "name":"Change permission",
            "next":"9",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "isPrivate":{
                     "$ref":"bag.isPrivate"
                  }
               },
               "script":{
                  "function":[
                     "fn",
                     [
                        "input",
                        "&",
                        "args"
                     ],
                     [
                        "set",
                        {
                           
                        },
                        [
                           "`",
                           "isPrivate"
                        ],
                        [
                           "not",
                           [
                              "get",
                              "input",
                              [
                                 "`",
                                 "isPrivate"
                              ]
                           ]
                        ]
                     ]
                  ]
               }
            }
         },
         {
            "id":"9",
            "type":"SystemTask",
            "category":"SetToBag",
            "name":"Change isPrivate",
            "next":"4",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "isPrivate":{
                     "$ref":"result.isPrivate"
                  }
               }
            }
         },
         {
            "id":"10",
            "type":"ScriptTask",
            "name":"Check input letter",
            "next":"11",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "letterInput":{
                     "$ref":"bag.letterInput"
                  },
                  "word":{
                     "$ref":"bag.word"
                  },
                  "state":{
                     "$ref":"bag.state"
                  },
                  "errorCount":{
                     "$ref":"bag.errorCount"
                  }
               },
               "script":{
                  "function":[
                    "fn",
                    ["input","&","args"],
                    ["js",
                    ["str",["`", "let input = "],"input",
                      ["`", "; let letters = input.state.split(''); let index = input.word.indexOf(input.letterInput); \
                    let error = index === -1; while(index !== -1) { \
                      letters[index] = input.letterInput; index = input.word.indexOf(input.letterInput, index + 1); \
                    }; \
                    let result = {errorCount: error ? input.errorCount + 1 : input.errorCount, state: letters.join('')};result;\
                  "
                     ]
                  ]
                ]
                 
            ]
               }
            }
         },
         {
            "id":"11",
            "type":"SystemTask",
            "category":"SetToBag",
            "name":"Update error count and state",
            "next":"12",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "errorCount":{
                     "$ref":"result.errorCount"
                  },
                  "state":{
                     "$ref":"result.state"
                  }
               }
            }
         },
         {
            "id":"12",
            "type":"ScriptTask",
            "name":"Check error count",
            "next":"13",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "state":{
                     "$ref":"bag.state"
                  },
                  "word":{
                     "$ref":"bag.word"
                  },
                  "errorCount":{
                     "$ref":"bag.errorCount"
                  }
               },
               "script":{
                  "function":[
                     "fn",
                     [
                        "input",
                        "&",
                        "args"
                     ],
                     [
                        "set",
                        {
                           
                        },
                        [
                           "`",
                           "nextStep"
                        ],
                        [
                           "if",
                           [
                              "=",
                              [
                                 "get",
                                 "input",
                                 [
                                    "`",
                                    "state"
                                 ]
                              ],
                              [
                                 "get",
                                 "input",
                                 [
                                    "`",
                                    "word"
                                 ]
                              ]
                           ],
                           [
                              "`",
                              "victory"
                           ],
                           [
                              "if",
                              [
                                 "=",
                                 [
                                    "get",
                                    "input",
                                    [
                                       "`",
                                       "errorCount"
                                    ]
                                 ],
                                 6
                              ],
                              [
                                 "`",
                                 "defeat"
                              ],
                              [
                                 "`",
                                 "continue"
                              ]
                           ]
                        ]
                     ]
                  ]
               }
            }
         },
         {
            "id":"13",
            "type":"Flow",
            "name":"Check next step",
            "next":{
               "victory":"14",
               "defeat":"15",
               "continue":"4",
               "default":"4"
            },
            "lane_id":"1",
            "parameters":{
               "input":{
                  "nextStep":{
                     "$ref":"result.nextStep"
                  }
               }
            }
         },
         {
            "id":"14",
            "type":"UserTask",
            "name":"User victory",
            "next":"99",
            "lane_id":"1",
            "parameters":{
               "action":"victory",
               "input":{
                  "state":{
                     "$ref":"bag.state"
                  }
               }
            }
         },
         {
            "id":"15",
            "type":"UserTask",
            "name":"User defeat",
            "next":"99",
            "lane_id":"1",
            "parameters":{
               "action":"defeat",
               "input":{
                  "errorCount":{
                     "$ref":"bag.errorCount"
                  }
               }
            }
         },
         {
            "id":"99",
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