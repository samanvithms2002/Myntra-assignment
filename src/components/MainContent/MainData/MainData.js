import React from "react";
import Product from "../Product/Product";
import "./MainData.css";
// const products=[
//     {id:1,name:"Shoes",description:"running Shoes", price:"$10.0", img:"https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scene.products.cimpress.io/v1/scenes/39fff789-7ad5-4b08-8faf-753d0c960f48"},
//     {id:2,name:"Macbook",description:"Apple Macbook",price:"15.0", img:"https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scene.products.cimpress.io/v1/scenes/39fff789-7ad5-4b08-8faf-753d0c960f48"}
// ]

const MainData =({products ,onAddToCart, addTrip,change, handleFilter})=>{
//    console.log(products)


        return(
            <div>
                <div className="sort">
                <label for="sort" className="sort-title">Sort By Price:</label>
                <select name="sort" id="sort" onChange={()=> handleFilter}>
                     <option value="highest">higehstToLowest</option>
                     <option value="lowest">LowestToHighest</option>
                     
                </select>
                 </div> 
                <div className="ImageData">
                <div className="row">
                
                
                {
                    products.map((product)=>(

                        
                        <Product key={product.id} productDetails={product} onAddToCart={onAddToCart} addTrip={addTrip} change={change}/>
                       
                    ))
                   
                }
                
               
              
              
                
                
                    </div>
                </div>
            </div>
        )
       
    
}
export default MainData;