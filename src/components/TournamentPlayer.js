import React, { Component } from 'react';
import { Button } from './Button';

export class TournamentPlayer extends Component {
	
	render() {
		const { buttonName, onClick, disabled, winner } = this.props;
		// styling for player depending on whether the match has been played and who won one it has
		// player is a button component so can be clicked to decide the winner of each match
		let className = "btn tournament-player";
		if (disabled) {
			className += " disabled";
		}
		if (winner) {
			className += " winner";
		}
		
		return (										
				<Button 
					buttonName={ buttonName } 
					onClick={ onClick } 
					disabled={ disabled } 
					className={ className }/>		
		);
	}
}
