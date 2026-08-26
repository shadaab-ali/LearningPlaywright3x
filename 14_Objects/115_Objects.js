// let a = {status:"pass"};
// console.log(a.status);
// console.log(a["status"]);


// let a1 = {status:'pass'};
// console.log(a1.status);

// let a2 = {status:"pass",Status:"fail"};
// console.log(a2["status"]);
// console.log(a2["Status"]);

let a ={status:"pass"};

let b=a; // Copy the reference, means status is pointed by a and b
b.status="fail";
console.log(a.status);

let c ={status:"pass"};
let d ={status:"pass"};
console.log(c===d);

const t_json={
    "name":"shadaab",
    "age":"40"
};
console.log(t_json);