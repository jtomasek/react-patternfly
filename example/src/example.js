var React = require('react');
var ReactDOM = require('react-dom');
var ReactPatternFly = require('react-patternfly');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactPatternFly />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
