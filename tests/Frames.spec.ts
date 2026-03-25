import { test, expect } from '@playwright/test';
//Single Frame
test.skip('frames', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://ui.vision/demo/webtest/frames/");
   page.setDefaultNavigationTimeout(3000);
 
  const frame1 = page.frameLocator('frame[src="frame_1.html"]');
 
    await frame1?.locator('[name="mytext1"]').fill('Soais');
   await page.waitForTimeout(3000);
});
 
//Multiple Frames
test.skip('Multiple Frames', async ({ page }) => {
 
  await page.goto('https://ui.vision/demo/webtest/frames/');
 
  const frame1 = page.frameLocator('frame[src="frame_1.html"]');
  await frame1.locator('[name="mytext1"]').fill('Soais');
 
  const frame2 = page.frameLocator('frame[src="frame_2.html"]');
  await frame2.locator('[name="mytext2"]').fill('Playwright');
 
});
 
//Nested frames
test('Nested Frames', async ({ page }) => {
 
  await page.goto('https://ui.vision/demo/webtest/frames/');
 
  const frame3 = page.frame({ url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
 
   const childframes = await frame3?.childFrames();
        await childframes?.[0]?.locator('(//div[@class="uHMk6b fsHoPb"])[1]').click();
    await page.waitForTimeout(3000);
 
})