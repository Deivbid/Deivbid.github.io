import React, {Component} from 'react';
import SectionA from './Sections/SectionA'
import SectionB from './Sections/SectionB'
import SectionC from './Sections/SectionC'
import SectionD from './Sections/SectionD'
import SectionE from './Sections/SectionE'
import SectionF from './Sections/SectionF'
import SectionG from './Sections/SectionG'
import SectionH from './Sections/SectionH'


class LandingPage extends Component {
    state = {}
    render() { 
        return ( 
        <div> 
            <SectionA />
            <SectionB />
            <SectionC />
            <SectionD />
            <SectionE />
            <SectionF />
            <SectionG />
            <SectionH />
        </div>
        )
    }
}
 
export default LandingPage;