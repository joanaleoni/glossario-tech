# GlossárioTech
![image](https://lh3.googleusercontent.com/pw/AJFCJaUBpjkOjUqXVAO71FTRF9fZ1lY2aXREDk81MKIT9-RFkpH6AMckGGbg30GJgf44yYKqL3DoZ318N2-vgn6RrJ65GTfq2TcWETXhch-gkNpTjm7PxJeQOvBf6jutEKnAYMKprvHjJuFYHllEB5LcGjqGmkf9MNiHSAE7s-BB8OZPCaftH4plKc_s9QUCCcf2xhrLZsyz9Ay7A4XqTYIzDDrYQkGNGSnXXQxmJWvArdz3lhw3KaNS5hWUdSndNaMN63XgBq5xf1zI0aWJL8R5juxpnETnqws-94H6IPrLMTQXsJvMXvNEdeq-DpgrZ1LHvzbgm2LBooQ8scNAEOCwghb4q1QiIpEfN6O7Yk7K-6dM2pCp5x3ggk-oc489V-pizVQXW1ZBujQCUcZ1R2DTLBd-aFfQFIXZAYBzW5h5bkOuT1R-Bmct2sXmgQMOpKk-jT28K_4lWFbNtkI8guKmZmjfgBxgjrteeOkZBhdq0jjrxT01vReiNE05D-lewDqP75BorMtLsMEK0tZogdv-wIlgutCfuNaRGRl_Q2KPJhsi_1qqMeF30F_DKLiZeiDojUwVVyTnzvELnkHpBGyYWWC0jpf5HMZqqNvV5wXU-5030GK2JefzjZQG_ntnW1CcMF1jCvTPn4Xcn5EWdr_8klxTAi0Uo6XpoZRSln-jxPDOv9q6BbQs_jTSisxwcRPqAbd71st3g7oqhEMIKuOu5cmaehZJgC1zDOT0xG4ukJDyxCBJ-H9f63wV1tYJsZcD5IRewGCfyphddI5j_gJvakoSJU5mN8JidwAsxlOEq92bf1QWrAwlBD_AsX-6idfkaEEZTpq8EYwJBTLZWFWQH4ODHfQwUf6G0X0pmMytFfBZTnAsymscuy8pIfMlz0VwcZwWALon2FjDVpPw4nyGKLX5Acs_Ltz93Q76LhXjOKygvHR-aYzQkA5jwBfZMqg1RocaA2Xdf_gLa8_vKmXcHc8Hu8BvkA=w859-h290-s-no?authuser=0)

Plataforma online que reúne termos técnicos utilizados no campo da tecnologia. Cobrindo diferentes disciplinas, como desenvolvimento de software, DevOps, IA e muito mais, o GlossárioTech é um recurso para profissionais, estudantes e entusiastas da área que desejam expandir e aprimorar seu vocabulário tecnológico. 

## 🔗 Acesse
Navegue pelos termos de forma fácil e intuitiva em [glossariotech.netlify.app](https://glossariotech.netlify.app)  

## 💻 Tecnologias utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML 5:** linguagem de marcação utilizada para a estruturação e apresentação do conteúdo.
- **CSS 3:** linguagem de estilização utilizada para estilizar os elementos HTML.
- **JavaScript:** linguagem utilizada para adicionar interatividade às páginas.
- **React:** biblioteca JavaScript de código aberto utlizada para construir interfaces de usuário.

## 📂 Estrutura do projeto
O projeto segue a seguinte estrutura de diretórios:  

```
├── 📁 glossario-tech/
│ ├── 📁 public/
│ │ ├── 📄 favicon.ico
│ │ ├── 📄 index.html
│ │ ├── 📄 logo.png
│ │ ├── 📄 manifest.json
│ │ └── 📄 robots.txt
│ ├── 📁 src/
│ │ ├── 📁 assets/
│ │ │ └── 📄 image-logo.png
│ │ ├── 📁 components/
│ │ │ ├── 📄 Card.js
│ │ │ ├── 📄 Filters.js
│ │ │ ├── 📄 Footer.js
│ │ │ ├── 📄 Glossary.js
│ │ │ └── 📄 Header.js
│ │ ├── 📁 data/
│ │ │ └── 📄 termsData.js
│ │ ├── 📁 styles/
│ │ │ ├── 📄 App.css
│ │ │ └── 📄 index.css
│ │ ├── 📄 App.js
│ │ ├── 📄 App.test.js
│ │ ├── 📄 index.js
│ │ ├── 📄 reportWebVitals.js
│ │ └── 📄 setup.js
│ ├── 📄 .gitignore
│ ├── 📄 LICENSE
│ ├── 📄 package-lock.json
│ ├── 📄 package.json
│ └── 📄 README.md
```

A estrutura do projeto consiste em:  
- `📁 public/` contém arquivos públicos do projeto.
- `📁 src/` contém os arquivos-fonte do projeto.
  - `📁 assets/` armazena recursos estáticos, como imagens utilizadas no projeto.
  - `📁 components/` contém os componentes utilizados para criar a interface de usuário.
    - `📄 Card.js` componente utilizado para exibir os termos do glossário em formato de card.
    - `📄 Filters.js` componente de filtros usados para filtrar os termos do glossário. Inclui um campo de busca e um seletor de categorias.
    - `📄 Footer.js` componente de rodapé exibido na parte inferior do site.
    - `📄 Glossary.js` componente utilizado para exibição do glossário.
    - `📄 Header.js` componente de cabeçalho exibido na parte superior do site.
  - `📁 data/` armazena dados do projeto.
    - `📄 termsData.js` arquivo contendo um array com os termos do glossário.
  - `📁 styles/` contém arquivos de estililização.
    - `📄 App.css` arquivo de estilos para o componente App.js.
    - `📄 index.css` arquivo dos estilos principais do projeto, incluindo importações das fontes, variáveis CSS e os estilos para elementos base.
  - `📄 App.js` componente principal da aplicação.
  - `📄 App.test.js` contém os testes para o componente App.js.
  - `📄 index.js` ponto de entrada do aplicativo, onde o ReactDOM.render é chamado para renderizar a aplicação na página HTML.
  - `📄 reportWebVitals.js` arquivo de relatório de métricas de desempenho da web.
  - `📄 setup.js` arquivo de configuração para os testes.

## ⚡ Como rodar o projeto
Siga os passos abaixo para executar o projeto em sua máquina local:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download e instalar o Node.js no site oficial: https://nodejs.org.
  
2. Faça o clone deste repositório em um diretório de sua preferência utilizando o comando abaixo:  
`git clone https://github.com/joanaleoni/glossario-tech.git`  
  
3. Navegue até o diretório raiz do projeto.  
`cd glossario-tech`  
  
4. Instale as dependências do projeto executando o seguinte comando no terminal:  
`npm install`  
  
5. Após a conclusão da instalação das dependências, você pode iniciar o aplicativo com o comando:  
`npm start`  
  
6. O aplicativo será aberto automaticamente em seu navegador padrão no endereço http://localhost:3000.

## 📑 Como executar os testes
Para executar os testes e visualizar os resultados no terminal, navegue até o diretório raiz do projeto e execute o comando `npm test`.

## ⚖️ Licença
Este projeto está licenciado sob a [MIT License](https://opensource.org/license/mit/).
