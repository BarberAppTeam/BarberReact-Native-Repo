import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginForm from './Login/LoginFormScreen';
import GettingStartedScreen from './Login/GettingStartedScreen'
import EnableLocation1Screen from './OnBoarding/EnableLocation1Screen'
import EnableLocation2Screen from './OnBoarding/EnableLocation2Screen'
import LocationInfo from './OnBoarding/LocationInfo'



export default class App extends React.Component {
  render(){
    return <AppContainer/>;
    } 
  }

const AppNavigator = createStackNavigator({
  GetStared: {screen:GettingStartedScreen},
  Form: {screen: LoginForm},
  Intro:{screen: EnableLocation1Screen},
  Intro2:{screen: EnableLocation2Screen},
  Intro3:{screen: LocationInfo},
  },
{ 
  initialRouteNameParams: 'GetStarted'

});
const AppContainer = createAppContainer(AppNavigator);



