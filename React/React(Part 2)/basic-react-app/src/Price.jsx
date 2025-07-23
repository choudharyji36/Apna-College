//  export default function Price() {
export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
       textDecorationLine: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };

  let styles = {
     backgroundColor: "#e0c367",
     height: "30px",
     width: "200px",
     borderBottomLeftRadius: "14px",
     borderBottomRightRadius: "14px",
  };

    return (
      <div style={styles}>
         {/* <p>oldPrice</p>
         <p>newPrice</p> */}
         {/* <p>{oldPrice}</p>
        <p>{newPrice}</p> */}
        {/* <span>{oldPrice}</span> */}
        <span style={oldStyles}>{oldPrice}</span>
       &nbsp;&nbsp;&nbsp;   {/* space ke liye */}
        {/* <span>{newPrice}</span> */}
        <span style={newStyles}>{newPrice}</span>
      </div> 
 ); 
}
  