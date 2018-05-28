import React, {Component} from 'react';
import Title from './Pieces/Title'

class Intro extends Component {
    state = {}
    render() { 
        return ( 
            <div class="hero-body">
            <div class="container">
              <div class="columns is-centered">
                <div class="column">
                  <Title class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" title="Full Stack Web Developer & React Lover" />
    
                  <h2 class="subtitle is-size-4-desktop"> I code beautifully simple things, and I love what I do.</h2>
    
                  <img src="http://mattfarley.ca/img/mf-avatar.svg" alt="avatar" class="avatar" />
                </div>
              </div>
            </div>
          </div>              
         )
    }
}
 
export default Intro;