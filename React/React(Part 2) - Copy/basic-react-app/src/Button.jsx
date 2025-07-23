                            // React (Part3) Handling Click Events
                                  

// function printHello() {
//    console.log("Hello, World!");
// }

// function printBye() {
//     console.log("By Apna College")
// }

// export default function Button() {
//     return (
//         <div>
//             <button onClick={printHello}>Click me!</button>
//             <p onClick={printBye}>This paragraph is for event demo</p>
//         </div>
//     );
// }

                             // React (Part3) Handling Non-Click Events


// function handleClick() {
//    console.log("Hello, World!");
// }

// function handleMouseOver() {
//     console.log("By Apna College")
// }

// function handleDbClick() {
//     console.log("you duble clicked me");
// }

// export default function Button() {
//     return (
//         <div>
//             <button onClick={handleClick}>Click me!</button>
//             <p onMouseOver={handleMouseOver}>
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio soluta suscipit 
//                 nostrum fuga aliquam incidunt, deserunt ex  voluptatem facere explicabo sequi 
//                 dignissimos velit sit asperiores eaque maiores maxime facilis cumque?
//             </p>
//             <button onDoubleClick={handleDbClick}>double click me!</button> {/* {handleDbClick()} */}
//         </div>
//     );
// }


                            // React (Part3)Event Object


function handleClick(event) {
   console.log("Hello, World!");
   console.log(event);
}

function handleMouseOver() {
    console.log("By Apna College")
}

function handleDbClick() {
    console.log("you duble clicked me");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio soluta suscipit 
                nostrum fuga aliquam incidunt, deserunt ex  voluptatem facere explicabo sequi 
                dignissimos velit sit asperiores eaque maiores maxime facilis cumque?
            </p>
             <button onDoubleClick={handleDbClick }>double click me!</button>
        </div>
    );
}