import { test,expect } from '@playwright/test'

test("Simple basic test", async ({page})=>{
    await page.goto('https://example.com')
    const pageTitle= await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
})

test.describe('Suite: 01_Basic_Interactions', () => {
    test("Clicando no elemento", async ({page})=>{
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.click('text=Sign in')

        const erroMessage= await page.locator('.alert-error')
        await expect(erroMessage).toContainText('Login and/or password are wrong')
    })

    test.skip("Selectores", async ({page})=>{
        // Text
        await page.click('text=some text')

        // Css Selectores
        await page.click('button')
        await page.click('#id')
        await page.click('.class')

        // Only visible Css Selector
        await page.click('.submit-button:visible')

        // Combinations
        await page.click('#username .first')

        // XPath
        await page.click('//button')
    }) 

    test("Login por inputs", async ({page})=>{
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        
        await page.type('#user_login','some username')
        await page.type('#user_password','some password')
        await page.click('text=Sign in')

        const erroMessage= await page.locator('.alert-error')
        await expect(erroMessage).toContainText('Login and/or password are wrong')

    })

})