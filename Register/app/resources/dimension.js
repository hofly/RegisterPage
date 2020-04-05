import {StyleSheet, Dimensions} from 'react-native';

const dimensionStyles = StyleSheet.create({
  headerContainer: {
    height: 35,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C0C0C0',
  },

  headerTextStyle: {
    fontSize: 15,
  },

  textInputStyle: {
    height: 35,
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 10,
  },

  RegisterButton: {
    height: 30,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },

  RegisterButtonText: {
    fontSize: 15,
    color: '#FFFFFF',
  },

  RegisterStatusText: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
  },

  datePicker: {
    height: 30,
    marginLeft: 5,
    marginRight: 5,
    width: Dimensions.get('window').width - 10,
  },

  datePickerInput: {
    flex: 1,
    marginLeft: 4,
    marginRight: 4,
    height: 20,
    borderWidth: 0,
    borderBottomWidth: 1.1,
    borderBottomColor: '#A0A0A0',
    alignItems: 'flex-start',
  },

  datePickerText: {
    color: '#333',
    fontSize: 11,
  },

  datePickerPlaceholderText: {
    color: '#A0A0A0',
    fontSize: 11,
  },

  GenderCheckBoxsContainer: {
    marginTop: 5,
    height: 35,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  genderCheckBoxSelf: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  genderCheckBoxTextStyle: {
    fontSize: 10,
  },
});

export {dimensionStyles};
