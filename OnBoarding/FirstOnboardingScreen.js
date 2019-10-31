import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image
 } from 'react-native';
 import {
   TouchableOpacity
 } from 'react-native-gesture-handler';

export default class FistOnboarding extends Component {
  static navigationOptions = {
    header: null
  }
 
  render() {
    return (
      <View>
      <Image style={styles.hair_shaver} source = {
        require('./hair-shaver.png')}/>
      
        <Text> Tonso lets you easily find and book appointments with local professionals. </Text>

        <TouchableOpacity style = {styles.Next}
        onPress = {() => this.props.navigation.navigate('Intro2')} >
          <Text> Next </Text> 
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 Next: {
   backgroundColor: '#DDDDDD',
   opacity: 0.9,
   marginBottom: 400,
   fontSize: 24,
   fontFamily: 'Farah',
   paddingHorizontal: 100,
   flexDirection: 'column',
   justifyContent: 'space-around',
   alignItems: 'center',
   paddingVertical: 15,
   marginTop: 25
 },
 hair_shaver: {
     maxWidth: 350,
     maxHeight: 350,
     marginBottom: 100,
     marginTop: 170,

 }
})