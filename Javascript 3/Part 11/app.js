                      //Js Call Stack
// function hello() {
//     console.log("inside hello fnx");
//     console.log("hello");
// }
 8
// function demo(){
//     console.log("calling hello fnx");
//   hello();     
// }

// console.log("calling demo fnx");
// demo(); 
// console.log("done, bye!"); 
                      //Visualizing the Call stack
                  
// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three();
                        //JS is Single Threaded

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b); 

//synchrous nature

// setTimeout(()=>{
//    console.log("apna college");
// }, 2000);
// setTimeout(()=>{
//   console.log("hello world");
// }, 2000);

// console.log("hello...");
                                //Callback Hell

// h1 = document.querySelector("h1");

//     //setTimeout(()=>{
//    //h1.style.color = "red"; 
//   //},10000);

// function changeColor(color,delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange(); 
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange",1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow",1000,() => {
//       changeColor("blue",1000);
//       });
//     });
//   });
// });

//callbacks nesting -> callback hell

                        //Setting up for Promises

//  function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         // console.log("your data was saved : ", data);
//         success();
//     } else {
//         // console.log("weak connection. data not saved");
//         failure();
//     }
//  }

//  savetoDb("Apna College", () =>{
//     console.log("success : your data was saved");
//     savetoDb("hello world", ()=>{
//       console.log("success2: data2 saved");
//       savetoDb("kapil", ()=>{
//          console.log("success3: data3 saved")
//       },()=>{
//          console.log("failure3 : weak connection");

//       })
//     }, () => {
//       console.log("failure2 : weak connection");
//     });
//  }, ()=> {
//     console.log("failure : weak connection. data not saved");
//  });
                          //Refactoring with Promises  
  //  function savetoDb(data) {
 //    return new Promise((resolve, reject)=> {
 //       let internetSpeed = Math.floor(Math.random() * 10) + 1;
 //       if(internetSpeed > 4){
 //          resolve("success : data was saved");
 //       }else {
 //          reject("failure : weak connection");
 //       }
 //    });
 // }

// let request = savetoDb("apna college"); //req = promise object
// request.then(() => {
//    console.log("promise was resolved")
//    console.log(request);
// })
// .catch(()=>{
//    console.log("promise was rejected")
//       console.log(request);
// })

// savetoDb("apna college").then(() => {
//    console.log("promise was resolved")
//    // console.log(request);
// })
// .catch(()=>{
//    console.log("promise was rejected")
//       // console.log(request);
// }) 
                         //Promise chaining
                        
// savetoDb("apna college").then(() => {
// console.log("data1 saved.");
// return savetoDb("helloworld") 
//    // console.log("data2 saved");
//  })
//  .then(() => {
//    console.log("data2 saved");
//    return savetoDb("kapil");
// })
// .then(()=>{
//    console.log("data3 saved");
// })
// .catch(()=>{
// console.log("promise was rejected");
// }) 
                       //Results & Errors in Promises

// savetoDb("apna college").then((result) => {
// console.log("data1 saved.");
// console.log("result of promise: ", result);
// return savetoDb("helloworld") 
   
//  })
//  .then((result) => {
//    console.log("data2 saved");
//    console.log("result of promise: ", result);
//   return savetoDb("kapil");
// })
// .then((result)=>{
//    console.log("data3 saved");
//    console.log("result of promise: ", result);
// })
// .catch((error)=>{
// console.log("promise was rejected");
// console.log("error of promise: ", error);

// }) 

h1 = document.querySelector("h1");


function changeColor(color,delay) {
 return new Promise((resolve,reject) => {
      setTimeout(() => {
         h1.style.color = color;
         resolve("color changed!");
       }, delay);
   });
}

changeColor("red", 1000)
   .then(() => {
      console.log("red color was completed");
      return changeColor("orange", 1000);
   })
   .then(() => {
      console.log("orange color was completed");
      return changeColor("green", 1000);
   })
   .then(() => {
      console.log("green color was completed");
      return changeColor("blue", 1000);
   })
   .then(() => {
      console.log("blue color was completed");
      
   })

// changeColor("red", 1000, () => {
//   changeColor("orange",1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow",1000,() => {
//       changeColor("blue",1000);
//       });
//     });
//   });
// });




