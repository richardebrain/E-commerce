import React from 'react';
import MenuItem from '../menu-item/Menu-item.component'
import './directory.style.css'


class Directory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sections:[
                {
                    title:'Hats',
                    id:1,
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                
                },
                 {
                    title:'jackets',
                    id:2,
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                
                },
                 {
                    title:'sneakers',
                    id:3,
                    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                
                },
                 {
                    title:'womens',
                    id:4,
                    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large'
                
                },
                {
                    title:'men',
                    id:5,
                    imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                    size:'large'
                
                }
            ]

        }
    }
    render(){
        const {sections} = this.state;
        return(
              <div className='directory'>
                  {sections.map(({id,title,imageUrl,size}) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>)}
              </div>
          
        )
    }

}
export default Directory;