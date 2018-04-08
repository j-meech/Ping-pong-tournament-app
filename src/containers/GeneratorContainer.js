import { connect } from 'react-redux';
import { Generator } from '../components/Generator';
import { addPlayer, deletePlayer, refreshTournament, shufflePlayers, winner } from '../data/actions';

// pass data from the store down to components as props
const mapStateToProps = state => {
    return {
        // get the players list from the store
        players: state.get('players'),
        //  get the shuffled players list from the store
        shuffledPlayers: state.get('shuffledPlayers'),
        // get the pairs for the first round from the store
        shuffledPlayerPairs: state.get('shuffledPlayerPairs'),
    };
};

// pass methods down to components as props
// call methods to dispatch actions to change store via the reducer
const mapDispatchToProps = dispatch => {
    return {
        // on submitting a list of players for a tournament call the addPlayer action
        onSubmit: (data) => dispatch(addPlayer(data)),
        // if a payer is deleted from the list call the delete player action
        onDelete: (player) => dispatch(deletePlayer(player)),
        // when user wants a new tournament call the refreshTournament action
        onRefresh: () => dispatch(refreshTournament()),
        // on generating a new tournament call the shuffle players action
        shuffle: () => dispatch(shufflePlayers()),
        // when a player wins a game call the winner action
        winner: (player) => dispatch(winner(player)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);