# Casos de Teste E2E

## Login

### CT-001 — Realizar login com credenciais válidas

**Objetivo:**  
Validar se o usuário consegue acessar a aplicação utilizando credenciais válidas.

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
O usuário deve ser autenticado e direcionado para a página de produtos.

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
2. Não preencher o campo de usuário.
3. Não preencher o campo de senha.
4. Clicar no botão de login.

**Resultado esperado:**  
O sistema deve impedir o login e apresentar a mensagem:

`Epic sadface: Username is required`

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-003 — Não realizar login com usuário válido e senha inválida

**Objetivo:**  
Validar se o sistema impede o login quando a senha informada é incorreta.

**Pré-condições:**  
Aplicação disponível.

**Dados de teste:**
- Usuário: `standard_user`
- Senha: senha inválida

**Passos:**
1. Acessar a página de login.
2. Informar um usuário válido.
3. Informar uma senha inválida.
4. Clicar no botão de login.

**Resultado esperado:**  
O sistema deve impedir o login e apresentar a mensagem:

`Epic sadface: Username and password do not match any user in this service`

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-004 — Não realizar login com usuário inválido e senha válida

**Objetivo:**  
Validar se o sistema impede o login quando o usuário informado não é válido.

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
O sistema deve impedir o login e apresentar a mensagem:

`Epic sadface: Username and password do not match any user in this service`

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-005 — Não realizar login quando o campo de usuário estiver vazio

**Objetivo:**  
Validar se o sistema impede o login quando o campo de usuário não é preenchido.

**Pré-condições:**  
Aplicação disponível.

**Dados de teste:**
- Usuário: vazio
- Senha: `secret_sauce`

**Passos:**
1. Acessar a página de login.
2. Não preencher o campo de usuário.
3. Informar uma senha válida.
4. Clicar no botão de login.

**Resultado esperado:**  
O sistema deve impedir o login e apresentar a mensagem:

`Epic sadface: Username is required`

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-006 — Não realizar login quando o campo de senha estiver vazio

**Objetivo:**  
Validar se o sistema impede o login quando o campo de senha não é preenchido.

**Pré-condições:**  
Aplicação disponível.

**Dados de teste:**
- Usuário: `standard_user`
- Senha: vazia

**Passos:**
1. Acessar a página de login.
2. Informar um usuário válido.
3. Não preencher o campo de senha.
4. Clicar no botão de login.

**Resultado esperado:**  
O sistema deve impedir o login e apresentar a mensagem:

`Epic sadface: Password is required`

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-007 — Não realizar login com usuário bloqueado

**Objetivo:**  
Validar se o sistema impede o acesso de um usuário bloqueado.

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
O sistema deve impedir o login e apresentar a mensagem:

`Epic sadface: Sorry, this user has been locked out.`

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

## Lougout

### CT-008 — Realizar logout

**Objetivo:**
Validar se o usuário consegue encerrar sua sessão corretamente.

**Pré-condições:**
Usuário autenticado na aplicação.

**Passos:**

1. Acessar a aplicação com um usuário válido.
2. Realizar o login.
3. Acessar o menu de opções.
4. Clicar em **Logout**.

**Resultado esperado:**
O usuário deve ser desconectado e direcionado novamente para a tela de login.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

## Inventory

### CT-009 — Ordenar produtos de A a Z

**Objetivo:**
Validar se os produtos são ordenados corretamente em ordem alfabética crescente.

**Pré-condições:**
Usuário autenticado na aplicação e produtos disponíveis.

**Passos:**

1. Acessar a página de produtos.
2. Selecionar a opção **Name (A to Z)** no filtro de ordenação.
3. Verificar os nomes dos produtos.
4. Validar se os produtos estão organizados de A a Z.

**Resultado esperado:**
Os produtos devem ser exibidos em ordem alfabética crescente, de A a Z.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Ordenação

---

### CT-010 — Ordenar produtos de Z a A

**Objetivo:**
Validar se os produtos são ordenados corretamente em ordem alfabética decrescente.

**Pré-condições:**
Usuário autenticado na aplicação e produtos disponíveis.

**Passos:**

1. Acessar a página de produtos.
2. Selecionar a opção **Name (Z to A)** no filtro de ordenação.
3. Verificar os nomes dos produtos.
4. Validar se os produtos estão organizados de Z a A.

**Resultado esperado:**
Os produtos devem ser exibidos em ordem alfabética decrescente, de Z a A.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Ordenação

---

### CT-011 — Ordenar produtos do menor para o maior preço

**Objetivo:**
Validar se os produtos são ordenados corretamente pelo preço, do menor para o maior.

