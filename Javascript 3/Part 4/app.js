                        //Loops Syntax
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for(let i=1; i<=10; i++) {
//     console.log(i);
// }

// for(let i=10; i>=1; i--) {
//         console.log(i);
//      }

// for(let i=10; i>=1; i = i-3) {
//     console.log(i);
// }

// console.log(i);

                    //Print Odd Numbers

// for (let i=1; i<=15; i= i+2) {
//    console.log(i);
// }

// console.log("backwards");

// for (let i=15; i>=1; i= i-2) {
//     console.log(i);
// }

                      //Print Even Numbers

// for(let i= 2; i<=20; i= i+2) {
//     console.log(i);
// }

//  console.log("backwards");

//  for(let i= 20; i>=2; i= i-2) {
//     console.log(i);
// }
                 
                    //Infinite Loops

//  for(let i=1; ; i++) {
//      console.log(i);
//  }                       

                   //Print multipication table

// let n = prompt("write your number");
// n = parseInt(n);
 
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// for(let i= 5; i<=50; i= i+5){
//      console.log(i);
//  }

                    //Nested for Loop

// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//   for(let j=1; j<=3; j++){

//     console.log(j);
//   }

// }  
  
                          //While Loops
                          
  // let i=1;

  // while(i<=5) {
  //   console.log(i);
  //   i++;
  // }
//backward
// let i=5; 
// while(i>=1) {
//    console.log(i);
//    i--;
// }

// let i=0;//odd n i= 1;

// while(i<=20) {
//   console.log(i);
//   // i++;
//   //even n
//    i = i+2;
// }
                        //Favorite Movie

  // const favMovie = "avatar";
  
  // let guess = prompt("guess my favorite movie");
  //                        //&& (guess != "quit")
  //     //(               )
  // while(guess !=favMovie ){
  //     if(guess == "quit"){
  //       console.log("you quit ");
  //       break;
  //     }
  //     guess = prompt("wrong guess. please try again");  
  // }

  // if(guess == favMovie) {
  // console.log("congrats!!");
  // }

      //else {
  //  console.log("you quit");
  // }

                      //Break Keyword
                      
  //  let i=1;
  //  while(i<=5) {
  //   if(i == 3) {
  //     break;
  //   }
  //     console.log(i);
  //     i++;
  //  }

  //  console.log("we used break at 3");

                    //Loops with Arrays

//  let fruits =["mango","apple","banana","litchi","orange"];
//  fruits.push("pineapple");
//  for(let i=0;i<fruits.length; i++){
//   console.log(i, fruits[i]);
                //odd index fruits
//  for(let i=1;i<fruits.length; i=i+2){
//    console.log(i, fruits[i]);
              //even index fruits
  //  for(let i=0;i<fruits.length; i=i+2){
  //   console.log(i, fruits[i]);
                 //backword
//   for(let i=fruits.length-1; i>=0; i--){
//       console.log(i,fruits[i]);
//  }
                     //Loops with nested arrays

  // let heroes = [
  //   ["ironman","spiderman","thor"],
  //   ["superman","wonder woman","flash"]
  // ]

  // for(let i=0; i<heroes.length; i++){
  //     console.log(i, heroes[i],heroes[i].length); //outer arry
  //     for(let j=0; j<heroes[i].length; j++) {
  //         console.log(`j=${j}, ${heroes[i][j]}`); //inner arry
  //     }
  // }

  // let student = [ ["aman",95],["chaman",94.4],["baman",100]];

  // for(let i=0; i<=student.length; i++) {
  //   console.log(`info of student #${i+1}`);
  //   for (let j=0; j<=student[i].length; j++) {
  //      console.log(student[i][j])
  //   }
  // }  
                        //for-of Loops

      // let fruits = ["mango","apple","banana","orange","litchi"];
      
      // for(fruit of fruits){
      //   console.log(fruit);
      // }
      //    //string
      // for(char of "apnacollege"){
      //   console.log(char);
      // }
                      //Nested for-of Loop

//   let heroes = [ ["superman","batman","wonder woman"],["spiderman","ironman","thor"]]

//   for(list of heroes) {
//       // console.log(list);
//       for(hero of list){
//          console.log(hero);
//       }
//   }
                        //Todo App (only js)
let todo = [];

let req = prompt("please enter your request");

while(true) {
    if(req == "quit") {
        console.log("quitting app");
        break;
    }
  
  if(req == "list"){
    console.log("-----------");
    for(let i=0; i<todo.length; i++){
        console.log(i, todo[i]);
    }
    console.log("-----------");
  } else if(req == "add"){
    let task = prompt("please enter the task you want to add");
    todo.push(task);
    console.log("task added");
  } else if(req == "delete"){
    let idx = prompt("please enter the task index")
    todo.splice(idx, 1);
    console.log("task deleted");
  } else {
    console.log("wrong request");
  }
   req = prompt("please enter your request");

  }
