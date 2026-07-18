// //functions

// function SayMyname(){
//     console.log("kunal");
// }

// // SayMyname = Reference

// SayMyname(); //execution


// function addteonumber(number1,number2){
//     let result = number1 + number2;

//     return result;
// }


// const result = addteonumber(3,5);
// console.log("REsult",result);


// function loogedinuser(username){
//     return ` ${username} Just logged in `;
// }

function loogedinuser(username){
    return ` ${username} Just logged in `;
}

const mesage = loogedinuser("kunal");
console.log(mesage);

function calculatecartprice(...nums){
    return nums;
}

console.log(calculatecartprice(200,255,455,478));

const user ={
    usename:"kunal",
    price:166
}

function handleuser(anyobject){
    return `Username is ${anyobject.usename} and price is ${anyobject.price}`
}

console.log(handleuser(user));
