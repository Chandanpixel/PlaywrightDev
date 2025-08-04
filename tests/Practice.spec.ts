
import { test, expect } from '@playwright/test';
test('get started link', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@name='user-name']").fill("standard_user");
    await page.locator("//input[@name='password']").fill("secret_sauce");
    await page.locator("//input[@name='login-button']").click();

    // Add an assertion to verify successful login
    const inventoryPage = await page.locator(".inventory_list");
    await expect(inventoryPage).toBeVisible();

    await page.locator("#add-to-cart-sauce-labs-bike-light").click();
    await page.locator(".shopping_cart_link").click();
    await page.locator("#checkout").click();
    await page.locator("#first-name").fill("John");
    await page.locator("#last-name").fill("Doe");
    await page.locator("#postal-code").fill("12345");
    await page.locator("#continue").click();
    await page.close();

})

// Assertions to verify the login button state and properties
test('Ecommerce Playwright test', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    await page.locator(".ico-login").click();
    await page.getByLabel('Email:').fill("chandan.sahu@gmail.com");
    await page.getByLabel('Password:').fill("Chandan123");
    await expect(page.locator('.login-button')).toHaveCount(1);
    await expect(page.locator('.login-button')).toBeEnabled();
    await expect(page.locator('.login-button')).toHaveText('Log in');
   // await expect(page.locator('.login-button')).toHaveAttribute('href', '/login');
    await expect(page.locator('.login-button')).toHaveClass(/login-button/);
    await expect(page.locator('.login-button')).toBeVisible();
    await expect(page.locator('.login-button')).toBeEnabled();
 //   await expect(page.locator('.login-button')).toBeHidden();
    await expect(page.locator('.login-button')).toContainText('Log in');
    await expect(page).toHaveURL("https://demo.nopcommerce.com/login?returnUrl=%2F");
    await expect(page).toHaveTitle(/nopCommerce demo store/);
    await page.close();
});

// Non retrying assertions for the same ecommerce site - 

test('Ecommerce Playwright test1', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    await page.locator(".ico-login").click();
    await page.getByLabel('Email:').fill("chandan.sahu@gmail.com");
    await page.getByLabel('Password:').fill("Chandan123");

});
// Another test case for the same ecommerce site - GetMethod
test('Ecommerce Playwright test2', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    await page.locator(".ico-login").click();
    await page.getByLabel('Email:').fill("chandan.sahu@gmail.com");
    await page.getByLabel('Password:').fill("Chandan123");
    await page.locator(".login-button").click();
    await page.getByRole('link', { name: 'Computers' }).click();
      // await page.getAttribute('.product-title', 'href');
     // await page.locator('.product-title').first().click();
    // await page.getByPlaceholder('Search').fill('Laptop');
   //  await page.getByAltText('Search').click();
  //  await page.getByTitle('Add to cart').click();
 // await page.getByTestId('cart-icon').click();
  //await page.getByText('Proceed to checkout').click();
  
    await page.close();
});