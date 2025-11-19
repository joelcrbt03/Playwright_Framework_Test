import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;

    // Set global default timeout for all locator actions
    // this.page.setDefaultTimeout(timeout);
  }
  
  // ----- BasePage ------- //
  async clickElement(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'visible', timeout});
    await locator.click();
  }

  async fillElement(locator: Locator, text: string, timeout: number = 30000) {
    await locator.waitFor({ state: 'visible', timeout});
    await locator.fill(text);
  }

  async getText(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'visible', timeout });
    return locator.textContent();
  }

  async assertTitleContains(substring: string, timeout: number = 30000) {
  await expect(this.page).toHaveTitle(new RegExp(substring, 'i'), { timeout }); // matches anywhere in title, case-insensitive & timeout
}

  async assertVisible(locator: Locator, timeout:number = 30000) {
    await expect(locator).toBeVisible({ timeout });
  }

  // ----- Keyboard ----- //
  async pressKey(key: string) {
    await this.page.keyboard.press(key);
  }
}
