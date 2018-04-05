import { Map, List } from "immutable";


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

// var groups = [];

// for(var i = 0; i < arr.length; i += 2)
// {
//     groups.push(arr.slice(i, i + 2));
// }

const shufflePlayers = (state) => {
	const shuffledPlayers = state.get("players").sortBy(Math.random);
	let pairs = List([]);

	for (let i = 0; i < shuffledPlayers; i +=2) {
		pairs.push(shuffledPlayers.slice(i, i + 2));
	}
	return state.set("shuffledPlayerPairs", pairs);
}

const refreshTournament = (state) => state.update("players", players => (
	players.clear()));


const reducer = (state, action) => {
	switch (action.type) {
		case "addPlayer": return addPlayer(state, action);
		case "deletePlayer": return deletePlayer(state, action);
		case "shufflePlayers": return shufflePlayers(state, action);
		case "refreshTournament": return refreshTournament(state, action);
		default: return state;
	}
};

export default reducer;