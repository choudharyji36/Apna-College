import "./Product.css";
                              // React (Part2) => React Props

// function Product({title, price=1}) {  //({title, price = 1})
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>price : {price}</h5>  {/* price*/}
//         </div>
//     );
// }
// export default Product;

                      // React (Part2) => Passing Arrays to props

// function Product({ title, price, features}) { // features2 
//     // console.log(props.title);
//     // console.log(features);
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             {/* <p>{features}</p> */}
//             {/* <p>{features2.a}</p> */}
//             {/* <p>{list}</p> */}
//             <p>{features}</p>
//         </div>
//     );
// }
// export default Product;

           // React (Part2) => Rendering Arrays

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
// export default Product;

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

// function Product({ title, price, features }) {
//          let isDiscount = price > 30000;
//          let styles = {backgroundColor: isDiscount ? "yellow" : ""};
//        return (
//            <div className="Product" style={styles}>
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             {isDiscount && <p>Discount of 5%</p>}
//         </div>
//     ); 
// }

// export default Product;
                            
                     // React (Part2)Activity: Amazone Cards
                     
import Price from "./Price.jsx"

// function Product({ title }) {
function Product({ title,idx }) {

    let oldPrices = ["12,495", "11,900","1,599", "599"];
    let newPrices = ["8,999", "9,199", "899","278"];
    let description = [
       ["8,000 DPI", "5 Programmable buttons" ],
       ["intuitive surface", "designed for ipad pro"],
       ["designed for iPad Pro","intuitive surface"],
       ["wireless", "optical orientation"],
    ];
       return (
           <div className="Product">
            <h4>{title}</h4>
            {/* <p>Title</p> */}
            {/* <p>Description</p> */}
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            {/* <Price oldPrice="123" newPrice="345"/> */}
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>

        </div>
    ); 
}

export default Product;

                    