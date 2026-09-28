import { test, expect } from '@playwright/test'
import { LoginPage } from '../pageObject'

test.describe('Suite: 03_Test_Structure', () => {
    test.beforeEach('Hooks  @Suite03' , async ({page}) => {
        await page.goto('https://example.com')
    })

    test("Login por inputs @Suite03", async ({page})=>{
        const pageTitle= await page.locator('h1')
        await expect(pageTitle).toContainText('Example Domain')
    })

    test('Login inválido @Suite03', async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.acessarLogin()
        await loginPage.login('some username', 'some password')
        await loginPage.validarLoginInvalido()
    })
})