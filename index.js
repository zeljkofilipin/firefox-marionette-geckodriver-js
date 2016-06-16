const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const Capabilities = require('selenium-webdriver/lib/capabilities').Capabilities;

var capabilities = Capabilities.firefox();

// Tell the Node.js bindings to use Marionette.
// This will not be necessary in the future,
// when Selenium will auto-detect what remote end
// it is talking to.
capabilities.set('marionette', true);

var driver = new webdriver.Builder().withCapabilities(capabilities).build();
driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
