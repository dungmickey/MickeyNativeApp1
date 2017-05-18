import { Actions } from 'react-native-router-flux';
import AuthenticationService from '../network/AuthenticationService'
//=============================//
//      Action Types
//=============================//

export const ACCOUNT_SUMMARY_FULFILLED  = 'ACCOUNT_SUMMARY_FULFILLED';

//=============================//
//      Action Creators
//=============================//
export function accountSummaryFulfilled(data) {
  const listUser = data
  return {
    type: 'ACCOUNT_SUMMARY_FULFILLED',
    payload: {
      listUser,
    }
  }
}


const ACTION_HANDLERS = {
  [ACCOUNT_SUMMARY_FULFILLED]: (state, action) => ({ ...state, ...action.payload }),
}

const initialState = {
  listUser : []
}

export function getListUser() {
  return (dispatch) => {
    return AuthenticationService.getListUser()
    .then(json => {
        dispatch(accountSummaryFulfilled(json));
    })
    .catch(error => {
      console.log(error);
    });
  };
}

export default function accountSummaryReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
