import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import {dimensionStyles} from '../resources/dimension.js';

export class RegisterButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  };
  render() {
    const {onClick} = this.props;
    return (
      <TouchableOpacity
        style={dimensionStyles.RegisterButton}
        onPress={onClick}>
        <Text style={dimensionStyles.RegisterButtonText}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
    );
  }
}
