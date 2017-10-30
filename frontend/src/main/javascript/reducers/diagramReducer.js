import * as types from '../constants/types';

const initialState = {
    selectedNodes: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_SELECTED_NODES:
            return {...state,  selectedNodes: action.nodes};
        default:
            return state;
    }
};