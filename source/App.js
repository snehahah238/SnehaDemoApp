// import React from 'react';
// import { View, Text } from 'react-native';
// import { Provider } from 'react-redux';
// import Routes from './routes/routes';
// import configureStore from './store/configureStore';
// const store = configureStore();


// const App = () => {

//     return (

//         <Provider store={store}>
//             <Routes />
//         </Provider>
//     )

// }

// export default App;



import React, { Component } from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import masterReducer from './reducers';

import Routes from './routes/routes';

const createtoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createtoreWithMiddleware(masterReducer);

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Routes />
    </Provider>
    );
  }
}