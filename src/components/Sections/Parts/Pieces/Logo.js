import React, {Component} from 'react';


class Logo extends Component {
    state = {}
    render() { 
        return ( 
            <a href="/" class="navbar-item">
                <i class="fab fa-react main-logo"></i>
                <h1 class="main-name">  David Aparicio</h1>
            </a>
         )
    }
}
 
export default Logo;