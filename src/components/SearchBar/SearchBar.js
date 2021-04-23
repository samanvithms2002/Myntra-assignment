import React, {  useState } from "react";

import "./SearchBar.css"

const SearchBar =({SearchResult})=>{
   
const [query, setQuery] = useState('');
const onFormSubmit=(event)=>{
    event.preventDefault();
SearchResult(event);
console.log(event)
}


        return(
            <div className="search">
            <form onSubmit={ onFormSubmit} >
            
                <input type="text" 
                    
                   value={query}
                   
                onChange={(e)=>setQuery(e.target.value)}
                
                  placeholder="Search"  />
                  {/* <input type="submit"  /> */}
            </form>
        </div>
        );
      
    
}
export default SearchBar