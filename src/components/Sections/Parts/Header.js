import React, {Component} from 'react';
import Logo from './Pieces/Logo';
import SayHello from './Pieces/SayHello';


class Header extends Component {
    state = {}
    render() { 
        return ( 
            <div className="row header">
                <Logo />
                <SayHello />
            </div>
        )
    }
}
 
export default Header;