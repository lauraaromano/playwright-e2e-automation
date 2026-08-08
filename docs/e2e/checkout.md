# Casos de Teste — Checkout

## Checkout

### CT-019 — Realizar checkout com sucesso

**Objetivo:**  
Validar se o usuário consegue finalizar uma compra corretamente.

**Pré-condições:**  
Usuário autenticado e produtos adicionados ao carrinho.

**Dados de teste:**

- First Name: `Laura`
- Last Name: `Romano`
- Postal Code: `09400-000`

**Passos:**

1. Adicionar produtos ao carrinho.
2. Acessar o carrinho.
3. Iniciar o checkout.
4. Preencher os dados solicitados.
5. Continuar para a tela de revisão.
6. Validar os produtos e o subtotal.
7. Finalizar a compra.

**Resultado esperado:**  
A compra deve ser finalizada com sucesso e o sistema deve exibir a confirmação do pedido.

**Prioridade:** Alta

**Tipo:** E2E | Funcional | Positivo

---

### CT-020 — Exibir erro ao não informar First Name

**Objetivo:**  
Validar se o sistema impede o avanço do checkout quando o First Name não é preenchido.

**Pré-condições:**  
Usuário autenticado e produtos adicionados ao carrinho.

**Dados de teste:**

- First Name: vazio
- Last Name: `Romano`
- Postal Code: `09400-000`

**Passos:**

1. Acessar o checkout.
2. Deixar o campo First Name vazio.
3. Preencher os demais campos.
4. Continuar o checkout.

**Resultado esperado:**  
O sistema deve impedir o avanço e exibir uma mensagem informando que o First Name é obrigatório.

**Prioridade:** Alta

**Tipo:** E2E | Validação | Negativo

---

### CT-021 — Exibir erro ao não informar Last Name

**Objetivo:**  
Validar se o sistema impede o avanço do checkout quando o Last Name não é preenchido.

**Pré-condições:**  
Usuário autenticado e produtos adicionados ao carrinho.

**Dados de teste:**

- First Name: `Laura`
- Last Name: vazio
- Postal Code: `09400-000`

**Passos:**

1. Acessar o checkout.
2. Preencher o First Name.
3. Deixar o Last Name vazio.
4. Preencher o Postal Code.
5. Continuar o checkout.

**Resultado esperado:**  
O sistema deve impedir o avanço e exibir uma mensagem informando que o Last Name é obrigatório.

**Prioridade:** Alta

**Tipo:** E2E | Validação | Negativo

---

### CT-022 — Exibir erro ao não informar Postal Code

**Objetivo:**  
Validar se o sistema impede o avanço do checkout quando o Postal Code não é preenchido.

**Pré-condições:**  
Usuário autenticado e produtos adicionados ao carrinho.

**Dados de teste:**

- First Name: `Laura`
- Last Name: `Romano`
- Postal Code: vazio

**Passos:**

1. Acessar o checkout.
2. Preencher o First Name.
3. Preencher o Last Name.
4. Deixar o Postal Code vazio.
5. Continuar o checkout.

**Resultado esperado:**  
O sistema deve impedir o avanço e exibir uma mensagem informando que o Postal Code é obrigatório.

**Prioridade:** Alta

**Tipo:** E2E | Validação | Negativo

---

### CT-023 — Cancelar checkout na tela de informações

**Objetivo:**  
Validar se o usuário consegue cancelar o checkout antes de finalizar a compra.

**Pré-condições:**  
Usuário autenticado e produtos adicionados ao carrinho.

**Passos:**

1. Adicionar produtos ao carrinho.
2. Acessar o carrinho.
3. Iniciar o checkout.
4. Selecionar a opção de cancelar.
5. Validar a página exibida.

**Resultado esperado:**  
O checkout deve ser cancelado e o usuário deve retornar ao carrinho.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Positivo

---

### CT-024 — Gerar PDF do pedido

**Objetivo:**  
Validar se o sistema permite gerar um PDF após a finalização do pedido.

**Pré-condições:**  
Usuário autenticado e produtos adicionados ao carrinho.

**Dados de teste:**

- First Name: `Laura`
- Last Name: `Romano`
- Postal Code: `09400-000`

**Passos:**

1. Acessar o checkout.
2. Preencher os dados solicitados.
3. Continuar para a tela de revisão.
4. Validar os produtos e o subtotal.
5. Finalizar a compra.
6. Gerar o PDF do pedido.

**Resultado esperado:**  
O pedido deve ser finalizado com sucesso e o sistema deve permitir a geração do PDF.

**Prioridade:** Média

**Tipo:** E2E | Funcional | Positivo