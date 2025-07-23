// let btn = document.querySelector("button");
// console.dir(btn);

// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("you entered a button");
//     };
//     console.dir(btn);
// }

// btn.onclick = function () {
//     console.log("button was clicked"); //alert
// };

// function sayHello(){
//     alert("Hello!");
// }

// btn.onclick = sayHello;

                    //Mouse/Pointer Events

// let btns = document.querySelectorAll("button");

// for(btn of btns) {
// btn.onclick = sayHello;
// btn.onmouseenter = function(){
// console.log("you entered a button");
//  };
//     console.dir(btn);
// }
 
// function sayHello(){
//     alert("Hello!");
// }
                           //Event Liste
    
//  let btns = document.querySelectorAll("button");

//  for(btn of btns) {
//     // btn.addEventListener("click",sayHello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("you double clicked me");
//     });
//  }

//  function sayHello () {
//     alert("Hello");
//  }

//  function sayName () {
//     alert("Apna College");
//  }
                            //Activity

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     // console.log("generate random color");
//     let h3 = document.querySelector("h3");
//     let  randomColor = getRandomColor();
//     h3.innerText = randomColor;

//      let div = document.querySelector("div");
//      div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor(){
//     let red = Math.floor(math.random() * 255);
//     let green = Math.floor(math.random() * 255);
//     let blue = Math.floor(math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color; 
// }
                // Event Listeners for Elements
                
// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("parah was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function (){
//     console.log("mouse inside box");
// })
                    //this in Event Listeners

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue"; 
// }

// btn.addEventListener("click", changeColor); //(){
//     // console.dir(this.innerText);
//     // this.style.backgroundColor = "blue";
// // });

// p.addEventListener("click", changeColor); 
    
// h1.addEventListener("click", changeColor); 
    
//  h3.addEventListener("click", changeColor); 

                //    Keyboard Events

//   let btn = document.querySelector("button");

//  btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
//  });

//  btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
//  }); 

//   let inp = document.querySelector("input");

//    inp.addEventListener("keydown",function(event){
//     // console.log("key = ",event.key);
//     console.log("code = ",event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
//      if(event.Code == "KeyU"){    //ArrowUp
//         console.log("character moves Up"); //forward
//     } else if (event.code == "KeyD"){     //ArrowDown
//         console.log("character moves down"); //backward
//     }else if (event.code == "KeyL"){  //ArrowLeft
//         console.log("character moves left");
//     }else if (event.code == "KeyR"){   //ArrowRight
//         console.log("character moves right");
//     }

    //  console.log("key was pressed");
 // })

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
//   })

                        //  Form Events

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//      event.preventDefault();
//      console.dir(form);
//     // alert("form submitted");

//     // let inp = document.querySelector("input");
//      let user = document.querySelector("#user");
//      let pass = document.querySelector("#pass");
//        // console.dir(inp);
//        // console.log(inp.value);
//      console.log(user.value);
//      console.log(pass.value);

//   alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });
                        //Extracting Form Data

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
// event.preventDefault();
// console.dir(form);

//      // let inp = document.querySelector("input");
//     // let user = document.querySelector("#user");
//    // let pass = document.querySelector("#pass");

// let user = this .elements[0]; //form.elements[0]
// let pass = this.elements[1];


// console.log(user.value);
// console.log(pass.value);

// alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

                       //More Events /change event

//  let form = document.querySelector("form");

//  form.addEventListener("submit", function(event){
//  event.preventDefault();
//  });

// let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//     console.log(" changed event");
//     console.log("final value = ",this.value);
// });
//                    //input event
// user.addEventListener("input", function(){
// console.log("input event");
// console.log("final value = ",this.value);
// });
        
let  inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
})



