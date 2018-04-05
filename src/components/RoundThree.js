import React, { Component } from 'react';
import { TournamentPair } from './TournamentPair';
import { Button } from './Button';

export class RoundThree extends Component {
	
	render() {
		const { pairs, winner, isTheWinner } = this.props;
		return (
			<div className="grid-container round-three">
				<ul className="tournament-grid round-three">
					{ pairs.map((pair, index) => 
						<li key={ index } className="tournament-pair">
							<TournamentPair pair={ pair } winner={ winner }/>
						</li>
					)}
					<li className="path-u one"></li>
					<li className="path-i one"></li>
					<li className="path-l one"></li>
					<li className="finish-round-btn">
						<Button onClick={ isTheWinner } className="btn" buttonName="Next round" /> 
					</li>
				</ul>
			</div>
		);
	}
}
