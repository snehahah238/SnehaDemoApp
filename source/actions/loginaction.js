import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = (firstname,lastname) => {

    console.log("hellooo")

    console.log(firstname,lastname)

    return async dispatch => {
      
      //dispatch({ type: LOADING })
      axios({
        method: 'post',
        url: 'https://us-central1-megaplatform-a3fbb.cloudfunctions.net/app/api/admin/authenticate',
        headers: {
          'Authorization': '14ECE2E9FB6E8910C5D014C1C041B553D8D82BA6D983A1D3887B4B2B9DAB7B33',
          'Content-Type': 'application/json'
        },
        data: {
          "email": firstname,
          "password": lastname
        },
      })
        .then(function (response) {
          var responsedata = response.data;
          if (response.data.status_code === "200" && response.data.status === "success") {
            loginsuccess(responsedata, dispatch);
            console.log("succsess",responsedata)
           // localStorage.setItem("superadmin", JSON.stringify(responsedata.data));
           // history.push('/overview');
          }
          else {
            console.log("error",responsedata)

            loginerror(responsedata, dispatch)
          }
  
        }.bind(this))
        .catch((error) => {
        });
    };
  }
  
  export const loginsuccess = (responsedata, dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: responsedata
    });
  }
  
  export const loginerror = (responsedata, dispatch) => {
    dispatch({
      type: LOGIN_ERROR,
      payload: responsedata
    });
  }
    
  