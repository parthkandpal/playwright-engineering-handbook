import { test, expect } from "@playwright/test";

test("Locator chaining", async ({ page }) => {

    await page.goto("https://playwright.dev");

    const docs = page
        .getByRole("navigation")
        .getByRole("link")
        .filter({
            hasText: "Docs"
        });

    await expect(docs).toBeVisible();

});