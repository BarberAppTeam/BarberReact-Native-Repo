import React, { Component } from 'react';
import { View, 
    Text, 
    TextInput, 
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Button,
    Image
} from 'react-native';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
//Add StormPath dependencies Here
//Dependencies for User Authentication:


// ClientID: 0oa1k8ligc7pzlVuF357
// Org URL: https://dev-835108.okta.com


/*
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';
*/

// ClientID: 0oa1k8ligc7pzlVuF357
// Org URL: https://dev-835108.okta.com

export default class LoginForm extends Component {
 
  static navigationOptions = {
    header: null
  }
  render() {
    return (

          <KeyboardAwareScrollView >
            < Image source = {require('./barbershop.png')}style = {styles.CombScissor}
            />
          <View style={styles.container}>
            
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
                style = {styles.Username}/>
            
             
              
    
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
        
          <TouchableOpacity>
            < Text 
              style={styles.SignInContainer}
              onPress={()=> this.props.navigation.navigate('Home')}>
              Log In </Text>
            < Text 
           style={styles.RegisterContainer}
           onPress={() => this.props.navigation.navigate('Registration')}>
            Register </Text>
            <Text
            style={styles.GoBackContainer}
            onPress = {() => this.props.navigation.navigate('Intro3')}>
              Go Back </Text>
        </TouchableOpacity>
        
        <Text style={styles.NoAccountText}> Don't Have an Account? Sign Up!</Text>
      
      </View>
      </KeyboardAwareScrollView >
      
    )
  }
}

/*
//User Authentication:

/*const config = {
  issuer: 'https://${yourOktaDomain}/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '{clientId}',
  pkce: true
}

//User Authentication

class App extends Component {
  render() {
    return (
      <Router>
        <Security {...config}>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}
*/ 
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
    state ={
        username: '',
            password:'',
            isLoggingIn: false,
            message: ''
        }

    _userLogin =() =>{
        this.setState({isLogginIn:true, message:''});

    var params ={
        username:this.state.username,
        password:this.state.password,
        grant_type:'password'
    };

    var formBody = [];
    for (var property in params) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    var proceed = false;
        fetch("https://”+Environment.CLIENT_API+”/oauth/token", {
            method: "POST", 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
          })
          .then((response) => response.json())
          .then((response) => {
              if (response.error) this.setState({message: response.message});
              else proceed = true;
          })
          .then(() => {
              this.setState({isLoggingIn: false})
              if (proceed) this.props.onLoginPress();
          })
          .done();
*/

const styles = StyleSheet.create({
    container:{
        padding:20,
        marginTop:75,
        flex:1,
        paddingHorizontal: 30,
        marginBottom:50
    },
    Username: {
        height: 40,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        color: '#000000',
        paddingHorizontal: 10,
        borderBottomWidth: .5

      },
      Password: {
        height: 40,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        color: '#000000',
        paddingHorizontal: 10,
        borderBottomWidth: .5

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
        backgroundColor: '#000000',
        opacity: 0.9,
        fontSize: 16,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 5,
        marginBottom: 1,
        fontFamily: 'Avenir Next',
        color: '#ffffff',
        textAlign: 'center'
      },
      RegisterContainer: {
        backgroundColor: '#DDDDDD',
        opacity: 0.9,
        fontSize: 16,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 5,
        marginBottom: 1,
        fontFamily: 'Avenir Next',
        color: 'black',
        textAlign: 'center'
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
    CombScissor:{
      marginTop: 50,
      marginLeft:50,
      maxHeight:200,
      maxWidth:300,
      resizeMode:'center'

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
