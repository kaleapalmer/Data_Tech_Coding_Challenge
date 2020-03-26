const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');





async function assignClickHandler() {
    //url that we are assigning a click handler to
    const url = "https://curiositystream.com/";
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get(url);

        let signUpElement = await driver.wait(until.elementsLocated(By.css("a[href='/signup']")), 30000, 'Timed out after 30 seconds', 5000);
        // let priceElement= await driver.wait(until.elementLocated(By.css("a[href='/signup']")), 30000, 'Timed out after 30 seconds', 5000);

        console.log(await driver.getCurrentUrl());
        // console.log(await priceElement.getText())
        // await driver.wait(until.elementIsSelected)
        // console.log(await priceElement.getText());

        const signUpPromiseList = [];

        for(let e of signUpElement) {
            // console.log("looping")
            let signUpPromise = driver.wait(until.elementIsSelected(e));
            // console.log(signUpPromise);
            signUpPromiseList.push(signUpPromise);
            // await driver.wait(until.elementIsSelected(e))
            // console.log(await driver.getCurrentUrl());
            // console.log("end of loop")
        }
        console.log("out of the loop")
        // console.log(signUpPromiseList);
        promise.race(signUpPromiseList).then(function(value) {
            console.log(value)
        })


        // console.log(itemObj)
    } finally {
        await driver.quit();
    }
}

/**
 * Will call other functions to perform challenge 2
 */
(function execute() {
    assignClickHandler();
})();

