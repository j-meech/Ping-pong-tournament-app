import React, { Component } from 'react';
import './TournamentViewer.css';

export class TournamentViewer extends Component {
	render() {
		const { players } = this.props;
		const shuffledPlayers = players.sortBy(Math.random);
		return (
			<div className="grid-container">
				<ul className="tournament-grid">
					{ shuffledPlayers.map((player, index) => 
						<li key={index} className="tournament-player">
							{player}
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
