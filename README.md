# Api Node.Js

![administracao-de-banco-de-dados-mysql](https://github.com/JeffS1lva/api_movies/assets/118827532/af024aa4-7705-4f66-9dd4-1708c304a753)

## Descrição

A API de Cadastro de Filmes é uma aplicação em Node.js que permite aos usuários cadastrar filmes, fornecendo informações como título, descrição, nota e associando tags relacionadas a eles. Esta API utiliza um banco de dados SQLite para armazenar os dados de forma persistente e inclui funcionalidades de autenticação de usuário com registro de e-mail, criptografia de senhas, permissões de atualização de usuário e registro de horário de criação de conta.
 
## Modelo de Banco de Dados 📊
A estrutura do banco de dados é baseada no seguinte diagrama:

![Captura de ecrã de 2024-03-23 23-15-16](https://github.com/JeffS1lva/api_movies/assets/118827532/0da64c82-2db8-4772-a578-efefd6a8d37a)

## Tabela de Usuários (users) 👤
- **Id:** Identificador único do usuário (inteiro, chave primária)
- **Nome do usuário:** Nome do usuário (texto)
- **E-mail do usuário:** Endereço de e-mail do usuário (texto, único)
- **Senha do usuário:** Senha do usuário criptografada (texto)
- **Avatar do usuário:** URL do avatar do usuário (texto)
- **Data de criação:** Data de criação da conta do usuário (timestamp)
- **Data de edição:** Data da última edição da conta do usuário (timestamp)
## Tabela de Anotações de Filmes (movies_notes) 📝
- **Id:** Identificador único da anotação (inteiro, chave primária)
- **Título do filme:** Título do filme (texto)
- **Descrição do filme:** Descrição do filme (texto)
- **Nota que o usuário deu para o filme:** Nota atribuída pelo usuário ao filme (inteiro, varia de 1 a 5)
- **Id do usuário:** Identificador do usuário que criou a anotação (inteiro, chave estrangeira)
- **Data de criação:** Data de criação da anotação (timestamp)
- **Data de edição:** Data da última edição da anotação (timestamp)
## Tabela de Tags (movie_tags) 🏷️
- **Id:** Identificador único da tag (inteiro, chave primária)
- **Nome da tag:** Nome da tag associada ao filme (texto)
- **Id da anotação:** Identificador da anotação à qual a tag está associada (inteiro, chave estrangeira)
## Funcionamento da Api 🚀
A Api oferece as seguintes funcionalidades:

- **Registro de Usuários:** Permite o registro de novos usuários fornecendo nome, e-mail, senha e avatar.
- **Autenticação de Usuários:** Permite que os usuários façam login utilizando o e-mail e a senha registrados.
- **Atualização de Usuários:** Permite aos usuários atualizarem suas informações cadastradas como nome, e-mail e senha.
- **Recuperação de Usuários:** Permite aos usuários recuperarem suas informações cadastradas.
- **Cadastro de Anotações de Filmes:** Permite aos usuários cadastrarem informações sobre filmes, incluindo título, descrição, nota e tags associadas.
- **Recuperação de Anotações de Filmes:** Permite aos usuários recuperarem suas anotações de filmes cadastradas.
- **Atualização de Anotações de Filmes:** Permite aos usuários atualizarem as informações das anotações de filmes cadastradas.
- **Exclusão de Anotações de Filmes:** Permite aos usuários excluírem suas anotações de filmes cadastradas.

A API utiliza criptografia de senhas para garantir a segurança dos usuários e implementa a validação de e-mail durante o processo de registro. Além disso, registra a data de criação e a última data de edição tanto para usuários quanto para anotações de filmes.

## Rodando Localmente ⚙️

Antes de começar, é necessário preparar o ambiente de desenvolvimento.

**Para Windows:**
- Instale o [Node.js.](https://nodejs.org/en)
- Baixe e [instale o Visual Studio Code (VSCode).](https://code.visualstudio.com/)
- Abra o terminal (Prompt de Comando ou PowerShell) para executar comandos.

**Para Linux e Mac:**
- Instale o Node.js:
- No Linux, use o gerenciador de pacotes de sua distribuição. Por exemplo, no Ubuntu: ```sudo apt-get install nodejs.```
- Não Mac, use [Homebrew ](https://brew.sh/): ```brew install node.```
- Instale o [Visual Studio Code](https://code.visualstudio.com/)

**Para obter o código do Projeto:**
- Se você já tem uma conta no github: ```git clone https://github.com/seu-usuario/nome-do-repositorio.git```
- Se não tiver uma conta no GitHub, [Crie uma conta.](https://github.com/)

**Instalação**

Após clonar o projeto, instale as dependências:
- Abra o terminal na pasta do projeto.
- Execute ```npm install```(ou ```yarn install``` se você estiver usando Yarn).

**Executando Projeto**

- Execute ```npm run dev``` para iniciar o servidor de desenvolvimento.
- Execute as migrações do Banco de Dados: ```npx knex run migrate```

## Tecnologias 🛠️

- Node.js
- Express.js
- Knex.js
- SQLite
- Bcrypt.js
- Beekeeper Studio
- Insomnia

## Links 🔗 
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jefferson-silva-2258ab230/)

## Licença 📝 

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [MIT](https://choosealicense.com/licenses/mit/) para obter mais detalhes.

  



