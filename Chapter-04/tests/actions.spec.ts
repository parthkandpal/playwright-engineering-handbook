import { test, expect } from "@playwright/test";

test("Navigate to documentation", async ({ page }) => {

    await page.goto("https://playwright.dev/");

    await page
        .getByRole("link", {
            name: "Get started"
        })
        .click();

    await expect(page).toHaveURL(/docs/);

});