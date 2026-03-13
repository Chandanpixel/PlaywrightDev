import { test, expect } from '@playwright/test';


// Test to count all links on the DemoBlaze homepage
// Locating multiple elements 
test('Count all links on DemoBlaze homepage', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    const links = await page.$$('a');
    const count = await links.length;
    console.log("Total no of links: " + count);
    await page.close();
       
});

// Print all the product names on the homepage
test('Print all product names on DemoBlaze homepage', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');  
    await page.waitForSelector('//div[@id="tbodyid"]//div/h4/a');     
    const productNames = await page.$$('//div[@id="tbodyid"]//div/h4/a');
    for (const product of productNames) {
        const name = await product.textContent();
        console.log(name);
    }
    await page.close();
});

