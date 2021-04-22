import React from "react";
import MainData from "./MainData/MainData";
import Filters from "./Filters/Filters";
import "./MainContent.css";
const MainContent=({products , onAddToCart, addTrip, change})=>{
    // console.log(mainproduct)
//    const maindata={products}
        return(
            <div className="parentMain">
               <div className="filters">
                   <Filters/>
               </div>
               <div className="MainData">
                   <MainData products={products} onAddToCart={onAddToCart} addTrip={addTrip} change={change}/>
               </div>
            </div>
        )
    
}
export default MainContent;