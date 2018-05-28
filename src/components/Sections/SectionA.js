import React, {Component} from 'react';
import Header from './Parts/Header'
import Intro from './Parts/Intro'
import Image from './Parts/Image'


class SectionA extends Component {
    state = {}
    render() { 
        return ( 
            <div>
                    <Header />
                    <section class="hero is-white has-text-centered">     
                        <Intro />
                
                        <Image />
                    </section>      
                               
            </div>
         )
    }
}
 
export default SectionA;