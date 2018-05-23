import React, { Component } from 'react';

class ProjectCard extends Component {
    state = {}
    render() { 
        let image = this.props.image
        let name = this.props.name
        let styless = {
            background: 'url('+image+')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        }
        return ( 
            <div class="mix col-lg-4 col-md-6 web" >
                <a  data-toggle="modal" data-target={'#'+name} class="portfolio-item set-bg" style={styless}>
                    <div class="pi-inner">
                        <h2>+ {this.props.name.toUpperCase()}</h2>
                    </div>						
                </a>
            
                <div class="modal fade" id={name} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header center">
                            <h5 class="modal-title center" id="exampleModalLongTitle">{this.props.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" style={{textAlign:'center'}}>
                            <video width="800" controls>
                                <source src={this.props.video} type="video/mp4" />
                                    
                                Your browser does not support HTML5 video.
                            </video>
                            <p className="modal-text">{this.props.description}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}
 
export default ProjectCard;