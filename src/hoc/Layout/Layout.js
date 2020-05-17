import React, { Component } from 'react';
import Aux from '../Aux/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/action/action'

class Layout extends Component{
    render(){
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer open={this.props.sideDrawerHandler} closed={this.props.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
            )
    }
     
}

const mapStateToProps=state=>{
    return{
        showSideDrawer:state.showSideDrawer
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onShowSideDrawer:()=>dispatch(actionCreator.showSideDrawer()),
        onToggleClick:()=>dispatch(actionCreator.toggleHandler())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);