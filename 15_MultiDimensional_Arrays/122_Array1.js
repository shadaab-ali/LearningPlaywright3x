const test = require("node:test");

let grid=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(grid[0][1]);

//---------------------------------
let testMatrix = [

    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180]
];

for(let i=0;i<testMatrix.length-1;i++){

    for(let j=0;i<testMatrix[i].length;j++){

        process.stdout.write(testMatrix[i][j]+"");
 
}
console.log("");
}

//-----------------------------------------
for(let row of testMatrix){
    for(let cell of row){
        process.stdout.write(cell+"");
    }
    console.log();
}