import React, { Component } from 'react';

let getList = (items) =>{
	
	return items.map((x,i) => {
		return(
			<li key={i}> {x} </li> 
		)
		
	})
}

export default class Box extends Component {
	render() {
		return (
			<div>
				<figure class="image icon-dave">
					<i className={this.props.icon}></i>
				</figure>

				<h1 class="title is-size-4 is-spaced">{this.props.title}</h1>
				<p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>

				<p class="list-title has-text-primary has-text-weight-normal">
				{this.props.subtitle}
				</p>

				<p>{this.props.content}</p>

				<p class="list-title has-text-primary has-text-weight-normal">
				{this.props.tools}
				</p>

				<ul>
				{getList(this.props.items)}
				</ul>
			</div>
		);
	}
}


