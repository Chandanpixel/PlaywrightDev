import { Page, expect } from '@playwright/test';


export class DashboardPage {
constructor(private page: Page) {}

async gotoDashboard() {
    await this.page.goto('https://adminlte.io/themes/v3/index3.html');
}
async verifyDashboardHeader() {
    const header = this.page.locator('h1', { hasText: 'Admin Dashboard' });
    await expect(header).toBeVisible();
}
async verifyUserStatistics() {
    await expect(this.page.locator('.user-statistics')).toBeVisible();
}

async logout() {
    await this.page.click('#logoutButton');
    await expect(this.page).toHaveURL(/login/);
}

async verifyDashboardCards() {
await expect(this.page.locator('.card', { hasText: 'Total Users' })).toBeVisible();
await expect(this.page.locator('.card', { hasText: 'Total Orders' })).toBeVisible();
await expect(this.page.locator('.card', { hasText: 'Revenue' })).toBeVisible();
}


async downloadReport() {
await this.page.click('#reportsMenu');


const downloadPromise = this.page.waitForEvent('download');
await this.page.click('#downloadReportBtn');
const download = await downloadPromise;


await download.saveAs(`downloads/${download.suggestedFilename()}`);
}
}


