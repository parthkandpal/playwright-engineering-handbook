import { test, expect } from "@playwright/test";

test("Filter locator", async ({ page }) => {

    await page.goto("https://playwright.dev");

    const navigation = page
        .getByRole("navigation")
        .getByRole("link", {
            name: "Docs"
        });

    await expect(navigation).toBeVisible();

});