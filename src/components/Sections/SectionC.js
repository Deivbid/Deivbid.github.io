import React, {Component} from 'react';
import Box from './Parts/Box'

class SectionC extends Component {

    state = {}
    render() {

    let frontEnd = ['Sublime', 'Bootstrap', 'Material Design UI', 'CodePen', 'Github', 'GitLab', 'Terminal'] 
    let backEnd = ['NodeJS', 'Django', 'MongoDB', 'APIs', 'Firebase', 'Axios', 'Auth']
    let learning = ['React Native', 'Code Challenges', 'Unity', 'Design Patterns', 'Youtube', 'Ebooks (React and Redux)', 'VR']
        return ( 
                <section class="section skills has-text-centered">
                    <div class="container is-narrow">
                        <div class="box">
                            <div class="content">
                                <div class="columns is-centered">
                                    <div class="column">
                                        <Box title="Front-end Developer" 
                                            description="I tend to code things from scratch, and enjoy bringing ideas to life in the browser" 
                                            subtitle="Languages I speak:"
                                            content="HTML, CSS, JavaScript, JSX, ES6"
                                            tools="DevTools:"
                                            icon="fas fa-desktop"
                                            items={frontEnd}/>
                                    </div>

                                    <div className="column">
                                        <Box title="Back-end Developer" 
                                            description="I like to solve challenges and make things work and running nicely. Learning everyday" 
                                            subtitle="Languages I use:"
                                            content="JavaScript, Python"
                                            tools="Technologies:"
                                            icon="fas fa-hdd"
                                            items={backEnd}/> 
                                    </div>

                                    <div className="column">
                                        <Box title="Always Learning" 
                                            description="I'm constantly learning new technologies and try new things to improve as Developer" 
                                            subtitle="I usually play with:"
                                            content="Challenges, Designs, Videogames"
                                            tools="Interest:"
                                            icon="fas fa-graduation-cap"
                                            items={learning}/> 
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>
                </section>
         )
    }
}
 
export default SectionC;