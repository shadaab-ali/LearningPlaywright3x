function openBrowser(callback){
    console.log("Opening the browser");
    setTimeout(function (){
        console.log("Step 1:- browser starting...");
        callback();
    },500);
}

function gotoLoginPage(callback){
    // console.log("Opening the browser");
    setTimeout(function (){
        console.log("Step 2:- LoginPage loaded...");
        callback();
    },500);
}


function enterCredentials(callback){
    // console.log("Opening the browser");
    setTimeout(function (){
        console.log("Step 3:- Credentials entered...");
        callback();
    },500);
}

//This is the callback hell
openBrowser(function (){
    gotoLoginPage(function (){
        enterCredentials(function (){
            console.log("Test is complete");
        })
    })

})