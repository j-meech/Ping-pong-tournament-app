import React, { Component } from 'react';
import { TournamentPair } from './TournamentPair';
import { Button } from './Button';

export class RoundTwo extends Component {
	
	render() {
		const { pairs, winner, roundThree } = this.props;
		return (
			<div className="grid-container round-two">
				<ul className="tournament-grid round-two">
					{ pairs.map((pair, index) => 
						<li key={ index } className="tournament-pair">
							<TournamentPair pair={ pair } winner={ winner }/>
						</li>
					)}
					<li className="path-u one"></li>
					<li className="path-u two"></li>
					<li className="path-i one"></li>
					<li className="path-i two"></li>
					<li className="path-l one"></li>
					<li className="path-l two"></li>
					<li className="finish-round-btn">
						<Button onClick={ roundThree } className="btn" buttonName="Next round" /> 
					</li>
				</ul>
			</div>
		);
	}
}
