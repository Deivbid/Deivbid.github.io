import React, {Component} from 'react';

class Image extends Component {
    state = {}
    render() { 
        return ( 
            <div class="hero-foot">
                <div class="container">
                    <img src="http://mattfarley.ca/img/hero.png" class="is-bottom" />
                </div>
            </div>              
         )
    }
}
 
export default Image;