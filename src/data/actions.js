// actions to send to the reducer from container

// take the players name as data and pass to the reducer to add a new player to players list
export const addPlayer = player => {
	return {
		type: 'addPlayer',
		player: player,		
	}
}

// delete a player from the players list, send players name as data to determine who to delete
// all names are unique
export const deletePlayer = player => {
	return {
		type: 'deletePlayer',
		name: player,
	}
}

// call to shuffle players no data needed
export const shufflePlayers = () => {
	return {
		type: 'shufflePlayers',
	}
}

// call to refresh store, no data needed
export const refreshTournament = name => {
	return {
		type: 'refreshTournament',
	}
}

// tell the reducer and store that a player has won a match, use player as data to identify who to update
export const winner = player => {
	return {
		type: 'winner',
		name: player,
	}
}
