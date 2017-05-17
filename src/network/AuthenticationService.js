import Api from './api';
import Constants from '../utlis/constants'
import MemCache from '../utlis/MemCache'

export default class AuthenticationService {
  //Return an promise
  static signin(userCredentials) {
    return Api.requestData('POST', 'trainees/login', userCredentials)
    .then(json => {
      MemCache.set(Constants.memcacheKeys.accessToken ,json.token);
      return json;
    });
  }
}
