const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Button Click Test', function() {
  let driver;

  before(async function() {
    this.timeout(30000);
  
    try {
      const options = new chrome.Options().headless();
      driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  
      console.log('WebDriver initialized. Waiting for 15 seconds...');
      await new Promise(resolve => setTimeout(resolve, 30000));
  
      console.log('Navigating to the application...');
      await driver.get('http://localhost:4200');
    } catch (error) {
      console.error('Error during setup:', error.message);
      throw error;
    }
  });

  it('should click the "Overwatch 2" button', async function() {

    const button = await driver.findElement(
      By.xpath("//mat-card[contains(@mat-card-title, 'Overwatch 2')]//button[contains(@class, 'overlay-button')]")
    );

    await button.click();
  });

  after(async function() {
    await driver.quit();
  });
});