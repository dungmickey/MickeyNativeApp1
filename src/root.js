/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Router } from 'react-native-router-flux'
import scenes from './navigations/routes'
import { View, Text, StyleSheet } from 'react-native'

export default class Root extends Component {
   render() {
    return (
      <Router scenes={scenes} />
    );
  }

}




// AppRegistry.registerComponent('Practice1', () => Practice1);
