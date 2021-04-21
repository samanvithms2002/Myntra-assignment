import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component{
    state={term:''};
  onFormSubmit= (event)=>{
    event.preventDefault();
  this.props.onSubmit(this.state.term);
  }
    render(){

        return(
            <div className="search">
            <form  onSubmit={this.onFormSubmit}>
            
                <input type="text" value={this.state.term}
                
                 onChange={(e)=> this.setState({term:e.target.value}) } placeholder="Search"/>
            </form>
        </div>
        );
    }
}
export default SearchBar