import React from 'react'
import './Menu-item.style.css'

const MenuItem = ({title,imageUrl,size}) => {
    return (
        <div className={`${size} menu-item`}
         style={{
             backgroundImage:`url(${imageUrl})`
         }}>
            <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
            

            </div>
            
        </div>
    )
}

export default MenuItem
