import React, { useState } from 'react';

function SearchBar () {
    const [term, setTerm] = useState('');
    const search= () => {
        console.log('szukaj!', term);
    }

    const updateTerm = (e) => {
        setTerm(e.target.value);
    }
    const onKeyDwonHandler =  (e) => {
        if(e.key === 'enter') search(); 
    }

    return(
   <div className='d-flex'>
       
            <input className='form-control' value={term} 
            onChange={updateTerm} onKeyDown={onKeyDwonHandler}
            type="text" placeholder="Searching..." />
            <button onClick = {search} className="ml-1 btn btn-secondary"> GO! </button> 
        

    </div>
 
   )
}

export default SearchBar;