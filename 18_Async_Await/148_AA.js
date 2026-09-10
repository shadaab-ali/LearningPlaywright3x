async function n1() {
    return "Pass";
    
}

n1.tehn(function (results){
    console.log(results);
});

async function runTest(){
    let result1 = await Promise.resolve("result1");
    console.log(result1);

    let result2 = await Promise.resolve("result2");
    console.log(result2);
}