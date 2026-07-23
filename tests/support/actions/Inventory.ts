import { Page, expect } from "@playwright/test"

export class Inventory {
    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async filter(filter: string) {
        await this.page.getByTestId('product-sort-container').click()
        await this.page.getByTestId('product-sort-container')
            .selectOption({ label: filter });
    }

    async getProductNames() {
        const nomesNaTela = await this.page.locator('.inventory_item_name').allTextContents();
        return nomesNaTela;
    }

    async getProductNamesInAZOrder() {
        const nomesNaTela = await this.getProductNames();
        const nomesOrdenados = [...nomesNaTela].sort((a, b) => a.localeCompare(b));
        expect(nomesNaTela).toEqual(nomesOrdenados);
    }

    async getProductNamesInZAOrder() {
        const nomesNaTela = await this.getProductNames();
        const nomesOrdenados = [...nomesNaTela].sort((a, b) => b.localeCompare(a));
        expect(nomesNaTela).toEqual(nomesOrdenados);
    }

    async getProductPrices() {
        const precos = await this.page.locator('.inventory_item_price').allTextContents();
        return precos;
    }

    async getProductPricesLowToHighOrder() {
        const precosNaTela = await this.getProductPrices();
        
        const precosOrdenados = [...precosNaTela].sort(
            (a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', ''))
        );
        expect(precosNaTela).toEqual(precosOrdenados);
    }
    async getProductPricesHighToLowOrder() {
        const precosNaTela = await this.getProductPrices();
        
        const precosOrdenados = [...precosNaTela].sort(
            (a, b) => parseFloat(b.replace('$', '')) - parseFloat(a.replace('$', ''))
        );
        expect(precosNaTela).toEqual(precosOrdenados);
    }
   
}