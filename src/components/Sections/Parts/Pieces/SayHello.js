import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import AccessSignIcon from 'grommet/components/icons/base/AccessSign';
class SayHello extends Component {
   
    render() { 
        
        return (  
            <div className="col-sm-6 sayHi">
                <button type="button" className="btn btn-outline-purple">Say Hello</button>
            </div>
        )
    }
}
 
export default SayHello;