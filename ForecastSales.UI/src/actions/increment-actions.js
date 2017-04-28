import { ActionTypes } from '../constants/increment-constants';

export const increment = () => ({
    type: ActionTypes.INCREMENT
});

export const asyncPiy = () => {
    return async (dispatch, getState) => {
        const response = await fetch('Home/Index');
        const text = await response.text();
        // const json = await response.json();

        console.log(getState());

        dispatch(setText(text));
    };
};

const setText = (text) => ({
    type: ActionTypes.SET_TEXT,
    text
});