import { connect } from 'react-redux';
import { Generator } from '../components/Generator';
import { addPlayer, deletePlayer, refreshTournament, shufflePlayers, winner } from '../data/actions';

const mapStateToProps = state => {
    return {
        players: state.get('players'),
        shuffledPlayers: state.get('shuffledPlayers'),
        shuffledPlayerPairs: state.get('shuffledPlayerPairs'),
    };
};

const mapDispatchToProps = dispatch => {
    return {
    	 onSubmit: (data) => dispatch(addPlayer(data)),
    	 onDelete: (id) => dispatch(deletePlayer(id)),
    	 onRefresh: () => dispatch(refreshTournament()),
    	 shuffle: () => dispatch(shufflePlayers()),
         winner: (player) => dispatch(winner(player)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);