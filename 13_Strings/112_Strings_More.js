let str = "Hello";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//trim whitespace
console.log(str.trim());

str.trimStart();
str.trimEnd();

let msg="Test:Fail,Retry:Fail";
msg.replace("Fail","Pass");
msg.replaceAll("Fail","Pass");
msg.replace(/Fail/g,"Pass");

//concatenation
"Hello" + ""+ "world";
"Hello".concat("","World");
`${"Hello"} ${"World"}`;