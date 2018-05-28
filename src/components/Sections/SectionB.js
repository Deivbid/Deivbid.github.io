import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'
import Description from './Parts/Pieces/Description'
class SectionB extends Component {
    state = {}
    render() { 
        return ( 
            <section class="section is-medium is-primary has-text-centered is-long">
                  <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-three-fifths">
                            <Title class="title is-spaced is-size-3-desktop is-size-4-mobile" title="Hi, I'm David. Nice to meet you." />
                            <Description />
                        </div>
                    </div>
                </div>
            </section>
         )
    }
}
 
export default SectionB;