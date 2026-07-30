import { test, expect } from "@playwright/test";

test("Enterprise locator example", async ({ page }) => {

    await page.goto("https://playwright.dev");

    const getStartedButton = page.getByRole(
        "link",
        {
            name: "Get started"
        }
    );

    await expect(getStartedButton).toBeVisible();

    await getStartedButton.click();

    await expect(page).toHaveURL(/docs/);

});