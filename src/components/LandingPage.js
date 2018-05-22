import React, {Component} from 'react';
import SectionA from './Sections/SectionA'
import SectionB from './Sections/SectionB'
import SectionC from './Sections/SectionC'


class LandingPage extends Component {
    state = {}
    render() { 
        return ( 
        <div> 
            <SectionA />
            <SectionB />
            <SectionC />
        </div>
        )
    }
}
 
export default LandingPage;