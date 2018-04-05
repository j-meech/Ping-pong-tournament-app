import React, { Component } from 'react';
import { TournamentPlayer } from './TournamentPlayer';

export class RoundOne extends Component {
	
	render() {
		const { players } = this.props;
		return (
			<div className="grid-container">
				<ul className="tournament-grid">
					{ players.map((player, index) => 
						<li key={ index } className="tournament-player">
							<TournamentPlayer player={ player } />
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
				</ul>
			</div>
		);
	}
}
