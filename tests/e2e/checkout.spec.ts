import { test } from '@playwright/test';
import { Login, Cart, Checkout, admin, products, user } from '../support/index';

let login: Login;
let cart: Cart;
let checkout: Checkout;

test.beforeEach(async ({ page }) => {
    login = new Login(page);
    cart = new Cart(page);
    checkout = new Checkout(page);

    await login.login(admin.username, admin.password);
    await login.IsLoggedIn();

    await cart.addProductToCart(products[0]);
    await cart.addProductToCart(products[1]);
    await cart.badge();
    await cart.cart(products[0], products[1]);

    await checkout.docheckout();
});

test('deve realizar checkout com sucesso', async () => {
    await checkout.fillform(user.first, user.last, user.zip);
    await checkout.continue();

    await checkout.overviewproducts(products[0].name, products[1].name);
    await checkout.verifySubtotal();

    await checkout.finish();
    await checkout.verifySuccess();
    await checkout.backHome();
});

test('deve exibir erro ao não informar First Name', async () => {
    await checkout.fillform('', user.last, user.zip);
    await checkout.continue();
    await login.alertHaveText('Error: First Name is required');
});

test('deve exibir erro ao não informar Last Name', async () => {
    await checkout.fillform(user.first, '', user.zip);
    await checkout.continue();
    await login.alertHaveText('Error: Last Name is required');
});

test('deve exibir erro ao não informar Postal Code', async () => {
    await checkout.fillform(user.first, user.last, '');
    await checkout.continue();
    await login.alertHaveText('Error: Postal Code is required');
});

test('deve cancelar checkout na tela de informações', async () => {
    await checkout.cancel();
    await cart.cart(products[0], products[1]);
});

test('deve gerar um pdf do pedido', async () => {
    await checkout.fillform(user.first, user.last, user.zip);
    await checkout.continue();

    await checkout.overviewproducts(products[0].name, products[1].name);
    await checkout.verifySubtotal();

    await checkout.finish();
    await checkout.verifySuccess();
    await checkout.generatePdf();
});