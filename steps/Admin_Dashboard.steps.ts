import { Given, When, Then } from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
let page: Page;
let loginPage: LoginPage;
let dashboardPage: DashboardPage;

Given('I am on the login page', async function () {
page = this.page;
loginPage = new LoginPage(page);
await loginPage.navigate();
});

When('I login as admin', async function () {
await loginPage.login('admin_user', 'admin_password');
});

Then('I should see the dashboard cards', async function () {
dashboardPage = new DashboardPage(page);
await dashboardPage.verifyDashboardCards();
});        

Then('I download the report', async function () {
await dashboardPage.downloadReport();
});