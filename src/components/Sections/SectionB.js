import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'
import Description from './Parts/Pieces/Description'
class SectionB extends Component {
    state = {}
    render() { 
        return ( 
            <div className='description'>
                <div className='container'>
                    <div className='row desc-text'>
                        <div container='col-xs-12'>
                            <Title title="Hi, I'm David. Nice to meet you." class='sectionB-title'/>
                        </div>

                        <div container='col-xs-12'>
                            <Description />
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}
 
export default SectionB;