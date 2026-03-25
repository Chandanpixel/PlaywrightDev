import { test, expect } from '@playwright/test';
 
test.only('Checkbox', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://testautomationpractice.blogspot.com/");
   
   page.setDefaultNavigationTimeout(6000);
 
   //multiple checkbox
   const checkLocators = ['//input[@id="monday"]',
    '//input[@id="tuesday"]', '//input[@id="wednesday"]']
 
    for (const checkbox of checkLocators)
    {
        await page.locator(checkbox).check();
   
    }
 
     
    await expect(page.locator('//input[@id="monday"]')).toBeChecked();
    await expect(page.locator('//input[@id="tuesday"]')).toBeChecked();
    await expect(page.locator('//input[@id="wednesday"]')).toBeChecked();
 
   //Uncheck the Wednesday
   for(const checkbox of checkLocators)
   {
    const wednesdayText = await page.locator(checkbox).getAttribute('value');
    console.log(wednesdayText);
    if(wednesdayText?.includes('wednesday'))
 {
    await page.locator(checkbox).uncheck();
 }  }
const checkboxes = page.locator('input[type="checkbox"]');
const count = await checkboxes.count();
 
console.log('Total number of checkboxes is:', count);
await page.waitForTimeout(3000);
});