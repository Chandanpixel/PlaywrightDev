import { test, expect } from '@playwright/test';
 
const URL = 'https://www.tutorialspoint.com/selenium/practice/webtables.php';
 
 
async function getAllRows(page: any) {
  const rows = await page.locator('table tbody tr').all();
  const data = [];
  for (const row of rows) {
    const cells = await row.locator('td').allTextContents();
    if (cells.length > 0) data.push(cells.map((c: string) => c.trim()));
  }
  return data;
}
 
 
test('Task 1 - Verify column headers', async ({ page }) => {
  await page.goto(URL);
 
  const headers = await page.locator('table thead th').allTextContents();
  const expected = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department'];
 
  for (const header of expected) {
    expect(headers).toContain(header);
    console.log(`✅ Header found: ${header}`);
  }
});
 
 
test('Task 2 - Fetch and print all rows', async ({ page }) => {
  await page.goto(URL);
 
  const headers = await page.locator('table thead th').allTextContents();
  const rows    = await getAllRows(page);
 
  rows.forEach((row, i) => {
    const rowData: Record<string, string> = {};
    headers.forEach((h, j) => rowData[h.trim()] = row[j]);
    console.log(`Row ${i + 1}:`, rowData);
  });
 
  expect(rows.length).toBeGreaterThan(0);
});
 
 
test('Task 3 - Count rows and columns', async ({ page }) => {
  await page.goto(URL);
 
  const rowCount = await page.locator('table tbody tr').count();
  const colCount = await page.locator('table thead th').count();
 
  console.log('Total rows:', rowCount);
  console.log('Total columns:', colCount);
 
  expect(rowCount).toBeGreaterThan(0);
  expect(colCount).toBeGreaterThan(0);
});
 
 
test('Task 4 - Validate specific record exists', async ({ page }) => {
  await page.goto(URL);
 
  const rows = await getAllRows(page);
  const found = rows.some(row => row.includes('Cierra') && row.includes('Vega'));
 
  console.log('Cierra Vega found:', found);
  expect(found).toBe(true);
});
 
 
test('Task 5 - Fetch salary of specific person', async ({ page }) => {
  await page.goto(URL);
 
  const headers = await page.locator('table thead th').allTextContents();
  const salaryIndex = headers.map(h => h.trim()).indexOf('Salary');
  const rows = await getAllRows(page);
 
  const aldenRow = rows.find(row => row.includes('Alden') && row.includes('Cantrell'));
  expect(aldenRow).toBeDefined();
 
  const salary = aldenRow![salaryIndex];
  console.log('Salary of Alden Cantrell:', salary);
});
 
 
test('Task 6 - Verify duplicate records', async ({ page }) => {
  await page.goto(URL);
 
  const rows   = await getAllRows(page);
  const seen   = new Set<string>();
  let hasDupes = false;
 
  for (const row of rows) {
    const key = row.join('|');
    if (seen.has(key)) {
      console.log('Duplicate found:', row);
      hasDupes = true;
    }
    seen.add(key);
  }
 
  console.log('Has duplicates:', hasDupes);
});
 
test('Task 7 - Click Edit button of specific row', async ({ page }) => {
  await page.goto(URL);
 
  const rows = await page.locator('table tbody tr').all();
 
  for (const row of rows) {
    const cells = await row.locator('td').allTextContents();
    if (cells[0].trim() === 'Cierra' && cells[1].trim() === 'Vega') {
     
      await row.getByRole('link', { name: 'edit' }).click({ force: true });
      console.log('✅ Edit clicked for Cierra Vega');
      break;
    }
  }
 
 
  await expect(page.locator('input').first()).toBeVisible({ timeout: 5000 });
});
 
 
test('Task 8 - Add new record and verify in table', async ({ page }) => {
  await page.goto(URL);
 
  await page.locator('button', { hasText: 'Add' }).click({ force: true });
 
  await expect(page.getByRole('dialog')).toBeVisible();
 
  await page.locator('[placeholder="First Name"]').fill('Hareesh');
  await page.locator('[placeholder="Last Name"]').fill('Reddy');
  await page.locator('[placeholder="Enter Email"]').fill('hareesh@example.com');
  await page.locator('[placeholder="Enter Age"]').fill('3000');
  await page.locator('[placeholder="Enter Salary"]').fill('500000000000000000000000000000000000000');
  await page.locator('[placeholder="Enter Department"]').fill('QA');
 
  await page.getByRole('button', { name: 'Login' }).click();
 
 
});
 
 
 
test('Extra - Validate all emails contain @', async ({ page }) => {
  await page.goto(URL);
 
  const headers    = await page.locator('table thead th').allTextContents();
  const emailIndex = headers.map(h => h.trim()).indexOf('Email');
  const rows       = await getAllRows(page);
 
  for (const row of rows) {
    const email = row[emailIndex];
    console.log('Email:', email);
    expect(email).toContain('@');
  }
});
 
 
test('Extra - Find highest salary', async ({ page }) => {
  await page.goto(URL);
 
  const headers     = await page.locator('table thead th').allTextContents();
  const salaryIndex = headers.map(h => h.trim()).indexOf('Salary');
  const rows        = await getAllRows(page);
 
  const salaries = rows.map(row => parseInt(row[salaryIndex]) || 0);
  const highest  = Math.max(...salaries);
  const topRow   = rows.find(row => parseInt(row[salaryIndex]) === highest);
 
  console.log('Highest salary:', highest);
  console.log('Record:', topRow);
  expect(highest).toBeGreaterThan(0);
});