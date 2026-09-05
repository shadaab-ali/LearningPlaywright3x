function openBrowser(){
    return new  Promise(function (resolve){
        resolve("Browser opened!");
    });
}

function gotoLogin(){
    return new Promise(function (resolve){
        resolve("Login page loaded");
});
}

async function runLoginFlow(){
    let msg1=await openBrowser();
    console.log("Step 1 : ",msg1);

    let msg2=await gotoLogin();
    console.log("Step 2 : ",msg2);


}