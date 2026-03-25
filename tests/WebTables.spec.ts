import { test, expect } from '@playwright/test';
 
test.only('webTable', async ({ page }) => {
 
    test.setTimeout(12000);
    await page.goto("https://testautomationpractice.blogspot.com/");
   
  //  page.setDefaultNavigationTimeout(2000);
 
   //Rows
   const rows= await page.locator("#productTable tbody tr");
   const rowCount= await rows.count();
   console.log(rowCount);
   expect(await rows.count()).toBe(5);
 
   //Columns
   const columns= await page.locator("#productTable thead th");
   const cellCount = await columns.count();
   console.log(cellCount);
   expect(await columns.count()).toBe(4);
   
   //Extracting rows and columns and printing the table
   
for (let i = 0; i < rowCount; i++) {
    const columns = rows.nth(i).locator('td');
     const rowData: string[] =[];
 
    for (let j = 0; j < cellCount; j++) {
       
      rowData.push(await columns.nth(j).innerText());
    }
 
    console.log(rowData);
  }
//Validate specific cell using assertions
   const matchRow = rows.filter({
    has: page.locator('td'),
    hasText: 'Tablet'
   })
   await matchRow.locator('input').check();
   await page.waitForTimeout(3000);
 
});