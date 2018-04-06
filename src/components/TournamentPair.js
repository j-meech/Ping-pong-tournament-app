import React, { Component } from 'react';
import { TournamentPlayer } from './TournamentPlayer';

export class TournamentPair extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false,
			winner0: false
		}
		this.winner0 = this.winner0.bind(this);
		this.winner1 = this.winner1.bind(this);
	}

	winner0() {
		const player = this.props.pair.get(0).get('name')
		this.props.winner(player);
		this.setState({ 
			disabled: true,
			winner0: true, 
		});
	}

	winner1() {
		const player = this.props.pair.get(1).get('name')
		this.props.winner(player);
		this.setState({ 
			disabled: true,
			winner0: false, 
		});
	}
	
	render() {
		const { pair } = this.props;
		const { disabled, winner0 } = this.state;
		return (										
			<div className="pair-container">
				<TournamentPlayer buttonName={ pair.get(0).get('name') } onClick={ this.winner0 } disabled={ disabled } winner={ winner0 }/>
				<TournamentPlayer buttonName={ pair.get(1).get('name') } onClick={ this.winner1 } disabled={ disabled } winner={ !winner0 }/>
			</div>
		);
	}
}
