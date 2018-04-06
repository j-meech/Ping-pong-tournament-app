import React, { Component } from 'react';
import { TournamentPair } from './TournamentPair';
import { Button } from './Button';

export class RoundTwo extends Component {
	constructor(props) {
	  super(props);	
	  this.state = {
	  	clicked: false,
	  };
	  this.clicked = this.clicked.bind(this);
	}

	clicked() {
		this.setState({clicked: true});	
		this.props.roundThree();
	}

	render() {
		const { pairs, winner, shuffledPlayers } = this.props;
		const numberOfWinners = shuffledPlayers.filter(player => (player.get('won') === 2)).size;
		const disabled = numberOfWinners === 2 && !this.state.clicked ? false : true;
		const buttonClassName = disabled ? "btn btn-disabled" : "btn";

		return (
			<div className="grid-container round-two">
				<ul className="tournament-grid round-two">
					{ pairs.map((pair, index) => 
						<li key={ index } className="tournament-pair">
							<TournamentPair pair={ pair } winner={ winner }/>
						</li>
					)}
					<li className="path-u one"></li>
					<li className="path-u two"></li>
					<li className="path-i one"></li>
					<li className="path-i two"></li>
					<li className="path-l one"></li>
					<li className="path-l two"></li>
					<li className="finish-round-btn">
						<Button onClick={ this.clicked } className={ buttonClassName } buttonName="Next round" disabled={ disabled }/> 
					</li>
				</ul>
			</div>
		);
	}
}
