import CartActionTypes from './cartAction.types'
const INITIAL_STATE={
    hidden:true
}
 const cartReducer =(state=INITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return{
                ...state,
                hidden: !state.hidden
            }
            default:
                return state;
    }
}
export default cartReducer