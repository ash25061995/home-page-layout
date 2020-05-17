import React from 'react';
import classes from './LiveClasses.css'
import Aux from '../../hoc/Aux/Aux'

const LiveClasses = props => {
    return (
        <Aux>
            <div className={classes.LiveText}> 
                <h1>Live Classes</h1>
                <h2>select a number</h2>
            </div>
            <div className={classes.LiveClasses}>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </div>
        </Aux>

    );
};


export default LiveClasses;