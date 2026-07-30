import { test } from "@playwright/test";

test("Locate image using alt text", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/");

    await page
        .getByAltText("Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.")
        .click();

});