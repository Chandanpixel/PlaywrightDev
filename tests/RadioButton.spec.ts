import { test, expect } from '@playwright/test';
 
test.only('Radiobutton', async ({ page }) => {
 
  test.setTimeout(12000);
 
  await page.goto('https://testautomationpractice.blogspot.com/');
  page.setDefaultNavigationTimeout(6000);
 
  const radioButtons = page.locator('input[type="radio"]');
  const count = await radioButtons.count();
 
  console.log('Total radio buttons is equal to:', count);
 
  await page.waitForTimeout(3000);
 
  // Select radio buttons
  const femaleRadio = page.locator('#female');
  const maleRadio = page.locator('#male');
 
  await femaleRadio.check();
  await maleRadio.click();
 
  //  Assertion- male should be checked
  await expect(maleRadio).toBeChecked();
  await expect(femaleRadio).not.toBeChecked();
 
  //  Verify only one radio is selected
  for (let j = 0; j < count; j++) {
    const radio = radioButtons.nth(j);
 
    if (await radio.isChecked()) {
      await expect(radio).toBeChecked();
    } else {
      await expect(radio).not.toBeChecked();
    }
  }
 
  await page.waitForTimeout(3000);
 
});