**Pré-condições:**
Usuário autenticado na aplicação e produtos disponíveis.

**Passos:**

1. Acessar a página de produtos.
2. Selecionar a opção **Price (low to high)** no filtro de ordenação.
3. Verificar os preços dos produtos.
4. Validar se os produtos estão organizados do menor para o maior preço.

**Resultado esperado:**
Os produtos devem ser exibidos em ordem crescente de preço.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Ordenação

---

### CT-012 — Ordenar produtos do maior para o menor preço

**Objetivo:**
Validar se os produtos são ordenados corretamente pelo preço, do maior para o menor.

**Pré-condições:**
Usuário autenticado na aplicação e produtos disponíveis.

**Passos:**

1. Acessar a página de produtos.
2. Selecionar a opção **Price (high to low)** no filtro de ordenação.
3. Verificar os preços dos produtos.
4. Validar se os produtos estão organizados do maior para o menor preço.

**Resultado esperado:**
Os produtos devem ser exibidos em ordem decrescente de preço.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Ordenação

---

## Cart


### CT-013 — Adicionar um produto ao carrinho

**Objetivo:**
Validar se um produto pode ser adicionado corretamente ao carrinho.

**Pré-condições:**
Usuário autenticado na aplicação e produtos disponíveis.

**Passos:**

1. Acessar a página de produtos.
2. Selecionar um produto.
3. Adicionar o produto ao carrinho.
4. Verificar o contador do carrinho.
5. Acessar o carrinho.
6. Validar o produto adicionado.

**Resultado esperado:**
O produto deve ser adicionado ao carrinho e exibido corretamente na página do carrinho.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-014 — Adicionar múltiplos produtos ao carrinho

**Objetivo:**
Validar se múltiplos produtos podem ser adicionados corretamente ao carrinho.

**Pré-condições:**
Usuário autenticado na aplicação e produtos disponíveis.

**Passos:**

1. Acessar a página de produtos.
2. Adicionar o primeiro produto ao carrinho.
3. Adicionar o segundo produto ao carrinho.
4. Adicionar o terceiro produto ao carrinho.
5. Verificar o contador do carrinho.
6. Acessar o carrinho.
7. Validar os produtos adicionados.

**Resultado esperado:**
Todos os produtos selecionados devem ser adicionados e exibidos corretamente no carrinho.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-015 — Remover um produto do carrinho pela página de inventário

**Objetivo:**
Validar se um produto pode ser removido do carrinho diretamente pela página de produtos.

**Pré-condições:**
Usuário autenticado na aplicação e produtos disponíveis.

**Passos:**

1. Acessar a página de produtos.
2. Adicionar dois produtos ao carrinho.
3. Verificar o contador do carrinho.
4. Remover um dos produtos pela página de inventário.
5. Verificar novamente o contador do carrinho.

**Resultado esperado:**
O produto selecionado deve ser removido do carrinho e o contador deve ser atualizado corretamente.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-016 — Remover um produto de dentro do carrinho

**Objetivo:**
Validar se um produto pode ser removido diretamente pela página do carrinho.

**Pré-condições:**
Usuário autenticado na aplicação e produtos disponíveis.

**Passos:**

1. Acessar a página de produtos.
2. Adicionar dois produtos ao carrinho.
3. Verificar o contador do carrinho.
4. Acessar o carrinho.
5. Remover um dos produtos.
6. Verificar o contador do carrinho.

**Resultado esperado:**
O produto selecionado deve ser removido do carrinho e não deve mais ser exibido na lista de produtos.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-017 — Continuar comprando após acessar o carrinho

**Objetivo:**
Validar se o usuário consegue retornar à página de produtos e continuar adicionando produtos após acessar o carrinho.

**Pré-condições:**
Usuário autenticado na aplicação e produtos disponíveis.

**Passos:**

1. Acessar a página de produtos.
2. Adicionar dois produtos ao carrinho.
3. Acessar o carrinho.
4. Selecionar a opção **Continue Shopping**.
5. Adicionar outro produto ao carrinho.
6. Verificar o contador do carrinho.

**Resultado esperado:**
O usuário deve retornar à página de produtos e conseguir adicionar novos produtos ao carrinho.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-018 — Exibir carrinho vazio quando não houver produtos

**Objetivo:**
Validar o comportamento do carrinho quando nenhum produto foi adicionado.

**Pré-condições:**
Usuário autenticado na aplicação e nenhum produto adicionado ao carrinho.

**Passos:**

1. Acessar a página de produtos.
2. Verificar o contador do carrinho.
3. Acessar o carrinho.

