import React from "react";
import {Link } from "react-router-dom";

import "./Cart.css"

const Cart =({cart ,handleUpdateToCart, handleRemoveFromCart, handleEmptyCart})=>{
  

    const EmptyCart=()=>{
        return(
            <div className="empty-parent">
                <div className="Heading-Cart"> Your Cart </div>
                <div className="empty-cart">Your Cart is empty </div>
                <Link to="/">
                <span  className="empty-cart" >Click to Add some items</span>
                </Link>
                
            </div>
            
        )
    }
   

    const FilledCart = ()=>{
        return(

            
            <div className="parent">
            <div className="Heading-Cart"> Your Cart </div>
            <div className="row"> 
                {
                    cart.line_items.map((item)=>(
                            <div className="cart-card">
                                <div className="cart-img">
                                    <img className="img-cart" src={item.media.source} alt=""/>
                                </div>
                                <div className="item-name">{item.name}</div>
                                <div className="price-counter">
                                    <div className="item-price">{item.line_total.formatted_with_symbol}</div>
                                    <div className="item-price counter">
                                        <button type="button" className="counter-items counter-btn" onClick={()=> handleUpdateToCart(item.id,item.quantity-1)}> - </button>
                                        <span className="counter-items">{item.quantity}</span>
                                        <button type="button" className="counter-items counter-btn" onClick={()=> handleUpdateToCart(item.id,item.quantity+1)}> + </button>
                                    </div>
                                </div>
                                <div className="remove">
                                    <button type="button" className="remove-btn" onClick={()=> handleRemoveFromCart(item.id)}> Remove</button>
                                </div>
                                
                            </div>
                    ))
                }
                </div>
                <div className="total-amount">
                    Your Total amount is : {cart.subtotal.formatted_with_symbol}
                </div>
                <div className="remove-cart-btn">
                    <button className="remove-cart" onClick={handleEmptyCart}>Empty Cart</button>
                    
                    
                    
                    
                </div>
            </div>
        )
    }

    return(
        <div className="parent">
    {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </div>
    )
}
export default Cart;