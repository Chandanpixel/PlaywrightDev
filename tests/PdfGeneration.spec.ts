import {test, expect} from '@playwright/test';

test('Generate PDF of the page', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
    const pdfBuffer = await page.pdf({ format: 'A3' }); 
    const fs = require('fs');
    fs.writeFileSync('page.pdf', pdfBuffer);
    console.log('PDF generated successfully');
});


test('Generate PDF', async ({ page }) => {
  await page.goto('https://flipkart.com');

  await page.pdf({path: 'flipkart.pdf'});
});