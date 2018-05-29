import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'
import {Link } from 'react-router-dom'

export default class SectionG extends Component {
	render() {
		return (
		    <section class="section call-to-action is-primary has-text-centered">
		      <div class="container is-narrow">
		        <div class="box">
		          <div class="columns level">
		            <div class="column level-item">
		             	<Title title="Contact me" class="title" />
		            </div>

		            <div class="column level-item">
		              <p>Interested in working together? We should queue up a chat. I'll buy the coffee</p>
		            </div>

		            <div class="column level-item">
		              <Link to={`${process.env.PUBLIC_URL}/contact`} class="button is-primary is-outlined is-rounded is-medium">Let's do this</Link>
		            </div>
		          </div>
		        </div>
		      </div>
		    </section>
		);
	}
}
