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

   
}