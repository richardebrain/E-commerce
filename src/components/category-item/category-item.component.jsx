import React from 'react'
import './category-item.style.scss'
import Button from '../Buttons/button.components'

const CategoryItem = ({name,price, imageUrl}) => {
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
            <Button inverted>Add To Cart</Button>
            
        </div>
    )
}

export default CategoryItem;
