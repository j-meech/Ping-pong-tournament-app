import { connect } from 'react-redux';
import { Generator } from '../components/Generator';
import { addPlayer } from '../data/actions';

const mapStateToProps = state => {
    return {
        players: state.get('players'),
    };
};

const mapDispatchToProps = dispatch => {
    return {
    	 onSubmit: (data) => dispatch(addPlayer(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Generator);