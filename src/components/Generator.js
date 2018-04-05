import React, { Component } from 'react';
import { AddPlayers } from './AddPlayers';
import { ListPlayers } from './ListPlayers';
import { TournamentViewer } from './TournamentViewer';
import { Button } from './Button';

export class Generator extends Component {
	constructor(props) {
    	super(props);
	    this.state = {
			generated: false,
    	};
		this.isGenerated = this.isGenerated.bind(this);
		this.newTournament = this.newTournament.bind(this);
	}

	isGenerated() {
		this.setState({
			generated: !this.state.generated,
		});
		this.props.shuffle();
	}

	newTournament() {
		this.props.onRefresh();
		this.setState({
			generated: !this.state.generated,
		});
	}

	
	render() {
	    const { players, shuffledPlayers } = this.props;
	    const disabled = players.size < 8;
	    const buttonClassName = disabled ? "btn btn-disabled" : "btn";
		return (
			<div>
				{
					!this.state.generated ? 
					<div className="generator-container">
						<h2>Add players here</h2>
						<AddPlayers onSubmit={this.props.onSubmit} disabled={!disabled} players={ players }/>
						<ListPlayers players={ players } onDelete={ this.props.onDelete }/>
						<Button className={buttonClassName} onClick={this.isGenerated} buttonName="Generate tournament!" disabled={ disabled }/>
					</div>
					:
					<TournamentViewer players={ shuffledPlayers } newTournament={this.newTournament}/>
				}
			</div>
		);
	}
}
