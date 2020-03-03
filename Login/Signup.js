import React, { Component } from 'react';
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
import { default as awsConfig } from "../aws-exports";
import SafeAreaView from 'react-native-safe-area-view';
import { userInfo } from 'os';
import { View } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
//import { withAuthenticator, Authenticator } from 'aws-amplify-react-native';
//import { withOAuth } from "aws-amplify-react-native";
//import {GoogleSignin} from '@react-native-community/google-signin';



/*Amplify.configure({
  Auth: {
    oauth:{
      // OAuth config...
    }
  },
});*/


export default class SignupScreen extends Component {

    static navigationOptions = {
        header: null
    }
    render() {

        // This code below is for the Google Sign In button
        /*async function bootstrap() {
          await GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: '632469254182-uei9ta0gadqincovpsoj37prqtp0e78u.apps.googleusercontent.com', // required
          });
        }*/
        return (


            <KeyboardAwareScrollView style={styles.SignUp} >

            
                    <View style={styles.NeatLogoContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Signin')}>
                            <Text style={styles.SigninText}> SIGN IN </Text>
                        </TouchableOpacity>
                    <Image source={require('../OnBoarding/images/Neat.png')} style={styles.NeatLogo} />
                </View>

                <View style={styles.rectangle}>

                    <View style={styles.emailContainer}>
                        <Image style={styles.mail} source={require('../Login/important-mail.png')} />
                        <TextInput
                            placeholder='Email                                            '
                            placeholderTextColor='rgb(0,0,0)'
                            /*After a user enters their username it will give the option to
                            go to the next field
                            
                            social sign in **remove from TextInput
                            <Button title="Facebook" onPress={facebookSignIn} />
                            <Button title="Google" onPress={googleSignIn}/>
                            */
                            returnKeyType="next"
                            onSubmitEditing={
                                () => this.passwordInput.focus()
                            }
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={styles.Username}
                        />

                    </View>


                    <View style={styles.passwordContainer}>
                        <Image style={styles.lock} source={require('../Login/lock-26.png')} />
                        <TextInput
                            placeholder='Password                                      '
                            placeholderTextColor='rgb(0,0,0)'
                            // ''
                            returnKeyType='go'
                            securedTextEntry='true'
                            style={styles.Password}
                        //ref={()=> this.passwordInput = Input}
                        //stores password input
                        />
                    </View>

                    <View style={styles.passwordContainer}>
                        <Image style={styles.lock} source={require('../Login/lock-26.png')} />
                        <TextInput
                            placeholder='Confirm Password                      '
                            placeholderTextColor='rgb(0,0,0)'
                            // ''
                            returnKeyType='go'
                            securedTextEntry='true'
                            style={styles.Password}
                        //ref={()=> this.passwordInput = Input}
                        //stores password input
                        />
                    </View>

                    
                        <TouchableOpacity style={styles.RegisterContainer}
                            onPress={() => this.props.navigation.navigate('Signin')}>
                            <Text style={styles.RegisterText}> REGISTER </Text>
                        </TouchableOpacity>
                        </View>
                
            </KeyboardAwareScrollView >

        )
    }
}


const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row'
    },
    emailContainer: {
        flexDirection: 'row'
    },

    SignUp: {
        backgroundColor: '#dfe4ff',

    },

    Password: {
        height: 60,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        color: '#000000',
        borderBottomWidth: .6,
        marginLeft: 10,
        marginRight: 80,
        fontSize: 18,

    },
    lock: {
        color: '#cdcdd7',
        marginHorizontal: 15,
        marginVertical: 20,
        marginLeft: 40

    },
    mail: {
        color: '#cdcdd7',
        marginLeft: 45,
        marginVertical: 2,
        marginTop: 90
    },
    emailIcon: {
        marginLeft: 35,
        marginTop: 40
    },
    rectangle: {
        width: 412,
        height: 450,
        borderRadius: 50,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.06)",
        shadowOffset: {
            width: 0,
            height: -15
        },
        shadowRadius: 18,
        shadowOpacity: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#FFFFFF',
        flex: 1,
        marginTop: 50


    },
    container: {
        flex: 1,
        paddingHorizontal: 5,
        marginBottom: 50,
        backgroundColor: '#dfe4ff'
    },
    /*GoogleSignin:{
    width: 192, 
    height: 48, 
    
    color: GoogleSigninButton.Color.Dark
    
    }*/

    scrollViewContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Username: {
        height: 60,
        backgroundColor: '#FFFFFF',
        marginBottom: 2.5,
        color: '#000000',
        borderBottomWidth: .8,
        marginLeft: 29,
        marginRight: 80,
        marginVertical: 2,
        fontSize: 18,
        marginTop: 70


    },
    SigninText: {
        width: 73,
        height: 23,
        opacity: 0.53,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        marginVertical: 10,
        marginVertical: 60,
        marginLeft: 300

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
    RegisterContainer:{
        fontSize: 18,
        fontFamily: 'Avenir Next',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 96,
        height: 50,
        marginVertical: 10,
        width: 327,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#fa7268"

    },
    RegisterText: {
        width: 246,
        height: 24,
        fontFamily: "Avenir",
        fontSize: 16,
        fontWeight: "900",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    },
    NoAccountText: {
        paddingVertical: 15,
        textAlign: 'right',
        marginRight: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        marginRight: 10

    },
    goBack: {
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 14,
        color: 'red',
        padding: 5
    },
    KeyBoardView: {
        flex: 1,
    },
    NeatLogo: {
        maxWidth: 250,
        maxHeight: 365,
        marginTop:-75,
        flex: 1,
        alignSelf: 'center'
    },
    NeatLogoContainer: {
        alignSelf: 'center'
    }

});























/*import React, { Component } from 'react';
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


  }
}

Hub.listen('auth', listener);

Amplify.configure(awsmobile);

class Signin extends Component { }

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

export default withAuthenticator(Signin, {
  signUpConfig,
  usernameAttributes
});*/




