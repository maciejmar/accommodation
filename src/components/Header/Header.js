import React from 'react';
import styles from "./Header.module.css";


function Header() {
 return (
     <div className={styles.header}>
         <input type="text" placeholder="Search for destination..." />
    </div>
 )
}

export default Header;