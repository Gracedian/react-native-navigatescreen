import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TextInput, KeyboardAviodingView, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';

export class Bio extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>BIODATA</Text>
            <Text style={styles.instructions}>Nama : Grace Dian Christania</Text>
            <Text style={styles.instructions}>Kelas : XI RPL 3</Text>
            <Text style={styles.instructions}>No Absen : 22</Text>
            <Image 
          style={{width:300, height:200}} 
          source ={require('../Img/a.jpg')} />
          </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width:250,
    fontSize: 13,
    color:'#000000'
  },

  button:{
    width:250,    
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#3B5998',
    marginVertical: 10,
    paddingHorizontal: 80
    
  },

  buttonText:{
    fontSize: 13,
    color:'#f7f7f7',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#04048e',
  },
  instructions: {
    textAlign: 'center',
    color: '#04048e',
    marginBottom: 5,
  },
})
