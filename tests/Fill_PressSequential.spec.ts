import { test, expect } from '@playwright/test';

test('demo: goto Google', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
    await page.locator("#APjFqb").pressSequentially('Playwright', { delay: 300 });
    await page.locator("#APjFqb").press("ArrowDown+ArrowDown+ArrowDown", { delay: 1000 });
    await page.locator("#APjFqb").press("Enter", { delay: 2000 });
});
