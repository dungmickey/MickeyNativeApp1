import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex:1,
  },
  bgHeader: {
    flex: 0.2,
    width: null,
  },
  coverContent: {
    flex: 0.8,
    backgroundColor: 'white',
  },
  eachGroup: {
    flexDirection: 'column',
  },
  title: {
    height: 50,
    lineHeight: 50,
    backgroundColor: '#706f6f',
    color: 'white',
    fontSize: 18,
    paddingLeft: 6,
  },
  itemMember: {
    borderColor: '#706f6f',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    paddingLeft: 6,
  },
  imgMember: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: 'red',
    borderWidth: 2,
  },
  inforMember: {
    flex: 0.7,
    flexDirection: 'column',
  },
  nameMember: {
    fontSize: 16,
    color: 'white',
  },
  mailMember: {
    fontSize: 14,
    color: 'white',
  },
 });

export default styles;
