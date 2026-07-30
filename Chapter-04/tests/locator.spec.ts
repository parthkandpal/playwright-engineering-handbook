import { test, expect } from "@playwright/test";

test("Locate Get Started button", async ({ page }) => {

    await page.goto("https://playwright.dev/");

    const button = page.getByRole("link", {
        name: "Get started"
    });

    await expect(button).toBeVisible();

});