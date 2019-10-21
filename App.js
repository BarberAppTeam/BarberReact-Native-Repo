import React from 'react';
import { 
  Text, 
  View,
  AppRegistry,
  StyleSheet
  
} from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginForm from './LoginForm'
import LoginScreen from './LoginScreen'


 class App extends React.Component {
  render(){
    return(
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login:LoginScreen,
  Form:LoginForm,
  
},
{ 
  initialRouteName: 'Login'

})

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;


