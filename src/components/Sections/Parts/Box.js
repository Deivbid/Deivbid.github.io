import React, { Component } from 'react';

let getList = (items) =>{
	console.log(items)
	return items.map((x,i) => {
		return(
			<li key={i}> {x} </li> 
		)
		
	})
}

export default class Box extends Component {
	render() {
		return (
			<div className="column">
				<figure className="image">
					<i className={this.props.icon}></i>
				</figure>

				<h1 className="title"> {this.props.title} </h1>
				<p> {this.props.description} </p>
				<p className="list-title"> {this.props.subtitle} </p>
				<p> {this.props.content} </p>
				<p className="list-title"> {this.props.tools} </p>
				<ul>
					{getList(this.props.items)}
				</ul>

			</div>
		);
	}
}


