import React, { Component } from 'react';
import { Button } from './Button';

export class ListItem extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete() {
		const name = this.props.player.get('name');
		this.props.onDelete(name);
	}
	
	render() {
		const { player } = this.props;
		return (			
			<li>
				<div className="player-list-item">
					{ player.get('name') }	
					<Button buttonName="&#x2715;" className=" btn delete-btn" onClick={ this.delete }/>
				</div>			
			</li>
		);
	}
}

