import React from "react";
import "./MainData.css";
class MainData extends React.Component{
    render(){
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
                    <div className="card">
                        <div className="card-Image"></div>
                        <div className="ShirtName"> Name</div>
                        <div className="metadata">Some MetaData</div>
                    </div>

                    <div className="card">
                        <div className="card-Image"></div>
                        <div className="ShirtName"> Name</div>
                        <div className="metadata">Some MetaData</div>
                    </div>

                    <div className="card">
                        <div className="card-Image"></div>
                        <div className="ShirtName"> Name</div>
                        <div className="metadata">Some MetaData</div>
                    </div>
                   
                    </div>

                    {/* <div className="row">
                    <div className="card">
                        <div className="card-Image"></div>
                        <div className="ShirtName"> Name</div>
                        <div className="metadata">Some MetaData</div>
                    </div>

                    <div className="card">
                        <div className="card-Image"></div>
                        <div className="ShirtName"> Name</div>
                        <div className="metadata">Some MetaData</div>
                    </div>

                    <div className="card">
                        <div className="card-Image"></div>
                        <div className="ShirtName"> Name</div>
                        <div className="metadata">Some MetaData</div>
                    </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default MainData;