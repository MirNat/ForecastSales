import { connect } from 'react-redux';
import App from '../components/app/app';
import { increment, asyncPiy } from '../actions/increment-actions';

const mapStateToProps = (state) => {
    return {
        number: state.getIn(['increment', 'number']),
        text: state.getIn(['increment', 'text'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onAsyncPiy: () => dispatch(asyncPiy())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);