import CartActionTypes from './cartAction.types';
export const ToggleCartView =()=> ({
     type: CartActionTypes.TOGGLE_CART_DROPDOWN
})
export const AddItems = item =>({
     type: CartActionTypes.ADD_ITEM,
     payload:item
})