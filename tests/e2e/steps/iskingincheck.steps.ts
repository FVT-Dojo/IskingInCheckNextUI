import { Given, When, Then } from "@cucumber/cucumber";

import { chromium, expect } from "@playwright/test";

Given('the user is in the UI', async () => {
    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    this.page = await context.newPage();

    await this.page.goto("http://localhost:3000");
  });

When('the user clicks the start game button', async () => {
  await this.page.locator("[data-id=start-game-button]").click();
});

Then('the user sees a chessboard displayed on the screen', async () => {
  const chessboard = await this.page.locator(`[id="chessboard"]`);

  expect(chessboard).toBeDefined();
});

Then('the king is placed at E1', function () {
// Write code here that turns the phrase above into concrete actions
return true;
});

Then('the rook is placed at A5', function () {
// Write code here that turns the phrase above into concrete actions
return true;
});

Then('a label is shown that indicates that the king is not in check', function () {
// Write code here that turns the phrase above into concrete actions
return true;
});