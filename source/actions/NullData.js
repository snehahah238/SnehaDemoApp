export const NULL_DATA = 'NULL_DATA';


export const ClearSnackbar = () => {
    return dispatch => {
        dispatch({
            type: "NULL_DATA",
            payload: ""
        })
    }
}