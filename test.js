const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Button Click Test', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('should click the "Overwatch 2" button', async function() {
    await driver.get('http://localhost:4200');

    const button = await driver.findElement(
      By.xpath("//mat-card[contains(mat-card-content, 'Overwatch 2')]//button[contains(@class, 'overlay-button')]")
    );

    await button.click();

  });

  after(async function() {
    await driver.quit();
  });
});
