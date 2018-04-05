import React, { Component } from 'react';
import { Button } from './Button';

export class TournamentPair extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false,
		}
		this.winner0 = this.winner0.bind(this);
		this.winner1 = this.winner1.bind(this);
	}

	winner0() {
		const player = this.props.pair.get(0).get('name')
		this.props.winner(player);
		this.setState({ disabled: true });
	}

	winner1() {
		const player = this.props.pair.get(1).get('name')
		this.props.winner(player);
		this.setState({ disabled: true });
	}
	
	render() {
		const { pair } = this.props;
		const { disabled } = this.state;
		return (										
			<div className="pair-container">
				<Button buttonName={ pair.get(0).get('name') } onClick={ this.winner0 } disabled={ disabled }/>
				<Button buttonName={ pair.get(1).get('name') } onClick={ this.winner1 } disabled={ disabled }/>
			</div>
		);
	}
}
