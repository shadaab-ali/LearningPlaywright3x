//pyramid pattern

let n=5;
for(let i=0;i<=n;i++){
    let row="";
    for(let j=1;j<=n-i;j++){
        row+="";

    }
    for(let j=1;j<=2*i-1;j++){
        row=row+"*";
    }
    console.log(row);
}