import * as actionTypes from '../actions'

let initialState = {
    loggedIn: true,
    demodata: "",
    businesspremises: [],
    companytype: [],
    department: [],
    employeetype: [],
    edudegree: [],
    emailmodule: [],
    industry: [],
    module: [],
    phone: [],
    social: [],
    title: [],
    loading: false
};

const masterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MASTER_UPDATE_SUCCESS: {
            console.log(action.payload, "BUSINSTATE")
            return {
                ...state, businesspremises: action.payload
            };
        }
        case actionTypes.LOADING: {
            return {
                ...state, loading: true
            };
        }
        case actionTypes.MASTER_UPDATE_ERROR: {
            return { ...state };
        }
        default: {
            return state;
        }
    }
};

export default masterReducer;
