import Api from './api';
import Constants from '../utlis/constants'
import MemCache from '../utlis/MemCache'

export default class AuthenticationService {
  //Return an promise
  static signin(userCredentials) {
    //userCredentials = {email : 'duy.le@gmail.com', password: '123456'};
    //console.log('userCredentials', userCredentials);
    //userCredentials = {email: 'duy.le@gmail.com', password: '123456'};
    return Api.requestData('POST', 'trainees/login', userCredentials)
    .then(json => {
      MemCache.set(Constants.memcacheKeys.accessToken ,json.token);
      return json;
    });
  }
}
