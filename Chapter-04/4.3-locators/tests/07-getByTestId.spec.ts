import { test } from "@playwright/test";
//This test will be skipped due to use of .skip. Remove .skip to run the test
test.skip("Locate using test id", async ({ page }) => {

    await page.goto("https://example.com");

    await page
        .getByTestId("submit-button")
        .click();

});