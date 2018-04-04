const createPlayer = (player) => {
	return {
		name: player,
		won: false,
	}
}

const addPlayer = (state, { player }) => state.update("players", players => (
	players.push(createPlayer(player))
));


const reducer = (state, action) => {
	switch (action.type) {
		case "addPlayer": return addPlayer(state, action);
		default: return state;
	}
};

export default reducer;