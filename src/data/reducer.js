//  use the reducer to update the store/initial state

import { Map } from "immutable";

//  create a player object/immutable Map, store name and number of wins, called by add player
const createPlayer = (player) => {
	return Map({
			name: player,
			won: 0,
		})
}

// add a new player object to the players List
const addPlayer = (state, { player }) => state.update("players", players => (
	players.push(createPlayer(player))
));

// delete a player from the players List
const deletePlayer = (state, { name }) => state.update("players", players => (
	players.filter(player => (player.get("name") !== name)
)));

// shuffle the players List and creates a new List, sets shuffledPlayers List in initial state 
const shufflePlayers = (state) => {
	const shuffledPlayers = state.get("players").sortBy(Math.random);
	return state.set("shuffledPlayers", shuffledPlayers);
}

// take the shuffledPlayers List and pair players up, 
const pairs = (state) => {
	const shuffledPlayers = state.get("shuffledPlayers");
	let pairs = [];
	// push each pair array into pairs array
	for (let i = 0; i < shuffledPlayers.size; i +=2) {
		let pair = shuffledPlayers.slice(i, i + 2);
		pairs.push(pair);
	}
	// set shuffledPlayerPairs in initial state
	return state.set("shuffledPlayerPairs", pairs);
}

// clear the state when new tournament button is clicked
// player List will be empty 
// when shuffle players and pairs is called their Lists will be set with new players, no need to clear them on refreshh
const refreshTournament = (state) => state.update("players", players => (
	players.clear()));

// when a player wins a match add 1 to their won key, can dertime how many matches won and whether to advance to next round
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