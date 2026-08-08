let org=[1,2,3];
let copy=[...org];
console.log(org);
console.log(copy);

let c=org.slice();
console.log(c);

let c1=Array.from(org);
console.log(c1);

let c2=org.concat();
console.log(c2);

console.log("----------");
copy.push(99);
console.log(copy);
console.log(org);

