import React from 'react';
function SearchBar () {
    return(
   <div>
     <input style={
       {
        color: 'blue',
        fontFamily: 'fantasy'
        
       }  
    
     }
     type="text" placeholder="Search for destination..." />
     <button>GO!</button>
    </div>
 
   )
}

export default SearchBar;