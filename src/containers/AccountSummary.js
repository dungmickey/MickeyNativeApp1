import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { getListUser } from '../redux/accountSumReducer'
import styles from '../config/stylesAccountSum'

class AccountSummary extends Component {

  componentDidMount() {
    this.props.getListUser();
  }

  render() {
    const { getListUser, listUser } = this.props;
    console.log('listUser', this.props.listUser)
    return(
      <View style={styles.container}>
        <Image style={styles.bgHeader} source={require('../assets/bg_header.png')} />
        <View style={styles.coverContent}>

          <View style={styles.eachGroup}>
              <Text style={styles.title}>Manager</Text>
              <View style={styles.itemMember}>
                <Image style={styles.bgHeader} source={require('../assets/member.jpg')} />
                <View style={styles.inforMember}>
                  <Text style={styles.nameMember}>Duy Le</Text>
                  <Text style={styles.mailMember}>duy.le@gmail.com</Text>
                </View>
              </View>
              <View style={styles.itemMember}>
                <Image style={styles.bgHeader} source={require('../assets/member.jpg')} />
                <View style={styles.inforMember}>
                  <Text style={styles.nameMember}>Duy Le</Text>
                  <Text style={styles.mailMember}>duy.le@gmail.com</Text>
                </View>
              </View>
            </View>

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  listUser: state.accountSummaryReducer.listUser
})

const mapDispatchToProps = {
  getListUser
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountSummary)
