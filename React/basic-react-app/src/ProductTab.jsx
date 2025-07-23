import Product from "./Product.jsx";

// function ProductTab() {
//     return (
//          <>
//           <Product/>
//           <Product/>
//           <Product/>     
//     </>
//     );
// }


// function ProductTab() {
//     let options = ["hi-tech", "durable", "fast"];
//     // let options2 = {a: "hi-tech", b: "durable", c: "fast"};
//     //  let options = [ <li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];

//     return (
//          <>
//           <Product title = "Phone"  price ={21000} features ={options}/> {/*  features ={options} features2 ={options2}  object pass karna ho features ={{a:"hi-tech"}} darek use features ={["hi-tech","durable"]}*/}
//           {/* <Product title = "Laptop" price ={56000} />
//           <Product title = "Tablet" price ={1} />      */}
//     </>
//     );
// }

// export default ProductTab;

                         // React (Part2) =>  Conditionals

function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    return (
         <>
          <Product title = "Phone"  price ={21000} features ={options}/>
          <Product title = "Laptop" price ={56000} />
          <Product title = "Tablet" price ={1} />     
    </>
    );
}

export default ProductTab;