import "./Product.css";

// function Product() {
//     return (
//         <div className="Product">
//             <h3>Product title</h3>
//             <h5>Product Description</h5>
//         </div>
//     );
// }
//export default Product;



// function Product({ title, price, features}) { // features2 
//     // console.log(props.title);
//     // console.log(features);
//     // const list = features.map((feature)  => <li>{feature}</li>);
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             {/* <p>{features}</p> */}
//             {/* <p>{features2.a}</p> */}
//             {/* <p>{list}</p> */}
//             <p>{features.map((feature)  => <li>{feature}</li>)}</p>
//         </div>
//     );
// }
//export default Product;

                    // React (Part2) =>  Conditionals
                    
// function Product({ title, price, features }) {
//     if(price>30000) {
//        return (
//            <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>Discount of 5%</p>
//         </div>
//     );
//     } else {
//       return (
//            <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//         </div>
//     );
//     }   
// }


//        return (
//            <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             {/* {price > 30000 ? <p>"Discount of 5%"</p> : null} */}
//             {/* {price > 30000 ? <p>"Discount of 5%"</p> : <a href="/">Get Dicount</a>  } */}
//             {price > 30000 && <p>Discount of 5%</p>}

//         </div>
//     ); 
// }

// export default Product;

                        // React (Part2) => Dynamic Component Styling

//   function Product({ title, price, features }) {
//          let styles = {backgroundColor: "Yellow"};
//        return (
//            <div className="Product" style={styles} >
//             <h3>{title}</h3>
//         {/* <div className="Product">
//              <h3 style={styles}>{title}</h3> */}
//             <h5>Price : {price}</h5>
//             {price > 30000 && <p>Discount of 5%</p>}
//         </div>
//     ); 
// }


//  function Product({ title, price, features }) {
//          let styles = {backgroundColor: price > 30000 ?"yellow" : ""};
//        return (
//            <div className="Product" style={styles}>
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             {price > 30000 && <p>Discount of 5%</p>}
//         </div>
//     ); 
// }

function Product({ title, price, features }) {
         let isDiscount = price > 30000;
         let styles = {backgroundColor: isDiscount ? "yellow" : ""};
       return (
           <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {isDiscount && <p>Discount of 5%</p>}
        </div>
    ); 
}

export default Product;

                    