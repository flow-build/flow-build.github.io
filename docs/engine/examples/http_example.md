
# http_example

## Descrição
Este exemplo tem por objetivo demonstrar o uso do tipo de [nó](resources/blueprints.mdx) [SystemTask na categoria HTTP](resources/nodes/systemTask.mdx).

   A regra utilizada para nomear os nós nesse exemplo é a [Sequência númerica](resources/name_nodes/sequenciaNumerica).

+ ** Nó 1 ** - Sempre se inicia o [processo](documentation/processos.md) com um [nó](resources/blueprints.mdx) tipo [Start](resources/nodes/startNode.mdx). 
   
    Nesse exemplo não há [parâmetros](resources/blueprints.mdx) pré-definidos para esse nó. Ou seja, o objeto **input_schema** é vazio.

 + ** Nó 2 ** - É um [nó](resources/blueprints.mdx) tipo [SystemTask](resources/nodes/systemTask.mdx) categoria **Set To bag**. 

   Nesse exemplo **value** é iniciado e recebe **casa**.

   Os dados na bag se tornam diponíveis para os nós a frente. 
+ ** Nó 3 ** - O [nó](resources/blueprints.mdx) 3 é tipo [SystemTask](resources/nodes/systemTask.mdx) categoria **HTTP**.
 
 Ao analisar os paramêtros temos:

    + No **input** o dado a ser enviado é o objeto **value** que se encontra na bag.
    + Em **request** temos que ação que será executada é o verb **POST**
    + É definido o endereço de **url** e os **headers** que serão incluídos na requisição.
   

+ ** Nó 4 ** - o [nó](resources/blueprints.mdx) 4 é um [Finish Node](resources/nodes/finishNode.mdx) encerrando o processo.


## Diagrama
![http_example](/img/http_example.png)
## Blueprint

```js title="http_example"
{
   "name":"http_example",
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
            "type":"SystemTask",
            "category":"SetToBag",
            "name":"Set initial values to the bag",
            "next":"3",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "value":"casa"
               }
            }
         },
         {
            "id":"3",
            "type":"SystemTask",
            "category":"HTTP",
            "name":"Call endpoint",
            "next":"4",
            "lane_id":"1",
            "parameters":{
               "input":{
                  "test":{
                     "$mustache":"value bag {{ bag.value }}"
                  }
               },
               "request":{
                  "verb":"POST",
                  "url":"https://webhook.site/c2f0b516-1855-4426-a484-58173347ad46",
                  "headers":{
                     "ContentType":"application/json"
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