
function challenge2(url) {
    $.get(url , function( data ) {
        $( ".result" ).html( data );
        alert( "Load was performed." );
    });
    console.log("challenge 2 is finished")
}

/**
 * Will call other functions to perform challenge 1
 */
function execute() {
    //change this for different target URLS
    const url = "https://curiositystream.com/"
    challenge2(url);
}

//call up each challenge
execute();