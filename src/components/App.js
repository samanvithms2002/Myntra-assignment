import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import MainContent from "./MainContent/MainContent";
import "./app.css";
class App extends React.Component{
    render(){
        return(
            <div>
            <div className="navbar">
            <NavigationBar/>
            </div>
            
            <div className="Maincontent">
            <MainContent/>  
            </div>
           
           
            </div>
           
        );
    }
}

export default App;