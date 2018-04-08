import React, { Component } from 'react';
import { Button } from './Button';

export class Winner extends Component {
	
	render() {
		const { theWinner } = this.props;
		const winner = "🏆 " + theWinner + "! 🎉";
		// use ternary to decide if there is winner yet or not and to dispay the winner's name
		// there is a hidden button for constency in styling because of the use of css grid
		// TO DO - find a better way of dealing with this
		return (
			<div className="grid-container winner">
				<ul className="tournament-grid winner pait-container">
					<li className="the-winner">{ theWinner ? winner : null }</li>	
					<li className="finish-round-btn">
						<Button 
							className="hidden" 
							buttonName="Next round" 
							disabled="true"/> 
					</li>			
				</ul>
			</div>
		);
	}
}
