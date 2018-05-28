import React, {Component} from 'react';
import Logo from './Pieces/Logo';
import SayHello from './Pieces/SayHello';


class Header extends Component {
    state = {}
    render() { 
        return ( 
            <nav class="navbar is-transparent" >
                <div class="container">
                    <div class="navbar-brand">
                        <Logo />
                    </div>
                    
                    <div class="navbar-menu">
                        <div class="navbar-end">
                        <div class="navbar-item">
                            <SayHello />
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
 
export default Header;