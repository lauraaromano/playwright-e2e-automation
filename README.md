# Projeto de Automação - SauceDemo + DummyJSON

Testes automatizados com Playwright + TypeScript.

- **Testes E2E (UI):** site https://www.saucedemo.com (e-commerce fake para prática de QA)
- **Testes de API:** API pública https://dummyjson.com (simula uma loja de produtos)

## Como rodar o projeto pela primeira vez

1. Clone o repositório:
```bash
   git clone <url-do-repositorio>
   cd <pasta-do-projeto>
```

2. Instale as dependências:
```bash
   npm install
```

3. Crie o arquivo `.env` a partir do exemplo:
```bash
   cp .env.example .env
```

4. Preencha o `.env` com:
```
   BASE_URL_UI=https://www.saucedemo.com
   BASE_URL_API=https://dummyjson.com
```

5. Rode os testes:
```bash
   npx playwright test
```