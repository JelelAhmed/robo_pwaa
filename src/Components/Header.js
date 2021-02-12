import React from 'react';
import CounterButton from './CounterButton';

class Header extends React.Component {

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return true;
	// }

	render() {
		console.log('Header')
		return (
			<div>
				<h1>Robofriends</h1>
				<CounterButton color={"red"}/>
			</div>
			
		);
	}
	
}

export default Header;