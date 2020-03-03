import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class ThirdOnboarding extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return ( <KeyboardAwareScrollView stye={styles.Container}>
      <Image style={styles.Memoji} source = {require('./Memoji.png')}/>
      <Image style={styles.notificationsBox} source = {require('./images/notificationsBox.png')}/>
      

      <Text style={styles.Reminder}> Get reminders and notifications. Keep your appointments up to date. </Text>

      <TouchableOpacity style = {styles.Next}
      onPress = {() => this.props.navigation.navigate('Signin')}>
      <Text style={styles.GetStarted}> Get Started </Text>  
      
      
      </TouchableOpacity>  

  
      
    </KeyboardAwareScrollView>
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
  Reminder:{
    textAlign:'center',
    paddingHorizontal: 50,
    paddingVertical: 5,
    marginTop: 20,
    lineHeight:25,
    fontSize:22

  },
  GetStarted: {
    paddingHorizontal: 20,
      marginVertical: 20,
      alignItems: 'center',
      alignSelf:'center',
      color:'white',
      fontSize: 18,
      fontWeight:'bold',
      opacity:9
      
    },
    Next:{
      backgroundColor: '#000000',
        opacity: 0.9,
        fontSize: 16,
        fontFamily: 'Avenir Next',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        color: 'white',
        paddingHorizontal: 75,
        marginVertical: 70,
        borderRadius: 5,
    },
  Memoji:{
      justifyContent: 'center',
      height:250,
      width:250,
      marginLeft:65,
      marginVertical:55
  },
  notificationsBox:{

      height: 200,
      width: 300,
      resizeMode:'cover',
      borderRadius:8,
      marginLeft:60
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