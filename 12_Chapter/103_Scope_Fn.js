//Scope in Functions
let env="staging";

function setupConfig(){
    let timeout=3000;
    console.log(env);
    console.log(timeout);
}

setupConfig();
console.log(env);
console.log(timeout)// ReferenceError, local variable

function outer(){
    let x=10;

    function inner(){
        let y=20;
        console.log(20);
    }

inner();
console.log(y); //error as outer function cannot access local variable of inner function
    
}

function outer(){
    let name= "Pramod";
    function inner(){
        console.log(name);
    }
    return inner;

}
const greet=outer();
greet();  