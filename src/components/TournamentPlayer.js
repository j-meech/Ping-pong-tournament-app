import React, { Component } from 'react';
import { Button } from './Button';

export class TournamentPlayer extends Component {
	
	render() {
		const { buttonName, onClick, disabled, winner } = this.props;
		let className = "tournament-player";
		if (disabled) {
			className += " disabled";
		}
		if (winner) {
			className += " winner";
		}
		
		return (										
				<Button buttonName={ buttonName } onClick={ onClick } disabled={ disabled } className={ className }/>
				
		);
	}
}
