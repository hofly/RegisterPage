import React, {Component} from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {dimensionStyles} from '../resources/dimension.js';

export class PhoneInput extends Component {
  static propTypes = {
    text: PropTypes.string,
    onTextChange: PropTypes.func,
  };

  render() {
    const {text, onTextChange} = this.props;
    return (
      <TextInput
        style={dimensionStyles.textInputStyle}
        placeholder="Số điện thoại"
        underlineColorAndroid={'#C0C0C0'}
        onChangeText={onTextChange}
        value={text}
      />
    );
  }
}
