import React, { Component } from 'react';
import { TournamentPair } from './TournamentPair';
import { Button } from './Button';

export class RoundOne extends Component {
	constructor(props) {
	  super(props);	
	  this.state = {
	  	clicked: false,
	  };
	  this.clicked = this.clicked.bind(this);
	}

	clicked() {
		this.setState({clicked: true});	
		this.props.roundTwo();
	}

	render() {
		const { pairs, winner, roundTwo, shuffledPlayers } = this.props;
		const numberOfWinners = shuffledPlayers.filter(player => (player.get('won') === 1)).size;
		const disabled = numberOfWinners === 4 && !this.state.clicked ? false : true;
		const buttonClassName = disabled ? "btn btn-disabled" : "btn";

		return (
			<div className="grid-container">
				<ul className="tournament-grid">
					{ pairs.map((pair, index) => 
						<li key={ index } className="tournament-pair">
							<TournamentPair pair={ pair } winner={ winner }/>
						</li>
					)}
					<li className="path-u one"></li>
					<li className="path-u two"></li>
					<li className="path-u three"></li>
					<li className="path-u four"></li>
					<li className="path-i one"></li>
					<li className="path-i two"></li>
					<li className="path-i three"></li>
					<li className="path-i four"></li>
					<li className="path-l one"></li>
					<li className="path-l two"></li>
					<li className="path-l three"></li>
					<li className="path-l four"></li>
					<li className="finish-round-btn">
						<Button onClick={ this.clicked } className={ buttonClassName } buttonName="Next round" disabled={ disabled }/> 
					</li>
				</ul>

			</div>
		);
	}
}
