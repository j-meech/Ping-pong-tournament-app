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

export const refresh = name => {
	return {
		type: 'refresh',
	}
}