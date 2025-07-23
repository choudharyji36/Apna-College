                        //Practice Qs.1

//  let arr = [1,2,3,4,5,6,2,3];
//  let num = 2;

// for(let i=0; i<arr.length; i++){
//      if(arr[i] == num) {
//          arr.splice(i,1);
//      }
//  }
//  console.log(arr);
                       //Practice Qs.2

// let number = 287152;
// let count = 0;

// let copy = number;

// while(copy > 0) {
//     count++;
//     copy  = math.floor(copy/10);
// }
// console.log(count);
                      //Practice Qs.3
              
//  let number = 287152;
//  let sum = 0;
 
 
//  let copy = number;

//  while (copy > 0) {
//     digit = copy % 10;
//     sum+= digit;
//     copy = math.floor(copy/10);
//  }
//  console.log(sum);
                      //Practice Qs.4

// let n = 5;
// let factorial = 1;

// for(let i=1; i<=n; i++) {
//     factorial *=i;
// }
//     console.log(`factorial of $(n) is ${factorial}`);
                     //Practice Qs.5

let arr = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for(let i = 0; i<=arr.length; i++) {
    if(largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);