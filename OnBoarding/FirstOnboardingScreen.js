import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet
 } from 'react-native';

export default class FistOnboarding extends Component {
 
  render() {
    return (
      <View>
      <Image source = {
        require('./hair-shaver.png')}/>
      
        <Text> Tonso lets you easily find and book appointments with local professionals. </Text>

        <TouchableOpacity style = {styles.Next}
        onPress = {() => this.props.navigation.navigate('SecondOnboardingScreen')} >
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
 }
})