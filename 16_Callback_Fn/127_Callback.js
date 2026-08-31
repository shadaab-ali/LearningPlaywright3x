function placeOrder(item,callback){
    console.log("Order something");
    callback();
}

placeOrder("Rice",()=>{
    console.log("Placed Order");

})