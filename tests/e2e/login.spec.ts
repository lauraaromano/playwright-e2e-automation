import { test } from '@playwright/test';
import { Login } from '../support/actions/Login';
import { admin, wrong, blocked } from '../support/fixtures/users.json';

test('deve realizar login com credenciais válidas', async ({page}) => {
    const login = new Login(page);

    await login.visit()
    await login.submit(admin.username, admin.password)
    await login.isLoggedIn()
})

test('não deve realizar login com os campos de usuário e senha vazios', async ({page}) => {
    const login = new Login(page);

    await login.visit()
    await page.getByTestId('login-button').click()

    await login.alertHaveText('Epic sadface: Username is required')
    
})

test('não deve realizar login com usuário válido e senha inválida', async ({page}) =>{
   const login = new Login(page);

    await login.visit()
    await login.submit(admin.username, wrong.password)

    await login.alertHaveText('Epic sadface: Username and password do not match any user in this service')
})

test('não deve realizar login com usuário inválido e senha válida', async ({page}) =>{
   const login = new Login(page);

    await login.visit()
    await login.submit(wrong.username,admin.password)

    await login.alertHaveText('Epic sadface: Username and password do not match any user in this service')
})

test('não deve realizar login quando o campo de usuário estiver vazio', async ({page}) =>{
   const login = new Login(page);

    await login.visit()
    await login.submit('',admin.password)

    await login.alertHaveText('Epic sadface: Username is required')
})

test('não deve realizar login quando o campo de senha estiver vazio', async ({page}) =>{
   const login = new Login(page);

    await login.visit()
    await login.submit(admin.username,'')

    await login.alertHaveText('Epic sadface: Password is required')
})

test('não deve realizar login com um usuário bloqueado', async ({page}) =>{
   const login = new Login(page);

    await login.visit()
    await login.submit(blocked.username,blocked.password)

    await login.alertHaveText('Epic sadface: Sorry, this user has been locked out.')
})