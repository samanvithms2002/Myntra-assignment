import React from "react";
// import Wishlist from "./Wishlist.svg";
import {Link,useLocation} from "react-router-dom";
import Bag from "./Bag.svg";
import "./RestItems.css"

const RestItems = ({totalItems})=>{
    const Location = useLocation();
   
        return(
            <div className="parentRest">
                {/* <div className="wishlist">
                    <img src={Wishlist} className="wishlisht" width="20px" alt="wishlist"/>
                    
                    <div className="name"> Wishlist</div>
                </div> */}

               {
                   Location.pathname === "/" && (
                    <div className="bag">
                <Link to="/cart">
                    <img src={Bag} className="bag" width="15px" alt="bag"/>
                    {
                        totalItems!==0 &&(
                            <span className="icon-badge">{totalItems}</span>
                        ) 
                    }
                   
                    </Link>
                    <div className="name"> Bag</div>
                </div>
                   )
               }
                
                
                

            </div>
        );
    
}
export default RestItems;