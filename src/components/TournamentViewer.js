import React, { Component } from 'react';
import { Button } from './Button';
import { RoundOne } from './RoundOne';
import { RoundTwo } from './RoundTwo';
import { RoundThree } from './RoundThree';
import { Winner } from './Winner';

export class TournamentViewer extends Component {
	constructor(props) {
	  super(props);
	  this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.newTournament();
	}

	render() {

		return (
			<div>
				<div className="tournament-viewer-container">
					<RoundOne pairs={this.props.pairs} winner={this.props.winner} roundTwo={this.props.roundTwo}/>
					<RoundTwo pairs={this.props.roundTwoPairs} winner={this.props.winner} roundThree={this.props.roundThree}/>
					<RoundThree pairs={this.props.roundThreePairs} winner={this.props.winner} isTheWinner={this.props.isTheWinner}/>
					<Winner theWinner={this.props.theWinner}/>
				</div>
				<div className="new-tournament-btn">
					<Button className="btn" buttonName="New Tournament" onClick={this.onClick}/>
				</div>
			</div>
		);
	}
}
