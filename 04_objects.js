// const mySym = Symbol("mysym");

// const JsUser ={
//     name:"kunal",
//     [mySym]:"mysym",
//     age:18,
//     location: "Vita",
//     email:"kunal.shitole@gmail.com",
//     lastLoginDays:["monday","Tuesday"]
// }

// console.log(typeof JsUser[mySym]);

// // Object.freeze(JsUser);

// JsUser.greeting = function(){
//     console.log("kunal");
// }

// JsUser.greeting = function(){
//     console.log(`kunal ${this.age}`);
// }

// console.log(JsUser.greeting());

const tinderUser = {};

tinderUser.id = "123";
tinderUser.name ="kunal";
console.log(tinderUser);

//multiple object in one object

// const first = {
//     name:"kunal",
//     second :{
//         age:20,
//     }
// }

// console.log(first);

// const obj1 ={1:"a",2:"b"};
// const obj2 ={3:"a",4:"b"};

// const obj3 = {...obj1,...obj2};

// console.log(obj3);

const users =[
     {
        id:1,
        email:"Kunal@gmail.com"
    },
    {
        id:1,
        email:"Kunjnks@gmail.com"
    },
    {
        id:1,
        email:"Kunal@gmail.com"
    }
]

console.log(users[1].email);

console.log(Object.keys(tinderUser));


const course = {
    coursename:"js",
    price: "999",
    courseInstructor:"kunal"
}

const {courseInstructor} =course;

console.log(courseInstructor);