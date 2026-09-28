import { test } from '@playwright/test'

test.describe('Suite: 04_Debug_Artifacts', () => {
    test.skip('Screenshot @Suite04', async ({ page }) => {
        await page.goto('https://example.com')
        await page.screenshot({ path: 'screenshot.png', fullPage: true })
    })

    test.skip('Elemento sozinho Screenshot @Suite04', async ({ page }) => {
        await page.goto('https://example.com/')
        const element = page.locator('h1')
        await element.screenshot({ path: 'single_element_screenshot.png' })
    })
})