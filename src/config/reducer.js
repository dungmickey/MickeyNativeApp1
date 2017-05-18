import {combineReducers} from 'redux';
import { reducer as formReducerSignIn } from 'redux-form';
import signinReducer from '../redux/signInReducer'
import accountSummaryReducer from '../redux/accountSumReducer'

console.log(accountSummaryReducer)

const reducers = {
  signinReducer,
  accountSummaryReducer,
  form: formReducerSignIn
}
const allReducers= combineReducers(reducers);
export default allReducers;
