import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.pinterest.com/login');
});


test('valid login', async ({ page }) => {

  await page.locator('//input[@id="email"]').fill('itsfunny@77777gmail.com');
  await page.locator('//input[@id="password"]').fill('funny@2004');

  // await page.locator('//button[@type="submit"]').click();

  await expect(page).toHaveURL(/pinterest\.com/);
});


test('invalid login', async ({ page }) => {

  await page.locator('//input[@id="email"]').fill('itsfunny@77777gmail.com');
  await page.locator('//input[@id="password"]').fill('funny@20');

  await page.locator('//button[@type="submit"]').click();

  await expect(page).toHaveURL(/pinterest\.com/);
});


test('empty email address', async ({ page }) => {

 await page.locator('//input[@id="email"]').fill('');
  await page.locator('//input[@id="password"]').fill('funny@2004');

  await page.locator('//button[@type="submit"]').click();

  await expect(page).toHaveURL(/pinterest\.com/);



});
  

  