import React, { Component } from 'react';
import Title from './Parts/Pieces/Title'

export default class SectionF extends Component {
	render() {
		return (
			<div className="contact">
				<div className="container">
					<div className="row med">
						<Title title="Send me a message" class="title-contact" />
					</div>
					<div className="row contact-row">
						<div className="col-lg-6">
							<div className="user profile">

							</div>
						</div>

						<div className="col-lg-6">
							<h2 className="contact-item-right"><i class="fas fa-envelope"></i>  davidaaparicioback@gmail.com </h2>
							<h2 className="contact-item-right"><i class="fas fa-phone"></i>  +58 414 582 5878 </h2>
							<h2 className="contact-item-right"><i class="fab fa-skype"></i>   alfapa651 </h2>
							<h2 className="contact-item-right"><i class="fab fa-discord"></i>    Deivbid#1482 </h2>
						</div>

					</div>
				</div>
			</div>
		);
	}
}
