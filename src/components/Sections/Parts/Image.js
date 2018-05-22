import React, {Component} from 'react';

class Image extends Component {
    state = {}
    render() { 
        return ( 
            <div className='row'> 
                <img className='hero-foot' src='http://mattfarley.ca/img/hero.png' />
            </div>                
         )
    }
}
 
export default Image;