import { test, expect } from '@playwright/test';
 
test('Handle all radio buttons', async ({ page }) => {
 
  // Open the website
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
  page.locator('//input[@id="filesToUpload"]').setInputFiles(['C:/Users/SOAIS/Desktop/Playwright Training/tests/Free_Test_Data_100KB_PDF.pdf','C:/Users/SOAIS/Desktop/Playwright Training/tests/Free_Test_Data_100KB_PDF - Copy.pdf'])
 await page.waitForTimeout(3000);


});