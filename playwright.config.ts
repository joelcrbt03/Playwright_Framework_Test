import { defineConfig } from '@playwright/test';
import configData from './config.json';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: [
    ['line'],
    ['allure-playwright']
  ],
  use: {
    headless: false,
    baseURL: configData.baseURL,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  }
});
