import {chromium, test} from "@playwright/test"

test('my first Test',()=>{
console.log("MY first Test")
});

// with out page fixture these three line is required 
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

test('BasicScript Playwright test', async()=>{
await page.goto("https://flipkart.com")
await page.close();
});

