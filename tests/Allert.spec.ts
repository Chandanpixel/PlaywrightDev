import { test, expect } from '@playwright/test';
 
test.only('Alerthandle', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://testautomationpractice.blogspot.com/");
   
   page.setDefaultNavigationTimeout(2000);
//Simple alert with ok button
page.once('dialog', async dialog => {
    expect (dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
 
});
await page.locator('#alertBtn').click();
   await page.waitForTimeout(2000);
//Confirmation alert
page.once('dialog', async dialog => {
  expect(dialog.message()).toContain('Press a button!');
 await dialog.dismiss();
 
});
    await page.locator('#confirmBtn').click();
    await page.waitForTimeout(2000);
    //Prompt alert
page.once('dialog', async dialog => {
    expect (dialog.message()).toContain('Please enter your name:');
    expect (dialog.defaultValue()).toContain('Harry Potter');
    await page.waitForTimeout(2000);
 await dialog.accept('Soais');
 
});
await page.locator('#promptBtn').click();
   
})

