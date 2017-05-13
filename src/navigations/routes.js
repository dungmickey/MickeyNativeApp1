import React from 'react';
import {Scene, Actions} from 'react-native-router-flux';
import About from 'containers/About'
import AccountDetail from 'containers/AccountDetail'
import AccountSummary from 'containers/AccountSummary'
import Profile from 'containers/Profile'
import SignIn from 'containers/SignIn'
import SignUp from 'containers/SignUp'
import SlideMenu from 'containers/SlideMenu'

export default scenes = Actions.create(
    <Scene key="root">
      <Scene
        key="about"
        component={About}
        title="About"/>
      <Scene
        key="accountDetail"
        component={AccountDetail}
        title="AccountDetail"/>
      <Scene
        key="accountSummary"
        component={AccountSummary}
        title="AccountSummary"/>
      <Scene
        key="profile"
        component={Profile} title="Profile"/>
      <Scene
        key="signIn"
        component={SignIn}
        initial={true}
        hideNavBar={true}
        />
      <Scene
        key="signUp"
        component={SignUp} title="SignUp"/>
      <Scene
        key="slideMenu"
        component={SlideMenu} title="SlideMenu"/>
    </Scene>
);
