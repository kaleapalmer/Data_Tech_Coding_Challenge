const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function getProductInfo(url) {
    //object that will hold the price and currency of the product
    const itemObj = {}
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(url);
        let priceElement= await driver.wait(until.elementLocated(By.css("div[data-test='product-price']")), 30000, 'Timed out after 30 seconds', 5000);
        let price = await priceElement.getText();
        console.log(price)
    } finally {
        await driver.quit();
    }
}

function execute() {

    //Change below url for information about different target products
    const url = 'https://www.target.com/p/playstation-174-4-1tb-console/-/A-52416598';

    getProductInfo(url);
}

execute();

