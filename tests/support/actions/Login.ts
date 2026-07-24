import { Page, expect } from "@playwright/test"

export class Login {
    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async login(email: string, password: string) {
        await this.page.goto('/')
        const loginForm = this.page.locator('.login-box > form')
        await expect(loginForm).toBeVisible()
        await this.page.getByPlaceholder('Username').fill(email)
        await this.page.getByPlaceholder('Password').fill(password)
        await this.page.getByTestId('login-button').click()
    }

   async IsLoggedIn(){
        await expect(this.page).toHaveURL('/inventory.html');
   }

    async alertHaveText(text: string) {
        const alert = this.page.locator('.error-message-container');
        await expect(alert).toHaveText(text);
    }
    async Logout() {
        await this.page.locator('#react-burger-menu-btn').click();
        await this.page.locator('nav').getByTestId('logout-sidebar-link').click();
        await expect(this.page).toHaveURL('/');
    }
}