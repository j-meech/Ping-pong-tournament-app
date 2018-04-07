import React, { Component } from 'react';
import { Button } from './Button';

export class Winner extends Component {
	
	render() {
		const { theWinner } = this.props;
		const winner = "🏆 " + theWinner + "! 🎉";
		return (
			<div className="grid-container winner">
				<ul className="tournament-grid winner pait-container">
					<li className="the-winner">{ theWinner ? winner : null }</li>	
					<li className="finish-round-btn">
						<Button className="hidden" buttonName="Next round" disabled="true"/> 
					</li>			
				</ul>
			</div>
		);
	}
}
