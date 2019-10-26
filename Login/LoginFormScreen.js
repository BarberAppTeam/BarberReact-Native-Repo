import React, { Component } from 'react';
import { View, 
    Text, 
    TextInput, 
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Button,
} from 'react-native';
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

class LoginForm extends Component {
  render() {
    return (
    /*KeyboardavoidingView allows the keyboad to adjust to the form
    so that it wont be over the text input, over the username and password fields*/
          <View style={styles.container}>
              <StatusBar
                barStyle="light-content"
                />


             <TextInput 
                placeholder='Username or Email'
                placeholderTextColor = 'rgb(0,0,0)'
                /*After a user enters their username it will give the option to
                go to the next field*/
                returnKeyType="Next"
                onSubmitEditing={()=>this.passwordInput.focus()}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.Username}
                />

    
                <TextInput 
                placeholder='Password'
                placeholderTextColor='rgb(0,0,0)'
                // ''
                returnKeyType='Go'
                securedTextEntry
                style={styles.Password}
                //stores password input
                //ref={()=> this.passwordInput = Input}
                />
        <TouchableOpacity style={styles.buttonContainer }>
        <Button title='Sign In'
              onPress={()=> this.props.navigation.popToTop()}/>

           < Button title = 'Register'
           style={styles.buttonContainer}
           onPress = {
             () => this.props.navigation.navigate('Registration')
           }
           />
        </TouchableOpacity>

      
      </View>
    );
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
        marginTop:475,
        flex:1,
    },
    errorMessage:{
        fontSize:14,
        color:'red',
        padding:5
        },
    Username:{
        height:40,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        color: '#000000',
        paddingHorizontal: 10,
        
    },
    Password: {
      height: 40,
      backgroundColor: '#FFFFFF',
      marginBottom: 5,
      color: '#000000',
      paddingHorizontal: 10,
      
    },

    buttonContainer:{
        backgroundColor:'#FFFFFF',
        paddingVertical: 5,
        paddingHorizontal:1,
        opacity:9,
        flexDirection:'row',
        flex:1,
        justifyContent:'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',

    },
    goBack:{
      paddingHorizontal:15,
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
})

export default LoginForm;