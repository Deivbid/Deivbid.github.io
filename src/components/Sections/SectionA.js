import React, {Component} from 'react';
import Header from './Parts/Header'
import Intro from './Parts/Intro'
import Image from './Parts/Image'


class SectionA extends Component {
    state = {}
    render() { 
        return ( 
            <div className="container">
                <div className='SectionA'>
                    <Header />
                          
                    <Intro />
              
                    <Image />      
                </div>                                  
            </div>
         )
    }
}
 
export default SectionA;