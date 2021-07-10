# Contribuindo com o flowbuild

Gostaríamos muito da sua contribuição para tornar o flowbuild ainda melhor!

Verifique nossa [documentação](https://flow-build.github.io/#/).

Veja aqui algumas orientações para você:

- [Dúvidas?](#question)
- [Falhas e Bugs](#issue)
- [Como submeter alterações](#submit)
- [Formatação do código](#format)

## <a name="question"></a> Tem uma dúvida?

Se você tiver dúvidas de como contribuir ou como usar o flowbuild, por favor, junte-se à nossa página do [![Gitter](https://badges.gitter.im/flow-build/flow-build.svg)](https://gitter.im/flow-build/flow-build?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge).

## <a name="issue"></a> Encontrou um problema?

Se você encontrou um problema no código ou falha da documentação, envie 
um issue no nosso [repositório](https://github.com/flow-build) ou 
submeta uma Pull Request com a correção.

** Favor checar as recomendações para [submissão](#submit).**

## <a name="submit"></a> Regras para Submissão

### Submetendo uma Issue
Antes de submeter sua issue, por favor, faça uma busca na lista de issues do Github. Talvez sua pergunta já tenha sido respondida.

Se seu problema parece ser um bug que ainda não foi reportado, abra uma nova issue. 
Ajude-nos a maximizar o esforço que podemos dispor consertando issues e adicionando 
novas features ao não reportar issues duplicadas.
Ao fornecer as seguintes informações, você nos ajuda a resolver rapidamente os problemas:

### Submetendo um Pull Request
Antes de submeter seu pull request, considere as diretrizes a seguir:

- Busque no [GitHub](https://github.com/flow-build/workflow/pulls) por um Pull Request aberto ou fechado que tenha a ver com sua submissão. Você não quer trabalho duplicado.
- [Fork](https://help.github.com/articles/fork-a-repo/) esse repositório.
- [Clone](https://help.github.com/articles/cloning-a-repository/) sua cópia.

```shell
git clone https://github.com/YOUR_USERNAME/workflow.git -o flow-build-workflow
cd flow-build-workflow/
```

- Após clonar, configure um novo remote [upstream](https://help.github.com/articles/configuring-a-remote-for-a-fork/) (isso ajuda a manter seu fork atualizado):

```shell
git remote add upstream https://github.com/flow-build/workflow.git
```

- Faça suas mudanças em uma nova git branch:

```shell
git checkout -b my-fix-branch master
```

Veja o [padrão para nomes de branch](https://github.com/flow-build/flow-build/wiki/Branch-Pattern) para nos ajudar com uma melhor identificação.

- Crie seu patch e rode os testes apropriados.
- Siga nosso [Formato de código](#format).
- Execute um Commit de suas mudanças usando uma mensagem de commit descritiva que usa o tempo presente e imperativo: use "alterar"; não use "alterado" nem "alterações".

```shell
git commit -a
```

Nota: a linha de comando commit `-a` é opcional e irá automaticamente usar os comandos "add" e "rm" nos arquivos editados.

- Dê um Push na sua branch para o GitHub:

```shell
git push origin my-fix-branch
```

No Github, envie um pull request para `workflow:master`.
Se sugerirmos mudanças, então:

- Faça as devidas atualizações.
- Rode novamente o flow-build/workflow e tenha certeza que todos os testes ainda passam.
- Realize um commit de suas mudanças para sua branch (exemplo: `my-fix-branch`).
- Realize um push das mudanças para o seu repositório no GitHub (isso vai atualizar seu Pull Request).

Se o PR ficar muito desatualizado, poderemos pedir que você execute um rebase e force um push para atualizar a PR:

```shell
git fetch upstream
git rebase upstream/master
git push origin my-fix-branch -f
```

E é isso! Agradecemos por sua contribuição!

#### Depois que seu pull request for aceito

Depois que seu pull request for aceito, você pode tranquilamente apagar sua branch e executar um pull do repositório principal (upstream):

- Apague a branch remota no Github através ou da interface web ou através do seu shell local com o comando:

    ```shell
    git push origin --delete my-fix-branch
    ```

- Execute um checkout para a branch master:

    ```shell
    git checkout master -f
    ```

- Apague sua branch local:

    ```shell
    git branch -D my-fix-branch
    ```

- Atualize sua branch master com a última versão upstream:

    ```shell
    git pull --ff upstream master
    ```

## <a name="format"></a> Padrões de Formatação

Para assegurar a consistência através do código fonte, chque nossas [convenções de código](https://github.com/flow-build/flow-build/wiki/Branch-Pattern).


[github]: https://github.com/flow-build/flow=build
