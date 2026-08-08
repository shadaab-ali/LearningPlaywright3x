let result= ["pass","fail","error"];

result.indexOf("fail");
console.log("result",result);

result.indexOf("skip");
console.log("result1 ",result.indexOf("skip"));


console.log(result.lastIndexOf("fail"));
console.log("result3 ",result.includes("fail"));