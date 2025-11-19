import { defineConfig, devices } from '@playwright/test';
import configData from './config.json';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  use: {
    headless: process.env.CI ? true : false, // true in GitHub Actions, false locally
    baseURL: configData.baseURL,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
});