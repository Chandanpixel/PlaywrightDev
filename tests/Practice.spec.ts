import { test, expect } from '@playwright/test';

test.describe('SauceDemo and nopCommerce Tests', () => {   

    test('SauceDemo: Complete purchase flow', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("//input[@name='user-name']").fill("standard_user");
        await page.locator("//input[@name='password']").fill("secret_sauce");
        await page.locator("//input[@name='login-button']").click();
        await page .waitForURL("https://www.saucedemo.com/inventory.html");
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await expect(page.locator(".title")).toHaveText("Products");
        await expect(page.locator(".inventory_item")).toHaveCount(6);
        await expect(page.locator(".inventory_item_name")).toHaveText([
            "Sauce Labs Backpack",
            "Sauce Labs Bike Light",
        ]);

        

        // Assert successful login
        const inventoryPage = page.locator(".inventory_list");
        await expect(inventoryPage).toBeVisible();
        console.log('SauceDemo: Valid user login successful');

        await page.locator("#add-to-cart-sauce-labs-bike-light").click();
        await page.locator(".shopping_cart_link").click();
        await page.locator("#checkout").click();
        await page.locator("#first-name").fill("John");
        await page.locator("#last-name").fill("Doe");
        await page.locator("#postal-code").fill("12345");
        await page.locator("#continue").click();
        await page.locator("#finish").click();
        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
        console.log('SauceDemo: Product purchased and order completed');
        await page.close();
    });

test('nopCommerce: Login page assertions', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    await page.locator(".ico-login").click();
    await page.locator('input#Email').fill("chandan.sahu@gmail.com");
    await page.locator('input#Password').fill("Chandan123");
    await expect(page.locator('.login-button')).toHaveCount(1);
    await expect(page.locator('.login-button')).toBeEnabled();
    await expect(page.locator('.login-button')).toHaveText('Log in');
    await expect(page.locator('.login-button')).toHaveClass(/login-button/);
    await expect(page.locator('.login-button')).toBeVisible();
    await expect(page.locator('.login-button')).toContainText('Log in');
    await expect(page).toHaveURL("https://demo.nopcommerce.com/login?returnUrl=%2F");
    await expect(page).toHaveTitle(/nopCommerce demo store/);
    console.log('nopCommerce: Login page assertions passed');
    await page.close();
});

    test('nopCommerce: Login form filled', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    await page.locator(".ico-login").click();
    await page.locator('input#Email').fill("chandan.sahu@gmail.com");
    await page.locator('input#Password').fill("Chandan123");
    console.log('nopCommerce: Login form filled');
    await page.close();
});

  test('nopCommerce: Navigate to Computers after login', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    await page.locator(".ico-login").click();
    await page.locator('input#Email').fill("chandan.sahu123@gmail.com");
    await page.locator('input#Password').fill("chandan123");
    await page.locator(".login-button").click();
    // Wait for navigation after login
    // Now click on Computers link
    await page.getByRole('link', { name: 'Computers' }).click();
    await expect(page).toHaveURL(/.*computers/);
    console.log('nopCommerce: Navigated to Computers after login');
    await page.close();
});

});
