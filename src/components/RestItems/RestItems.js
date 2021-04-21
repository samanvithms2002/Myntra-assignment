import React from "react";
import Wishlist from "./Wishlist.svg";
import Bag from "./Bag.svg";
import "./RestItems.css"

class RestItems extends React.Component{
    render(){
        return(
            <div className="parentRest">
                <div className="wishlist">
                    <img src={Wishlist} className="wishlisht" width="20px" alt="wishlist"/>
                    <div className="name"> Wishlist</div>
                </div>
                <div className="bag">
                    <img src={Bag} className="bag" width="15px" alt="bag"/>
                    <div className="name"> Bag</div>
                </div>

            </div>
        );
    }
}
export default RestItems;