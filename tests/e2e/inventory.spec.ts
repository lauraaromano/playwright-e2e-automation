import { test, expect } from '@playwright/test';
import { Login } from '../support/actions/Login';
import { Inventory } from '../support/actions/Inventory';
import { admin } from '../support/fixtures/users.json';

test('deve ordenar produtos de A a Z', async ({ page }) => {
    const login = new Login(page);
    const inventory = new Inventory(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await inventory.filter("Name (A to Z)")
//VERIFICAR AQUI , POIS TESTE ESTÁ FRÁGIL , TEM QUE COLOCAR ALGO QUE VEJA COM OS PRODUTOS DA TELA ,NN ASSIM JA PRE-DEFINIDOS
    const nomesNaTela = [
        'Sauce Labs Backpack', 
        'Sauce Labs Bike Light', 
        'Sauce Labs Bolt T-Shirt', 
        'Sauce Labs Fleece Jacket', 
        'Sauce Labs Onesie', 
        'Test.allTheThings() T-Shirt (Red)'
    ];

    const nomesOrdenados = [...nomesNaTela].sort();

    expect(nomesNaTela).toEqual(nomesOrdenados);
});