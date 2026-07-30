import { test, expect } from "@playwright/test";

test("XPath example", async ({ page }) => {

    await page.goto("https://playwright.dev");

    const logo = page.locator("//nav");

    await expect(logo).toBeVisible();

});