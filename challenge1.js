const {Builder, By, until} = require('selenium-webdriver');

/**
 * This function will find price and currency of a given target product
 * @param url string of target product
 * @returns {Promise<string|{}>} promise of the product object or invalid url message
 */
async function getProductInfo(url) {
    if (!url.includes("https://www.target.com/p/")) {
        return "Invalid URL. URL needs to be a target product."
    }

    const targetProductObj = {};

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(url);

        //Find the DOM element containing info about the currency
        const productWebInfo = await driver.findElement(By.xpath("//*[@id=\"viewport\"]/div[4]//*")).getAttribute("textContent");
        const productWebInfoJson = JSON.parse(productWebInfo);

        //Find currency in JSON object
        const itemCurrency = productWebInfoJson["@graph"][0]["offers"]["priceCurrency"];

        //Find the DOM element containing the price
        let itemPrice= await driver.wait(until.elementLocated(By.css("div[data-test='product-price']")), 30000, 'Timed out after 30 seconds', 5000).getText();

        targetProductObj.price = parseFloat(itemPrice.substr(1)); //parsing price into float without the "$" symbol
        targetProductObj.currency = itemCurrency;
        return(targetProductObj);
    }
    finally {
        await driver.quit();
    }
}

/**
 * This function will call getProductInfo() and print out the result
 */
(function execute() {
    const url = 'https://www.target.com/p/playstation-174-4-1tb-console/-/A-52416598';
    getProductInfo(url).then(result => console.log(result));
})();


