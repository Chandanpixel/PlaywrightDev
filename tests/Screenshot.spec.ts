import {test, expect} from '@playwright/test';


test('Capture screenshot of the page (basic)', async ({page}) => {
    await page.goto('https://playwright.dev/docs/screenshots/');

    await page.screenshot({ path: 'screenshot.png' });

    console.log('Screenshot captured successfully');
     

}); 

test ('Capture screenshot of the entire page', async ({page}) => {
    await page.goto('https://playwright.dev/docs/screenshots/');
    await page.screenshot({ path: 'full-page-screenshot.png', fullPage: true });
    console.log('Full page screenshot captured successfully');
    await page.pause();
});

  test('Capture screenshot of a specific element', async ({page}) => {
    await page.goto('https://playwright.dev/docs/screenshots/');
    const element = await page.locator('h1:has-text("Screenshots")');
    await element.screenshot({ path: 'element-screenshot.png' });
    console.log('Element screenshot captured successfully');
    });

test('Capture screenshot of the page by using timestamp', async ({page}) => {
  await page.goto('https://playwright.dev/docs/screenshots/');
 await page.locator('h1:has-text("Screenshots")').screenshot({ path: 'screenshot.png' });
 await page.screenshot({path:`Screenshot/amazon1-${Date.now()}.png`, fullPage: true});
  console.log('Screenshot captured successfully');
 await expect(page).toHaveScreenshot();
});

test ('capture clip specific area of the page', async ({page}) => {
    await page.goto('https://playwright.dev/docs/screenshots/');
    await page.screenshot({ path: 'clip-screenshot.png', clip: { x: 0, y: 0, width: 300, height: 400} });
    console.log('Clipped screenshot captured successfully');
});

test('Screenshot capturing ', async ({page})=> {
 
    await page.goto('https://www.saucedemo.com/');
    await page.screenshot({path:'saucedemo.png'})
    await expect(page).toHaveScreenshot();

});
 