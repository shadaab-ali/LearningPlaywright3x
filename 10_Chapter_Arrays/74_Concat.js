let a=[1,2];
let b=[3,4];
let c= a.concat(b);
console.log(c);

//spread function ...
//... means all the elements
let d=[...a, ...b];
console.log("spread: ",d);

//Join
let s = ["Pass","Fail","Pass"].join(" | ");
console.log(s);