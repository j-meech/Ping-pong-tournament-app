import React, { Component } from 'react';
import { Button } from './Button';
import { RoundOne } from './RoundOne';
import { RoundTwo } from './RoundTwo';
import { RoundThree } from './RoundThree';
import { Winner } from './Winner';

// displays the matches for the tournament
// uses css grid for larger screens and forks between matches
export class TournamentViewer extends Component {
	constructor(props) {
	  super(props);
	  this.onClick = this.onClick.bind(this);
	}

	// onClick method for a new tournament
	// when new tournament button is clicked calls newTournament prop from container
	// refreshes the store and shows the generator for a new tournament
	onClick() {
		this.props.newTournament();
	}

	render() {
		// tournament is split into rounds
		// is it possible to have a reusable component for round? TO DO
		return (
			<div>
				<div className="tournament-viewer-container">
					<p className="info-text">Click to select the winner of each game before moving to the next round.</p>
					<RoundOne 
						pairs={ this.props.pairs } 
						shuffledPlayers={ this.props.shuffledPlayers } 
						winner={ this.props.winner } 
						roundTwo={ this.props.roundTwo }/>
					<RoundTwo 
						pairs={ this.props.roundTwoPairs } 
						shuffledPlayers={ this.props.shuffledPlayers } 
						winner={ this.props.winner } 
						roundThree={ this.props.roundThree }/>
					<RoundThree 
						pairs={ this.props.roundThreePairs } 
						shuffledPlayers={ this.props.shuffledPlayers } 
						winner={ this.props.winner } 
						isTheWinner={ this.props.isTheWinner }/>
					<Winner 
						theWinner={ this.props.theWinner }/>
				</div>
				<div className="new-tournament-btn">
					<Button 
						className="btn new-tournament" 
						buttonName="New Tournament" 
						onClick={ this.onClick }/>
				</div>
			</div>
		);
	}
}
