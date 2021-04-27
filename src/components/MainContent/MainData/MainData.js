import React from "react";
import Product from "../Product/Product";
import "./MainData.css";


const MainData =({products ,onAddToCart, addTrip,change, handleFilter})=>{
//    console.log(products)

// const selectFilter=(param)=>{
// handleFilter(param)
// console.log(param)
// }
        return(
            <div>
                <div className="sort">
                <label htmlFor="sort" className="sort-title">Sort By Price:</label>
                <select name="sort" id="sort" onChange={(e)=> handleFilter(e.target.value)}>
                     <option value="highest" >highest</option>
                     <option value="lowest">lowest</option>
                     
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