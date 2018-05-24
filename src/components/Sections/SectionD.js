import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'
import Projects from './Parts/Projects'

class SectionD extends Component {
    state = {}
    render() { 
        return ( 
            <div className="projects">
                
                    <Title title="My Recent Work" class="title" />
                    <h2 className="subtitle"> Here are some ReactJS projects. Want to see more ? <a href="mailto:davidaapariciobak@gmail.com?Subject=Hello%20David" target="_top">Email me</a></h2>
                    <Projects />
                    
                        <button type="button" className="btn btn-outline-purple but"><i class="fas fa-briefcase"></i>   See more !</button>
                    
            </div>
         )
    }
}
 
export default SectionD;