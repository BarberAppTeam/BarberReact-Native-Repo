import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class ThirdOnboarding extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return ( <View stye={styles.Container}>
      <Image source = {require('./Memoji.png')}/>

      <Text> Get reminders and notifications. Keep your appointments up to date. </Text>

      <TouchableOpacity style = {styles.Next}
      onPress = {() => this.props.navigation.navigate('Form')}>
      <Text style = {styles.GetStarted}> Get Started </Text>  
      
      
      </TouchableOpacity>  

  
      
    </View>
    )
  }
}
/* Go back button <Text style = {styles.GoBackContainer}
      onPress = {() => this.props.navigation.navigate('Intro3')} >
      Go Back </Text>*/
const styles = StyleSheet.create({
  Container:{
    padding: 20,
    marginTop: 75,
    flex: 1,
    paddingHorizontal: 30,
    marginBottom: 50
  },
  GetStarted: {
    backgroundColor: '#000000',
      opacity: 0.9,
      fontSize: 16,
      fontFamily: 'Avenir Next',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf:'center',
      alignContent:'center',
      textAlign:'center',
      color:'white',
      height: 50,
      paddingVertical: 10,
      paddingHorizontal: 95,
      marginVertical:115
    },
  Memoji:{
    alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'

  }

  /*GoBackContainer: {
    backgroundColor: '#FFFFFF',
    opacity: 0.9,
    fontSize: 16,
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 5,
    marginBottom: 150,
    fontFamily: 'Avenir Next',
    color: 'black',
    textAlign: 'center',
    flexWrap: 'wrap',
  }*/
})