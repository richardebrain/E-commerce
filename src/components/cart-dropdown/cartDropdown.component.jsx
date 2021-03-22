import React from 'react';
import Button from '../Buttons/button.components'
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
            </div>
            <Button >Go To CheckOut</Button>
            
        </div>
    )
}
const mapStateToProps =({cart:{cartItems}})=>({
   cartItems
})
export default connect(mapStateToProps)(CartDropdown)
