import { useState } from 'react';
import PropTypes from 'prop-types';
const propTypes = {
    search: PropTypes.func.isRequired
}
function SearchBar (props) {
 
    const [term, setTerm] = useState('');
    const search= () => {
        
        console.log('szukaj!', term);
        props.onSearch(term);
    }

    // const updateTerm = (e) => {
    //     setTerm(e.target.value);
    // }
    const onKeyDwonHandler =  (e) => {
        if(e.key === 'Enter') search();    
          
    }

    return(
   <div className='d-flex'>
       
            <input value={term} 
               onKeyDown = {onKeyDwonHandler}
               onChange = { e => setTerm(e.target.value)} className="form-control"
                 type="text" placeholder="Searching..." />
            <button onClick = {search} 
              className="ml-1 btn btn-secondary"> GO! </button> 
        

    </div>
 
   )
}
SearchBar.propTypes = propTypes;
export default SearchBar;