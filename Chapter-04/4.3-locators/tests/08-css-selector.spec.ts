import { test, expect } from "@playwright/test";

test("CSS selector example", async ({ page }) => {

    await page.goto("https://playwright.dev");

    const logo = page.locator(".navbar__logo");

    await expect(logo).toBeVisible();

});