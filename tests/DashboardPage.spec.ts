import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Admin Dashboard Page Tests', () => {
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    await dashboardPage.gotoDashboard();
    
  });

  test('should display dashboard header', async ({ page }) => {
    await dashboardPage.verifyDashboardHeader();
    console.log('Dashboard header is visible');
    await page.pause();
  });


  test('should display user statistics', async () => {
    await dashboardPage.verifyUserStatistics();
    console.log('User statistics are visible');
  });

  test('should allow admin to log out', async ({ page }) => {
    await dashboardPage.logout();
    await expect(page).toHaveURL(/login/);
    console.log('Admin logged out successfully');
  });

  // Add more tests as per your DashboardPage methods and Admin_dashboard.steps
});