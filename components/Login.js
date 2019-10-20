//Add StormPath Code Here
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';
import React, {Component} from 'react';

//Dependencies for User Authentication:

/*
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';
*/

// ClientID: 0oa1k8ligc7pzlVuF357
// Org URL: https://dev-835108.okta.com
const styles = StyleSheet.create({
    scroll: {
        padding: 20
    },
    LoginText: {
    fontsize:27
    },
    PasswordText: {
    margin:7
    },
    errorMessage:{
    fontSize:14,
    color:'red',
    padding:5
    }

})  

export default class Login extends Component {
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


    render(); {
        return (
            <ScrollView
                style={styles.scroll}>
            
    
                <Text 
                style={styles.LoginText}>
                <TextInput placeholder='Username'/>
                <TextInput placeholder='Password'/>
                </Text>
                <View style={styles.PasswordText}/>
            
                {this.state.isLoggingIn && <ActivityIndicator/>
                //This is an indicator that shows if you are logging in
                }
                
                {!!this.state.message && (
                    <Text
                        style={styles.errorMessage}>
                        {this.state.message}
                    </Text>
                )};
            
                <Button 
                    //disabling the signin button while you're logging in and if the user doesn't set a username or password
                    disabled={this.state.isLogginIn||!this.state.username||!this.state.password}
                    onLoginPress={this._userLogin}
                    onPress={this.props.onLoginPress}
                    title="Submit" 
                />
    
            </ScrollView>
            
        );
        
    }
}};



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