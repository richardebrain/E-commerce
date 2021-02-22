import React, { Component } from 'react'
import ShopData from './shop.data';
import CategoryPreview from '../../components/category-preview/categoryPreview.component'

export class ShopPage extends Component {
    constructor(props){
        super(props)
        this.state={
            datas:ShopData,
        }
    }
    render() {
        return (
            <div className='shop-page'>
                {this.state.datas.map(({id,...otherProps}) => (
                    <CategoryPreview key={id} {...otherProps}/>
                ))}
                
            </div>
        )
    }
}

export default ShopPage
