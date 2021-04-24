import React from "react";
import Product from "../Product/Product";
import "./MainData.css";


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