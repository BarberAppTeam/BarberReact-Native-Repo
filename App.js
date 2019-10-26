import React from 'react';
import { 
  Text, 
  View,
  AppRegistry,
  StyleSheet
  
} from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginForm from './Login/LoginFormScreen'
import LoginScreen from './Login/LoginScreen'
import EnableLocation1Screen from './OnBoarding/EnableLocation1Screen'
import EnableLocation2Screen from './OnBoarding/EnableLocation2Screen'
import GettingStartedScreen from './OnBoarding/GettingStarted'


 class App extends React.Component {
  render(){
    return(
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Intro:EnableLocation1Screen,
  Intro2:EnableLocation2Screen,
  Intro3:GettingStartedScreen,
  Login:LoginScreen,
  Form:LoginForm,
  
},
{ 
  initialRouteName: 'Login'

})

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;


