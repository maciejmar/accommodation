import React from 'react';

function SearchBar () {
    return(
   <div className='d-flex'>
       
            <input className='form-control'
            type="text" placeholder="Searching..." />
            <button className="btn btn-primary"> GO! </button> 
        

    </div>
 
   )
}

export default SearchBar;