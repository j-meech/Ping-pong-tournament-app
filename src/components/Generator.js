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
			generated: true,
		});
	}

	render() {
	    const { players } = this.props;
	    const disabled = players.size < 4;

		return (
			<div>
				{
					this.state.generated ? 
					<TournamentViewer players={ players }/>
					:
					<div>
						<h2>Add players here</h2>
						<AddPlayers onSubmit={this.props.onSubmit} disabled={!disabled}/>
						<ListPlayers players={ players }/>
						<Button className="btn" onClick={this.isGenerated} buttonName="Generate!" disabled={ disabled }/>
					</div>
				}
			</div>
		);
	}
}
