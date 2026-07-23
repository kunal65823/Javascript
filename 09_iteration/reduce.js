const mynums = [1,2,3];

const myTotal = mynums.reduce((acc,currval) =>{
    return acc+ currval;
},0)

console.log(myTotal);