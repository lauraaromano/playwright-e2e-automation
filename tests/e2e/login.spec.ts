import { test } from '@playwright/test';
import { Login } from '../support/actions/Login';
import { admin, wrong } from '../support/fixtures/users.json';

test('deve logar com username e senha válidos', async ({page}) => {
    const login = new Login(page);

    await login.visit()
    await login.submit(admin.username, admin.password)
    await login.isLoggedIn()
})

test('não deve logar com username válido e senha inválida', async ({page}) =>{
   const login = new Login(page);

    await login.visit()
    await login.submit(admin.username, wrong.password)

    await login.alertHaveText('Epic sadface: Username and password do not match any user in this service')
})

test('não deve logar com senha válida e username inválido', async ({page}) =>{
   const login = new Login(page);

    await login.visit()
    await login.submit(wrong.username,admin.password)

    await login.alertHaveText('Epic sadface: Username and password do not match any user in this service')
})

test('não deve logar quando o username não é preenchido', async ({page}) =>{
   const login = new Login(page);

    await login.visit()
    await login.submit('','admin.password')

    await login.alertHaveText('Epic sadface: Username is required')
})

test('não deve logar quando a senha não é preenchida', async ({page}) =>{
   const login = new Login(page);

    await login.visit()
    await login.submit('admin.username','')

    await login.alertHaveText('Epic sadface: Password is required')
})