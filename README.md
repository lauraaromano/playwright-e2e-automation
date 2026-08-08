# Projeto de Automação - SauceDemo + DummyJSON

Testes automatizados com **Playwright + TypeScript**, cobrindo tanto testes de UI (E2E) quanto testes de API.

- **Testes E2E (UI):** [saucedemo.com](https://www.saucedemo.com) — e-commerce fake para prática de QA
- **Testes de API:** [dummyjson.com](https://dummyjson.com) — API pública que simula uma loja de produtos (não persiste dados reais)

---

## 📁 Estrutura do projeto

```
tests/
├── e2e/                    # Testes de UI (login, cart, checkout, inventory, logout)
├── api/                    # Testes de API (CRUD de produtos via DummyJSON)
└── support/
    ├── actions/            # Page Objects e classes de API (Login.ts, Cart.ts, Checkout.ts, Inventory.ts, ProductsApi.ts)
    ├── fixtures/            # Dados de teste em JSON (users.json, products.json, checkoutinfo.json)
    ├── types/               # Interfaces TypeScript (Product.ts)
    └── index.ts             # Barrel file — reexporta tudo, para importar de um lugar só
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (instalado junto com o Node.js)

---

## 🚀 Como rodar o projeto pela primeira vez

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd <pasta-do-projeto>
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Instale os navegadores do Playwright:**
   ```bash
   npx playwright install
   ```

4. **Crie o arquivo `.env` a partir do exemplo:**
   ```bash
   cp .env.example .env
   ```

5. **Preencha o `.env`** (esses valores já são os padrões do projeto, pois as duas URLs são públicas):
   ```
   BASE_URL_UI=https://www.saucedemo.com
   BASE_URL_API=https://dummyjson.com
   ```

6. **Rode os testes:**
   ```bash
   npx playwright test
   ```

---

## ▶️ Comandos úteis

| Comando | O que faz |
|---|---|
| `npx playwright test` | Roda todos os testes (E2E + API) |
| `npx playwright test tests/e2e` | Roda somente os testes de UI |
| `npx playwright test tests/api` | Roda somente os testes de API |
| `npx playwright test --ui` | Abre o modo UI interativo do Playwright |
| `npx playwright test --headed` | Roda os testes com o navegador visível |
| `npx playwright show-report` | Abre o relatório HTML da última execução |

---

## 🧪 O que já está coberto

### Testes E2E (UI)
- Login (cenários de sucesso e erro)
- Carrinho de compras
- Checkout
- Listagem de produtos (inventory)
- Logout

### Testes de API
CRUD completo de produtos via DummyJSON, usando a classe `ProductsApi.ts`:
- `GET /products` — lista todos os produtos
- `GET /products/:id` — busca produto por ID (inclui caso de produto inexistente → 404)
- `POST /products/add` — cria um novo produto
- `PUT /products/:id` — atualiza um produto
- `DELETE /products/:id` — deleta um produto

---

## 🔄 CI/CD

O projeto roda automaticamente no **GitHub Actions** a cada `push` ou Pull Request na branch `main`. O workflow está em `.github/workflows/playwright.yml` e:
- Instala dependências e navegadores
- Cria o `.env` a partir dos *Secrets* configurados no repositório (`BASE_URL_UI`, `BASE_URL_API`)
- Roda todos os testes
- Gera o relatório HTML como artefato para download

Veja os resultados na aba **Actions** do repositório no GitHub.

---

## 📝 Notas

- O `.env` **não** é versionado (está no `.gitignore`). Use sempre o `.env.example` como referência.
- Este projeto tem fins de estudo/portfólio em automação de testes de QA.
