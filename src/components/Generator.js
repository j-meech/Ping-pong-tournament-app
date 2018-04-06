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
			generated: false,
			roundTwoPairs: List(),
			roundThreePairs: List(),
			theWinner: '',
    	};
		this.isGenerated = this.isGenerated.bind(this);
		this.newTournament = this.newTournament.bind(this);
		this.roundTwo = this.roundTwo.bind(this);
		this.roundThree = this.roundThree.bind(this);
		this.isTheWinner = this.isTheWinner.bind(this);
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
			roundTwoPairs: List([]),
			roundThreePairs: List([]),
		});
	}

	roundTwo() {
		const { shuffledPlayers } = this.props;
		const roundTwoPlayers = shuffledPlayers.filter(player => (player.get('won') === 1));
	    let roundTwoPairs = [];
	    for (let i = 0; i < roundTwoPlayers.size; i +=2) {
			let pair = roundTwoPlayers.slice(i, i + 2);
			roundTwoPairs.push(pair);
		}
		this.setState({
			roundTwoPairs: roundTwoPairs,
		});
	}

	roundThree() {
		const { shuffledPlayers } = this.props;
		const roundThreePlayers = shuffledPlayers.filter(player => (player.get('won') === 2));
	    let roundThreePairs = [];
	    for (let i = 0; i < roundThreePlayers.size; i +=2) {
			let pair = roundThreePlayers.slice(i, i + 2);
			roundThreePairs.push(pair);
		}
		this.setState({
			roundThreePairs: roundThreePairs,
		});
	}

	isTheWinner() {
		const { shuffledPlayers } = this.props;
		const winner = shuffledPlayers.filter(player => (player.get('won') === 3));
		const theWinner = winner.get(0).get('name');
		this.setState({
			theWinner: theWinner,
		});
	}
	
	render() {
	    const { players, shuffledPlayers, shuffledPlayerPairs, } = this.props;
	    const disabled = players.size < 8;
	    const buttonClassName = disabled ? "btn btn-disabled" : "btn";

		return (
			<div>
				{
					!this.state.generated ? 
					<div className="generator-container">
						<h2>Add players here</h2>
						<AddPlayers onSubmit={this.props.onSubmit} players={ players }/>
						<ListPlayers players={ players } onDelete={ this.props.onDelete }/>
						<Button className={buttonClassName} onClick={this.isGenerated} buttonName="Generate tournament!" disabled={ disabled }/>
					</div>
					:
					<TournamentViewer pairs={ shuffledPlayerPairs } shuffledPlayers={ shuffledPlayers } newTournament={this.newTournament} winner={this.props.winner} roundTwoPairs={ this.state.roundTwoPairs } roundThreePairs={ this.state.roundThreePairs } theWinner={this.state.theWinner} roundTwo={this.roundTwo} roundThree={this.roundThree} isTheWinner={this.isTheWinner}/>
				}
			</div>
		);
	}
}
