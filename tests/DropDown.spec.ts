import { test, expect } from '@playwright/test';
 
test.only('dropdown', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://testautomationpractice.blogspot.com/");
   
   page.setDefaultNavigationTimeout(6000);
 
   await page.locator('#country').selectOption('India');//Visible Text(value)
   await page.locator('#country').selectOption({label:'India'});//Label
   await page.locator('#country').selectOption({index:9});//Index
   
await page.waitForTimeout(3000);
//assertion
await expect(page.locator('#country')).toHaveValue('india');
await page.waitForTimeout(3000);
})