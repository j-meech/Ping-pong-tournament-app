import React from 'react';
import { ListItem } from './ListItem';

export const ListPlayers = ({ players, onDelete }) => { 
    return (
        <div className="list-container">
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