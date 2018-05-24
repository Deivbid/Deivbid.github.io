import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'

export default class SectionG extends Component {
	render() {
		return (
			<div className="action">
				<div className="container is-narrow">
					<div className="box">
						<div className="row">
							<div className="col-sm-4 fix-box">
								<Title title="More about me" class="title-action" />
							</div>

							<div className="col-sm-4 fix-box">
								<p className="action-text"> I'm very friendly and teamworking person. Feel free to see my resume and know more about me</p>
							</div>							

							<div className="col-sm-4 fix-box">
								<button type="button" className="btn btn-outline-purple but-action"> My Resume </button>
							</div>							
						</div>
					</div>
				</div>
			</div>
		);
	}
}
