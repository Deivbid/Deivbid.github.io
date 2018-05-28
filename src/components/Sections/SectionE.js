import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'

export default class SectionE extends Component {
	render() {
		return (
			<section class="section clients is-medium is-white has-text-centered">
			<div class="container is-narrow">
				<div class="columns is-centered">
					<div class="column is-half">
						<Title title="I'm proud to have collaborated with some awesome companies:" class="title is-size-3-desktop is-size-4-tablet is-size-5-mobile" />
					</div>
				</div>

				<div class="client-grid">
					<div class="columns is-multiline is-mobile">
						<div class="column is-half-mobile is-one-quarter-tablet is-half-desktop">
							<figure class="image is-2x1">
							<img src="http://www.sofoscorp.com/wp-content/uploads/2013/11/logo.png" alt="" class="client-logo"/>
							</figure>
						</div>

						<div class="column is-half-mobile is-one-quarter-tablet is-half-desktop">
							<figure class="image is-2x1">
							<img src="https://i.imgur.com/6aKPYHr.png" alt="GreenSize" class="client-logo"/>
							</figure>
						</div>
					</div>
				</div>
			</div>
			</section>
		);
	}
}

