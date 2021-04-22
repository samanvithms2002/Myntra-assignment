import React from "react";
import "./navigationBar.css";
import {Link } from "react-router-dom";
import RestItems from "../RestItems/RestItems"
import SearchBar from "../SearchBar/SearchBar"
import Logo from "./Myntra.svg" 

const NavigationBar =({totalItems })=>{
     //console.log(query)
        return(
            <div className="completeOuter">
            <div className="navOuter">
            <div className="logo navItems">
            <Link to="/">
            <img src={Logo} className="logo-img" alt=""  />
            </Link>
               
               
            </div>
            <div className="searchBar navItems">
                <SearchBar />
            </div>
            <div className="rest navItems">
                <RestItems totalItems={totalItems}/>
            </div>
            </div>
            </div>
        )
        
    
}

export default NavigationBar; 