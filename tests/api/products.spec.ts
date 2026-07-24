import { test, expect } from '@playwright/test';
import { ProductsApi, Product, ProductsListResponse, DeleteProductResponse, NotFoundResponse } from '../support';

test.describe('Products API - DummyJSON', () => {
  let productsApi: ProductsApi;

  test.beforeEach(({ request }) => {
    productsApi = new ProductsApi(request);
  });

  test('GET /products - deve listar todos os produtos', async () => {
    const response = await productsApi.getAllProducts();
    const body: ProductsListResponse = await response.json();

    expect(response.status()).toBe(200);
    expect(Array.isArray(body.products)).toBeTruthy();
    expect(body.products[0]).toHaveProperty('id');
    expect(body.products[0]).toHaveProperty('title');
    expect(body.products[0]).toHaveProperty('price');
  });

  test('GET /products/1 - deve buscar produto por ID', async () => {
    const response = await productsApi.getProductById(1);
    const body: Product = await response.json();

    expect(response.status()).toBe(200);
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('title');
  });

  test('GET /products/9999 - produto inexistente deve retornar 404', async () => {
    const response = await productsApi.getProductById(9999);
    const body: NotFoundResponse = await response.json();

    expect(response.status()).toBe(404);
    expect(body).toHaveProperty('message');
  });

  test('POST /products/add - deve criar um novo produto', async () => {
    const newProduct: Partial<Product> = { title: 'Produto Teste', price: 99 };
    const response = await productsApi.createProduct(newProduct);
    const body: Product = await response.json();

    expect(response.status()).toBe(201);
    expect(body).toHaveProperty('id');
    expect(body.title).toBe(newProduct.title);
  });

  test('PUT /products/1 - deve atualizar um produto', async () => {
    const updatedData: Partial<Product> = { title: 'Produto Atualizado' };
    const response = await productsApi.updateProduct(1, updatedData);
    const body: Product = await response.json();

    expect(response.status()).toBe(200);
    expect(body.title).toBe(updatedData.title);
  });

  test('DELETE /products/1 - deve deletar um produto', async () => {
    const response = await productsApi.deleteProduct(1);
    const body: DeleteProductResponse = await response.json();

    expect(response.status()).toBe(200);
    expect(body.isDeleted).toBeTruthy();
  });
});