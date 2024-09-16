// @ts-check
const { test, expect } = require('@playwright/test');

test('has anecdotes title', async ({ page }) => {
  await page.goto('');

  await expect(page.getByText('Anecdotes')).toBeVisible();
});
