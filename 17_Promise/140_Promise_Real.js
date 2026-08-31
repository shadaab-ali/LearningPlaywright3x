function openBrowser(){
    return new Promise(function (resolve){
        resolve("Browser has been opened");
})
}

function gotoLogin(){
    return new Promise(function (resolve){
        resolve("Login page loaded");
});
}

openBrowser().then(function (msg){
    console.log("Step 1 ",msg);
    return gotoLogin();
}).catch(function (error) {
    console.log("Error",error);
}).finally(function (){
    console.log("Done execution");
})
