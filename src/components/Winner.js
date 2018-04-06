import React, { Component } from 'react';
import { Button } from './Button';

export class Winner extends Component {
	
	render() {
		const { theWinner } = this.props;
		const winner = "🏆 " + theWinner + "! 🎉";
		return (
			<div className="grid-container winner">
				<ul className="tournament-grid winner">
					<li className="the-winner">{ theWinner ? winner : null }</li>	
					<li className="finish-round-btn">
						<Button className="hidden" buttonName="Next round"/> 
					</li>			
				</ul>
			</div>
		);
	}
}
