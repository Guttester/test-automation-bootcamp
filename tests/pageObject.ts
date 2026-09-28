import { Page, expect } from '@playwright/test'

export class LoginPage {
    constructor(private page: Page) {}

    async acessarLogin() {
        await this.page.goto('http://zero.webappsecurity.com/index.html')
        await this.page.click('#signin_button')
    }

    async login(username: string, password: string) {
        await this.page.fill('#user_login', username)
        await this.page.fill('#user_password', password)
        await this.page.click('text=Sign in')
    }

    async validarLoginInvalido() {
        const erroMessage = this.page.locator('.alert-error')
        await expect(erroMessage).toContainText('Login and/or password are wrong')
    }
}