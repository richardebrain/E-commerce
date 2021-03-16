import React from 'react';
import Button from '../Buttons/button.components'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <Button >Go To CheckOut</Button>
            
        </div>
    )
}

export default CartDropdown
