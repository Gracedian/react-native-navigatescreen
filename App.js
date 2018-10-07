import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, KeyboardAviodingView, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Login} from './Screens/Login';
import {Bio} from './Screens/Bio';

const LoginScreen = StackNavigator ({
      Home : {screen: Login},
      Details : {screen: Bio}
  },
  {
    navigationOptions: {header:false},
  });

export default class App extends React.Component {
  render() {
    return (
      <LoginScreen/>
    );
  }
}
