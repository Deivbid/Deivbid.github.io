import React, {Component} from 'react';


class Logo extends Component {
    state = {}
    render() { 
        return ( 
            <div className="col-sm-6 ">
                <span className="logo-react"><i class="fab fa-react"></i></span>
                <h1 className="logo-title d-inline"> David Aparicio </h1> 
            </div>
         )
    }
}
 
export default Logo;