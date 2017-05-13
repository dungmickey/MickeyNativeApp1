import {combineReducers} from 'redux';
import { reducer as formReducerSignIn } from 'redux-form';
const reducers = {
  form: formReducerSignIn
}
const allReducers= combineReducers(reducers);
export default allReducers;
