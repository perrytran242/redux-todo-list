import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
}
// returns a promise and action cannot take in a promise so it throws and error.
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {  
        case types.GET_LIST_DATA:
            return {...state, all: action.payload.data.todos };
        case types.GET_SINGLE_ITEM:
            return {...state, single: action.payload.data.todo};
        default: 
            return state;
    }
}