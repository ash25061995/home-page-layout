import * as actionType from '../action/actionType'

export const showSideDrawer=()=>{
    return{
        type:actionType.SHOW_SIDEDRAWER
    }
}

export const toggleHandler=(prevState)=>{
    return{
        type:actionType.TOGGLE_CLICKED,
        value:prevState
    }
}

export const backDropClicked=()=>{
    return{
        type:actionType.BACK_DROP_CLICKED,
    }
}