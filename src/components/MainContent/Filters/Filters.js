import React from "react";
import "./Filters.css";
const Filters =({SearchResult})=>{
    
        return(
            <div>
                <div className="heading"> Filter</div>  
                <div className="radio">
                <div className="radioChild"> <input type="radio" value="Men" name="drone" onClick={()=>SearchResult('Men')}/> Men</div>
                <div className="radioChild"> <input type="radio" value="Women" name="drone" onClick={()=>SearchResult('Women')}/> Women</div>
                {/* <div className="radioChild"> <input type="radio"/> radio3</div> */}
                </div>
                <div className="checkboxes">
                    <div className="title"> CATEGORIES</div>
                    <div className="checkboxChild"><input type="checkbox"/>Price more than $10 </div>
                    <div className="checkboxChild"><input type="checkbox"/>Price more than $20</div>
                    <div className="checkboxChild"><input type="checkbox"/>Price more than $30</div>
                </div>
                {/* <div className="checkboxes Brand">
                    <div className="title"> BRANDS</div>
                    <div className="checkboxChild"><input type="checkbox"/>checkbox1 </div>
                    <div className="checkboxChild"><input type="checkbox"/>checkbox2 </div>
                    <div className="checkboxChild"><input type="checkbox"/>checkbox3 </div>
                </div> */}
            </div>
        )
    
}
export default Filters;