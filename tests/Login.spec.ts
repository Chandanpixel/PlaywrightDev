import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('loginVerification', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("standard_user", "secret_sauce");
    // Add assertions to verify successful login
});
test('loginWithInvalidCredentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("invalid_user", "wrong_password");
    // Add assertions to verify login failure
    const errorMessage = await page.locator('.error-message-container').textContent();
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
});

test('loginWithEmptyCredentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("", "");
    // Add assertions to verify login failure
    const errorMessage = await page.locator('.error-message-container').textContent();
    expect(errorMessage).toContain('Epic sadface: Username is required');
});

test('loginWithOnlyUsername', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("standard_user", "");
    // Add assertions to verify login failure
    const errorMessage = await page.locator('.error-message-container').textContent();
    expect(errorMessage).toContain('Epic sadface: Password is required');
});
test('loginWithOnlyPassword', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("", "secret_sauce");
    // Add assertions to verify login failure
    const errorMessage = await page.locator('.error-message-container').textContent();
    expect(errorMessage).toContain('Epic sadface: Username is required');
});



 
