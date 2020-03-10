import * as actionTypes from '../actions/new';


const initialState = {
    count: 0
};
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTER_CHANGE:
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
}
export default countReducer;