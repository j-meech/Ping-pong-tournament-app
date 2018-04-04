import { Map } from "immutable";


const createPlayer = (player) => {
	return Map({
			name: player,
			won: false,
		})
}

const addPlayer = (state, { player }) => state.update("players", players => (
	players.push(createPlayer(player))
));

const deletePlayer = (state, { name }) => state.update("players", players => (
	players.filter(player => (player.get("name") !== name)
)));

const refresh = (state) => state.update("players", players => (
	players.clear()));


const reducer = (state, action) => {
	switch (action.type) {
		case "addPlayer": return addPlayer(state, action);
		case "deletePlayer": return deletePlayer(state, action);
		case "refresh": return refresh(state, action);
		default: return state;
	}
};

export default reducer;