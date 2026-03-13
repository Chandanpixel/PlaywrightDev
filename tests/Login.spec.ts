
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Scenarios', () => {
    test('loginVerification', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("standard_user", "secret_sauce");
        // You can add an assertion for successful login, e.g., check for inventory pageS
        await expect(page).toHaveURL(/.*inventory.html/);
        console.log('Valid user login successful');
    });

    test('loginWithInvalidCredentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("invalid_user", "wrong_password");
        const errorMessage = await page.locator('.error-message-container').textContent();
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
        console.log('Invalid credentials show correct error message');
        await page.pause();
    });

    test('loginWithEmptyCredentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("", "");
        const errorMessage = await page.locator('.error-message-container').textContent();
        expect(errorMessage).toContain('Epic sadface: Username is required');
        console.log('Empty credentials show username required error');
    });

    test('loginWithOnlyUsername', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("standard_user", "");
        const errorMessage = await page.locator('.error-message-container').textContent();
        expect(errorMessage).toContain('Epic sadface: Password is required');
        console.log('Only username shows password required error');
    });

    test('loginWithOnlyPassword', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("", "secret_sauce");
        const errorMessage = await page.locator('.error-message-container').textContent();
        expect(errorMessage).toContain('Epic sadface: Username is required');
        console.log('Only password shows username required error');
    });

    test('loginWithLockedOutUser', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("locked_out_user", "secret_sauce");
        const errorMessage = await page.locator('.error-message-container').textContent();
        expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
        console.log('Locked out user shows locked out error');
    });

    test('loginWithProblemUser', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("problem_user", "secret_sauce");
        await expect(page).toHaveURL(/.*inventory.html/);
        const inventoryTitle = await page.locator('.title').textContent();
        expect(inventoryTitle).toContain('Products');
        console.log('Problem user login successful');
    });

    test('loginWithPerformanceGlitchUser', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("performance_glitch_user", "secret_sauce");
        await expect(page).toHaveURL(/.*inventory.html/);
        const inventoryTitle = await page.locator('.title').textContent();
        expect(inventoryTitle).toContain('Products');
        console.log('Performance glitch user login successful');
    });
});