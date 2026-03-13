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

    test('should add an item to the cart', async ({ page }) => {
        await page.goto(process.env.URL || 'https://www.saucedemo.com/');
        await page.locator("//input[@name='user-name']").fill(process.env.UserID || 'standard_user');
        await page.locator("//input[@name='password']").fill(process.env.Password || 'secret_sauce');
        await page.locator("//input[@name='login-button']").click();

        // Add an item to the cart
        await page.locator("#add-to-cart-sauce-labs-backpack").click();
        await page.locator(".shopping_cart_link").click();

        // Verify the item is in the cart
        const cartItem = await page.locator(".cart_item");
        await expect(cartItem).toBeVisible();
    });

    test('should complete checkout', async ({ page }) => {
        await page.goto(process.env.URL || 'https://www.saucedemo.com/');
        await page.locator("//input[@name='user-name']").fill(process.env.UserID || 'standard_user');
        await page.locator("//input[@name='password']").fill(process.env.Password || 'secret_sauce');
        await page.locator("//input[@name='login-button']").click();

        // Add an item to the cart
        await page.locator("#add-to-cart-sauce-labs-backpack").click();
        await page.locator(".shopping_cart_link").click();
        await page.locator("#checkout").click();

        // Fill in checkout form
        await page.locator("#first-name").fill("John");
        await page.locator("#last-name").fill("Doe");
        await page.locator("#postal-code").fill("12345");
        await page.locator("#continue").click();
        
        // Complete checkout
        await page.locator("#finish").click();

        // Verify checkout completion
        const successMessage = await page.locator(".complete-header");
        await expect(successMessage).toHaveText('THANK YOU FOR YOUR ORDER');
    }); 

    test('should handle multiple environments', async ({ page }) => {
        const envUrl = process.env.URL || 'https://www.saucedemo.com/';
        await page.goto(envUrl);
        
        // Perform login and other actions as needed
        await page.locator("//input[@name='user-name']").fill(process.env.UserID || 'standard_user');
        await page.locator("//input[@name='password']").fill(process.env.Password || 'secret_sauce');
        await page.locator("//input[@name='login-button']").click();

        // Verify the page title or any other element to confirm successful navigation
        await expect(page).toHaveTitle(/Swag Labs/);
    });

    test('should handle environment-specific assertions', async ({ page }) => {
        const envUrl = process.env.URL || 'https://www.saucedemo.com/';
        await page.goto(envUrl);
        
        // Perform login
        await page.locator("//input[@name='user-name']").fill(process.env.UserID || 'standard_user');
        await page.locator("//input[@name='password']").fill(process.env.Password || 'secret_sauce');
        await page.locator("//input[@name='login-button']").click();

        // Assert that the inventory page is visible
        const inventoryPage = await page.locator(".inventory_list");
        await expect(inventoryPage).toBeVisible();
    });

      
