import { test } from '@playwright/test';
import { Login } from '../support/actions/Login';
import { Inventory } from '../support/actions/Inventory';
import { admin } from '../support/fixtures/users.json';

test('deve ordenar produtos de A a Z', async ({ page }) => {
    const login = new Login(page);
    const inventory = new Inventory(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await inventory.filter("Name (A to Z)");

    await inventory.getProductNames();
    await inventory.getProductNamesInAZOrder();

});

test('deve ordenar produtos de Z a A', async ({ page }) => {
    const login = new Login(page);
    const inventory = new Inventory(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await inventory.filter("Name (Z to A)");

    await inventory.getProductNames();
    await inventory.getProductNamesInZAOrder();

});

test('deve ordenar produtos de preço mais barato ao mais caro', async ({ page }) => {
    const login = new Login(page);
    const inventory = new Inventory(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await inventory.filter("Price (low to high)");

    await inventory.getProductPrices();
    await inventory.getProductPricesLowToHighOrder();

});

test('deve ordenar produtos de preço mais caro ao mais barato', async ({ page }) => {
    const login = new Login(page);
    const inventory = new Inventory(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await inventory.filter("Price (high to low)");

    await inventory.getProductPrices();
    await inventory.getProductPricesHighToLowOrder();

});

