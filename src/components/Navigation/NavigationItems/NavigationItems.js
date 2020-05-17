import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem  >
                <li style={{ color: 'grey' }}>
                    Upcoming<FontAwesomeIcon style={{ marginLeft: '8px' }} icon={faCoffee} />
                </li>
                <li>Live Consultation</li>
            </NavigationItem>
            <NavigationItem  >Buy Plans</NavigationItem>
            <NavigationItem  >View Plans</NavigationItem>
            <NavigationItem  >Log In</NavigationItem>
        </ul>
    );
};

export default NavigationItems;