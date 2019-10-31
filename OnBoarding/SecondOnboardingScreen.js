import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class SecondOnboarding extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return ( <KeyboardAwareScrollView>
      <Image style={styles.Location} source = {require('./LocationMarker.png')}/>

      <Text> Get the best barber Reccomendations around you! Barber will need to use your location services. </Text>

      <TouchableOpacity style = {styles.EnableLocation}
      onPress = {() => this.props.navigation.navigate('')}>
      <Text> Enable Location </Text>  
      </TouchableOpacity> 

       < TouchableOpacity style = {styles.NotNow}
       onPress = {() => this.props.navigation.navigate('Intro3')}>
         <Text> Not Now </Text>   
         </TouchableOpacity> 

      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  EnableLocation: {
     backgroundColor: '#DDDDDD',
       opacity: 0.9,
       fontSize: 16,
       fontFamily: 'Avenir Next',
       flexDirection: 'column',
       justifyContent: 'space-around',
       alignItems: 'center',
       alignSelf: 'center',
       alignContent: 'center',
       color: 'black',
       textAlign: 'center',
       height: 50,
       paddingVertical: 10,
       paddingHorizontal: 90,
       marginVertical: 80
       
  },
  NotNow: {
    backgroundColor: '#DDDDDD',
    opacity: 0.9,
    fontSize: 16,
    fontFamily: 'Avenir Next',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf:'center',
    alignContent:'center',
    color: 'black',
    textAlign: 'center',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 95,
    marginVertical:115
  },
  Location:{
     maxWidth: 350,
     maxHeight: 350,
     marginTop: 170,
  },
 
})