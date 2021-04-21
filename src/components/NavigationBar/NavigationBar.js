import React from "react";
import "./navigationBar.css";
import RestItems from "../RestItems/RestItems"
import SearchBar from "../SearchBar/SearchBar"
import Logo from "./Myntra.svg" 

class NavigationBar extends React.Component{
    render(){
        return(
            <div className="completeOuter">
            <div className="navOuter">
            <div className="logo navItems">
                <img src={Logo} className="logo-img"  />
               
            </div>
            <div className="searchBar navItems">
                <SearchBar/>
            </div>
            <div className="rest navItems">
                <RestItems/>
            </div>
            </div>
            </div>
        )
        
    }
}

export default NavigationBar; 