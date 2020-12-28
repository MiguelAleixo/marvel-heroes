- Sobre a tela de detalhe de herói (HeroPage), percebi algumas inconsistências e achei importante descrevê-las:

- Sobre os filmes, não consegui achar nenhum objeto compatível retornado pela API, então atribuí a propriedade "serie.available" para este componente.

- Sobre a avaliação (Rating), também não achei nenhum valor palpável retornado da API, então decidi deixa-la estática com a imagem que foi passada em ./assets.

- Sobre os 10 ultimos quadrinhos ordenados por onSaleDate, estudei 2 opções:
 1- Utilizando a queryString com parâmetros de "orderBy" para ordernar por onSaleDate e "limit" para descrever o limite desejado;
 2- Utilizando a queryString padrão e filtrar o response com funções que a linguagem Javascript disponibiliza;

- Desse modo optei pela primeira opção, mas deixei um código comentado logo abaixo, se caso não houvesse parâmetros a serem passados por queryString.

- Além disso notei algumas falhas no retorno dos dados, onde é mostrado datas negativas ou muito além do presente, confirmei através do link que o proprio site da Marvel disponibiliza, e certamente é a mesma URL consumida

- Quadrinho com data negativa: https://www.marvel.com/comics/collection/17469/marvel_masterworks_the_mighty_thor_vol_3_hardcover

- Quadrinho com a data além do presente: https://www.marvel.com/comics/issue/183/startling_stories_the_incorrigible_hulk_2004_1

- Sendo assim, em alguns casos, a ordenação por data não irá funcionar corretamente.

- Sobre a data do último quadrinho, como existem alguns dados incongruentes como datas negativas, decidi mantê-lo estático também.


- Sobre os testes, os resultados carregados diretos da Marvel API mudam constantemente, deste modo, pode existir quebras nos testes, após a atualização da mesma

