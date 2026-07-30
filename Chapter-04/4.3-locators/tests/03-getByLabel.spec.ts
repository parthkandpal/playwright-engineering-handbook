import { test } from "@playwright/test";

test("getByLabel example", async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/default.asp");

    await page
        .getByLabel("Search field")
        .isVisible;

});