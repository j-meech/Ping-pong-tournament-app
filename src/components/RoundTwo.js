import React, { Component } from 'react';
import { TournamentPair } from './TournamentPair';
import { Button } from './Button';

export class RoundTwo extends Component {
	constructor(props) {
	  super(props);	
	  this.state = {
	  	// store whether next round button has been clicked or not
	  	clicked: false,
	  };
	  this.clicked = this.clicked.bind(this);
	}

	// when next round button is clicked update local state
	clicked() {
		this.setState({clicked: true});	
		// call roundThree prop to set up next round
		this.props.roundThree();
	}

	render() {
		const { pairs, winner, shuffledPlayers } = this.props;
		// check to see how many matches have been played by finding number of winners
		// the winners would have won 2 matches by this round
		const numberOfWinners = shuffledPlayers.filter(player => (player.get('won') === 2)).size;
		// there should be 2 winners when all matches have been played
		// disabled button to move to next round until all matches have been played 
		// and once again once button has been clicked and have moved to next round
		const disabled = numberOfWinners === 2 && !this.state.clicked ? false : true;
		const buttonClassName = disabled ? "btn btn-disabled" : "btn";
		// display players as a list to place into the css grid for tournament display on large screens
		// use other list items to style and draw the tournament forks and place in grid to make responsive
		// would it be possible to make forks into own component?
		// could then have a reusable Round component rather than seperate components for each round?
		return (
			<div className="grid-container round-two">
				<ul className="tournament-grid round-two">
					{ pairs.map((pair, index) => 
						<li 
							key={ index } 
							className="tournament-pair">
							<TournamentPair 
								pair={ pair } 
								winner={ winner }/>
						</li>
					)}
					<li className="path-u one"></li>
					<li className="path-u two"></li>
					<li className="path-i one"></li>
					<li className="path-i two"></li>
					<li className="path-l one"></li>
					<li className="path-l two"></li>
					<li className="finish-round-btn">
						<Button 
							onClick={ this.clicked } 
							className={ buttonClassName } 
							buttonName="Next round" 
							disabled={ disabled }/> 
					</li>
				</ul>
			</div>
		);
	}
}
