import { test, expect, Page } from '@playwright/test';
 
test('Simple Date Picker Handling', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
 
  const dateInput = page.locator('#datepicker');
  await dateInput.click();
 
  const targetDay = 16;
  const targetMonth = 3;
  const targetYear = 2026;
 
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
 
  while (true) {
    const yearText = await page.locator('.ui-datepicker-year').textContent();
    if (!yearText) break;
    const currentYear = parseInt(yearText);
    if (currentYear === targetYear) break;
    if (currentYear < targetYear) {
      await page.locator('.ui-datepicker-next').click();
    } else {
      await page.locator('.ui-datepicker-prev').click();
    }
  }
 
 
  while (true) {
    const monthText = await page.locator('.ui-datepicker-month').textContent();
    if (!monthText) break;
    const currentMonth = monthNames.indexOf(monthText.trim()) + 1;
    if (currentMonth === targetMonth) break;
    if (currentMonth < targetMonth) {
      await page.locator('.ui-datepicker-next').click();
    } else {
      await page.locator('.ui-datepicker-prev').click();
    }
  }
  await page.locator(`.ui-datepicker-calendar td a:text-is("${targetDay}")`).click();
 
  // Validate
  const selectedDate = await dateInput.inputValue();
 // expect(selectedDate). toBe('3/16/2026');
 expect(selectedDate).toBe('03/16/2026');
  //await page.pause()
});