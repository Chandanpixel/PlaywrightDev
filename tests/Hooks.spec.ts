import { test, expect } from '@playwright/test';

test.beforeEach("Hooks", async ({ page }) => {
    console.log("This is before each hook:Playwright Test")
    await page.goto('https://flipkart.com');

});

test('should have correct page title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    
});

test('should find getting started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const gettingStarted = page.locator('text=Getting Started');
    await expect(gettingStarted).toBeVisible();
    
});

test('should navigate to docs', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.click('text=Docs');
    await expect(page).toHaveURL(/docs/);
    
});

test.afterEach("Hooks", async ({ page }) => {
    console.log("This is after each hook:Playwright Test")
    await page.goto('https://demo.nopcommerce.com/');
    await page.close();
});


