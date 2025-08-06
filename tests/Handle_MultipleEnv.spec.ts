import { test, expect } from '@playwright/test';

// Example: Handling multiple environments using environment variables

    test('should load the homepage', async ({ page }) => {
        
        console.log(process.env.URL);
        console.log(process.env.UserID);
        console.log(process.env.Password);  
    });

    test('should login with environment variables', async ({ page }) => {
        await page.goto(process.env.URL || 'https://www.saucedemo.com/');
        await page.locator("//input[@name='user-name']").fill(process.env.UserID || 'standard_user');
        await page.locator("//input[@name='password']").fill(process.env.Password || 'secret_sauce');
        await page.locator("//input[@name='login-button']").click();

        // Add an assertion to verify successful login
        const inventoryPage = await page.locator(".inventory_list");
        await expect(inventoryPage).toBeVisible();
    });