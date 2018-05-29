import React, {Component} from 'react';
import {Link } from 'react-router-dom'

class Logo extends Component {
    state = {}
    render() { 
        return ( 
            <Link to="/" class="navbar-item">
                <i class="fab fa-react main-logo"></i>
                <h1 class="main-name">  David Aparicio</h1>
            </Link>
         )
    }
}
 
export default Logo;