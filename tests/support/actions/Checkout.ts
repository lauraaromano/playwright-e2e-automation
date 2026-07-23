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

}