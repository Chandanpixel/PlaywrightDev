import { test, expect } from '@playwright/test';
 
let page: any;
 
// beforeAll
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  page.setDefaultTimeout(30000);
 
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  console.log('Navigating to the base URL before all test');
});
 
// beforeeach
test.beforeEach('Login Test', async () => {
 
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();
 
  console.log('Login successful');
});
 
 
//Test Case
test('Click on PIM', async () => {
    test.setTimeout(50000);
 
  await page.locator("//span[text()='PIM']").click();
  await page.waitForTimeout(3000);
  expect (await page.locator("//h5[text()='Employee Information']").isVisible()).toBeTruthy();
  console.log('Dashboard is Visible');
});
 
//After each
test.afterEach('Click on Profile', async () => {
    test.setTimeout(50000);
    await page.locator(".oxd-userdropdown-name").click();
 
});
 
 
// afterAll
test.afterAll(async ({ browser }) => {
  await browser.close();
  console.log('Closing browser after all tests');
});
 
 