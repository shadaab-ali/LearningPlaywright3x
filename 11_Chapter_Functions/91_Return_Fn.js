function getStatus(code){
    if(code >=200 && code <=300) return "Successful";
    if(code >=400 && code <=500) return "client error";
    if(code >=500) return "server error";
}

getStatus(201);

function logTest(name){
    console.log(`Running: ${name}`);
    //no return statement
}

logTest("Hi, Good Evening");


function aaa(){
    return [2,3,5,4];
}