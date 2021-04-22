import React from "react"
import "./ItemDetails.css"
const ItemDetails=({change})=>{
console.log(change)
    return(
        <div className="itemDetail-parent">
            <div className="main-card">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <div className="details">
                    <div className="name">{change.Name}</div>
                    <div className="metadata">change.decription</div>
                    <div className="price">Price</div>
                    <button type="button" className="addToCart"> Add to Bag</button>
                </div>
            </div>
        </div>
    )
}
export default ItemDetails