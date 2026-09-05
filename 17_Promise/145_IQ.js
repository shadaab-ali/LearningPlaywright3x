Promise.resolve("Quick win")
.then(function(msg){
    console.log(msg);
    
})
Promise.reject("Quick loss")
.catch(function(msg){
    console.log(msg);
    
});

let t1=Promise.resolve("Login:Pass");
let t2=Promise.resolve("Search:Pass");
let t3=Promise.resolve("Logout:Pass");   

Promise.all([t1,t2,t3]).then(function (results){
    console.log(results);
});

//--------------------------------------------------

let t11=Promise.resolve("Pass");
let t12=Promise.reject("Fail");
let t13=Promise.resolve("Pass");   

Promise.all([t1,t2,t3])
.then(function (results){console.log(results);})
.catch(function (err){console.log("Stopped: ",err);});

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
])
.then(function (results){
    results.forEach(function (r){
        let val = r.status === "fulfilled" ? r.value : r.results;
        console.log(r.status + " ->" + val);
    });
});