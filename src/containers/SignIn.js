import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { signIn } from '../redux/signInReducer'
import styles from '../config/styles'

class SignIn extends Component {
 constructor(props) {
   super(props);
   this.state = {
     text: 'abc'
   };
 }

 renderInput = ({ input: { onChange, ...restInput },
   meta: {touched, error, warning},
   label, placeholder, secureTextEntry}) => {
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

 submit = (values) => {
   //console.log(values)
   this.props.signIn(values)
 }
  render() {
    const { handleSubmit, signIn } = this.props

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
              <Field name='email' component={this.renderInput}
                placeholder="email" />
                <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
          </View>
          <View style={styles.lineRow}>
            <Image style={styles.imgIcon} source={require('../assets/password.png')} />
            <Field name="password" component={this.renderInput}
                placeholder="Password" secureTextEntry={true}/>
          </View>
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.textForgotPass}>Forgot Password!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.coverButtonOk} onPress={handleSubmit(this.submit)}>
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
const validate = (values) => {
  const errors = {}
  if(!values.email) {
    errors.email = 'Email should not the blank'
  }
  if(!values.pass) {
    errors.pass = 'Password should not the blank'
  }
  return errors;
}

// const mapStateToProps = () => {
//
// }
const mapDispatchToProps = {
  signIn
}
const SignInWrap = reduxForm({
  form: 'formReducerSignIn',
  validate,
  initialValues: {email:'duy.le@gmail.com',password: '123456'}
})(SignIn)

//export default SignInWrap;
export default connect(null, mapDispatchToProps)(SignInWrap)
// export default reduxForm({
//   form: 'formReducerSignIn',
//   validate
// })(SignIn)
