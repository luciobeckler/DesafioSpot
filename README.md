# DesafioSpot
Repositório criado para a realização do desafio passado pela empresa Spot para desenvolvedor web.

#### Questão 1: Descreva rapidamente pelo menos 3 ações que podem ser feitas para otimizar a velocidade de carregamento da seguinte Landing Page da V4: Assessoria | V4 Company.

  - **Minimização** dos arquivos JS e CSS enviados para a produção, tais códigos não precisarão ser lidos por uma pessoa logo a versão minimizada (sem identação e sem espaços) é uma alternativa que auxiliaria no carregamento mais ágil da landing page, essa alternativa é muito utilizada pelo bootstrap quando o usuário deseja baixar seus arquivos em vez de utilizar o web link; 
  - Utilizar o **cache** do próprio navegador para armazenar recursos estáticos também é uma alternativa, porém essa mudança surtirá efeito apenas a partir da segunda visita de um usuário ao site.
  - Trabalhando juntamente com o design, podemos colocar as **funções essenciais** do aplicativo no começo da página e dar prioridade para o carregamento delas, permitindo que o usuário interaja com a aplicação antes que a mesma acabe de carregar por completo.
  - Diminuir a **quantidade de requisições http**, quando priorizamos a velocidade em detrimento do tamanho do arquivo, uma boa alternativa é disponibilizar no próprio arquivo que será lido pelo navegador os arquivos css, js, imagens e etc, para que não a aplicação não dependa requisições a outros serviços externos que além de demorarem mais tempo ainda correm o risco de estarem indisponíveis.
  - **Complexidade gráficas e funcionais** dos componentes de um site também alteram seu desempenho, principalmente quando falamos de adicionar movimento aos componentes.

    Falando mais expecificamente sobre a landing page da V4, podemos observar o formulário é o primeiro a ser carregado, porém devido ao título e ao botão verde grande ocuparem boa parte da primeira seção do site, o formulário que é carregado antes fica cortado. Não acho que o formulário deva receber prioridade nesses casos pois ninguém que está acessando pela primeira vez o site da V4 irá querer preencher o formulário rapidamente com seus dados sem saber do que se trata então acho que deixar a prioridade para elementos que prendam a atenção do usuário seria uma melhor escolha.
      
    Além disso o site é muito escuro e apesar de ser um concenso entre os programadores, o dark mode não é bem visto pelos usuários convencionais, já ouvi dizer que sites mais escuros afetam também afetam psicologicamente a percepção de tempo de carregamento, já que o olho do usuário estaria acostumado a um ambiente claro.
      
    O site da V4 já parece contar com armazenamento de cache para o carregamento mais rápido e também com priorização de carregamento perceptível principalmente no formulário, na section abaixo dele e na parte dos clientes aparenta ser um carregamento feito para ser elegante. Para finalizar fica claro que o site possui muitos componentes com movimento, o que reduz bastante o desempenho e quando usado em excesso, como é o caso, incomoda o usuário com tantas coisas se movendo na tela, atrapalhando o foco.  
    

