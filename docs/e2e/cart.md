# Casos de Teste — Cart

## Cart

### CT-013 — Adicionar um produto ao carrinho

**Objetivo:**  
Validar se o usuário consegue adicionar um produto ao carrinho.

**Pré-condições:**  
Usuário autenticado na aplicação.

**Passos:**

1. Acessar a página de produtos.
2. Adicionar um produto ao carrinho.
3. Acessar o carrinho.
4. Validar o produto adicionado.

**Resultado esperado:**  
O produto deve ser adicionado corretamente ao carrinho.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-014 — Adicionar múltiplos produtos ao carrinho

**Objetivo:**  
Validar se o usuário consegue adicionar múltiplos produtos ao carrinho.

**Pré-condições:**  
Usuário autenticado na aplicação.

**Passos:**

1. Acessar a página de produtos.
2. Adicionar três produtos ao carrinho.
3. Acessar o carrinho.
4. Validar os produtos adicionados.

**Resultado esperado:**  
Todos os produtos selecionados devem ser adicionados corretamente ao carrinho.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-015 — Remover produto do carrinho pela página de inventário

**Objetivo:**  
Validar se o usuário consegue remover um produto diretamente pela página de produtos.

**Pré-condições:**  
Usuário autenticado e produto adicionado ao carrinho.

**Passos:**

1. Adicionar produtos ao carrinho.
2. Remover um dos produtos pela página de inventário.
3. Acessar o carrinho.
4. Validar os produtos presentes.

**Resultado esperado:**  
O produto removido não deve estar presente no carrinho.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-016 — Remover produto de dentro do carrinho

**Objetivo:**  
Validar se o usuário consegue remover um produto diretamente pela página do carrinho.

**Pré-condições:**  
Usuário autenticado e produtos adicionados ao carrinho.

**Passos:**

1. Adicionar produtos ao carrinho.
2. Acessar o carrinho.
3. Remover um dos produtos.
4. Validar os produtos presentes.

**Resultado esperado:**  
O produto selecionado deve ser removido do carrinho.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-017 — Continuar comprando após acessar o carrinho

**Objetivo:**  
Validar se o usuário consegue retornar à página de produtos e continuar sua compra.

**Pré-condições:**  
Usuário autenticado e produtos adicionados ao carrinho.

**Passos:**

1. Adicionar produtos ao carrinho.
2. Acessar o carrinho.
3. Selecionar a opção de continuar comprando.
4. Adicionar outro produto.
5. Acessar novamente o carrinho.

**Resultado esperado:**  
O usuário deve retornar à página de produtos e conseguir adicionar novos produtos ao carrinho.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Positivo

---

### CT-018 — Exibir carrinho vazio quando não houver produtos

**Objetivo:**  
Validar se o carrinho é exibido corretamente quando nenhum produto foi adicionado.

**Pré-condições:**  
Usuário autenticado e nenhum produto adicionado ao carrinho.

**Passos:**

1. Acessar a página de produtos.
2. Acessar o carrinho sem adicionar produtos.

**Resultado esperado:**  
O carrinho deve ser exibido vazio.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Positivo