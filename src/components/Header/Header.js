import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import styles from "./Header.module.css";


function Header(props) {
 return (
     <header className={ `${styles.header}   container`}>
         <SearchBar onSearch = {props.onSearch}/>
    </header>
 )
}

export default Header;