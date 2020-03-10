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

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS: {
            console.log(action.payload, "BUSINSTATE")
            return {
                ...state, businesspremises: action.payload
            };
        }
      
        case actionTypes.LOGIN_ERROR: {
            console.log(action.payload, "errorreducer")
            return { ...state };
        }
        default: {
            return state;
        }
    }
};

export default loginReducer;
