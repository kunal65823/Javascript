//for 
// for (let index = 0; index < 10;index++) {
//     const element =index;
//     console.log(element); 
// }

// for (let index = 0; index < 10; index++) {
//     console.log("outer elemt");
//     for (let j = 0; j < 10; j++) {
    
//         console.log("inner elemnt");
        
//     }
    
// }

//  for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(   `${i} + ${j} = ${i*j}`);
//     }

//     let myArray = ["Ironman","Batman", "Thor"];
// for (let index = 0; index < myArray.length; index++) {
    
//     const element = myArray[index];
//     console.log(element);
// }


// for (let index = 0; index < 10; index++) {
//     if(index == 5){
//         console.log("Deted NO 5");
//         break;
//     }
//         console.log(`value of i is ${index}`);
    
// }

// while

// let index = 0;

// while (index <= 10) {
//     console.log(`value is ${index}`);

//     index = index+2;
// }

// for of 


// const arr = [1,2,4,5,6,3,7];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello World";

// for (const gret of greeting) {
//     console.log(`each element of greeting ${gret}`);
    
// }

// const map = new Map();

// map.set('IN',"INDIA");
// map.set('USA',"United States America");
// map.set('Fr',"FRANCE");

// for (const [key,value] of map) {
//     console.log(key,value);
// }

// for of loop cant work on the objects

// we use for in loop for objects

// const myObjects = {
//     js : "Javascript",
//     cpp: "cpp",
//     py: "pyhton"
// }


// for (const key in myObjects) {
//     console.log(key,myObjects[key]);
    
// }

// for each

// const codiing = ["java","python","cpp","c#"];

// codiing.forEach(function (val,index,arr) {
//     console.log(val,index,arr);
// })


// loop for multiople objects we use foreach loop

// const myObject = [
//     {
//         languagename:"Javascipt",
//         languageflenme:"js"
//     },
//     {
//         languagename:"cpp",
//         languageflenme:"cpp"
//     },
//     {
//         languagename:"python",
//         languageflenme:"py"
//     },
//     {
//         languagename:"java",
//         languageflenme:"java"
//     }
// ]

// myObject.forEach((items) => {
//     console.log(items.languageflenme);
// })


// Maps, filters and other

// const mynums = [1,2,3,4,5,6,7,8];

// const newnums = mynums.filter((nums)=>{
//     return nums >4;
// })

// console.log(newnums);

// const books = [
//     {
//         title: "Atomic Habits",
//         author: "James Clear",
//         price: 499
//     },
//     {
//         title: "Rich Dad Poor Dad",
//         author: "Robert Kiyosaki",
//         price: 399
//     },
//     {
//         title: "The Alchemist",
//         author: "Paulo Coelho",
//         price: 299
//     }
// ];


// let book = books.filter((bk) => bk.author == "James Clear");

// book = books.filter((bk) => bk.price > 300 && bk.title ==="Rich Dad Poor Dad");

// console.log(book);

