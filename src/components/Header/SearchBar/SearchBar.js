import React from 'react';

function SearchBar () {
    return(
   <div className='d-flex'>
       
            <input className='form-control'
            type="text" placeholder="Searching..." />
            <button className="ml-1 btn btn-secondary"> GO! </button> 
        

    </div>
 
   )
}

export default SearchBar;