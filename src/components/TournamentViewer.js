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
					<RoundOne players={this.props.players}/>
					<RoundTwo />
					<RoundThree />
					<Winner />
				</div>
				<div className="new-tournament-btn">
					<Button className="btn" buttonName="New Tournament" onClick={this.onClick}/>
				</div>
			</div>
		);
	}
}
