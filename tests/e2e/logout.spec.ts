import { test } from '@playwright/test';
import { Login, admin  } from '../support/index';

test('deve realizar logout com sucesso', async ({page}) => {
    const login = new Login(page);

    await login.login(admin.username, admin.password);
    await login.IsLoggedIn();

    await login.Logout();
});

