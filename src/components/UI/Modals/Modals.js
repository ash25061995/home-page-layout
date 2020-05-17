import React, { Component } from 'react';
import classes from './Modals.css'
import Aux from '../../../hoc/Aux/Aux'
import BackDrop from '../BackDrop/BackDrop'

class Modals extends Component{
   
    shouldComponentUpdate(prevProp){
        console.log("should component")
        return prevProp.show!==this.props.show||prevProp.children!==this.props.children;
    }
    render(){
        return(
            <Aux>
            <BackDrop show={this.props.show} clicked={this.props.clicked} error={this.props.error}/>
            <div className={classes.Modal}
                style={
                    {transform:this.props.show&&this.props.error?'translateY(0)':'translateY(-100vh)',
                    opacity:this.props.show&&this.props.error?'1':'0'}
                }
            >
            {this.props.children}
        </div>
        </Aux>
        )
    }
}
        
        

   



export default Modals;