export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}

export interface ProductsListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface DeleteProductResponse extends Product {
  isDeleted: boolean;
  deletedOn: string;
}

export interface NotFoundResponse {
  message: string;
}