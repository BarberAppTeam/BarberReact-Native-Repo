import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button } from 'react-native';

class IntroScreen extends Component {

static navigationOptions ={
    header:null
}


  render() {
    return (
      <View style={StyleSheet.container}>
          <Button title= 'Skip to Login'
            onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#273c75',
      alignItems:'center',
      justifyContent:'center'
    }
  })
  