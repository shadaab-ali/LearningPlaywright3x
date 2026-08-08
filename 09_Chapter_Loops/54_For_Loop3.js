// for(let _1=0; _1<=10;_1++){
//     console.log(_1);
// }
let countE=0;
let countNE=0;
for(let pm=0; pm<18;pm++){
    if(pm>15){
    console.log("Eligible to Vote");
    countE++;
        

    }
    else{
    console.log("Not Eligible to Vote");
    countNE++;
    }
}
console.log("Total count of Eligible: ",countE);
console.log("Total count of Not Eligible: ",countNE);