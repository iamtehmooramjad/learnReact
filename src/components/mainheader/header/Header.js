import React from 'react';


import classes from './Header.module.css';
import Navigation from "../navigation/Navigation";

const Header = (props) => {
    return (
        <header className={classes['main-header']}>
            <h1>A Typical Page</h1>
            <Navigation/>
        </header>
    );
};

export default Header;
