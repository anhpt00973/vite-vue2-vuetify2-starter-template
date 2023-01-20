// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  await page.goto('https://webmarketers.ca');
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveTitle(/WebMarketers ™ | Ottawa Digital Marketing &amp; Web Design/);
  await page.screenshot({ path: 'tests/screenshots/fullPage.png', fullPage: true })
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
