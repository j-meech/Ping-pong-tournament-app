import React, { Component } from 'react';
import { AddPlayers } from '../components/AddPlayers';
import { ListPlayers } from '../components/ListPlayers';
import { TournamentViewer } from './TournamentViewer';
import { Button } from './Button';

export class Generator extends Component {
	constructor(props) {
    	super(props);
	    this.state = {
			generated: false,
    	};
		this.isGenerated = this.isGenerated.bind(this);
	}

	isGenerated() {
		this.setState({
			generated: !this.state.generated,
		});
		// reset generator
	}

	render() {
	    const { players } = this.props;
	    const disabled = players.size < 8;
	    const buttonClassName = disabled ? "btn btn-disabled" : "btn";

		return (
			<div>
				{
					!this.state.generated ? 
					<div>
						<h2>Add players here</h2>
						<AddPlayers onSubmit={this.props.onSubmit} disabled={!disabled}/>
						<ListPlayers players={ players }/>
						<Button className={buttonClassName} onClick={this.isGenerated} buttonName="Generate!" disabled={ disabled }/>
					</div>
					:
					<TournamentViewer players={ players } newTournament={this.isGenerated}/>
				}
			</div>
		);
	}
}
