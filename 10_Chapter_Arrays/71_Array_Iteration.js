let scores=[45,82,91,60,70];

// let grades= scores.map(s => s>70 ? "Pass":"Fail");
// console.log(grades);

let passing= scores.filter(s => s>=70);
console.log(passing);