                               //React(Part 3)State in React

// export default function Counter() {
//     let count =  0;
    
//     function incCount() {
//         count += 1;
//         console.log(count);
//     }

//     return (
//         <div>
//             <h3>Count = {count}</h3>
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     );
// }

                              //React(Part 3)useState()

// import { useState } from "react";

// export default function Counter() {
//    // let arr = useState(10);
//   // console.log(arr);

//   // let [stateVariable, setStateVariable] = useState(10);
// let [count, setCount] = useState(0);
 
// let incCount = () => {
//     // count = count + 1;
//     setCount(count + 1);
//     // console .log(count); 
// };

//   return (
//         <div>
//             <h3>Count = {count}</h3>    
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     ); 
// }

                            //React(Part 3) Re-render:How does it work?

// import { useState } from "react";

// export default function Counter() {
  
// let [count, setCount] = useState(0); //initialization
//     //  console.log("Component is rendered!");
//    //  console.log(`count = ${count}`);

// let incCount = () => {
//     setCount(count + 1);
//     console.log(`inside incCount, count = ${count}`);
// };

//   return (
//         <div>
//             <h3>Count = {count}</h3>    
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     ); 
// }

                       //React(Part 3) Callback in Set State Function

// import { useState } from "react";

// export default function Counter() {
//   let [count, setCount] = useState(0); //initialization

// let incCount = () => {
//         // setCount(count + 1);
//         // setCount(count + 1);
//         // console.log(`inside incCount, count = ${count}`);
//     // setCount((currCount) => {
//     //   return currCount + 1;
//     // });
//     // setCount((currCount) => {
//     //   return currCount + 1;
//     // });
//     setCount(25);
        
// };

//   return (
//         <div>
//             <h3>Count = {count}</h3>    
//             <button onClick={incCount}>Increase Count</button>
//         </div>
//     ); 
// }
                          
                       //React(Part 3) More about State

import { useState } from "react";

function init() {
    console.log("init was executed");
    return Math.random();
}


export default function Counter() {
  let [count, setCount] = useState(init); //initialization
  console.log("Component was re-rendered");

let incCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });

    // setCount(25);
        
};

  return (
        <div>
            <h3>Count = {count}</h3>    
            <button onClick={incCount}>Increase Count</button> 
        </div>
    ); 
}