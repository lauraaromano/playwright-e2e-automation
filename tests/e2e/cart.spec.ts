import { test } from '@playwright/test';
import { Login } from '../support/actions/Login';
import { admin } from '../support/fixtures/users.json';
import { products } from '../support/fixtures/products.json';
import { Cart } from '../support/actions/Cart';

test('deve adicionar um produto ao carrinho', async ({ page }) => {
    const login = new Login(page);
    const cart = new Cart(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await cart.addProductToCart(products[0]);

    await cart.badge();

    await cart.cart(products[0]);


});

test('deve adicionar múltiplos produtos ao carrinho', async ({ page }) => {
    const login = new Login(page);
    const cart = new Cart(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await cart.addProductToCart(products[0]);
    await cart.addProductToCart(products[1]);
    await cart.addProductToCart(products[2]);

    await cart.badge();

    await cart.cart(products[0], products[1], products[2]);

});

test('deve remover um produto do carrinho na página de inventário', async ({ page }) =>{
    const login = new Login(page);
    const cart = new Cart(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await cart.addProductToCart(products[0]);
    await cart.addProductToCart(products[2]);

    await cart.badge();

    await cart.remove(products[0].name);
    await cart.badge();
});

test('deve remover um produto de dentro do carrinho', async ({ page }) =>{
    const login = new Login(page);
    const cart = new Cart(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await cart.addProductToCart(products[1]);
    await cart.addProductToCart(products[2]);
    await cart.badge();

    await cart.cart();
    await cart.removeFromCart(products[2].name);
    await cart.badge();

});

test('deve permitir continuar comprando', async ({ page }) =>{
    const login = new Login(page);
    const cart = new Cart(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await cart.addProductToCart(products[1]);
    await cart.addProductToCart(products[2]);
    await cart.badge();

    await cart.cart();
    await cart.ContinueShopping();
    await cart.addProductToCart(products[0]);
    await cart.badge();

});

test('deve exibir o carrinho vazio quando não houver produtos', async ({ page }) =>{
    const login = new Login(page);
    const cart = new Cart(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await cart.badge();

    await cart.cart();

});