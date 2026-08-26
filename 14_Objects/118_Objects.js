const user={
    name:"USer1",
    age:40,
    email:"abc@gmail.com"
};

console.log(user);

//accessing
console.log(user.name);
console.log(user["age"]);

//adding/modifying
user.city="Bglr";
user.age=33;

console.log(user);