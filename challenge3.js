const {Builder} = require('selenium-webdriver');

async function manageCookie() {
    const url = "https://www.stadiumgoods.com/";
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get(url);

        const cookieFound = await driver.manage().getCookie('browserClick');
        const cookieValue = cookieFound? cookieFound.value: "";

        const script = "cookieFound = arguments[0];" +
            "cookieValue = arguments[1];" +
            "const navBar = document.querySelector(\"ol[class='nav-primary']\");" +
            "const navButtons = navBar.querySelectorAll(\"a.level0\");" +
            "for (let i = 0; i < navButtons.length; i++) {" +
                "let button = navButtons[i];" +
                "button.addEventListener('click', function(evt) {" +
                    "if (!cookieFound) {" +
                        "document.cookie = 'browserClick=' + button.text;" +
                    "}" +
                    "else {" +
                        "window.alert(cookieValue);" +
                    "}" +
                "})" +
            "}";

        // script will add click handler to buttons and check for 'browserClick cookie'
        await driver.executeScript(script, cookieFound, cookieValue);

        // keeping below commented code to make the string script easier to format if changed

        // for (let i = 0; i < navButtons.length; i++) {
        //     let button = navButtons[i];
        //     button.addEventListener('click', function(evt) {
        //         // chosenBrand = button.text;
        //         if (!cookieFound) {document.cookie = 'browserClick=' + button.text;} else {window.alert(cookieValue);}
        //
        //         window.alert(button.text)
        //         return button.text;
        //     })
        // }



    } finally {
    }

}

/**
 *
 */
(function execute() {
    manageCookie();
})();
