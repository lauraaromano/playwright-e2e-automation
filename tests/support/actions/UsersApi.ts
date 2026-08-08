import { APIRequestContext } from '@playwright/test';
import { User } from '../types/User';

export class UsersApi {

    private readonly baseUrl = `${process.env.BASE_URL_API}/users`;

    constructor(private readonly request: APIRequestContext) {}

    async getAllUsers() {
        return this.request.get(this.baseUrl);
    }

    async getUserById(id: number) {
        return this.request.get(`${this.baseUrl}/${id}`);
    }

    async createUser(data: Partial<User>) {
        return this.request.post(`${this.baseUrl}/add`, { data });
    }

    async updateUser(id: number, data: Partial<User>) {
        return this.request.put(`${this.baseUrl}/${id}`, { data });
    }

    async deleteUser(id: number) {
        return this.request.delete(`${this.baseUrl}/${id}`);
    }
}