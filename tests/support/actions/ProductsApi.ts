import { APIRequestContext } from '@playwright/test';
import { Product } from '../types/Product';

export class ProductsApi {
  private readonly baseUrl = `${process.env.BASE_URL_API}/products`;

  constructor(private readonly request: APIRequestContext) {}

  async getAllProducts() {
    return this.request.get(this.baseUrl);
  }

  async getProductById(id: number) {
    return this.request.get(`${this.baseUrl}/${id}`);
  }

  async createProduct(data: Partial<Product>) {
    return this.request.post(`${this.baseUrl}/add`, { data });
  }

  async updateProduct(id: number, data: Partial<Product>) {
    return this.request.put(`${this.baseUrl}/${id}`, { data });
  }

  async deleteProduct(id: number) {
    return this.request.delete(`${this.baseUrl}/${id}`);
  }
}