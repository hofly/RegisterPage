import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';

export class RegisterHeader extends Component {
  render() {
    return (
      <View style={dimensionStyles.headerContainer}>
        <Text style={dimensionStyles.headerTextStyle}>ĐĂNG KÝ</Text>
      </View>
    );
  }
}
