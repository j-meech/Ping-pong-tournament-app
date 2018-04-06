import React, { Component } from 'react';
import { TournamentPair } from './TournamentPair';
import { Button } from './Button';

export class RoundOne extends Component {
	
	render() {
		const { pairs, winner, roundTwo, shuffledPlayers } = this.props;
		const numberOfRoundsWon = 
		const disabled = 

		return (
			<div className="grid-container">
				<ul className="tournament-grid">
					{ pairs.map((pair, index) => 
						<li key={ index } className="tournament-pair">
							<TournamentPair pair={ pair } winner={ winner }/>
						</li>
					)}
					<li className="path-u one"></li>
					<li className="path-u two"></li>
					<li className="path-u three"></li>
					<li className="path-u four"></li>
					<li className="path-i one"></li>
					<li className="path-i two"></li>
					<li className="path-i three"></li>
					<li className="path-i four"></li>
					<li className="path-l one"></li>
					<li className="path-l two"></li>
					<li className="path-l three"></li>
					<li className="path-l four"></li>
					<li className="finish-round-btn">
						<Button onClick={ roundTwo } className="btn" buttonName="Next round" disabled={  }/> 
					</li>
				</ul>

			</div>
		);
	}
}
