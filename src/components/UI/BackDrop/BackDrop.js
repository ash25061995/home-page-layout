import React from 'react';
import classes from './BackDrop.css'
import { connect } from 'react-redux';
import * as actionCreator from '../../../store/action/action'

const BackDrop=(props)=>(
    props.showSideDrawer?<div className={classes.BackDrop} onClick={props.onBackDropClick}></div>:null
)

const mapStateToProps=state=>{
    return{
        showSideDrawer:state.showSideDrawer
    }
}

const mapDipatchToProps=dispatch=>{
    return{
        onBackDropClick:()=>dispatch(actionCreator.backDropClicked())
    }
}
export default connect(mapStateToProps,mapDipatchToProps)( BackDrop);