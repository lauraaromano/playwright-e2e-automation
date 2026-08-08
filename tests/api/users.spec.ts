import { test, expect } from '@playwright/test';
import {
    UsersApi,
    User,
    UsersListResponse,
    DeleteUserResponse,
    NotFoundResponse
} from '../support';

test.describe('Users API - DummyJSON', () => {

    let usersApi: UsersApi;

    test.beforeEach(({ request }) => {
        usersApi = new UsersApi(request);
    });

    test('GET /users - deve listar todos os usuários', async () => {
        const response = await usersApi.getAllUsers();
        const body: UsersListResponse = await response.json();

        expect(response.status()).toBe(200);
        expect(Array.isArray(body.users)).toBeTruthy();
        expect(body.users[0]).toHaveProperty('id');
        expect(body.users[0]).toHaveProperty('firstName');
        expect(body.users[0]).toHaveProperty('email');
    });


    test('GET /users/1 - deve buscar usuário por ID', async () => {
        const response = await usersApi.getUserById(1);
        const body: User = await response.json();

        expect(response.status()).toBe(200);
        expect(body.id).toBe(1);
        expect(body).toHaveProperty('firstName');
        expect(body).toHaveProperty('email');
    });


    test('GET /users/9999 - usuário inexistente deve retornar 404', async () => {
        const response = await usersApi.getUserById(9999);
        const body: NotFoundResponse = await response.json();

        expect(response.status()).toBe(404);
        expect(body).toHaveProperty('message');
    });


    test('POST /users/add - deve criar um novo usuário', async () => {
        const newUser: Partial<User> = {
            firstName: 'Laura',
            lastName: 'Teste',
            age: 17
        };

        const response = await usersApi.createUser(newUser);
        const body: User = await response.json();

        expect(response.status()).toBe(201);
        expect(body).toHaveProperty('id');
        expect(body.firstName).toBe(newUser.firstName);
        expect(body.lastName).toBe(newUser.lastName);
    });


    test('PUT /users/1 - deve atualizar um usuário', async () => {
        const updatedData: Partial<User> = {
            firstName: 'Laura Atualizada'
        };

        const response = await usersApi.updateUser(1, updatedData);
        const body: User = await response.json();

        expect(response.status()).toBe(200);
        expect(body.firstName).toBe(updatedData.firstName);
    });


    test('DELETE /users/1 - deve deletar um usuário', async () => {
        const response = await usersApi.deleteUser(1);
        const body: DeleteUserResponse = await response.json();

        expect(response.status()).toBe(200);
        expect(body.isDeleted).toBeTruthy();
    });

});