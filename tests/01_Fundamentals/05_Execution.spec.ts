import { test } from '@playwright/test'
import { LoginPage } from '../pageObject'

test.describe.parallel('Suite: 05_Execution', () => {
    test('Acessando link1 @Suite05', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
    })

    test('Acessando link2 @Suite05', async ({ page }) => {
        await page.goto('https://example.com')
    })

    test('Login inválido @Suite05', async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.acessarLogin()
        await loginPage.login('some username', 'some password')
        await loginPage.validarLoginInvalido()
    })
})