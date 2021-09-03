(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[7845],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return m}});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),c=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=t,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,s(s({ref:n},l),{},{components:r})):a.createElement(f,s({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7042:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=r(2122),t=r(9756),o=(r(7294),r(3905)),s=["components"],i={},p={unversionedId:"resources/examples/pizzaV1",id:"resources/examples/pizzaV1",isDocsHomePage:!1,title:"Pizza v1",description:"Diagrama",source:"@site/docs/resources/examples/pizzaV1.md",sourceDirName:"resources/examples",slug:"/resources/examples/pizzaV1",permalink:"/docs/resources/examples/pizzaV1",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/resources/examples/pizzaV1.md",version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"Comandos",permalink:"/docs/resources/comandos"},next:{title:"Pizza v2",permalink:"/docs/resources/examples/pizzaV2"}},c=[{value:"Diagrama",id:"diagrama",children:[]},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",children:[]},{value:"Blueprint",id:"blueprint",children:[]}],l={toc:c};function d(e){var n=e.components,i=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"diagrama"},"Diagrama"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pizza-1",src:r(4096).Z})),(0,o.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,o.kt)("p",null,"Esse exemplo mostra a primeira vers\xe3o de um workflow para realizar um pedido de pizza."),(0,o.kt)("p",null,"O comportamento esperado \xe9 que o processo, uma vez iniciado, progrida at\xe9 o seu t\xe9rmino sem a necessidade de intera\xe7\xe3o por parte de um usu\xe1rio."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\xf3 1: O processo sempre \xe9 iniciado num ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/blueprints"},"n\xf3")," do tipo ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/startNode"},"Start"),".\nNesse caso, n\xe3o h\xe1 par\xe2metros pr\xe9-definidos para esse n\xf3.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\xf3 2: N\xf3 do tipo ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode"},"System Task")," e da categoria ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode#settobag"},"Set To Bag"),". Esse n\xf3\nir\xe1 guardar as informa\xe7\xf5es do pedido da pizza para que possam\nser utilizados em outros n\xf3s posteriormente. Os ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/blueprints"},"par\xe2metros"),'\ns\xe3o as vari\xe1veis "client", que ir\xe1 receber o valor contido na\n"bag.name", o "client1"; a vari\xe1vel "pizzas", que ser\xe1 um objeto com\nquantidade ("qty"), sabores ("flavors") e sem azeitona ("olives": false)')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\xf3 3: N\xf3 do tipo ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode"},"System Task")," e da categoria ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode#settobag"},"Set To Bag"),'. Ir\xe1 guardar na bag o n\xfamero do pedido ("orderNo"). Nesse caso \xe9 interessante ressaltar\nque \xe9 poss\xedvel utilizar fun\xe7\xf5es do Javascript dentro do n\xf3.')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\xf3 4: N\xf3 do tipo ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode"},"System Task")," e da categoria ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode#timer"},"Timer"),'. Esse n\xf3\nrepresenta o tempo de espera para o preparo da pizza, conforme\nvisto na vari\xe1vel "timeout", dentro dos par\xe2metros.')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\xf3 5: N\xf3 do tipo ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode"},"System Task")," e da categoria ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode#settobag"},"Set To Bag"),'. Esse n\xf3\nrepresenta a entrega da pizza, e ir\xe1 checar a quantidade de pizzas\ndeclaradas na vari\xe1vel "bag.pizza.qty", que ser\xe1 colocada em um\ncoment\xe1rio ("comment"), dentro do par\xe2metro do n\xf3.')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\xf3 6: N\xf3 do tipo ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode"},"System Task")," e da categoria ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/systemTaskNode#settobag"},"Set To Bag"),".\nEsse n\xf3 representa o ato de receber a pizza e tem como\n",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/blueprints"},"par\xe2metro"),' a vari\xe1vel "confirm" que recebe o n\xfamero do pedido\ncomo valor "bag.orderNo".')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\xf3 7: N\xf3 final do tipo ",(0,o.kt)("a",{parentName:"li",href:"/docs/resources/nodes/finishNode"},"Finish Node"),'. Nesse n\xf3, a chave "next"\nsempre receber\xe1 um valor "null".')),(0,o.kt)("h2",{id:"blueprint"},"Blueprint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="pizzaV1.json"',title:'"pizzaV1.json"'},'{\n  "name": "pizza1",\n  "description": "pizza1 blueprint example, only systemTasks",\n  "blueprint_spec": {\n    "requirements": ["core"],\n    "prepare": [],\n    "nodes": [\n      {\n        "id": "1",\n        "type": "Start",\n        "name": "Start Pizza 1 WF",\n        "next": "2",\n        "parameters": {\n          "input_schema": {}\n        },\n        "lane_id": "1"\n      },\n      {\n        "id": "2",\n        "type": "SystemTask",\n        "name": "Order Pizza",\n        "category": "setToBag",\n        "next": "3",\n        "lane_id": "1",\n        "parameters": {\n          "input": {\n            "client": { "$ref": "bag.name" },\n            "client1": "teste",\n            "pizzas": {\n              "qty": 2,\n              "flavors": ["mussarela", "pepperoni"],\n              "olives": false\n            }\n          }\n        }\n      },\n      {\n        "id": "3",\n        "type": "SystemTask",\n        "name": "Take the order",\n        "category": "setToBag",\n        "next": "4",\n        "lane_id": "1",\n        "parameters": {\n          "input": {\n            "orderNo": { "$js": "() => Math.floor(Math.random() * 100); " }\n          }\n        }\n      },\n      {\n        "id": "4",\n        "type": "SystemTask",\n        "name": "Prepare Pizza",\n        "category": "Timer",\n        "next": "5",\n        "lane_id": "1",\n        "parameters": {\n          "input": {},\n          "timeout": 5\n        }\n      },\n      {\n        "id": "5",\n        "type": "SystemTask",\n        "category": "SetToBag",\n        "name": "Bring Pizza",\n        "next": "6",\n        "lane_id": "1",\n        "parameters": {\n          "input": {\n            "comment": {\n              "$mustache": "check if there are {{bag.pizzas.qty}} pizzas in the bag"\n            }\n          }\n        }\n      },\n      {\n        "id": "6",\n        "type": "SystemTask",\n        "category": "setToBag",\n        "name": "Receive Pizza",\n        "next": "7",\n        "lane_id": "1",\n        "parameters": {\n          "input": {\n            "confirm": { "$ref": "bag.orderNo" }\n          }\n        }\n      },\n      {\n        "id": "7",\n        "type": "Finish",\n        "name": "Finish node",\n        "next": null,\n        "lane_id": "1"\n      }\n    ],\n    "lanes": [\n      {\n        "id": "1",\n        "name": "the_only_lane",\n        "rule": ["fn", ["&", "args"], true]\n      }\n    ],\n    "environment": {}\n  }\n}\n')))}d.isMDXComponent=!0},4096:function(e,n,r){"use strict";n.Z=r.p+"assets/images/pizza-1-bc3aeb27bdc0ace7476a5f126afdc57c.png"}}]);