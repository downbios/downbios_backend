# 📦 DownBios Backend

Este é o backend da plataforma **DownBios**, desenvolvido em **Node.js com TypeScript**, integrando upload de arquivos `.bin` e `.rom` para o **Dropbox**, salvando os metadados em um banco de dados **SQLite**, e expondo rotas HTTP para integração com o frontend.

---

## 🧱 Stack utilizada

- [x] Node.js
- [x] TypeScript
- [x] Express
- [x] Multer (upload de arquivos)
- [x] Dropbox SDK
- [x] SQLite (usando `sqlite3` e `better-sqlite3`)
- [x] dotenv
- [x] ts-node-dev (ambiente de desenvolvimento)

---

## 🚀 Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/downbios-backend.git
cd downbios-backend
```

## 2. Instale as dependências

```bash

npm install
```

### 3. Crie o arquivo .env

Crie um arquivo .env na raiz do projeto e adicione sua chave de acesso do Dropbox:

`DROPBOX_ACCESS_TOKEN=seu_token_aqui`

### 4. Execute o servidor

```bash
npx ts-node-dev src/server.ts
```

O backend será iniciado em: http://localhost:3001

### 📂 Estrutura de pastas

```bash
downbios-backend/
├── src/
│   ├── routes/
│   │   └── Upload.ts         # Rotas relacionadas a upload
│   ├── services/
│   │   └── dropbox.ts        # Serviço de integração com Dropbox
│   ├── database/
│   │   ├── db.ts             # Inicialização e conexão com o SQLite
│   │   └── downbios.sqlite   # Banco de dados local (ignorado no git)
│   └── server.ts             # Entrada principal da aplicação
├── .gitignore
├── .env                     # Variáveis de ambiente (não versionado)
├── package.json
├── tsconfig.json
└── README.md
```

## 👨‍💻 Autor

Feito com 💻 por [Ian Adson]
