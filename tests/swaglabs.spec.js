import { test, expect } from '@playwright/test';

test('Login with valid user name and password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator("input[data-test='username']").fill("standard_user");
  await page.locator("input[type='password']").fill("secret_sauce");
  await page.locator("input[type='submit']").click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("https://www.saucedemo.com/v1/inventory.html");
});
test('Login with invalid user name and valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator("input[data-test='username']").fill("standard");
  await page.locator("input[type='password']").fill("secret_sauce");
  await page.locator("input[type='submit']").click();
  // Expect a title "to contain" a substring.
  await expect(page.locator("h3[data-test='error']")).toBeVisible();
});
test('Login with valid user name and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator("input[data-test='username']").fill("standard_user");
  await page.locator("input[type='password']").fill("secret");
  await page.locator("input[type='submit']").click();
  // Expect a title "to contain" a substring.
  await expect(page.locator("//h3[@data-test='error']")).toBeVisible();
});
test('Login with invalid user name and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator("input[data-test='username']").fill("standard");
  await page.locator("input[type='password']").fill("secret");
  await page.locator("input[type='submit']").click();
  // Expect a title "to contain" a substring.
  await expect(page.locator("//h3[@data-test='error']")).toBeVisible();
});