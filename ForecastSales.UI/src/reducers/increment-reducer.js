import { ActionTypes } from '../constants/increment-constants';
import { Map } from 'immutable';

const defaultState = Map({
    number: 0,
    text: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {

        case ActionTypes.INCREMENT:
            return state.set('number', state.get('number') + 1);

        case ActionTypes.SET_TEXT:
            return state.set('text', action.text);

        default:
            return state;
    }
};