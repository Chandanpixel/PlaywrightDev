import { test, expect } from '@playwright/test';
//Basic screenshot
test('Scrrenshots', async ({ page }) => {
    await page.waitForTimeout(2000);
await page.goto("https://www.saucedemo.com/");
await page.screenshot({path: 'screenshot.png'});
console.log('Basic screenshot taken and saved as screenshot.png');
})
 
//Full page Screenshot
test('Full Scrrenshot', async ({ page }) => {
    await page.waitForTimeout(2000);
await page.goto("https://www.saucedemo.com/");
await page.screenshot({ path: 'screenshotfull.png', fullPage: true });
console.log('Full screenshot taken and saved as screenshot.png');
})
 
//Element Screenshot
test('Element Screenshot', async ({ page }) => {
    await page.waitForTimeout(2000);
await page.goto("https://www.saucedemo.com/");
const element= page.locator(".login_logo");
await element.screenshot({ path: 'elementscreenshot.png'});
console.log('Element screenshot taken and saved as screenshot.png');
})
 
//Save screenshots in a folder (/screenshots)
test('Datestamp Screenshot', async ({ page }) => {
    await page.waitForTimeout(2000);
await page.goto("https://www.saucedemo.com/");
await page.screenshot({path: `Screenshot/Saucedemo1_${Date.now()}.png`, fullPage: true});
console.log('Screenshot captured successfully');
})
 
//Verify that screenshot files are created successfully
 
 // await expect(page).toHaveScreenshot();