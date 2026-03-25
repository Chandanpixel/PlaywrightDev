import {expect, test} from '@playwright/test'
test('Web Table',async({page}) => {
await page.goto("https://www.tutorialspoint.com/selenium/practice/webtables.php")
const table=page.locator("table[class='table table-striped mt-3']");
await expect(table).toBeVisible();
console.log(table);
 
const headers=page.locator("table thead tr th");
console.log(headers);
await expect(headers.nth(0)).toHaveText("First Name");
const headertext=await page.locator("table thead tr th").allTextContents();
console.log(headertext);
const expectedtext=["First Name","Last Name","Age","Email","Salary","Department","Action"];
expect(headertext).toEqual(expectedtext);
 
const rows=page.locator("table tbody tr");
const rowCount=await rows.count();
console.log(rowCount);
 
const cols=page.locator("table thead tr th");
const colcount=await cols.count();
console.log(colcount);
 
//Validate that a specific record exists:
//Example: Check if “Cierra Vega” is present in the table
const specificval=page.locator("table tbody tr:has-text('Cierra Vega')");
console.log(specificval);
 
await expect(specificval).toContainText("Cierra Vega");
// Fetch data of a specific row:
//Get Salary of “Alden Cantrell”
 
 
const salry=await page.locator("table tbody tr:has-text('Alden Cantrell') td:nth-child(5)").first().textContent();
console.log("Salary of Alden    Cantrell"+salry);
 
const ro=page.locator("table tbody tr");
const rcount=await ro.count();
 
for(let i=0; i<rcount ;i++){
    const text1= await ro.nth(i).textContent();
 
    for(let j=i+1; j<rcount;j++){
     const text2= await ro.nth(j).textContent();  
   
 
    if(text1==text2)
        console.log("Duplicate found");
 
}
}
 
//Click on Edit/Delete button of a specific row
const edit=await page.locator(".edit-wrap").first().click();
//const regform=page.locator(".modal-content").first();
await page.locator(".modal-content").first().isVisible();
 
//await expect(regform).toBeVisible({ timeout: 5000 });
  //await expect(regform).toBeVisible();
   console.log(" Edit button clicked and modal is visible");
   await page.locator(".btn-close").last().click();
 
 
   //Add a new record using “Add” button and verify it appears in the table
   await page.locator("//span[normalize-space()='Add']").click();
 
 
 const form = page.locator('#RegisterForm').last();
 
    /* 3) Fill the registration form
  */
 
  await page.getByPlaceholder('First Name').fill('Chandan');
await page.getByPlaceholder('Last Name').fill('Sahu');
await page.getByPlaceholder('Enter Email').fill('chandansahu123@gmail.com');
await page.getByPlaceholder('Enter Age').fill('27');
await page.getByPlaceholder('Enter Salary').fill('500034');
await page.getByPlaceholder('Enter Department').fill('SDET');
 
//await page.locator("input[type='submit']").click();
await page.locator('input[type="submit"]').first().click();
 
 
 
// 5) Verify the new row appears in the table
await expect(page.locator('tr', { hasText: 'Chandan Sahu' })).toBeVisible();

//Find the highest salary from the table
 
const sal = await page.locator("table tbody tr td:nth-child(5)").allTextContents();
console.log("All salaries in table:", sal);
 
//unable to convert strings sal into number please help here
const salaryNumbers = sal.map(s => parseFloat(s.replace(/[^0-9.-]+/g,"")));
const highestSalary = Math.max(...salaryNumbers);
console.log("Highest salary in table:", highestSalary);


})