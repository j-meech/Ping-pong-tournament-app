export const addPlayer = player => {
	return {
		type: 'addPlayer',
		player: player,		
	}
}

export const deletePlayer = name => {
	return {
		type: 'deletePlayer',
		name: name,
	}
}

export const shufflePlayers = () => {
	return {
		type: 'shufflePlayers',
	}
}

export const refreshTournament = name => {
	return {
		type: 'refreshTournament',
	}
}

export const winner = player => {
	return {
		type: 'winner',
		name: player,
	}
}
