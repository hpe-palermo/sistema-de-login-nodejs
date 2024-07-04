
# Sistema de Login

Este é um sistema de login simples utilizando Node.js, Express, EJS e sessões.

## Descrição

Este projeto consiste em um sistema de login básico onde os usuários podem fazer login com um nome de usuário e senha predefinidos. Após o login, os usuários são redirecionados para uma página protegida. Se as credenciais forem inválidas, os usuários são redirecionados de volta para a página de login.

## Estrutura do Projeto

- `app.js`: Arquivo principal que configura o servidor Express e as middlewares.
- `router.js`: Define as rotas para o sistema de login.
- `views/`: Diretório que contém as páginas EJS (`index.ejs` e `logado.ejs`).

## Requisitos

- Node.js
- npm

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/sistema-de-login.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd sistema-de-login
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

## Uso

1. Inicie o servidor:

    ```bash
    node app.js
    ```

2. Abra o navegador e acesse `http://localhost:3000`.
