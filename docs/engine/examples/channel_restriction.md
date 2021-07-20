
# channel_restriction

## Descrição
Este exemplo mostra a situação de restrição de canal.

+ ** Nó 1 ** - Sempre se inicia o [processo](documentation/processos.md) com um [nó](resources/blueprints.mdx) tipo [Start](resources/nodes/startNode.mdx). 

  Nesse exemplo não há [parâmetros](resources/blueprints.mdx) pré-definidos para esse nó. Ou seja, o objeto **input_schema** é vazio.

+ ** Nó 2** - É um [nó](resources/blueprints.mdx) tipo [UserTask](resources/nodes/userTaskNode.mdx). 

   Nos seus [parâmetros](resources/blueprints.mdx) podemos notar o seguinte:

   + O [nó](resources/blueprints.mdx)eExecuta a ação **userAction**
   + Denifine os canais **1** e **2** para serem restritos.

+ ** Nó 3** - o [nó](resources/blueprints.mdx) 4 é um [Finish Node](resources/nodes/finishNode.mdx) encerrando o processo.
## Diagrama
![channel_restriction](/img/channel_restriction.png)
## Blueprint

```js title="channel_restriction"
{
   "name":"channel_restriction",
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
            "type":"UserTask",
            "name":"User task node",
            "next":"99",
            "lane_id":"1",
            "parameters":{
               "action":"userAction",
               "channels":[
                  "1",
                  "2"
               ],
               "input":{
                  
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