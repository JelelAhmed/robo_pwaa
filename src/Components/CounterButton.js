import React from 'react';

class CounterButton extends React.PureComponent {

	constructor(props) {
		super();
		this.state = {
			count: 0
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.count !== nextState.count) {
			return true;
		} else {
			return false;
		}
	}

	updateCount = () => {
		console.log('clicked')
		this.setState(state => { 
			return {count: state.count + 1}
		});
	}

	render() {
		console.log('Counter Rendered')
		return (
			<button color={this.props.color} onClick={this.updateCount}>
				Count: {this.state.count}
			</button>
		)
	}
	
}

export default CounterButton;