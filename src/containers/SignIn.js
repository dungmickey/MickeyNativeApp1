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

 renderInput = ({ input: { onChange, ...restInput },
   meta: {touched, error, warning},
   label, placeholder, secureTextEntry}) => {
     console.log(touched);
     return(
       <View style={styles.coverLineInput}>
           <TextInput
           style={styles.inputField}
           onChangeText={onChange}
           placeholder={placeholder}
           secureTextEntry={secureTextEntry}
           {...restInput} />
         { touched && ((error && <Text style={styles.textError}>{error}</Text>) || (warning && <Text>{warning}</Text>))}
       </View>
   )
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
            <Field name="pass" component={this.renderInput}
                placeholder="Password" secureTextEntry={true}/>
          </View>
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPass}>Forgot Password!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.coverButtonOk} onPress={handleSubmit}>
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
const validate = (values) => {
  const errors = {}
  if(!values.name) {
    errors.name = 'Name should not the blank'
  }
  if(!values.pass) {
    errors.pass = 'Password should not the blank'
  }
  return errors;
}
// const mapStateToProps = () => {
//
// }
// const mapDispatchToProps = () => {
//   signIn
// }

//export default connect(null, mapDispatchToProps)(SignIn)
export default reduxForm({
  form: 'formReducerSignIn',
  validate
})(SignIn)
