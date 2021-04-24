import React from "react";
import "./Product.css";

const Product =({productDetails , onAddToCart, change})=> {
    // const value=0;
    // console.log(productDetails)

    
   
        return(
            <div className="card">
            <div className="card-Image">
                <img className="prodImg" src={productDetails.media.source} alt='' title={productDetails.name}/>
            </div>
            <div className="ShirtName content-card" > {productDetails.name}</div>
            <div className="metadata content-card" dangerouslySetInnerHTML={{ __html: productDetails.description }}></div>
            <div className="price content-card">{productDetails.price.formatted_with_symbol}</div>
            <div className="actions content-card"> 
             <button type="button" className="cart-btn add" onClick={()=> onAddToCart(productDetails.id,1)}> Add to cart</button>
            
             <button type="button" className="cart-btn view" onClick={()=> (change(productDetails.id))}> View</button>
            
            </div>
        </div>
        )
    
}
export default Product;