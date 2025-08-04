# Allure Report Instructions for Playwright

## How to Generate Allure Report

1. **Run your Playwright tests:**
   ```
npx playwright test
   ```
   This will generate the Allure results in the `allure-results` folder.

2. **Generate the Allure HTML report:**
   ```
npx allure generate allure-results --clean -o allure-report
   ```

3. **Open the Allure report in your browser:**
   ```
npx allure open allure-report
   ```

## Notes
- The Allure reporter is now configured in your `playwright.config.ts`.
- You can add these commands as npm scripts for convenience.

---

## Example npm scripts (add to your package.json):

```
"scripts": {
  "test": "playwright test",
  "allure:generate": "allure generate allure-results --clean -o allure-report",
  "allure:open": "allure open allure-report"
}
```

---

For more details, see the Allure Playwright documentation: https://github.com/allure-framework/allure-js/tree/master/packages/allure-playwright
