// initial state, using immutable to store players list, shuffled players list and paired players list

import { Map, List } from "immutable";

const initial = Map({
	players: List(),
	shuffledPlayers: List(),
	shuffledPlayerPairs: List(),	
});

export default initial;