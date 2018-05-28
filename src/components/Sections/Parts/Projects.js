import React, { Component } from 'react';
import ProjectCard from './Pieces/ProjectCard'


class Projects extends Component {
    
    
    render() { 

        const projects = [
            {
                name:'NBA',
                image:'https://png.pngtree.com/thumb_back/fw800/back_pic/04/26/46/435839d35ab587e.jpg',
                description: 'This is Website that has email subscriptions, realtime changes and more. It uses a NBA API to get information. I made a dinamic search bar and vote section. Really cool !',
                video: '/Videos-React/NBA.mp4'
            },
            {
                name:'Pokedex',
                image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAnFBMVEXBICb///8FBggAAAAAAgTs7OynHCHFIScABQfIISf29vYABAOeGyAAAASen597e3s3ODhsFBfS09KOGR2+vr7FxcWsHSKZmZnx8fFVVlZzc3MwDA1KDxGQkZBMTU1pampWEBRZWlosLS0VCAmFhoaztLODFxu3HyQjJSVzFBgWGBfb29urq6shCgsdHh5CDhAoCgw1NjZBQkJeEhVYUdU6AAAEbElEQVR4nO3cbVPiPBiGYSCwhlZBeRHUFXQVRUFZ9P//t6UmoV0E2yvpDMPNdX55Zh7yhWOSEtN2K9Uya6haUv3XSUVkxAIiFhCxgIgFRCwgYgERC4hYQMQCIhYQsYCIBUQsIGIBEQuIWEDEAiIWELGAiAVELCBiARELiFhAxAIiFhCxgIgFRCwgYgERC4hYQMQCIhYQsYCIBUQsIGIBEQuIWEDEAiIWELGAiAVELCBiARELiFhAxAIiFhCxgIgFRCwgYgERC4hYQMQCIhYQsYCIBUQsIGIBEQuIWEDEAiIWELGAiAVELCBiARELiFhAxAIiFhCxgIgFRCwgYgERC4hYQMQCIhYQsYCIBUQsIGIBEQuIWEDEAiIWELGAiAVELCBiARELiFhAxAIiFhCxgIgFRCygUrGGFuuy2RTJVRpU1GsvVb1mtN4+u88CvUqi6t+rVTWX1jpedCvSuEqhmkyVm1Rpuv7wJIyrBKrOMjOnNrhOm/v+gmUWbvW4g+qLK76TNLlCqYbn/1HV1caC1A+XcrQCrWZxapVc4lX8bv6bmVxylmKgVaqycmpPZlFUjaJGr/2efrDSkjK3gqwaaxKlRv3/PuqM15/pWMqOPghrurZadr59OBupM7frepahFWI1Vm5aDbZ+PneTSy+OHqu3turvGLG+pMVPIi7yAVhWQqnZziHuoqZjEQvR3+rWHjGo75erLVp3EqaWt1VkN59q/uMwt1ZjCXtTb6yBXYRXOeOu7dT6FDC1vLHstkE1csZFZiHqeN/ftIR8rTrWqp070k7BuHv469AX67HgxEqm1tfeVP8+/HXoi2UOG9SowFBz1dK1fX/V8DytIlXkp9DUV1J+Dz2x3CVr9370G6yAi5Ynltk+KVVocM2sw5djxTI/ceqj0GDzB7eAnZYnlvkxzN2RmtpKyM9hGNY9sYi1I0+s2+LbrPVG6/APHjyx5gZrWmiw2cDqi2P9NbQbTTUsMtgc5uinY8WyT2LtPFDONrOb0sO/I+aJZc+UCxw6uD2Z1s/7/q7B+WKNi2/hzcmXvjn467s31sSuw0nuSHt5E/DXjjfW0JxSqdfckSN7yRJwW9oXy91hVa2ccfaOhYRV6I9lD2nOcs5K7RG8hAOakPuGdnmpP0VG6QcBEysAa+bu3v909OAeh6hLmFght++v87XcEL2QMLGCnqJxj32o5fbrVjRyVkKeOQrB6rjHR9XWGxe99eNsMhZh4MNsc6dxppabfyV2RqnVhYhFGPpM6W3mkdLpIL3V02idpw+V1g//IMsWhpXRSh5Sfh1dD1qD9tV79nFlOVbBz8HPs68MKFf6v3QsZQ1WSnjDovPDCxaJVVeOVQmvo0TjnVw6XsjYM9jCsVaT62Mrl66/dWW9dFgGVrXav1IbXlrHN90TUVTlvcnaaH2ozDsV8d+XS1mzKqksrKROyx4xXJxWmtJmVVKZWOkL5QKhkkrF4j9VQKx1xAIiFhCxgIgFRCwgYgERC4hYQMQCIlbx/gGsL2c4oOT15wAAAABJRU5ErkJggg==',
                description: 'Cool App that uses the Pokemon API just for fun and practice the API requests and some Css.',
                video: '/Videos-React/Pokedex.mp4'
            },
            {
                name:'Music React',
                image:'http://soytecno.com/wp-content/uploads/2016/05/spotify-1360002_1280.jpg',
                description: 'Mobile first app that get information of musical artist and shows her description and their CDs. flexbox fun :p',
                video: '/Videos-React/este.mp4'
            },                        

        ]



        let getProjects = (projects) => {
            return( 
                projects.map((x, i) => {
                    return( 
                        <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
                            <ProjectCard name={x.name} image={x.image} description={x.description} video={x.video} />
                        </div>  
                     )
                })
             )
        }

        return ( 
            <div class="project-grid">
                <div class="columns is-multiline is-mobile">
                    {getProjects(projects)}
                </div>
            </div>
         )
    }
}
 
export default Projects;

