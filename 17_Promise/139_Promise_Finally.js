let apiCall= new Promise(function (resolve,reject){
    resolve({statud:200});
});

apiCall.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Finally block executed");
})