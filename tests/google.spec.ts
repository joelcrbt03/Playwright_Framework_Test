import { test, expect } from '../fixtures/fixtures';
import { BasePage } from '../BasePage/BasePage';
import { GooglePage } from '../PageObjects/POM_GooglePage';

test('Google Search Basic Test', async ({ page }) => {
    const basePage = new BasePage(page);
    const googlePage = new GooglePage(page);

    await basePage.fillElement(googlePage.searchBox, 'Playwright POM Framework');
    await basePage.clickElement(googlePage.searchButton);
    await basePage.assertTitleContains('google');

    // await basePage.assertVisible(googlePage.firstResultLink);
    // await basePage.clickElement(googlePage.firstResultLink);
});
