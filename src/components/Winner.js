import React, { Component } from 'react';
import { Button } from './Button';

export class Winner extends Component {
	
	render() {
		const { theWinner } = this.props;
		return (
			<div className="grid-container winner">
				<ul className="tournament-grid winner">
					<li className="the-winner">{ theWinner }</li>
					
				</ul>
			</div>
		);
	}
}
// <li className="finish-round-btn winner">
// 						<Button className="btn" buttonName="Winner!" /> 
// 					</li>