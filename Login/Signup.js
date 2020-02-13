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
import Amplify, { Auth } from 'aws-amplify';
import SafeAreaView from 'react-native-safe-area-view';
import { userInfo } from 'os';
import { View } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
//import { withAuthenticator, Authenticator } from 'aws-amplify-react-native';
//import { withOAuth } from "aws-amplify-react-native";
//import {GoogleSignin} from '@react-native-community/google-signin';


/*Auth.signUp({
    username,
    password,
    attributes: {
        email,          // optional
        phone_number,   // optional - E.164 number convention
        // other custom attributes 
    },
    validationData: []  //optional
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

// After retrieving the confirmation code from the user
Auth.confirmSignUp(username, code, {
    // Optional. Force user confirmation irrespective of existing alias. By default set to True.
    forceAliasCreation: true    
}).then(data => console.log(data))
  .catch(err => console.log(err));

Auth.resendSignUp(username).then(() => {
    console.log('code resent successfully');
}).catch(e => {
    console.log(e);
});*/

export default class LoginForm extends Component {

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

<KeyboardAwareScrollView style={styles.loginScreen} >

    <Image source={require('../OnBoarding/images/Neat.png')} style={styles.Pillar} />



    <View style={styles.rectangle}>



        <Ionicons style={styles.emailIcon} ios="ion-email" size={45} />
       

        


        <TouchableOpacity
            style={styles.RegisterContainer}
            onPress={() => this.props.navigation.navigate('Registration')}>
            <Text style={styles.RegisterText}> Register </Text>
        </TouchableOpacity>


        <Text style={styles.NoAccountText}> Don't Have an Account? Sign Up!</Text>
    </View>
</KeyboardAwareScrollView >
      
    )
  }
}


const styles = StyleSheet.create({

    loginScreen: {
        backgroundColor: '#dfe4ff'

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

    },
    container: {
        padding: 20,
        marginTop: 50,
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
        height: 50,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        color: '#000000',
        borderBottomWidth: .7,
        marginLeft: 80,
        marginRight: 80,
        marginVertical: 2,


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
    LoginText: {
        color: 'black',
        fontSize: 18

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
        height: 50,
        marginVertical: 10,
        borderRadius: 5
    },
    RegisterContainer: {
        
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
        paddingHorizontal: 90,
        width: 327,
        marginVertical: 5,
        borderRadius: 25,
        height: 50,
        backgroundColor: "#fa7268"
    },
    RegisterText: {
        color: 'white',
        fontSize: 18
    },
    NoAccountText: {
        paddingVertical: 15,
        textAlign: 'center',
        marginBottom: 10,
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
    errorMessage: {
        fontSize: 14,
        color: 'red',
        padding: 5
    },
    KeyBoardView: {
        flex: 1,
    },
    Pillar: {
        maxWidth: 250,
        maxHeight: 365,
        marginBottom: 50,
        marginTop: 60,
        marginVertical: 80,
        marginLeft: 80,
        colors: ['rgb(38,33,96)', 'rgb(144,38,142)']

    },
    GoBackContainer: {
        backgroundColor: '#FFFFFF',
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
        textAlign: 'center'
    }

})


