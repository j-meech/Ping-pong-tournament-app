import React, { Component } from 'react';
import { Button } from './Button';


export class TournamentPlayer extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const { player } = this.props;
		return (						
				<div>
					{ player.get('name') }	
					<Button buttonName="&#x2715;" className="delete-btn" onClick={ this.delete }/>
				</div>			
		);
	}
}

