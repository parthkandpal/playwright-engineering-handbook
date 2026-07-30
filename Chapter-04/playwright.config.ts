import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 30_000,

  retries: 1,

  use: {
    headless: true,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure",

    viewport: {
      width: 1440,
      height: 900
    }
  },

  reporter: [
    ["list"],
    ["html"]
  ]
});