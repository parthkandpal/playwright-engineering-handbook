import { test, expect } from "@playwright/test";

test("Locate using text", async ({ page }) => {

    await page.goto("https://playwright.dev");

    await expect(
        page.getByText("Playwright enables reliable web automation for testing, scripting, and AI agents.")
    ).toBeVisible();

});