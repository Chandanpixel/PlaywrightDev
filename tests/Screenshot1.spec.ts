import {test, expect} from '@playwright/test';
import { time } from 'console';

test('screenshot test', async ({page}) => {
    await page.goto('https://www.flipkart.com/');
    await page.screenshot({path: 'screenshot1.png'});

    console.log('Screenshot taken and saved as screenshot1.png');

});

test('flipkart test', async ({page}) => {
    await page.goto('https://playwright.dev/docs/screenshots');
   
    await page.locator('//div//h1').screenshot({ path: 'Element.png' });
     await page.screenshot({path:`Screenshot/flipkart1-${Date.now()}.png`, fullPage: true});

    console.log('Screenshot taken and saved as Element.png');
});


test('Capture screenshot of the page by using timestamp', async ({page}) => {
  await page.goto('https://www.flipkart.com/');
 //await page.locator('h1:has-text("Screenshots")').screenshot({ path: 'screenshot.png' });

 await page.screenshot({path:`Screenshot/flipkart1-${Date.now()}.png`, fullPage: true});

  console.log('Screenshot captured successfully');
 await expect(page).toHaveScreenshot();

});