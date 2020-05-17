import React from 'react';
import classes from './ToggleDrawer.css'
import { connect } from 'react-redux';
import * as actionCreator from '../../../../store/action/action'

const ToggleDrawer = (props) => {
    return (
        <div onClick={()=>props.onToggleClick(props.showSideDrawer)} className={classes.DrawerToggle}> 
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        showSideDrawer:state.showSideDrawer
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onToggleClick:()=>dispatch(actionCreator.toggleHandler())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( ToggleDrawer);