import Product from "./Product.jsx";
                                 // React (Part2) => React Props
    
// function ProductTab() {
//     return (
//          <>
//           <Product title = "Phone" price="21000"/>
//           <Product title = "Laptop" price="56000"/>
//          <Product title = "Tablet" price="35000"/>  {/*<Product title = "Tablet"/> */}
//     </>
//     );
// }
// export default ProductTab;

                          // React (Part2) => Passing Arrays to props

// function ProductTab() {
//     let options = ["hi-tech", "durable", "fast"];
//     // let options2 = {a: "hi-tech", b: "durable", c: "fast"};

//     return (
//          <>
//           <Product title = "Phone"  price ={21000} features ={options}/> {/*  features ={options} features2 ={options2}  object pass karna ho features ={{a:"hi-tech"}} darek use features ={["hi-tech","durable"]}*/}
//           {/* <Product title = "Laptop" price ={56000} />
//           <Product title = "Tablet" price ={1} />      */}
//     </>
//     );
// }

// export default ProductTab;

                      // React (Part2) => Rendering Arrays


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

// function ProductTab() {
//     let options = ["hi-tech", "durable", "fast"];
//     return (
//          <>
//           <Product title = "Phone"  price ={21000} features ={options}/>
//           <Product title = "Laptop" price ={56000} />
//           <Product title = "Tablet" price ={1} />     
//     </>
//     );
// }

// export default ProductTab;

                       // React (Part2)Activity: Amazone Cards

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    

    return (
         <div style={styles}>
          <Product title="Logitech MX Master" idx={0}/>
          <Product title= "Apple Pencil  (2nd Gen)" idx={1}/>
          <Product title="Zebronics Zeb-transformer" idx={2}/>     
          <Product title="Petronics Toad 23" idx={3}/>      
    </div>
    );
}

export default ProductTab;