const addPlayer = (state, { player }) => state.update("players", players => (
	players.push(player)
));


const reducer = (state, action) => {
	switch (action.type) {
		case "addPlayer": return addPlayer(state, action);
		default: return state;
	}
};

export default reducer;