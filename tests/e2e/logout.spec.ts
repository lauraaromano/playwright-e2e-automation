import { test } from '@playwright/test';
import { Login } from '../support/actions/Login';
import { admin } from '../support/fixtures/users.json';

test('deve logar com username e senha válidos', async ({page}) => {
    const login = new Login(page);
    await login.visit();

    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();
    await login.Logout();

});

