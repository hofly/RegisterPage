import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {dimensionStyles} from '../resources/dimension.js';
import OperateAPI from '../repository/OperateAPI.js';
import {RegisterHeader} from '../components/RegisterHeader.js';
import {NameInput} from '../components/NameInput.js';
import {PhoneInput} from '../components/PhoneInput.js';
import {EmailInput} from '../components/EmailInput.js';
import {PasswordInput} from '../components/PasswordInput.js';
import {DateOfBirthInput} from '../components/DateOfBirthInput.js';
import {RegisterButton} from '../components/RegisterButton.js';
import {GenderCheckBox} from '../components/GenderCheckBox.js';

export default class RegisterScreen extends Component {
  state = {
    RegisterStatusText: '',
    username: '',
    phone: '',
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <RegisterHeader />
        <NameInput
          text={this.state.username}
          onTextChange={text => this.setState({username: text})}
        />
        <PhoneInput
          text={this.state.phone}
          onTextChange={text => this.setState({phone: text})}
        />
        <EmailInput
          text={this.state.email}
          onTextChange={text => this.setState({email: text})}
        />
        <PasswordInput
          text={this.state.password}
          onTextChange={text => this.setState({password: text})}
        />
        <DateOfBirthInput />
        <GenderCheckBox />
        <RegisterButton onClick={() => this.RegisterCommand()} />
        <Text style={dimensionStyles.RegisterStatusText}>
          {this.state.RegisterStatusText}
        </Text>
      </View>
    );
  }

  async RegisterCommand() {
    let data = await new OperateAPI().PostUser(
      this.state.username,
      this.state.password,
    );
    console.log(data);
    this.setState({RegisterStatusText: data});
  }
}
