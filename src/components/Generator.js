import React, { Component } from 'react';
import { AddPlayers } from './AddPlayers';
import { ListPlayers } from './ListPlayers';
import { TournamentViewer } from './TournamentViewer';
import { Button } from './Button';
import { List } from 'immutable';

export class Generator extends Component {
	constructor(props) {
    	super(props);
	    this.state = {
	    	// store whether the generate button has been clicked
			generated: false,
			// store pairs of winners for next rounds
			roundTwoPairs: List(),
			roundThreePairs: List(),
			// store name of winner
			theWinner: '',
    	};
		this.isGenerated = this.isGenerated.bind(this);
		this.newTournament = this.newTournament.bind(this);
		this.roundTwo = this.roundTwo.bind(this);
		this.roundThree = this.roundThree.bind(this);
		this.isTheWinner = this.isTheWinner.bind(this);
	}

	// called when generate button is clicked and update local state
	isGenerated() {
		this.setState({
			generated: !this.state.generated,
		});
		// call shuffle prop from container and create shuffled players list in the redux store
		this.props.shuffle();
	}

	// called when new tournament button is clicked
	newTournament() {
		// call onrefresh prop, clears the redux store ready to accept new players
		this.props.onRefresh();
		// reset local state ready for new tournament
		this.setState({
			generated: !this.state.generated,
			roundTwoPairs: List([]),
			roundThreePairs: List([]),
			theWinner: '',
		});
	}

	// filter the players depending on how many wins to get the players for the next round 
	filterPlayers(wins) {
		const { shuffledPlayers } = this.props;
		return shuffledPlayers.filter(player => (player.get('won') === wins));
	}
	
	// get the players for round two
	roundTwo() {
		// use the filterPlayers method
		const roundTwoPlayers = this.filterPlayers(1);
	    let roundTwoPairs = [];
	    // pair up the players
	    for (let i = 0; i < roundTwoPlayers.size; i +=2) {
			let pair = roundTwoPlayers.slice(i, i + 2);
			roundTwoPairs.push(pair);
		}
		// add pairs to state
		this.setState({
			roundTwoPairs: roundTwoPairs,
		});
	}
	
	// get the players for round two
	roundThree() {
		// use the filterPlayers method
		const roundThreePlayers = this.filterPlayers(2);
	    let roundThreePairs = [];
	    // pair up the players
	    for (let i = 0; i < roundThreePlayers.size; i +=2) {
			let pair = roundThreePlayers.slice(i, i + 2);
			roundThreePairs.push(pair);
		}
		// add pairs to state
		this.setState({
			roundThreePairs: roundThreePairs,
		});
	}

	// get the winner
	isTheWinner() {
		// use the filterPlayers method
		const winner = this.filterPlayers(3);
		// get the winner's name
		const theWinner = winner.get(0).get('name');
		// staore winner's name in state
		this.setState({
			theWinner: theWinner,
		});
	}
	
	// TO DO - pull out h2 Addplayers ListPlayers and Button into own component 
	render() {
	    const { players, shuffledPlayers, shuffledPlayerPairs, } = this.props;
	    // disable generate button if there are less then 8 players
	    const disabled = players.size < 8;
	    // style for generate button
	    const buttonClassName = disabled ? "btn btn-disabled generate" : "btn generate";
	    // decide whether to show addplayers or tournamentviewer with ternary dependent on whether generate button has been clicked
		return (					
			<div>
				{
				!this.state.generated ? 
				<div className="generator-container">
					<h2>Add players here</h2>
					<AddPlayers 
						onSubmit={ this.props.onSubmit } 
						players={ players }/>
					<ListPlayers 
						players={ players } 
						onDelete={ this.props.onDelete }/>
					<Button 
						className={ buttonClassName } 
						onClick={ this.isGenerated }  
						buttonName="Generate tournament!" 
						disabled={ disabled }/>
				</div>
				:
				<TournamentViewer 
					pairs={ shuffledPlayerPairs } 
					shuffledPlayers={ shuffledPlayers } 
					newTournament={ this.newTournament } 
					winner={ this.props.winner } 
					roundTwoPairs={ this.state.roundTwoPairs } 
					roundThreePairs={ this.state.roundThreePairs } 
					theWinner={ this.state.theWinner } 
					roundTwo={ this.roundTwo } 
					roundThree={ this.roundThree } 
					isTheWinner={ this.isTheWinner }/>
				}
			</div>
		);
	}
}
