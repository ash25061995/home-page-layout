import * as actionType from '../store/action/actionType'

const initialState={
    showSideDrawer:false,
    toggleClicked:false,
    error:false
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionType.SHOW_SIDEDRAWER:
            return{
                ...state,
                showSideDrawer:true
            }
        case actionType.TOGGLE_CLICKED:
            return{
                ...state,
                showSideDrawer:!action.value
            }
        case actionType.BACK_DROP_CLICKED:
            return{
                ...state,
                showSideDrawer:false
            }
        default:
            return state
    }
}

export default reducer;