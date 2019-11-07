import React, { Component } from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HomeNav from '../screens/CustomTabNavigatorScreen'
// import {GoogleSignin} from '@react-native-community/google-signin';
//import {firebase} from '@react-native-firebase/auth';
//import {Auth} from './FireBase';

/*let user;
componentDidMount(async () =>{
  user = await Auth.currentUser;
} )*/

/*const {accessToken,idToken} = await GoogleSignin.signIn();
const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
await firebase.auth().signInWithCredential(credential);*/


export default class LoginForm extends Component {
 
  static navigationOptions = {
    header: null
  }


// This code below is for the Google Sign In button
  render() {
/*async function bootstrap() {
  await GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '632469254182-uei9ta0gadqincovpsoj37prqtp0e78u.apps.googleusercontent.com', // required
  });
}*/
/*<GoogleSigninButton
              style={styles.GoogleSignin}
              onPress={this._signIn}
              disabled={this.state.isSigninInProgress} />*/

    return (
      

          <KeyboardAwareScrollView >
            <Image source={require('./barbershop.png')}style = {styles.Pillar}/>
            
              <StatusBar style="light-content"/>
                <TextInput 
                placeholder = 'Username or Email'
                placeholderTextColor = 'rgb(0,0,0)'
                /*After a user enters their username it will give the option to
                go to the next field*/
                returnKeyType = "next"
                onSubmitEditing = {
                  () => this.passwordInput.focus()
                }
                keyboardType = 'email-address'
                autoCapitalize = 'none'
                autoCorrect = {false}
                style={styles.Username}
                />
            
             
              
    
                <TextInput 
                placeholder='Password'
                placeholderTextColor='rgb(0,0,0)'
                // ''
                returnKeyType='go'
                securedTextEntry='true'
                style={styles.Password}
                //stores password input
                //ref={()=> this.passwordInput = Input}
                />
        
          <TouchableOpacity
              style={styles.SignInContainer}
              onPress={()=> this.props.navigation.navigate('HomeNav')}>
              <Text style={styles.LoginText}>Log In </Text>
          </TouchableOpacity>
           

          <TouchableOpacity
           style={styles.RegisterContainer}
           onPress={() => this.props.navigation.navigate('Registration')}>
           <Text style={styles.RegisterText}> Register </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.GoBackContainer}
          onPress = {() => this.props.navigation.navigate('Intro3')}>
            <Text>
              Go Back </Text>
        </TouchableOpacity>
        
        <Text style={styles.NoAccountText}> Don't Have an Account? Sign Up!</Text>
      
      </KeyboardAwareScrollView >
      
    )
  }
}


const styles = StyleSheet.create({
    container:{
        padding:20,
        marginTop:50,
        flex:1,
        paddingHorizontal: 5,
        marginBottom:50
    }
    /*GoogleSignin:{
    width: 192, 
    height: 48, 
    size:GoogleSigninButton.Size.Wide,
    color: GoogleSigninButton.Color.Dark
    
    }*/,
    Username: {
        height: 40,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        color: '#000000',
        borderBottomWidth: .5,
        marginLeft:65,
        marginRight:65,
        marginVertical:5

      },
      Password: {
        height: 40,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        color: '#000000',
        borderBottomWidth: .5,
        marginLeft:65,
        marginRight:65

      },
      LoginText:{
        color:'black',
        fontSize:18

      },

      buttonContainer: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 5,
        paddingHorizontal: 1,
        opacity: 9,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
      },
      SignInContainer: {
        backgroundColor: '#DDDDDD',
          fontSize: 18,
          opacity: .5,
          fontFamily: 'Avenir Next',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          color: 'black',
          textAlign: 'center',
          paddingHorizontal: 96,
          height:35,
          marginVertical: 5,
          borderRadius: 5
      },
      RegisterContainer: {
        backgroundColor: '#000000',
          fontSize: 18,
          opacity: .9,
          fontFamily: 'Avenir Next',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          color: 'white',
          textAlign: 'center',
          paddingVertical: 10,
          paddingHorizontal: 90       ,
          marginVertical: 5,
          borderRadius: 5
      },
      RegisterText:{
        color:'white',
        fontSize:18
      },
      NoAccountText:{
      paddingVertical: 15,
      textAlign:'center',
      marginBottom:10,
      },
      buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',

      },
      goBack: {
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    errorMessage:{
        fontSize:14,
        color:'red',
        padding:5
        },
    KeyBoardView:{
      flex:1,
    },
    Pillar:{
      marginLeft:50,
      height:300,
      width:300,
      resizeMode:'stretch',
      marginVertical:100

    },
    GoBackContainer: {
      backgroundColor:'#FFFFFF',
      opacity: 0.9,
      fontSize: 16,
      paddingHorizontal: 20,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10,
      marginTop: 5,
      marginBottom: 1,
      fontFamily: 'Avenir Next',
      color: 'black',
      textAlign: 'center'}
    
})


