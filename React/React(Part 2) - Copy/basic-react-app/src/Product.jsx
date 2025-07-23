                         // React (Part3) Handling Click Events


import "./Product.css";


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

                    