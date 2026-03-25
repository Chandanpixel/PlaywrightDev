import { test, expect } from '@playwright/test';
 
test.skip('Mouseaction', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://vinothqaacademy.com/mouse-event/");
 
   page.setDefaultNavigationTimeout(6000);
    const download = await page.locator('//a[text()="About Me"]').nth(1);
//Mouse hover
    await download.hover();
    await page.waitForTimeout(2000);
})
 
    //Right Click
    test.skip('Right Click', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://vinothqaacademy.com/mouse-event/");
 
   page.setDefaultNavigationTimeout(6000);
    const button = await page.locator('#rightBtn');
   
    await expect(button).toBeVisible();
    await button.click({ button: 'right' });
    await page.waitForTimeout(2000);
})
//Drag and Drop
    test.skip('Drag Drop', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://vinothqaacademy.com/mouse-event/");
 
   page.setDefaultNavigationTimeout(6000);
      const drag = page.locator('#dragItem');
      const drop = page.locator('#dropZone');
 
    await drag.dragTo(drop);
    await page.waitForTimeout(2000);
})
 
//DoubleClick
test('Double Click', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://vinothqaacademy.com/mouse-event/");
    const double = await page.locator('#doubleBtn');
    //dbl click
    await double.dblclick();
    //expect(page.locator('#doublestatus')).toBeVisible();
    expect(page.locator('#doublestatus')).toBeTruthy();


})