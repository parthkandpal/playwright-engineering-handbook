import { test } from "@playwright/test";

test("Locate using placeholder", async ({ page }) => {

    await page.goto("https://demo.playwright.dev/todomvc");

    await page
        .getByPlaceholder("What needs to be done?")
        .fill("Buy Milk");

});