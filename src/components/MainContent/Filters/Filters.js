import React from "react";
import "./Filters.css";
class Filters extends React.Component{
    render(){
        return(
            <div>
                <div className="heading"> Filter</div>  
                <div className="radio">
                <div className="radioChild"> <input type="radio"/> radio1</div>
                <div className="radioChild"> <input type="radio"/> radio2</div>
                <div className="radioChild"> <input type="radio"/> radio3</div>
                </div>
                <div className="checkboxes">
                    <div className="title"> CATEGORIES</div>
                    <div className="checkboxChild"><input type="checkbox"/>checkbox1 </div>
                    <div className="checkboxChild"><input type="checkbox"/>checkbox2 </div>
                    <div className="checkboxChild"><input type="checkbox"/>checkbox3 </div>
                </div>
                <div className="checkboxes Brand">
                    <div className="title"> BRANDS</div>
                    <div className="checkboxChild"><input type="checkbox"/>checkbox1 </div>
                    <div className="checkboxChild"><input type="checkbox"/>checkbox2 </div>
                    <div className="checkboxChild"><input type="checkbox"/>checkbox3 </div>
                </div>
            </div>
        )
    }
}
export default Filters;