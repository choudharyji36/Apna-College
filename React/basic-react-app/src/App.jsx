import "./App.css";
//import
import Title from "./Title.jsx";
// import { Title } from  "./Title.jsx";

// import Product from "./Product.jsx";
import ProductTab from  "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

// function App() {
//   return <h1>Hello World!</h1>;
// }

// function Title() {
//   return <h1>I am the Title!</h1>;
// }

// function Description() {
//     return <h3>I am the Description!</h3>;
//   }

  // function App() {
  //      return(
  //       <div>
  //         <Title />
  //         <Description />
  //         <Title />
  //         <Description />
  //       </div>
  //      );
  // }



// function App() {
//   return(  
//      <>
//       <Product />
//      <Product />
//       <Product /> 
//      </>
//   );
// }

                       // React (Part2) => All                                
// function App() {
//   return (  
//         <ProductTab/>
// );
// }
// export default App;

                        // React (Part2) => Activity

function App() {
  return (
      <>
       <MsgBox userName="kapil" textColor = "yellow"/>
        <MsgBox userName="Choudhary" textColor = "blue"/>
        {/* <ProductTab/> */}
      </>
);
}
export default App;
