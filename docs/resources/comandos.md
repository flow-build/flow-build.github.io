# Comandos

O caracter *$* é reservado no FlowBuild e indica que será utilizado um comando a ser enviado a um interpretador.

Os seguintes interpretadores estão disponíveis para uso.

## $ref

Trata-se de um interpretador de referências, busca o valor entre os namespaces *result*, *bag*, *environment*, *actor_data*, *parameters*.

Você pode utilizar dot notation para acessar atributos em objetos e square-bracket notation para acessar itens em listas.

``` json
{
    "algo": { "$ref": "bag.algumCampo" },
    "algoMais": { "$ref": "result.lista[0].item" }
}
```

## $mustache

Permite executar a implementação de templates [mustache](https://mustache.github.io/).

O uso mais comum do $mustache é para composição de url para nós http, neste caso verifique a documentação da oficial da linguagem para evitar problemas com *HTML-escaping*.

``` json
{
    "url": { "$mustache": "http://mock.io/user/{{bag.userId}}" }
}
```

Assim como no caso do $ref, o $mustache permite acessar os namespaces do estado do processo.

:::note ATENÇÃO
Diferente do $ref, o $mustache utiliza a dot notation para acessar itens em listas, ou seja, para acessar um item a lista, utilize ```lista.0.item```.
:::

## $handlebars

Equivalente aa notação $mustache, trata-se de uma template-syntax que usa a linguagem [handlebars](https://handlebarsjs.com/). 

O handlebars permite utilização de funções não disponíveis no $mustache, fora isso seus usos são bastante similares.

## $js

A notação $js permite executar expressões javascript. De certa forma o uso do $js é a aplicação de scriptNodes dentro de outros nós. 

Recomenda-se o uso de expressões [arrow](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) em lugar de expressões de função.

As funções executadas com o $js devem ser sempre em *plain javascript*.

``` json title="Exemplo"
{
    "data": { "$js": "({bag},{result}) => bag.users.find(user => user.id === result.id)" }
}
```

Recomenda-se muita parcimônia no uso do $js, o uso de scripts em processos deve ser evitado em situação de produção.