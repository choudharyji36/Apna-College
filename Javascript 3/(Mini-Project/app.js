                     //Event Bubbling

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis) {
// li.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("li was clicked");
// });
// }
                    //Building Todo with Dom

let btn = document.querySelector("button"); //access
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    // console.log(inp.value); //"clicked!"

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = ""; //input value reset mt string
});
                        //Event Delegation
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON") {
      let listItem = event.target.parentElement;
    //   console.log(listItem);
    listItem.remove();
      console.log("deleted");
     
    }
    // console.log("button clicked");
});

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         // console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

//     });
// }
