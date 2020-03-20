const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function getProductInfo(url) {
    //object that will hold the price and currency of the product
    const itemObj = {}

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(url);

        //Find the ele that holds the currency
        //TODO Find the correct element that holds the currency
        let obj = await driver.findElement(By.xpath("//*[@id=\"viewport\"]/div[4]"));

        // console.log(obj)
        // let objparse = await obj.getText();
        // console.log(objparse)


        //Wait for element that holds the price to load and
        let priceElement= await driver.wait(until.elementLocated(By.css("div[data-test='product-price']")), 30000, 'Timed out after 30 seconds', 5000);
        itemObj.price = await priceElement.getText();

        //TODO parse price from string to int before putting in the object
        // itemObj.price = price.parseInt();
        console.log(itemObj)




        // console.log(itemObj)
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