**Resultado esperado:**
O carrinho deve ser exibido sem produtos e o contador de itens não deve ser apresentado.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Positivo

---

## Checkout

---

### CT-019 — Realizar checkout com sucesso

**Objetivo:**
Validar se o usuário consegue concluir uma compra com dados válidos.

**Pré-condições:**
Usuário autenticado, produtos adicionados ao carrinho e aplicação disponível.

**Dados de teste:**
- First Name: `Laura`
- Last Name: `Romano`
- Postal Code: `00000-000`

**Passos:**

1. Acessar a página de produtos.
2. Adicionar dois produtos ao carrinho.
3. Acessar o carrinho.
4. Iniciar o checkout.
5. Preencher First Name, Last Name e Postal Code.
6. Continuar para a tela de resumo.
7. Validar os produtos do pedido.
8. Validar o subtotal.
9. Finalizar a compra.
10. Validar a mensagem de sucesso.
11. Retornar para a página inicial.

**Resultado esperado:**
O pedido deve ser finalizado com sucesso e a mensagem de confirmação deve ser exibida.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-020 — Exibir erro ao não informar First Name

**Objetivo:**
Validar se o sistema impede o avanço do checkout quando o campo First Name não é preenchido.

**Pré-condições:**
Usuário autenticado, produtos adicionados ao carrinho e checkout iniciado.

**Dados de teste:**
- First Name: vazio
- Last Name: preenchido
- Postal Code: preenchido

**Passos:**

1. Acessar o checkout.
2. Deixar o campo First Name vazio.
3. Preencher Last Name.
4. Preencher Postal Code.
5. Clicar em Continue.

**Resultado esperado:**
O sistema deve impedir o avanço e exibir a mensagem:

`Error: First Name is required`

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo


---

### CT-021 — Exibir erro ao não informar Last Name

**Objetivo:**
Validar se o sistema impede o avanço do checkout quando o campo Last Name não é preenchido.

**Pré-condições:**
Usuário autenticado, produtos adicionados ao carrinho e checkout iniciado.

**Dados de teste:**
- First Name: preenchido
- Last Name: vazio
- Postal Code: preenchido

**Passos:**

1. Acessar o checkout.
2. Preencher First Name.
3. Deixar o campo Last Name vazio.
4. Preencher Postal Code.
5. Clicar em Continue.

**Resultado esperado:**
O sistema deve impedir o avanço e exibir a mensagem:

`Error: Last Name is required`

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-022 — Exibir erro ao não informar Postal Code

**Objetivo:**
Validar se o sistema impede o avanço do checkout quando o campo Postal Code não é preenchido.

**Pré-condições:**
Usuário autenticado, produtos adicionados ao carrinho e checkout iniciado.

**Dados de teste:**
- First Name: preenchido
- Last Name: preenchido
- Postal Code: vazio

**Passos:**

1. Acessar o checkout.
2. Preencher First Name.
3. Preencher Last Name.
4. Deixar o campo Postal Code vazio.
5. Clicar em Continue.

**Resultado esperado:**
O sistema deve impedir o avanço e exibir a mensagem:

`Error: Postal Code is required`

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Negativo

---

### CT-023 — Cancelar checkout na tela de informações

**Objetivo:**
Validar se o usuário consegue cancelar o processo de checkout e retornar ao carrinho.

**Pré-condições:**
Usuário autenticado e produtos adicionados ao carrinho.

**Passos:**

1. Acessar o carrinho.
2. Iniciar o checkout.
3. Na tela de informações, selecionar a opção de cancelamento.
4. Verificar a página exibida.

**Resultado esperado:**
O checkout deve ser cancelado e o usuário deve retornar ao carrinho, mantendo os produtos adicionados.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Positivo


---

### CT-024 — Gerar PDF do pedido após finalizar a compra

**Objetivo:**
Validar se o sistema permite gerar um PDF com as informações do pedido após a conclusão da compra.

**Pré-condições:**
Usuário autenticado, produtos adicionados ao carrinho e checkout iniciado.

**Dados de teste:**
- First Name: `Laura`
- Last Name: `Romano`
- Postal Code: `00000-000`

**Passos:**

1. Acessar o checkout.
2. Preencher First Name, Last Name e Postal Code.
3. Continuar para a tela de resumo.
4. Validar os produtos do pedido.
5. Validar o subtotal.
6. Finalizar a compra.
7. Validar a confirmação do pedido.
8. Solicitar a geração do PDF.

**Resultado esperado:**
O pedido deve ser finalizado com sucesso e o sistema deve gerar o PDF do pedido.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Positivo


