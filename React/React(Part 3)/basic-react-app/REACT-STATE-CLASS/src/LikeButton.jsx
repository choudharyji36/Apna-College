import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setisLiked] = useState(false);
    let [clicks,setClicks] = useState(0);
    let toggleLike = () => {
        // console.log("we are going to  toggle");
        // let newVal = !isLiked;
        // console.log(newVal);
        setisLiked(!isLiked);
        setClicks(clicks + 1);

    };

    // let clicked = () => {
    //     console.log("clicked");
    // };  

    let likeStyle = {color: "red"};

    return ( 
        <div>
            <p>Clicks = {clicks}</p>
             <p onClick={toggleLike}>    {/* clicked */}
                {/* {isLiked.toString()} */}
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                ) : (
                <i className="fa-regular fa-heart"></i>
                ) } 
                   {/* <i className="fa-regular fa-heart"></i> */}
            </p> 
        </div>
    );
}