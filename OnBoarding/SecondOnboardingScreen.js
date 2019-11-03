import React, { Component } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class SecondOnboarding extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return ( <KeyboardAwareScrollView>
      <Image style = {styles.Location}
      source = {require('./images/Location.png')}/>
      <Text style = {styles.Reccomendation}> 
      Get the best barber reccomendations around you! 
      <Text styles={styles.Tonso}> TONSO</Text> will need to use your location services. </Text>

      <TouchableOpacity style = {styles.EnableLocation}
      onPress = {() => this.props.navigation.navigate('')}>
      <Text style={styles.EnableLocationText}> Enable Location </Text>  
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
     backgroundColor: '#9AE1D3',
       flexDirection: 'column',
       justifyContent: 'space-around',
       alignItems: 'center',
       alignSelf: 'center',
       color: 'black',
       textAlign: 'center',
       height: 50,
       paddingVertical: 10,
       paddingHorizontal: 80,
       borderRadius: 5,
       marginTop: 75,
       marginBottom: 10,
  },
   Tonso: {
     fontWeight: 'bold',
     color: '#5D9CEC',
   },
  EnableLocationText:{
    fontWeight: '600',
    fontSize: 20,
    color: '#435e59',
    lineHeight: 25,

  },
  NotNow: {
    backgroundColor: '#DDDDDD',
    fontSize: 18,
    opacity:.5,
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
    marginVertical:5,
    borderRadius: 5
  },
  Reccomendation: {
     textAlign: 'center',
       paddingHorizontal: 15,
       marginVertical: 20,
       textAlignVertical: 'center',
       lineHeight: 25,
       fontSize: 17,
  },
  Location:{
    marginVertical:130,
     marginLeft: 85,
     marginRight: 150,
     height:200,
     width:200
  },
 
})