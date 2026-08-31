let order= new Promise(function (resolve,reject){
    let foodready=true;
    if(foodready){
        resolve("Food is delivered");
    }
    else{
        reject("Order is cancelled");
    }
});

console.log(order);