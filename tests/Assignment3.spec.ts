import { test, expect } from '@playwright/test';
 
const URL = 'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php';
 
test('Debug - Print all input elements', async ({ page }) => {
  await page.goto(URL);
  await page.waitForLoadState('networkidle');
 
  const inputs = await page.evaluate(() =>
    Array.from(document.querySelectorAll('input, select, textarea, button')).map(el => {
      const e = el as HTMLInputElement;
      return `tag=${e.tagName} id="${e.id}" name="${e.name}" type="${e.type}" value="${e.value}" placeholder="${e.placeholder}"`;
    })
  );
 
  inputs.forEach(i => console.log(i));
});
 
 
test('Task 6 - Fill Complete Form and Submit', async ({ page }) => {
  await page.goto(URL);
  await page.waitForLoadState('networkidle');
 
  await page.locator('#name:visible').fill('Chandan Sahu');
  await page.locator('input[placeholder="name@example.com"]').fill('chandan@example.com');

  // Radio buttons — use force to bypass overlays
  await page.locator('input[type="radio"][value="Male"]').check({ force: true });
 
  await page.locator("#mobile").fill('7787905987');
  await page.locator('#dob').fill('1999-01-05');
 
  await page.locator('#subjects').fill('Maths');
  await page.keyboard.press('Enter');
 
  // Checkboxes — use force to bypass overlays
  await page.locator('input[type="checkbox"][value="Sports"]').check({ force: true });
 
  await page.locator('#picture').fill('123 Main Street, Hyderabad');
 
  await page.locator('#state').click({ force: true });
  await page.getByText('NCR', { exact: true }).click({ force: true });
 
  await page.locator('#city').click({ force: true });
  await page.getByText('Delhi', { exact: true }).click({ force: true });
 
 /* await page.locator('button[type="submit"]').click({ force: true });
  await page.waitForNavigation().catch(() => {}); */
});
 
 
test('Task 7 - Radio Button Handling', async ({ page }) => {
  await page.goto(URL);
  await page.waitForLoadState('networkidle');
 
  await page.locator('#gender').check({ force: true });
 
  expect(await page.locator('#gender').isChecked()).toBe(true);
});
 
 
test('Task 8 - Checkbox Validation', async ({ page }) => {
  await page.goto(URL);
  await page.waitForLoadState('networkidle');
 
  await page.locator('#hobbies').check({ force: true });
  await page.getByRole('checkbox', { name: 'Reading' }).check({ force: true });
  await page.locator('input[type="checkbox"]').check({ force: true });
 
  expect(await page.locator('input[type="checkbox"][value="Sports"]').isChecked()).toBe(true);
  expect(await page.locator('input[type="checkbox"][value="Reading"]').isChecked()).toBe(true);
  expect(await page.locator('input[type="checkbox"][value="Music"]').isChecked()).toBe(true);
});
 
 
test('Task 9 - Form Validation on Empty Submit', async ({ page }) => {
  await page.goto(URL);
  await page.waitForLoadState('networkidle');
 
  await page.locator('button[type="submit"]').click({ force: true });
 
  const validationMessage = await page.locator('input[placeholder="Name"]').evaluate(
    (el: HTMLInputElement) => el.validationMessage
  );
 
  console.log('Validation message:', validationMessage);
  expect(validationMessage).not.toBe('');
});
 