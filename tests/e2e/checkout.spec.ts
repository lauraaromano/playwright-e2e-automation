import { test } from '@playwright/test';
import { Login } from '../support/actions/Login';
import { admin } from '../support/fixtures/users.json';
import { products } from '../support/fixtures/products.json';
import { user } from '../support/fixtures/checkoutinfo.json';
import { Cart } from '../support/actions/Cart';
import { Checkout } from '../support/actions/Checkout';


test('deve realizar checkout com sucesso', async ({ page }) => {
    const login = new Login(page);
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await login.visit();
    await login.submit(admin.username, admin.password);
    await login.isLoggedIn();

    await cart.addProductToCart(products[0]);
    await cart.addProductToCart(products[1]);

    await cart.badge();

    await cart.cart(products[0],products[1]);

    await checkout.docheckout();
    await checkout.fillform(user.first, user.last, user.zip);

    await checkout.continue();

    await checkout.overviewproducts(products[0].name,products[1].name);
});