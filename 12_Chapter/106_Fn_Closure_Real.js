function maxRetryTracker(){
    let attempts=0;
    function tryAgain(testName){
        attempts++;
        if(attempts > max){
            return `${testName} exceeded max retries ${max}`;
        }
        return `Attempt ${attempts}/${max} for ${testName} `;
    };
    return tryAgain;
}

let runTCRetry = maxRetryTracker(3);
console.log("Login");
console.log("Login");
console.log("Login");
console.log("Login");