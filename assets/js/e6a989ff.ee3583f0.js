(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[8581],{3905:function(e,o,n){"use strict";n.d(o,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),l=function(e){var o=a.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},u=function(e){var o=l(e.components);return a.createElement(c.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},d=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=t,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,i(i({ref:o},u),{},{components:n})):a.createElement(k,i({ref:o},u))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8831:function(e,o,n){"use strict";n.r(o),n.d(o,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var a=n(2122),t=n(9756),r=(n(7294),n(3905)),i=["components"],s={},c={unversionedId:"documentation/instalacao",id:"documentation/instalacao",isDocsHomePage:!1,title:"Instala\xe7\xe3o",description:"Caso o(a) usu\xe1rio(a) deseje testar a API localmente, basta seguir os passos abaixo:",source:"@site/docs/documentation/instalacao.md",sourceDirName:"documentation",slug:"/documentation/instalacao",permalink:"/docs/documentation/instalacao",editUrl:"https://github.com/flow-build/flow-build.github.io/docs/documentation/instalacao.md",version:"current",frontMatter:{},sidebar:"documentationSidebar",next:{title:"Tokens",permalink:"/docs/documentation/tokenizacao"}},l=[{value:"Depend\xeancias necess\xe1rias",id:"depend\xeancias-necess\xe1rias",children:[]},{value:"Vari\xe1veis de ambiente",id:"vari\xe1veis-de-ambiente",children:[]},{value:"Rode o projeto no docker",id:"rode-o-projeto-no-docker",children:[{value:"Usu\xe1rios Windows",id:"usu\xe1rios-windows",children:[]}]},{value:"Explorando e executando a API",id:"explorando-e-executando-a-api",children:[]},{value:"Bibliografia",id:"bibliografia",children:[]}],u={toc:l};function p(e){var o=e.components,n=(0,t.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Caso o(a) usu\xe1rio(a) deseje testar a API localmente, basta seguir os passos abaixo:"),(0,r.kt)("h2",{id:"depend\xeancias-necess\xe1rias"},"Depend\xeancias necess\xe1rias"),(0,r.kt)("p",null,"As seguintes depend\xeancias s\xe3o necess\xe1rias para o funcionamento da API: Node e NPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node -v\nv14.16.1\n\nnpm -v\n6.12.0\n")),(0,r.kt)("h2",{id:"vari\xe1veis-de-ambiente"},"Vari\xe1veis de ambiente"),(0,r.kt)("p",null,'Para mudar a senha JWT da aplica\xe7\xe3o (o padr\xe3o \xe9 "1234", sem aspas), altere a seguinte linha no arquivo .env (ou .env.docker se estiver usando docker):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JWT_KEY=sua-nova-senha\n")),(0,r.kt)("h2",{id:"rode-o-projeto-no-docker"},"Rode o projeto no docker"),(0,r.kt)("p",null,"Para rodar o docker, execute o c\xf3digo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,r.kt)("p",null,"Certifique-se que as portas 3000 e 5432 estejam liberadas no seu localhost."),(0,r.kt)("h3",{id:"usu\xe1rios-windows"},"Usu\xe1rios Windows"),(0,r.kt)("p",null,"Usu\xe1rios de Windows precisar\xe3o instalar o ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop")," e ativar as ferramentas de virtualiza\xe7\xe3o do Windows."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Anteriormente era necess\xe1rio instalar uma vers\xe3o do Linux na m\xe1quina utilizando o WLS2, mas essa nova ferramenta automatiza todo o processo. ")),(0,r.kt)("p",null,"Antes de iniciarem a aplica\xe7\xe3o, \xe9 necess\xe1rio ajustar a chave ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," no arquivo docker-compose.yml para:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'bash -c " npm update && npm install knex -g && npm install nodemon -g && npm install && npm rebuild && npm run migrations && npm run seeds && npm run start "\n')),(0,r.kt)("p",null,"Ap\xf3s a instala\xe7\xe3o do docker desktop e do comando acima, execute o comando"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,r.kt)("h2",{id:"explorando-e-executando-a-api"},"Explorando e executando a API"),(0,r.kt)("p",null,"Com a aplica\xe7\xe3o executando, voc\xea pode explorar todas as rotas poss\xedveis em ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/swagger")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Se voc\xea mudar a url base, lembre de mudar tamb\xe9m seu arquivo openapi3.yaml.")),(0,r.kt)("p",null,"Se desejar usar um programa de terceiros, como Insomnia ou Postman, basta importar o arquivo\nopenapi3.yaml e todos as rotas ser\xe3o exibidas. "),(0,r.kt)("p",null,"Se usar o Postman, \xe9 recomendado mudar o arquivo organization para Tags ap\xf3s selecionar o arquivo a ser importado."),(0,r.kt)("h2",{id:"bibliografia"},"Bibliografia"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Como instalar o docker no Windows")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"https://www.docker.com/get-started")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Como instalar o docker no Linux")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")))}p.isMDXComponent=!0}}]);