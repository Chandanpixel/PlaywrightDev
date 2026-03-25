import { test, expect } from '@playwright/test';
 
test.only('Assertions', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://www.nopcommerce.com/en/register?returnUrl=%2Fen");
   
   page.setDefaultNavigationTimeout(3000);
   await expect(page).toHaveURL('https://www.nopcommerce.com/en/register?returnUrl=%2Fen');
   await expect(page).toHaveTitle('Register - nopCommerce');
 
   await expect(page.locator("#register-button")).toBeEnabled();
   await expect.soft(page.locator("#LastName")).toBeEmpty();
 
   //Attribute
   await expect(page.locator("#FirstName")).toHaveAttribute('name');
   //toHaveText
  // await expect.soft(page.locator('//h1[text()="Register"]')).toHaveText('R123');
   //ContainText
   await expect(page.locator('//h1[text()="Register"]')).toContainText('Reg');
 
   await expect.soft(page.locator('//h1[text()="Register"]')).toHaveText('Register');
 
   await page.waitForTimeout(2000);
 
 
})