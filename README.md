# DesafioSpot
Repositório criado para a realização do desafio passado pela empresa Spot para desenvolvedor web.

#### Questão 1: Descreva rapidamente pelo menos 3 ações que podem ser feitas para otimizar a velocidade de carregamento da seguinte Landing Page da V4: Assessoria | V4 Company.

  - **Minimização** dos arquivos JS e CSS enviados para a produção, tais códigos não precisarão ser lidos por uma pessoa logo a versão minimizada (sem identação e sem espaços) é uma alternativa que auxiliaria no carregamento mais ágil da landing page, essa alternativa é muito utilizada pelo bootstrap quando o usuário deseja baixar seus arquivos em vez de utilizar o web link; 
  - Utilizar o **cache** do próprio navegador para armazenar recursos estáticos também é uma alternativa, porém essa mudança surtirá efeito apenas a partir da segunda visita de um usuário ao site.
  - Trabalhando juntamente com o design, podemos colocar as **funções essenciais** do aplicativo no começo da página e dar prioridade para o carregamento delas, permitindo que o usuário interaja com a aplicação antes que a mesma acabe de carregar por completo.
  - Diminuir a **quantidade de requisições http**, quando priorizamos a velocidade em detrimento do tamanho do arquivo, uma boa alternativa é disponibilizar no próprio arquivo que será lido pelo navegador os arquivos css, js, imagens e etc, para que não a aplicação não dependa requisições a outros serviços externos que além de demorarem mais tempo ainda correm o risco de estarem indisponíveis.
  - **Reduzir a complexidade gráficas e de processamento** dos componentes de um site também alteram seu desempenho, principalmente quando falamos de adicionar movimento aos componentes ou de requisições e processamentos mal otimizados.

    Falando mais expecificamente sobre a landing page da V4, podemos observar o formulário é o primeiro a ser carregado, porém devido ao título e ao botão verde grande ocuparem boa parte da primeira seção do site, o formulário que é carregado antes fica cortado. Não acho que o formulário deva receber prioridade nesses casos pois ninguém que está acessando pela primeira vez o site da V4 irá querer preencher o formulário rapidamente com seus dados sem saber do que se trata então acho que deixar a prioridade para elementos que prendam a atenção do usuário seria uma melhor escolha.
      
    Além disso o site é muito escuro e apesar de ser um concenso entre os programadores, o dark mode não é bem visto pelos usuários convencionais, já ouvi dizer que sites mais escuros afetam também afetam psicologicamente a percepção de tempo de carregamento, já que o olho do usuário estaria acostumado a um ambiente claro.
      
    O site da V4 já parece contar com armazenamento de cache para o carregamento mais rápido e também com priorização de carregamento perceptível principalmente no formulário, na section abaixo dele e na parte dos clientes aparenta ser um carregamento feito para ser elegante. Para finalizar fica claro que o site possui muitos componentes com movimento, o que reduz bastante o desempenho e quando usado em excesso, como é o caso, incomoda o usuário com tantas coisas se movendo na tela, atrapalhando o foco.

#### Questão 2: Construa a seguinte Landing Page com base no Design a seguir: https://www.figma.com/file/4U8PXGUxdTJIFKqSeL23Ks/IDEAL?type=design& node-id=0%3A1&t=bIy5QohgEwQze4eZ-1 Arquivo de Imagem e PSD: https://drive.google.com/drive/folders/1Y5fje_R9K2EJZKptTVz82VP8QWVRH 63H?usp=sharing  

  Repositório acima.

#### Questão 3: Explique de forma bem resumida ou em um esquema como você poderia utilizar um APP Builder (ex.: Retool | Build internal tools, remarkably fast.) para otimizar processos de uma agência de marketing (será avaliado a ideia de automatização e a explicação do que seria necessário fazer no APP Builder para criar a solução)

Hoje em dia estamos cercados por dados e o desafio de coletar, tratar e gerar informações com esses dados geram resultados a curto, médio e principalmente a longo prazo. O Retool é uma ferramenta que atua na última etapa do processo oferecendo uma ferramenta amigável ao usuário que permite a identificações de processos a serem otimizados, permitindo integrações com o Slack, GitHub e inclusive com o gpt-4 para interação com o cliente; Geração de relatórios que podem ser alimentados por várias bases como Google Cloud, PostgreSQL, MySQL, AWS S3 entre vários outros.  

  - Filtrar em uma coluna de last_accessed_date usuários com mais de 7 dias sem acesso e enviar para eles algum incentivo para que voltem a usar a plataforma baseada em suas compras e acessos anteriores à plataforma e filtrar na mesma coluna usuários recém chegados na plataforma e enviar para eles algum incentivo genérico baseado apenas em dados fornecidos durante o cadastro, idade, sexo, localidade, etc.  
  - Geração de cupons de desconto para clientes que tiveram problemas com a compra, todo cliente que teve que devolver a compra pelos motivos x,y e z (problemas que seriam da responsabilidade da empresa) receberá um cupon para voltar a comprar com a mesma marca. Para categorizar o problema que o cliente teve com base em uma descrição escrita, podemos utilizar uma integraçao com o gpt-4, para que o mesmo faça essa discriminação com base em problemas pré estabelecidos ou retornando undefined caso não consiga estabelecer uma conexão.


