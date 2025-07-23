                    // this in javaScript

// const student = {
//     name: "kapil",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }

// }
// function getAvd(){
//     console.log(this);
// }
                        //Try & Catch

// console.log("hello");
// console.log("hello");
// // let a = 5;
// try {
//     console.log(a);
// } catch (error){
//     console.log("caught an error.. a is not defined");
//     console.log(err);
// }

// console.log("hello2");
// console.log("hello2");
// console.log("hello2");
                        //Arrow  Functions

//  const sum = (a,b) => {
//     console.log(a + b);
//  };

//  const cube = (n) => {  // singale = n
//     return n * n * n;
//  }

//  const pow = (a,b) => {
//     return a ** b;
//  }

//  const hello = () => {
//     console.log("hello world")
//  } 
            // Implicit Return in Arrow Functions 
            
// const mul = (a,b) => (a*b);

// const sum = (a,b) => (a+b);

// const cube = (n) => (n*n*n); 

                        // Set TimeOut Function

// console.log ("Hi there!");

// setTimeout(() => {
//     console.log("Apna College");
// },4000);

// console.log ("welcome to");
// console.log ("welcome to");
// console.log ("welcome to");
// console.log ("welcome to");
// console.log ("welcome to");

                  //Set Interval Function

// let id = setInterval(() => {
//     console.log("Apna College");
//  },2000);

//  console.log(id);

//  let id2 = setInterval(() => {
//     console.log("Hello World");
//  },3000);

//  console.log(id2);
                     //this with Arrow Functions

// const student = {
//    name: "aman",
//    marks: 95,
//    prop: this, //global scope
//    getName: function() {
//       console.log(this);
//      return this.name;
//    },
//    getMarks: () => {
//       console.log(this); //parent's scope -> window
//      return this.marks;
//    },
//  getInfo1: function() {
//    setTimeout(() => {
//       console.log(this); //student
//    },2000);
//  },
//  getInfo2: function() {
//    setTimeout( function() {
//       console.log(this); //window
//    },2000);
//  },
// };
                     //Practice Qs.1
      
   // const square = (n) => (n*n);

   // console.log(square(4));

                     //Practice Qs.2

let id = setInterval(() => {
   console.log("Hello World");
},2000);

 setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran");
 },10000);


