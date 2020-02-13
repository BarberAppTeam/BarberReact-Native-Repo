import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Hub, Logger } from 'aws-amplify';
import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

const logger = new Logger('My-Logger');

const listener = (data) => {

  switch (data.payload.event) {

    case 'signIn':
      logger.error('user signed in'); //[ERROR] My-Logger - user signed in
      break;
    case 'signUp':
      logger.error('user signed up');
      break;
    case 'signOut':
      logger.error('user signed out');
      break;
    case 'signIn_failure':
      logger.error('user sign in failed');
      break;
    case 'configured':
      logger.error('the Auth module is configured');

  }
}

Hub.listen('auth', listener);

Amplify.configure(awsmobile);

class LoginForm extends Component { }

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'My user name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    {
      label: 'PhoneNumber',
      key: 'phone_number',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string'
    }
  ]
};
const usernameAttributes = 'My user name';

export default withAuthenticator(LoginForm, {
  signUpConfig,
  usernameAttributes
});


















/*import React, { Component } from 'react';
import { 
  Image, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity,
  ScrollView,
  Button
 } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Amplify, { Auth } from 'aws-amplify';
import { default as awsConfig } from "../aws-exports";
import SafeAreaView from 'react-native-safe-area-view';
import { userInfo } from 'os';
import { View } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
//import { withAuthenticator, Authenticator } from 'aws-amplify-react-native';
//import { withOAuth } from "aws-amplify-react-native";
//import {GoogleSignin} from '@react-native-community/google-signin';

Amplify.configure(awsConfig);

/*Amplify.configure({
  Auth: {
    oauth:{
      // OAuth config...
    }
  },
});


export default class LoginForm extends Component {
 
  static navigationOptions = {
    header: null
  }
  render() {
    const {
      oAuthUser:user,
      oAuthError:error,
      hostedUISignIn,
      facebookSignIn,
      googleSignIn,
      amazonSignIn,
      customerProviderSignIn,
      signOut} = this.props;


// This code below is for the Google Sign In button
/*async function bootstrap() {
  await GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '632469254182-uei9ta0gadqincovpsoj37prqtp0e78u.apps.googleusercontent.com', // required
  });
}




    return (
      
          <KeyboardAwareScrollView style={styles.loginScreen} >
                 
              <Image source={require('../OnBoarding/images/Neat.png')}style = {styles.Pillar}/>
        <View style={styles.rectangle}>
        <SafeAreaView style={styles.safeArea}>
          {user && <Button title="Sign Out" onPress={signOut} icon='logout' />}
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            
            {!user && <React.Fragment>
              

            {/* Go directly to a configured identity provider }
              <Button title="Facebook" onPress={facebookSignIn} />
              <Button title="Google" onPress={googleSignIn} />
              

            </React.Fragment>}
          </ScrollView>
        </SafeAreaView>



          <Ionicons style={styles.emailIcon} ios="ion-email" size={45} />
        <TextInput
          placeholder='Email'
          placeholderTextColor='rgb(0,0,0)'
          /*After a user enters their username it will give the option to
          go to the next field
          returnKeyType="next"
          onSubmitEditing={
            () => this.passwordInput.focus()
          }
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.Username}
        />
  
        <TextInput 
            placeholder='Password'
            placeholderTextColor='rgb(0,0,0)'
                // ''
            returnKeyType='go'
            securedTextEntry='true'
            style={styles.Password}
            //ref={()=> this.passwordInput = Input}
            //stores password input
            />
        
          <TouchableOpacity
              style={styles.SignInContainer}
              onPress={()=> this.props.navigation.navigate('HomeNav')}>
              <Text style={styles.LoginText}>Sign In </Text>
          </TouchableOpacity>
           

          <TouchableOpacity
           style={styles.RegisterContainer}
           onPress={() => this.props.navigation.navigate('Signup')}>
           <Text style={styles.RegisterText}> Register </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.GoBackContainer}
          onPress = {() => this.props.navigation.navigate('RegisterUser')}>
            <Text>
              Go Back </Text>
        </TouchableOpacity>
        
        <Text style={styles.NoAccountText}> Don't Have an Account? Sign Up!</Text>
        </View>
      </KeyboardAwareScrollView >
      
    )
  }
}


const styles = StyleSheet.create({

    loginScreen:{
    backgroundColor: '#dfe4ff'

    },
  emailIcon: {
    marginLeft: 35,
    marginTop: 40
  },
    rectangle:{ 
        width: 412,
        height: 450,
        borderRadius: 50,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.06)",
        shadowOffset: {
          width: 0,
          height: -15},
        shadowRadius: 18,
        shadowOpacity: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#FFFFFF',
      
    },
    container:{
        padding:20,
        marginTop:50,
        flex:1,
        paddingHorizontal: 5,
        marginBottom:50,
    backgroundColor: '#dfe4ff'},
    /*GoogleSignin:{
    width: 192, 
    height: 48, 
    
    color: GoogleSigninButton.Color.Dark
    
    }
 
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    Username: {
        height: 50,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        color: '#000000',
        borderBottomWidth: .7,
        marginLeft:80,
        marginRight:80,
        marginVertical:2,
        

      },
      Password: {
        height: 50,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        color: '#000000',
        borderBottomWidth: .7,
        marginLeft: 80,
        marginRight: 80,

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
          height:50,
          marginVertical: 10,
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
          borderRadius: 5,
          height:50
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
      maxWidth: 250,
      maxHeight: 365,
      marginBottom: 50,
      marginTop: 60,
      marginVertical:80,
      marginLeft:80,
      colors:['rgb(38,33,96)','rgb(144,38,142)'] 

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


//export default withOAuth(LoginForm);

/*<UserSignIn />
              <GoogleSigninButton
                style={styles.GoogleSignin}
                onPress={this._signIn}
                disabled={this.state.isSigninInProgress} />
*/
