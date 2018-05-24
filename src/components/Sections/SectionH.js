import React, { Component } from 'react';

class SectionH extends Component {
    state = {}
    render() { 
        return ( 
            <footer>
                <div className="container is-narrow">
                    <div className='footer'>
                        <div className='row'>
                            <div className='col-lg-12 logo'>
                                <span className="logo-react"><i className="fab fa-react"></i></span>
                                <h1 className="logo-title d-inline"> David Aparicio </h1> 
                            </div>
                        </div>
                        <div className='row title-footer-box'>
                            
                                <h2 className="title-footer"> Living, learning, & leveling up one day at a time. </h2>
                        </div>
                        <div className='row social-links'>
                            
                            
                                    <a className='button social-link' > <i class="fab ic fa-twitter"></i> </a>
                                
                            
                                    <a className='button social-link' > <i class="fab ic fa-linkedin-in"></i></a>
                                
                            
                                    <a className='button social-link' > <i class="fab ic fa-facebook-f"></i></a>
                                
                            
                                    <a className='button social-link' > <i class="fab ic fa-github"></i></a>
                                                                                                                                
                            
                        </div>                                                
                    </div>
                </div>

                <div className='copyright'>
                    <h2 className='title-footer'> Created by David Aparicio <i class="far fa-smile"></i> </h2>
                </div>
            </footer>
         )
    }
}
 
export default SectionH;