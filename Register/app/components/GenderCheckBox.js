import {CheckBox} from 'react-native-elements';
import React, {Component} from 'react';
import {View} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';

export class GenderCheckBox extends Component {
  state = {
    checkedMale: true,
    checkedFemale: false,
  };
  render() {
    return (
      <View style={dimensionStyles.GenderCheckBoxsContainer}>
        <CheckBox
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          title="Nam"
          size={15}
          containerStyle={dimensionStyles.genderCheckBoxSelf}
          textStyle={dimensionStyles.genderCheckBoxTextStyle}
          checked={this.state.checkedMale}
          onIconPress={() =>
            this.setState({checkedMale: true, checkedFemale: false})
          }
        />
        <CheckBox
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          title="Nữ"
          size={15}
          containerStyle={dimensionStyles.genderCheckBoxSelf}
          textStyle={dimensionStyles.genderCheckBoxTextStyle}
          checked={this.state.checkedFemale}
          onIconPress={() =>
            this.setState({checkedMale: false, checkedFemale: true})
          }
        />
      </View>
    );
  }
}
