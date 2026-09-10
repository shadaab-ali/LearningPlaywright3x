async function testAPI(){

    try{
        let result= await Promise.reject("503 service unavailable");
        console.log('Result', result);
    }
    catch(error){
        console.log('Error',error);
    }
    finally{
        console.log("Clean Up");
    }
}

testAPI();