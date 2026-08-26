let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let mad=[
    [1,2,3,4],
]

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(matrix[i][j]);
        process.stdout.write(matrix[i][j]+"");
    }
    console.log("");
}