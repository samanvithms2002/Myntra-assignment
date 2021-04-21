import React from "react";
import MainData from "./MainData/MainData";
import Filters from "./Filters/Filters";
import "./MainContent.css";
class MainContent extends React.Component{
    render(){
        return(
            <div className="parentMain">
               <div className="filters">
                   <Filters/>
               </div>
               <div className="MainData">
                   <MainData/>
               </div>
            </div>
        )
    }
}
export default MainContent;