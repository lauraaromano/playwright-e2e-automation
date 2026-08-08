# Casos de Teste — Login

## Login

### CT-001 — Realizar login com credenciais válidas

**Objetivo:**  
Validar se o usuário consegue realizar login utilizando credenciais válidas.

**Pré-condições:**  
Aplicação disponível e usuário válido cadastrado.

**Dados de teste:**

- Usuário: `standard_user`
- Senha: `secret_sauce`

**Passos:**

1. Acessar a página de login.
2. Informar um usuário válido.
3. Informar uma senha válida.
4. Clicar no botão de login.

**Resultado esperado:**  
O usuário deve realizar login com sucesso e acessar a aplicação.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-002 — Não realizar login com usuário e senha vazios

**Objetivo:**  
Validar se o sistema impede o login quando os campos de usuário e senha não são preenchidos.

**Pré-condições:**  
Aplicação disponível.

**Dados de teste:**

- Usuário: vazio
- Senha: vazia

**Passos:**

1. Acessar a página de login.
2. Deixar o campo de usuário vazio.
3. Deixar o campo de senha vazio.
4. Clicar no botão de login.

**Resultado esperado:**  
O login não deve ser realizado e o sistema deve informar que o usuário é obrigatório.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-003 — Não realizar login com usuário válido e senha inválida

**Objetivo:**  
Validar se o sistema impede o login quando a senha informada está incorreta.

**Pré-condições:**  
Aplicação disponível e usuário válido cadastrado.

**Dados de teste:**

- Usuário: `standard_user`
- Senha: senha inválida

**Passos:**

1. Acessar a página de login.
2. Informar um usuário válido.
3. Informar uma senha inválida.
4. Clicar no botão de login.

**Resultado esperado:**  
O login não deve ser realizado e o sistema deve exibir uma mensagem informando que o usuário e senha não correspondem.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-004 — Não realizar login com usuário inválido e senha válida

**Objetivo:**  
Validar se o sistema impede o login quando o usuário informado não existe.

**Pré-condições:**  
Aplicação disponível.

**Dados de teste:**

- Usuário: usuário inválido
- Senha: `secret_sauce`

**Passos:**

1. Acessar a página de login.
2. Informar um usuário inválido.
3. Informar uma senha válida.
4. Clicar no botão de login.

**Resultado esperado:**  
O login não deve ser realizado e o sistema deve exibir uma mensagem informando que o usuário e senha não correspondem.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-005 — Não realizar login com usuário vazio

**Objetivo:**  
Validar se o sistema impede o login quando o campo de usuário não é preenchido.

**Pré-condições:**  
Aplicação disponível.

**Dados de teste:**

- Usuário: vazio
- Senha: `secret_sauce`

**Passos:**

1. Acessar a página de login.
2. Deixar o campo de usuário vazio.
3. Informar uma senha válida.
4. Clicar no botão de login.

**Resultado esperado:**  
O login não deve ser realizado e o sistema deve informar que o usuário é obrigatório.

**Prioridade:** Alta

**Tipo:** E2E | Validação | Negativo

---

### CT-006 — Não realizar login com senha vazia

**Objetivo:**  
Validar se o sistema impede o login quando o campo de senha não é preenchido.

**Pré-condições:**  
Aplicação disponível e usuário válido cadastrado.

**Dados de teste:**

- Usuário: `standard_user`
- Senha: vazia

**Passos:**

1. Acessar a página de login.
2. Informar um usuário válido.
3. Deixar o campo de senha vazio.
4. Clicar no botão de login.

**Resultado esperado:**  
O login não deve ser realizado e o sistema deve informar que a senha é obrigatória.

**Prioridade:** Alta

**Tipo:** E2E | Validação | Negativo

---

### CT-007 — Não realizar login com usuário bloqueado

**Objetivo:**  
Validar se o sistema impede o login de um usuário bloqueado.

**Pré-condições:**  
Aplicação disponível e usuário bloqueado cadastrado.

**Dados de teste:**

- Usuário: `locked_out_user`
- Senha: `secret_sauce`

**Passos:**

1. Acessar a página de login.
2. Informar o usuário bloqueado.
3. Informar a senha válida.
4. Clicar no botão de login.

**Resultado esperado:**  
O login não deve ser realizado e o sistema deve informar que o usuário está bloqueado.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo