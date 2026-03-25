import { test, expect } from '@playwright/test';
test('Keyboard actions:', async ({ page }) => {

    // Go to the website

    await page.goto('https://gotranscript.com/text-compare');

    // Wait for the source and target textareas to be visible

    const sourceSelector = 'textarea[placeholder="Paste one version of the text here."]';

    const targetSelector = '//textarea[@placeholder="Paste another version of the text here."]';

    await page.waitForSelector(sourceSelector);

    await page.waitForSelector(targetSelector);

    // Type some text into the source textar

    const sampleText = 'Hello Chandan';

    await page.fill(sourceSelector, sampleText);

    // Focus the source textarea and select all text

    await page.focus(sourceSelector);

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Control+C');

    // Focus the target textarea and paste

    await page.focus(targetSelector);

    await page.keyboard.press('Control+V');

    // Assert that the target textarea now contains the copied text

    const targetValue = await page.inputValue(targetSelector);

    expect(targetValue).toBe(sampleText);

});

 