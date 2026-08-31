let apiCall= new Promise(function (resolve,reject){
    resolve({status:200,body:"User Data"});
});

apiCall.then(function(response){
    console.log(response);
    console.log(response.body);
    console.log(response.status);

});