import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'

export default class SectionF extends Component {
	render() {
		return (
			<section class="section testimonials is-medium is-white has-text-centered">
			<div class="container is-narrow">
			  <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">Testimonials</h1>
			  <h2 class="subtitle is-size-5-desktop">People I've worked with have said some nice things...</h2>
	  
			  <div class="columns is-centered">
				<div class="column is-two-thirds">
				  <div class="testimonials-carousel">
					<div class="testimonial-block">
					  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg" alt="" class="avatar" />
					</div>
	  
					<p class="quote">
					  “David was a real pleasure to work with and we look forward to working with him again. He’s the kind of developer you can trust with a project from start to finish.”
					</p>
	  
					<h1 class="title is-size-5">Paul Keller</h1>
					<h2 class="subtitle is-size-6">Project Manager, Good Kind</h2>
				  </div>
				</div>
			  </div>
			</div>
		  </section>
		);
	}
}
