import React, { Component } from 'react';

class ProjectCard extends Component {
    state = {}
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

                    <a href="#modal" class="button is-primary is-outlined is-rounded">
                    <span>Watch a Video </span>
                    </a>

                    </figcaption>

                </figure>

                <div class="overlay"></div>        
            </div>
         )
    }
}
 
export default ProjectCard;
