var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

var Main = React.createClass({
	getInitialState: function() {
		return {title: "Skeleton Code"}
	},
	render: function() {
		return (
			<div className="container">
				<h1 className="title">{this.state.title}</h1>
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('content'));