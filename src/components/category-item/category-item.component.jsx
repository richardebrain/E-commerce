import React from 'react'
import './category-item.style.scss'
import Button from '../Buttons/button.components'
import { AddItems } from '../../Redux/cart/cart.action'
import {connect }  from 'react-redux'



const CategoryItem = ({item,addItems}) => {
    const {imageUrl,name,price} = item
    return (
        <div className='collection-item'>
            <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            
            />
            <div className='collection-footer'>
            <span className='name'>{name}</span >
            <span className='price'> ${price}</span >

            </div>
            <Button inverted onClick={()=>addItems(item)}>Add To Cart</Button>
            
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    addItems: item =>dispatch(AddItems(item))
})

export default connect (null,mapDispatchToProps)(CategoryItem);
