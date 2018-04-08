import React, { Component } from 'react';
import { TournamentPlayer } from './TournamentPlayer';

// component for each match, takes pair of players so can determine who won from that match 
export class TournamentPair extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// state to be used to determine whether the match has been played and therefore
			// can disable the player buttons
			disabled: false,
			// depending on who one the stying will be different stor winner here
			// if player 0 won then true, if player 1 one then false
			winner0: false
		}
		this.winner0 = this.winner0.bind(this);
		this.winner1 = this.winner1.bind(this);
	}

	// if player 0 is clicked then they won the match
	winner0() {
		// get the players name to use as id
		const player = this.props.pair.get(0).get('name');
		// call winner method in container to in turn update that player object in store
		// and add 1 to their won key
		this.props.winner(player);
		// update local state to diasable player buttons and style winner
		this.setState({ 
			disabled: true,
			winner0: true, 
		});
	}

	// if player 1 is clicked then they won the match
	winner1() {
		// get the players name to use as id
		const player = this.props.pair.get(1).get('name');
		// call winner method in container to in turn update that player object in store
		// and add 1 to their won key
		this.props.winner(player);
		// update local state to diasable player buttons and style winner
		this.setState({ 
			disabled: true,
			winner0: false, 
		});
	}
	
	// use tournament player component for each player
	// use two components rather than map through the pair list so can asign winner to only one
	render() {
		const { pair } = this.props;
		const { disabled, winner0 } = this.state;
		return (										
			<div className="pair-container">
				<TournamentPlayer 
					buttonName={ pair.get(0).get('name') } 
					onClick={ this.winner0 } 
					disabled={ disabled } 
					winner={ winner0 }/>
				<TournamentPlayer 
					buttonName={ pair.get(1).get('name') } 
					onClick={ this.winner1 } 
					disabled={ disabled } 
					winner={ !winner0 }/>
			</div>
		);
	}
}
