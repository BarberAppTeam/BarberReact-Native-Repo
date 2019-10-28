import React, {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class SecondOnboarding extends Component {

  render() {
    return ( <View>
      <Image source = {require('./LocationMarker.png')}/>

      <Text> Get the best barber Reccomendations around you! Barber will need to use your location services. </Text>

      <TouchableOpacity style = {styles.Next}
      onPress = {() => this.props.navigation.navigate('')}>
      <Text> Enable Location </Text>  
      </TouchableOpacity> 

       <TouchableOpacity
       onPress = {() => this.props.navigation.navigate('ThirdOnboardingScreen')}>
         <Text> Not Now </Text>   
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