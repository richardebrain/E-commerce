import React from 'react';
import MenuItem from '../menu-item/Menu-item.component'
import './directory.style.scss'


class Directory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sections:[
                {
                    title:'Hats',
                    id:1,
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl:'hat'
                
                },
                 {
                    title:'jackets',
                    id:2,
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    linkUrl:''
                
                },
                 {
                    title:'sneakers',
                    id:3,
                    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl:'hat/sneaker'
                
                },
                 {
                    title:'womens',
                    id:4,
                    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large',
                    linkUrl:''
                
                },
                {
                    title:'men',
                    id:5,
                    imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                    size:'large',
                    linkUrl:''
                
                }
            ]

        }
    }
    render(){
        const {sections} = this.state;
        return(
              <div className='directory'>
                  {sections.map(({id,...otherSectionsProps}) => <MenuItem key={id} {...otherSectionsProps}/>)}
              </div>
          
        )
    }

}
export default Directory;