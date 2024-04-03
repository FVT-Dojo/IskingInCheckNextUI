import { test, expect } from '@playwright/test';

test('Make sure the page has a visible start game button', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const startButton = await page.locator('[data-id="start-game-button"]');

  // Expect a title "to contain" a substring.
  await expect(startButton).toBeVisible();
  expect(await startButton.textContent()).toEqual("Start game");
});