let checkAuth= Promise.resolve("Auth Ok");
let checkDB= Promise.resolve("DB Ok");
let checkCache= Promise.resolve("Cache Ok");

Promise.all(
    [checkAuth,checkCache,checkDB]).then(function (
        results){
console.log("All results: ",results);
    })

    
Promise.all(
    [
        Promise.resolve("Ok"),
        Promise.resolve("DB down"),
        Promise.resolve("Ok"),

    ])
    .then(function (r){console.log(r);})
    .catch(function(err){console.log("Failed",err)})