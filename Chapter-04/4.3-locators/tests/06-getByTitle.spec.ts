import { test } from "@playwright/test";

test("Locate image using alt text", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/tooltips");

    await page
        .getByAltText("Tooltip on start")
        .isVisible();

});