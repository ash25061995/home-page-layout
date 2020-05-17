import React from 'react';
import SwiftLogo from '../../assets/images/logo.png';
import classes from './Logo.css'

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={SwiftLogo} alt=""/>
        </div>
    );
};

export default Logo;