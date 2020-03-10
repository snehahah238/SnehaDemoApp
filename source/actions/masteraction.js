import axios from 'axios';

export const GET_BUSINESS_PREMISES = 'GET_BUSINESS_PREMISES';
export const GET_COMPANY_TYPE = 'GET_COMPANY_TYPE';
export const GET_DEPARTMENT = 'GET_DEPARTMENT';
export const GET_EMPLOYEE_TYPE = 'GET_EMPLOYEE_TYPE';
export const GET_EDUCATION_DEGREE = 'GET_EDUCATION_DEGREE';
export const GET_EMAIL_TYPE = 'GET_EMAIL_TYPE';
export const GET_INDUSTRY = 'GET_INDUSTRY';
export const GET_MODULE = 'GET_MODULE';
export const GET_PHONE = 'GET_PHONE';
export const GET_SOCIAL = 'GET_SOCIAL';
export const GET_TITLE = 'GET_TITLE';
export const GET_TITLE_DEMO = 'GET_TITLE_DEMO';
export const LOADING = 'LOADING';

export const ADD_MASTER_SUCCESS = 'ADD_MASTER_SUCCESS';

export const FETCHING_PEOPLE_SUCCESS = 'FETCHING_PEOPLE_SUCCESS';

export const MASTER_UPDATE_SUCCESS = 'MASTER_UPDATE_SUCCESS';
export const MASTER_UPDATE_ERROR = 'MASTER_UPDATE_ERROR';

// ***************************** DJ DEMO **********************//

export const fetchingPeopleRequest = () => ({ type: LOADING });


export const getmaster = () => {
  return async dispatch => {
     
    dispatch(fetchingPeopleRequest());

      try {

          let response = await fetch("http://mbdbtechnology.com/projects/buildster/ws/webservice/get_country", {
              method: 'GET',
              headers: {
                  'Authorization': 'delta141forceSEAL8PARA9MARCOSKATJRT',
              },
          })

          let json = await response.json();

          dispatch(masterupdatesuccess(json.country_data));

          //console.log( json.country_data)
      }
      catch (error) {
          dispatch(masterupdateerror(error));
      }
  };
};



// export const getmaster = () => {
//   return dispatch => {

//     console.log("hello")

//     axios({
//       method: 'get',
//       url: "http://mbdbtechnology.com/projects/buildster/ws/webservice/get_country",
//       headers: {
//         'Authorization': 'delta141forceSEAL8PARA9MARCOSKATJRT',
//       },
//     })
//       .then(async function (response) {
//         var responsedata = response.data.country_data;
//         console.log(response, "hjhjhjhjhj")
//         if (response.data.status == "200") {

//           console.log("hellosneha")


//           dispatch(masterupdatesuccess(json.country_data));

//           //masterupdatesuccess(responsedata, dispatch);
//         }
//         else {
//          // masterupdateerror(responsedata, dispatch)
//         }
//       })
//       .catch(function (error) {
//         console.log(error.message)
//       });
//   };

// }


export function changeCount(responsedata, dispatch) {
  return {
    type: MASTER_UPDATE_SUCCESS,
    payload: responsedata
  }
}


export const masterupdatesuccess = (json) => ({
  type: MASTER_UPDATE_SUCCESS,
  payload: json
});


// export const masterupdatesuccess = (responsedata, dispatch) => {

//   return {
//     type: MASTER_UPDATE_SUCCESS,
//     payload: responsedata
//   }

// }

export const masterupdateerror = (responsedata, dispatch) => {
  return {
    type: MASTER_UPDATE_ERROR,
    payload: responsedata
  }
}
