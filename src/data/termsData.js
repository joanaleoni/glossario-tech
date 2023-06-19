const termsData = [
  // Banco de dados
  { 
    name: 'SGDB', 
    categories: ['Banco de dados'], 
    description: 'Sistema Gerenciador de Banco de Dados. Software responsável pelo gerenciamento e organização de um banco de dados.' 
  },
  { 
    name: 'NoSQL', 
    categories: ['Banco de dados'], 
    description: 'Tipo de banco de dados não relacional que não utiliza a linguagem SQL para consultas e manipulação dos dados.' 
  },
  { 
    name: 'Banco de dados relacional', 
    categories: ['Banco de dados'], 
    description: 'Tipo de banco de dados que organiza os dados em tabelas e utiliza a linguagem SQL para consultas e manipulação dos dados.' 
  },
  { 
    name: 'Banco de dados não relacional', 
    categories: ['Banco de dados'], 
    description: 'Tipo de banco de dados que não utiliza a estrutura de tabelas e relacionamentos dos bancos de dados relacionais.' 
  },
  { 
    name: 'Query', 
    categories: ['Banco de dados'], 
    description: 'Uma solicitação ou instrução em uma linguagem de consulta (como SQL) para recuperar ou manipular dados em um banco de dados.' 
  },
  { 
    name: 'PostgreSQL', 
    categories: ['Banco de dados'], 
    description: 'Um sistema de gerenciamento de banco de dados relacional de código aberto, que oferece recursos de armazenamento, recuperação, manipulação e processamento de dados, incluindo suporte a SQL. Conhecido por sua confiabilidade, escalabilidade e recursos avançados.' 
  },
  { 
    name: 'MySQL', 
    categories: ['Banco de dados'], 
    description: 'Um sistema de gerenciamento de banco de dados relacional de código aberto, que oferece recursos de armazenamento, recuperação, manipulação e processamento de dados, incluindo suporte a SQL. Conhecido por sua facilidade de uso, desempenho rápido e escalabilidade.' 
  },
  { 
    name: 'Banco de dados', 
    categories: ['Banco de dados'], 
    description: 'Um sistema organizado para armazenar e gerenciar dados de forma estruturada.' 
  },
  { 
    name: 'SQL (Structured Query Language)', 
    categories: ['Banco de dados'], 
    description: 'Linguagem de programação usada para gerenciar e manipular bancos de dados relacionais. Permite a criação, consulta, atualização e exclusão de dados em um banco de dados.' 
  },
  { 
    name: 'MongoDB', 
    categories: ['Banco de dados'], 
    description: 'Um banco de dados NoSQL orientado a documentos, que armazena dados no formato JSON-like (BSON), permitindo uma modelagem de dados mais dinâmica.' 
  },
  { 
    name: 'Redis', 
    categories: ['Banco de dados'], 
    description: 'Um banco de dados NoSQL de estrutura de dados em memória, usado principalmente para armazenamento em cache, sessões de aplicativos e filas de mensagens.' 
  },

  { 
    name: 'Normalização', 
    categories: ['Banco de dados'], 
    description: 'Processo de projetar e organizar a estrutura de um banco de dados em diferentes níveis, visando eliminar a redundância e garantir a integridade dos dados.' 
  },
  {
    name: 'Indexação',
    categories: ['Banco de dados'],
    description: 'Processo de organizar dados de forma eficiente para facilitar a recuperação e busca de informações em um banco de dados. Envolve a criação de estruturas de dados especiais que permitem acesso rápido aos registros com base em critérios específicos, como chaves primárias ou outros campos relevantes.'
  },
  { 
    name: 'Integridade referencial', 
    categories: ['Banco de dados'], 
    description: 'A garantia de que as relações entre as tabelas em um banco de dados estão consistentes e preservadas, por meio do uso de chaves estrangeiras e regras de integridade.' 
  },
  { 
    name: 'Tabelas', 
    categories: ['Banco de dados'], 
    description: 'Estruturas que armazenam os dados de um banco de dados relacional, compostas por linhas e colunas.' 
  },
  { 
    name: 'Modelo Entidade-Relacionamento (MER)', 
    categories: ['Banco de dados'], 
    description: 'Representação visual das entidades, relacionamentos e atributos em um banco de dados, auxiliando no projeto e na compreensão da estrutura.' 
  },
  { 
    name: 'Chave primária', 
    categories: ['Banco de dados'], 
    description: 'Atributo ou conjunto de atributos que identificam exclusivamente uma entrada em uma tabela, garantindo a unicidade dos registros.' 
  },
  { 
    name: 'Chave estrangeira', 
    categories: ['Banco de dados'], 
    description: 'Atributo ou conjunto de atributos que estabelecem uma relação entre duas tabelas, referenciando a chave primária de outra tabela.' 
  },
  { 
    name: 'Trigger', 
    categories: ['Banco de dados'], 
    description: 'Um objeto em um banco de dados que é acionado automaticamente em resposta a determinados eventos ou operações no banco de dados.' 
  },

  // Design
  {
    name: 'Usabilidade',
    categories: ['Design'],
    description: 'A medida em que um produto ou sistema é fácil de usar e proporciona uma experiência agradável ao usuário, considerando aspectos como eficiência, aprendizagem e satisfação.'
  },
  {
    name: 'User Experience (UX)',
    categories: ['Design'],
    description: 'A experiência geral do usuário ao interagir com um produto ou sistema, envolvendo aspectos como usabilidade, acessibilidade e satisfação.'
  },
  {
    name: 'User Interface (UI)',
    categories: ['Design'],
    description: 'A camada visual e interativa de um software ou aplicativo que permite que os usuários interajam com o sistema.'
  },
  {
    name: 'Responsividade',
    categories: ['Design'],
    description: 'A capacidade de um site ou aplicativo se adaptar e funcionar corretamente em diferentes dispositivos e tamanhos de tela.'
  },
  {
    name: 'Prototipagem',
    categories: ['Design'],
    description: 'A criação de versões preliminares de um produto ou sistema para testar ideias e funcionalidades.'
  },
  {
    name: 'Wireframe',
    categories: ['Design'],
    description: 'Um esboço visual básico que representa a estrutura e layout de uma página web ou aplicativo, mostrando a disposição dos elementos e a hierarquia das informações.'
  },
  {
    name: 'Mockup',
    categories: ['Design'],
    description: 'Uma representação visual estática de como será o design final de um produto ou sistema, geralmente criada para apresentar o visual e a aparência antes da implementação.'
  },
  {
    name: 'Tipografia',
    categories: ['Design'],
    description: 'O estudo e seleção de fontes tipográficas adequadas para uso em um design, levando em consideração a legibilidade, a hierarquia e o estilo desejado.'
  },
  {
    name: 'Grid',
    categories: ['Design'],
    description: 'Uma estrutura visual composta por linhas e colunas que ajuda a organizar e alinhar elementos em um design, facilitando a criação de layouts equilibrados e consistentes.'
  },
  {
    name: 'Paleta de cores',
    categories: ['Design'],
    description: 'A seleção de cores utilizada em um design, que inclui cores primárias, secundárias e de destaque, além de variantes tonais e de contraste.'
  },
  {
    name: 'Hierarquia Visual',
    categories: ['Design'],
    description: 'A organização e disposição dos elementos visuais em um design para comunicar a importância relativa e a sequência de informações, geralmente utilizando diferenças de tamanho, cor, contraste e posição.'
  },
  {
    name: 'Espaçamento',
    categories: ['Design'],
    description: 'O uso intencional de espaços em branco entre elementos de design para criar equilíbrio, legibilidade e foco visual adequados.'
  },
  {
    name: 'Contraste',
    categories: ['Design'],
    description: 'A diferença entre elementos de design, como cores, tamanhos, formas ou texturas, que cria distinção e destaque visual, aumentando a legibilidade e a percepção.'
  },
  {
    name: 'Índice de Cliques (Click-Through Rate - CTR)',
    categories: ['Design', 'Web'],
    description: 'A métrica que mede a proporção de cliques em um determinado elemento de design ou anúncio em relação ao número total de visualizações, utilizado para avaliar a eficácia e o envolvimento dos usuários.'
  },
  {
    name: 'Wireflow',
    categories: ['Design'],
    description: 'Representação visual que combina elementos de wireframes e fluxos de usuário, mostrando a estrutura da página e a sequência de interações em um design de interface.'
  },
  {
    name: 'Layout',
    categories: ['Design'],
    description: 'Refere-se à organização visual e estrutural dos elementos em um design, como texto, imagens e botões, com o objetivo de proporcionar uma experiência esteticamente agradável e funcional ao usuário.'
  },
  {
    name: 'Fluxos de usuário (User Flow)',
    categories: ['Design'],
    description: 'Sequência de ações e interações que um usuário realiza em um site, aplicativo ou sistema digital para atingir um objetivo específico, mapeando o caminho percorrido e identificando etapas-chave ao longo do processo.'
  },
  //DevOps
  {
    name: 'DevOps',
    categories: ['DevOps'],
    description: 'Uma cultura e conjunto de práticas que promovem a colaboração entre as equipes de desenvolvimento de software e operações de TI para acelerar a entrega de software de alta qualidade.'
  },
  
  {
    name: 'Continuous Integration (CI)',
    categories: ['DevOps'],
    description: 'Um processo de integração contínua em que os desenvolvedores integram seu código ao repositório compartilhado regularmente, garantindo a detecção precoce de conflitos e erros de integração.'
  },
  {
    name: 'Continuous Delivery (CD)',
    categories: ['DevOps'],
    description: 'Um processo de entrega contínua de software, em que as alterações de código são construídas, testadas e preparadas automaticamente para implantação em ambiente de produção.'
  },
  {
    name: 'Containerização',
    categories: ['DevOps'],
    description: 'Uma técnica de empacotamento de software em contêineres isolados, que incluem todas as dependências necessárias para que o aplicativo seja executado de maneira consistente em diferentes ambientes.'
  },
  {
    name: 'Docker',
    categories: ['DevOps'],
    description: 'Plataforma de virtualização de contêineres que permite empacotar e distribuir aplicativos com suas dependências em contêineres isolados, fornecendo portabilidade e escalabilidade para ambientes de desenvolvimento e produção.'
  },
  {
    name: 'Kubernetes',
    categories: ['DevOps'],
    description: 'Plataforma de código aberto usada para automatizar a implantação, o dimensionamento e o gerenciamento de aplicativos em contêineres. Permite a orquestração eficiente de contêineres em um ambiente distribuído.'
  },
  {
    name: 'Monitoramento de aplicações',
    categories: ['DevOps'],
    description: 'Prática de coletar dados sobre o desempenho e a disponibilidade de um aplicativo em tempo real, permitindo a detecção e solução proativa de problemas.'
  },
  {
    name: 'Virtual Machine (VM)',
    categories: ['DevOps'],
    description: 'Emulação de um ambiente computacional completo, permitindo a criação, gerenciamento e provisionamento ágil e automatizado de ambientes de desenvolvimento e produção.'
  },
  {
    name: 'IaC (Infrastructure as Code)',
    categories: ['DevOps', 'Redes e infraestrutura'],
    description: 'Uma abordagem para gerenciar e provisionar infraestrutura de TI por meio de código, permitindo a automação e o versionamento da infraestrutura.'
  },
  {
    name: 'Orquestração',
    categories: ['DevOps'],
    description: 'O processo de coordenar e gerenciar tarefas, serviços e componentes em um ambiente de TI distribuído e complexo.'
  },
  {
    name: 'Automação de implantação',
    categories: ['DevOps'],
    description: 'A prática de automatizar o processo de implantação de software em diferentes ambientes, reduzindo erros e acelerando a entrega de novas versões.'
  },
  {
    name: 'Monitoramento de infraestrutura',
    categories: ['DevOps', 'Redes e infraestrutura'],
    description: 'O acompanhamento e coleta de dados sobre a infraestrutura de TI, como servidores, redes e bancos de dados, para garantir o desempenho, a disponibilidade e a segurança do ambiente.'
  },
  
    
  // Formatos de dados
  {
    name: 'JSON',
    categories: ['Formatos de dados'],
    description: 'JavaScript Object Notation. Um formato leve de troca de dados que é fácil de ler e escrever para humanos e fácil de analisar e gerar para máquinas.'
  },
  {
    name: 'JSON-like (BSON)',
    categories: ['Formatos de dados'],
    description: 'Binary JSON. Formato de dados binários semelhante ao JSON, projetado para armazenamento eficiente e troca de informações em bancos de dados NoSQL. Oferece suporte a tipos de dados adicionais e é mais compacto e rápido em comparação com o JSON.'
  },
  {
    name: 'XML',
    categories: ['Formatos de dados'],
    description: 'eXtensible Markup Language. Uma linguagem de marcação que define regras para a codificação de documentos legíveis por humanos e por máquinas.'
  },
  {
    name: 'JWT',
    categories: ['Formatos de dados'],
    description: 'JSON Web Token. Um formato compacto e autocontido para transmitir informações de forma segura entre partes como um objeto JSON.'
  },
  {
    name: 'CSV',
    categories: ['Formatos de dados'],
    description: 'Comma-Separated Values. Um formato de arquivo que armazena dados tabulares (como uma planilha) em formato de texto simples, em que cada linha representa uma linha da tabela e os valores são separados por vírgulas.'
  },
  {
  name: 'YAML',
  categories: ['Formatos de dados'],
  description: 'Linguagem de serialização de dados legível por humanos, frequentemente usada para configuração de arquivos, que permite representar estruturas de dados complexas usando indentação.'
  },
      
  // Fundamentos de computação
  {
    name: 'Binário',
    categories: ['Fundamentos de computação'],
    description: 'Sistema de numeração composto apenas por 0s e 1s, utilizado na computação para representar dados e instruções.'
  },
  {
    name: 'Bit',
    categories: ['Fundamentos de computação'],
    description: 'A menor unidade de informação em um computador, representando um dígito binário: 0 ou 1.'
  },
  {
    name: 'Byte',
    categories: ['Fundamentos de computação'],
    description: 'Unidade básica de informação em computação, composta por 8 bits.'
  },
  {
    name: 'ASCII',
    categories: ['Fundamentos de computação'],
    description: 'American Standard Code for Information Interchange. Um conjunto de códigos numéricos que representam caracteres e símbolos no computador.'
  },
  {
    name: 'Backup',
    categories: ['Fundamentos de computação', 'Segurança'],
    description: 'Cópia de segurança de dados ou informações em um sistema de armazenamento, feita com o objetivo de ser usada para restaurar os dados originais em caso de perda ou corrupção.'
  },
  {
    name: 'Terminal',
    categories: ['Fundamentos de computação'],
    description: 'Um programa de computador que permite aos usuários interagir com o sistema operacional por meio de comandos de texto.'
  },
  {
    name: 'Software',
    categories: ['Fundamentos de computação'],
    description: 'Conjunto de programas, instruções e dados que controlam as operações de um computador ou sistema.'
  },
  { 
    name: 'RAM', 
    categories: ['Fundamentos de computação'], 
    description: 'Random Access Memory. Uma forma de memória volátil utilizada para armazenar dados temporariamente durante a execução de programas.' 
  },
  { 
    name: 'BIOS', 
    categories: ['Fundamentos de computação'], 
    description: 'Basic Input/Output System. O firmware que fornece instruções básicas para inicializar o hardware de um computador.' 
  },
  {
    name: 'Hard Disk (HD)',
    categories: ['Fundamentos de computação'],
    description: 'Um dispositivo de armazenamento de dados magnético utilizado em computadores para armazenar permanentemente informações digitais.'
  },
  { 
    name: 'CPU', 
    categories: ['Fundamentos de computação'], 
    description: 'Unidade Central de Processamento. O componente principal de um computador que executa as instruções de um programa.' 
  },
  { 
    name: 'Processador', 
    categories: ['Fundamentos de computação'], 
    description: 'O componente de um computador responsável por executar instruções e manipular dados de acordo com as especificações de um programa.' }, 
  { 
    name: 'Hardware', 
    categories: ['Fundamentos de computação'], 
    description: 'Os componentes físicos de um computador ou sistema, incluindo processador, memória, disco rígido, placas de vídeo e outros dispositivos.' 
  },
  { 
    name: 'Cache', 
    categories: ['Fundamentos de computação'], 
    description: 'Uma área de armazenamento de alta velocidade que armazena dados frequentemente acessados para acelerar o acesso posterior a esses dados.' 
  },
  { 
    name: 'Processo', 
    categories: ['Fundamentos de computação'], 
    description: 'Uma instância em execução de um programa de computador. Cada processo tem seu próprio espaço de memória e recursos associados.' 
  },
  { 
    name: 'Shell', 
    categories: ['Fundamentos de computação'], 
    description: 'Um ambiente de linha de comando que permite aos usuários interagirem com um sistema operacional, executando comandos e scripts.' 
  },
  {
    name: 'Big O notation',
    categories: ['Fundamentos de computação'],
    description: 'Notação usada para descrever a eficiência de algoritmos em termos de tempo de execução e uso de recursos. Fornece uma estimativa do pior caso de tempo e espaço necessários para executar um algoritmo à medida que o tamanho da entrada aumenta.'
  },

  // IA
  {
    name: 'Inteligência Artificial (IA)',
    categories: ['Inteligência Artificial', 'Tecnologias emergentes'],
    description: 'Campo da ciência da computação que se concentra na criação de sistemas que podem realizar tarefas que normalmente requerem inteligência humana.'
  },
  {
    name: 'Aprendizado de Máquina (Machine Learning)',
    categories: ['Inteligência Artificial', 'Tecnologias emergentes'],
    description: 'Um subcampo da IA que permite aos sistemas aprender e melhorar com base em experiências anteriores, sem serem explicitamente programados.'
  },
  {
    name: 'Clusterização',
    categories: ['Inteligência Artificial'],
    description: 'Técnica de agrupamento de dados similares em grupos ou clusters, com base em suas características e similaridades, permitindo a descoberta de padrões e estruturas nos dados.'
  },
  {
    name: 'Redes Neurais Artificiais',
    categories: ['Inteligência Artificial'],
    description: 'Modelos computacionais inspirados no funcionamento do cérebro humano, utilizados para resolver problemas complexos e reconhecer padrões em grandes conjuntos de dados.'
  },
  {
    name: 'Processamento de Linguagem Natural (NLP)',
    categories: ['Inteligência Artificial'],
    description: 'Campo de estudo que combina conhecimentos de linguística e inteligência artificial para permitir que os computadores entendam, interpretem e gerem linguagem humana de forma natural.'
  },
  {
    name: 'Visão computacional',
    categories: ['Inteligência Artificial'],
    description: 'Área da inteligência artificial que se dedica a extrair informações e conhecimento a partir de imagens ou vídeos, permitindo que os computadores "vejam" e compreendam o mundo visual.'
  },
  {
    name: 'Aprendizado Profundo (Deep Learning)',
    categories: ['Inteligência Artificial'],
    description: 'Subcampo da inteligência artificial que utiliza redes neurais com múltiplas camadas para aprender representações complexas dos dados, permitindo o desenvolvimento de sistemas capazes de realizar tarefas sofisticadas.'
  },
  {
    name: 'Reconhecimento de padrões',
    categories: ['Inteligência Artificial'],
    description: 'Processo de identificar e classificar padrões em dados, com o objetivo de extrair informações relevantes e tomar decisões ou fazer previsões.'
  },
  {
    name: 'Redes Neurais Convolucionais (Convolutional Neural Networks)',
    categories: ['Inteligência Artificial'],
    description: 'Arquiteturas de redes neurais projetadas para processar dados em forma de grade, como imagens, utilizando camadas de convolução para extrair características relevantes.'
  },
  {
    name: 'Sistemas de recomendação',
    categories: ['Inteligência Artificial'],
    description: 'Sistemas que fornecem recomendações personalizadas para usuários com base em seus dados de preferência, histórico de interações ou comportamentos similares de outros usuários.'
  },
  {
    name: 'Chatbot',
    categories: ['Inteligência Artificial'],
    description: 'Um programa de computador que utiliza IA para simular uma conversa humana, interagindo com usuários por meio de mensagens de texto ou voz.'
  },
  {
    name: 'Algoritmos genéticos',
    categories: ['Inteligência Artificial'],
    description: 'Algoritmos inspirados no processo de seleção natural que utilizam conceitos de evolução para otimizar soluções em problemas de busca e otimização.'
  },
    
  // Modelagem de software
  { 
    name: 'User Story', 
    categories: ['Modelagem de software'], 
    description: 'Uma técnica de descrição de requisitos de software em linguagem natural, centrada no usuário e expressa na forma de uma narrativa curta, capturando quem é o usuário, o que ele deseja alcançar e por quê.' 
  },

  { 
    name: 'Diagrama de classes', 
    categories: ['Modelagem de software'], 
    description: 'Um diagrama que representa a estrutura e as relações entre as classes de um sistema, mostrando os atributos, métodos e associações entre as classes.' },

  {
    name: 'Diagrama de sequência',
    categories: ['Modelagem de software'],
    description: 'Um diagrama que mostra a interação entre objetos ao longo do tempo, ilustrando a sequência de mensagens trocadas entre os objetos em um cenário específico.'
  },

  {
    name: 'Diagrama de atividades',
    categories: ['Modelagem de software'],
    description: 'Um diagrama que descreve o fluxo de atividades em um processo de negócio ou em um comportamento específico de um sistema, mostrando ações, decisões, ramificações e sincronizações.'
  },
  {
    name: 'Diagrama de componentes',
    categories: ['Modelagem de software'],
    description: 'Um diagrama que representa a estrutura modular de um sistema, identificando os componentes principais e as dependências entre eles.'
  },
  {
    name: 'Diagrama de casos de uso',
    categories: ['Modelagem de software'],
    description: 'Um diagrama que descreve a interação entre os atores (usuários ou sistemas externos) e o sistema, identificando os casos de uso e os cenários correspondentes.'
  },
  {
    name: 'Diagrama de estados',
    categories: ['Modelagem de software'],
    description: 'Um diagrama que mostra os possíveis estados de um objeto ou de um sistema e as transições entre esses estados, representando o comportamento ao longo do tempo.'
  },
    
      
  // Negócios e desenvolvimento de produtos
  {
    name: 'Stakeholder',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Qualquer indivíduo ou grupo que tenha interesse ou seja afetado por um projeto, produto ou organização, incluindo clientes, acionistas, funcionários e parceiros.'
  },
  {
    name: 'Product Owner (PO)',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'O membro da equipe responsável por definir e priorizar os requisitos de um produto, representando os interesses dos stakeholders e garantindo o sucesso do produto.'
  },
  {
    name: 'Product Manager (PM)',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'O profissional responsável por definir a estratégia e o roadmap de um produto, coordenando as atividades de desenvolvimento e garantindo que o produto atenda às necessidades dos clientes e do mercado.'
  },
  {
    name: 'ROI (Return on Investment)',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Um indicador financeiro que mede o retorno obtido a partir de um investimento realizado, permitindo avaliar a eficiência e a rentabilidade do investimento.'
  },
  {
    name: 'SWOT (Strengths, Weaknesses, Opportunities, Threats)',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Uma análise que identifica os pontos fortes, pontos fracos, oportunidades e ameaças de um negócio, auxiliando na formulação de estratégias e tomadas de decisão.'
  },
  {
    name: 'MVP',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Minimum Viable Product. Uma versão inicial de um produto com um conjunto mínimo de recursos, projetada para ser lançada rapidamente e obter feedback dos usuários.'
  },
  {
    name: 'Protótipo',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Uma versão inicial ou simplificada de um produto ou sistema, usada para validar conceitos, testar funcionalidades e obter feedback dos usuários antes da implementação completa.'
  },
  {
    name: 'Persona',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Representação fictícia de um usuário ideal, baseada em dados demográficos, comportamentais e necessidades reais. Auxilia no entendimento dos usuários-alvo e na tomada de decisões para projetar produtos e serviços mais relevantes.'
  },
  {
    name: 'Benchmarketing',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Processo de comparar as estratégias e resultados de marketing de uma empresa em relação aos concorrentes ou referências do mercado, buscando identificar melhores práticas e oportunidades de melhoria.'
  },
  {
    name: 'Ciclo de vida do produto',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'As diferentes etapas pelas quais um produto passa, desde o conceito inicial, desenvolvimento, lançamento, crescimento, maturidade até a eventual retirada do mercado.'
  },
  {
    name: 'Escopo',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'A definição e o conjunto de funcionalidades, requisitos e objetivos de um projeto ou produto. Determina o que está dentro e fora do âmbito do trabalho.'
  },
  {
    name: 'KPI (Key Performance Indicator)',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Indicador-chave de desempenho que mede o progresso em relação a metas e objetivos específicos de um projeto, produto ou organização.'
  },
  {
    name: 'Scrum',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Um framework ágil para gerenciamento de projetos que enfatiza a colaboração, a transparência e a entrega iterativa de software.'
  },
  {
    name: 'Validação',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'O processo de testar e verificar se um produto, serviço ou ideia atende às necessidades e expectativas dos clientes e usuários.'
  },
  {
    name: 'OKR (Objectives and Key Results)',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Metodologia de definição e acompanhamento de metas que ajuda as equipes a alinhar esforços, estabelecer objetivos claros e mensuráveis, e acompanhar os resultados alcançados.'
  },
  {
    name: 'Metodologias ágeis',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Abordagens de desenvolvimento de software que enfatizam a colaboração, a flexibilidade, a adaptação contínua e a entrega de valor ao cliente.'
  },
  {
    name: 'Kanban',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Método de gerenciamento de fluxo de trabalho que permite acompanhar o progresso das tarefas de forma clara e visual. Utiliza um quadro com colunas que representam as etapas do processo, onde as tarefas são movidas de uma coluna para outra à medida que são concluídas.'
  },
  
  {
    name: 'Lean',
    categories: ['Negócios e desenvolvimento de produtos'],
    description: 'Filosofia e abordagem de gestão que visa maximizar o valor entregue ao cliente, eliminando desperdícios e otimizando os processos. Baseia-se em princípios como identificação e eliminação de atividades desnecessárias, melhoria contínua, envolvimento dos colaboradores e foco na qualidade.'
  },
    
  // Programação e desenvolvimento
  { 
    name: 'Algoritmo', 
    categories: ['Programação e desenvolvimento', 'Fundamentos de computação'], 
    description: 'Sequência de instruções passo a passo para resolver um problema ou realizar uma tarefa.' 
  },
  {
    name: 'Stack',
    categories: ['Programação e desenvolvimento'],
    description: 'Uma estrutura de dados em que os elementos são adicionados e removidos apenas no topo, seguindo o princípio LIFO (Last In, First Out).'
  },
  {
    name: 'Batch',
    categories: ['Programação e desenvolvimento'],
    description: 'A execução de um conjunto de comandos ou tarefas em sequência, sem intervenção direta do usuário.'
  },
  {
    name: 'Java',
    categories: ['Programação e desenvolvimento'],
    description: 'Uma linguagem de programação popular, conhecida por sua portabilidade e ampla adoção em aplicações empresariais.'
  },
  {
    name: 'JavaScript',
    categories: ['Programação e desenvolvimento'],
    description: 'Linguagem de programação usada principalmente para adicionar interatividade a uma página web.'
  },
  {
    name: 'DOM',
    categories: ['Programação e desenvolvimento'],
    description: 'Document Object Model. Uma representação em memória de um documento HTML, XML ou XHTML, que permite a interação e manipulação dos elementos e conteúdos do documento.'
  },
  {
    name: 'Variável',
    categories: ['Programação e desenvolvimento', 'Fundamentos de computação'],
    description: 'Um local na memória que armazena um valor, podendo ser acessado e manipulado durante a execução de um programa.'
  },
  {
    name: 'Estrutura de dados',
    categories: ['Programação e desenvolvimento', 'Fundamentos de computação'],
    description: 'Formas de organizar e armazenar dados de maneira eficiente, como listas, pilhas, filas e árvores.'
  },
  { 
    name: 'Parâmetro', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Um valor que pode ser passado para uma função ou programa para influenciar seu comportamento ou resultado.' 
  },
  { 
    name: 'Função', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Um bloco de código que recebe um conjunto de entradas, realiza um conjunto de operações e retorna um resultado.' 
  },
  { 
    name: 'Expressão booleana', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Uma expressão que pode ser avaliada como verdadeira ou falsa.' 
  },
  { 
    name: 'Resposta booleana', 
    categories: ['Programação e desenvolvimento'], 
    description: 'O resultado da avaliação de uma expressão booleana, que pode ser verdadeiro ou falso.' },
  { 
    name: 'Loop', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Uma estrutura de controle que permite que um conjunto de instruções seja repetido várias vezes até que uma condição seja atendida.' },
  { 
    name: 'Thread', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Um fluxo de execução em um programa. Vários threads podem ser executados simultaneamente dentro de um único processo.' },
  { 
    name: 'Programação orientada a objetos', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Um paradigma de programação que organiza o código em torno de objetos, que representam entidades com características e comportamentos.' 
  },
  { 
    name: 'Programação orientada a aspectos', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Um paradigma de programação que permite separar preocupações transversais, como logging e segurança, do código principal de uma aplicação.' 
  },
  { 
    name: 'Programação orientada a eventos', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Um paradigma de programação em que o fluxo de execução é determinado por eventos, como ações do usuário ou notificações do sistema.' 
  },
  { 
    name: 'Programação estruturada', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Um paradigma de programação baseado na organização lógica e sequencial de instruções para resolver um problema.' 
  },
  { 
    name: 'Código hexadecimal', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Uma representação numérica de base 16, amplamente utilizada para representar valores binários de forma mais compacta e legível.' 
  },
  { 
    name: 'JVM', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Java Virtual Machine. Uma máquina virtual que executa programas Java convertendo o bytecode Java em instruções executáveis para a plataforma de destino.' 
  },
  { 
    name: 'Array', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo, acessíveis por meio de um índice.' 
  },
  {
    name: 'Desenvolvimento Mobile',
    categories: ['Programação e desenvolvimento'],
    description: 'O processo de criação de aplicativos móveis para dispositivos como smartphones e tablets.'
  },
  {
    name: 'Padrões de projeto',
    categories: ['Programação e desenvolvimento'],
    description: 'Soluções comprovadas e recomendadas para problemas recorrentes no desenvolvimento de software, visando a reutilização de soluções e a melhoria da qualidade do código.'
  },
  {
    name: 'Desenvolvimento Full-Stack',
    categories: ['Programação e desenvolvimento'],
    description: 'O desenvolvimento de software que abrange tanto o desenvolvimento front-end quanto o back-end de uma aplicação.'
  },
  {
    name: 'Backlog',
    categories: ['Programação e desenvolvimento', 'Negócios e desenvolvimento de produtos'],
    description: 'Uma lista de tarefas ou requisitos a serem realizados em um projeto, geralmente organizados por prioridade.'
  },
  {
    name: 'Refatorar',
    categories: ['Programação e desenvolvimento'],
    description: 'Melhorar a estrutura interna de um código fonte sem alterar seu comportamento externo, com o objetivo de facilitar a manutenção, melhorar a legibilidade e reduzir a complexidade.'
  },
  {
    name: 'Code Review',
    categories: ['Programação e desenvolvimento'],
    description: 'Uma prática de desenvolvimento de software em que o código é revisado por outros membros da equipe para garantir sua qualidade, legibilidade e conformidade com as diretrizes.'
  },
  {
    name: 'Fazer deploy',
    categories: ['Programação e desenvolvimento'],
    description: 'Implantar uma aplicação ou sistema em um ambiente de produção, tornando-o disponível para uso.'
  },
  { 
    name: 'Clean Code', 
    categories: ['Programação e desenvolvimento'], 
    description: 'Estilo de programação que prioriza legibilidade, simplicidade e manutenibilidade do código a fim de facilitar a compreensão, manutenção e colaboração entre desenvolvedores.' 
  },
  {
    name: 'Framework',
    categories: ['Programação e desenvolvimento'],
    description: 'Uma estrutura de trabalho que fornece um conjunto de ferramentas e bibliotecas para facilitar o desenvolvimento de software.'
  },
  {
    name: 'Endpoint',
    categories: ['Programação e desenvolvimento'],
    description: 'Um ponto de extremidade de uma API, que é uma URL específica usada para acessar um recurso ou executar uma ação.'
  },
  {
    name: 'Interface de Programação de Aplicativos (API)',
    categories: ['Programação e desenvolvimento'],
    description: 'Conjunto de regras e protocolos que permite que diferentes softwares se comuniquem e compartilhem dados entre si.'
  },
  {
    name: 'Desenvolvimento Back-end',
    categories: ['Programação e desenvolvimento'],
    description: 'O processo de criação da lógica e das funcionalidades de um site ou aplicativo, que ocorre nos bastidores e geralmente envolve o gerenciamento de dados.'
  },
  {
    name: 'Serviço web',
    categories: ['Programação e desenvolvimento'],
    description: 'Componente de software que pode ser acessado pela rede utilizando protocolos da web para oferecer funcionalidades específicas. Os serviços web permitem a integração de sistemas distribuídos e a comunicação entre diferentes aplicativos através de intefaces personalizadas.'
  },
  {
    name: 'Landing Page',
    categories: ['Programação e desenvolvimento'],
    description: 'Uma página da web projetada especificamente para promover um produto, serviço ou ação, com o objetivo de converter visitantes em clientes ou leads.'
  },
  {
    name: 'Desenvolvimento Front-end',
    categories: ['Programação e desenvolvimento'],
    description: 'O processo de criação da parte visual e interativa de um site ou aplicativo, que os usuários veem e interagem diretamente.'
  },    
  {
    name: 'HTML',
    categories: ['Programação e desenvolvimento'],
    description: 'HyperText Markup Language. Linguagem de marcação para criar a estrutura básica de uma página web.'
  },
  {
    name: 'CSS',
    categories: ['Programação e desenvolvimento'],
    description: 'Cascading Style Sheets. Linguagem de estilo para definir a aparência de uma página web.'
  },
  {
    name: 'Bug',
    categories: ['Programação e desenvolvimento'],
    description: 'Um erro ou falha em um software ou sistema que causa comportamento inesperado.'
  },
  {
    name: 'Depurar ou debugar',
    categories: ['Programação e desenvolvimento'],
    description: 'O processo de encontrar, analisar e corrigir bugs em um programa de computador.'
  },
      
  // Redes e infraestrutura
  { 
    name: 'Servidor', 
    categories: ['Programação e desenvolvimento', 'Redes e infraestrutura'], description: 'Um computador ou sistema que fornece serviços e recursos para outros computadores em uma rede.' 
  },
  {
    name: 'Mainframe',
    categories: ['Redes e infraestrutura'],
    description: 'Um computador de grande porte e alta capacidade de processamento, projetado para lidar com grandes volumes de dados e executar tarefas críticas.'
  },
  { 
    name: 'Nuvem (Cloud)', 
    categories: ['Redes e infraestrutura'], 
    description: 'Refere-se a servidores e armazenamento remotos acessíveis pela internet, que permitem o acesso a recursos sob demanda.' 
  },
  { 
    name: 'Computação em nuvem', 
    categories: ['Redes e infraestrutura', 'Tecnologias emergentes'], 
    description: 'A entrega de serviços de computação, como armazenamento, processamento e software, pela internet, em vez de recursos locais.' 
  },
  { 
    name: 'Edge Computing', 
    categories: ['Redes e infraestrutura', 'Tecnologias emergentes'], 
    description: 'Um paradigma de computação distribuída em que o processamento e armazenamento de dados são realizados em dispositivos locais próximos à fonte de dados, reduzindo a latência e o tráfego na rede.' 
  },
  { 
    name: 'Datacenter', 
    categories: ['Redes e infraestrutura'], 
    description: 'Um ambiente projetado para abrigar um grande número de servidores e equipamentos relacionados, geralmente usado para armazenamento, processamento e distribuição de dados.' 
  },    
  { 
    name: 'Cluster', 
    categories: ['Redes e infraestrutura'], 
    description: 'Um grupo de computadores ou servidores interconectados que trabalham juntos para fornecer maior poder de processamento ou disponibilidade.' 
  },
  { 
    name: 'DHCP', 
    categories: ['Redes e infraestrutura'], 
    description: 'Dynamic Host Configuration Protocol. Protocolo de rede que permite que dispositivos em uma rede obtenham automaticamente um endereço IP e outras configurações de rede, como máscara de sub-rede, gateway padrão e servidores DNS, de um servidor DHCP centralizado.' 
  },
  { 
    name: 'LAN', 
    categories: ['Redes e infraestrutura'], 
    description: 'Local Area Network. Uma rede de computadores que abrange uma área geográfica limitada, como um escritório, uma residência ou um campus.' 
  },
  { 
    name: 'WAN', 
    categories: ['Redes e infraestrutura'], 
    description: 'Wide Area Network. Uma rede de computadores que abrange uma área geográfica extensa, como uma cidade, um país ou até mesmo globalmente.' 
  },
  { 
    name: 'MAN', 
    categories: ['Redes e infraestrutura'], 
    description: 'Metropolitan Area Network. Uma rede de computadores que abrange uma área metropolitana, como uma cidade ou uma região.' 
  },
  { 
    name: 'P2P', 
    categories: ['Redes e infraestrutura'], 
    description: 'Peer-to-Peer. Um modelo de arquitetura de rede em que os computadores se comunicam diretamente entre si, sem a necessidade de um servidor central.' 
  },
  { 
    name: 'Broadcast', 
    categories: ['Redes e infraestrutura'], 
    description: 'O envio de pacotes de dados de um ponto para todos os pontos de uma rede.' 
  },
  { 
    name: 'Cliente', 
    categories: ['Programação e desenvolvimento', 'Redes e infraestrutura'], 
    description: 'Um dispositivo ou programa de computador que solicita serviços ou recursos de um servidor em uma rede.' 
  },
  { 
    name: 'Internet', 
    categories: ['Redes e infraestrutura'], 
    description: 'Uma rede global de computadores interconectados que permite a comunicação e o compartilhamento de informações em escala global.' 
  },
  { 
    name: 'Socket',
    categories: ['Redes e infraestrutura'],
    description: 'Um ponto final em uma conexão de rede, identificado por um endereço IP e um número de porta.' 
  },
  {
    name: 'VLAN',
    categories: ['Redes e infraestrutura'],
    description: 'Virtual Local Area Network. Uma rede local virtualmente separada dentro de uma rede física, usada para segmentar o tráfego e melhorar a segurança e o desempenho.'
  },
  {
    name: 'Internet Protocol (IP)',
    categories: ['Redes e infraestrutura'],
    description: 'Protocolo de comunicação responsável por identificar e encaminhar pacotes de dados em uma rede.'
  },
  {
    name: 'TCP/IP (Transmission Control Protocol/Internet Protocol)',
    categories: ['Redes e infraestrutura', 'Web'],
    description: 'Conjunto de protocolos de comunicação usado para conectar dispositivos em redes de computadores, incluindo a Internet. O TCP/IP define como os dados são enviados, roteados e recebidos na Internet.'
  },
  {
    name: 'Ethernet',
    categories: ['Redes e infraestrutura'],
    description: 'Tecnologia de rede com fio amplamente utilizada para conexões de área local (LAN), que define padrões para a transmissão de dados em cabos de par trançado ou fibras ópticas.'
  },
  {
    name: 'FTP (File Transfer Protocol)',
    categories: ['Redes e infraestrutura', 'Web'],
    description: 'Protocolo utilizado para transferir arquivos entre um cliente e um servidor na Internet, comumente usado para upload e download de arquivos em um servidor web.'
  },
  {
    name: 'SMTP (Simple Mail Transfer Protocol)',
    categories: ['Redes e infraestrutura', 'Web'],
    description: 'Protocolo usado para enviar e entregar e-mails através da Internet, que define as regras para a comunicação entre servidores de e-mail.'
  },
  {
    name: 'POP (Post Office Protocol)',
    categories: ['Redes e infraestrutura', 'Web'],
    description: 'Um protocolo de recebimento de e-mails utilizado pelos clientes de e-mail para recuperar mensagens de um servidor de e-mail remoto.'
  },
  {
    name: 'IMAP (Internet Message Access Protocol)',
    categories: ['Redes e infraestrutura', 'Web'],
    description: 'Um protocolo de recebimento de e-mails que permite aos clientes de e-mail acessar e gerenciar mensagens armazenadas em um servidor de e-mail remoto.'
  },
  {
    name: 'DNS (Domain Name System)',
    categories: ['Redes e infraestrutura', 'Web'],
    description: 'Sistema responsável por traduzir nomes de domínio legíveis por humanos em endereços IP numéricos usados pelos computadores para localizar recursos na Internet.'
  },
  {
    name: 'WebSocket',
    categories: ['Redes e infraestrutura', 'Web'],
    description: 'Protocolo de comunicação bidirecional que permite uma conexão persistente entre um cliente e um servidor, permitindo a transmissão de dados em tempo real.'
  },
  {
    name: 'Gateway',
    categories: ['Redes e infraestrutura'],
    description: 'Dispositivo ou software que atua como ponto de entrada ou saída para uma rede, permitindo a comunicação entre diferentes redes ou protocolos.'
  },
  {
    name: 'Hotspot',
    categories: ['Redes e infraestrutura'],
    description: 'Uma área com acesso à Internet sem fio, geralmente por meio de uma rede local sem fio (WLAN) ou de telefonia móvel.'
  },
  {
    name: 'Hub',
    categories: ['Redes e infraestrutura'],
    description: 'Um dispositivo que atua como um ponto central de conexão para dispositivos em uma rede, permitindo a comunicação entre eles.'
  },
  {
    name: 'Switch',
    categories: ['Redes e infraestrutura'],
    description: 'Um dispositivo de rede que conecta dispositivos em uma rede local (LAN) e encaminha pacotes de dados para seu destino correto.'
  },
  {
    name: 'Intranet',
    categories: ['Redes e infraestrutura'],
    description: 'Uma rede privada que utiliza tecnologias e protocolos da Internet para compartilhar informações e recursos dentro de uma organização.'
  },
  {
    name: 'Rede de computadores',
    categories: ['Redes e infraestrutura'],
    description: 'Uma infraestrutura que permite a conexão e comunicação entre diferentes dispositivos computacionais, permitindo a troca de informações e recursos.'
  },
  {
    name: 'Protocolo de rede',
    categories: ['Redes e infraestrutura'],
    description: 'Conjunto de regras e convenções que define o formato e a ordem das mensagens trocadas entre dispositivos em uma rede, garantindo a comunicação eficiente e confiável.'
  },
  {
    name: 'IPv4',
    categories: ['Redes e infraestrutura'],
    description: 'Internet Protocol version 4. A quarta versão do protocolo de Internet, que utiliza endereços IP compostos por 32 bits.'
  },
  {
    name: 'IPv6',
    categories: ['Redes e infraestrutura'],
    description: 'Internet Protocol version 6. A sexta versão do protocolo de Internet, que utiliza endereços IP compostos por 128 bits, permitindo um número muito maior de endereços disponíveis.'
  },

  // Segurança
  {
    name: 'LGPD',
    categories: ['Segurança'],
    description: 'Lei Geral de Proteção de Dados. Uma lei brasileira que regula o tratamento de dados pessoais por empresas e organizações, visando proteger a privacidade dos indivíduos.'
  },
  {
    name: 'Firewall',
    categories: ['Segurança'],
    description: 'Um sistema de segurança de rede que monitora e controla o tráfego de rede com base em um conjunto de regras de segurança.'
  },
  {
    name: 'Malware',
    categories: ['Segurança'],
    description: 'Software malicioso projetado para infiltrar-se em um sistema de computador ou rede sem o consentimento do usuário, com o objetivo de causar danos ou obter informações confidenciais.'
  },
  {
    name: 'Adware',
    categories: ['Segurança'],
    description: 'Software que exibe anúncios indesejados em um sistema, geralmente integrado a outros programas e instalado sem o conhecimento do usuário.'
  },
  {
    name: 'Criptografia',
    categories: ['Segurança'],
    description: 'A ciência e a prática de proteger informações sensíveis por meio da transformação de dados em uma forma ininteligível, geralmente usando algoritmos matemáticos e chaves de criptografia.'
  },
  {
    name: 'SSL',
    categories: ['Segurança'],
    description: 'Secure Sockets Layer. Um protocolo de segurança que garante a criptografia de comunicações entre clientes e servidores na Internet.'
  },
  {
    name: 'SHA',
    categories: ['Segurança'],
    description: 'Secure Hash Algorithm. Um conjunto de funções criptográficas amplamente utilizadas para garantir a integridade de dados e a segurança de informações sensíveis.'
  },
  {
    name: 'Virtual Private Network (VPN)',
    categories: ['Redes e infraestrutura', 'Segurança'],
    description: 'Uma rede privada virtual que estabelece uma conexão segura sobre uma rede pública, permitindo que usuários remotos acessem recursos de rede de forma segura.'
  },
  {
    name: 'SSH',
    categories: ['Segurança', 'Redes e infraestrutura'],
    description: 'Secure Shell. Um protocolo de rede que permite a comunicação segura entre dois computadores, especialmente para fins de administração remota.'
  },
  {
    name: 'Token',
    categories: ['Segurança'],
    description: 'Um dispositivo ou aplicativo gerador de códigos únicos e temporários, usado para autenticação de dois fatores e fortalecimento da segurança de contas e sistemas.'
  },
  {
    name: 'Autenticação',
    categories: ['Segurança'],
    description: 'Processo de verificação da identidade de um usuário ou sistema para garantir que apenas entidades autorizadas tenham acesso a recursos protegidos.'
  },
  {
    name: 'Princípios de Segurança da Informação',
    categories: ['Segurança'],
    description: 'Diretrizes fundamentais que orientam a proteção dos dados e sistemas de informação contra ameaças. São eles: confidencialidade, integridade, disponibilidade, autenticidade e não-repúdio.'
    },
    {
    name: 'Confidencialidade',
    categories: ['Segurança'],
    description: 'Princípio que visa garantir que as informações sejam acessíveis apenas por pessoas autorizadas, protegendo-as contra divulgação não autorizada.'
    },
    {
    name: 'Integridade',
    categories: ['Segurança'],
    description: 'Princípio que assegura que as informações sejam precisas, completas e protegidas contra alterações não autorizadas ou acidentais.'
    },
    {
    name: 'Disponibilidade',
    categories: ['Segurança'],
    description: 'Princípio que garante que as informações e os recursos relacionados estejam disponíveis para uso sempre que necessário, sem interrupções indevidas.'
    },
    {
    name: 'Autenticidade',
    categories: ['Segurança'],
    description: 'Princípio que confirma a origem e a autenticidade das informações, garantindo que elas sejam provenientes de fontes confiáveis e não tenham sido alteradas durante a transmissão ou armazenamento.'
    },
    {
    name: 'Não-repúdio ou irretratabilidade',
    categories: ['Segurança'],
    description: 'Princípio que impede que os participantes neguem a autoria ou o envio de informações, fornecendo mecanismos de prova que tornam as ações rastreáveis e irrefutáveis.'
    },
    {
    name: 'Segurança da Informação',
    categories: ['Segurança'],
    description: 'Campo multidisciplinar que se concentra na proteção dos ativos de informação contra ameaças.'
    },

  // Testes
  {
    name: 'Pentest',
    categories: ['Segurança', 'Testes'],
    description: 'Teste de penetração. Uma avaliação da segurança de um sistema de computador ou rede, com o objetivo de identificar vulnerabilidades e pontos fracos.'
  },
  {
    name: 'Teste A/B',
    categories: ['Testes'],
    description: 'Método de teste comparativo que envolve a apresentação de duas versões diferentes de um elemento, como uma página da web ou um anúncio, para diferentes usuários  para determinar qual versão é mais eficaz ou preferida.'
  },
  {
    name: 'Test-Driven Development (TDD)',
    categories: ['Testes'],
    description: 'Abordagem de desenvolvimento de software em que os testes automatizados são criados antes da implementação do código, orientando o design e garantindo a qualidade do software.'
  },
  {
    name: 'Teste de usabilidade',
    categories: ['Testes'],
    description: 'Tipo de teste realizado para avaliar a facilidade de uso e a experiência do usuário de um produto ou sistema, identificando problemas e áreas de melhoria.'
  },
  {
    name: 'Teste unitário',
    categories: ['Testes'],
    description: 'Tipo de teste de software que verifica se unidades individuais de código, como funções ou métodos, estão funcionando corretamente.'
  },
  {
    name: 'Teste de carga',
    categories: ['Testes'],
    description: 'Tipo de teste que avalia o desempenho e a capacidade de um sistema sob uma carga específica, simulando condições de uso real.'
  },
  {
    name: 'Teste de regressão',
    categories: ['Testes'],
    description: 'Tipo de teste que verifica se as alterações ou atualizações em um software não introduziram erros ou problemas em funcionalidades existentes.'
  },
  {
    name: 'Teste de integração',
    categories: ['Testes'],
    description: 'Tipo de teste que verifica a interação e a integração entre diferentes componentes ou módulos de um sistema, garantindo seu correto funcionamento em conjunto.'
  },
  {
    name: 'Teste de segurança',
    categories: ['Testes', 'Segurança'],
    description: 'Tipo de teste que avalia a robustez e a resistência de um sistema a ataques e vulnerabilidades de segurança, visando proteger os dados e as informações sensíveis.'
  },
  {
    name: 'Teste de desempenho',
    categories: ['Testes'],
    description: 'Tipo de teste que mede e avalia o desempenho e a eficiência de um sistema em diferentes condições e cargas de trabalho, identificando possíveis gargalos e otimizações.'
  },
  {
    name: 'Teste de aceitação',
    categories: ['Testes'],
    description: 'Tipo de teste realizado em colaboração com os stakeholders e usuários finais para verificar se o sistema atende aos requisitos e expectativas definidos, garantindo sua adequação ao uso pretendido.'
  },
  {
    name: 'Teste de regressão visual',
    categories: ['Testes'],
    description: 'Tipo de teste automatizado que verifica se as alterações no layout e na aparência visual de um aplicativo ou site introduziram problemas ou inconsistências visuais.'
  },
  {
    name: 'Teste de estresse',
    categories: ['Testes'],
    description: 'Tipo de teste que submete o sistema a condições extremas, excedendo seus limites normais de operação, para avaliar sua estabilidade e capacidade de recuperação.'
  },
  {
    name: 'Teste de acessibilidade',
    categories: ['Testes'],
    description: 'Tipo de teste que verifica se um aplicativo ou site atende aos padrões e diretrizes de acessibilidade, garantindo que pessoas com deficiências possam usá-lo sem barreiras.'
  },
    
  // Tecnologias emergentes
  { 
    name: 'Internet das Coisas (IoT)', 
    categories: ['Tecnologias emergentes'], 
    description: 'A rede de objetos físicos incorporados com sensores, software e conectividade que permitem coleta e troca de dados.' 
  },
  { 
    name: 'Big Data', 
    categories: ['Tecnologias emergentes'], 
    description: 'Refere-se a conjuntos de dados extremamente grandes e complexos que são difíceis de serem processados com métodos tradicionais.' 
  },
  { 
    name: 'Realidade Virtual (VR)', 
    categories: ['Tecnologias emergentes'], 
    description: 'Ambiente virtual criado por meio de tecnologia computacional, que simula a presença física do usuário em um ambiente gerado por computador.' 
  },
  { 
    name: 'Realidade Aumentada (AR)', 
    categories: ['Tecnologias emergentes'], 
    description: 'A sobreposição de elementos virtuais, como imagens, sons e objetos 3D, em um ambiente do mundo real, por meio de dispositivos tecnológicos, como smartphones ou óculos especiais.' 
  },
  { 
    name: 'Blockchain', 
    categories: ['Tecnologias emergentes'], 
    description: 'Sistema de registro e verificação de transações digitais descentralizado, transparente e seguro, que utiliza criptografia e distribuição em rede para garantir a integridade dos dados.' 
  },

  // Versionamento
  {
    name: 'Git',
    categories: ['Versionamento'],
    description: 'Sistema de controle de versão usado para gerenciar e controlar as alterações em projetos de desenvolvimento de software.'
  },
  {
    name: 'Dar push',
    categories: ['Versionamento'],
    description: 'Enviar as alterações feitas em um repositório local para um repositório remoto, tornando-as disponíveis para outros membros da equipe.'
  },
  {
    name: 'Dar pull',
    categories: ['Versionamento'],
    description: 'Obter as alterações feitas em um repositório remoto e incorporá-las ao repositório local, mantendo-o atualizado.'
  },
  {
    name: 'Pull Request (PR)',
    categories: ['Versionamento'],
    description: 'Um pedido de incorporação de alterações de um branch ou fork para outro branch, geralmente usado em fluxos de trabalho de desenvolvimento colaborativo.'
  },  
  {
    name: 'Branch',
    categories: ['Versionamento'],
    description: 'Uma ramificação separada no repositório de controle de versão que permite o desenvolvimento paralelo de recursos ou correções de bugs.'
  },
  {
    name: 'Merge',
    categories: ['Versionamento'],
    description: 'O processo de combinar as alterações de um branch ou ramificação em outro, fundindo as alterações em uma única linha de desenvolvimento.'
  },
  {
    name: 'Conflito de merge',
    categories: ['Versionamento'],
    description: 'Situação em que as alterações em dois branches conflitam entre si, exigindo a resolução manual das diferenças antes de realizar o merge.'
  },
  {
    name: 'Arquivo .gitignore',
    categories: ['Versionamento'],
    description: 'Arquivo especial em um repositório Git que lista os arquivos e diretórios que devem ser ignorados pelo controle de versão.'
  },
  {
    name: 'Versionamento',
    categories: ['Versionamento'],
    description: 'O controle e gerenciamento das diferentes versões de um arquivo ou conjunto de arquivos, permitindo o acompanhamento das alterações e a recuperação de versões anteriores.'
  },
  {
    name: 'Repositório',
    categories: ['Versionamento'],
    description: 'Um local centralizado para armazenar e gerenciar arquivos e versões de um projeto de software, facilitando o trabalho colaborativo e o controle de alterações.'
  },
  {
    name: 'GitFlow',
    categories: ['Versionamento'],
    description: 'Modelo de fluxo de trabalho de versionamento baseado no Git, que define um conjunto de diretrizes para a organização de branches e o gerenciamento de lançamentos em projetos de software.'
  },
  {
    name: 'Repositório local',
    categories: ['Versionamento'],
    description: 'Uma cópia do repositório de controle de versão em um sistema local, permitindo que um desenvolvedor faça alterações no código sem afetar diretamente o repositório remoto.'
  },
  {
    name: 'Repositório remoto',
    categories: ['Versionamento'],
    description: 'Uma cópia do repositório de controle de versão armazenada em um servidor remoto, compartilhada entre os membros de uma equipe de desenvolvimento.'
  },
  {
    name: 'Rollback',
    categories: ['Versionamento'],
    description: 'Reverter um sistema ou aplicação para uma versão anterior ou estado anterior, geralmente realizado quando uma atualização ou mudança causa problemas ou erros.'
  },
  {
    name: 'GitHub',
    categories: ['Programação e desenvolvimento', 'Versionamento'],
    description: 'Plataforma de hospedagem de código-fonte baseada em Git, usada para controle de versão e colaboração em projetos de desenvolvimento de software.'
  },

  // Web
  {
    name: 'Cookies',
    categories: ['Web'],
    description: 'Pequenos arquivos de texto armazenados no navegador do usuário que contêm informações sobre a interação do usuário com um site específico.'
  },
  {
    name: 'Hipertexto',
    categories: ['Web'],
    description: 'Texto eletrônico que contém links para outros documentos ou recursos, permitindo a navegação não linear e a recuperação de informações.'
  },
  {
    name: 'URL',
    categories: ['Web'],
    description: 'Uniform Resource Locator. Um endereço usado para acessar recursos na Web, como páginas da web, imagens ou arquivos.'
  },
  {
    name: 'Hiperlink',
    categories: ['Web'],
    description: 'Um elemento em um documento eletrônico que permite aos usuários acessarem rapidamente outras informações relacionadas, clicando em um texto ou imagem.'
  },
  {
    name: 'Hipermídia',
    categories: ['Web'],
    description: 'Sistema de informação que combina diferentes formas de mídia, como texto, imagens, áudio e vídeo, interligados por hiperlinks.'
  },
  {
    name: 'HTTP (Hypertext Transfer Protocol)',
    categories: ['Web', 'Redes e infraestrutura'],
    description: 'Protocolo de comunicação usado para transferir informações na World Wide Web. É a base para a comunicação entre clientes (navegadores) e servidores web.'
  },
  {
    name: 'HTTPS (Hypertext Transfer Protocol Secure)',
    categories: ['Web', 'Redes e infraestrutura'],
    description: 'Versão segura do protocolo HTTP que utiliza criptografia para proteger a comunicação entre clientes e servidores.'
  },
  {
    name: 'SEO',
    categories: ['Web'],
    description: 'Search Engine Optimization. O processo de otimização de um site para melhorar sua visibilidade e classificação nos resultados de busca, aumentando o tráfego orgânico.'
  },
  {
    name: 'CMS (Content Management System)',
    categories: ['Web'],
    description: 'Sistema que oferece uma interface amigável para criar, gerenciar e publicar conteúdo na web, mesmo sem conhecimentos avançados em programação.'
  },
  {
    name: 'REST (Representational State Transfer)',
    categories: ['Web', 'Programação e desenvolvimento'],
    description: 'Estilo arquitetural para projetar serviços web que utiliza os princípios fundamentais da web, como recursos identificáveis por URLs e operações baseadas em HTTP.'
  },
  {
    name: 'World Wide Web (WWW)',
    categories: ['Web'],
    description: 'Sistema de documentos interconectados e recursos na Internet que podem ser acessados através de navegadores. É uma das principais aplicações da internet e permite o compartilhamento e acesso a informações por meio de hiperlinks..'
  },
  {
    name: 'SOAP (Simple Object Access Protocol)',
    categories: ['Web', 'Programação e desenvolvimento'],
    description: 'Protocolo baseado em XML utilizado para troca de informações estruturadas em serviços web. Define um formato de mensagem e regras para comunicação entre aplicativos distribuídos.'
  },
  {
    name: 'API REST (Application Programming Interface - Representational State Transfer)',
    categories: ['Web', 'Programação e desenvolvimento'],
    description: 'Estilo arquitetural que define um conjunto de princípios e restrições para criar serviços web que sejam escaláveis, confiáveis e de fácil integração. As APIs RESTful utilizam os métodos HTTP para realizar operações em recursos representados como URLs.'
  },
];

export default termsData;