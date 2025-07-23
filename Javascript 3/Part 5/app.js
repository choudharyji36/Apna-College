                       //Object Literals
// const student = {
//     name: "shradha",
//     age: 23,
//     marks: 94.4
// };

// const item = {
//     price: 100.99,
//     discount: 50,
//     color: ["red", "pink"]
// }
                      //Creating Post

// const post = {
//     username: "@kapilchoudhary",
//     content:  "This is my #firstPost",
//     likes: 150,
//     reports: 5,
//     tags: ["@apnacollege", "@delta"]
// };
                      // Conversion in get values
 
// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };
                      //Add/Update Values
// const student = {
//     name: "shradha",
//     age: 23,
//     marks: 94.4,
//     city: "Delhi"
// };
                     // Nested Objects
// const classInfo = {
//       aman:{
//         grade: "A+",
//         city: "Delhi"
//       },
//       shradha:{
//         grade: "A",
//         city: "Pune"
//       },
//       karan:{
//          grade: "O",
//          city: "Mumbai"
//       }
// };
                    // Array of Objects
                
// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "shradha",
//         grade: "A",
//         city: "Pune" 
//     },
//     {
//         name: "karan",
//         grade: "o",
//         city: "Mumbai"
//     }
// ];
                     // Course Player

 const max = prompt("enter the max number");

 const random = Math.floor(Math.random() * max) + 1;
 
 let guess = prompt("guess the number");

 while(true){
     if(guess == "quit") {
         console.log("user quit");
         break;
     }
     
     if(guess == random) {
        console.log("you are right! congrats!! randoom number was",random);
        break;
  } else if(guess < random) {
    guess = prompt("hint : your guess was too small. please try again");
  } else {
    guess = prompt("hint : your guess was too large. please try again");
  }
 }

//   else {
//         guess = prompt("your guess was wrong. please try again");
//     }
//}
 
