import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {dimensionStyles} from '../resources/dimension.js';

export class DateOfBirthInput extends Component {
  state = {
    date: '',
  };

  render() {
    return (
      <DatePicker
        style={dimensionStyles.datePicker}
        customStyles={{
          dateInput: dimensionStyles.datePickerInput,
          dateText: dimensionStyles.datePickerText,
          placeholderText: dimensionStyles.datePickerPlaceholderText,
        }}
        date={this.state.date}
        mode="date"
        showIcon={false}
        placeholder="Ngày sinh"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        onDateChange={date => {
          this.setState({date: date});
        }}
        custom
      />
    );
  }
}
