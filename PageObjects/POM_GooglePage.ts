import { Page, Locator } from '@playwright/test';

export class GooglePage {
  readonly page: Page;

  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly luckyButton: Locator;
  readonly resultsStats: Locator;
  readonly firstResultLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Homepage locators
    this.searchBox = page.locator('textarea[name="q"]');
    this.searchButton = page.locator('(//input[@value="Google Search"])[1]');
    this.luckyButton = page.locator('input[name="btnI"]');

    // Search Results locators
    this.resultsStats = page.locator('#result-stats');
    this.firstResultLink = page.locator('h3');
  }
}
