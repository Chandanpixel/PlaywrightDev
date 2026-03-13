import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Home Page Tests', () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.login("standard_user", "secret_sauce");
    });


    test('verify header on home page', async () => {
        await homePage.verifyHeader();
        const headerText = await homePage.header.textContent();
        expect(headerText).toContain('Products');
    });

    test('add item to cart', async () => {
        const itemId = 'sauce-labs-backpack'; // Example item ID
        await homePage.addToCart(itemId);
        const cartButton = homePage.page.locator('.shopping_cart_link');
        await expect(cartButton).toHaveText('1'); // Assuming 1 item added to cart
    });

    test('go to cart and checkout', async ({ page }) => {
        await homePage.addToCart('sauce-labs-bike-light'); // Add an item to the cart
        await homePage.goToCart();
        await homePage.checkout();
        await homePage.fillCheckoutForm('John', 'Doe', '12345');
        // Add assertions to verify successful checkout
        const checkoutComplete = homePage.page.locator('.complete-header');
        await expect(checkoutComplete).toBeVisible();
      //  const screenshot = await homePage.page.screenshot({ path: 'checkout-complete.png' });
      await expect(page).toHaveScreenshot('checkout-complete.png');
      await expect (page).toHaveScreenshot('checkout-complete1.png', { maxDiffPixels: 100 });
      await expect(page).toHaveScreenshot('checkout-complete2.png', { fullPage: true });
      await expect(page).toHaveScreenshot('checkout-complete3.png', { animations: 'disabled' });
    });
    test('close home page', async () => {
        await homePage.closePage();
        // Verify the page is closed by checking if the page is no longer available
        expect(homePage.page.isClosed()).toBeTruthy();
    });

    test.afterEach(async () => {
        if (!homePage.page.isClosed()) {
            await homePage.closePage();
        }           
    });
    test.afterAll(async () => {
        if (!homePage.page.isClosed()) {
            await homePage.closePage();
        }           
    });
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        homePage = new HomePage(page);
        await homePage.openApplication();
    });
    test.afterAll(async () => {
        if (!homePage.page.isClosed()) {
            await homePage.closePage();
        }
        await homePage.page.context().close();
    });
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        homePage = new HomePage(page);
        await homePage.openApplication();
    });
    test.afterAll(async () => {
        if (!homePage.page.isClosed()) {
            await homePage.closePage();
        }       
        await homePage.page.context().close();
    });
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        homePage = new HomePage(page);
        await homePage.openApplication();
    });
    test.afterAll(async () => {
        if (!homePage.page.isClosed()) {
            await homePage.closePage();
        }       
        await homePage.page.context().close();
    });
});
