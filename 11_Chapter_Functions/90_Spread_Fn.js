function add(a,b,c,d){

    return a+b+c+d;
}

let num=[1,2,3,4];
console.log(add(...num));

function hasError(...codes){

    return codes.some(c => c>=400);
}

let responseCodes=[200,300,404];
hasError(...responseCodes);