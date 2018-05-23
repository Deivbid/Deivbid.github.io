import React, { Component } from 'react';
import ProjectCard from './Pieces/ProjectCard'


class Projects extends Component {
    
    
    render() { 

        const projects = [
            {
                name:'NBA',
                image:'http://www.pngmart.com/files/5/NBA-Transparent-Background.png',
                description: 'This is Website that has email subscriptions, realtime changes and more. It uses a NBA API to get information. I made a dinamic search bar and vote section. Really cool !',
                video: '/Videos-React/NBA.mp4'
            },
            {
                name:'Pokedex',
                image:'https://vignette.wikia.nocookie.net/pokemonreloaded/images/4/4c/Pokeball.png/revision/latest?cb=20160823223254&path-prefix=es',
                description: 'Cool App that uses the Pokemon API just for fun and practice the API requests and some Css.',
                video: '/Videos-React/Pokedex.mp4'
            },
            {
                name:'Music React',
                image:'http://cdn.onlinewebfonts.com/svg/img_80298.png',
                description: 'Mobile first app that get information of musical artist and shows her description and their CDs. flexbox fun :p',
                video: '/Videos-React/este.mp4'
            },                        

        ]



        let getProjects = (projects) => {
            return( 
                projects.map((x, i) => {
                    return( 
                        <ProjectCard name={x.name} image={x.image} description={x.description} video={x.video} />
                     )
                })
             )
        }

        return ( 
            <div className='row services'>
                {getProjects(projects)}
            </div>
         )
    }
}
 
export default Projects;