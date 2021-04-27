import React, {  useState } from "react";

import "./SearchBar.css"

const SearchBar =({SearchResult})=>{
   
const [query, setQuery] = useState('');
const handleChange=  (value)=>{
    
    setQuery(value)

// console.log(value)
// SearchResult(value);
}

const onFormSubmit = (event)=>{
    event.preventDefault();
    SearchResult(query)
//    console.log(query)
}


        return(
            <div className="search">
            <form onSubmit={onFormSubmit} >
            
                <input type="text" 
                    
                   
                //    {...console.log(query)}
                onChange={(e)=> handleChange(e.target.value)}
                value={query}
                
                  placeholder="Search"  />
                  {/* <input type="submit"  /> */}
            </form>
        </div>
        );
      
    
}
export default SearchBar