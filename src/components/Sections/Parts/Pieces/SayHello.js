import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import AccessSignIcon from 'grommet/components/icons/base/AccessSign';
class SayHello extends Component {
   
    render() { 
        
        return (  
            <p class="control">
                <a href="!#" class="button is-primary is-outlined is-rounded">
                    <span>Say Hello</span>
                </a>
            </p>
        )
    }
}
 
export default SayHello;