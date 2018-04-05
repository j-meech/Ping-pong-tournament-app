import { connect } from 'react-redux';
import { Generator } from '../components/Generator';
import { addPlayer, deletePlayer, refreshTournament, shufflePlayers } from '../data/actions';

const mapStateToProps = state => {
    return {
        players: state.get('players'),
        shuffledPlayers: state.get('shuffledPlayers'),
    };
};

const mapDispatchToProps = dispatch => {
    return {
    	 onSubmit: (data) => dispatch(addPlayer(data)),
    	 onDelete: (id) => dispatch(deletePlayer(id)),
    	 onRefresh: () => dispatch(refreshTournament()),
    	 shuffle: () => dispatch(shufflePlayers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);