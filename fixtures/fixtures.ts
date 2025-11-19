import { test as base, expect } from '@playwright/test';

// Generic fixtures — no POM references
type MyFixtures = {};

export const test = base.extend<MyFixtures>({});

// Navigate to baseURL before each test
test.beforeEach(async ({ page }) => {
  await page.goto(''); // baseURL comes from playwright.config.ts
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  }
});

export { expect };
