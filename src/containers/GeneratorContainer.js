import { connect } from 'react-redux';
import { Generator } from '../components/Generator';
import { addPlayer, deletePlayer, refresh } from '../data/actions';

const mapStateToProps = state => {
    return {
        players: state.get('players'),
    };
};

const mapDispatchToProps = dispatch => {
    return {
    	 onSubmit: (data) => dispatch(addPlayer(data)),
    	 onDelete: (id) => dispatch(deletePlayer(id)),
    	 onRefresh: () => dispatch(refresh()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);