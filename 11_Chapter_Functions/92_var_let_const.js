var a=10;
console.log(a);
//var is function scoped

function sayHello(){
    confirm.log("Hello testing");
    var a=20; //local scope
    console.log(a);
    if(true){   
        var a=30;
        console.log(a);
    }
    console.log(a);

}
sayHello();