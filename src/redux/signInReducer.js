import AuthenticationService from '../network/AuthenticationService'
//=============================//
//      Action Types
//=============================//
export const SIGNINSUCCESS = 'SIGNINSUCCESS';
export const SIGNINFAILED  = 'SIGNINFAILED';

//=============================//
//      Action Creators
//=============================//
export function signInSuccess(data) {
  return {
    type: 'SIGNINSUCCESS',
    payload: data
  }
}
export function signInFailed(data) {
  return {
    type: 'SIGNINFAILED',
    payload: data
  }
}

const ACTION_HANDLERS = {
  [SIGNINSUCCESS]: (state, action) => ({ ...state, ...action.payload }),
  [SIGNINFAILED]: (state, action) => ({ ...state, ...action.payload }),
}

const initialState = {

}

export function signIn(userInfos) {
  return (dispatch) => {
    return AuthenticationService.signin(userInfos)
    .then(json => {
      console.log('LOGIN RESPONSE');
      console.log(json);
        dispatch(signInSuccess(json));
    })
    .catch(error => {
      dispatch(signInFailed(error));
      console.log(error);
    });
  };
}

export default function signinReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
