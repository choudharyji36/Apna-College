                           //Array Methods
// let arr = [1,2,3,4,5];

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// });

// arr.forEach((el) => {
//     console.log(el);
// });
// object
// let arr = [
//     {
//     name: "aman",
//     marks: 95,
// },
// {
//     name: "kapil",
//     marks: 94.4,
// },
// {
//     name: "rajat",
//     marks: 92,
// },
// ];

// arr.forEach((student) => {
//     console.log(student.marks);
// });
                         //Map & Filter

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     // return el * 2;
//    // return el * el;//square
// });

let students = [
        {
         name: "aman",
         marks: 95,
     },
     {
         name: "kapil",
         marks: 94.4,
     },
     {
         name: "rajat",
         marks: 92,
     },
     ];

     let gpa = students.map((el)=> {
        return el.marks / 10;
     })
//filter

// let nums = [1,2,3,4,7,8,2,9,10,12,11];
// let ans = nums.filter((el) => {
    // return el % 2 != 0; //even -> true,odd -> false  = 
//     return el < 5;   
// });
                          //very & Sum 

// let arr = [2, 4, 6].every((el) => el%2 == 0); //even
// let arr = [2, 4, 6, 1].every((el) => el%2 == 0); //even
// let arr = [2, 4, 6, 8, 1].every((el) => el%2 != 0);   //odd
// let arr = [3, 5, 1].every((el) => el%2 != 0); //odd 

                          //sum

// let arr = [1, 2, 3, 4].some((el) => (el%2 == 0));
// let arr = [1, 3].some((el) => (el%2 == 0));

                         //Reduce Method

// let nums = [1, 2, 3, 4];

// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//    return res + el;
// });
// console.log(finalVal);     
                   
                      //Maximum in Array

// let arr = [1, 4, 2, 5, 6, 7, 11, 2, 9, 2];  

// let max = -1;

// for(let i=0; i<arr.length; i++ ) {
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max);

// let arr = [1, 2, 3, 1];  


// let max = arr.reduce((max, el) => {
//     if (max < el ){
//         return el;
//     } else { 
//         return max;
//     }
// });

// console.log(max);

                        //Practice Qs.1

// let nums = [10, 20, 30, 40];

// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);

                         //Practice Qs.2

// let  nums = [10, 20, 30, 40, 5]; 

// let min = nums.reduce((min, el) => {
//     if (min < el) {
//         return min;
//     } else {
//         return el;
//     }
// });

//console.log(min);

// function getMin(nums) {
//     let min = nums.reduce((min, el) => {
//         if (min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     }); 
//     return min;
// }

// let  nums = [10, 20, 30, 40, 5]; 

                    //Default Parameters

// function sum(a, b = 2) {
//     return a + b;
// }

// function sum(a =2, b) {
//     return a + b;
// }

// sum(1,3); //4
// sum(1);  //a = 1, b = undefined

                     //Spread

// console.log(..."apnacollege");

                    //Spread(Array Literals)

//  let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];


// let char = [..."hello"];

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...odd, ...even];

                       //Spread (Object Literals)

// const data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// const dataCopy = {...data, id: 123, country: "India"};
// //arr
// let arr = [1, 2, 3, 4, 5]; //val
// let obj1 = {...arr}; //obj -> key:val
// //string store
// let obj2 = {..."hello" };
    
                           //Rest

// function sum(...args) {    //arguments
//     for (let i = 0; i < args.length; i++) {
//         console.log("you gave us:", args[i]);
//     }
// }

// function min(a, b, c, d) {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);

// }

// function sum(...args){
//    return args.reduce((sum, el) => sum + el); //argumentsw[0]
// }

// function min(msg,...args) {
//     console.log(msg);
//     return args.reduce((min, el)=> {
//         if (min > el) {
//             return el;
//         } else {
//             return min;
//         }
//     });

// }
                         //Destructuring

let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let = [winner, runnerup, ...others] = names;

                        //Destructuring Objects

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
    city: "Pune",
};

// let username = student.username;
// let password = student.password;

//  let {username,password} = student;
let {username: user, password: secret, city: place ="Mumbai"} = student;















