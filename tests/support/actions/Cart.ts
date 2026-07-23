import { Page, expect } from "@playwright/test"
import { expectFailure } from "node:test";

export class Cart {
    page: Page
    private itensNoCarrinho = 0;

    constructor(page: Page) {
        this.page = page
    }

    async addProductToCart(product: { name: string; price: number }) {
        const productCard = this.page.locator('.inventory_item')
            .filter({ hasText: product.name });

        const precoTexto = await productCard.getByTestId('inventory-item-price').textContent();
        const precoNumero = parseFloat((precoTexto ?? '').replace('$', ''));

        expect(precoNumero).toBe(product.price);

        await productCard.getByRole('button', { name: 'Add to cart' }).click();

        this.itensNoCarrinho++;
    }

    async cart(...products: { name: string; price: number }[]) {
        await this.page.locator("#shopping_cart_container").click();

        for (const product of products) {
            const cartItem = this.page.locator('.cart_item')
                .filter({ hasText: product.name });

            await expect(cartItem).toBeVisible();

            const precoTexto = await cartItem.getByTestId('inventory-item-price').textContent();
            const precoNumero = parseFloat((precoTexto ?? '').replace('$', ''));

            expect(precoNumero).toBe(product.price);
        }
    }

    async remove(product: string) {
        const productCard = this.page.getByTestId('inventory-item')
            .filter({ hasText: product });

        await productCard.getByRole('button', { name: 'Remove' }).click();
        
        this.itensNoCarrinho--;

    }

    async removeFromCart(product: string) {
        const cartItem = this.page.locator('.cart_item')
            .filter({ hasText: product });

        await cartItem.getByRole('button', { name: 'Remove' }).click();

        this.itensNoCarrinho--;
    }   

    async badge(){
        if (this.itensNoCarrinho === 0) {
            await expect(this.page.getByTestId('shopping-cart-badge')).not.toBeVisible();
            return;
        }

        await expect(this.page.getByTestId('shopping-cart-badge'))
            .toHaveText(this.itensNoCarrinho.toString());
            
    }

    async ContinueShopping(){
        await this.page.locator('#continue-shopping').click();
    }

  

}