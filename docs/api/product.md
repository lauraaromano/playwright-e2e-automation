# Casos de Teste de API

## Products

### API-001 — Listar todos os produtos

**Objetivo:**
Validar se a API retorna corretamente a lista de produtos.

**Pré-condições:**
API disponível para requisições.

**Método:** `GET`

**Endpoint:** `/products`

**Passos:**

1. Enviar uma requisição GET para `/products`.
2. Validar o status da resposta.
3. Validar se a resposta contém uma lista de produtos.
4. Validar se os produtos possuem os campos esperados.

**Resultado esperado:**
A API deve retornar status `200`, uma lista de produtos e os campos `id`, `title` e `price`.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo

---

### API-002 — Buscar produto por ID

**Objetivo:**
Validar se a API permite consultar um produto específico utilizando seu ID.

**Pré-condições:**
API disponível e produto com ID `1` existente.

**Método:** `GET`

**Endpoint:** `/products/1`

**Dados de teste:**

- ID: `1`

**Passos:**

1. Enviar uma requisição GET para `/products/1`.
2. Validar o status da resposta.
3. Validar o ID do produto retornado.
4. Validar se o produto possui o campo `title`.

**Resultado esperado:**
A API deve retornar status `200`, o produto com ID `1` e as informações esperadas.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo

---

### API-003 — Buscar produto inexistente

**Objetivo:**
Validar o comportamento da API ao solicitar um produto que não existe.

**Pré-condições:**
API disponível.

**Método:** `GET`

**Endpoint:** `/products/9999`

**Dados de teste:**

- ID: `9999`

**Passos:**

1. Enviar uma requisição GET para `/products/9999`.
2. Validar o status da resposta.
3. Validar a mensagem retornada pela API.

**Resultado esperado:**
A API deve retornar status `404` e uma resposta contendo uma mensagem de erro.

**Prioridade:** Alta

**Tipo:** API | Funcional | Negativo

---

### API-004 — Criar um novo produto

**Objetivo:**
Validar se a API permite criar um novo produto utilizando dados válidos.

**Pré-condições:**
API disponível.

**Método:** `POST`

**Endpoint:** `/products/add`

**Dados de teste:**

- Title: `Produto Teste`
- Price: `99`

**Passos:**

1. Enviar uma requisição POST para `/products/add`.
2. Informar os dados do novo produto.
3. Validar o status da resposta.
4. Validar se a resposta contém um ID.
5. Validar o título do produto criado.

**Resultado esperado:**
A API deve retornar status `201`, gerar um ID para o produto e retornar o título informado.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo

---

### API-005 — Atualizar um produto

**Objetivo:**
Validar se a API permite atualizar as informações de um produto existente.

**Pré-condições:**
API disponível e produto com ID `1` existente.

**Método:** `PUT`

**Endpoint:** `/products/1`

**Dados de teste:**

- ID: `1`
- Title: `Produto Atualizado`

**Passos:**

1. Enviar uma requisição PUT para `/products/1`.
2. Informar o novo título do produto.
3. Validar o status da resposta.
4. Validar o título retornado.

**Resultado esperado:**
A API deve retornar status `200` e o produto deve apresentar o título atualizado.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo

---

### API-006 — Deletar um produto

**Objetivo:**
Validar se a API permite excluir um produto existente.

**Pré-condições:**
API disponível e produto com ID `1` existente.

**Método:** `DELETE`

**Endpoint:** `/products/1`

**Dados de teste:**

- ID: `1`

**Passos:**

1. Enviar uma requisição DELETE para `/products/1`.
2. Validar o status da resposta.
3. Validar a confirmação da exclusão.

**Resultado esperado:**
A API deve retornar status `200` e indicar que o produto foi excluído através do campo `isDeleted`.

**Prioridade:** Alta

**Tipo:** API | Funcional | Positivo