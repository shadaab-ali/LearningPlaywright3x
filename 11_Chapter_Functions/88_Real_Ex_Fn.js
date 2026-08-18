//normal function 

function validateStatusCode(status){
    if(status >= 200 && status <=300){
        console.log("Request is Fine");
    }
}

//function as expression
const validateStatusCode_Exp=function (status){
    if(status >= 200 && status <=300){
        console.log("Request is Fine");
    }
} 

//arrow function
const validateStatusCode_Exp1= (status) =>{
    if(status >= 200 && status <=300){
        console.log("Request is Fine");
    }
} 

validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Exp1(201);