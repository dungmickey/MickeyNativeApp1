import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import styles from '../config/styles'

class SignIn extends Component {
 constructor(props) {
   super(props);
   this.state = {
     userName: 'username',
     password: 'password',
   };
 }

 renderInput = ({ input: { onChange, ...restInput }, label, placeholder}) => {
   console.log(placeholder);
   return(<TextInput
     style={styles.inputField}
     onChangeText={onChange}
     placeholder={placeholder}
     {...restInput} />)
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
              <Field name="name" component={this.renderInput}
                placeholder="User Name" />
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
           <TouchableOpacity style={styles.coverSignUp} onPress={handleSubmit}>
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
export default reduxForm({
  form: 'formReducerSignIn'
})(SignIn)
