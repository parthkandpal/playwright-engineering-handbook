import { Page, Locator } from "@playwright/test";

export class PlaywrightHomePage {

    readonly page: Page;

    readonly getStarted: Locator;

    readonly docs: Locator;

    constructor(page: Page) {

        this.page = page;

        this.getStarted = page.getByRole("link", {
            name: "Get started"
        });

        this.docs = page.getByRole("link", {
            name: "Docs"
        });

    }

    async open() {

        await this.page.goto("https://playwright.dev");

    }

}