import React, {Component} from 'react';
import Header from './Parts/Header'
import Intro from './Parts/Intro'
import Image from './Parts/Image'


class SectionA extends Component {
    state = {}
    render() { 
        return ( 
            <div className="container">
                
                    <Header />
                

                <div className="row">
                    <Intro />
                </div>

                <div className="row">
                    <Image />
                </div>                                
                
               
                  
            </div>
         )
    }
}
 
export default SectionA;