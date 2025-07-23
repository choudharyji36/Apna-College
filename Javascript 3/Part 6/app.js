// function hello() {
//     console.log("hello");
// }

// function printName() {
//     console.log("apna college");
//     console.log("kapil choudhary");

// }

// function print1to5() {
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }

// function isAdult() {
//     let age = 13;
//     if(age >= 18) {
//         console.log("adult");
//     } else {
//         console.log("not adult");
//     }
// }
// isAdult();
// // printName();

// // print1to5();
                      // Practice Qs.1
// function printPoem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are");
// }

// printPoem();
                     // Practice Qs.2
                     
// function rollDice() {
//     let rand = Math.floor(Math.random() * 6) + 1;
//     console.log(rand);
// }

// rollDice();
// rollDice();
// rollDice();
// rollDice();
                   //functions with Arguments

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }

// printInfo("kapil",22);
// printInfo("aman",23);
// printInfo("college");

// function sum(a,b){
//     console.log(a+b);
// }

// sum(1,2);
// sum(4,5);
// sum(7,8);
                       // Practice Qs.3

// function calcAvg(a,b,c){
//     let avg = (a+b+c)/3 ;
//     console.log(avg);
// }

// calcAvg(2,4,6);
                     // Practice Qs.4

// function printTable(n) {
//     for(let i=n; i<=n*10; i+=n) {
//         console.log(i);
//     }
// }

// printTable(2);
                        //Return Keyword
//  function sum(a,b) {
//     return a+b;
//  }
//  sum(2,3);
//  console.log();1

//  let s = sum(3,4);
//  console.log(s);
//  console.log(sum(3,4));
// console.log (sum(sum(1,2),3));

// function sum(a,b) {
//     console.log("hello");
//     console.log("hello");
//     return a+b;
//     console.log("hello2");
//     console.log("hello2");
//  }

//  console.log(sum(1,2));


//  function isAdult(age) {
//     if(age >= 18) {
//     return "adult";
// } else {
//     return "not adult";
//   }
//  console.log("bye bye");
// }
                        //Practice Qs.5
// function getSum(n) {
//     let sum = 0;

//     for(let i=1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }
                       //Practrice Qs.6
                
// let str = ["hi","hello","bye","!"];



// function concat(str) {
//     let result = "";
//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }
                    //What is scope
// let sum = 54; //Global Scope 

// function calSum(a,b){
//     // let sum = a+b //Function scope
//     console.log(sum);
// }

//  calSum(1,2);
//  console.log(sum);
                    //Block Scope

// {
//     let a = 25;
// }

// console.log(a);

// for(let i=1; i<=5; i++) {
//     console.log(i);  //block scope
// }

//  console.log(i);

// let age = 25;
// if(age >= 18) {
//     let str = "adult";
//     console.log(str);

// }
                         //Lexical Scope

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFun() {  //function scope
//         console.log(x);
//         console.log(y);

//     }
//     console.log(a);
//     innerFun();
// }
                          //Practice Qs.7

//  let greet = "hello"; //global scope
 
//  function changeGreet(){
//     let greet = "namaste"; //function scope
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet); //lexical scope
//     }

//     innerGreet();
//  }

//  console.log(greet);
//  changeGreet();
                            //Functions Expression

// let name = "kapil";

// let sum = function(a,b){
//     return a+b;
// }

// let hello = function(){
//     console.log("hello");
// }

//  hello = function(){
//     console.log("namaste");
// }
                         //Higher Order Functions

// function multipleGreet(func,count){ 
//     for(i=1;i<=count; i++){
//         func();
//     }
// }
// // let greet = function(){
// //     console.log("hello");
// // }

// // multipleGreet(greet,10);
// multipleGreet(function(){console.log("namaste")},10);
       
           //Higher Order Functions(Returns)

// function oddOrEvenFactory(request){
//    if(request == "odd"){
//   return function(n){
//     console.log(!(n%2 == 0));
// }
//     //  return odd;
//    } else if(request == "even"){
//     return function(n){
//         console.log(n%2 == 0);
//     }
//     // return even;
//    } else{
//         console.log("wrong request");
//    }
// }
//   let request = "odd";//even

                         //Methods

// const calculator = {
//     num: 55,
//     add: function(a,b){
//          return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b) {
//         return a*b;
//     }
// };
                        //Methods (Shorthand)

const calculator = {
    add(a,b){
        return a + b;
    },
    sub(a,b) {
        return a - b;
    }
};