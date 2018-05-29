import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import AccessSignIcon from 'grommet/components/icons/base/AccessSign';
import {Link } from 'react-router-dom'
class SayHello extends Component {
   
    render() { 
        
        return (  
            <p class="control">
                <Link to="/contact" className="button is-primary is-outlined is-rounded">
                    <span>Say Hello</span>
                </Link>
            </p>
        )
    }
}
 
export default SayHello;