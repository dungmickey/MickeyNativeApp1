// import {createStore} from 'redux';
// import allReducers from './reducer';
//
// const store = createStore(allReducers);
// export default store;

import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducer';
import { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(
  allReducers,
  composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;
