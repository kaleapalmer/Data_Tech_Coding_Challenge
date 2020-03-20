const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function assignClickHandler() {
    //url that we are assigning a click handler to
    const url = "https://curiositystream.com/";
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get(url);

        let priceElement= await driver.wait(until.elementsLocated(By.css("a[href='/signup']")), 30000, 'Timed out after 30 seconds', 5000);

        // console.log(await priceElement.getText());
        for(let e of priceElement) {
                console.log(await e.getText());
            }

        // console.log(itemObj)
    } finally {
        // await driver.quit();
    }
}

/**
 * Will call other functions to perform challenge 2
 */
function execute() {
    assignClickHandler();
}

//call up each challenge
execute();