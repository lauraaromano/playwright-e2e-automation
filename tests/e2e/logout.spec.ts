import { test } from '@playwright/test';
import { Login, admin  } from '../support/index';

test('deve logar com username e senha válidos', async ({page}) => {
    const login = new Login(page);

    await login.login(admin.username, admin.password);
    await login.IsLoggedIn();

    await login.Logout();
});

