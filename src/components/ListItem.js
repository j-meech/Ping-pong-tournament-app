import React, { Component } from 'react';
//import Button from './Button';
//import Input from './Input';

export class ListItem extends Component {
	
	render() {
		const { player } = this.props;
		return (			
			<li>
				{ player }				
			</li>
		);
	}
}

