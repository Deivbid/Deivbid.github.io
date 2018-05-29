import React, { Component } from 'react';
import Logo from './Sections/Parts/Pieces/Logo'
import Title from './Sections/Parts/Pieces/Title'
import {Link } from 'react-router-dom'
import Form from './Sections/Form'
import './contact.css'

export default class Contact extends Component {
	render() {
		return (
			<div>
				<nav className="navbar is-transparent is-planner">
					<div className="container">
						<div className="navbar-brand">
							<Logo />
						</div>

						<div className="navbar-menu">
							<div className="navbar-end">
								<p className="buttons">
									<Link to={`${process.env.PUBLIC_URL}/`} className="button is-primary is-outlined is-rounded">
					                    <span>Go Back</span>
					                </Link>
								</p>
							</div>
						</div>
					</div>
				</nav>

				<div className="is-form-page">
					<section className="is-white has-text-centered">
						<div className="container">
							<div className="columns is-centered">
								<div className="column is-three-quarters">
									<img src="http://mattfarley.ca/img/mf-avatar.svg" alt="avatar" id="contact-image" className="avatar" />
									<Title class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" title="Thanks for taking the time to reach out. What can I do for you today?" />
								</div>
							</div>
						</div>
					</section>

					<section className="is-white">
						<div className="container">
							<Form />
						</div>
					</section>
				</div>
			</div>
		);
	}
}
