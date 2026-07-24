import { test } from '@playwright/test';
import { Login, Cart, admin, products } from '../support/index';

let login: Login;
let cart: Cart;

test.beforeEach(async ({ page }) => {
    login = new Login(page);
    cart = new Cart(page);

    await login.login(admin.username, admin.password);
    await login.IsLoggedIn();
});

test('deve adicionar um produto ao carrinho', async () => {
    await cart.addProductToCart(products[0]);
    await cart.badge();
    await cart.cart(products[0]);
});

test('deve adicionar múltiplos produtos ao carrinho', async () => {
    await cart.addProductToCart(products[0]);
    await cart.addProductToCart(products[1]);
    await cart.addProductToCart(products[2]);

    await cart.badge();
    await cart.cart(products[0], products[1], products[2]);
});

test('deve remover um produto do carrinho na página de inventário', async () => {
    await cart.addProductToCart(products[0]);
    await cart.addProductToCart(products[2]);
    await cart.badge();

    await cart.remove(products[0].name);
    await cart.badge();
});

test('deve remover um produto de dentro do carrinho', async () => {
    await cart.addProductToCart(products[1]);
    await cart.addProductToCart(products[2]);
    await cart.badge();

    await cart.cart();
    await cart.removeFromCart(products[2].name);
    await cart.badge();
});

test('deve permitir continuar comprando', async () => {
    await cart.addProductToCart(products[1]);
    await cart.addProductToCart(products[2]);
    await cart.badge();

    await cart.cart();
    await cart.ContinueShopping();
    await cart.addProductToCart(products[0]);
    await cart.badge();
});

test('deve exibir o carrinho vazio quando não houver produtos', async () => {
    await cart.badge();
    await cart.cart();
});