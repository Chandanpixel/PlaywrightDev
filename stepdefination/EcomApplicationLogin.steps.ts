import { Given, When, Then, } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
let page: Page;
let homePage: HomePage;

Given('I am on the Sauce Demo login page', async function () {
  page = await this.browser.newPage();
  homePage = new HomePage(page);
  await homePage.openApplication();
});

When('I enter username {string} and password {string}', async function (username: string, password: string) {
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
});

When('I click the login button', async function () {
  await page.locator('[data-test="login-button"]').click();
});

Then('I should be redirected to the inventory page', async function () {
  await expect(page).toHaveURL(/.*inventory.html/);
});

When('I add {string} to the cart', async function (itemName: string) {
  const itemId = itemName.toLowerCase().replace(/ /g, '-');
  await homePage.addToCart(itemId);
});

When('I go to the cart', async function () {
  await homePage.goToCart();
});

Then('I should see {string} in the cart', async function (itemName: string) {
  await expect(page.locator('.cart_item .inventory_item_name')).toHaveText(itemName);
});

When('I proceed to checkout', async function () {
  await homePage.checkout();
});

When('I fill in first name {string}, last name {string}, and postal code {string}', async function (firstName: string, lastName: string, postalCode: string) {
  await homePage.fillCheckoutForm(firstName, lastName, postalCode);
});

When('I complete the purchase', async function () {
  // Already handled in fillCheckoutForm
});

Then('I should see the message {string}', async function (message: string) {
  await expect(page.locator('.complete-header')).toHaveText(message);
  await homePage.closePage();
});


// Additional step definitions for error handling and edge cases can be added here as needed. 

 
