/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import scenes from './navigations/routes'
import store from './config/store'

export default class Root extends Component {
   render() {
    return (
      <Provider store= {store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }

}




// AppRegistry.registerComponent('Practice1', () => Practice1);
