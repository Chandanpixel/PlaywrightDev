import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        // The header for the inventory page
        this.header = page.locator('.title');
    }

    async openApplication() {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async verifyHeader(): Promise<void> {
        // This method should only verify the header is visible, not navigate
        // Navigation should be handled in the test or a separate method
        // Use Playwright's expect for assertion
        const { expect } = await import('@playwright/test');
        await expect(this.header).toBeVisible();
    }
async addToCart(itemId: string): Promise<void> {
        // Click on the add to cart button for the specified item
        const addToCartButton = this.page.locator(`#add-to-cart-${itemId}`);
        await addToCartButton.click();
    }
        
    async goToCart(): Promise<void> {
        // Navigate to the shopping cart
        const cartButton = this.page.locator('.shopping_cart_link');
        await cartButton.click();
    }
    async checkout(): Promise<void> {
        // Click on the checkout button
        const checkoutButton = this.page.locator('#checkout');
        await checkoutButton.click();
    }
    async fillCheckoutForm(firstName: string, lastName: string, postalCode: string): Promise<void> {
        // Fill in the checkout form
        await this.page.locator('#first-name').fill(firstName);
        await this.page.locator('#last-name').fill(lastName);
        await this.page.locator('#postal-code').fill(postalCode);
        const continueButton = this.page.locator('#continue');
        await continueButton.click();
        // After continue, click the Finish button to complete checkout
        const finishButton = this.page.locator('#finish');
        await finishButton.click();
    }
    async closePage(): Promise<void> {
        // Close the current page
        await this.page.close();
    }   

}
                       



