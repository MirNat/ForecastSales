import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './app.scss';

export default class App extends PureComponent {

    static propTypes = {
        number: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,

        onIncrement: PropTypes.func.isRequired,
        onAsyncPiy: PropTypes.func.isRequired
    };

    render() {
        const { number, onIncrement, onAsyncPiy, text } = this.props;

        return (
            <div className='app'>
                <div>{number}</div>
                <button onClick={onIncrement}>Piy</button>

                <div>{text}</div>
                <button onClick={onAsyncPiy}>Async Piy</button>
            </div>
        );
    }
}
