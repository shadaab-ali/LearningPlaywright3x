// Immediately Invoked Function Expression
//They dont need to be called

function name1(){
    console.log("Hi");
}
(function(){
    console.log("Anonymous Function");
})();


//arrow function
(()=>{
    console.log("Anonymous arrow Function");
})();