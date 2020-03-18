const curl = require("curl");
const jsdom = require("jsdom");

/**
 * Parses all the html from the target website and returns price
 * @param html the entire HTML of the target page to be parsed
 */
function parseData(html) {
    const {JSDOM} = jsdom;
    const dom = new JSDOM(html);
    const $ = (require('jquery'))(dom.window);

    let priceElement = $("[data-test=product-price]");
    console.log(priceElement.length);


}

function challenge1(url) {
    curl.get(url, null, (err,resp,body)=> {
        if (resp && resp.statusCode == 200) {
            console.log(body)
            parseData(body);
        } else {
            //some error handling
            console.log("Invalid URL parameter passed");
        }
    })

    console.log("challenge1 completed")

}


function execute() {
    //change this for different target URLS
    const url = "https://www.target.com/p/playstation-174-4-1tb-console/-/A-52416598"
    challenge1(url);
}

//call up each challenge
execute();