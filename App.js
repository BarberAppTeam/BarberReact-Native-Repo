import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginForm from './Login/LoginFormScreen';
import GettingStartedScreen from './Login/GettingStartedScreen'
import FirstOnboarding from './OnBoarding/FirstOnboardingScreen'
import SecondOnboarding from './OnBoarding/SecondOnboardingScreen';
import ThirdOnboarding from './OnBoarding/ThirdOnboardingScreen';



export default class App extends React.Component {
  render(){
    return <AppContainer/>;
    } 
  }

const AppNavigator = createStackNavigator({
  GetStared: {screen:GettingStartedScreen},
  Form: {screen: LoginForm},
  Intro:{screen: FirstOnboarding},
  Intro2:{screen: SecondOnboarding},
  Intro3:{screen: ThirdOnboarding},
  },
{ 
  initialRouteNameParams: 'GetStarted'

});
const AppContainer = createAppContainer(AppNavigator);



