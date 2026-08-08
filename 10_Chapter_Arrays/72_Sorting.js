let fruits = ["Banana","Apple","Litchi"];
fruits.sort();
console.log(fruits);

let nums=[1,10,21,2];
nums.sort();
console.log(nums);

//Asc
nums.sort((a,b) => a-b);
console.log(nums);

//Desc
nums.sort((a,b) => b-a);
console.log(nums);