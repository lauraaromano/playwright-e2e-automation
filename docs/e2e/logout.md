# Casos de Teste — Logout

## Logout

### CT-008 — Realizar logout com sucesso

**Objetivo:**  
Validar se o usuário consegue encerrar sua sessão corretamente.

**Pré-condições:**  
Usuário autenticado na aplicação.

**Dados de teste:**

- Usuário: `standard_user`
- Senha: `secret_sauce`

**Passos:**

1. Realizar login com credenciais válidas.
2. Acessar a aplicação.
3. Selecionar a opção de logout.
4. Validar a página exibida.

**Resultado esperado:**  
O usuário deve ser desconectado com sucesso e ser direcionado para a página de login.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo