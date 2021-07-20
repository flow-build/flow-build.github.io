# Configuração

Clone o repositório da [API do FlowBuild](https://github.com/flow-build/workflow-api).

## Variáveis de ambiente

Adicione um arquivo de variáveis de ambiente *.env.docker* ao seu folder local e definaa senha para assinatura dos seus tokens:

```
JWT_KEY=sua-nova-senha
```

## Rode o projeto no docker

:::note
Verifique se você tem o docker instalado, caso contrário consulta a seção de [instalação](../documentation/instalacao).
:::

Para executar a aplicação, execute o comando:

```
docker-compose up
```

Certifique-se que as portas 3000 e 5432 estejam liberadas no seu localhost.

## Faça sua primeira consulta

Com a aplicação executando, gere um [token](../resources/api/tokens).

:::note Lembre-se
Quando for gerar um token inclua no header o parâmetro ```x-secret=sua-nova-senha``` para que o token gerado utilize a mesma senha cadastrada no ambiente
:::

Com esse token, faça uma chamada para [listar os workflows](../resources/api/workflows) disponíveis.

É esperado um retorno de uma lista contendo 5 workflows:

```json title=Exemplo
[
    {
        "id": "d373bef0-1152-11ea-9576-9584815cab84",
        "name": "test_workflow",
        "description": "Workflow para rodar testes sobre a aplicação",
        "version": 1,
        "created_at": "2021-06-07T20:35:38.973Z"
    },
    {
        "id": "2210847e-8b61-4af7-9df7-73fd2b0bb24d",
        "name": "test_schemas",
        "description": "Workflow para rodar testes de schemas (input, activity, result)",
        "version": 1,
        "created_at": "2021-06-07T20:35:38.973Z"
    },
    {
        "id": "5fefa640-e264-4481-a437-2adc3ceb6efa",
        "name": "test_subprocess_child",
        "description": "Workflow para rodar testes de subprocess, processo filho",
        "version": 1,
        "created_at": "2021-06-07T20:35:38.973Z"
    },
    {
        "id": "7be513f4-98dc-43e2-8f3a-66e68a61aca8",
        "name": "pizza1",
        "description": "Cookbook somente com systemTasks, mostrando o uso das notacoes de atalho",
        "version": 1,
        "created_at": "2021-06-07T20:35:38.973Z"
    },
    {
        "id": "8fc66458-1137-4c1a-9aef-5dcdca9a19f6",
        "name": "pizza2",
        "description": "Cookbook com userTasks e lanes",
        "version": 1,
        "created_at": "2021-06-07T20:35:38.973Z"
    }
]
```