import React from "react";
import Product from "../Product/Product";
import "./MainData.css";
// const products=[
//     {id:1,name:"Shoes",description:"running Shoes", price:"$10.0", img:"https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scene.products.cimpress.io/v1/scenes/39fff789-7ad5-4b08-8faf-753d0c960f48"},
//     {id:2,name:"Macbook",description:"Apple Macbook",price:"15.0", img:"https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scene.products.cimpress.io/v1/scenes/39fff789-7ad5-4b08-8faf-753d0c960f48"}
// ]

const MainData =({products ,onAddToCart, addTrip,change})=>{
//    console.log(products)


        return(
            <div>
                <div className="sort">
                <label for="sort">Sort By:</label>
                <select name="sort" id="sort">
                     <option value="sort1">Recommended</option>
                     <option value="sort2">sort2</option>
                     <option value="sort3">sort3</option>
                     <option value="sort4">Sort4</option>
                </select>
                 </div> 
                <div className="ImageData">
                <div className="row">
                
                
                {
                    products.map((product)=>(

                        
                        <Product productDetails={product} onAddToCart={onAddToCart} addTrip={addTrip} change={change}/>
                       
                    ))
                   
                }
                
               
              
              
                
                
                    </div>
                </div>
            </div>
        )
       
    
}
export default MainData;