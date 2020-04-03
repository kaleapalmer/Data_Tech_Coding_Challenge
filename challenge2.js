const {Builder, By, until} = require('selenium-webdriver');

async function assignClickHandler() {
    const url = "https://curiositystream.com/";
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get(url);

        await driver.wait(until.elementLocated(By.css("a[href = '/signup']")));

        const addClickHandlerScript = "const signUpButtons = document.querySelectorAll('a[href=\"/signup\"]');" +
            "for (let i = 0; i < signUpButtons.length; i++) {" +
            "signUpButtons[i].addEventListener('click', function(evt) {" +
                "window.alert(\"Clicked Button \" + (i + 1))});" +
            "}";

        //TODO try making this an async execute
        driver.executeScript(addClickHandlerScript)

    } finally {
    }
}

/**
 * Will call other functions to perform challenge 2
 */
(function execute() {
    assignClickHandler();
})();

