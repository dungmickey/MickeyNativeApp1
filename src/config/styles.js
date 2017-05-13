import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   splashScreen: {
     width: null,
     height: null,
     flex: 1,
   },
   container: {
     flexDirection: 'column',
     //justifyContent: 'space-between',
     flex: 1
   },
   lineRow: {
     borderBottomColor: '#bbb',
     borderBottomWidth: 1,
     flexDirection: 'row',
     marginBottom: 10,
     paddingLeft: 30,
     paddingRight: 30,
     paddingBottom: 3,
   },
   inputField: {
     height: 36,
     borderColor: 'gray',
     borderWidth: 1,
     width: '100%',
     flex: 0.7,
   },
   imgIcon: {
     width: 26,
     height: 27,
     marginRight: 10,
     alignSelf: 'center',
   },
   forgotPass: {
     color: 'white',
     fontSize: 14,
     paddingRight: 15,
     textAlign: 'right',
     backgroundColor: 'transparent',
   },
   coverIconHamburger: {
     flex: 0.2,
   },
   iconHamburger: {
     width: 30,
     height: 30,
     marginTop: 30,
     marginLeft: 10,
   },
   coverCircleTop: {
     flex: 0.3,
     justifyContent: 'center',
     alignItems: 'center',
   },
   formBottom: {
     flex: 0.7,
   },
   circleTop: {
     width: 70,
     height: 70,
     backgroundColor: 'white',
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
   },
   iconCheckRed: {
     width: 40,
     height: 40,
   },
   coverButtonOk: {
     marginTop: 50,
     height: 40,
     backgroundColor: '#fa0a70',
     alignItems: 'center',
     justifyContent: 'center',
   },
   txtOk: {
     color: 'white',
     fontSize: 16,
   },
   coverTxtAccount: {
     marginTop: 20,
     alignItems: 'center',
     backgroundColor: 'transparent',
     flexDirection: 'row',
     //flex: 1,
   },
   txtAccount: {
     color:'white',
     flex: 0.65,
     textAlign:'right',
   },
   coverSignUp: {
     flex: 0.35,
    //  textAlign:'left',
  },
  txtSignUp: {
    color:'white',
  }
 });

export default styles;
