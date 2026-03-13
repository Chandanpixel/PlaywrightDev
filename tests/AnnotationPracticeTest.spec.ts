import { test, expect } from '@playwright/test';

test.describe('Console Tests Group', () => {
    test('console test 1', async ({ page }) => {
        console.log('Test 1: Hello from Playwright!');
    }); 
    
    test('console test 2', async ({ page }) => {
        console.log('Test 2: This is another console message.');
    });

    test('console test 3', async ({ page }) => {
        console.log('Test 3: Playwright test running.');
    });

});

test('console test 4', async ({ page }) => {
    console.log('Test 4: Final console output.');
});

