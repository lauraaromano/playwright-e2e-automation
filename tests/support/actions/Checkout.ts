import { Page, expect } from "@playwright/test"
import { expectFailure } from "node:test";

export class Checkout {
    page: Page
    private itensNoCarrinho = 0;

    constructor(page: Page) {
        this.page = page
    }

    async docheckout() {
        await this.page.locator('#checkout').click();
    }

    async fillform(firstname: string, lastname: string, zip: string) {
        await this.page.getByPlaceholder('First Name').fill(firstname);
        await this.page.getByPlaceholder('Last Name').fill(lastname);
        await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);
    }

    async continue() {
        await this.page.locator('#continue').click();
    }

    async overviewproducts(...products: string[]){
        for (const product of products) {
            await expect(
                this.page.getByRole('link', { name: product, exact: true })
            ).toBeVisible();
        }
    }

    async pegarPrecos(): Promise<number[]> {
        const precos: number[] = [];

        const itens = this.page.locator('.inventory_item_price');
        const total = await itens.count();

        for (let i = 0; i < total; i++) {
            const texto = await itens.nth(i).innerText(); 
            const valor = parseFloat(texto.replace('$', '')); 
            precos.push(valor);
        }

        return precos;
    }

    async verifySubtotal() {
        const precos = await this.pegarPrecos();

        let soma = 0;
        for (const preco of precos) {
            soma += preco;
        }

        const textoSubtotal = await this.page.locator('.summary_subtotal_label').innerText();
        const subtotalDaTela = parseFloat(textoSubtotal.replace('Item total: $', ''));

        console.log('Preços encontrados:', precos);
        console.log('Soma calculada:', soma);
        console.log('Subtotal da tela:', subtotalDaTela);

        expect(soma).toBeCloseTo(subtotalDaTela, 2);
    }

    async finish() {
        await this.page.locator('#finish').click()
    }

    async verifySuccess(){
        const mensagem = this.page.locator('.complete-header');
        await expect(mensagem).toHaveText('Thank you for your order!');
    }

    async backHome(){
        await this.page.getByTestId('back-to-products').click();
        await expect(this.page).toHaveURL('/inventory.html');

    }

    async cancel(){
        await this.page.locator('#cancel').click()
        await expect(this.page).toHaveURL('/cart.html');

    }

    async generatePdf(){
        const downloadPromise = this.page.waitForEvent('download');

        await this.page.getByRole('button', { name: 'Generate PDF order' }).click();
        
        const download = await downloadPromise;
        return download;    
    }

}