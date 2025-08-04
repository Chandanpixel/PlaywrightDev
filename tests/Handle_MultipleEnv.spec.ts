import { test, expect } from '@playwright/test';

// Example: Handling multiple environments using environment variables

    test('should load the homepage', async ({ page }) => {
        
        console.log(process.env.URL);
        console.log(process.env.UserID);
        console.log(process.env.Password);  
    });
