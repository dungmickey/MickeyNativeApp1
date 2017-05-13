import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import styles from '../config/styles'

export default class SignIn extends Component {
 constructor(props) {
   super(props);
   this.state = {
     userName: 'username',
     password: 'password',
   };
 }
 handleUsername = (e) => {
   this.setState({
     userName: e.value
   })
 }
 handlePassword = (e) => {
   this.setState({
     password: e.value
   })
 }

  render() {
    const { handleSubmit } = this.props
    return (
      <Image style={styles.splashScreen} source={require('../assets/bg_signin.png')}>
      <View style={styles.container}>
        <View style={styles.coverIconHamburger}>
            <Image style={styles.iconHamburger}
             source={require('../assets/hamburger.png')}
           />
       </View>
      <View style={styles.coverCircleTop}>
         <View style={styles.circleTop}>
           <Image style={styles.iconCheckRed}
            source={require('../assets/check_red.png')} />
         </View>
       </View>
        <View style={styles.formBottom}>
          <View style={styles.lineRow}>
            <Image style={styles.imgIcon} source={require('../assets/user_name.png')} />
            <TextInput style={styles.inputField}
                onChangeText={this.handleUsername}
                value={this.state.userName} />
          </View>
          <View style={styles.lineRow}>
            <Image style={styles.imgIcon} source={require('../assets/password.png')} />
            <TextInput style={styles.inputField}
              secureTextEntry={true}
              onChangeText={this.handlePassword}
              value={this.state.password} />
          </View>
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPass}>Forgot Password!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.coverButtonOk}>
            <Text style={styles.txtOk}>
              SignIn
            </Text>
         </TouchableOpacity>
         <View style={styles.coverTxtAccount}>
           <Text style={styles.txtAccount}>Don't have an account?</Text>
           <TouchableOpacity style={styles.coverSignUp}>
             <Text style={styles.txtSignUp}>SignUp</Text>
          </TouchableOpacity>
         </View>
       </View>
      </View>
      </Image>
    );
  }
}

// const mapStateToProps = () => {
//
// }
// const mapDispatchToProps = () => {
//   signIn
// }

//export default connect(null, mapDispatchToProps)(SignIn)
// export default reduxForm({
//   form: 'signIn'
// })(SignIn)
