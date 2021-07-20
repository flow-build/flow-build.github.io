# Flowbuild

## O que é o Flowbuild?

O Flowbuild é uma biblioteca Open-Source desenvolvida pela FDTE, para 
execução de processos.

## Objetivo

Trazer o conceito de modelagem e design de processos para o 
ambiente de desenvolvimento de software. Além disso, ele cria 
uma camada de orquestração entre o front-end (canais) e o 
back-end (serviços).

## Como o Flowbuild utiliza o BPMN?

Antes de prosseguirmos, uma pergunta deve ser feita:
o Flowbuild executa processos descritos em BPMN?
**Não**, o Flowbuild é inspirado no BPMN, mas com algumas diferenças:

1. Descreve os processos em formato JSON ao invés de XML.

2. Implementa 7 tipos principais de elementos BPMN:
    - Events: Start (1), Finish (2);
    - Gateway: Flow (3);
    - Task: SystemTask (4), UserTask (5), SubProcess (6) ;
    - Lane (7);

## Por que utilizar o Flowbuild?

A ideia por trás do Flowbuild é a simplicidade por trás de sua modelagem.
Uma comunicação fluída e transparente entre os diferentes profissionais 
dos times de negócios - independente da pessoa ser desenvolvedora, analista de negócios,
ou qualquer outra área - é fundamental para que o produto final seja entregue conforme 
as especificações estabelecidas.

Some isso com a agilidade que o Flowbuild dispõe quando é necessário
modificar ou publicar processos e o fato de permitir um controle de
dados nas diversas partes da aplicação, temos uma ferramenta poderosa
que, sem sombra de dúvidas, irá tornar sua experiência mais agrádavel.
