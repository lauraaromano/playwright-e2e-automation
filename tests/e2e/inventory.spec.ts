import { test } from '@playwright/test';
import { Login, Inventory, admin } from '../support/index';

let login: Login;
let inventory: Inventory;

test.beforeEach(async ({ page }) => {
    login = new Login(page);
    inventory = new Inventory(page);

    await login.login(admin.username, admin.password);
    await login.IsLoggedIn();
});

test('deve ordenar produtos de A a Z', async () => {
    await inventory.filter("Name (A to Z)");

    await inventory.getProductNames();
    await inventory.getProductNamesInAZOrder();
});

test('deve ordenar produtos de Z a A', async () => {
    await inventory.filter("Name (Z to A)");

    await inventory.getProductNames();
    await inventory.getProductNamesInZAOrder();
});

test('deve ordenar produtos de preço mais barato ao mais caro', async () => {
    await inventory.filter("Price (low to high)");

    await inventory.getProductPrices();
    await inventory.getProductPricesLowToHighOrder();
});

test('deve ordenar produtos de preço mais caro ao mais barato', async () => {
    await inventory.filter("Price (high to low)");

    await inventory.getProductPrices();
    await inventory.getProductPricesHighToLowOrder();
});