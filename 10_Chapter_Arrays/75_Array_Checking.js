//checking arrays

let res=Array.isArray([1,2,3]);
let r=Array.isArray("a");

console.log(res);
console.log(r);


//every
[80,90,75].every(s => s>70);

//some- atleast one is true
[80,60,75].some(s => s>70);
[80,90,75].some(s => s>70);