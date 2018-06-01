import React, { Component } from 'react';
import Rodal from 'rodal'

import 'rodal/lib/rodal.css';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() { 
        let image = this.props.image
        let name = this.props.name
        return ( 
            <div>
                <figure class="image is-3by2">
                    <img class="project-thumb" src={image} alt={name} />

                    <figcaption>
                    <h1 class="title is-size-5 is-size-4-widescreen">
                        {name}
                    </h1>

                    <a onClick={this.show.bind(this)} class="button is-primary is-outlined is-rounded">
                        <span>Watch a Video </span>
                    </a>

                    </figcaption>

                </figure>

                <div class="overlay"></div>

                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} animation="slideDown" >
                    <div>
                        <div className="modal-header">
                            <header> {name} </header>
                        </div>
                        <iframe
src={this.props.video}>
</iframe>
                        <div className="modal-footer">
                            <footer>
                                {this.props.description}
                            </footer>
                        </div>
                    </div>
                </Rodal>        
            </div>
         )
    }
}
 
export default ProjectCard;


