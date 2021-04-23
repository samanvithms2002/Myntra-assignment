import React from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./ItemDetails.css"
const ItemDetails=({change , onAddToCart})=>{
console.log(onAddToCart)


   
    return(
        <div className="itemDetail-parent">
            <div className="main-card">
                <div className="img">
                <TransformWrapper defaultScale={1} defaultPositionX={100}
        defaultPositionY={100}>
                    <TransformComponent>
                    <img src={change.media.source} className="card-img" alt=""/>
                    </TransformComponent>
                 </TransformWrapper>
                </div>
                <div className="details">
                    <div className="name-detail detail-child">{change.name}</div>
                    <div className="metadata-detail detail-child" dangerouslySetInnerHTML={{ __html: change.description }}></div>
                    <div className="price detail-child">{change.price.formatted_with_symbol}</div>
                    <button type="button detail-child" className="addToCart" onClick={()=> onAddToCart(change.id,1)}> Add to Bag</button>
                </div>
            </div>
        </div>
    )
}
export default ItemDetails