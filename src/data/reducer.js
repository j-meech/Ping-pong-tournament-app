import { Map } from "immutable";


const createPlayer = (player) => {
	return Map({
			name: player,
			won: 0,
		})
}

const addPlayer = (state, { player }) => state.update("players", players => (
	players.push(createPlayer(player))
));

const deletePlayer = (state, { name }) => state.update("players", players => (
	players.filter(player => (player.get("name") !== name)
)));

const shufflePlayers = (state) => {
	const shuffledPlayers = state.get("players").sortBy(Math.random);
	return state.set("shuffledPlayers", shuffledPlayers);
}

const pairs = (state) => {
	const shuffledPlayers = state.get("shuffledPlayers");
	let pairs = [];
	for (let i = 0; i < shuffledPlayers.size; i +=2) {
		let pair = shuffledPlayers.slice(i, i + 2);
		pairs.push(pair);
	}
	return state.set("shuffledPlayerPairs", pairs);
}

const refreshTournament = (state) => state.update("players", players => (
	players.clear()));

const winner = (state, { name }) => state.update("shuffledPlayers", shuffledPlayers => (
	shuffledPlayers.map(p => (p.get("name") === name) ?
		p.update("won", won => won + 1) : p ))
);


const reducer = (state, action) => {
	switch (action.type) {
		case "addPlayer": return addPlayer(state, action);
		case "deletePlayer": return deletePlayer(state, action);
		case "shufflePlayers": return pairs(shufflePlayers(state, action));
		case "refreshTournament": return refreshTournament(state, action);
		case "winner": return winner(state, action);
		default: return state;
	}
};

export default reducer;