import { test, expect } from '@playwright/test';

test('Login Sucess', async ({ page }) => {
  await page.goto('http://localhost:5110/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@demo.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Admin123!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Administrador' }).click();
  await expect(page.getByRole('article')).toContainText('Hello, world! Welcome to your new app Administrador.');
});