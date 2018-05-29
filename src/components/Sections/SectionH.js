import React, { Component } from 'react';

class SectionH extends Component {
    state = {}
    render() { 
        return ( 
          <footer class="section is-primary is-small has-text-centered">
          <div class="container is-narrow">
            <div class="logo">
              <i class="fab fa-react main-logo"></i>
            </div>

            <div class="columns is-centered">
              <div class="column is-one-third">
                <h1 class="title is-size-4-touch">
                  Living, Learning, & Leveling up one day at time.
                </h1>
              </div>
            </div>

            <div class="social-icons">
                <p class="field">
                  <a href="https://github.com/Deivbid" target="_blank" class="button is-medium">
                    <span class="icon is-small"><i class="fab fa-github"></i></span>
                  </a>

                  <a href="https://twitter.com/Deivbid" target="_blank" class="button is-medium">
                    <span class="icon is-small"><i class="fab fa-twitter"></i></span>
                  </a>

                  <a href="https://www.linkedin.com/in/deivbid/" target="_blank" class="button is-medium">
                    <span class="icon is-small"><i class="fab fa-linkedin-in"></i></span>
                  </a>

                  <a href="https://www.instagram.com/deivbid/" target="_blank" class="button is-medium">
                    <span class="icon is-small"><i class="fab fa-instagram"></i></span>
                  </a>                                          
                </p>
            </div>

            <div class="copyright">
              Handcrafted by me  <span class="icon has-white-text"><i class="fas fa-copyright"></i></span> Deivbid
            </div>
          </div>
        </footer>
         )
    }
}
 
export default SectionH;