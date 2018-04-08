import React, { Component } from 'react';
import { Button } from './Button';

export class ListItem extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	// remove a player from the players list before players have been submitted
	// use players name as an id as all names must be unique
	// call onDelete prop from container to remove from store
	delete() {
		const player = this.props.player.get('name');
		this.props.onDelete(player);
	}
	
	// each player to be enetered into tournament to be displayed as list 
	// and have the option of being removed before starting tournament with delete button
	render() {
		const { player } = this.props;
		return (			
			<li>
				<div 
					className="player-list-item">
					{ player.get('name') }	
					<Button 
						buttonName="&#x2715;" 
						className=" btn delete-btn" 
						onClick={ this.delete }/>
				</div>			
			</li>
		);
	}
}

