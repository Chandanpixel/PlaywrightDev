import { test, expect } from '@playwright/test';

test("Amazon pagination - while loop", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });
  const searchBox = page.locator("//input[@id='twotabsearchtextbox']");

  await searchBox.fill('cylinder stove 10kg');
  await searchBox.press('Enter');

   await page.waitForSelector('div.s-main-slot div[data-component-type="s-search-result"]', { timeout: 15000 });
  console.log('Search results loaded.');

  let pagecount=1;

  while(true)
  {
    console.log(`Currently on the page ${pagecount}`)

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); // Scroll to the bottom of the page to ensure all content is loaded

    await page.waitForTimeout(3000);
    const nextButton = await page.locator("a.s-pagination-next");

    if(await nextButton.count() > 0 && await nextButton.isVisible())
    {
      const classValue = await nextButton.getAttribute('class') 
      if(classValue?.includes("s-pagination-disabled"))
      {
        console.log("Next button is disabled")
        break;
      }
      console.log("Clicking on next button")
      await nextButton.scrollIntoViewIfNeeded();
      await page.waitForTimeout(3000);
      await nextButton.click();
      await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(3000);
    pagecount++;
    }
    else
    {
        console.log("Next button is not visible or does not exist")
        break;
    }
  }
console.log("Pagination Ended")
})