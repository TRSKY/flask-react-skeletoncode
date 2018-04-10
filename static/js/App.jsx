import React from "react";

export default class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {title: "Skeleton Code"};
  	}

	render () {
		return (
			<div className="container">
				<h1 className="title">{this.state.title}</h1>
			</div>
		)
	}
}