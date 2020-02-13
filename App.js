import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginForm from './Login/LoginFormScreen';
import GettingStartedScreen from './Login/GettingStartedScreen'
import FirstOnboarding from './OnBoarding/FirstOnboardingScreen'
import SecondOnboarding from './OnBoarding/SecondOnboardingScreen';
import ThirdOnboarding from './OnBoarding/ThirdOnboardingScreen';
import CustomTabBar from './screens/CustomTabNavigatorScreen';
import SignUp from './Login/Signup';
//import Amplify from 'aws-amplify';
//import awsmobile from './aws-exports';

//Amplify.configure(awsmobile);
//import { withAuthenticator } from 'aws-amplify-react-native';

export default class App extends React.Component {
  
  render(){
    return <AppContainer/>;
    } 
  }

//export default withAuthenticator(App);

const AppNavigator = createStackNavigator({
  GetStared: {screen:GettingStartedScreen},
  Intro:{screen: FirstOnboarding},
  Intro2:{screen: SecondOnboarding},
  Intro3:{screen: ThirdOnboarding},
  Form: {screen: LoginForm},
  HomeNav:{screen:CustomTabBar},
  SignUp:{screen:SignUp}
  
},
{
  // see next line
  headerMode: 'none',
},
{ 
  initialRouteNameParams: 'GetStarted'

});
const AppContainer = createAppContainer(AppNavigator);



