import React, { Component } from 'react';
import { ListItem } from './ListItem';

export class ListPlayers extends Component {

	render() {
		const { players, onDelete } = this.props;
		return (
			<div>
				{ players.count() ?
					<ul>
						{ players.map((player, index) => (
							<ListItem key={ index } player={ player } onDelete={ onDelete }/>)
						)}
					</ul>
					:
					<p>No players yet</p>
				}
			</div>
		);
	}
}
