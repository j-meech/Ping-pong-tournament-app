import React, { Component } from 'react';

export class TournamentViewer extends Component {
	render() {
		const { players } = this.props;
		const shuffledPlayers = players.sortBy(Math.random);
		return (

			<ul className="tournament-grid">
				{ shuffledPlayers.map((player, index) => 
					<li key={index}>
						{player}
					</li>
				)}
			</ul>
		);
	}
}
