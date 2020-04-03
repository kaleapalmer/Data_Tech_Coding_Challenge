const {Builder, By, Key, until} = require('selenium-webdriver');

async function manageCookie() {
    const url = "https://www.stadiumgoods.com/";
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get(url);

        let chosenBrand = "";

        const script = "const navBar = document.querySelector(\"ol[class='nav-primary']\");" +
            "const navButtons = navBar.querySelectorAll(\"a.level0\");" +
            "for (let i = 0; i < navButtons.length; i++) {" +
                "let button = navButtons[i];" +
                "button.addEventListener('click', function(evt) {" +
                    "chosenBrand = button.text;" +
                    "window.alert(button.text)" +
                "})" +
            "}";

        // for (let i = 0; i < navButtons.length; i++) {
        //     let button = navButtons[i];
        //     button.addEventListener('click', function(evt) {
        //         // chosenBrand = ;button.text
        //         window.alert(button.text)
        //         return button.text;
        //     })
        // }

        // const callback = arguments[arguments.length - 1];

        // for (let i = 0; i < navButtons.length; i++) {let button = navButtons[i];button.addEventListener('click', function(evt) {window.alert(button.text)})}

        driver.executeScript(script);
        console.log(chosenBrand);

        const cookieFound = await driver.manage().getCookie("browserClick");
        if(cookieFound) {
            //trigger an alert that displays the cookie value
            const alertScript = "window.alert('" + cookieFound.value + "')";

            driver.executeScript(alertScript);
        }
        else {

            const name = "browserClick";
            // TODO replace the value of the cookie with the shoe brand clicked on
            const value = "newShoe";

            await driver.manage().addCookie(name, value);
        }

    } finally {
    }

}


(function execute() {
    manageCookie();
})();
