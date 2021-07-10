module.exports = {
  documentationSidebar: [
    {
      type: "category",
      label: "🏁 Começando",
      items: [
        "documentation/instalacao",
        {
          type: "doc",
          label: "Gerando tokens",
          id: "documentation/tokenizacao",
        },
      ],
    },
    {
      type: "category",
      label: "📓 Conceitos",
      items: [
        {
          type: "doc",
          label: "Processos",
          id: "documentation/processos",
        },
        "documentation/bpmn"   
    ],
    },
    {
      type: "category",
      label: '👩🏼‍💻 Development',
      items: [
        {
          type: 'doc',
          label: 'Ciclo de um Processo',
          id: "documentation/cicloDeVidaDeProcesso",
        },
        {
          type: 'doc',
          label: 'Ciclo de uma Atividade',
          id: "documentation/cicloDeVidaDeAtividade",
        },
        {
          type: 'doc',
          label: 'Listeners',
          id: "documentation/listenersApi",
        },
        "documentation/logging",
        "documentation/testes",
      ]
    },
    {
      type: "doc",
      label: "🙋 FAQ",
      id: "documentation/faq",
    },
    {
      type: 'doc',
      label: '🛰️ Contribuindo',
      id: "documentation/contribuindo",
    }
  ],
  resourcesSidebar: [
    'resources/main',
    {
      type: 'category',
      label: 'API',
      items: [
        'resources/api/tokens',
        'resources/api/workflows',
        'resources/api/processes',
        'resources/api/activityManagers',
        'resources/api/packages',
      ]
    },
    {
      type: 'category',
      label: 'Entendendo blueprints',
      items: [
        {
          type: 'doc',
          label: 'Introdução & Estrutura',
          id: "resources/blueprints",
        },
        {
          type: 'category',
          label: 'Tipos de Nós',
          items: [
            'resources/nodes/startNode',
            'resources/nodes/finishNode',
            'resources/nodes/flowNode',
            {
              type: 'doc',
              label: 'UserTask',
              id: 'resources/nodes/userTaskNode',
            },
            {
              type: 'doc',
              label: 'SystemTask',
              id: 'resources/nodes/systemTaskNode',
            },
            'resources/nodes/scriptNode',
            'resources/nodes/subprocessNode',
          ]
        },
        {
          type: 'doc',
          label: 'Comandos $',
          id: "resources/comandos",
        },
        {
          type: 'doc',
          label: 'Recomendações',
          id: 'resources/recomendations'
        },
        "resources/jsonSchema",
        {
          type: 'category',
          label: 'Exemplos',
          items: [
            "resources/examples",
            "resources/examples/matricula"
          ]
        },
        "resources/references",
      ]
    },
    {
      type: 'category',
      label: 'Models',
      items: [
        'resources/models/blueprint_spec',
        'resources/models/lanes'
      ]
    }
  ],
  engineSidebar: [{type: 'autogenerated', dirName: 'engine'}],
  tutorialSidebar: {
    Tutorial: [
      "tutorial/configuracao",
      "tutorial/escritaPublicacaoBlueprint",
      "tutorial/execucaoProcesso",
      "tutorial/fundamentos",
      "tutorial/pizza",
      "tutorial/visualizacaoProcesso",
    ],
    Intro: ["intro"],
  },
};
