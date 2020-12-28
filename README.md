# Luizalabs Frontend Challenge
Aplicação de listagem e detalhe de personagens de quadrinhos.

- "Single Page Application" desenvolvida em `ReactJS`
- Componentes de autoria própria (Sem o uso de libs de UI)
- Padronização de projeto baseado em normas `Airbnb`
-   Normas configuradas com `ESLint`
-   Testes de integração com `Jest`
-   Deploy automático no `Heroku`

## Objetivo

Desenvolver uma aplicação de listagem e detalhe de personagens de quadrinhos.

##### Requisitos funcionais:

- Página de listagem de personagens (home):
  - Exibir os 20 primeiros resultados da API: ✔
  - Permitir ordenação por nome do personagem: ✔
  - Permitir filtrar por nome, pelo campo de busca: ✔
  - Permitir mostrar apenas os personagens favoritos: ✔
  - Permitir o usuário favoritar/desfavoritar até 5 personagens: ✔
- Página de detalhe do personagem:
  - Exibir dados do personagem: ✔
  - Exibir últimos 10 quadrinhos lançados deste personagem (onSaleDate): ✔
  - Permitir o usuário favoritar/desfavoritar (dentro do limite de 5): ✔

##### Bônus:
  - Layout responsivo: ✔
  - Utilização de ES6+: ✔
 - Utilização de ferramentas para garantir a qualidade do código: ✔
  - Testes: ✔

##### Observações:

Ao avaliar o projeto, peço que leia as considerações e observações
feitas no arquivo COMMENTS.md

## Executando a aplicação

Primeiramente é necessario que tenha o `Git` e o `NodeJS` instalados em sua máquina e executar o seguinte comando:

```sh
$ git clone https://github.com/MiguelAleixo/marvel-heroes.git
$ cd marvel-heroes
$ npm install
```

## Executando os testes de integração (Actions e Reducers)
Basta executar o comando:

`
$ npm run test
`

**Iniciando a aplicação**

Para iniciar o projeto basta executar:
```sh
$ npm run start
```

## Demonstração

A interface Web está disponivel através do link abaixo:

https://marvel-heroes-challenge.herokuapp.com/

Por se tratar de um serviço gratuito (Heroku),
quando a aplicação ficar inativa por mais de 30 minutos,
ela irá adormecer. Deste modo ao acessar a pagina pela primeira vez, 
pode ocorrer lentidão, recomendo que espere alguns minutos e
atualize a pagina se caso precisar :D

## Autor

- Miguel Gomes Aleixo Ferreira Lima
