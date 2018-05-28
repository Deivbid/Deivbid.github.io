import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'
import Projects from './Parts/Projects'

class SectionD extends Component {
    state = {}
    render() { 
        return ( 
            <section class="section projects is-medium is-white has-text-centered">
                <div class="container is-narrow">
                    <Title class="title is-spaced is-size-3-desktop is-size-4-mobile" title="My Recent Work" />

                    <h2 class="subtitle is-size-5-desktop">
                        Here are a few recent React projects. Want to see more? <a href="mailto:davidaapariciobal@gmail.com">Email me</a>
                    </h2>

                    <Projects />

                    <div class="columns is-centered">
                        <div class="column">
                            <a href="" class="button is-primary is-outlined is-rounded is-medium">
                            <span><i class="fab fa-github size"></i> See more in my Github</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
         )
    }
}
 
export default SectionD;