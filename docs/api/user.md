# Casos de Teste de API

## Users

### API-007 — Listar todos os usuários

**Objetivo:**
Validar se a API retorna corretamente a lista de usuários.

**Pré-condições:**
API disponível para requisições.

**Método:** `GET`

**Endpoint:** `/users`

**Passos:**

1. Enviar uma requisição GET para `/users`.
2. Validar o status da resposta.
3. Validar se a resposta contém uma lista de usuários.
4. Validar se os usuários possuem os campos esperados.

**Resultado esperado:**
A API deve retornar status `200`, uma lista de usuários e os campos `id`, `firstName` e `email`.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo

---

### API-008 — Buscar usuário por ID

**Objetivo:**
Validar se a API permite consultar um usuário específico utilizando seu ID.

**Pré-condições:**
API disponível e usuário com ID `1` existente.

**Método:** `GET`

**Endpoint:** `/users/1`

**Dados de teste:**

- ID: `1`

**Passos:**

1. Enviar uma requisição GET para `/users/1`.
2. Validar o status da resposta.
3. Validar o ID do usuário retornado.
4. Validar se o usuário possui os campos `firstName` e `email`.

**Resultado esperado:**
A API deve retornar status `200`, o usuário com ID `1` e as informações esperadas.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo

---

### API-009 — Buscar usuário inexistente

**Objetivo:**
Validar o comportamento da API ao solicitar um usuário que não existe.

**Pré-condições:**
API disponível.

**Método:** `GET`

**Endpoint:** `/users/9999`

**Dados de teste:**

- ID: `9999`

**Passos:**

1. Enviar uma requisição GET para `/users/9999`.
2. Validar o status da resposta.
3. Validar a mensagem retornada pela API.

**Resultado esperado:**
A API deve retornar status `404` e uma resposta contendo uma mensagem de erro.

**Prioridade:** Alta

**Tipo:** API | Funcional | Negativo

---

### API-010 — Criar um novo usuário

**Objetivo:**
Validar se a API permite criar um novo usuário utilizando dados válidos.

**Pré-condições:**
API disponível.

**Método:** `POST`

**Endpoint:** `/users/add`

**Dados de teste:**

- First Name: `Laura`
- Last Name: `Teste`
- Age: `17`

**Passos:**

1. Enviar uma requisição POST para `/users/add`.
2. Informar os dados do novo usuário.
3. Validar o status da resposta.
4. Validar se a resposta contém um ID.
5. Validar o First Name retornado.
6. Validar o Last Name retornado.

**Resultado esperado:**
A API deve retornar status `201`, gerar um ID para o usuário e retornar os dados informados corretamente.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo

---

### API-011 — Atualizar um usuário

**Objetivo:**
Validar se a API permite atualizar as informações de um usuário existente.

**Pré-condições:**
API disponível e usuário com ID `1` existente.

**Método:** `PUT`

**Endpoint:** `/users/1`

**Dados de teste:**

- ID: `1`
- First Name: `Laura Atualizada`

**Passos:**

1. Enviar uma requisição PUT para `/users/1`.
2. Informar o novo First Name do usuário.
3. Validar o status da resposta.
4. Validar o First Name retornado.

**Resultado esperado:**
A API deve retornar status `200` e o usuário deve apresentar o First Name atualizado.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo

---

### API-012 — Deletar um usuário

**Objetivo:**
Validar se a API permite excluir um usuário existente.

**Pré-condições:**
API disponível e usuário com ID `1` existente.

**Método:** `DELETE`

**Endpoint:** `/users/1`

**Dados de teste:**

- ID: `1`

**Passos:**

1. Enviar uma requisição DELETE para `/users/1`.
2. Validar o status da resposta.
3. Validar a confirmação da exclusão.

**Resultado esperado:**
A API deve retornar status `200` e indicar que o usuário foi excluído através do campo `isDeleted`.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo