import 'react-native-gesture-handler';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from './app/screens/RegisterScreen.js';

import React, {Component} from 'react';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register Screen">
          <Stack.Screen name="Register Screen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
