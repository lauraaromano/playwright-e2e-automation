import { test } from '@playwright/test';
import { Login, admin, wrong, blocked } from '../support/index';

let login: Login;

test.beforeEach(async ({ page }) => {
    login = new Login(page);
});

test('deve realizar login com credenciais válidas', async () => {
    await login.login(admin.username, admin.password);
});

test('não deve realizar login com os campos de usuário e senha vazios', async () => {
    await login.login('', '');
    await login.alertHaveText('Epic sadface: Username is required');
});

test('não deve realizar login com usuário válido e senha inválida', async () => {
    await login.login(admin.username, wrong.password);
    await login.alertHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('não deve realizar login com usuário inválido e senha válida', async () => {
    await login.login(wrong.username, admin.password);
    await login.alertHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('não deve realizar login quando o campo de usuário estiver vazio', async () => {
    await login.login('', admin.password);
    await login.alertHaveText('Epic sadface: Username is required');
});

test('não deve realizar login quando o campo de senha estiver vazio', async () => {
    await login.login(admin.username, '');
    await login.alertHaveText('Epic sadface: Password is required');
});

test('não deve realizar login com um usuário bloqueado', async () => {
    await login.login(blocked.username, blocked.password);
    await login.alertHaveText('Epic sadface: Sorry, this user has been locked out.');
});