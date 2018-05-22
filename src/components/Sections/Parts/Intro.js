import React, {Component} from 'react';
import Title from './Pieces/Title'

class Intro extends Component {
    state = {}
    render() { 
        return ( 
            <div className="row intro"> 
                <div className="col-sm-12 title">
                    <Title title="Front-End Developer & ReactJS Lover" />
                </div>

                <div className="col-sm-12">
                    <h2 className="subtitle"> I code beautifully simple things, and I love what I do </h2>
                </div>

                <div className="col-sm-12">
                    <img className="img-intro" src="http://mattfarley.ca/img/mf-avatar.svg"/>
                </div>
            </div>                
         )
    }
}
 
export default Intro;