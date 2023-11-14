const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Button Click Test', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('should click the "Overwatch 2" button', async function() {
    await driver.get('http://localhost:4200'); // replace 'your-app-port' with your app's port

    // Locate the button based on its text content and surrounding structure
    const button = await driver.findElement(
      By.xpath("//mat-card[contains(mat-card-content, 'Overwatch 2')]//button[contains(@class, 'overlay-button')]")
    );

    // Click the button
    await button.click();

    // Add assertions or further actions if needed
  });

  after(async function() {
    await driver.quit();
  });
});