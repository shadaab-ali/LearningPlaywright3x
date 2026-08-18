let a=10;

if(true){
    console.log(a);//local variable, TDZ
    let a=100;
}

//it will throw error coz let is function/block scoped