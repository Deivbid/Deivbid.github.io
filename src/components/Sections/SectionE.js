import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'

export default class SectionE extends Component {
	render() {
		return (
			<div className="work">
				<div className="container">
					<div className="row med">
						<div className="col-lg-12 half">
							<Title title="I'm proud to have collaborated with some awesome companies:" class="title-work" />
						</div>
					</div>

					<div className="row images">
						<div className="col-sm-6">
							<img src="http://www.sofoscorp.com/wp-content/uploads/2013/11/logo.png" alt="sofos" />
						</div>

						<div className="col-sm-6">
							<img src="https://i.imgur.com/6aKPYHr.png" alt="greensize"/>
						</div>						
					</div>


				</div>
			</div>
		);
	}
}
