import {combineReducers} from 'redux';
import { reducer as formReducerSignIn } from 'redux-form';
import signinReducer from '../redux/signInReducer'
const reducers = {
  signinReducer,
  form: formReducerSignIn
}
const allReducers= combineReducers(reducers);
export default allReducers;

// import { combineReducers } from 'redux'
// import { signIn } from '../redux/signInReducer'
//
// export const makeRootReducer = () => combineReducers({
//   signIn
// })
//
// export default makeRootReducer
