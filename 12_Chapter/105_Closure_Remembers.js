function makeCounter(start=0){
    let count=start;
    return{
            increment(){ count++; },
            decrement(){ count--; },
            get(){ return count; }
        // return{increment()}
    }
}
let counter = makeCounter(0);
counter.increment();
counter.increment();
console.log(counter.get());