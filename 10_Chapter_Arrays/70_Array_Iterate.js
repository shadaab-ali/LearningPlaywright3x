// let tests=["login","checkout","search"];

// for(let i=0;i<tests.length;i++){
//     console.log(tests[i]);
// }

// for (let test in tests) {  
//     console.log(test);
// }


// tests.forEach((test,index) => {
//         console.log(`${index} : ${test}`);

// });

// const aa=[1,2,3];
// aa.push(4);
// console.log(aa);

// let a=5;
// let b=a++;
// console.log(a, b);

let status=200;
switch(status){
    case 200: 
    console.log("PASS - OK: Request Successful");
    break;
    case 201: 
    console.log("PASS - Created: Resource created successfully");
    break;
    case 301: 
    console.log("WARNING - Moved Permanently: URL has changed");
    break;
    case 400: 
    console.log("FAIL - Bad Request: Check request payload");
    break;
    case 401: 
    console.log("FAIL - Unauthorized: Check auth token");
    break;
    case 403: 
    console.log("FAIL - Forbidden: Insufficient permissions");
    break;
    case 404: 
    console.log("FAIL - Not Found: Check endpoint URL");
    break;
    case 200: 
    console.log("PASS - OK: Request Successful");
    break;
    case 200: 
    console.log("PASS - OK: Request Successful");
    break;
}