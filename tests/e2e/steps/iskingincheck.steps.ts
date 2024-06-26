import { Given, When, Then } from "@cucumber/cucumber";

import { Locator, Page, chromium, expect } from "@playwright/test";

let page: Page;
let chessboard: Locator;

Given('the user is in the UI', async () => {
    const browser = await chromium.launch();

    const context = await browser.newContext();

    page = await context.newPage();

    await page.goto("http://localhost:3000");
  });

When('the user clicks the start game button', async () => {
  await page.locator('[data-testid="start-game-button"]').click();
});

Then('the user sees a chessboard displayed on the screen', async () => {
  chessboard = page.locator('[data-testid="chessboard"]');

  await expect(chessboard).toBeVisible();
});

Then('the king is placed at E1', async () => {
  const squareE1 = chessboard.locator('[data-index="7-4"]');

  expect(await squareE1.textContent()).toBe('K');
});

Then('the rook is placed at A5', async () => {
  const squareA5 = await chessboard.locator('[data-index="3-0"]');

  await expect(await squareA5.textContent()).toBe('R');
});

Then('a label is shown that indicates that the king is not in check', async () => {
  const isInCheckTextVisible = await page.isVisible('text="The king is not in check"');

  expect(isInCheckTextVisible).toBeTruthy();
});