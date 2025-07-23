// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i<smallImages.length; i++){
       //console.dir(smallImages[i].src);
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// };
                //  QuerySelector
                                    
//console.dir(document.querySelectorAll("p"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

//console.dir(document.querySelectorAll("div a"));


                      //Manipulating Style

let links = document.querySelectorAll(".box a");

// for (let i = 0; i < links.length; i++){
//     links[i].style.color = "yellow";
// }
  //for off loop
for(link of links){
    link.style.color = "purple"; //inline style
}





