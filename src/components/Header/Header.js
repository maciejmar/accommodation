import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import styles from "./Header.module.css";


function Header() {
 return (
     <header className={ `${styles.header} +  container`}>
         <SearchBar/>
    </header>
 )
}

export default Header;