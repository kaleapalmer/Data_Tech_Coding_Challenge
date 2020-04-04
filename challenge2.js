const {Builder, By, until} = require('selenium-webdriver');

/**
 * This function will add a click handler for every signup button
 * The click handler will trigger an alert printing out which signup button was pressed
 * @returns {Promise<void>}
 */
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

        driver.executeScript(addClickHandlerScript)

    } finally {
    }
}

/**
 * This function will call assignClickHandler()
 */
(function execute() {
    assignClickHandler();
})();

